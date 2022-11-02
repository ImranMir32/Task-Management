import { useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllTodo, getAllMembers } from "../../Redux/Slice/globalSlice";

import ViewMembers from "./ViewMembers";

const Members = ({ navigation }) => {
  const { token, isUpdated } = useSelector((state) => state.global);
  const membersList = useSelector((state) => state.global.membersList);
  console.log("list-->", membersList);

  const dispatch = useDispatch();
  useEffect(() => {
    console.log("calling");
    dispatch(getAllMembers(token));
  }, []);
  useEffect(() => {
    if (isUpdated) dispatch(getAllMembers(token));
  }, [isUpdated]);

  return (
    <View style={styles.container}>
      <Text style={styles.text_}>All tasks</Text>
      <Text style={styles.text__}>You will find all members here</Text>
      <View style={styles.add}>
        <Text style={styles.text_}>Here is all Members : </Text>
        <TouchableOpacity
          onPress={async () => {
            navigation.navigate("AddMembers");
          }}
          style={styles.button}
        >
          <Text style={styles.text}>Add New</Text>
        </TouchableOpacity>
      </View>
      <ViewMembers navigation={navigation} data={membersList} />
    </View>
  );
};
export default Members;

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
