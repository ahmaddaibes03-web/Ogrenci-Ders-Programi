import { Text } from 'react-native';
import { styles } from '../styles';
export default function CourseInfo({ label, value }) {
 return <Text style={styles.text}>{label}: {value}</Text>;
}
