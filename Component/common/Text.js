import * as tslib_1 from "tslib";
import * as React from 'react';
import { Text as RNText, StyleSheet } from 'react-native';
import { ANativeComponent } from '../base';
import { NativeFactory as f } from '../../class/Factory';
import { componentHp } from '../../helper';
export class Text extends ANativeComponent {
    render() {
        const defaultStyles = getStyles();
        const topProps = componentHp.createTopProps({
            style: [defaultStyles.style, this.props.style],
        });
        return React.createElement(RNText, tslib_1.__assign({}, defaultProps, this.props, topProps));
    }
}
let _styles;
const getStyles = () => {
    if (!_styles && f.Device) {
        try {
            _styles = StyleSheet.create({
                style: {
                    fontSize: f.Device.getActualSize(7),
                    backgroundColor: 'transparent'
                }
            });
        }
        catch (e) {
        }
    }
    return _styles;
};
const defaultProps = {};
