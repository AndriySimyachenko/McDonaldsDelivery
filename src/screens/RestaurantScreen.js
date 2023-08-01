import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { urlFor } from "../../sanity";
import {
  ArrowLeftCircleIcon,
  ArrowLeftIcon,
} from "react-native-heroicons/outline";
import {
  ChevronRightIcon,
  MapPinIcon,
  QuestionMarkCircleIcon,
  StarIcon,
} from "react-native-heroicons/solid";
import DishRow from "../components/DishRow/DishRow";
import BasketIcon from "../components/BasketIcon/BasketIcon";
import { useDispatch } from "react-redux";
import { setRestaurant } from "../features/RestaurantSlice";
import { Colors, scale } from "../shared";

const RestaurantScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {
    params: {
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
    },
  } = useRoute();

  useLayoutEffect(() => {
    navigation.setOptions(
      {
        headerShown: false,
      },
      []
    );
  });

  useEffect(() => {
    dispatch(
      setRestaurant({
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
      })
    );
  }, [dispatch]);
  return (
    <>
      <BasketIcon />
      <ScrollView style={{ backgroundColor: Colors.yellow }}>
        <View style={{ position: "relative" }}>
          <Image
            source={{ uri: urlFor(imgUrl).url() }}
            style={{
              width: "100%",
              height: scale(250),
              backgroundColor: "grey",
              padding: 16,
              resizeMode: "cover",
            }}
          />
          <TouchableOpacity
            onPress={navigation.goBack}
            style={{
              position: "absolute",
              top: 56,
              left: 20,
              padding: 8,
              backgroundColor: "gray",
              borderRadius: 50,
            }}
          >
            <ArrowLeftIcon color="yellow" size={20} />
          </TouchableOpacity>
        </View>
        <View style={{ backgroundColor: "white" }}>
          <View style={{ paddingHorizontal: 16, paddingTop: 16 }}>
            <Text style={{ fontSize: 32, fontWeight: "bold" }}> {title}</Text>

            <Text style={{ color: "gray", marginTop: 8, paddingBottom: 16 }}>
              {short_description}
            </Text>
          </View>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              padding: 16,
              borderTopColor: "gray",
              borderTopWidth: 0.19,
              justifyContent: "space-between",
            }}
          >
            <QuestionMarkCircleIcon style={{ opacity: 0.5 }} size={22} />
            <Text style={{ paddingLeft: 8, fontWeight: "bold" }}>
              Have a food allergy
            </Text>
            <ChevronRightIcon />
          </TouchableOpacity>
        </View>

        <View style={{ paddingBottom: 52 }}>
          <Text
            style={{
              paddingHorizontal: 16,
              paddingTop: 24,
              marginBottom: 12,
              fontWeight: "bold",
              fontSize: 20,
            }}
          >
            Menu
          </Text>

          {dishes.map((dish) => (
            <DishRow
              key={dish._id}
              id={dish._id}
              name={dish.name}
              description={dish.short_description}
              price={dish.price}
              image={dish.image}
            />
          ))}
        </View>
      </ScrollView>
    </>
  );
};

export default RestaurantScreen;
