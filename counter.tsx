import {Button, Text, View} from 'react-native';

interface icounter {
    handleIncrement: () => void;
    handleDecrement: () => void;
    passValue: () => void;
    value: number;
}

const Counter = ({
    handleIncrement,
    handleDecrement,
    passValue,
    value
}: icounter) => {
    return <View>
        <Text>{value}</Text>
        <Button title="Increment" onPress={handleIncrement} />
        <Button title="Decrement" onPress={handleDecrement} />
        <Button title="Pass Value" onPress={passValue} />
    </View>
}

export default Counter;