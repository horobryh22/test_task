import React, { memo, ReactElement, useState } from 'react';

import { SettingsItemList, SidebarItemType } from '../../model/items';

import classes from './SidebarItem.module.scss';

import Arrow from 'shared/assets/img/arrow.svg';
import { classNames } from 'shared/lib';
import { Mods } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui';

interface SidebarItemProps {
    item: SidebarItemType;
    multiline?: boolean;
    className?: string;
}

export const SidebarItem = memo(
    ({ item, multiline, className }: SidebarItemProps): ReactElement => {
        const { to, pageName, Icon } = item;

        const [collapsed, setCollapsed] = useState(true);

        const mappedItems = SettingsItemList.map(item => (
            <SidebarItem key={item.pageName} item={item} className={classes.nested} />
        ));

        const mods: Mods = {
            [classes.collapsed]: collapsed,
        };

        return (
            <div
                className={classNames(classes.SidebarItem, {}, [className])}
                onClick={() => setCollapsed(!collapsed)}
            >
                <AppLink className={classes.item} to={to}>
                    <div className={classes.icon}>
                        <Icon />
                    </div>
                    <span>{pageName}</span>
                </AppLink>
                {multiline && (
                    <>
                        <Arrow className={classNames(classes.arrow, mods)} />
                        {!collapsed && mappedItems}
                    </>
                )}
            </div>
        );
    },
);
