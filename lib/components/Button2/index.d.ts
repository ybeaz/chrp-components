import React from 'react';
export interface IButton2Props {
    name: string;
}
export interface IButton2 extends React.FunctionComponent<IButton2Props> {
    (props: IButton2Props): React.ReactElement;
}
declare const Button2: IButton2;
export default Button2;
