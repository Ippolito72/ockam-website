import { forwardRef, Icon, IconProps } from '@chakra-ui/react';
import { FunctionComponent } from 'react';

const KeyIcon: FunctionComponent<IconProps> = forwardRef((props, ref) => (
  <Icon viewBox="0 0 24 24" fill="none" ref={ref} {...props}>
    <path
      d="M21.1482 18.1935C21.1579 18.0954 21.1458 17.9964 21.1126 17.9035C21.0794 17.8107 21.0261 17.7263 20.9564 17.6566L12.5343 9.2345C12.8642 8.16737 12.8274 7.02048 12.4296 5.97675C12.0318 4.93301 11.2959 4.05253 10.3394 3.47573C9.38287 2.89892 8.26076 2.65901 7.152 2.79426C6.04324 2.9295 5.0117 3.43211 4.22187 4.22194C3.43205 5.01176 2.92944 6.0433 2.7942 7.15206C2.65895 8.26082 2.89886 9.38293 3.47566 10.3395C4.05247 11.296 4.93295 12.0318 5.97668 12.4296C7.02042 12.8274 8.16731 12.8643 9.23443 12.5343L10.9456 14.2455L11.3671 15.5108C11.3998 15.6089 11.4549 15.6981 11.5281 15.7712C11.6012 15.8444 11.6904 15.8995 11.7885 15.9322L13.0538 16.3536L13.7741 17.0739L14.1955 18.3392C14.2282 18.4373 14.2833 18.5265 14.3565 18.5996C14.4296 18.6728 14.5188 18.7279 14.6169 18.7606L15.8822 19.1821L17.1851 20.485C17.2938 20.5937 17.4367 20.6615 17.5896 20.677C17.7425 20.6925 17.896 20.6546 18.0242 20.5699L20.8527 18.6843C20.9353 18.6296 21.0047 18.5572 21.0558 18.4723C21.107 18.3874 21.1385 18.2922 21.1482 18.1935ZM5.63573 7.99282C5.40265 7.75973 5.24391 7.46276 5.1796 7.13946C5.11529 6.81615 5.1483 6.48104 5.27445 6.1765C5.40059 5.87196 5.61421 5.61166 5.88829 5.42852C6.16238 5.24539 6.48461 5.14764 6.81424 5.14764C7.14388 5.14764 7.46611 5.24539 7.74019 5.42852C8.01428 5.61166 8.2279 5.87196 8.35404 6.1765C8.48019 6.48104 8.51319 6.81615 8.44889 7.13946C8.38458 7.46276 8.22584 7.75973 7.99275 7.99282C7.68019 8.30538 7.25627 8.48097 6.81424 8.48097C6.37222 8.48097 5.94829 8.30538 5.63573 7.99282Z"
      fill="currentColor"
    />
  </Icon>
));

export default KeyIcon;