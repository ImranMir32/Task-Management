import { useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllTodo, getAllMembers } from "../../Redux/Slice/globalSlice";

import ViewList from "./ViewList";

const Task = ({ navigation }) => {
  const { token, isUpdated } = useSelector((state) => state.global);
  const taskList = useSelector((state) => state.global.taskList?.tasks);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllTodo(token));
    dispatch(getAllMembers(token ));
  }, []);
  useEffect(() => {
    if (isUpdated) dispatch(fetchAllTodo(token));
  }, [isUpdated]);

  return (
    <View style={styles.container}>
      <Text style={styles.text_}>All tasks</Text>
      <Text style={styles.text__}>You will find all tasks here</Text>
      <View style={styles.add}>
        <Text style={styles.text_}>Here is all Tasks : </Text>
        <TouchableOpacity
          onPress={async () => {
            navigation.navigate("Add");
          }}
          style={styles.button}
        >
          <Text style={styles.text}>Add New</Text>
        </TouchableOpacity>
      </View>
      <ViewList navigation={navigation} data={taskList} />
    </View>
  );
};
export default Task;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#9DCEFF",
    flex: 1,
  },
  logo: {
    marginBottom: 25,
  },
  logo_text: {
    fontSize: 20,
    fontWeight: "bold",
  },
  tinyLogo: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  boxs: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    marginTop: 150,
    alignItems: "center",
    justifyContent: "center",
    margin: 15,
    height: 90,
    width: 120,
    paddingVertical: 12,
    paddingHorizontal: 2,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: "white",
  },
  add: {
    flexDirection: "row",
    marginTop: 20,
    // marginLeft: 10,
  },
  button: {
    height: 50,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 2,
    borderRadius: 10,
    elevation: 5,
    backgroundColor: "white",
  },
  text__: {
    marginLeft: 15,
    fontSize: 18,
  },
  text_: {
    marginLeft: 15,
    marginTop: 12,
    fontSize: 20,
    lineHeight: 25,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "black",
  },
  text: {
    fontSize: 15,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "black",
  },
});
