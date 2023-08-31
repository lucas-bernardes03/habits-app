import { TouchableOpacity, Dimensions } from "react-native";

const WEEKDAYS = 7
const SCREENHORIZONTALPAD = (32*2)/5

export const DAY_MARGIN_BETWEEN = 8;
export const DAY_SIZE = (Dimensions.get('screen').width / WEEKDAYS) - (SCREENHORIZONTALPAD + 5);

export function HabitDay(){
    return (
        <TouchableOpacity 
            className="bg-habitDefaultBg rounded-lg border-2 m-1 border-habitDefaultBorder"
            style = {{width: DAY_SIZE, height: DAY_SIZE}}    
            activeOpacity={0.7}
        />
        

    )
}