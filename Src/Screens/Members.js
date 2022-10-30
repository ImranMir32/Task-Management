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
import { useDispatch, useSelector } from "react-redux";
import {
  setUserName,
  // logIn,
  setShouldShowUser,
} from "../Redux/Slice/globalSlice";
import AddMembers from "./AddMembers";

const Members = ({ navigation }) => {
  const { userName, shouldShowUser } = useSelector((state) => state.global);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text style={styles.text_}>All Members</Text>
      <View style={styles.add}>
        <Text style={styles.text_}>Here is all Members : </Text>
        <TouchableOpacity
          onPress={async () => {
            navigation.navigate("Add-Members");
          }}
          style={styles.button}
        >
          <Text style={styles.text}>Add New</Text>
        </TouchableOpacity>
      </View>
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