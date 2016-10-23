import * as React from 'react';
import { StyleSheet } from 'react-native';
import {
    MaskLayer,
    View,
    ActivityIndicator
} from './';
import { baseNativeComponent } from '../base';

type props = {
    show: boolean,
    color?: string,
    size?: 'small' | 'large' | number
};
type state = tCommon.reactState;

export class LoadingSpinner extends baseNativeComponent<props, state> {
    render() {
        const {show = false, color = '#D1D1D1', size} = this.props;
        const styles = getStyles();
        const hide = show ? null : styles.hide;
        return <View style={[styles.view, hide]}>
            <MaskLayer />
            <ActivityIndicator animating={true} size={size} color={color} />
        </View>

    }
}

type styles = {
    view: React.ViewStyle,
    hide: React.ViewStyle
};

let _styles: styles;

const getStyles = () => {
    if (!_styles) {
        try {
            _styles = StyleSheet.create<styles>({
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
    return _styles
}