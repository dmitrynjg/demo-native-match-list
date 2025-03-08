import { FC } from "react";
import { View, Text } from "react-native";
import { MatchListProps } from "../model";
import { MatchCard } from "@/entities";

export const MatchList: FC<MatchListProps> = ({ items, isLoading }) => {
  if (isLoading)
    return (
      <View className="flex justify-center">
        <Text className="font-inter text-xl">Загрузка...</Text>
      </View>
    );

  return (
    <View className="flex flex-col gap-8 w-full">
      {items.map((match, index) => (
        <MatchCard key={index} match={match} />
      ))}
    </View>
  );
};
