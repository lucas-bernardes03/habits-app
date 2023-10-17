import * as Popover from '@radix-ui/react-popover'
import { ProgressBar } from './ProgressBar'
import clsx from 'clsx'
import dayjs from 'dayjs'
import { HabitDayPopover } from './HabitDayPopover'
import { useState } from 'react'

interface HabitDayProps{
    date: Date
    total?: number,
    defaultCompleted?: number
}

export function HabitDay({defaultCompleted = 0, total = 0, date}: HabitDayProps){
    const [completed, setCompleted] = useState(defaultCompleted)

    const completionPercentage = total > 0 ? Math.round((completed / total) * 100) : 0

    const dayNMonth = dayjs(date).format('DD/MM')
    const dayOfWeek = dayjs(date).format('dddd')

    function handleHabitsCompleted(completed: number){
        setCompleted(completed)
    }

    return (
        <Popover.Root>
            <Popover.Trigger className={clsx('w-10 h-10 border rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-600', {
                'bg-completionGreen border-green-500': completionPercentage >= 80,
                'bg-completionGreenYellow border-r-green-400': completionPercentage >= 60 && completionPercentage < 80 ,
                'bg-completionYellow border-yellow-200': completionPercentage >= 40 && completionPercentage < 60,
                'bg-completionOrange border-orange-300': completionPercentage >= 20 && completionPercentage < 40,
                'bg-completionRed border-red-900': completionPercentage > 0 && completionPercentage < 20,
                'bg-habitDefaultBg border-habitDefaultBorder': completionPercentage == 0
            })} />

            <Popover.Portal>
                <Popover.Content className='min-w-[320px] p-6 rounded-2xl flex flex-col bg-habitDefaultBg'>
                    <span className='font-semibold text-habitLightText'>{dayOfWeek}</span>
                    <span className='mt-1 font-extrabold leading-tight text-3xl'>{dayNMonth}</span>

                    <ProgressBar progress={completionPercentage}/>

                    <HabitDayPopover date={date} onHabitsCompleted={handleHabitsCompleted}/>

                    <Popover.Arrow height={8} width={16} className='fill-habitDefaultBg' />
                </Popover.Content>
            </Popover.Portal>
        </Popover.Root>
    )
}