import * as Checkbox from "@radix-ui/react-checkbox";
import { Check } from "phosphor-react";
import { FormEvent, useState } from "react";
import { api } from "../lib/axios";

const availableWeekDays = [
    'Domingo',
    'Segunda-Feira',
    'Terça-Feira',
    'Quarta-Feira',
    'Quinta-feira',
    'Sexta-Feira',
    'Sábado',
]

export function NewHabitForm(){
    const [title, setTitle] = useState('')
    const [weekDays, setWeekDays] = useState<number[]>([])

    async function createNewHabit(event: FormEvent){
        event.preventDefault()
         
        if(!title || weekDays.length === 0){
            return
        }

        await api.post('habits', {
            title,
            weekDays
        })

        setTitle('')
        setWeekDays([])

        alert('Hábito criado com sucesso!')
    }
    
    function handleToggleWeekDay(weekDay: number){
        if(weekDays.includes(weekDay)){
            const newArray = weekDays.filter(day => day !== weekDay)
            setWeekDays(newArray)
        }
        else{
            const newArray = [...weekDays, weekDay]
            setWeekDays(newArray)
        }
    }

    return (
        <form onSubmit={createNewHabit} className="w-full flex flex-col mt-6">
            <label htmlFor="title" className="font-semibold leading-tight">Qual seu comprometimento?</label>
            
            <input 
                type="text" 
                id="title" 
                placeholder="ex.: Academia, beber água, estudar, etc..." 
                autoFocus 
                className="p-4 rounded-lg mt-3 bg-habitLightColor text-white placeholder:text-habitLightText focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-600"
                onChange={event => setTitle(event.target.value)}
                value={title}/>

            <label htmlFor="" className="font-semibold leading-tight mt-4">
                Qual a recorrência?
            </label>

            <div className="flex flex-col gap-2 mt-3">
                {availableWeekDays.map((weekDay, index) => {
                    return(
                        <Checkbox.Root 
                            onCheckedChange={() => handleToggleWeekDay(index)} 
                            checked={weekDays.includes(index)}
                            key={weekDay} 
                            className='flex items-center gap-3 group focus:outline-none'>
                            
                            <div className='h-8 w-8 rounded-lg flex items-center justify-center bg-habitDefaultBg border-2 border-habitDefaultBorder group-data-[state=checked]:bg-green-600 group-data-[state=checked]:border-green-600 transition-colors group-focus:ring-2 group-focus:ring-green-600 group-focus:ring-offset-2 group-focus:ring-offset-green-600'>
                                <Checkbox.Indicator>
                                    <Check size={20} className='text-white'/>
                                </Checkbox.Indicator>
                            </div>
                            
                            <span className='text-white leading-tight'>
                                {weekDay}
                            </span>
                        </Checkbox.Root>
                    )
                })}
                
            </div>

            <button type="submit" className="mt-6 rounded-lg p-4 gap-3 flex items-center font-semibold bg-green-600 justify-center hover:bg-green-500 transition-colors   focus:outline-none  focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-400">
                <Check size={20} weight="bold" />
                Confirmar
            </button>           
        </form>
    )
}