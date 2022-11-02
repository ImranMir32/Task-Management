import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllTodo, updateTask } from "../../Redux/Slice/globalSlice";
import React, { useEffect } from "react";
import { FlatList } from "react-native-gesture-handler";

const ViewList = ({ navigation, data }) => {
  const { isLoading, token, isUpdated, taskList } = useSelector(
    (state) => state.global
  );

  const dispatch = useDispatch();

  const renderItem = ({ item }) => {
    //console.log("(viewlist)  title -> ", item.title);
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            const info = {
              id: item.id,
              title: item.title,
              description: item.description,
            };
            console.log(info);
            navigation.navigate("DisplayTask", { info: info });
          }}
        >
          <View style={styles.item_}>
            <Text>{item.title}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <>
      {isLoading ? (
        <ActivityIndicator size={50} />
      ) : (
        <View>
          <View
            contentContainerStyle={{
              flexGrow: 1,
            }}
            keyboardShouldPersistTaps="handled"
          >
            <View style={styles.items}>
              {console.log(taskList)}
              {<FlatList data={data} renderItem={renderItem} />}
            </View>
          </View>
        </View>
      )}
    </>
  );
};
export default ViewList;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e8eaed",
  },
  items: {
    margin: 20,
    marginBottom: 160,
  },
  item_: {
    marginTop: 10,
    marginBottom: 10,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
  },
});
