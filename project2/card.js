import { Text, View, Image, StyleSheet } from "react-native";

// import { Card } from "react-native-paper";
import { useState } from "react";
export default function ItemCard() {
  const [price, setprice] = useState(599.99);

  function handleClick() {
    setprice("$" + price.toString);
  }
  return (
    <View style={styles.card}>
      <View
        style={{
          flex: 1,
          padding: 0,
          marginTop: 3,
          marginBottom: 20,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          justifyContent: "center",
          alignItems: "center",
          width: 190,
        }}
      >
        <Image
          source={require("./src/images/img2.png")}
          style={{
            flex: 1,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            aspectRatio: 1,
          }}
        />
      </View>
      <View style={{ flex: 1, padding: 0 }}>
        <Text style={{ color: "white", fontWeight: "bold", marginBottom: 5 }}>
          Become a phamacy Technician
        </Text>
        <Text
          style={{ color: "#838386", fontFamily: "Cochin", marginVertical: 0 }}
        >
          Elon Musk
        </Text>

        <Text style={{ color: "white" }}>{price}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
});
