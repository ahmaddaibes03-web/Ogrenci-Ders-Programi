import { useState } from 'react';
import { View, Text, FlatList, TextInput } from 'react-native';
import { courses } from '../data/courses';
import CourseCard from '../components/CourseCard';
import { styles } from '../styles';
export default function CourseList() {
 const [search, setSearch] = useState('');
 const filtered = courses.filter(item => item.name.toLocaleLowerCase('tr-TR').includes(search.toLocaleLowerCase('tr-TR')) || item.day.toLocaleLowerCase('tr-TR').includes(search.toLocaleLowerCase('tr-TR')));
 return <View style={styles.container}>
  <Text style={styles.title}>Öğrenci Ders Programı</Text>
  <TextInput style={styles.input} placeholder="Ders veya gün ara" value={search} onChangeText={setSearch} />
  <FlatList data={filtered} keyExtractor={item => item.id} renderItem={({ item }) => <CourseCard course={item} />} ListEmptyComponent={<Text style={styles.text}>Ders bulunamadı</Text>} />
 </View>;
}
