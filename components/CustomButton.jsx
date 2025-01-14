import { TouchableOpacity, Text } from "react-native";
import React from "react";

const CustomButton = ({
  title,
  handlePress,
  containerStyles,
  textStyles,
  isLoading,
}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      className={ `${isLoading ? 'opacity-50' : "" }bg-secondary rounded-xl min-h-62 justify-center items-center ${containerStyles}`} 
      disabled={isLoading}
    >
      <Text className={`text-primary font-psemibold text-lg ${textStyles} `}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
