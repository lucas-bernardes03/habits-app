import { Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import { Feather } from '@expo/vector-icons'
import colors from "tailwindcss/colors";

interface Props extends TouchableOpacityProps { 
    checked ?: boolean
    title: string
}

export function Checkbox({title, checked = false, ...rest }: Props){
    return (
        <View>
            <TouchableOpacity activeOpacity={0.7} className="flex-row mb-2 items-center" {...rest}>
                {
                    checked ? 
                    <View className="h-8 w-8 bg-green-700 rounded-lg items-center justify-center">
                        <Feather name="check" size={20} color={colors.white}/>
                    </View>
                    :
                    <View className="h-8 w-8 bg-habitDefaultBg rounded-lg ">
                        
                    </View>
                }

                <Text className="text-white text-base ml-3">
                    {title}
                </Text>
                
            </TouchableOpacity>
        </View>
    )
}