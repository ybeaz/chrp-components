import React from 'react';
const Image = props => {
    const { className, src, onClick, isClassCursor = false } = props;
    const classCursor = isClassCursor ? '_cursor' : '';
    return (React.createElement("div", { className: `Image ${className}`, onClickCapture: onClick },
        React.createElement("img", { className: `_image ${classCursor}`, src: src })));
};
export default Image;
