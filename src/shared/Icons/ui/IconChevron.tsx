import { FC } from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

export const IconChevron: FC<SvgProps> = (props) => (
  <Svg width={16} height={9} fill="none" {...props}>
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m1 8 7-7 7 7"
    />
  </Svg>
);
