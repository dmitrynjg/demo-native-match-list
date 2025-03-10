import { FC } from 'react';
import { DropSelectItemProps } from '../model';
import { IconArrow } from '@/shared';
import { Pressable, View, Text } from 'react-native';

export const DropSelectItem: FC<DropSelectItemProps> = ({ label, onPress, isOpen }) => {
  return (
    <Pressable
      onPress={onPress}
      className={`flex flex-row items-center justify-between rounded-sm border p-[16px] ${
        isOpen
          ? 'border-[#171D25] bg-[#0B0E12]'
          : 'border-[#0B0E12] bg-[#0B0E12] hover:border-[#0F1318] hover:bg-[#0F1318]'
      }`}>
      <Text
        className={`font-inter truncate ${isOpen ? 'text-[#B4B5B6] hover:text-white' : 'text-white'}`}>
        {label}
      </Text>

      <View className="pr-[4px]">
        <IconArrow />
      </View>
    </Pressable>
  );
};
