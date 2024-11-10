import { Image, View } from "react-native";

function ImageGrid({ imageUrls }) {
  // console.log(imageUrls);
  return (
    <View 
      style={{
        flexDirection: "row",
        gap: 10,
        flexWrap: "wrap"
      }}
    >
      {imageUrls.map((imageUrl, index) => {
        return (
          <Image
            key={index}
            source= {{ uri: imageUrl }}
            style={{ 
              width: "30%", 
              height: 100,
              aspectRatio: 1, 
              backgroundColor: "orange" }}>
          </Image>
        )
      })}
    </View>
  )
}

export default ImageGrid;