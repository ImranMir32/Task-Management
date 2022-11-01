import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

import { useDispatch, useSelector } from "react-redux";
import { clearData } from "../Redux/Slice/globalSlice";

const User = ({ navigation }) => {
  const { userName } = useSelector((state) => state.global);

  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Text style={styles.todo}>ToDo</Text>
      <View style={styles.bar}>
        <Text style={styles.userName}>Mr.{userName}</Text>
        <TouchableOpacity
          onPress={() => {
            dispatch(clearData());
            navigation.popToTop();
          }}
          style={styles.button}
        >
          <Image
            style={styles.tinyLogo}
            source={require("../Icons/logout.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default User;

//Style
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  todo: {
    marginLeft: 15,
    fontWeight: "bold",
    fontSize: 25,
  },
  bar: {
    flexDirection: "row",
    position: "absolute",
    right: 15,
  },
  userName: {
    fontWeight: "bold",
    fontSize: 25,
    marginRight: 10,
  },
  tinyLogo: {
    marginTop: 5,
    width: 25,
    height: 25,
  },
});
