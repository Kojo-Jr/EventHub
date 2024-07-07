import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, View } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { FlashList } from "@shopify/flash-list";
import { MainHeader, MiniHeader, SubHeader } from "../../../components/Headers";
import { SearchAndFilter } from "../../../components/TextInputs";
import { eventCategories } from "../../../mockData/eventsCategories.data";
import { events, featuredEvents } from "../../../mockData/allEvents.data";
import {
  EventsCard,
  InivteAd,
  FeaturedUpcomingEvents
} from "../../../components/Cards";
import { useNavigation } from "@react-navigation/native";

export default function MainScreen() {
  const navigation = useNavigation();

  const navigateEvent = () => {
    navigation.navigate("EventStack", {
      screen: "UpcomingEvents"
    });
  };

  const navigateNearbyEvent = () => {
    navigation.navigate("EventStack", {
      screen: "AllEvents"
    });
  };

  return (
    <View className="flex-1 bg-[#FAFAFA]">
      <StatusBar style="auto" />

      {/* Current Location, Menu and Notification */}
      <View style={Styles.headerContainer} className="bg-blue-700">
        <MainHeader />

        {/* Search and Filter */}
        <SearchAndFilter />
      </View>

      {/* Event Categories */}
      <View
        style={{
          // borderColor: "red",
          // borderWidth: 2,
          bottom: wp(15)
        }}
      >
        <FlatList
          data={eventCategories}
          renderItem={({ item }) => {
            return (
              <SubHeader
                name={item.name}
                backgroundColor={item.backgroundColor}
              />
            );
          }}
          keyExtractor={(item, id) => id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>

      {/* Featured Upcoming Events */}

      <FlashList
        ListHeaderComponent={() => {
          return (
            <View>
              <View style={Styles.upComingEventsContainer}>
                <MiniHeader
                  title="Upcoming Events"
                  navigationText="See All"
                  handleNavigation={navigateEvent}
                />

                {/* Upcoming Events */}
                <View
                  style={{
                    flexGrow: 1,
                    flexDirection: "row",
                    marginTop: wp(2)
                  }}
                >
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
              {/* Advertisment */}
              <View style={Styles.inviteContainer}>
                <InivteAd />
              </View>

              <View style={Styles.nearbyContainer} className="flex-grow">
                <MiniHeader
                  title="Nearby You"
                  navigationText="See All"
                  handleNavigation={navigateNearbyEvent}
                />

                <View className="flex-grow flex-col">
                  <FlashList
                    data={events}
                    renderItem={({ item }) => {
                      return (
                        <EventsCard
                          date={item.date}
                          featuredImage={item.featuredImage}
                          name={item.name}
                          location={item.location}
                        />
                      );
                    }}
                    estimatedItemSize={200}
                    showsVerticalScrollIndicator={false}
                  />
                </View>
              </View>
            </View>
          );
        }}
        estimatedItemSize={200}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const Styles = StyleSheet.create({
  headerContainer: {
    marginBottom: wp(10),
    height: wp(50),
    borderBottomLeftRadius: wp(10),
    borderBottomRightRadius: wp(10)
    // borderColor: "red",
    // borderWidth: 2
  },
  upComingEventsContainer: {
    marginTop: wp(-2),
    padding: wp(2)
    // marginBottom: wp(2)
    // borderColor: "red",
    // borderWidth: 2
  },
  inviteContainer: {
    marginTop: wp(2)
  },
  nearbyContainer: {
    marginTop: wp(6),
    padding: wp(2)
  }
});
