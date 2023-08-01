import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React, { useMemo, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { selectRestaurant } from "../features/RestaurantSlice";
import {
  removeFromBasket,
  selectBasketItems,
  selectBasketTotal,
} from "../features/basketSlice";
import { SafeAreaView } from "react-native-safe-area-context";
import Currency from "react-currency-formatter";
import {
  MinusCircleIcon,
  PlusCircleIcon,
  XCircleIcon,
} from "react-native-heroicons/outline";
import { urlFor } from "../../sanity";
import { scale } from "../shared/utils/dimension";

const BasketScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);
  const items = useSelector(selectBasketItems);
  const dispatch = useDispatch();
  const [groupedItemsInBasket, setGroupedItemsInBasket] = useState();
  const basketTotal = useSelector(selectBasketTotal);

  useMemo(() => {
    const groupedItems = items.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(item);
      return results;
    }, {});

    setGroupedItemsInBasket(groupedItems);
  }, [items]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ flex: 1, backgroundColor: "gray" }}>
        <View style={{ padding: 20, borderBottomWidth: 1 }}>
          <View>
            <Text
              style={{ fontSize: 20, fontWeight: "bold", textAlign: "center" }}
            >
              Basket
            </Text>
            <Text style={{ textAlign: "center", color: "gray" }}>
              {restaurant.title}
            </Text>
          </View>
          <TouchableOpacity
            onPress={navigation.goBack}
            style={{
              borderRadius: 50,
              backgroundColor: "#3e3e3e3",
              top: 12,
              right: 20,
              position: "absolute",
            }}
          >
            <XCircleIcon color={"red"} width={50} height={scale(50)} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 12,
            paddingVertical: 12,
          }}
        >
          <Image
            source={{ uri: "https://links.papareact.com/wru" }}
            style={{
              height: 28,
              width: 28,
              backgroundColor: "white",
              borderRadius: 50,
              padding: 16,
            }}
          />
          <Text>Deliver in dsdsds</Text>
          <TouchableOpacity>
            <Text>Change</Text>
          </TouchableOpacity>
        </View>
        <ScrollView>
          {groupedItemsInBasket &&
            Object.entries(groupedItemsInBasket).map(([key, items]) => (
              <View
                key={key}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingHorizontal: 20,
                }}
              >
                <Text>{items.length} x</Text>
                <Image
                  source={{ uri: urlFor(items[0]?.image).url() }}
                  style={{ height: 48, width: 48, borderRadius: 50 }}
                />
                <Text>{items[0]?.name}</Text>
                <Text>
                  <Currency quantity={items[0]?.price} currency="UAH" />
                </Text>

                <TouchableOpacity>
                  <Text
                    style={{ fontSize: 12, color: "white" }}
                    onPress={() => dispatch(removeFromBasket({ id: key }))}
                  >
                    wqwq
                  </Text>
                </TouchableOpacity>
              </View>
            ))}
        </ScrollView>
        <View style={{ padding: 20, backgroundColor: "white", marginTop: 20 }}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text>Subtotal</Text>
            <Text>
              <Currency quantity={basketTotal} currency="UAH" />
            </Text>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text>Delivery Fee</Text>
            <Text>
              <Currency quantity={120} currency="UAH" />
            </Text>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text>total</Text>
            <Text>
              <Currency quantity={basketTotal + 120} currency="UAH" />
            </Text>
          </View>

          <TouchableOpacity
            style={{ borderRadius: 15, backgroundColor: "red", padding: 16 }}
          >
            <Text
              style={{
                textAlign: "center",
                color: "white",
                fontWeight: "bold",
              }}
            >
              Place Holder
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BasketScreen;
