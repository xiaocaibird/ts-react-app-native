var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import * as React from 'react';
import { Image as RNImage, StyleSheet } from 'react-native';
import { baseNativeComponent } from '../base';
import { componentHp } from '../../helper';
export class Image extends baseNativeComponent {
    render() {
        const defaultStyles = getStyles();
        const topProps = componentHp.createTopProps({
            style: [defaultStyles.style, this.props.style],
        });
        return React.createElement(RNImage, __assign({}, defaultProps, this.props, topProps));
    }
}
let _styles;
const getStyles = () => {
    if (!_styles) {
        try {
            _styles = StyleSheet.create({
                style: {}
            });
        }
        catch (e) {
        }
    }
    return _styles;
};
const defaultProps = {
    source: { uri: '' },
    resizeMode: 'stretch'
};
