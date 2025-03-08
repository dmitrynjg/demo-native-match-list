import { FC } from 'react';
import { DropSelectItemProps } from '../model';
import { IconArrow } from '@/shared';
import { View, Text } from 'react-native';

export const DropSelectItem: FC<DropSelectItemProps> = ({ label, isOpen }) => {
  return (
    <View
      className={`flex justify-between items-center p-[16px] font-inter border   rounded-sm ${
        isOpen
          ? 'bg-[#0B0E12] border-[#171D25]'
          : 'bg-[#0B0E12] border-[#0B0E12] text-[#B4B5B6] hover:bg-[#0F1318] hover:border-[#0F1318] hover:text-white'
      }`}
    >
      <Text className='truncate'>{label}</Text>

      <View className='pr-[4px]'><IconArrow /></View>
    </View>
  );
};
