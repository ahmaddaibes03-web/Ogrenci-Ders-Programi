import { View, Text, Pressable } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { courses } from '../../data/courses';
import CourseInfo from '../../components/CourseInfo';
import { styles } from '../../styles';
export default function CourseDetail() {
 const { id } = useLocalSearchParams();
 const course = courses.find(item => item.id === id);
 if (!course) return <View style={styles.container}><Text style={styles.title}>Ders bulunamadı</Text><Pressable style={styles.button} onPress={() => router.back()}><Text style={styles.buttonText}>Geri</Text></Pressable></View>;
 return <View style={styles.container}>
  <Text style={styles.title}>{course.name}</Text>
  <CourseInfo label="ID" value={course.id} />
  <CourseInfo label="Ders" value={course.name} />
  <CourseInfo label="Gün" value={course.day} />
  <CourseInfo label="Saat" value={course.time} />
  <CourseInfo label="Sınıf" value={course.classroom} />
  <CourseInfo label="Öğretim elemanı" value={course.teacher} />
  <Pressable style={styles.button} onPress={() => router.back()}><Text style={styles.buttonText}>Geri</Text></Pressable>
 </View>;
}
