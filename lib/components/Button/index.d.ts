import React from 'react';
import { IAction } from '../../interfaces/IAction';
export interface IButtonProps {
    Icon?: any;
    Icon2?: any;
    imageSrc?: string;
    captureLeft?: string | React.ReactElement;
    captureRight?: string;
    classAdded: string;
    action?: IAction;
    isDisplaying?: boolean;
    tooltipText?: string;
    tooltipPosition?: string;
    isTooltipVisibleForced?: boolean;
    isUnderlined?: boolean;
    handleEvents: Function;
}
export interface IButton extends React.FunctionComponent<IButtonProps> {
    (props: IButtonProps): React.ReactElement;
}
declare const Button: IButton;
export default Button;
