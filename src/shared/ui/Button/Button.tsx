import { ButtonHTMLAttributes, ReactElement, SVGProps, VFC } from 'react';

import classes from './Button.module.scss';

import { classNames, Mods } from 'shared/lib/classNames/classNames';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    Icon: VFC<SVGProps<SVGSVGElement>>;
}

export const Button = (props: ButtonProps): ReactElement => {
    const { children, className, disabled, Icon, ...restProps } = props;

    const mods: Mods = {
        [classes.disabled]: disabled,
    };

    return (
        <button
            type={'button'}
            {...restProps}
            disabled={disabled}
            className={classNames(classes.Button, mods, [className])}
        >
            <Icon className={classes.icon} />
            {children}
        </button>
    );
};
