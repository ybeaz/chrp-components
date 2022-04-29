import React from 'react'

export interface IImageProps {
  className: string
  src?: string
  isClassCursor?: boolean
  onClick?: React.MouseEventHandler
}

export interface IImage extends React.FunctionComponent<IImageProps> {
  (props: IImageProps): React.ReactElement
}

const Image: IImage = props => {
  const { className, src, onClick, isClassCursor = false } = props

  const classCursor = isClassCursor ? '_cursor' : ''

  return (
    <div className={`Image ${className}`} onClickCapture={onClick}>
      <img className={`_image ${classCursor}`} src={src || ''} />
    </div>
  )
}

export default Image
