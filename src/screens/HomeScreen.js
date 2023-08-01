import {
  View,
  Text,
  SafeAreaView,
  Image,
  VirtualizedList,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import sanityClient from "../../sanity";

import {
  UserIcon,
  ChevronDownIcon,
  SearchIcon,
  AdjustmentsIcon,
  ChevronUpDownIcon,
  FunnelIcon,
  AdjustmentsVerticalIcon,
  MagnifyingGlassCircleIcon,
  MagnifyingGlassIcon,
  CubeTransparentIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories/categories";
import FeatureRow from "../components/FeatureRow/FeatureRow";
import "react-native-url-polyfill/auto";
import { SanityClient } from "@sanity/client";
import { Colors, scale } from "../shared";
import { StatusBar } from "expo-status-bar";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [categories, setCategories] = useState([]);
  const [featuredCategories, setFeaturedCategories] = useState();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions(
      {
        headerShown: false,
      },
      []
    );
  });

  useEffect(() => {
    sanityClient
      .fetch(
        `
        *[_type == "featured"] {
          ...,
         sections[]->{
           ...,
           dishes[]->{
             ...,
             optionLists[]->{
               ...,
               options[]->,
             },
           },
         }
         }
   `
      )
      .then((data) => {
        setFeaturedCategories(data);
        // console.log(data[0].sections[0].dishes[8].optionLists[1].options);
      });
  }, []);
  return (
    <>
      <SafeAreaView style={{ flex: 0, backgroundColor: "white" }} />
      <SafeAreaView style={{ paddingTop: 20, backgroundColor: "#fff" }}>
        <ScrollView style={{ padding: scale(2), marginBottom: 50 }}>
          {/* <Categories />  */}

          {featuredCategories?.map((category) => (
            <FeatureRow
              key={category._id}
              id={category._id}
              title={category.name}
              description={category.shot_description}
            />
          ))}
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default HomeScreen;
