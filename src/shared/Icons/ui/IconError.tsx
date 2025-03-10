import { FC } from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

export const IconError: FC<SvgProps> = (props) => (
  <Svg width={24} height={22} fill="none" {...props}>
    <Path
      stroke="#EB0237"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.8}
      d="M12.012 8.685v2.333m0 4.667v.012m-8.166 4.655h16.333a2.334 2.334 0 0 0 2.147-3.209L14.042 2.852a2.334 2.334 0 0 0-4.083 0L1.676 17.143a2.334 2.334 0 0 0 2.041 3.209"
    />
  </Svg>
);
