import * as React from 'react';
import { StyleSheet } from 'react-native';
import { View, Text } from './';
import { ANativeComponent } from '../base';
import { componentHp } from '../../helper';
import { NativeFactory as f } from '../../class/Factory';

type viewProps = {} & React.ViewProperties;
type textProps = {} & React.TextProperties;
type state = tCommon.reactState;

class Tr extends ANativeComponent<viewProps, state>  {
    render() {
        const defaultStyles = getStyles();
        const topProps = componentHp.createTopProps({
            style: [defaultStyles.Tr, this.props.style],
        });
        return <View {...trDefaultProps} {...this.props} {...topProps} />
    }
}

class Th extends ANativeComponent<viewProps, state>  {
    render() {
        const defaultStyles = getStyles();
        const topProps = componentHp.createTopProps({
            style: [defaultStyles.Th, this.props.style],
        });
        return <View {...thDefaultProps} {...this.props} {...topProps} />
    }
}
class ThText extends ANativeComponent<textProps, state>  {
    render() {
        const defaultStyles = getStyles();
        const topProps = componentHp.createTopProps({
            style: [defaultStyles.ThText, this.props.style],
        });
        return <Text {...thTextDefaultProps} {...this.props} {...topProps} />
    }
}

class Td extends ANativeComponent<viewProps, state>  {
    render() {
        const defaultStyles = getStyles();
        const topProps = componentHp.createTopProps({
            style: [defaultStyles.Td, this.props.style],
        });
        return <View {...tdDefaultProps} {...this.props} {...topProps} />
    }
}
class TdText extends ANativeComponent<textProps, state>  {
    render() {
        const defaultStyles = getStyles();
        const topProps = componentHp.createTopProps({
            style: [defaultStyles.TdText, this.props.style],
        });
        return <Text {...tdTextDefaultProps} {...this.props} {...topProps} />
    }
}

export class Table extends ANativeComponent<viewProps, state>  {
    static Tr = Tr;
    static Th = Th;
    static ThText = ThText;
    static Td = Td;
    static TdText = TdText;
    render() {
        const defaultStyles = getStyles();
        const topProps = componentHp.createTopProps({
            style: [defaultStyles.Table, this.props.style],
        });
        return <View {...tableDefaultProps} {...this.props} {...topProps} />
    }
}

type styles = {
    Table: React.ViewStyle,
    Tr: React.ViewStyle,
    Th: React.ViewStyle,
    ThText: React.TextStyle,
    Td: React.ViewStyle,
    TdText: React.TextStyle,
};

let _styles: styles;

const getStyles = () => {
    if (!_styles && f.Device) {
        try {
            _styles = StyleSheet.create<styles>({
                Table: {
                    flexDirection: 'column',
                    alignItems: 'stretch',
                    padding: 0
                },
                Tr: {
                    flexDirection: 'row',
                    alignItems: 'stretch',
                    padding: 0,
                    margin: 0,
                },
                Th: {
                    flex: 1,
                    margin: 0,
                    padding: f.Device.getActualSize(3),
                    justifyContent: 'center',
                    alignItems: 'center'
                },
                ThText: {
                    flex: 1,
                    fontSize: f.Device.getActualSize(7),
                    fontWeight: 'bold',
                    margin: f.Device.getActualSize(3),
                    alignSelf: 'center',
                    textAlign: 'center'
                },
                Td: {
                    flex: 1,
                    margin: 0,
                    padding: f.Device.getActualSize(3),
                    justifyContent: 'center',
                    alignItems: 'center'
                },
                TdText: {
                    flex: 1,
                    fontSize: f.Device.getActualSize(7),
                    margin: f.Device.getActualSize(3),
                    alignSelf: 'center',
                    textAlign: 'center'
                }
            });
        }
        catch (e) {

        }
    }
    return _styles
}

const tableDefaultProps: React.ViewProperties = {

}

const trDefaultProps: React.ViewProperties = {

}

const thDefaultProps: React.ViewProperties = {

}
const thTextDefaultProps: React.TextProperties = {

}
const tdDefaultProps: React.ViewProperties = {

}

const tdTextDefaultProps: React.TextProperties = {

}

