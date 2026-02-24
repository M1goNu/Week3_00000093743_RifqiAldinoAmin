  import { useState } from 'react';
  import { Text, View, TextInput } from 'react-native';
  import Counter from './counter';
  import Profile from './profile';

  import { styles } from "./styleSheet";

  export default function App() {
    const [count, setCount] = useState(0);
    const [inputName, setInputName] = useState('');
    const [savedName, setSavedName] = useState('');
    const [age, setAge] = useState(0);

    const handleIncrement = () => {
      setCount(count + 1);
    }
    const handleDecrement = () => {
      setCount(count - 1);
    }

    const passValue = () => {
      setSavedName(inputName);
      setAge(count);
    }

    const handleProfile = (name) => {
      setInputName(name);
    }

    return (
      <View style={styles.container}>
        <Profile 
        savedName={savedName}
        inputName={inputName}
        age={age}
        handleChange={handleProfile} />

        <Counter 
        value={count}
        handleDecrement={handleDecrement}
        handleIncrement={handleIncrement}
        passValue={passValue}
        />

        <TextInput
        style={styles.input}
        value={inputName}
        onChangeText={handleProfile}
        placeholder="Input Your Name Here"
        placeholderTextColor="#999"
        />
      </View>
    );
  }

