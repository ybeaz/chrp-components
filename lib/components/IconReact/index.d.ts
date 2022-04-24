import React from 'react';
export interface IIconReactProps {
    classAdded: string;
    Icon?: any;
    Icon2?: any;
}
export interface IIconReact extends React.FunctionComponent<IIconReactProps> {
    (props: IIconReactProps): React.ReactElement;
}
declare const IconReact: IIconReact;
export default IconReact;
