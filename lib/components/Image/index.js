import React from 'react';
const Image = props => {
    const { classAdded, src, handleEvents = () => ({}), action } = props;
    const handleEventsToUse = action ? handleEvents : () => ({});
    const classCursor = action ? '_cursor' : '';
    return (React.createElement("div", { className: `Image ${classAdded}`, onClickCapture: (event) => handleEventsToUse(event, action) },
        React.createElement("img", { className: `_image ${classCursor}`, src: src })));
};
export default Image;
