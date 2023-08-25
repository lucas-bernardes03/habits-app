interface HabitProps{
    completed: number
}

export function Habit(props: HabitProps){
    return (
        <div className="bg-slate-900 w-10 h-10 rounded m-2 flex items-center justify-center">{props.completed}</div>
    )
}