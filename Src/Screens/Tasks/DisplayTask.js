import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

const checkDescription = (description) => {
  if (description === "") {
    return false;
  } else {
    return true;
  }
};

export default DisplayTask = ({ navigation, route }) => {
  const { taskList } = useSelector((state) => state.global);
  console.log(route);
  const title = route.params.info.title;
  const description = route.params.info.description;
  const id = route.params.info.id;
  const memberId = route.params.info.memberId;
  const dispatch = useDispatch();

  return (
    <View style={styles.containers}>
      <View style={styles.show}>
        <View style={styles.need}>
          <Text style={styles.text}>Title:</Text>
          <Text style={styles.text_}>{title}</Text>
        </View>
        <View style={styles.need}>
          {checkDescription(description) ? (
            <View>
              <Text style={styles.text}>Description:</Text>
              <Text style={styles.text_}>{description}</Text>
            </View>
          ) : null}
        </View>
      </View>

      <View style={styles.confirm}>
        <TouchableOpacity
          onPress={() => {
            const info = {
              id: id,
              title: title,
              description: description,
              memberId: memberId,
            };
            navigation.navigate("EditTask", { info: info });
          }}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Edit</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Confirm", { id: id });
          }}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

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
