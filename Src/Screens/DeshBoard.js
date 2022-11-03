import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

//import User from "./User";
import { useSelector } from "react-redux";

const DeshBoard = ({ navigation }) => {
  const { userName, shouldShowUser, token } = useSelector(
    (state) => state.global
  );

  return (
    <View style={styles.container}>
      {/* <User navigation={navigation} /> */}
      <View>
        <View style={styles.start}>
          <Text style={styles.startText}>
            Welcome to Task Management System
          </Text>
          <Text style={styles.startDescription}>
            This is an simple application for assigning tasks to members of the
            industry. Each members can be assigned different tasks.Users can
            create new tasks or add members. If wished tasks and members can
            also be deleted or edited accordingly.
          </Text>
        </View>
        <View style={styles.boxs}>
          <TouchableOpacity
            onPress={() => {
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
  start: {
    padding: 7,
  },
  startText: {
    fontWeight: "bold",
    fontSize: 21,
  },
  startDescription: {
    marginTop: 10,
    fontSize: 15,
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
    marginTop: 100,
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
