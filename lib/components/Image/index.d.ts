import React from 'react';
import { IAction } from '../../interfaces/IAction';
export interface IImageProps {
    classAdded: string;
    src: string | undefined;
    action?: IAction;
    handleEvents?: Function;
}
export interface IImage extends React.FunctionComponent<IImageProps> {
    (props: IImageProps): React.ReactElement;
}
declare const Image: IImage;
export default Image;
