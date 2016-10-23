import * as React from 'react';
import { StyleSheet } from 'react-native';
import { TextInput } from './';
import { baseNativeComponent } from '../base';
import { componentHp } from '../../helper';

type props = {} & tNativeComponent.TextInput.props;
type state = tCommon.reactState;

export class PasswordInput extends baseNativeComponent<props, state>  {
    render() {
        const defaultStyles = getStyles();
        const topProps = componentHp.createTopProps({
            style: [defaultStyles.style, this.props.style],
        });
        return <TextInput {...defaultProps} {...this.props} {...topProps} />
    }
}

type styles = {
    style: React.TextStyle
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

const defaultProps: React.TextInputProperties = {
    maxLength: 12,
    secureTextEntry: true,
    placeholder: '密    码'
}