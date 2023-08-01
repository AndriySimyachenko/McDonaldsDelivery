import { Dimensions, PixelRatio } from "react-native";

const { width, height } = Dimensions.get("window");
const [shortDimension, longDimension] =
  width < height ? [width, height] : [height, width];

const guidelineBaseWidth = 375;

const scale = (size) =>
  PixelRatio.roundToNearestPixel((shortDimension / guidelineBaseWidth) * size);

const moderateScale = (size, factor = 1) => {
  return size + (scale(size) - size) * factor;
};

export { height, moderateScale, scale, width };
