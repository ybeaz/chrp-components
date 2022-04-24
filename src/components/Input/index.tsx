import React, { useRef } from 'react'

import { default as IconReact } from '../IconReact'

export interface IInputProps {
  Icon?: any // generic react icon from https://react-icons.github.io/react-icons/
  Icon2?: any // generic react icon from https://react-icons.github.io/react-icons/
  tagName?: string // input tag, may be 'input' or 'textarea'
  classAdded: string // class to add to customize the standard input class
  type?: string // type of html tag, for example, <input type='text' >
  placeholder: string // placeholder text
  typeEvent: string // typeEvent to trigger the proper action
  handleEvents: Function // function that accepts action
  value?: string | number // value, that fills attribute value of <input ...> tag
  accept?: string // accepted files' format for type='file', for example, 'image/png, image/jpeg, image/jpg'
}

export interface IInput extends React.FunctionComponent<IInputProps> {
  (props: IInputProps): React.ReactElement
}

const Input: IInput = props => {
  const {
    Icon, // ICONS['AiFillCloseCircle'],
    Icon2,
    tagName = 'input',
    classAdded,
    type,
    placeholder,
    handleEvents,
    typeEvent,
    value,
    accept,
  } = props

  const action = { typeEvent }

  const iconReactProps = {
    Icon,
    Icon2,
    classAdded: `IconReact_Input ${classAdded}`,
  }

  const inputFileRef = useRef(null)

  // TODO Make click programmaticaly from another element to change default label
  // https://stackoverflow.com/questions/32433594/how-to-trigger-input-file-event-reactjs-by-another-dom
  // const handleClick = () => {
  //   inputFileRef.current.type = type
  //   inputFileRef.current.onInput()
  // }

  return (
    <div className={`Input ${classAdded}`}>
      <div className='_form'>
        {tagName === 'input' && (
          <input
            className={'_input _hidden'}
            ref={inputFileRef}
            type={type}
            placeholder={placeholder}
            value={value}
            accept={accept}
            onInput={(event: React.ChangeEvent<HTMLInputElement>) =>
              handleEvents(event, action)
            }
          />
        )}
        {tagName === 'textarea' && (
          <textarea
            className={'_input'}
            placeholder={placeholder}
            onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
              handleEvents(event, action)
            }
            value={value}
          />
        )}
      </div>
      <div
        className='_iconClose'
        onClick={(_event: React.MouseEvent<HTMLSpanElement>) =>
          handleEvents({ target: { value: '' } }, action)
        }
      >
        <IconReact {...iconReactProps} />
      </div>
    </div>
  )
}

export default Input
