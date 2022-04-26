import React from 'react';
import { default as Image } from '../Image';
import { default as IconReact } from '../IconReact';
const Button = props => {
    const { Icon = undefined, Icon2 = undefined, imageSrc = undefined, captureLeft, captureRight, className = '', isDisplaying = true, tooltipText = '', tooltipPosition = 'top', isTooltipVisibleForced = false, isUnderlined = false, onClick, } = props;
    const classDisplay = isDisplaying === true ? '' : 'Button_none';
    const classTooltipsDictionary = {
        top: '_tooltipTop',
        right: '_tooltipRight',
        bottom: '_tooltipBottom',
        left: '_tooltipLeft',
    };
    let classTooltipAdd = classTooltipsDictionary[tooltipPosition];
    classTooltipAdd = isTooltipVisibleForced
        ? `${classTooltipAdd} _tooltipTextVisible`
        : classTooltipAdd;
    const propsOut = {
        iconReactProps: {
            Icon,
            Icon2,
            className: `_in IconReact_${className}`,
        },
        imageProps: {
            className: `_in Image_${className}`,
            src: imageSrc,
        },
    };
    return (React.createElement("div", { className: `Button ${className} ${classDisplay}` },
        tooltipText ? (React.createElement("span", { className: `_tooltipText ${classTooltipAdd}` }, tooltipText)) : null,
        React.createElement("button", { className: `_button`, type: 'button', onClickCapture: onClick },
            captureLeft ? (React.createElement("div", { className: '_in' },
                React.createElement("div", { className: `_capture_left` }, captureLeft))) : null,
            Icon || Icon2 ? React.createElement(IconReact, Object.assign({}, propsOut.iconReactProps)) : null,
            imageSrc && React.createElement(Image, Object.assign({}, propsOut.imageProps)),
            captureRight ? (React.createElement("div", { className: '_in' },
                React.createElement("div", { className: `_capture_right` }, captureRight))) : null),
        isUnderlined && React.createElement("hr", { className: '_underlined' })));
};
export default Button;
