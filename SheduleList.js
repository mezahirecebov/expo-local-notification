import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
const SheduleList = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>SheduleList</Text>
      <Button
        title="Click for  ScheduleList screen"
        onPress={() => navigation.popToTop()}
      />
      <StatusBar style="auto" />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around",
  },
});
export default SheduleList;
