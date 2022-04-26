import React from 'react';
export interface IInputProps {
    tagName?: string;
    className: string;
    type?: string;
    placeholder: string;
    value?: string | number;
    accept?: string;
    onChange: React.ChangeEventHandler | undefined;
}
export interface IInput extends React.FunctionComponent<IInputProps> {
    (props: IInputProps): React.ReactElement;
}
declare const Input: IInput;
export default Input;
