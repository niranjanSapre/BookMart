import * as React from "react";
import { useFonts } from "expo-font";
import { View, useWindowDimensions } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";

const AllRoute = () => (
  <View
    style={{
      flex: 1,
      backgroundColor: "#F5F5F5",
      fontFamily: "Poppins",
    }}
  />
);

const BuyerRoute = () => (
  <View
    style={{ flex: 1, backgroundColor: "#F5F5F5", fontFamily: "Poppins" }}
  />
);
const SellerRoute = () => (
  <View
    style={{ flex: 1, backgroundColor: "#F5F5F5", fontFamily: "Poppins" }}
  />
);

const renderScene = SceneMap({
  first: AllRoute,
  second: BuyerRoute,
  third: SellerRoute,
});

export default function Chat() {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {
      key: "first",
      title: "All",
      tabBarTextFontFamily: "Poppins",
    },
    { key: "second", title: "Buyer", tabBarTextFontFamily: "Poppins" },
    { key: "third", title: "Seller", tabBarTextFontFamily: "Poppins" },
  ]);
  const [loaded] = useFonts({
    Poppins: require("../assets/fonts/Poppins-Regular.ttf"),
  });
  if (!loaded) {
    return null;
  }

  return (
    <TabView
      backgroundColor="black"
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={(props) => (
        <TabBar
          {...props}
          style={{
            backgroundColor: "#ED7966",
            tabBarTextFontFamily: "Poppins",
          }}
        />
      )}
    />
  );
}
