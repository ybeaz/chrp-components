import React, { useRef } from 'react';
import { default as IconReact } from '../IconReact';
const Input = props => {
    const { Icon, // ICONS['AiFillCloseCircle'],
    Icon2, tagName = 'input', classAdded, type, placeholder, handleEvents, typeEvent, value, accept, } = props;
    const action = { typeEvent };
    const iconReactProps = {
        Icon,
        Icon2,
        classAdded: `IconReact_Input ${classAdded}`,
    };
    const inputFileRef = useRef(null);
    // TODO Make click programmaticaly from another element to change default label
    // https://stackoverflow.com/questions/32433594/how-to-trigger-input-file-event-reactjs-by-another-dom
    // const handleClick = () => {
    //   inputFileRef.current.type = type
    //   inputFileRef.current.onInput()
    // }
    return (React.createElement("div", { className: `Input ${classAdded}` },
        React.createElement("div", { className: '_form' },
            tagName === 'input' && (React.createElement("input", { className: '_input _hidden', ref: inputFileRef, type: type, placeholder: placeholder, value: value, accept: accept, onInput: (event) => handleEvents(event, action) })),
            tagName === 'textarea' && (React.createElement("textarea", { className: '_input', placeholder: placeholder, onChange: (event) => handleEvents(event, action), value: value }))),
        React.createElement("div", { className: '_iconClose', onClick: (_event) => handleEvents({ target: { value: '' } }, action) },
            React.createElement(IconReact, Object.assign({}, iconReactProps)))));
};
export default Input;
