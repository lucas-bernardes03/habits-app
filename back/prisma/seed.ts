import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

const uuid1 = '9a47dd76-46b1-11ee-be56-0242ac120002'
const uuid2 = '9a47e028-46b1-11ee-be56-0242ac120002'
const uuid3 = '9a47e1ae-46b1-11ee-be56-0242ac120002'

const creationDate1 = new Date('2023-08-01T00:00:00.000z')
const creationDate2 = new Date('2023-08-03T00:00:00.000z')
const creationDate3 = new Date('2023-08-10T00:00:00.000z')


async function main() {
    await prisma.day.deleteMany()
    await prisma.habit.deleteMany()

    await Promise.all([
        prisma.habit.create({
            data:{
                id: uuid1,
                title: 'Beber 2L de Água',
                created_at: creationDate1,
                weekDays: {
                    create: [
                        {week_day: 1},
                        {week_day: 2},
                        {week_day: 3},
                    ]
                }
            }
        }),

        prisma.habit.create({
            data: {
                id: uuid2,
                title: 'Bater uma gameplay',
                created_at: creationDate2,
                weekDays: {
                    create: [
                        {week_day: 3},
                        {week_day: 4},
                        {week_day: 5},
                    ]
                }
            }
        }),

        prisma.habit.create({
            data: {
                id: uuid3,
                title: 'Academia',
                created_at: creationDate3,
                weekDays: {
                    create: [
                        {week_day: 1},
                        {week_day: 2},
                        {week_day: 3},
                        {week_day: 4},
                        {week_day: 5},
                        {week_day: 6},
                    ]
                }
            }
        })
    ])

    await Promise.all([
        prisma.day.create({
            data: {
                date: new Date('2023-08-02T00:00:00.000z'),
                dayHabits: {
                    create: {
                        habit_id: uuid1
                    }
                }
            }
        }),

        prisma.day.create({
            data: {
                date: new Date('2023-08-04T00:00:00.000z'),
                dayHabits: {
                    create: {
                        habit_id: uuid2
                    }
                }
            }
        }),

        prisma.day.create({
            data: {
                date: new Date('2023-08-09T00:00:00.000z'),
                dayHabits: {
                    create: [
                        { habit_id: uuid1 },
                        { habit_id: uuid2 }
                    ]
                }
            }
        }),
    ])

}

main().then(async () => {
    await prisma.$disconnect()
}).catch( async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
})