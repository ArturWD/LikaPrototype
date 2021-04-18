import SvgIcon from '@material-ui/core/SvgIcon';
import { FC } from 'react';

export const HelpIcon: FC = (props) => {
    return (
        <SvgIcon {...props}>
            <path
                d="M12.9999 18.0001C12.9999 18.5523 12.5522 19 11.9999 19C11.4477 19 11 18.5523 11 18.0001C11 17.4478 11.4477 17.0001 11.9999 17.0001C12.5522 17.0001 12.9999 17.4478 12.9999 18.0001Z"
                fill="black"
            />
            <path
                d="M12 24C5.38293 24 0 18.6171 0 12C0 5.38293 5.38293 0 12 0C18.6171 0 24 5.38293 24 12C24 18.6171 18.6171 24 12 24ZM12 1.5C6.21002 1.5 1.5 6.21002 1.5 12C1.5 17.79 6.21002 22.5 12 22.5C17.79 22.5 22.5 17.79 22.5 12C22.5 6.21002 17.79 1.5 12 1.5Z"
                fill="black"
            />
            <path
                d="M12.0001 14.75C11.5861 14.75 11.2501 14.414 11.2501 14V12.99C11.2501 12.038 11.8541 11.1849 12.7521 10.868C13.947 10.447 14.7501 9.17389 14.7501 8.24994C14.7501 6.73291 13.5171 5.49988 12.0001 5.49988C10.483 5.49988 9.25 6.73291 9.25 8.24994C9.25 8.66394 8.914 8.99994 8.5 8.99994C8.086 8.99994 7.75 8.66394 7.75 8.24994C7.75 5.90692 9.65613 3.99988 12.0001 3.99988C14.344 3.99988 16.2501 5.90692 16.2501 8.24994C16.2501 9.91803 14.933 11.689 13.251 12.283C12.9511 12.3879 12.7501 12.6729 12.7501 12.9909V14C12.7501 14.414 12.4141 14.75 12.0001 14.75V14.75Z"
                fill="black"
            />
        </SvgIcon>
    );
};
export default HelpIcon;