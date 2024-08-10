import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, View } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { FlashList } from "@shopify/flash-list";
import SearchAndFilter from "../../../components/TextInputs/SearchAndFilter";
import { eventCategories } from "../../../mockData/eventsCategories.data";
import { events, featuredEvents } from "../../../mockData/allEvents.data";
import { useNavigation } from "@react-navigation/native";
import { MainHeader, MiniHeader, SubHeader } from "../../../components/Headers";
import { EventsCard, FeaturedCards, InivteAd } from "../../../components/Cards";

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

      <FlashList
        ListHeaderComponent={() => (
          <View>
            <View style={Styles.headerContainer} className="bg-blue-700">
              <MainHeader />
              {/* Search and Filter */}

              <SearchAndFilter
                iconColor={"white"}
                placeholderTextColor={"white"}
              />
            </View>

            {/* Event Categories */}
            <View style={Styles.eventCategoriesContainer}>
              <FlatList
                data={eventCategories}
                renderItem={({ item }) => (
                  <SubHeader
                    name={item.name}
                    backgroundColor={item.backgroundColor}
                  />
                )}
                keyExtractor={(item, id) => id.toString()}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              />
            </View>

            {/* Featured Upcoming Events */}

            <View style={Styles.upComingEventsContainer}>
              <MiniHeader
                title="Upcoming Events"
                navigationText="See All"
                handleNavigation={navigateEvent}
              />
              {/* Upcoming Events */}
              <View style={Styles.upcomingEventsList}>
                <FlashList
                  data={featuredEvents}
                  renderItem={({ item }) => (
                    <FeaturedCards
                      featuredImage={item.featuredImage}
                      name={item.name}
                      location={item.location}
                    />
                  )}
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
            <View style={Styles.nearbyContainer}>
              <MiniHeader
                title="Nearby You"
                navigationText="See All"
                handleNavigation={navigateNearbyEvent}
              />
              <View style={Styles.nearbyEventsList}>
                <FlashList
                  data={events}
                  renderItem={({ item }) => (
                    <EventsCard
                      date={item.date}
                      featuredImage={item.featuredImage}
                      name={item.name}
                      location={item.location}
                    />
                  )}
                  estimatedItemSize={200}
                  showsVerticalScrollIndicator={false}
                />
              </View>
            </View>
          </View>
        )}
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
  },
  eventCategoriesContainer: {
    bottom: wp(15)
  },
  upComingEventsContainer: {
    marginTop: wp(-10),
    padding: wp(2)
  },
  upcomingEventsList: {
    flexDirection: "row",
    marginTop: wp(2)
  },
  inviteContainer: {
    marginTop: wp(2)
  },
  nearbyContainer: {
    marginTop: wp(6),
    padding: wp(2)
  },
  nearbyEventsList: {
    flexGrow: 1,
    flexDirection: "column"
  }
});
