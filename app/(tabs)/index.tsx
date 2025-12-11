import Heading from "@/components/Heading";
import CollectionSlider from "@/components/Slider";
import "@/global.css";
import { Image } from "expo-image";
import { Link } from "expo-router";
import {
  Dimensions,
  FlatList,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

const listItemsData = [
  {
    image: "https://cdn.nos.nl/image/2025/10/03/1277889/768x576a.jpg",
    title: "1 Titel van dit item, zodat je weet waar het over gaat",
  },
  {
    image: "https://cdn.nos.nl/image/2025/10/03/1277889/768x576a.jpg",
    title: "2 Titel van dit item, zodat je weet waar het over gaat",
  },
  {
    image: "https://cdn.nos.nl/image/2025/10/03/1277889/768x576a.jpg",
    title: "3 Titel van dit item, zodat je weet waar het over gaat",
  },
  {
    image: "https://cdn.nos.nl/image/2025/10/03/1277889/768x576a.jpg",
    title: "4 Titel van dit item, zodat je weet waar het over gaat",
  },
  {
    image: "https://cdn.nos.nl/image/2025/10/03/1277889/768x576a.jpg",
    title: "5 Titel van dit item, zodat je weet waar het over gaat",
  },
  {
    image: "https://cdn.nos.nl/image/2025/10/03/1277889/768x576a.jpg",
    title: "6 Titel van dit item, zodat je weet waar het over gaat",
  },
  {
    image: "https://cdn.nos.nl/image/2025/10/03/1277889/768x576a.jpg",
    title: "7 Titel van dit item, zodat je weet waar het over gaat",
  },
  {
    image: "https://cdn.nos.nl/image/2025/10/03/1277889/768x576a.jpg",
    title: "8 Titel van dit item, zodat je weet waar het over gaat",
  },
];

const verticalVideoList = [
  {
    image: "https://cdn.nos.nl/image/2025/10/03/1277855/576x768a.jpg",
    title: "1 mock vertical video title",
  },
  {
    image: "https://cdn.nos.nl/image/2025/10/03/1277855/576x768a.jpg",
    title: "2 mock vertical video title",
  },
  {
    image: "https://cdn.nos.nl/image/2025/10/03/1277855/576x768a.jpg",
    title: "3 mock vertical video title",
  },
  {
    image: "https://cdn.nos.nl/image/2025/10/03/1277855/576x768a.jpg",
    title: "4 mock vertical video title",
  },
  {
    image: "https://cdn.nos.nl/image/2025/10/03/1277855/576x768a.jpg",
    title: "5 mock vertical video title",
  },
  {
    image: "https://cdn.nos.nl/image/2025/10/03/1277855/576x768a.jpg",
    title: "6 mock vertical video title",
  },
];

export default function Index() {
  return (
    <ScrollView
      style={styles.page}
      {...(Platform.OS === "web" ? { touchAction: "pan-y" } : {})}
    >
      <Link href="/about">
        <View style={styles.imageContainer}>
          <Image
            source="https://cdn.nos.nl/image/2025/10/03/1277889/768x576a.jpg"
            style={styles.image}
          />
          <Text style={styles.imageTitle}>
            Titel van dit item, zodat je weet waar het over gaat
          </Text>
        </View>
      </Link>
      <View style={styles.imageSubContainer}>
        <View style={styles.subImageContainer}>
          <Image
            source="https://cdn.nos.nl/image/2025/10/03/1277889/768x576a.jpg"
            style={styles.subImage}
          />
          <Text style={styles.subImageTitle}>Titel van deze subtopstory</Text>
        </View>
        <View style={styles.subImageContainer}>
          <Image
            source="https://cdn.nos.nl/image/2025/10/03/1277889/768x576a.jpg"
            style={styles.subImage}
          />
          <Text style={styles.subImageTitle}>
            Titel van deze subtopstory die wat langer is
          </Text>
        </View>
      </View>
      <View style={styles.listitemList}>
        {listItemsData.map((item, index) => (
          <View style={styles.listitem} key={index}>
            <Image source={item.image} style={styles.listitemImage} />
            <Text style={styles.listitemTitle}>{item.title}</Text>
          </View>
        ))}
      </View>
      <View>
        <FlatList
          style={styles.verticalVideoList}
          data={verticalVideoList}
          keyExtractor={(item) => item.title}
          horizontal
          renderItem={({ item }) => (
            <View style={styles.verticalVideoItem}>
              <Image source={item.image} style={styles.verticalVideoImage} />
              <Text style={styles.verticalVideoItemTitle}>{item.title}</Text>
            </View>
          )}
        />
      </View>
      <View style={styles.listitemList}>
        {listItemsData.map((item, index) => (
          <View style={styles.listitem} key={index}>
            <Image source={item.image} style={styles.listitemImage} />
            <Text style={styles.listitemTitle}>{item.title}</Text>
          </View>
        ))}
      </View>
      <Link href="/about">
        <View style={styles.imageContainer}>
          <Image
            source="https://cdn.nos.nl/image/2025/10/03/1277889/768x576a.jpg"
            style={styles.image}
          />
          <Text style={styles.imageTitle}>
            Titel van dit item, zodat je weet waar het over gaat
          </Text>
        </View>
      </Link>
      <View style={styles.listitemList}>
        {listItemsData.map((item, index) => (
          <View style={styles.listitem} key={index}>
            <Image source={item.image} style={styles.listitemImage} />
            <Text style={styles.listitemTitle}>{item.title}</Text>
          </View>
        ))}
      </View>
      <View style={styles.collectionContainer}>
        <Heading style={styles.collectionHeading} level={2}>
          Collecties
        </Heading>
        {/* <FlatList
          style={styles.collectionList}
          data={listItemsData}
          keyExtractor={(item) => item.title}
          snapToAlignment="start"
          showsHorizontalScrollIndicator={false}
          decelerationRate="fast"
          horizontal
          renderItem={({ item }) => (
            <View style={styles.collectionListItem}>
              <Image source={item.image} style={styles.subImage} />
              <Text style={styles.subImageTitle}>{item.title}</Text>
            </View>
          )}
        /> */}
        <CollectionSlider data={listItemsData} />
      </View>
      <View style={styles.collectionContainer}>
        <Heading style={styles.collectionHeading} level={2}>
          Uitgelegd
        </Heading>
        <FlatList
          style={styles.collectionList}
          data={listItemsData}
          keyExtractor={(item) => item.title}
          horizontal
          renderItem={({ item }) => (
            <View style={styles.collectionListItem}>
              <Image source={item.image} style={styles.subImage} />
              <Text style={styles.subImageTitle}>{item.title}</Text>
            </View>
          )}
        />
      </View>
      <View style={styles.collectionContainer}>
        <Heading style={styles.collectionHeading} level={2}>
          Sport
        </Heading>
        <FlatList
          style={styles.collectionList}
          data={listItemsData}
          keyExtractor={(item) => item.title}
          horizontal
          renderItem={({ item }) => (
            <View style={styles.collectionListItem}>
              <Image source={item.image} style={styles.subImage} />
              <Text style={styles.subImageTitle}>{item.title}</Text>
            </View>
          )}
        />
      </View>
    </ScrollView>
  );
}

const subImageWidth = Dimensions.get("window").width / 2 - 24;

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#25292e",
    minHeight: "100%",
  },
  imageContainer: {
    width: "100%",
    height: "auto",
    aspectRatio: 4 / 3,
    position: "relative",
  },
  imageTitle: {
    color: "#ffffff",
    fontSize: 20,
    position: "absolute",
    bottom: 16,
    left: 16,
    right: 16,
  },
  imageSubContainer: {
    width: "100%",
    height: "auto",
    display: "flex",
    flexDirection: "row",
    gap: 16,
    padding: 16,
  },
  text: {
    color: "#fff",
  },
  image: {
    width: "100%",
    height: "auto",
    aspectRatio: 4 / 3,
  },
  subImageContainer: {
    width: subImageWidth,
    height: "auto",
    aspectRatio: 4 / 3,
    display: "flex",
  },
  subImageTitle: {
    color: "#ffffff",
    marginTop: 8,
  },
  subImage: {
    width: "100%",
    height: "auto",
    aspectRatio: 4 / 3,
  },
  listitemList: {
    marginTop: 40,
  },
  listitem: {
    display: "flex",
    flexDirection: "row",
    padding: 16,
    gap: 16,
    alignItems: "center",
    width: "100%",
    borderTopColor: "#444",
    borderTopWidth: 1,
  },
  listitemImage: {
    width: "30%",
    height: "auto",
    aspectRatio: 4 / 3,
  },
  listitemTitle: {
    color: "#ffffff",
    width: "65%",
  },
  verticalVideoList: {
    display: "flex",
    flexDirection: "row",
    paddingLeft: 16,
    paddingRight: 16,
    width: "100%",
    overflowX: "hidden",
  },
  verticalVideoItem: {
    position: "relative",
    height: 250,
    aspectRatio: 9 / 16,
    marginRight: 16,
  },
  verticalVideoImage: {
    aspectRatio: 9 / 16,
    width: "100%",
  },
  verticalVideoItemTitle: {
    color: "#ffffff",
    position: "absolute",
    bottom: 8,
    left: 8,
    right: 8,
  },
  collectionContainer: {
    marginBottom: 24,
  },
  collectionList: {
    display: "flex",
    flexDirection: "row",
    paddingLeft: 16,
    paddingRight: 16,
    width: "100%",
    overflowX: "hidden",
  },
  collectionListItem: {
    width: subImageWidth,
    height: "auto",
    display: "flex",
    marginRight: 16,
  },
  collectionHeading: {
    color: "#ffffff",
    marginLeft: 16,
  },
});
