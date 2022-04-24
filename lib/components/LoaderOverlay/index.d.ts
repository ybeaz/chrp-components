import React from 'react';
export interface ILoaderOverlayProps {
    isLoaderOverlayVisible: boolean;
}
export interface ILoaderOverlay extends React.FunctionComponent<ILoaderOverlayProps> {
    (props: ILoaderOverlayProps): React.ReactElement;
}
declare const LoaderOverlay: ILoaderOverlay;
export default LoaderOverlay;
