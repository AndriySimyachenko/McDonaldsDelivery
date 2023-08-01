import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { styles } from "./styles";

const CategoryCard = ({ imgUrl, title }) => {
  return (
    <TouchableOpacity style={{ margin: 8 }}>
      <Image source={{ uri: imgUrl }} style={styles.categoryImage} />
      <View style={{ backgroundColor: "#000", flex: 1 }}>
        <Text style={styles.categoryText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CategoryCard;
