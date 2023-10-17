import * as Popover from '@radix-ui/react-popover'
import * as Checkbox from '@radix-ui/react-checkbox'
import { ProgressBar } from './ProgressBar'
import clsx from 'clsx'
import { Check } from 'phosphor-react'
import dayjs from 'dayjs'

interface HabitDayProps{
    date: Date
    total?: number,
    completed?: number
}

export function HabitDay({completed = 0, total = 0, date}: HabitDayProps){
    const completionPercentage = total > 0 ? Math.round((completed / total) * 100) : 0

    const dayNMonth = dayjs(date).format('DD/MM')
    const dayOfWeek = dayjs(date).format('dddd')

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
                    <span className='font-semibold text-habitLightText'>{dayOfWeek}</span>
                    <span className='mt-1 font-extrabold leading-tight text-3xl'>{dayNMonth}</span>

                    <ProgressBar progress={completionPercentage}/>

                    <div className='mt-6 flex flex-col gap-3'>
                        <Checkbox.Root className='flex items-center gap-3 group'>
                            
                            <div className='h-8 w-8 rounded-lg flex items-center justify-center bg-habitDefaultBg border-2 border-habitDefaultBorder group-data-[state=checked]:bg-green-600 group-data-[state=checked]:border-green-600'>
                                <Checkbox.Indicator>
                                    <Check size={20} className='text-white'/>
                                </Checkbox.Indicator>
                            </div>
                            
                            <span className='font-semibold text-xl text-white leading-tight group-data-[state=checked]:line-through group-data-[state=checked]:text-habitLightText'>
                                Testes
                            </span>
                        </Checkbox.Root>
                    </div>

                    <Popover.Arrow height={8} width={16} className='fill-habitDefaultBg' />
                </Popover.Content>
            </Popover.Portal>
        </Popover.Root>
    )
}