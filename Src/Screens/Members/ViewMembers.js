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

const ViewMembers = ({ navigation, data }) => {
  const { isLoading, token, isUpdated, membersList } = useSelector(
    (state) => state.global
  );

  const dispatch = useDispatch();

  const renderItem = ({ item }) => {
    console.log("(viewlist)  title -> ", item.name);
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            const info = {
              id: item.id,
              name: item.name,
            };
            console.log(info);
            navigation.navigate("DisplayMember", { info: info });
          }}
        >
          <View style={styles.item_}>
            <Text>{item.name}</Text>
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
              {console.log(membersList)}
              {<FlatList data={data} renderItem={renderItem} />}
            </View>
          </View>
        </View>
      )}
    </>
  );
};
export default ViewMembers;
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
