import { Text, StyleSheet, View, Alert } from "react-native";
import { TextInput } from "react-native-paper";
import { RoundedButton } from "../../components/RoundedButton";
import { useState } from "react";
import { fontSizes, spaces } from "../../utils/sizes";

// onSubmitEditing={({ nativeEvent }) => {
//   setTmpItem(nativeEvent.text);
// }} can be used to save text only afternative submit button press.

export const Focus = ({ addSubject }) => {
  const [tmpItem, setTmpItem] = useState(null);

  const onSubmit = () => {
    if (tmpItem) {
      addSubject(tmpItem);
    } else {
      Alert.alert("Info", "Please write something to focus on !");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>What would you like to focus on ?</Text>
        <View style={styles.inputContainer}>
          <TextInput
            label="Type Something !"
            onChangeText={(text) => setTmpItem(text)}
            style={{ flex: 1, marginRight: spaces.md }}
          />
          <RoundedButton onPress={onSubmit} title="+" size={50} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
  },
  innerContainer: {
    flex: 1,
    padding: spaces.md,
    justifyContent: "center",
  },
  inputContainer: {
    paddingTop: spaces.lg,
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: fontSizes.xl,
  },
});
