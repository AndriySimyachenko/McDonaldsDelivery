import { StyleSheet } from "react-native";
import { scale, Colors } from "../../shared";
export const styles = StyleSheet.create({
  dish: {
    backgroundColor: "white",
    borderWidth: 1,
    padding: scale(16),
    borderColor: Colors.yellow,
    borderRadius: 24,
  },
  dishContainer: {
    flexDirection: "row",
  },
  dishTitle: { marginBottom: scale(4), fontSize: scale(24), width: scale(270) },
  dishDescription: { fontSize: scale(10), width: scale(270) },
  dishImage: {
    height: scale(88),
    width: scale(88),
    backgroundColor: "gray",
    padding: scale(16),
  },
  buttonsContainer: { backgroundColor: "white", paddingHorizontal: scale(16) },
  buttons: {
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: scale(12),
  },
});
