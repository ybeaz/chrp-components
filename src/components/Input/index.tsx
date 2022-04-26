import React, { useRef } from 'react'

export interface IInputProps {
  tagName?: string // input tag, may be 'input' or 'textarea'
  className: string // class to add to customize the standard input class
  type?: string // type of html tag, for example, <input type='text' >
  placeholder: string // placeholder text
  value?: string | number // value, that fills attribute value of <input ...> tag
  accept?: string // accepted files' format for type='file', for example, 'image/png, image/jpeg, image/jpg'
  onChange: React.ChangeEventHandler | undefined
}

export interface IInput extends React.FunctionComponent<IInputProps> {
  (props: IInputProps): React.ReactElement
}

const Input: IInput = props => {
  const {
    tagName = 'input',
    className,
    type,
    placeholder,
    value,
    accept,
    onChange,
  } = props

  const inputFileRef = useRef(null)

  // TODO Make click programmaticaly from another element to change default label
  // https://stackoverflow.com/questions/32433594/how-to-trigger-input-file-event-reactjs-by-another-dom
  // const handleClick = () => {
  //   inputFileRef.current.type = type
  //   inputFileRef.current.onInput()
  // }

  return (
    <div className={`Input4 ${className}`}>
      <div className='_form'>
        {tagName === 'input' && (
          <input
            className={'_input _hidden'}
            ref={inputFileRef}
            type={type}
            placeholder={placeholder}
            value={value}
            accept={accept}
            onChange={onChange}
          />
        )}
        {tagName === 'textarea' && (
          <textarea
            className={'_input'}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
          />
        )}
      </div>
    </div>
  )
}

export default Input
