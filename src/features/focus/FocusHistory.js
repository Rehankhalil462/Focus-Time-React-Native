import React from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  SafeAreaView,
  ScrollView,
} from "react-native";

import { fontSizes, spaces } from "../../utils/sizes";

import { RoundedButton } from "../../components/RoundedButton";
import { colors } from "../../utils/colors";

const HistoryItem = ({ item, index }) => {
  return (
    <Text style={styles.historyItem(item.status)}>
      {index + 1} : {item.subject}
    </Text>
  );
};
export const FocusHistory = ({ focusHistory, onClear }) => {
  const clearHistory = () => {
    onClear();
  };
  return (
    <>
      <SafeAreaView style={{ flex: 0.5, alignItems: "center" }}>
        {focusHistory.length ? (
          <>
            <Text style={styles.title}>Things we've focused on !</Text>
            <FlatList
              contentContainerStyle={{
                flex: 1,
                paddingTop: 5,
                paddingLeft: spaces.sm,
                paddingRight: spaces.sm,
                alignItems: "center",
              }}
              style={{ flex: 1 }}
              data={focusHistory}
              renderItem={HistoryItem}
              keyExtractor={(item, index) => index.toString()}
            />
            <View style={styles.clearContainer}>
              <RoundedButton
                size={75}
                title="Clear"
                onPress={() => onClear()}
              />
            </View>
          </>
        ) : (
          <Text style={styles.title}>A minimal FocusTime app</Text>
        )}
      </SafeAreaView>
    </>
  );
};
const styles = StyleSheet.create({
  historyItem: (status) => ({
    color: status > 1 ? "#ff1a8c" : "#00ff99",
    fontSize: fontSizes.lg,
  }),
  title: {
    color: colors.white,
    fontSize: fontSizes.lg,
  },
  clearContainer: {
    alignItems: "center",
    padding: spaces.md,
  },
});
