import { FC } from 'react';
import { Text, View } from 'react-native';

import { MatchStatusProps } from '../model';

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
