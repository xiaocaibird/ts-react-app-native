import * as tslib_1 from "tslib";
import * as React from 'react';
import { WebView as RNWebView, StyleSheet } from 'react-native';
import { baseNativeComponent } from '../base';
import { componentHp } from '../../helper';
export class WebView extends baseNativeComponent {
    render() {
        const defaultStyles = getStyles();
        const topProps = componentHp.createTopProps({
            style: [defaultStyles.style, this.props.style],
        });
        return React.createElement(RNWebView, tslib_1.__assign({}, defaultProps, this.props, topProps));
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
const defaultProps = {};
