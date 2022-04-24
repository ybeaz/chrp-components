import React from 'react'

import { IAction } from '../../interfaces/IAction'
import { default as Image } from '../Image'
import { default as IconReact } from '../IconReact'

export interface IButtonProps {
  Icon?: any // generic react icon from https://react-icons.github.io/react-icons/
  Icon2?: any // generic react icon from https://react-icons.github.io/react-icons/
  imageSrc?: string // image source for the image inside the button
  captureLeft?: string | React.ReactElement // capture on the left of the icon/ image
  captureRight?: string // capture on the right of the icon/ button
  classAdded: string // calss added to the button, to make it css unique
  action?: IAction // action to assign the button
  isDisplaying?: boolean // is the button displaing at all
  tooltipText?: string // tooltips text for the button to provide user with a promt
  tooltipPosition?: string // options: ['top','right','bottom','left']
  isTooltipVisibleForced?: boolean // is tooltips visible, to manage it
  isUnderlined?: boolean // is the button underlined to highlight on of the buttons
  handleEvents: Function // to pass handleEvents custom functioon instead of the action
}

export interface IButton extends React.FunctionComponent<IButtonProps> {
  (props: IButtonProps): React.ReactElement
}

const Button: IButton = props => {
  const {
    Icon = undefined,
    Icon2 = undefined,
    imageSrc = undefined,
    captureLeft,
    captureRight,
    classAdded = '',
    action = {},
    isDisplaying = true,
    tooltipText = '',
    tooltipPosition = 'top',
    isTooltipVisibleForced = false,
    isUnderlined = false,
    handleEvents,
  } = props

  const classDisplay = isDisplaying === true ? '' : 'Button_none'

  const classTooltipsDictionary: Record<string, string> = {
    top: '_tooltipTop',
    right: '_tooltipRight',
    bottom: '_tooltipBottom',
    left: '_tooltipLeft',
  }

  let classTooltipAdd: any = classTooltipsDictionary[tooltipPosition]

  classTooltipAdd = isTooltipVisibleForced
    ? `${classTooltipAdd} _tooltipTextVisible`
    : classTooltipAdd

  const propsOut = {
    iconReactProps: {
      Icon,
      Icon2,
      classAdded: `_in IconReact_${classAdded}`,
    },
    imageProps: {
      classAdded: `_in Image_${classAdded}`,
      src: imageSrc,
    },
  }

  return (
    <div className={`Button ${classAdded} ${classDisplay}`}>
      {tooltipText ? (
        <span className={`_tooltipText ${classTooltipAdd}`}>{tooltipText}</span>
      ) : null}

      <button
        className={`_button`}
        type='button'
        onClickCapture={(event: React.MouseEvent<HTMLButtonElement>) =>
          handleEvents(event, action)
        }
      >
        {captureLeft ? (
          <div className='_in'>
            <div className={`_capture_left`}>{captureLeft}</div>
          </div>
        ) : null}
        {Icon || Icon2 ? <IconReact {...propsOut.iconReactProps} /> : null}
        {imageSrc && <Image {...propsOut.imageProps} />}
        {captureRight ? (
          <div className='_in'>
            <div className={`_capture_right`}>{captureRight}</div>
          </div>
        ) : null}
      </button>
      {isUnderlined && <hr className='_underlined' />}
    </div>
  )
}

export default Button
