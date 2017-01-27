import * as tslib_1 from "tslib";
import * as React from 'react';
import { StyleSheet } from 'react-native';
import { TextInput } from './';
import { ANativeComponent } from '../base';
import { componentHp } from '../../helper';
export class PasswordInput extends ANativeComponent {
    render() {
        const defaultStyles = getStyles();
        const topProps = componentHp.createTopProps({
            style: [defaultStyles.style, this.props.style],
        });
        return React.createElement(TextInput, tslib_1.__assign({}, defaultProps, this.props, topProps));
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
    maxLength: 12,
    secureTextEntry: true,
    placeholder: '密    码'
};
