import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  TextInput,
  Keyboard,
  Alert,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();
import User from "../Components/User";

import DeshBoard from "./DeshBoard";
import Task from "./Tasks/Task";
import Members from "./Members/Members";

export default function App() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          position: "absolute",
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          backgroudColor: "white",
          borderRadius: 15,
          height: 90,
          ...Styles.shadow,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={DeshBoard}
        options={{
          header: ({ navigation }) => {
            return (
              <View>
                <View
                  style={{
                    paddingTop: 40,
                    paddingBottom: 40,
                  }}
                >
                  <User navigation={navigation} />
                </View>
              </View>
            );
          },
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={require("../Icons/home.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#e32f45" : "#748c94",
                }}
              />
              <Text
                style={{
                  color: focused ? "#e32f45" : "#748c94",
                  fontSize: 12,
                }}
              >
                Home
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Task"
        component={Task}
        options={{
          header: ({ navigation }) => {
            return (
              <View>
                <View
                  style={{
                    paddingTop: 40,
                    paddingBottom: 40,
                  }}
                >
                  <User navigation={navigation} />
                </View>
              </View>
            );
          },
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={require("../Icons/tasks.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#e32f45" : "#748c94",
                }}
              />
              <Text
                style={{
                  color: focused ? "#e32f45" : "#748c94",
                  fontSize: 12,
                }}
              >
                Tasks
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Members"
        component={Members}
        options={{
          header: ({ navigation }) => {
            return (
              <View>
                <View
                  style={{
                    paddingTop: 40,
                    paddingBottom: 40,
                  }}
                >
                  <User navigation={navigation} />
                </View>
              </View>
            );
          },
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                // top: 10,
              }}
            >
              <Image
                source={require("../Icons/members.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#e32f45" : "#748c94",
                }}
              />
              <Text
                style={{
                  color: focused ? "#e32f45" : "#748c94",
                  fontSize: 12,
                }}
              >
                Members
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const Styles = StyleSheet.create({
  shadow: {
    shadowColor: "#7F5DF0",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  Header: {
    height: 100,
    width: 100,
    margin: 100,
  },
});

// //import Home from "./component/Home";
// //import Todo from "./component/Todo";
// //import CraeteList from "./component/CreateList";
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
// const Stack = createStackNavigator();
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// const Tab = createBottomTabNavigator();

// import Home from "./Src/Screens/Home";
// import DeshBoard from "./Src/Screens/DeshBoard";
// //import DisplayTask from "./component/DisplayTask";
// //import UpdateTask from "./component/UpdateTask";
// //import Confirm from "./component/Confirm";
// import store from "./Src/Redux/Store/store";
// import { Provider } from "react-redux";

// export default function App() {
//   return (
//     <Provider store={store}>
//       <NavigationContainer>
//         <Tab.Navigator initialRouteName="Home">
//           <Tab.Screen name="Home" component={Home} />
//           <Tab.Screen
//             name="DeshBoard"
//             component={DeshBoard}
//             options={{
//               headerLeft: () => null,
//               title: "My home",
//               headerStyle: {
//                 backgroundColor: "#f4511e",
//               },
//               headerTintColor: "#fff",
//               headerTitleStyle: {
//                 fontWeight: "bold",
//               },
//             }}
//           />
//           {/* <Stack.Screen name="Craete-List" component={CraeteList} />
//           <Stack.Screen name="DisplayTask" component={DisplayTask} />
//           <Stack.Screen
//             name="UpdateTask"
//             component={UpdateTask}
//             options={{
//               headerLeft: () => null,
//             }}
//           />
//           <Stack.Screen
//             name="Confirm"
//             component={Confirm}
//             options={{ headerLeft: () => null }}
//           /> */}
//         </Tab.Navigator>
//       </NavigationContainer>
//     </Provider>
//   );
// }
