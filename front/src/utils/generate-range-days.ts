import dayjs from "dayjs";

export function generateDatesFromBeginning(){
    const dates = []
    
    const today = new Date()
    
    //inicio do ano ou do mes
    const firstDayYear = dayjs().startOf('year')

    const firstDayMonth = dayjs(today).startOf('month')

    let compareDate = firstDayMonth

    while(compareDate.isBefore(today)){
        dates.push(compareDate.toDate())
        compareDate = compareDate.add(1, 'day')
    }

    return dates
}