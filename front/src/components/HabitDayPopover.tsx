import {useEffect, useState} from 'react'
import * as Checkbox from "@radix-ui/react-checkbox";
import { Check } from "phosphor-react";
import { api } from '../lib/axios';
import dayjs from 'dayjs';

interface PopoverProps{
    date: Date,
    onHabitsCompleted: (completed: number) => void
}

interface HabitsInfo{
    possibleHabits: Array<{
        id: string,
        title: string,
        created_at: string
    }>,
    completedHabits: string[]
}

export function HabitDayPopover( {date, onHabitsCompleted} : PopoverProps){
    const [habitsInfo, setHabitsInfo] = useState<HabitsInfo>()
    
    useEffect(() => {
        api.get('day', {
            params: {
                date: date.toISOString()
            }
        }).then(response => {
            setHabitsInfo(response.data)
        })
    }, [])

    const isDateinPast = dayjs(date).endOf('day').isBefore(new Date())

    async function handleToggleHabit(habitId: string){
        await api.patch(`/habits/${habitId}/toggle`)
        const isCompleted = habitsInfo!.completedHabits.includes(habitId)

        let completed: string[] = []

        if(isCompleted){
            completed = habitsInfo!.completedHabits.filter(id => id !== habitId) 
        }
        else{
            completed = [...habitsInfo!.completedHabits, habitId]
        }

        setHabitsInfo({
            possibleHabits: habitsInfo!.possibleHabits,
            completedHabits: completed
        })

        onHabitsCompleted(completed.length)
    }

    return (
        <div className='mt-6 flex flex-col gap-3'>
            {habitsInfo?.possibleHabits.map(habit => {
                return (
                    <Checkbox.Root 
                        key={habit.id} 
                        className='flex items-center gap-3 group focus:outline-none disabled:cursor-not-allowed' 
                        checked={habitsInfo.completedHabits.includes(habit.id)} 
                        disabled={isDateinPast} 
                        onCheckedChange={() => handleToggleHabit(habit.id)}> 
                        <div className='h-8 w-8 rounded-lg flex items-center justify-center bg-habitDefaultBg border-2 border-habitDefaultBorder group-data-[state=checked]:bg-green-600 group-data-[state=checked]:border-green-600 transition-colors group-focus:ring-2 group-focus:ring-green-600 group-focus:ring-offset-2 group-focus:ring-offset-green-600'>
                            <Checkbox.Indicator>
                                <Check size={20} className='text-white'/>
                            </Checkbox.Indicator>
                        </div>
                        
                        <span className='font-semibold text-xl text-white leading-tight group-data-[state=checked]:line-through group-data-[state=checked]:text-habitLightText'>
                            {habit.title}
                        </span>
                    </Checkbox.Root>
                )    
            })}
        </div> 
    )
}