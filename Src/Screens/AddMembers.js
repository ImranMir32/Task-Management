import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  TextInput,
  Keyboard,
  Alert,
} from "react-native";
import { Formik } from "formik";
import * as yup from "yup";
import uuid from "react-native-uuid";

import { useDispatch, useSelector } from "react-redux";

import {
  setShouldShowTitle,
  setTitle,
  setDescription,
  uploadTask,
  addNewMember,
} from "../Redux/Slice/globalSlice";

const signInSchema = yup.object({
  name: yup.string().required(),
  // description: yup.string().required(),
});

const AddMembers = ({ navigation }) => {
  const { user, title, shouldShowTitle, description, token } = useSelector(
    (state) => state.global
  );
  const dispatch = useDispatch();

  return (
    <View style={styles.back}>
      <Formik
        initialValues={{ name: "" }}
        validationSchema={signInSchema}
        onSubmit={(values, actions) => {
          actions.resetForm();
          const info = {
            name: values.name,
            token: token,
          };
          console.log("add member");

          dispatch(addNewMember(info));
        }}
      >
        {(props) => (
          <View style={styles.container}>
            <View>
              <Text style={styles.assign}>Add Members :</Text>
            </View>
            <TextInput
              style={styles.input}
              placeholder="Member name"
              onChangeText={props.handleChange("name")}
              onBlur={props.handleBlur("name")}
              value={props.values.name}
            />

            <Text style={styles.errorText}>
              {props.touched.name && props.errors.name}
            </Text>

            <View style={styles.boxs}>
              <TouchableOpacity
                onPress={() => {
                  navigation.goBack();
                }}
                style={styles.button}
              >
                <Text style={styles.text}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  props.handleSubmit();
                  console.log("yes");
                  if (
                    !props.errors.title &&
                    !props.errors.description &&
                    props.touched.title
                  )
                    navigation.goBack();
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
export default AddMembers;
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
    marginRight: 170,
    fontWeight: "bold",
    fontSize: 20,
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
