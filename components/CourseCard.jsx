import { Pressable, Text } from 'react-native';
import { router } from 'expo-router';
import { styles } from '../styles';
export default function CourseCard({ course }) {
 return <Pressable style={styles.card} onPress={() => router.push('/ders/' + course.id)}>
  <Text style={styles.name}>{course.name}</Text>
  <Text style={styles.text}>{course.day} • {course.time}</Text>
  <Text style={styles.text}>Sınıf: {course.classroom}</Text>
 </Pressable>;
}
