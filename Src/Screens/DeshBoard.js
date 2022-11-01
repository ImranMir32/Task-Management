import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Image,
  Text,
  Keyboard,
} from "react-native";

//import User from "./User";
import { useDispatch, useSelector } from "react-redux";
import User from "../Components/User";
import {
  setUserName,
  // logIn,
  setShouldShowUser,
  fetchAllTodo,
} from "../Redux/Slice/globalSlice";

const checkUser = (userName) => {
  Keyboard.dismiss();
  if (userName === "") {
    return false;
  } else {
    return true;
  }
};

const DeshBoard = ({ navigation }) => {
  const { userName, shouldShowUser, token } = useSelector(
    (state) => state.global
  );
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <User navigation={navigation} />
      <View style={styles.logo}>
        <Image
          style={styles.tinyLogo}
          source={require("../Icons/logo-1.png")}
        />
        {/* <Text style={styles.logo_text}>Task-Management</Text> */}
      </View>

      <View>
        <Text>Get Started</Text>
        <View style={styles.boxs}>
          <TouchableOpacity
            onPress={() => {
              //dispatch(fetchAllTodo(token));
              navigation.navigate("Task");
            }}
            style={styles.box}
          >
            <Text>Tasks</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Members");
            }}
            style={styles.box}
          >
            <Text>Members</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default DeshBoard;

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
    //fontFamily:
  },
  tinyLogo: {
    //  marginLeft: 33.5,
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
});
