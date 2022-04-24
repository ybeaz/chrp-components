import React from 'react';
export interface IInputProps {
    Icon?: any;
    Icon2?: any;
    tagName?: string;
    classAdded: string;
    type?: string;
    placeholder: string;
    typeEvent: string;
    handleEvents: Function;
    value?: string | number;
    accept?: string;
}
export interface IInput extends React.FunctionComponent<IInputProps> {
    (props: IInputProps): React.ReactElement;
}
declare const Input: IInput;
export default Input;
