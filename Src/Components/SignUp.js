import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Image,
  Text,
  Keyboard,
  Modal,
} from "react-native";
import { Formik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import {
  setUserName,
  // logIn,
  setShouldShowUser,
  setShouldShowError,
  setModalOpenSignUp,
  signUp,
} from "../Redux/Slice/globalSlice";

const signUpSchema = yup.object({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
  password2: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

const SignUp = ({ navigation }) => {
  const { name, email, password, password2 } = useSelector(
    (state) => state.global
  );
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{ name: "", email: "", password: "", password2: "" }}
        validationSchema={signUpSchema}
        onSubmit={(values, actions) => {
          actions.resetForm();
          dispatch(signUp(values));
        }}
      >
        {(props) => (
          <View>
            <View>
              <Text style={styles.text_}>Please fill-up the form :</Text>
            </View>
            <TextInput
              style={styles.input}
              placeholder="Enter Your name"
              onChangeText={props.handleChange("name")}
              onBlur={props.handleBlur("name")}
              value={props.values.name}
            />
            <Text style={styles.errorText}>
              {props.touched.name && props.errors.name}
            </Text>

            <TextInput
              style={styles.input}
              placeholder="Enter Your email"
              onChangeText={props.handleChange("email")}
              onBlur={props.handleBlur("email")}
              textContentType={"email"}
              value={props.values.email}
            />

            <Text style={styles.errorText}>
              {props.touched.email && props.errors.email}
            </Text>

            <TextInput
              style={styles.input}
              textContentType={"password"}
              placeholder="Password "
              onChangeText={props.handleChange("password")}
              onBlur={props.handleBlur("password")}
              value={props.values.password}
            />
            <Text style={styles.errorText}>
              {props.touched.password && props.errors.password}
            </Text>

            <TextInput
              style={styles.input}
              textContentType={"password"}
              placeholder="Confirm Password"
              onChangeText={props.handleChange("password2")}
              onBlur={props.handleBlur("password2")}
              value={props.values.password2}
            />
            <Text style={styles.errorText}>
              {props.touched.password2 && props.errors.password2}
            </Text>

            <TouchableOpacity
              onPress={() => {
                props.handleSubmit();
                console.log("yes");
                if (
                  !props.errors.name &&
                  !props.errors.email &&
                  !props.errors.password &&
                  !props.errors.password2 &&
                  props.touched.name
                ) {
                  dispatch(setShouldShowError(false));
                  dispatch(setModalOpenSignUp(false));
                }
              }}
              style={styles.button}
            >
              <Text style={styles.text}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
};
export default SignUp;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#9DCEFF",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  modalContent: {
    flex: 1,
    backgroundColor: "blue",
  },
  errorText: {
    color: "red",
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    width: 250,
    backgroundColor: "#fff",
    borderRadius: 60,
    borderColor: "#c0c0c0",
    borderWidth: 1,
  },

  button: {
    height: 50,
    width: 200,
    marginLeft: 23,
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 2,
    borderRadius: 15,
    elevation: 5,
    backgroundColor: "white",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "black",
  },
  text_: {
    marginBottom: 5,
    fontSize: 17,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "black",
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
    marginLeft: 33.5,
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});
