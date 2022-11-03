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

import { editTask } from "../../Redux/Slice/globalSlice";

const signInSchema = yup.object({
  title: yup.string().required(),
  description: yup.string(),
});

const EditTask = ({ navigation, route }) => {
  const { token } = useSelector((state) => state.global);

  const dispatch = useDispatch();
  const title = route.params.info.title;
  const description = route.params.info.description;
  const memberId = route.params.info.memberId;
  const id = route.params.info.id;
  console.log(title);
  return (
    <View style={styles.back}>
      <Formik
        initialValues={{ title: title, description: description }}
        validationSchema={signInSchema}
        onSubmit={async (values, actions) => {
          actions.resetForm();
          console.log(values);
          const info = {
            title: values.title,
            description: values.description,
            memberId: memberId,
            id: id,
            token: token,
          };
          //  console.log("calling");
          dispatch(editTask(info));
          // console.log("end");
          //
        }}
      >
        {(props) => (
          <View style={styles.container}>
            <View>
              <Text style={styles.assign}>Edit Task :</Text>
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

            {/* <View>
            <Text style={styles.assign}>Assign To:</Text>
          </View> */}
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
                  if (!props.errors.title && props.touched.title) {
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
export default EditTask;

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
  boxs: {
    flexDirection: "row",
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
