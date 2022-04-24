import React from 'react'
import { IconContext } from 'react-icons'

export interface IIconReactProps {
  classAdded: string
  Icon?: any // generic react icon from https://react-icons.github.io/react-icons/
  Icon2?: any // generic react icon from https://react-icons.github.io/react-icons/
}

export interface IIconReact extends React.FunctionComponent<IIconReactProps> {
  (props: IIconReactProps): React.ReactElement
}

const IconReact: IIconReact = props => {
  const { Icon, Icon2, classAdded } = props

  return (
    <>
      {Icon && (
        <div className={`IconReact ${classAdded}`}>
          <IconContext.Provider
            value={{
              className: `_icon`,
            }}
          >
            <Icon />
          </IconContext.Provider>
          {Icon2 && (
            <IconContext.Provider
              value={{
                className: `_icon`,
              }}
            >
              <Icon2 />
            </IconContext.Provider>
          )}
        </div>
      )}
    </>
  )
}

export default IconReact
