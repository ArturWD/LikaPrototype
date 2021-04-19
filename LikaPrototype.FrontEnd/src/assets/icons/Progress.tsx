import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';
import { FC } from 'react';

export const ProgressIcon: FC<SvgIconProps> = (props) => {
    return (
        <SvgIcon {...props}>
            <path d="M1.8966 14.6879C1.98815 14.7794 2.10809 14.8252 2.22802 14.8252C2.34796 14.8252 2.46789 14.7794 2.55944 14.6879L9.6544 7.59312L13.9497 11.8886C14.0376 11.9765 14.157 12.0259 14.2811 12.0259C14.4054 12.0259 14.5246 11.9765 14.6127 11.8886L17.104 9.39707C17.2871 9.21415 17.2871 8.91733 17.104 8.73423C16.9209 8.55112 16.6243 8.55112 16.4412 8.73423L14.2811 10.8941L9.98582 6.59867C9.89774 6.51078 9.77854 6.46134 9.6544 6.46134C9.53007 6.46134 9.41087 6.51078 9.32279 6.59867L2.22802 13.6936L1.13159 12.5972L9.6544 4.07457L13.9499 8.37003C14.0378 8.45792 14.157 8.50736 14.2813 8.50736C14.4056 8.50736 14.5248 8.45792 14.6127 8.37003L20.2736 2.70897C20.4567 2.52605 20.4567 2.22924 20.2736 2.04613L20.1009 1.87328L22.8682 1.13189L22.1268 3.89915L22.0329 3.8054C21.945 3.71751 21.8258 3.66808 21.7014 3.66808C21.5771 3.66808 21.4579 3.71751 21.37 3.8054L19.0929 6.0825C18.9098 6.2656 18.9098 6.56242 19.0929 6.74552C19.276 6.92844 19.5727 6.92844 19.7559 6.74552L21.7016 4.79985L22.038 5.13621C22.1564 5.2545 22.3289 5.30101 22.4908 5.25761C22.6525 5.21422 22.7788 5.08787 22.8222 4.92619L23.984 0.590263C24.0274 0.428398 23.9811 0.255913 23.8626 0.137444C23.7443 0.0189747 23.5717 -0.0271678 23.41 0.016045L19.0741 1.17785C18.9124 1.22124 18.786 1.34759 18.7426 1.50945C18.6992 1.67113 18.7456 1.8438 18.8639 1.96209L19.2793 2.37755L14.2813 7.37559L9.98582 3.08013C9.8029 2.8972 9.50608 2.89702 9.32298 3.08013L0.137329 12.2658C-0.0457763 12.4489 -0.0457763 12.7457 0.137329 12.9288L1.8966 14.6879Z" />
            <path d="M23.5312 23.0624H23.0625V8.89062C23.0625 8.63171 22.8526 8.42188 22.5937 8.42188H19.9687C19.7098 8.42188 19.5 8.63171 19.5 8.89062V23.0624H18.4218V14.4843C18.4218 14.2256 18.212 14.0156 17.9531 14.0156H15.3281C15.0692 14.0156 14.8593 14.2256 14.8593 14.4843V23.0624H13.7812V16.9687C13.7812 16.7099 13.5714 16.4999 13.3125 16.4999H10.6875C10.4286 16.4999 10.2187 16.7099 10.2187 16.9687V23.0624H9.14061V14.4843C9.14061 14.2256 8.93077 14.0156 8.67186 14.0156H6.04686C5.78795 14.0156 5.57811 14.2256 5.57811 14.4843V23.0624H4.49999V18.7655C4.49999 18.5068 4.29015 18.2967 4.03124 18.2967H1.40625C1.14734 18.2967 0.937498 18.5068 0.937498 18.7655V23.0624H0.468749C0.209838 23.0624 0 23.2724 0 23.5312C0 23.7901 0.209838 23.9999 0.468749 23.9999H23.5312C23.7901 23.9999 23.9999 23.7901 23.9999 23.5312C23.9999 23.2724 23.7901 23.0624 23.5312 23.0624ZM1.875 23.0624V19.2342H3.56249V23.0624H1.875ZM6.51561 23.0624V14.953H8.20311V23.0624H6.51561ZM11.1562 23.0624V17.4374H12.8437V23.0624H11.1562ZM15.7968 23.0624V14.953H17.4843V23.0624H15.7968ZM20.4375 23.0624V9.35937H22.125V23.0624H20.4375Z" />
            <path d="M17.7672 7.40808C17.6801 7.49524 17.6299 7.61627 17.6299 7.7395C17.6299 7.86328 17.6801 7.98376 17.7672 8.07092C17.8544 8.15863 17.9752 8.20825 18.0986 8.20825C18.2219 8.20825 18.3427 8.15863 18.4301 8.07092C18.5176 7.98376 18.5674 7.86292 18.5674 7.7395C18.5674 7.61627 18.5176 7.49579 18.4301 7.40808C18.3427 7.32092 18.2219 7.27075 18.0986 7.27075C17.9752 7.27075 17.8544 7.32092 17.7672 7.40808Z" />
        </SvgIcon>
    );
};
export default ProgressIcon;
