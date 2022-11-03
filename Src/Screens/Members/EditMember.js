import { Formik } from "formik";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useEffect } from "react";
import * as yup from "yup";

import { useDispatch, useSelector } from "react-redux";

import { addNewTask, editMember } from "../../Redux/Slice/globalSlice";

const signInSchema = yup.object({
  name: yup.string().required(),
});

const EditMember = ({ navigation, route }) => {
  const { token } = useSelector((state) => state.global);

  const dispatch = useDispatch();
  const name = route.params.info.name;
  const id = route.params.info.id;
  console.log(name);
  return (
    <View style={styles.back}>
      <Formik
        initialValues={{ name: name }}
        validationSchema={signInSchema}
        onSubmit={async (values, actions) => {
          actions.resetForm();
          console.log(values);
          const info = {
            name: values.name,
            // memberId: 1,
            id: id,
            token: token,
          };
          console.log("calling");
          dispatch(editMember(info));
          console.log("end");
          //
        }}
      >
        {(props) => (
          <View style={styles.container}>
            <View>
              <Text style={styles.assign}>Edit Member :</Text>
            </View>
            <TextInput
              style={styles.input}
              placeholder="Name"
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
                onPress={async () => {
                  props.handleSubmit();
                  console.log("yes");
                  if (!props.errors.name && props.touched.name) {
                    console.log("first");
                    navigation.goBack();
                  }
                }}
                style={styles.button}
              >
                <Text style={styles.text}>Save</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
};
export default EditMember;

const styles = StyleSheet.create({
  back: {
    height: "100%",
    width: "100%",
    backgroundColor: "#AADEFF",
  },
  container: {
    marginTop: 65,
    alignItems: "center",
    justifyContent: "center",
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
  req: {
    color: "red",
  },
  button: {
    height: 50,
    width: 100,
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,
    paddingHorizontal: 5,
    borderRadius: 25,
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
