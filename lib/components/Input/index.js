import React, { useRef } from 'react';
const Input = props => {
    const { tagName = 'input', className, type, placeholder, value, accept, onChange, } = props;
    const inputFileRef = useRef(null);
    // TODO Make click programmaticaly from another element to change default label
    // https://stackoverflow.com/questions/32433594/how-to-trigger-input-file-event-reactjs-by-another-dom
    // const handleClick = () => {
    //   inputFileRef.current.type = type
    //   inputFileRef.current.onInput()
    // }
    return (React.createElement("div", { className: `Input4 ${className}` },
        React.createElement("div", { className: '_form' },
            tagName === 'input' && (React.createElement("input", { className: '_input _hidden', ref: inputFileRef, type: type, placeholder: placeholder, value: value, accept: accept, onChange: onChange })),
            tagName === 'textarea' && (React.createElement("textarea", { className: '_input', placeholder: placeholder, onChange: onChange, value: value })))));
};
export default Input;
