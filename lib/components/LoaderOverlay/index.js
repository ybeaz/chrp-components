import React from 'react';
const LoaderOverlay = props => {
    const { isLoaderOverlayVisible } = props;
    const classAdd = isLoaderOverlayVisible ? 'LoaderOverlay_show' : '';
    return (React.createElement("div", { className: `LoaderOverlay ${classAdd}` },
        React.createElement("div", { className: `_spinner` })));
};
export default LoaderOverlay;
