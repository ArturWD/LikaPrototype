import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import FaceIcon from '@material-ui/icons/Face';
import { matchPath, useHistory } from 'react-router';
import cn from 'classnames';

import { useAppContext } from '../../store';
import { logout } from '../../store/user';
import { spaUrls } from '../../common/urls';
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
    const history = useHistory();
    const { dispatch } = useAppContext();
    const handleNavigateItemClick = (to: string) => () => {
        history.push(to);
    };
    const handleLogoutClick = () => {
        logout(dispatch);
    };

    const isCurrentPage = (path: string, exact = false): boolean => {
        console.log('match');
        return !!matchPath(history.location.pathname, { path, exact });
    };
    useEffect(() => {
        console.log('update path');
    }, [history]);
    console.log('render');
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
                                    onClick={handleNavigateItemClick(item.link)}
                                    forceActiveState={isCurrentPage(
                                        item.link,
                                        !!item.matchExact
                                    )}
                                >
                                    {item.name}
                                </Button>
                            );
                        case NavigationItemType.Separator:
                            return (
                                <div
                                    key={item.id}
                                    className={classes.separator}
                                ></div>
                            );
                        default:
                            return null;
                    }
                })}
            </nav>

            <div className={classes.bottomItems}>
                <Button
                    className={classes.navbarItem}
                    icon={<FaceIcon />}
                    onClick={handleNavigateItemClick(spaUrls.profile.profile())}
                    forceActiveState={isCurrentPage(spaUrls.profile.profile())}
                >
                    Profile
                </Button>
                <Button
                    onClick={handleLogoutClick}
                    className={classes.navbarItem}
                    icon={<LogoutIcon />}
                >
                    Logout
                </Button>
            </div>
        </div>
    );
};
export default Navbar;
