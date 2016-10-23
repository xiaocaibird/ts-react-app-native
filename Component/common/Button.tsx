import * as React from 'react';
import { StyleSheet } from 'react-native';
import { baseNativeComponent } from '../base';
import {
    Text,
    TouchableOpacity
} from './';
import { NativeFactory as f } from '../../class/Factory';

type props = {
    text: string,
    style?: React.ViewStyle,
    textStyle?: React.TextStyle,
    onPress?: tCommon.anyFun
}
type state = tCommon.reactState;

export class Button extends baseNativeComponent<props, state> {
    render() {
        const {text, style, textStyle, onPress} = this.props;
        const styles = getStyles();
        return (
            <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
                <Text style={[styles.Text, textStyle]}>{text}</Text>
            </TouchableOpacity>
        )
    }
}

type styles = {
    container: React.ViewStyle,
    Text: React.TextStyle
};

let _styles: styles;

const getStyles = () => {
    if (!_styles && f.Device) {
        try {
            _styles = StyleSheet.create<styles>({
                container: {
                    paddingHorizontal: f.Device.getActualSize(5),
                    paddingVertical: f.Device.getActualSize(5),
                    borderRadius: f.Device.getActualSize(4),
                    justifyContent: 'center',
                    alignItems: 'center'
                },
                Text: {
                    textAlign: 'center',
                    fontSize: f.Device.getActualSize(10)
                }
            });
        }
        catch (e) {

        }
    }
    return _styles
}
