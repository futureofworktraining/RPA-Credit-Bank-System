import React, { forwardRef } from 'react';
import { AppBar, UserMenu, MenuItemLink, useTranslate } from 'react-admin';
import Typography from '@material-ui/core/Typography';
import SettingsIcon from '@material-ui/icons/Settings';
import { makeStyles } from '@material-ui/core/styles';
import QuestionMarkIcon from '@material-ui/icons/Help';
import About from '../about/about'

import Logo from './Logo';

const useStyles = makeStyles({
    title: {
        flex: 1,
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
    },
    spacer: {
        flex: 1,
    },
});

const ConfigurationMenu = forwardRef((_, ref) => {
    const translate = useTranslate();
    return (
        <MenuItemLink
            ref={ref}
            to="/about"
            primaryText={'About the platform'}
            leftIcon={<QuestionMarkIcon />}
        />
    );
});

const CustomUserMenu = props => (
    <UserMenu {...props}>
        <ConfigurationMenu />
    </UserMenu>
);

const CustomAppBar = props => {
    const classes = useStyles();
    return (
        <AppBar style={{backgroundColor: '#53caef' }}{...props} userMenu={<CustomUserMenu />}>
            <Typography
                variant="h6"
                className={classes.title}
                id="react-admin-title"
            />
            <Logo />
            <span className={classes.spacer} />
        </AppBar>
    );
};

export default CustomAppBar;
