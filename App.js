import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';
import ImageGrid from './ImageGrid'

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [imageUrls, setImageUrls] = useState(Array(6).fill(null));

  // Note that is not best practice using map() here
  const generateRandomImages = () => {
    const newImageUrls = imageUrls.map(() => `https://picsum.photos/200/200?random=${Math.random()}`);
    setImageUrls(newImageUrls);
  }

  return (
    <View style={styles.container}>
      <Text>{searchQuery}</Text>
      <ImageGrid imageUrls={imageUrls}></ImageGrid>
      <View style={{ flex: 0, flexDirection: "row", gap: 20 }}>
        <Text>Search Image:</Text>
        <TextInput 
          value={searchQuery}
          onChangeText={setSearchQuery}
          style={{ backgroundColor: "red", width: "60%" }}
        ></TextInput>
      </View>
      <View 
        style={{ 
          flex: 0, 
          flexDirection: "row", 
          justifyContent: "flex-end" 
        }}
      >
        <TouchableHighlight
          style={{ backgroundColor: "green" }}
          onPress={generateRandomImages}
        >
          <Text>Submit</Text>
        </TouchableHighlight>
      </View>
      <StatusBar style="auto" hidden />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 30,
    gap: 20
  },
});
