import * as React from 'react';
import { Text as RNText, StyleSheet } from 'react-native';
import { ANativeComponent } from '../base';
import { NativeFactory as f } from '../../class/Factory';
import { componentHp } from '../../helper';

type props = {} & React.TextProperties;
type state = tCommon.reactState;

export class Text extends ANativeComponent<props, state>  {
    render() {
        const defaultStyles = getStyles();
        const topProps = componentHp.createTopProps({
            style: [defaultStyles.style, this.props.style],
        });
        return <RNText {...defaultProps} {...this.props} {...topProps} />
    }
}

type styles = {
    style: React.TextStyle
};

let _styles: styles;

const getStyles = () => {
    if (!_styles && f.Device) {
        try {
            _styles = StyleSheet.create<styles>({
                style: {
                    fontSize: f.Device.getActualSize(7),
                    backgroundColor: 'transparent'
                }
            });
        }
        catch (e) {

        }
    }
    return _styles
}

const defaultProps: React.TextProperties = {

}