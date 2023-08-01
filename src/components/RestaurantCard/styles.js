import { StyleSheet } from "react-native";
import { scale, Colors } from "../../shared";
export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.yellow,
    marginRight: 20,
    marginVertical: scale(16),
    borderRadius: scale(42),
    borderTopRightRadius: scale(28),
    borderBottomRightRadius: 0,
    width: scale(256),
  },
  image: {
    height: scale(144),
    width: scale(256),
    borderRadius: scale(32),
    paddingRight: 200,
    borderBottomRightRadius: 0,
  },
  infoContainer: {
    paddingHorizontal: scale(12),
    paddingVertical: scale(12),
  },
  title: {
    fontWeight: "bold",
    fontSize: scale(18),
  },
  genre: { flexDirection: "row", alignItems: "center" },
  shadow: {
    backgroundColor: Colors.yellow,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    shadowColor: "gray",
    shadowOpacity: 0.2,
    shadowOffset: {
      width: scale(-7),
      height: scale(8),
    },
    shadowRadius: scale(6),
  },
});
