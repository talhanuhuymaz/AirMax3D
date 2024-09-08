import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const s = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 20,
    backgroundColor: "#f7f7f9",
  },
  logo: {
    marginTop: 50,
    width: 120,
    height: 120,
    resizeMode: "contain",
    backgroundColor: "#ff5c5c",
    borderRadius: 60,
    borderWidth: 5,
    borderColor: "#ffbaba",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    marginBottom: 30,
  },
  canvasContainer: {
    flex: 2,
    width: width * 0.95,
    height: height * 0.5,
    backgroundColor: "#fff",
    borderRadius: 15,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
});
