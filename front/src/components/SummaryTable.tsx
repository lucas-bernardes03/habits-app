import { useEffect, useState } from "react"
import { generateDatesFromBeginning } from "../utils/generate-range-days"
import { HabitDay } from "./HabitDay"
import { api } from "../lib/axios"
import dayjs from "dayjs"

const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']

const dates = generateDatesFromBeginning()

const minimunDates = 18 * 7
const amountOfDaysToFill = minimunDates - dates.length

type Summary = {
    id: string,
    date: string,
    total: number,
    completed: number
}[]

export function SummaryTable(){
    const [summary, setSummary] = useState<Summary>([])
    
    useEffect(() => {
        api.get('summary').then(response => {
            setSummary(response.data)
        })
    }, [])

    return(
        < div className='w-full flex'>
            <div className='grid grid-rows-7 grid-flow-row gap-3'>
                {weekDays.map((day, i) => {
                    return(
                        <div key={`${day}-${i}`} className='text-zinc-400 text-xl h-10 w-10 font-bold flex items-center justify-center'>{day}</div>
                    )
                })}
            </div>

            <div className="grid grid-rows-7 grid-flow-col gap-3">
                {dates.map(date => {
                    const dayInSummary = summary.find(day => {
                        return dayjs(date).isSame(day.date, 'day')
                    })

                    return <HabitDay 
                        key={date.toString()} 
                        date={date}
                        total={dayInSummary?.total} 
                        completed={dayInSummary?.completed}/>
                })}
                
                {amountOfDaysToFill > 0 && Array.from({length: amountOfDaysToFill}).map((_, i)=>{
                    return <div key={i} className='w-10 h-10 bg-habitDefaultBg border border-habitDefaultBorder rounded-lg opacity-40 cursor-not-allowed'/>
                })}
            </div>
        </div>
    )
}