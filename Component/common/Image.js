import * as tslib_1 from "tslib";
import * as React from 'react';
import { Image as RNImage, StyleSheet } from 'react-native';
import { ANativeComponent } from '../base';
import { componentHp } from '../../helper';
export class Image extends ANativeComponent {
    render() {
        const defaultStyles = getStyles();
        const topProps = componentHp.createTopProps({
            style: [defaultStyles.style, this.props.style],
        });
        return React.createElement(RNImage, tslib_1.__assign({}, defaultProps, this.props, topProps));
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
