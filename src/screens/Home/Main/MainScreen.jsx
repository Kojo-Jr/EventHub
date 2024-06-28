import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { FlashList } from "@shopify/flash-list";
import InivteAd from "../../../components/Cards/InivteAd";
import FeaturedUpcomingEvents from "../../../components/Cards/FeaturedUpcomingEvents";
import MiniHeader from "../../../components/Headers/MiniHeader";
import MainHeader from "../../../components/Headers/MainHeader";
import SubHeader from "../../../components/Headers/SubHeader";
import SearchAndFilter from "../../../components/TextInputs/SearchAndFilter";
import { featuredEvents } from "../../../mockData/featuredEvents.data";

export default function MainScreen() {
  return (
    <View className="flex-1 bg-[#FAFAFA]">
      <StatusBar style="auto" />

      {/* Current Location, Menu and Notification */}
      <View
        style={{
          height: wp(60),
          borderBottomLeftRadius: wp(10),
          borderBottomRightRadius: wp(10)
        }}
        className="bg-blue-700"
      >
        <MainHeader />

        {/* Search and Filter */}
        <SearchAndFilter />

        {/* Sports, Music, Food */}
        <SubHeader />
      </View>

      {/* Featured Upcoming Events */}

      <View
        style={{
          marginTop: wp(10),
          padding: wp(5)
        }}
      >
        <MiniHeader title="Upcoming Events" navigationText="See All" />

        {/* Upcoming Events */}
        <View style={{ flexGrow: 1, flexDirection: "row" }}>
          <FlashList
            data={featuredEvents}
            renderItem={({ item }) => {
              return (
                <FeaturedUpcomingEvents
                  featuredImage={item.featuredImage}
                  name={item.name}
                  location={item.location}
                />
              );
            }}
            estimatedItemSize={200}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>

      {/* Advertisement */}
      <InivteAd />
      {/* Nearby */}
      <MiniHeader title="Nearby You" navigationText="See All" />
    </View>
  );
}
