import { useState, useEffect, FC } from 'react';
import { Text, Animated, TextProps } from 'react-native';

export const AnimatedText: FC<TextProps> = ({ children, ...otherProps }) => {
  const fadeAnim = new Animated.Value(1);
  const [currentValue, setCurrentValue] = useState(children);

  useEffect(() => {
    if (children !== currentValue) {
      Animated.sequence([
        Animated.timing(fadeAnim, {
          toValue: 0.3,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true,
        }),
      ]).start(() => setCurrentValue(children));
    }
  }, [children]);

  return (
    <Animated.Text style={{ opacity: fadeAnim }} {...otherProps}>
      <Text className="font-inter text-xl font-semibold text-white">{currentValue}</Text>
    </Animated.Text>
  );
};
