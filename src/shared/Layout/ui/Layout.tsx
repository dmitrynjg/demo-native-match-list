import { FC } from 'react';
import { View, ViewProps } from 'react-native';

export const Layout: FC<ViewProps> = (props) => {
  return <View {...props} className='lg:px-[42px] px-[15px]' />;
};
