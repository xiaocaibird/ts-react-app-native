import * as React from 'react';
import { WebView as RNWebView, StyleSheet } from 'react-native';
import { baseNativeComponent } from '../base';
import { componentHp } from '../../helper';
type props = {} & React.WebViewProperties;
type state = tCommon.reactState;

export class WebView extends baseNativeComponent<props, state>  {
    render() {
        const defaultStyles = getStyles();
        const topProps = componentHp.createTopProps({
            style: [defaultStyles.style, this.props.style],
        });
        return <RNWebView {...defaultProps} {...this.props} {...topProps} />
    }
}

type styles = {
    style: React.ViewStyle
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


const defaultProps: React.WebViewProperties = {

}

