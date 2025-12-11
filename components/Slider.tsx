import React from "react";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

type Item = {
  id?: string | number;
  title: string;
  image: string | any;
  onPress?: () => void;
};

export default function CollectionSlider({
  data,
  itemWidth = 300,
  gap = 16,
}: {
  data: Item[];
  itemWidth?: number;
  gap?: number;
}) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={[
        styles.contentContainer,
        { paddingHorizontal: gap },
      ]}
    >
      {data.map((item, i) => (
        <Pressable
          key={item.id ?? i}
          onPress={item.onPress}
          style={[styles.card, { width: itemWidth, marginRight: gap }]}
        >
          <View style={[styles.imgPlaceholder, { width: itemWidth - 16 }]}>
            <Image
              source={
                typeof item.image === "string"
                  ? { uri: item.image }
                  : item.image
              }
              style={{ width: "100%", height: 120, borderRadius: 8 }}
              resizeMode="cover"
            />
          </View>
          <Text numberOfLines={2} style={styles.title}>
            {item.title}
          </Text>
        </Pressable>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  contentContainer: { alignItems: "center" },
  card: { borderRadius: 8, padding: 8, alignItems: "center" },
  imgPlaceholder: {
    height: 120,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "#333",
  },
  title: { marginTop: 8, color: "#fff", fontSize: 14, textAlign: "center" },
});
