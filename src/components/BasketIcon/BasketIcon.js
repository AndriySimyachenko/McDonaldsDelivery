import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import {
  selectBasketItems,
  selectBasketTotal,
} from "../../features/basketSlice";
import { useNavigation } from "@react-navigation/native";
import Currency from "react-currency-formatter";
import { styles } from "./styles";

const BasketIcon = () => {
  const navigation = useNavigation();
  const items = useSelector(selectBasketItems);
  const BasketTotal = useSelector(selectBasketTotal);

  if (items.length === 0) return null;

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Basket")}
        style={styles.basketIconButton}
      >
        <Text>{items.length}</Text>
        <Text>Оглянути замовлення</Text>
        <Text>
          <Currency quantity={BasketTotal} currency="UAH" />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default BasketIcon;
