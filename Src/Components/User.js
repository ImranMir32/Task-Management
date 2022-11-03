import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

import { useDispatch, useSelector } from "react-redux";
import { clearData } from "../Redux/Slice/globalSlice";

const User = ({ navigation }) => {
  const { userName } = useSelector((state) => state.global);

  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <View style={styles.bar}>
        <Text style={styles.userName}>Mr.{userName}</Text>
        <TouchableOpacity
          style={styles.logout}
          onPress={() => {
            dispatch(clearData());
            navigation.popToTop();
          }}
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
  logout: {
    paddingLeft: 7,
    paddingRight: 7,
  },
  tinyLogo: {
    marginTop: 5,
    width: 25,
    height: 25,
  },
});
