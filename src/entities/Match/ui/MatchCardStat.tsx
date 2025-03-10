import { FC } from 'react';
import { Image, Text, View } from 'react-native';

import { MatchCardStatProps } from '../model';

import { AnimatedText } from '@/shared';

export const MatchCardStat: FC<MatchCardStatProps> = ({ players, place, totalKills, points }) => {
  return (
    <View className="w-full">
      <View className="mb-[8px] flex flex-row gap-[8px]">
        {players.map((player, index) => (
          <View
            key={index}
            className="flex w-1/3 flex-1 flex-wrap items-center justify-between gap-[8px] rounded-sm bg-[#101318] px-[12px] py-[8px] 2xl:flex-row 2xl:flex-nowrap 2xl:px-[24px]">
            <View className="flex w-full flex-row items-center justify-center gap-[8px] 2xl:w-1/2 2xl:flex-1 2xl:justify-start">
              <Image
                source={require('../../../../assets/images/avatar.png')}
                width={200}
                height={200}
                className="h-[36px] w-[36px]"
                alt={player.username}
              />
              <Text className="font-inter truncate text-sm text-white lg:text-base">
                {player.username}
              </Text>
            </View>
            <View className="lg:justify-left flex w-full flex-row items-center justify-center gap-[8px] 2xl:w-1/2 2xl:flex-1 2xl:justify-end">
              <Text className="font-inter text-center text-xs font-medium text-[#626467] lg:text-left lg:text-sm">
                Убийств:
              </Text>
              <AnimatedText className="font-inter text-sm font-semibold text-white text-white lg:text-base">
                {player.kills}
              </AnimatedText>
            </View>
          </View>
        ))}
      </View>
      <View className="flex w-full flex-row justify-between rounded-sm bg-[#101318] px-[12px] py-[14px] lg:px-[24px]">
        <View className="flex w-1/3 flex-1 flex-row items-center justify-center gap-[8px]">
          <Text className="font-inter text-xs font-medium text-[#626467] lg:text-sm">Points:</Text>
          <AnimatedText className="font-inter text-sm font-semibold text-white lg:text-base">
            +{points}
          </AnimatedText>
        </View>
        <View className="flex w-1/3 flex-1 flex-row items-center justify-center gap-[8px]">
          <Text className="font-inter text-xs font-medium text-[#626467] lg:text-sm">Место:</Text>
          <AnimatedText className="font-inter text-sm font-semibold text-white lg:text-base">
            {place}
          </AnimatedText>
        </View>
        <View className="flex w-1/3 flex-1 flex-row items-center justify-center gap-[8px]">
          <Text className="font-inter whitespace-nowrap text-xs font-medium text-[#626467] lg:text-sm">
            Всего убийств:
          </Text>
          <AnimatedText className="font-inter text-sm font-semibold text-white text-white lg:text-base">
            {totalKills}
          </AnimatedText>
        </View>
      </View>
    </View>
  );
};
