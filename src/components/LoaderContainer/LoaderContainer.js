import React from 'react';
import {Wrapper} from './LoaderContainerStyle.js';

//Components
import Loader from 'react-loader-spinner'

const LoaderContainer = () => {
    return(
        <Wrapper>
            <Loader
                type="ThreeDots"
                color="#c59613"
                height={100}
                width={100}
            />
        </Wrapper>
    );
}

export default LoaderContainer;