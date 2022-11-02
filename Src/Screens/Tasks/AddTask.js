import { Formik } from "formik";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import * as yup from "yup";

import { useDispatch, useSelector } from "react-redux";

import { addNewTask } from "../../Redux/Slice/globalSlice";

const signInSchema = yup.object({
  title: yup.string().required(),
  description: yup.string(),
});

const AddTask = ({ navigation }) => {
  const { token } = useSelector((state) => state.global);
  const dispatch = useDispatch();

  return (
    <View style={styles.back}>
      <Formik
        initialValues={{ title: "", description: "" }}
        validationSchema={signInSchema}
        onSubmit={async (values, actions) => {
          actions.resetForm();
          console.log(values);
          const info = {
            title: values.title,
            description: values.description,
            memberId: 1,
            token: token,
          };
          console.log("calling");
          dispatch(addNewTask(info));
          //
        }}
      >
        {(props) => (
          <View style={styles.container}>
            <View>
              <Text style={styles.assign}>Add Task :</Text>
            </View>
            <TextInput
              style={styles.input}
              placeholder="Task title"
              onChangeText={props.handleChange("title")}
              onBlur={props.handleBlur("title")}
              value={props.values.title}
            />

            <Text style={styles.errorText}>
              {props.touched.title && props.errors.title}
            </Text>

            <TextInput
              style={styles.input}
              placeholder="Task description"
              onChangeText={props.handleChange("description")}
              onBlur={props.handleBlur("description")}
              value={props.values.description}
            />
            <Text style={styles.errorText}>
              {props.touched.description && props.errors.description}
            </Text>

            <View>
              <Text style={styles.assign}>Assign To:</Text>
            </View>
            <View style={styles.boxs}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Task");
                }}
                style={styles.button}
              >
                <Text style={styles.text}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={async () => {
                  props.handleSubmit();
                  console.log("yes");
                  if (!props.errors.title && props.touched.title) {
                    console.log("first");
                    navigation.navigate("Task");
                  }
                }}
                style={styles.button}
              >
                <Text style={styles.text}>Submit</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
};
export default AddTask;
const styles = StyleSheet.create({
  container: {
    marginTop: 65,
    alignItems: "center",
    justifyContent: "center",
  },
  back: {
    height: "100%",
    width: "100%",
    backgroundColor: "#9DCEFF",
  },
  req: {
    color: "red",
  },

  assign: {
    margin: 10,
    marginRight: 190,
    fontWeight: "bold",
    fontSize: 25,
    // backgroundColor: "red",
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    width: 300,
    backgroundColor: "#fff",
    borderRadius: 60,
    borderColor: "#c0c0c0",
    borderWidth: 1,
  },
  boxs: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    margin: 30,
    width: 100,
    height: 50,
    marginTop: 55,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,
    paddingHorizontal: 5,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: "white",
  },
  text: {
    fontSize: 15,
    lineHeight: 15,
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
});
