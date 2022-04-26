import React from 'react';
export interface IImageProps {
    className: string;
    src: string | undefined;
    isClassCursor?: boolean;
    onClick?: React.MouseEventHandler;
}
export interface IImage extends React.FunctionComponent<IImageProps> {
    (props: IImageProps): React.ReactElement;
}
declare const Image: IImage;
export default Image;
