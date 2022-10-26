import React, { memo, ReactElement } from 'react';

import { SidebarItemList } from '../../model/items';
import { SidebarItem } from '../SidebarItem/SidebarItem';

import classes from './Sidebar.module.scss';

import { classNames } from 'shared/lib';

interface SidebarProps {
    className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps): ReactElement => {
    const mappedItems = SidebarItemList.map(item => (
        <SidebarItem
            key={item.pageName}
            item={item}
            multiline={item.pageName === 'Настройки'}
        />
    ));

    return (
        <div className={classNames(classes.Sidebar, {}, [className])}>
            <span className={classes.title}>Меню</span>
            <div className={classes.items}>{mappedItems}</div>
        </div>
    );
});
