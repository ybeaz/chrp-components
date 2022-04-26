import React from 'react';
export interface IButtonProps {
    Icon?: any;
    Icon2?: any;
    imageSrc?: string;
    captureLeft?: string | React.ReactElement;
    captureRight?: string;
    className: string;
    isDisplaying?: boolean;
    tooltipText?: string;
    tooltipPosition?: string;
    isTooltipVisibleForced?: boolean;
    isUnderlined?: boolean;
    onClick: React.MouseEventHandler | undefined;
}
export interface IButton extends React.FunctionComponent<IButtonProps> {
    (props: IButtonProps): React.ReactElement;
}
declare const Button: IButton;
export default Button;
