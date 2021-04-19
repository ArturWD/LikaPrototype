import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { matchPath } from 'react-router';
import cn from 'classnames';

import Button from '../Button';
import logo from '../../assets/logo.svg';
import { navigationItems, NavigationItemType } from './config';
import styles from './styles';

const useStyles = makeStyles(styles);

type NavbarProps = {
    className?: string;
};
const Navbar: React.FunctionComponent<NavbarProps> = (props) => {
    const classes = useStyles();
    return (
        <div className={cn(classes.root, props.className)}>
            <img src={logo} alt="logo" className={classes.logo} />
            <nav>
                {navigationItems.map((item) => {
                    switch (item.type) {
                        case NavigationItemType.Link:
                            return null;
                        case NavigationItemType.Separator:
                            return <div></div>;
                        default:
                            return null;
                    }
                })}
            </nav>

            <div></div>
        </div>
    );
};
export default Navbar;
