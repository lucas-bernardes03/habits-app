import { ActivityIndicator, View } from "react-native";

export function Loading(){
    return(
        <View style={{flex: 1, justifyContent: 'center', alignItems:'center', backgroundColor:'#181C29'}}>
            <ActivityIndicator color={'#FFFFFF'}/>
        </View>   
    )
}