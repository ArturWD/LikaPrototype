import SvgIcon from '@material-ui/core/SvgIcon';
import { FC } from 'react';

export const DictionaryIcon: FC = (props) => {
    return (
        <SvgIcon {...props}>
            <path
                d="M4.00619 20.5118H18.438C18.5734 20.5118 18.6831 20.6215 18.6831 20.7568C18.6831 20.8922 18.5734 21.0019 18.438 21.0019H4.00619C3.87088 21.0019 3.76115 20.8922 3.76115 20.7568C3.76115 20.6215 3.87088 20.5118 4.00619 20.5118ZM18.438 21.4183H4.00619C3.87088 21.4183 3.76115 21.528 3.76115 21.6634C3.76115 21.7987 3.87088 21.9084 4.00619 21.9084H18.438C18.5734 21.9084 18.6831 21.7987 18.6831 21.6634C18.6831 21.528 18.5734 21.4183 18.438 21.4183ZM22.215 5.14037L21.3941 5.38557L22.2151 5.63105C22.3189 5.66207 22.3899 5.75749 22.3899 5.8658V8.74639C22.3899 8.85469 22.3188 8.95016 22.215 8.98119L21.3941 9.22633L22.2151 9.47181C22.3189 9.50283 22.3899 9.59825 22.3899 9.70656V12.5871C22.3899 12.6955 22.3188 12.7909 22.215 12.8219L21.3941 13.0671L22.2151 13.3126C22.3189 13.3436 22.3899 13.439 22.3899 13.5473V16.4279C22.3899 16.5362 22.3188 16.6317 22.215 16.6627L21.3941 16.9079L22.2151 17.1533C22.3189 17.1844 22.3899 17.2798 22.3899 17.3881V20.2687C22.3899 20.377 22.3188 20.4725 22.215 20.5035L20.7833 20.931V23.7549C20.7833 23.8902 20.6737 23.9999 20.5383 23.9999H4.28672C3.05199 23.9999 1.61011 23.258 1.61011 21.167V2.21289C1.61006 0.99272 2.60278 0 3.823 0H20.5383C20.6737 0 20.7834 0.109681 20.7834 0.245043V1.3621L22.2152 1.79024C22.3189 1.82126 22.39 1.91668 22.39 2.02499V4.90553C22.39 5.01388 22.3189 5.10935 22.215 5.14037ZM4.37312 19.9437C3.69856 19.9437 3.14981 20.4925 3.14981 21.1671C3.14981 21.8416 3.69856 22.3904 4.37312 22.3904H20.2933V19.9437H18.5079H4.37312ZM20.2933 23.5099V22.8804H4.37312C3.42838 22.8804 2.65973 22.1118 2.65973 21.1671C2.65973 20.2223 3.42838 19.4537 4.37312 19.4537H18.5079H20.2933V18.9442H3.95919C3.68592 18.9442 3.36173 19.0673 3.04626 19.2908C3.00328 19.3212 2.95378 19.3358 2.90482 19.3358C2.82802 19.3359 2.75245 19.2999 2.70467 19.2325C2.62645 19.122 2.65257 18.9691 2.76294 18.8908C3.1605 18.6092 3.58535 18.4541 3.95924 18.4541H4.04172V17.7001C4.04172 17.5648 4.15145 17.4551 4.28677 17.4551C4.42208 17.4551 4.53181 17.5648 4.53181 17.7001V18.4541H20.2934V0.490087H4.53176V15.8183C4.53176 15.9537 4.42203 16.0633 4.28672 16.0633C4.1514 16.0633 4.04167 15.9537 4.04167 15.8183V0.490087H3.823C2.87301 0.490087 2.10019 1.26295 2.10019 2.21289V21.1671C2.10019 23.3969 3.9216 23.5099 4.28672 23.5099H20.2933ZM21.8999 17.5706L20.7834 17.2367V20.4196L21.8999 20.0862V17.5706ZM21.8999 13.7298L20.7834 13.396V16.5788L21.8999 16.2454V13.7298ZM21.8999 9.88907L20.7834 9.55518V12.738L21.8999 12.4046V9.88907ZM21.8999 6.04826L20.7834 5.71441V8.89723L21.8999 8.56383V6.04826ZM21.8999 2.2075L20.7834 1.8736V5.05647L21.8999 4.72302V2.2075ZM6.34582 11.0534L8.41227 6.92047C8.45378 6.8375 8.53861 6.78501 8.63144 6.78501C8.72426 6.78501 8.80909 6.83745 8.8506 6.92047L10.234 9.6874C10.2345 9.68848 10.2351 9.68946 10.2356 9.69059L10.9171 11.0534C10.9776 11.1745 10.9285 11.3217 10.8075 11.3822C10.7723 11.3998 10.7349 11.4081 10.6981 11.4081C10.6082 11.4081 10.5217 11.3585 10.4787 11.2726L9.85764 10.0304H7.40529L6.7842 11.2726C6.72368 11.3936 6.5765 11.4426 6.45545 11.3821C6.33435 11.3217 6.28529 11.1745 6.34582 11.0534ZM7.65033 9.54033H9.61259L8.63144 7.57802L7.65033 9.54033ZM14.142 11.4089H18.2748C18.4102 11.4089 18.5199 11.2992 18.5199 11.1638C18.5199 11.0285 18.4102 10.9188 18.2748 10.9188H14.7336L18.4481 7.20413C18.5182 7.13405 18.5391 7.02868 18.5012 6.93713C18.4633 6.84553 18.3739 6.78584 18.2748 6.78584H14.609C14.4737 6.78584 14.364 6.89552 14.364 7.03089C14.364 7.16625 14.4737 7.27593 14.609 7.27593H17.6832L13.9687 10.9906C13.8986 11.0607 13.8777 11.166 13.9156 11.2576C13.9535 11.3492 14.0428 11.4089 14.142 11.4089ZM11.3867 9.25461H13.4532C13.5885 9.25461 13.6982 9.14492 13.6982 9.00956C13.6982 8.8742 13.5885 8.76452 13.4532 8.76452H11.3867C11.2514 8.76452 11.1417 8.8742 11.1417 9.00956C11.1417 9.14492 11.2513 9.25461 11.3867 9.25461Z"
                fill="black"
            />
        </SvgIcon>
    );
};
export default DictionaryIcon;