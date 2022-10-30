import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Image,
  Text,
  Keyboard,
  ActivityIndicator,
  Modal,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
  setModalOpenSignUp,
  setShouldShowError,
  signIn,
} from "../Redux/Slice/globalSlice";
import { Formik } from "formik";
import * as yup from "yup";

import SignUp from "../Components/SignUp";

const signInSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

const Home = ({ navigation }) => {
  const { userName, shouldShowError, modalOpenSignUp, isLoading } = useSelector(
    (state) => state.global
  );
  const dispatch = useDispatch();

  return (
    <>
      {isLoading ? (
        <ActivityIndicator size={50} style={styles.loader} />
      ) : (
        <View style={styles.container}>
          <View style={styles.logo}>
            <Image
              style={styles.tinyLogo}
              source={require("../Icons/logo-1.png")}
            />
            <Text style={styles.logo_text}>Task-Management</Text>
          </View>

          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={signInSchema}
            onSubmit={(values, actions) => {
              actions.resetForm();
              dispatch(signIn(values));
            }}
          >
            {(props) => (
              <View>
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

                {shouldShowError ? (
                  <Text style={styles.errorText}>Wrong eamil or password</Text>
                ) : null}

                <View style={styles.center}>
                  <TouchableOpacity
                    onPress={async () => {
                      props.handleSubmit();
                      //  console.log("yes");
                      await setTimeout(() => {
                        if (
                          !props.errors.email &&
                          !props.errors.password &&
                          props.touched.email
                        ) {
                          if (userName !== "") {
                            navigation.navigate("Tabs");
                            dispatch(setShouldShowError(false));
                          } else {
                            console.log("wrong");
                            dispatch(setShouldShowError(true));
                          }
                        }
                      }, 1000);
                    }}
                    style={styles.button}
                  >
                    <Text style={styles.text}>Sign In</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </Formik>

          {/*  */}
          <View>
            <Modal visible={modalOpenSignUp} animationType="slide">
              <View style={styles.modalContent}>
                <SignUp />
              </View>
            </Modal>
            <View style={styles.acount}>
              <Text style={styles.acount}>Don't have an acount ?</Text>
              <TouchableOpacity
                onPress={() => dispatch(setModalOpenSignUp(true))}
              >
                <Text style={styles.acount_}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    </>
  );
};
export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#9DCEFF",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  loader: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  modalContent: {
    flex: 1,
    backgroundColor: "red",
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
    marginTop: 10,
    marginBottom: 5,
    fontSize: 15,
    lineHeight: 15,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "black",
  },
  acount: {
    flexDirection: "row",
    marginRight: 5,
  },
  acount_: {
    fontSize: 15,
    fontWeight: "bold",
    color: "blue",
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
