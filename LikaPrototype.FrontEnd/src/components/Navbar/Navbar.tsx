import React from 'react';
import { makeStyles } from '@material-ui/styles';
import FaceIcon from '@material-ui/icons/Face';
import { matchPath } from 'react-router';
import cn from 'classnames';

import Button from '../Button';
import { LogoutIcon } from '../../assets/icons';
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
            <nav className={classes.topItems}>
                {navigationItems.map((item) => {
                    switch (item.type) {
                        case NavigationItemType.Link:
                            return (
                                <Button
                                    key={item.id}
                                    className={classes.navbarItem}
                                    icon={<item.icon />}
                                >
                                    {item.name}
                                </Button>
                            );
                        case NavigationItemType.Separator:
                            return <div className={classes.separator}></div>;
                        default:
                            return null;
                    }
                })}
            </nav>

            <div className={classes.bottomItems}>
                <Button className={classes.navbarItem} icon={<FaceIcon />}>
                    Profile
                </Button>
                <Button className={classes.navbarItem} icon={<LogoutIcon />}>
                    Logout
                </Button>
            </div>
        </div>
    );
};
export default Navbar;
