import * as Popover from '@radix-ui/react-popover'
import { ProgressBar } from './ProgressBar'
import clsx from 'clsx'

interface HabitDayProps{
    total: number,
    completed: number
}

export function HabitDay(props: HabitDayProps){
    const completionPercentage = Math.round((props.completed / props.total) * 100)

    return (
        <Popover.Root>
            <Popover.Trigger className={clsx('w-10 h-10 border rounded-lg', {
                'bg-completionGreen border-green-500': completionPercentage >= 80,
                'bg-completionGreenYellow border-r-green-400': completionPercentage >= 60 && completionPercentage < 80 ,
                'bg-completionYellow border-yellow-200': completionPercentage >= 40 && completionPercentage < 60,
                'bg-completionOrange border-orange-300': completionPercentage >= 20 && completionPercentage < 40,
                'bg-completionRed border-red-900': completionPercentage > 0 && completionPercentage < 20,
                'bg-habitDefaultBg border-habitDefaultBorder': completionPercentage == 0
            })} />

            <Popover.Portal>
                <Popover.Content className='min-w-[320px] p-6 rounded-2xl flex flex-col bg-habitDefaultBg'>
                    <span className='font-semibold text-habitLightText'>sexta-feira</span>
                    <span className='mt-1 font-extrabold leading-tight text-3xl'>01/09</span>

                    <ProgressBar progress={completionPercentage}/>

                    <Popover.Arrow height={8} width={16} className='fill-habitDefaultBg' />
                </Popover.Content>
            </Popover.Portal>
        </Popover.Root>
    )
}