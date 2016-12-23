import * as React from 'react';
import { StyleSheet } from 'react-native';
import { MaskLayer, View, ActivityIndicator } from './';
import { baseNativeComponent } from '../base';
export class LoadingSpinner extends baseNativeComponent {
    render() {
        const { show = false, color = '#D1D1D1', size } = this.props;
        const styles = getStyles();
        const hide = show ? null : styles.hide;
        return React.createElement(View, { style: [styles.view, hide] },
            React.createElement(MaskLayer, null),
            React.createElement(ActivityIndicator, { animating: true, size: size, color: color }));
    }
}
let _styles;
const getStyles = () => {
    if (!_styles) {
        try {
            _styles = StyleSheet.create({
                view: {
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    justifyContent: 'center',
                    zIndex: 100000,
                    alignItems: 'center',
                },
                hide: {
                    zIndex: -10000,
                    opacity: 0
                }
            });
        }
        catch (e) {
        }
    }
    return _styles;
};
