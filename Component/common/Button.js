import * as React from 'react';
import { StyleSheet } from 'react-native';
import { baseNativeComponent } from '../base';
import { Text, TouchableOpacity } from './';
import { NativeFactory as f } from '../../class/Factory';
export class Button extends baseNativeComponent {
    render() {
        const { text, style, textStyle, onPress } = this.props;
        const styles = getStyles();
        return (React.createElement(TouchableOpacity, { style: [styles.container, style], onPress: onPress },
            React.createElement(Text, { style: [styles.Text, textStyle] }, text)));
    }
}
let _styles;
const getStyles = () => {
    if (!_styles && f.Device) {
        try {
            _styles = StyleSheet.create({
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
    return _styles;
};
