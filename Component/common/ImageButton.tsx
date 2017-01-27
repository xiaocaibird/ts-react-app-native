import * as React from 'react';
import { StyleSheet } from 'react-native';
import { ANativeComponent } from '../base';
import {
    Image,
    TouchableOpacity
} from './';
import { componentHp } from '../../helper';

type props = React.ImageProperties & {
    style?: React.ViewStyle,
    imageStyle?: React.ImageStyle,
    onPress?: tCommon.anyFun
}
type state = tCommon.reactState;

export class ImageButton extends ANativeComponent<props, state> {
    render() {
        const { style, imageStyle, onPress} = this.props;
        const defaultStyles = getStyles();
        const topProps = componentHp.createTopProps({
            style: [defaultStyles.imageStyle, imageStyle],
            onPress: undefined,
            imageStyle: undefined
        });
        return (
            <TouchableOpacity style={[defaultStyles.container, style]} onPress={onPress}>
                <Image {...this.props} {...topProps} />
            </TouchableOpacity>
        )
    }
}

type styles = {
    container: React.ViewStyle,
    imageStyle: React.ImageStyle
};

let _styles: styles;

const getStyles = () => {
    if (!_styles) {
        try {
            _styles = StyleSheet.create<styles>({
                container: {
                    justifyContent: 'center',
                    alignItems: 'stretch'
                },
                imageStyle: {
                    flex: 1
                }
            });
        }
        catch (e) {

        }
    }
    return _styles
}