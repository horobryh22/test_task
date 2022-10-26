import { SVGProps, VFC } from 'react';

import { RoutePath } from 'app/providers/router/config/routeConfig';
import AddressIcon from 'shared/assets/img/links/address.svg';
import DateIcon from 'shared/assets/img/links/date.svg';
import LogoutIcon from 'shared/assets/img/links/logout.svg';
import MainIcon from 'shared/assets/img/links/main.svg';
import MapIcon from 'shared/assets/img/links/maps.svg';
import SettingIcon from 'shared/assets/img/links/settings.svg';
import TableIcon from 'shared/assets/img/links/tables.svg';
import WidgetIcon from 'shared/assets/img/links/widgets.svg';

export interface SidebarItemType {
    to: string;
    Icon: VFC<SVGProps<SVGSVGElement>>;
    pageName: string;
}

export const SidebarItemList: SidebarItemType[] = [
    { to: RoutePath.main, Icon: MainIcon, pageName: 'Главная' },
    { to: RoutePath.address, Icon: AddressIcon, pageName: 'Поиск адресов' },
    { to: '', Icon: TableIcon, pageName: 'Таблицы' },
    { to: '', Icon: DateIcon, pageName: 'Календарь' },
    { to: '', Icon: MapIcon, pageName: 'Карты' },
    { to: '', Icon: WidgetIcon, pageName: 'Виджеты' },
    { to: '', Icon: SettingIcon, pageName: 'Настройки' },
    { to: '', Icon: LogoutIcon, pageName: 'Выход' },
];

export const SettingsItemList: SidebarItemType[] = [
    { to: '', Icon: MainIcon, pageName: 'Настройки профиля' },
    { to: '', Icon: AddressIcon, pageName: 'Управление финансами' },
];
