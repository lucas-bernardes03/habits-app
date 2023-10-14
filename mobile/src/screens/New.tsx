import { ScrollView, Text, TextInput, View } from "react-native";
import { BackButton } from "../components/BackButton";
import { Checkbox } from "../components/Checkbox";
import { useState } from "react";

const availableWeekDays = ['Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado', 'Domingo']

export function New(){
    const [ weekDays, setWeekDays ] = useState<number[]>([])

    function handleToggleWeekDay(weekDayIndex: number){
        if(weekDays.includes(weekDayIndex)){
            setWeekDays(prevState => prevState.filter(weekDay => weekDay !== weekDayIndex))
        }
        else{
            setWeekDays(prevState => [...prevState, weekDayIndex])
        }
    }

    return (
        <View className="flex-1 bg-background px-8 pt-16">
            <ScrollView showsVerticalScrollIndicator={false}>
                <BackButton />

                <Text className="mt-6 text-white font-extrabold text-3xl">
                    Criar Hábito
                </Text>

                <Text className="mt-6 text-white font-semibold text-base">
                    Qual seu comprometimento?
                </Text>

                <TextInput className="h-12 pl-4 rounded-lg mt-3 bg-habitDefaultBg text-white focus:border-2 focus:border-green-700"/>

                <Text className="mt-4 mb-3 text-white font-semibold text-base">
                    Qual a recorrência?
                </Text>

                {
                    availableWeekDays.map((weekDay, index) => (
                        <Checkbox key={weekDay} checked={weekDays.includes(index)} title={weekDay} onPress={() => handleToggleWeekDay(index)}/>

                    ))
                }
                


            </ScrollView>
        </View>
    )
}