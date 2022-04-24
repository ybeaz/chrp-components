import React from 'react'

export interface ILoaderOverlayProps {
  isLoaderOverlayVisible: boolean
}

export interface ILoaderOverlay
  extends React.FunctionComponent<ILoaderOverlayProps> {
  (props: ILoaderOverlayProps): React.ReactElement
}

const LoaderOverlay: ILoaderOverlay = props => {
  const { isLoaderOverlayVisible } = props

  const classAdd = isLoaderOverlayVisible ? 'LoaderOverlay_show' : ''

  return (
    <div className={`LoaderOverlay ${classAdd}`}>
      <div className={`_spinner`}></div>
    </div>
  )
}

export default LoaderOverlay
