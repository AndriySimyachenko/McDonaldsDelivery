import { StyleSheet } from "react-native";
import { scale, Colors } from "../../shared";
export const styles = StyleSheet.create({
  container: {
    marginTop: scale(16),
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: scale(16),
  },
  title: {
    fontSize: scale(18),
    fontWeight: "bold",
  },
  description: {
    fontSize: scale(12),
    paddingHorizontal: scale(16),
    color: "#00CCBB",
  },
});
