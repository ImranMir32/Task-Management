// import {
//   View,
//   StyleSheet,
//   KeyboardAvoidingView,
//   TextInput,
//   TouchableOpacity,
//   Image,
//   Text,
//   Keyboard,
//   Modal,
//   Alert,
// } from "react-native";
// import { Formik } from "formik";
// import * as yup from "yup";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   setUserName,
//   // logIn,
//   setShouldShowUser,
//   setShouldShowError,
//   setModalOpenSignIn,
//   signIn,
// } from "../Redux/Slice/globalSlice";
// import Tabs from "../Screens/Tabs";
// import { useEffect, useState } from "react";

// const signInSchema = yup.object({
//   email: yup.string().email().required(),
//   password: yup.string().required(),
// });

// const SignIn = ({ navigation }) => {
//   const { userName, shouldShowError, name, email, password, password2 } =
//     useSelector((state) => state.global);
//   const dispatch = useDispatch();
//   //   useEffect(() => {
//   //     if (userName !== "") navigation.navigate("Tabs");
//   //   });

//   return (
//     <View style={styles.container}>
//       <Formik
//         initialValues={{ email: "", password: "" }}
//         validationSchema={signInSchema}
//         onSubmit={(values, actions) => {
//           actions.resetForm();
//           dispatch(signIn(values));
//         }}
//       >
//         {(props) => (
//           <View>
//             <TextInput
//               style={styles.input}
//               placeholder="Enter Your email"
//               onChangeText={props.handleChange("email")}
//               onBlur={props.handleBlur("email")}
//               textContentType={"email"}
//               value={props.values.email}
//             />

//             <Text style={styles.errorText}>
//               {props.touched.email && props.errors.email}
//             </Text>

//             <TextInput
//               style={styles.input}
//               textContentType={"password"}
//               placeholder="Password "
//               onChangeText={props.handleChange("password")}
//               onBlur={props.handleBlur("password")}
//               value={props.values.password}
//             />
//             <Text style={styles.errorText}>
//               {props.touched.password && props.errors.password}
//             </Text>

//             {shouldShowError ? (
//               <Text style={styles.errorText}>Wrong eamil or password</Text>
//             ) : null}

//             <TouchableOpacity
//               onPress={() => {
//                 props.handleSubmit();
//                 //  console.log("yes");
//                 setTimeout(() => {
//                   if (
//                     !props.errors.email &&
//                     !props.errors.password &&
//                     props.touched.email
//                   ) {
//                     if (userName !== "") {
//                       navigation.navigate("Tabs");
//                       dispatch(setModalOpenSignIn(false));
//                       dispatch(setShouldShowError(false));
//                     } else {
//                       console.log("true");
//                       dispatch(setShouldShowError(true));
//                     }
//                   }
//                 }, 1000);
//               }}
//               style={styles.button}
//             >
//               <Text style={styles.text}>Sign In</Text>
//             </TouchableOpacity>
//           </View>
//         )}
//       </Formik>
//     </View>
//   );
// };
// export default SignIn;

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: "#9DCEFF",
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   modalContent: {
//     flex: 1,
//     backgroundColor: "blue",
//   },
//   errorText: {
//     color: "red",
//   },
//   input: {
//     paddingVertical: 15,
//     paddingHorizontal: 15,
//     width: 250,
//     backgroundColor: "#fff",
//     borderRadius: 60,
//     borderColor: "#c0c0c0",
//     borderWidth: 1,
//   },
//   button: {
//     height: 50,
//     width: 100,
//     margin: 10,
//     alignItems: "center",
//     justifyContent: "center",
//     paddingVertical: 12,
//     paddingHorizontal: 2,
//     borderRadius: 15,
//     elevation: 5,
//     backgroundColor: "white",
//   },
//   text: {
//     fontSize: 16,
//     lineHeight: 21,
//     fontWeight: "bold",
//     letterSpacing: 0.25,
//     color: "black",
//   },
//   text_: {
//     marginTop: 10,
//     marginBottom: 5,
//     fontSize: 15,
//     lineHeight: 15,
//     fontWeight: "bold",
//     letterSpacing: 0.25,
//     color: "black",
//   },
//   logo: {
//     marginBottom: 25,
//   },
//   logo_text: {
//     fontSize: 20,
//     fontWeight: "bold",
//     //fontFamily:
//   },
//   tinyLogo: {
//     marginLeft: 33.5,
//     width: 100,
//     height: 100,
//     borderRadius: 50,
//   },
// });
