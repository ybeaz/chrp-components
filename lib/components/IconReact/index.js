import React from 'react';
import { IconContext } from 'react-icons';
const IconReact = props => {
    const { Icon, Icon2, classAdded } = props;
    return (React.createElement(React.Fragment, null, Icon && (React.createElement("div", { className: `IconReact ${classAdded}` },
        React.createElement(IconContext.Provider, { value: {
                className: `_icon`,
            } },
            React.createElement(Icon, null)),
        Icon2 && (React.createElement(IconContext.Provider, { value: {
                className: `_icon`,
            } },
            React.createElement(Icon2, null)))))));
};
export default IconReact;
