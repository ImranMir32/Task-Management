import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

import store from "./Src/Redux/Store/store";
import { Provider } from "react-redux";

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
import DeleteMember from "./Src/Screens/Members/DisplayMember";

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
          <Stack.Screen name="Add" component={AddTask} />
          <Stack.Screen name="AddMembers" component={AddMembers} />
          <Stack.Screen name="DisplayTask" component={DisplayTask} />
          <Stack.Screen name="Confirm" component={Confirm} />
          <Stack.Screen name="EditTask" component={EditTask} />
          <Stack.Screen name="DisplayMember" component={DisplayMember} />
          <Stack.Screen name="DeleteMember" component={DeleteMember} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

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
