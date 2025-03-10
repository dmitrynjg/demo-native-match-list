import { FC } from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

export const IconArrow: FC<SvgProps> = (props) => (
  <Svg width={12} height={8} fill="none" {...props}>
    <Path
      fill="#B4B5B6"
      d="M10.932.816H1.065c-.8 0-1.2.966-.633 1.533l4.317 4.317a1.775 1.775 0 0 0 2.508 0l1.642-1.642 2.675-2.675c.558-.567.158-1.533-.642-1.533Z"
    />
  </Svg>
);
