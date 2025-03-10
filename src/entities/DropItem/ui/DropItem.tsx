import { FC } from 'react';
import { Text, View } from 'react-native';

import { DropItemProps } from '../model';

export const DropItem: FC<DropItemProps> = ({ label, isSelect }) => {
  return (
    <View className={`p-[12px] ${isSelect ? 'bg-[#171D25]' : 'bg-[#0F1318]'}`}>
      <Text className="font-inter text-[#B4B5B6]">{label}</Text>
    </View>
  );
};
