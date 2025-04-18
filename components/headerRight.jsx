import { TouchableOpacity, StyleSheet, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const HeaderRight = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.Button}>
        <Icon name="reload" size={18} color="#222222" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.Button}>
        <Icon name="add" size={22} color="#222222" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 15,
  },
  Button: {
    marginRight: 10,
    paddingVertical: 5,
    paddingHorizontal: 5,
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default HeaderRight;
