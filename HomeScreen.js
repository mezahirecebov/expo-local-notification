import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import * as Notifications from "expo-notifications";
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});
const HomeScreen = ({ navigation }) => {
  useEffect(() => {
    const subscription1 = Notifications.addNotificationReceivedListener(
      (notification) => {
        const data = notification.request.content.data.testdata;
        // navigation.push(data);
      }
    );
    const subscription2 = Notifications.addNotificationResponseReceivedListener(
      (response) => {
        const data = response.notification.request.content.data.testdata;
        navigation.push(data);
      }
    );

    return () => {
      subscription1.remove(), subscription2.remove();
    };
  }, []);

  const scheduleNotfication = () => {
    Notifications.scheduleNotificationAsync({
      content: {
        title: "Title",
        body: "Body",
        data: {
          testdata: "SheduleList",
        },
      },
      trigger: {
        seconds: 5,
      },
    });
  };
  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
      <Button
        title="Click for  ScheduleList screen"
        onPress={() => navigation.push("SheduleList")}
      />
      <Button
        title="Click for Set Notification"
        onPress={scheduleNotfication}
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
export default HomeScreen;
