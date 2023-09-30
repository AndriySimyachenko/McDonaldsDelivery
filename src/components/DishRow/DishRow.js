import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Currency from "react-currency-formatter";
import { urlFor } from "../../../sanity";
import {
  MinusCircleIcon,
  PlusCircleIcon,
} from "react-native-heroicons/outline";
import { useDispatch, useSelector } from "react-redux";
import {
  addToBasket,
  removeFromBasket,
  selectBasketItems,
  selectBasketItemsWithId,
} from "../../features/basketSlice";
import { styles } from "./styles";
import { scale } from "../../shared";
import { useNavigation } from "@react-navigation/native";

const DishRow = ({ id, name, description, price, image }) => {
  const [isPressed, setIsPressed] = useState(false);
  const dispatch = useDispatch();
  const items = useSelector((state) => selectBasketItemsWithId(state, id));
  const navigation = useNavigation();

  const onPressHandler = () => {
    setIsPressed(!isPressed);
  };

  const addItemToBasket = () => {
    dispatch(addToBasket({ id, name, description, price, image }));
  };

  const removeItemFromBasket = () => {
    if (!items.length > 0) return;

    dispatch(removeFromBasket({ id }));
  };

  const handleDishPress = () => {
    navigation.navigate("Options", {
      id,
    });
  };
  return (
    <>
      <TouchableOpacity onPress={handleDishPress} style={styles.dish}>
        <View style={styles.dishContainer}>
          <View>
            <Text style={styles.dishTitle}>{name}</Text>
            <Text style={styles.dishDescription}>{description}</Text>
            <Text>
              <Currency quantity={price} currency="UAH" />
            </Text>
          </View>
          <View>
            <Image
              source={{ uri: urlFor(image).url() }}
              resizeMode="cover"
              style={{
                height: scale(88),
                width: scale(88),
                backgroundColor: "gray",
                padding: 16,
              }}
            />
          </View>
        </View>
      </TouchableOpacity>
      {isPressed && (
        <View style={{ backgroundColor: "white", paddingHorizontal: 16 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingBottom: 12,
            }}
          >
            <TouchableOpacity onPress={removeItemFromBasket}>
              <MinusCircleIcon
                size={40}
                color={items.length > 0 ? "blue" : "gray"}
              />
            </TouchableOpacity>
            <Text>{items.length}</Text>

            <TouchableOpacity onPress={addItemToBasket}>
              <PlusCircleIcon size={40} />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

export default DishRow;
