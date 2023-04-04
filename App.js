import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "./screens/Welcome";
import Register from "./screens/Register";
import Login from "./screens/Login";
import HomeScreen from "./screens/HomeScreen";
import Account from "./screens/Account";
import SellPageGenre from "./screens/Sell/SellPageGenre";
import SellPageBookDetails from "./screens/Sell/SellPageBookDetails";
import UploadPhotos from "./screens/Sell/UploadPhotos";
import Price from "./screens/Sell/Price";
//import ScreenNavigator from "./navigations/ScreenNavigation";
import Tabs from "./navigations/Tabs";
import StartSellingPage from "./screens/Sell/StartSellingPage";
import Capture from "./screens/Sell/Capture";
import ReviewPage from "./screens/Sell/ReviewPage";
import ISBNPage from "./screens/Sell/ISBNPage";
import Browse from "./screens/Sell/Browse";
import Buy1 from "./screens/Buy/Buy1";
import Settings from "./screens/Account/Settings";
import EditProfile from "./screens/Account/EditProfile";
import CustomerService from "./screens/Account/CustomerService";
import PostedProduct from "./screens/Account/PostedProduct";
import Chat from "./screens/Chat";
import OrderSummary from "./screens/Buy/OrderSummary";
import MyOrder from "./screens/Account/MyOrder";
import OrderDetails from "./screens/Account/OrderDetails";
import Support from "./screens/Account/Support";
import LegalAndAbout from "./screens/Account/LegalAndAbout";

const Stack = createNativeStackNavigator();
export default function App() {
  const [loaded] = useFonts({
    Poppins: require("./assets/fonts/Poppins-Regular.ttf"),
  });
  if (!loaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="HomeScreen" component={Tabs} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Account" component={Account} />
        <Stack.Screen name="PostedProduct" component={PostedProduct} />
        <Stack.Screen name="OrderSummary" component={OrderSummary} />
        <Stack.Screen name="MyOrder" component={MyOrder} />
        <Stack.Screen name="OrderDetails" component={OrderDetails} />
        <Stack.Screen name="Chat" component={Chat} />
        {/* <Stack.Screen name="SellPageGenre" component={SellPageGenre} /> */}

        <Stack.Screen
          name="SellPageBookDetails"
          component={SellPageBookDetails}
        />

        <Stack.Screen name="UploadPhotos" component={UploadPhotos} />
        <Stack.Screen name="Capture" component={Capture} />
        <Stack.Screen name="Browse" component={Browse} />
        <Stack.Screen name="Price" component={Price} />
        <Stack.Screen name="ReviewPage" component={ReviewPage} />
        <Stack.Screen name="ISBNPage" component={ISBNPage} />
        <Stack.Screen name="Buy1" component={Buy1} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
        <Stack.Screen name="CustomerService" component={CustomerService} />
        <Stack.Screen name="Support" component={Support} />
        <Stack.Screen name="LegalAndAbout" component={LegalAndAbout} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
