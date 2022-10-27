import { ReactElement } from 'react';

import classes from './AddressPage.module.scss';

import { Search } from 'features/FetchAddress';
import { classNames } from 'shared/lib';

const AddressPage = (): ReactElement => {
    return (
        <div className={classNames(classes.AddressPage)}>
            <h1 className={classes.title}>Поиск адресов</h1>
            <h2 className={classes.subtitle}>Введите интересующий вас адрес</h2>
            <Search />
        </div>
    );
};

export default AddressPage;
