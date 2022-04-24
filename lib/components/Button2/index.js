import React from 'react';
const Button2 = props => {
    const { name } = props;
    return React.createElement("button", { className: 'Button' }, name);
};
export default Button2;
