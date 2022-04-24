import React from 'react'

import { IAction } from '../../interfaces/IAction'

export interface IImageProps {
  classAdded: string
  src: string | undefined
  action?: IAction
  handleEvents?: Function
}

export interface IImage extends React.FunctionComponent<IImageProps> {
  (props: IImageProps): React.ReactElement
}

const Image: IImage = props => {
  const { classAdded, src, handleEvents = () => ({}), action } = props

  const handleEventsToUse = action ? handleEvents : () => ({})
  const classCursor = action ? '_cursor' : ''

  return (
    <div
      className={`Image ${classAdded}`}
      onClickCapture={(event: React.MouseEvent<HTMLDivElement>) =>
        handleEventsToUse(event, action)
      }
    >
      <img className={`_image ${classCursor}`} src={src} />
    </div>
  )
}

export default Image
