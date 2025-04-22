import { Dimensions } from "react-native";

const { width: SCREEN_WIDTH } = Dimensions.get("window");
const scale = SCREEN_WIDTH / 375; // 375 is base width for iPhone

export const normalize = (size) => Math.round(scale * size);
