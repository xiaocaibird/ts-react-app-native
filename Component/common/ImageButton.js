var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import * as React from 'react';
import { StyleSheet } from 'react-native';
import { baseNativeComponent } from '../base';
import { Image, TouchableOpacity } from './';
import { componentHp } from '../../helper';
export class ImageButton extends baseNativeComponent {
    render() {
        const { style, imageStyle, onPress } = this.props;
        const defaultStyles = getStyles();
        const topProps = componentHp.createTopProps({
            style: [defaultStyles.imageStyle, imageStyle],
            onPress: undefined,
            imageStyle: undefined
        });
        return (React.createElement(TouchableOpacity, {style: [defaultStyles.container, style], onPress: onPress}, 
            React.createElement(Image, __assign({}, this.props, topProps))
        ));
    }
}
let _styles;
const getStyles = () => {
    if (!_styles) {
        try {
            _styles = StyleSheet.create({
                container: {
                    justifyContent: 'center',
                    alignItems: 'stretch'
                },
                imageStyle: {
                    flex: 1
                }
            });
        }
        catch (e) {
        }
    }
    return _styles;
};
