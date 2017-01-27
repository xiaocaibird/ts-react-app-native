import * as React from 'react';
import { TextInput as RNTextInput, StyleSheet, findNodeHandle } from 'react-native';
import TextStylePropTypes from 'react-native/Libraries/Text/TextStylePropTypes';
import ViewStylePropTypes from 'react-native/Libraries/Components/View/ViewStylePropTypes';
import { View } from './';
import { ANativeComponent } from '../base';
import { componentHp, objHp } from '../../helper';
import { NativeFactory as f } from '../../class/Factory';

type props = tNativeComponent.TextInput.props;
type state = tCommon.reactState;

export class TextInput extends ANativeComponent<props, state>  {
    render() {
        if (f.Device.IsIOS) {
            const defaultStyles = getStyles();
            const topProps = componentHp.createTopProps({
                setNowFocusNode: undefined,
                ref: 'TextInput',
                onFocus: this.onFocus,
                style: [defaultStyles.style, this.props.style],
            });
            return <RNTextInput {...defaultProps} {...this.props} {...topProps} />
        }
        else {
            const styleObj: React.TextStyle = StyleSheet.flatten(this.props.style);
            const ViewStyle: React.ViewStyle = objHp.omit(styleObj, containerStyleOmitProps);
            const TextStyle: React.TextStyle = objHp.pick(styleObj, containerStyleOmitProps);
            const defaultStylesAndroid = getStylesAndroid();

            const topProps = componentHp.createTopProps({
                setNowFocusNode: undefined,
                ref: 'TextInput',
                style: [defaultStylesAndroid.style, TextStyle, defaultStylesAndroid.topStyle],
            });

            return <View style={[ViewStyle, defaultStylesAndroid.topContainerStyle]}>
                <RNTextInput {...defaultProps} {...this.props} {...topProps} />
            </View>
        }
    }

    private onFocus = () => {
        const {onFocus, setNowFocusNode} = this.props;
        if (typeof setNowFocusNode === 'function') {
            setNowFocusNode(findNodeHandle(this.refs['TextInput']))
        }
        if (typeof onFocus === 'function') {
            onFocus();
        }
    }
}

const containerStyleOmitProps = (() => {
    const props: string[] = [];
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

type styles = {
    style: React.TextStyle
};

let _styles: styles;

const getStyles = () => {
    if (!_styles && f.Device) {
        try {
            _styles = StyleSheet.create<styles>({
                style: {
                    alignSelf: 'auto',
                    height: f.Device.getActualSize(8)
                }
            });
        }
        catch (e) {

        }
    }
    return _styles
}

type stylesAndroid = {
    style: React.TextStyle,
    topStyle: React.TextStyle,
    topContainerStyle: React.ViewStyle
};

let _stylesAndroid: stylesAndroid;

const getStylesAndroid = () => {
    if (!_stylesAndroid && f.Device) {
        try {
            _stylesAndroid = StyleSheet.create<stylesAndroid>({
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
    return _stylesAndroid
}


const defaultProps: React.TextInputProperties = {
    maxLength: 20,
    clearButtonMode: 'always',
    placeholder: '请输入',
    underlineColorAndroid: 'transparent'
}