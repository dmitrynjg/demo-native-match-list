import { FC, useState } from 'react';
import { Image, Text, View, Pressable } from 'react-native';

import { MatchCardProps, MatchCardStatProps, MatchStatusProps } from '../model';

import { IconChevron, AnimatedText } from '@/shared';

const MatchCardStat: FC<MatchCardStatProps> = ({ players, place, totalKills, points }) => {
  return (
    <View className="w-full">
      <View className="mb-[8px] flex flex-row gap-[8px]">
        {players.map((player, index) => (
          <View
            key={index}
            className="flex w-1/3 flex-1 flex-wrap items-center justify-between rounded-sm bg-[#101318] px-[12px] py-[8px] lg:px-[24px]">
            <View className="lg:justify-left flex w-full items-center justify-center gap-[8px] lg:w-auto">
              <Image
                src="https://demo-match-list.vercel.app/assets/avatar.png"
                width={200}
                height={200}
                className="h-[36px] w-[36px]"
                alt={player.username}
              />
              <Text className="font-inter truncate text-sm text-white lg:text-base">
                {player.username}
              </Text>
            </View>
            <View className="lg:justify-left flex w-full flex-row items-center justify-center gap-[8px] lg:w-auto">
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

export const MatchStatus: FC<MatchStatusProps> = ({ status }) => {
  const statusData = {
    Finished: {
      color: 'bg-[#EB0237]',
      text: 'Finished',
      width: 92,
    },
    Ongoing: {
      color: 'bg-[#43AD28]',
      text: 'Live',
      width: 92,
    },
    Scheduled: {
      color: 'bg-[#EB6402]',
      text: 'Match preparing',
      width: 112,
    },
  };
  return (
    <View
      className={`${statusData[status].color} rounded-sm py-[6px]`}
      style={{
        width: statusData[status].width,
      }}>
      <Text className="font-inter w-full text-center text-xs font-semibold text-white">
        {statusData[status].text}
      </Text>
    </View>
  );
};

export const MatchCard: FC<MatchCardProps> = ({ match }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Pressable
      className="w-full rounded-sm bg-[#0B0E12] px-[5px] pt-[8px] lg:px-[16px] lg:py-[19px]"
      onPress={() => setIsExpanded(!isExpanded)}>
      <View className="flex flex-row items-center justify-between">
        <View className="flex w-1/3 flex-1 flex-row items-center gap-3">
          <Image
            src="https://demo-match-list.vercel.app/assets/team.png"
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

        <View className="flex w-1/3 flex-1 items-center gap-4">
          <View className="flex flex-row-reverse items-center gap-3">
            <Image
              src="https://demo-match-list.vercel.app/assets/team.png"
              alt={match.awayTeam.name}
              className="h-[24px] w-[24px] lg:h-[48px] lg:w-[48px]"
            />
            <Text className="font-inter text-sm font-semibold text-white lg:text-base">
              {match.awayTeam.name}
            </Text>
          </View>

          <View className="hidden cursor-pointer lg:flex">
            <IconChevron />
          </View>
        </View>
      </View>

      {isExpanded && (
        <View className="pb-[12px] pt-[32px]">
          <View className="relative flex flex-col items-center lg:gap-[32px] 2xl:flex-row">
            <View className="w-full">
              <MatchCardStat
                players={match.homeTeam.players}
                place={match.homeTeam.place}
                points={match.homeTeam.points}
                totalKills={match.homeTeam.totalKills}
              />
            </View>

            <View className="flex w-full items-center justify-center py-[16px] 2xl:hidden">
              <View className="relative w-full">
                <View className="absolute inset-x-0 top-1/2 border-t border-[#13181F] 2xl:hidden" />

                <View className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <View className="flex items-center justify-center bg-[#0B0E12] px-[10px]">
                    <Text className="text-sm font-semibold text-[#313A47]">VS</Text>
                  </View>
                </View>
              </View>
            </View>

            <View className="w-full">
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
