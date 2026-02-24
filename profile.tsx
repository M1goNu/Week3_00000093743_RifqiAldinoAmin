import { Text, View, TextInput} from 'react-native';
import { styles } from "./styleSheet";

interface iprofile {
    savedName: string;
    age: number;
}

const Profile = ({
    savedName,
    age
}: iprofile) => {
    return <View>
        <Text>Halo namaku, {savedName} !</Text>
        <Text>Umurku, {age} tahun</Text>
    </View>
};

export default Profile;