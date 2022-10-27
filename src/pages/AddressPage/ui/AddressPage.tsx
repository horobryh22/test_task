import { ReactElement } from 'react';

import classes from './AddressPage.module.scss';

import { Search } from 'features/FetchAddress';
import { classNames } from 'shared/lib';

const AddressPage = (): ReactElement => {
    return (
        <div className={classNames(classes.AddressPage)}>
            <span className={classes.title}>Поиск адресов</span>
            <span className={classes.subtitle}>Введите интересующий вас адрес</span>
            <Search />
        </div>
    );
};

export default AddressPage;
