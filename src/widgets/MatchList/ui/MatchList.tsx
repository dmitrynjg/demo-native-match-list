import { FC } from 'react';
import { View, Text } from 'react-native';

import { MatchListProps } from '../model';

import { MatchCard } from '@/entities';

export const MatchList: FC<MatchListProps> = ({ items, isLoading }) => {
  if (isLoading)
    return (
      <View className="flex flex-row justify-center">
        <Text className="font-inter text-xl text-white">Загрузка...</Text>
      </View>
    );

  return (
    <View className="flex w-full flex-col gap-[8px] lg:gap-[12px]">
      {items.map((match, index) => (
        <MatchCard key={index} match={match} />
      ))}
    </View>
  );
};
