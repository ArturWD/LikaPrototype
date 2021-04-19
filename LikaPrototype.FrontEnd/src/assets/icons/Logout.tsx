import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';
import { FC } from 'react';

export const LogoutIcon: FC<SvgIconProps> = (props) => {
    return (
        <SvgIcon {...props}>
            <path d="M11.9602 2.03326H2.99002C2.43984 2.03326 1.99336 2.47979 1.99336 3.02991V20.9701C1.99336 21.5203 2.43989 21.9668 2.99002 21.9668H11.9602C12.5113 21.9668 12.9568 22.4123 12.9568 22.9635C12.9568 23.5146 12.5113 23.9602 11.9602 23.9602H2.99002C1.34152 23.9602 0 22.6186 0 20.9701V3.02996C0 1.38146 1.34152 0.0399442 2.99002 0.0399442H11.9602C12.5113 0.0399442 12.9568 0.485444 12.9568 1.0366C12.9568 1.58776 12.5113 2.03326 11.9602 2.03326Z" />
            <path d="M23.7029 12.7097L17.6431 18.6897C17.2524 19.0765 16.6206 19.0715 16.2338 18.6798C15.8471 18.2881 15.8511 17.6572 16.2438 17.2705L20.5744 12.9967H8.97004C8.41889 12.9967 7.97339 12.5512 7.97339 12.0001C7.97339 11.4489 8.41889 11.0034 8.97004 11.0034H20.5744L16.2438 6.72964C15.8511 6.34292 15.8481 5.71203 16.2338 5.32034C16.4292 5.123 16.6863 5.02334 16.9435 5.02334C17.1966 5.02334 17.4498 5.11902 17.6431 5.31041L23.7029 11.2905C23.8923 11.4778 23.9999 11.733 23.9999 12.0001C23.9999 12.2671 23.8933 12.5213 23.7029 12.7097Z" />
        </SvgIcon>
    );
};
export default LogoutIcon;
