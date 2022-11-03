import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";

const DisplayMember = ({ navigation, route }) => {
  const { membersList } = useSelector((state) => state.global);
  // console.log("roubtee  --> ", route.params.info);
  const name = route.params.info?.name;
  const id = route.params.info?.id;

  return (
    <View style={styles.containers}>
      <View style={styles.show}>
        <View style={styles.need}>
          <Text style={styles.text}>Name:</Text>
          <Text style={styles.text_}>{name}</Text>
          <Text style={styles.text_}>{id}</Text>
        </View>
      </View>

      <View style={styles.confirm}>
        <TouchableOpacity
          onPress={() => {
            const info = {
              id: id,
              name: name,
            };
            navigation.navigate("EditMember", { info: info });
          }}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Edit</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            console.log("delte");
            navigation.navigate("DeleteMember", { id: id });
          }}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default DisplayMember;
const styles = StyleSheet.create({
  containers: {
    height: "100%",
    width: "100%",
    backgroundColor: "#AADEFF",
    flex: 1,
  },
  show: {
    margin: 50,
  },
  text: {
    fontSize: 25,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "black",
  },
  confirm: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    // paddingRight: 300,
  },
  button: {
    margin: 12,
    width: 100,
    height: 50,
    paddingVertical: 15,
    paddingHorizontal: 5,
    borderRadius: 15,
    elevation: 3,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  text__: {
    paddingLeft: 7,
    fontSize: 25,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "black",
  },
  text_: {
    marginTop: 10,
    marginBottom: 5,
    fontSize: 15,
    lineHeight: 15,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "black",
  },
  buttonText: {
    fontSize: 15,
    lineHeight: 15,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "black",
  },
  need: {
    marginTop: 40,
  },
});
