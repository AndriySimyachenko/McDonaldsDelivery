import { StyleSheet } from "react-native";
import { scale, Colors } from "../../shared";
export const styles = StyleSheet.create({
  categoryImage: {
    height: scale(80),
    width: scale(80),
    borderRadius: 12,
  },
  categoryText: {
    position: "absolute",
    bottom: scale(1),
    left: scale(1),
    color: "white",
    fontWeight: "bold",
  },
});
