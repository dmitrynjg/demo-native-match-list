import { FC } from 'react';
import { View, ViewProps } from 'react-native';

export const Layout: FC<ViewProps> = (props) => {
  return <View {...props} className="px-[15px] lg:px-[42px]" />;
};
