import { View, StyleSheet, TouchableOpacity, Image, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

import store from "./Src/Redux/Store/store";
import { Provider } from "react-redux";

import User from "./Src/Components/User";

import Home from "./Src/Screens/Home";
import Tabs from "./Src/Screens/Tabs";

//Tasks
import AddTask from "./Src/Screens/Tasks/AddTask";
import DisplayTask from "./Src/Screens/Tasks/DisplayTask";
import EditTask from "./Src/Screens/Tasks/EditTask";
import Confirm from "./Src/Screens/Tasks/Confirm";

//Members
import AddMembers from "./Src/Screens/Members/AddMembers";
import DisplayMember from "./Src/Screens/Members/DisplayMember";
import DeleteMember from "./Src/Screens/Members/DeleteMember";
import EditMember from "./Src/Screens/Members/EditMember";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Tabs"
            component={Tabs}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Add"
            component={AddTask}
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
            }}
          />
          <Stack.Screen
            name="AddMembers"
            component={AddMembers}
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
            }}
          />
          <Stack.Screen
            name="DisplayTask"
            component={DisplayTask}
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
            }}
          />
          <Stack.Screen
            name="Confirm"
            component={Confirm}
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
            }}
          />
          <Stack.Screen
            name="EditTask"
            component={EditTask}
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
            }}
          />
          <Stack.Screen
            name="DisplayMember"
            component={DisplayMember}
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
            }}
          />
          <Stack.Screen
            name="DeleteMember"
            component={DeleteMember}
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
            }}
          />
          <Stack.Screen
            name="EditMember"
            component={EditMember}
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
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
