import { ReactElement } from 'react';

import { Address } from '../../model/types';

import classes from './ItemList.module.scss';

import { classNames } from 'shared/lib';

interface ItemListProps {
    className?: string;
    items: Address[];
}

export const ItemList = ({ className, items }: ItemListProps): ReactElement => {
    const mappedItems = items.map((item, index) => {
        return (
            <li key={index + item.unrestricted_value} className={classes.item}>
                <a href={`mailto:ask@someone.ru?subject=${item.value}`}>{item.value}</a>
            </li>
        );
    });

    return (
        <div className={classNames(classes.ItemList, {}, [className])}>
            <h2 className={classes.subtitle}>Адреса:</h2>
            <ul>
                {items.length ? (
                    mappedItems
                ) : (
                    <h3 className={classes.text}>
                        Данные не были найдены по вашему запросу
                    </h3>
                )}
            </ul>
        </div>
    );
};
