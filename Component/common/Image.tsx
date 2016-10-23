import * as React from 'react';
import { Image as RNImage, StyleSheet } from 'react-native';
import { baseNativeComponent } from '../base';
import { componentHp } from '../../helper';
type props = {} & React.ImageProperties;
type state = tCommon.reactState;

export class Image extends baseNativeComponent<props, state>  {
    render() {
        const defaultStyles = getStyles();
        const topProps = componentHp.createTopProps({
            style: [defaultStyles.style, this.props.style],
        });
        return <RNImage {...defaultProps} {...this.props} {...topProps} />
    }
}

type styles = {
    style: React.ImageStyle
};

let _styles: styles;

const getStyles = () => {
    if (!_styles) {
        try {
            _styles = StyleSheet.create<styles>({
                style: {
                }
            });
        }
        catch (e) {

        }
    }
    return _styles
}


const defaultProps: React.ImageProperties = {
    source: { uri: '' },
    resizeMode: 'stretch'
}

