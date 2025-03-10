import { FC } from 'react';
import { Pressable, Text, PressableProps } from 'react-native';

export const Button: FC<PressableProps & { text: string }> = ({
  className,
  text,
  children,
  ...props
}) => {
  return (
    <Pressable
      {...props}
      className={`inline-flex flex-row items-center justify-center flex-1 gap-[10px] rounded-sm bg-[#EB0237] px-[40px] py-[15px] text-lg font-semibold text-white hover:cursor-pointer hover:bg-[#A01131] disabled:cursor-not-allowed disabled:bg-[#701328] disabled:text-[#787878] ${className}`}>
      <>
        <Text className="text-lg font-semibold text-white disabled:text-[#787878]">{text}</Text>
        {children}
      </>
    </Pressable>
  );
};
