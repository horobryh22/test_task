import React, { memo, ReactElement } from 'react';

import classes from './Navbar.module.scss';

import Avatar from 'shared/assets/img/avatar.svg';
import Logo from 'shared/assets/img/logo.svg';
import { classNames } from 'shared/lib';

interface NavbarProps {
    className?: string;
}

export const Navbar = memo(({ className }: NavbarProps): ReactElement => {
    return (
        <div className={classNames(classes.Navbar, {}, [String(className)])}>
            <div className={classes.logo}>
                <Logo fill="white" />
                <span>Wrench CRM</span>
            </div>
            <div className={classes.user}>
                <Avatar />
                <span>Имя Фамилия</span>
            </div>
        </div>
    );
});
