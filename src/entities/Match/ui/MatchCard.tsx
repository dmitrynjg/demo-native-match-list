import { FC, useState } from 'react';
import { Text, View, Pressable, Image } from 'react-native';

import { MatchCardProps } from '../model';
import { MatchCardStat } from './MatchCardStat';
import { MatchStatus } from './MatchStatus';

import { IconChevron, AnimatedText } from '@/shared';

export const MatchCard: FC<MatchCardProps> = ({ match }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Pressable
      className="w-full rounded-sm bg-[#0B0E12] px-[5px] pt-[8px] lg:px-[16px] lg:py-[19px]"
      onPress={() => setIsExpanded(!isExpanded)}>
      <View className="flex flex-row items-center justify-between">
        <View className="flex w-1/3 flex-1 flex-row items-center gap-[6px] lg:gap-[14px]">
          <Image
            source={require('../../../../assets/images/team.png')}
            alt={match.homeTeam.name}
            className="h-[24px] w-[24px] lg:h-[48px] lg:w-[48px]"
          />
          <Text className="font-inter text-sm font-semibold text-white lg:text-base">
            {match.homeTeam.name}
          </Text>
        </View>

        <View className="flex w-1/3 flex-1 flex-col items-center gap-[8px]">
          <AnimatedText className="font-inter text-xl font-semibold text-white">
            {match.homeScore} : {match.awayScore}
          </AnimatedText>
          <MatchStatus status={match.status} />
        </View>

        <View className="flex w-1/3 flex-1 items-end gap-[6px] lg:mr-[24px] lg:gap-[14px]">
          <View className="flex flex-row-reverse items-center gap-3">
            <Image
              source={require('../../../../assets/images/team.png')}
              alt={match.awayTeam.name}
              className="h-[24px] w-[24px] lg:h-[48px] lg:w-[48px]"
            />
            <Text className="font-inter text-sm font-semibold text-white lg:text-base">
              {match.awayTeam.name}
            </Text>
          </View>

          <View
            className={`hidden lg:absolute lg:right-[-24px] lg:top-[20px] lg:flex ${
              !isExpanded && '-rotate-180'
            }`}>
            <IconChevron />
          </View>
        </View>
      </View>

      {isExpanded && (
        <View className="pb-[12px] pt-[32px]">
          <View className="relative flex flex-col items-center lg:flex-row lg:gap-[32px]">
            <View className="w-full lg:w-1/2">
              <MatchCardStat
                players={match.homeTeam.players}
                place={match.homeTeam.place}
                points={match.homeTeam.points}
                totalKills={match.homeTeam.totalKills}
              />
            </View>

            <View className="flex w-full items-center justify-center py-[16px] lg:hidden">
              <View className="relative w-full">
                <View className="absolute inset-x-0 top-1/2 border-t border-[#13181F] lg:hidden" />

                <View className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <View className="flex items-center justify-center bg-[#0B0E12] px-[10px]">
                    <Text className="text-sm font-semibold text-[#313A47]">VS</Text>
                  </View>
                </View>
              </View>
            </View>

            <View className="w-full flex-1 lg:w-1/2">
              <MatchCardStat
                players={match.awayTeam.players}
                place={match.awayTeam.place}
                points={match.awayTeam.points}
                totalKills={match.awayTeam.totalKills}
              />
            </View>
          </View>
        </View>
      )}
      <View
        className={`flex w-full flex-row justify-center py-[18px] lg:hidden ${
          !isExpanded && '-rotate-180'
        }`}>
        <IconChevron />
      </View>
    </Pressable>
  );
};
