import { ReactElement } from 'react';

import type { NavLinkProps } from 'react-router-dom';
import { NavLink, useLocation } from 'react-router-dom';

import classes from './AppLink.module.scss';

import { classNames } from 'shared/lib';
import { Mods } from 'shared/lib/classNames/classNames';

interface AppLinkProps extends NavLinkProps {
    className?: string;
}

export const AppLink = (props: AppLinkProps): ReactElement => {
    const { to, children, className, ...restProps } = props;
    let { pathname } = useLocation();

    const mods: Mods = {
        [classes.active]: pathname === to,
    };

    return (
        <NavLink
            {...restProps}
            to={to}
            className={classNames(classes.AppLink, mods, [className])}
        >
            {children}
        </NavLink>
    );
};
