import * as tslib_1 from "tslib";
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
        return (React.createElement(TouchableOpacity, { style: [defaultStyles.container, style], onPress: onPress },
            React.createElement(Image, tslib_1.__assign({}, this.props, topProps))));
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
