import { ChangeEvent, InputHTMLAttributes, memo, ReactElement } from 'react';

import classes from './Input.module.scss';

import { classNames } from 'shared/lib';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value'>;

interface InputProps extends HTMLInputProps {
    className?: string;
    onChange?: (value: string) => void;
    value?: string;
}

export const Input = memo((props: InputProps): ReactElement => {
    const { type = 'text', onChange, value, className, ...restProps } = props;

    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const value = e.currentTarget.value;

        onChange?.(value);
    };

    return (
        <div className={classNames(classes.Input, {}, [className])}>
            <input
                {...restProps}
                className={classes.input}
                type={type}
                onChange={handleChange}
                value={value}
            />
        </div>
    );
});
