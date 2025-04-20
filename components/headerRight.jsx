import { TouchableOpacity, StyleSheet, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { normalize } from "@/utils/responsive";

const HeaderRight = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.Button}>
        <Icon name="reload" size={normalize(18)} color="#222222" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.Button}>
        <Icon name="add" size={normalize(22)} color="#222222" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginRight: normalize(15),
  },
  Button: {
    marginRight: normalize(10),
    paddingVertical: normalize(5),
    paddingHorizontal: normalize(5),
    backgroundColor: "#f0f0f0",
    borderRadius: normalize(8),
    alignItems: "center",
    justifyContent: "center",
  },
});

export default HeaderRight;
