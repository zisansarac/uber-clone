import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import '../../global.css';



export default function HomeScreen() {
  return (
     <SafeAreaView className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-bold text-red-500">
        Welcome to Nativewind!
      </Text>
      
    </SafeAreaView>
  );
}


