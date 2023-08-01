import {
  View,
  Text,
  TouchableOpacity,
  Image,
  VirtualizedList,
} from "react-native";
import React from "react";
import { StarIcon } from "react-native-heroicons/solid";
import { MapPinIcon } from "react-native-heroicons/outline";
import { urlFor } from "../../../sanity";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";

const RestaurantCard = ({
  id,
  imgUrl,
  title,
  rating,
  genre,
  address,
  short_description,
  dishes,
  long,
  lat,
}) => {
  const navigation = useNavigation();

  const handleRestaurantPress = () => {
    navigation.navigate("Restaurant", {
      id,
      imgUrl,
      title,
      rating,
      genre,
      address,
      short_description,
      dishes,
      long,
      lat,
    });
  };

  return (
    <TouchableOpacity onPress={handleRestaurantPress} style={styles.container}>
      <View style={{ marginRight: 4 }}>
        <Image
          style={styles.image}
          source={{
            uri: urlFor(imgUrl).url(),
          }}
        />
      </View>
      <View style={styles.shadow}>
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.genre}></View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;
