import React from 'react';
import { default as Image } from '../Image';
import { default as IconReact } from '../IconReact';
const Button = props => {
    const { Icon = undefined, Icon2 = undefined, imageSrc = undefined, captureLeft, captureRight, classAdded = '', action = {}, isDisplaying = true, tooltipText = '', tooltipPosition = 'top', isTooltipVisibleForced = false, isUnderlined = false, handleEvents, } = props;
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
            classAdded: `_in IconReact_${classAdded}`,
        },
        imageProps: {
            classAdded: `_in Image_${classAdded}`,
            src: imageSrc,
        },
    };
    return (React.createElement("div", { className: `Button ${classAdded} ${classDisplay}` },
        tooltipText ? (React.createElement("span", { className: `_tooltipText ${classTooltipAdd}` }, tooltipText)) : null,
        React.createElement("button", { className: `_button`, type: 'button', onClickCapture: (event) => handleEvents(event, action) },
            captureLeft ? (React.createElement("div", { className: '_in' },
                React.createElement("div", { className: `_capture_left` }, captureLeft))) : null,
            Icon || Icon2 ? React.createElement(IconReact, Object.assign({}, propsOut.iconReactProps)) : null,
            imageSrc && React.createElement(Image, Object.assign({}, propsOut.imageProps)),
            captureRight ? (React.createElement("div", { className: '_in' },
                React.createElement("div", { className: `_capture_right` }, captureRight))) : null),
        isUnderlined && React.createElement("hr", { className: '_underlined' })));
};
export default Button;
