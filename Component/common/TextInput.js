var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import * as React from 'react';
import { TextInput as RNTextInput, StyleSheet, findNodeHandle } from 'react-native';
import TextStylePropTypes from 'react-native/Libraries/Text/TextStylePropTypes';
import ViewStylePropTypes from 'react-native/Libraries/Components/View/ViewStylePropTypes';
import { View } from './';
import { baseNativeComponent } from '../base';
import { componentHp, objHp } from '../../helper';
import { NativeFactory as f } from '../../class/Factory';
export class TextInput extends baseNativeComponent {
    constructor() {
        super(...arguments);
        this.onFocus = () => {
            const { onFocus, setNowFocusNode } = this.props;
            if (typeof setNowFocusNode === 'function') {
                setNowFocusNode(findNodeHandle(this.refs['TextInput']));
            }
            if (typeof onFocus === 'function') {
                onFocus();
            }
        };
    }
    render() {
        if (f.Device.IsIOS) {
            const defaultStyles = getStyles();
            const topProps = componentHp.createTopProps({
                setNowFocusNode: undefined,
                ref: 'TextInput',
                onFocus: this.onFocus,
                style: [defaultStyles.style, this.props.style],
            });
            return React.createElement(RNTextInput, __assign({}, defaultProps, this.props, topProps));
        }
        else {
            const styleObj = StyleSheet.flatten(this.props.style);
            const ViewStyle = objHp.omit(styleObj, containerStyleOmitProps);
            const TextStyle = objHp.pick(styleObj, containerStyleOmitProps);
            const defaultStylesAndroid = getStylesAndroid();
            const topProps = componentHp.createTopProps({
                setNowFocusNode: undefined,
                ref: 'TextInput',
                style: [defaultStylesAndroid.style, TextStyle, defaultStylesAndroid.topStyle],
            });
            return React.createElement(View, {style: [ViewStyle, defaultStylesAndroid.topContainerStyle]}, 
                React.createElement(RNTextInput, __assign({}, defaultProps, this.props, topProps))
            );
        }
    }
}
const containerStyleOmitProps = (() => {
    const props = [];
    for (var p in TextStylePropTypes) {
        if (!ViewStylePropTypes.hasOwnProperty(p)) {
            props.push(p);
        }
    }
    props.push('width');
    props.push('height');
    props.push('padding');
    props.push('paddingBottom');
    props.push('paddingHorizontal');
    props.push('paddingLeft');
    props.push('paddingRight');
    props.push('paddingTop');
    props.push('paddingVertical');
    return props;
})();
let _styles;
const getStyles = () => {
    if (!_styles && f.Device) {
        try {
            _styles = StyleSheet.create({
                style: {
                    alignSelf: 'auto',
                    height: f.Device.getActualSize(8)
                }
            });
        }
        catch (e) {
        }
    }
    return _styles;
};
let _stylesAndroid;
const getStylesAndroid = () => {
    if (!_stylesAndroid && f.Device) {
        try {
            _stylesAndroid = StyleSheet.create({
                style: {
                    alignSelf: 'auto',
                    height: f.Device.getActualSize(8),
                    padding: 0
                },
                topStyle: {
                    margin: 0,
                    backgroundColor: 'transparent'
                },
                topContainerStyle: {
                    flexDirection: 'column',
                    alignItems: 'stretch'
                }
            });
        }
        catch (e) {
        }
    }
    return _stylesAndroid;
};
const defaultProps = {
    maxLength: 20,
    clearButtonMode: 'always',
    placeholder: '请输入',
    underlineColorAndroid: 'transparent'
};
