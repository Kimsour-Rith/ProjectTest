import * as React from "react";
import Card from "./card";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Button,
  SafeAreaView,
  Image,
  StatusBar
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={{ flex: 1 }}>
          <View style={{ flex: 5, backgroundColor: "red"}}>
            <Image
              source={require("./src/images/img.jpg")}
              style={{
                flex: 1,
                width: undefined, 
                height: undefined
              }}
            />
            <Text>Learning that fits</Text>
            <Text>Skills fotyour present and future</Text>
          </View>

          <View style={{ flex: 10, backgroundColor: "black" }}>
            <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 10 }}>
              <View style={{ marginTop: 20, marginBottom: 30 }}>
                <View style={{ alignItems: "center", justifyContent: "center" }}>
                  <Text
                    style={{ fontWeight: "bold", color: "white", fontSize: 24 }}>
                    Top Courses in Design
                  </Text>
                </View>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                >
                  <View style={styles.box}>
                    <Card />
                  </View>

                  <View style={styles.box}>
                    <Card />
                  </View>

                  <View style={styles.box}>
                    <Card />
                  </View>

                  <View style={styles.box}>
                    <Card />
                  </View>

                  <View style={styles.box}>
                    <Card />
                  </View>

                  <View style={styles.box}>
                    <Card />
                  </View>
                </ScrollView>
              </View>

              <View style={{ marginBottom: 20 }}>
                <View style={{ alignItems: "center", justifyContent: "center" }}>
                  <Text
                    style={{ fontWeight: "bold", color: "white", fontSize: 24 }}
                  >
                    Top coursed in Business
                  </Text>
                </View>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                >
                  <View style={styles.box}>
                    <Card />
                  </View>

                  <View style={styles.box}>
                    <Card />
                  </View>

                  <View style={styles.box}>
                    <Card />
                  </View>

                  <View style={styles.box}>
                    <Card />
                  </View>

                  <View style={styles.box}>
                    <Card />
                  </View>

                  <View style={styles.box}>
                    <Card />
                  </View>
                </ScrollView>
              </View>

              <View style={{ marginBottom: 20 }}>
                <View style={{ alignItems: "center", justifyContent: "center" }}>
                  <Text
                    style={{ fontWeight: "bold", color: "white", fontSize: 24 }}
                  >
                    Top Course in Development
                  </Text>
                </View>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                >
                  <View style={styles.box}>
                    <Card />
                  </View>

                  <View style={styles.box}>
                    <Card />
                  </View>

                  <View style={styles.box}>
                    <Card />
                  </View>

                  <View style={styles.box}>
                    <Card />
                  </View>

                  <View style={styles.box}>
                    <Card />
                  </View>

                  <View style={styles.box}>
                    <Card />
                  </View>
                </ScrollView>

              </View>
            </ScrollView>
          </View>















        </View>
      </ScrollView>
    </SafeAreaView>
  )
};
const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    marginHorizontal: 20,
  },
  box: {
    backgroundColor: "blue",
    margin: 10,
    borderRadius: 10,
    height: 300,
    width: 150,
  },
});
