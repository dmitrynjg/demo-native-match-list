import { FC } from 'react';
import { Pressable, Text, PressableProps } from 'react-native';

export const Button: FC<PressableProps & { text?: string; disabled?: boolean }> = ({
  className,
  text,
  children,
  disabled,
  onPress,
  ...otherProps
}) => {
  return (
    <Pressable
      {...otherProps}
      className={`flex flex-row items-center justify-center gap-[10px] rounded-sm px-[40px] py-[15px] text-lg font-semibold ${disabled ? 'bg-[#701328] text-[#787878]' : 'bg-[#EB0237] text-white'} ${className}`}
      onPress={(event) => !disabled && onPress && onPress(event)}>
      <>
        <Text className="text-lg font-semibold text-white disabled:text-[#787878]">{text}</Text>
        {children}
      </>
    </Pressable>
  );
};
