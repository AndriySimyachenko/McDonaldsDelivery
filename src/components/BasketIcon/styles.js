import { StyleSheet } from "react-native";
import { scale, Colors } from "../../shared";
export const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: scale(40),
    width: "100%",
    zIndex: 50,
  },
  basketIconButton: {
    marginHorizontal: 20,
    backgroundColor: "green",
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  dot: {
    top: scale(41),
    left: scale(12),
    zIndex: 2,
  },
});
