import { View, Text, ScrollView } from "react-native";
import { Header } from "../components/Header";
import { HabitDay, DAY_SIZE } from "../components/HabitDay";
import{ generateDatesFromBeginning } from '../utils/generate-range-days'

const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];

const datesFromBeginning = generateDatesFromBeginning()
const minimumSummaryDates = 18*5 + 1;
const amountOfDaysToFill = minimumSummaryDates - datesFromBeginning.length

export function Home(){
    return(
        <View className="flex-1 bg-background px-8 pt-16">
            <Header />
            <View className="flex-row mt-6 mb-2">
                {
                    weekDays.map((day, i) => (
                        <Text 
                            key={`${day}-${i}`} 
                            className="text-zinc-400 text-xl font-bold text-center mx-1"
                            style={{width:DAY_SIZE}}
                            >
                                {day}
                            </Text>
                    ))
    
                }
            </View>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom: 100}}>
                <View className="flex-row flex-wrap">
                    {
                        datesFromBeginning.map(date => (
                            <HabitDay key={date.toISOString()}></HabitDay>
                        ))
                    }

                    {
                        amountOfDaysToFill > 0 && Array.from({length: amountOfDaysToFill})
                        .map((_, index) => (
                            <View key={index} 
                                className="bg-habitDefaultBg rounded-lg border-2 m-1 border-habitDefaultBorder opacity-40"
                                style = {{width: DAY_SIZE, height: DAY_SIZE}}    />
                        ))
                    } 
                </View>
            </ScrollView>
        </View>
    )
}