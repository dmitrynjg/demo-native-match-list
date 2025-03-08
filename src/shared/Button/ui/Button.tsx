import { FC } from 'react';
import { Pressable, PressableProps } from 'react-native';

export const Button: FC<PressableProps> = ({
  className,
  ...props
}) => {
  return (
    <Pressable
      {...props}
      className={`inline-flex items-center justify-center gap-[10px] py-[15px] px-[40px] rounded-sm font-inter font-semibold text-lg bg-[#EB0237] text-white hover:cursor-pointer hover:bg-[#A01131] disabled:bg-[#701328] disabled:text-[#787878] disabled:cursor-not-allowed ${className}`}
    />
  );
};
