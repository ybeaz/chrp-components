import React from 'react'

export interface IButton2Props {
  name: string
}

export interface IButton2 extends React.FunctionComponent<IButton2Props> {
  (props: IButton2Props): React.ReactElement
}

const Button2: IButton2 = props => {
  const { name } = props
  return <button className='Button'>{name}</button>
}

export default Button2
