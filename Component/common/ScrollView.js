import * as tslib_1 from "tslib";
import * as React from 'react';
import { ScrollView as RNScrollView, RefreshControl, StyleSheet, Keyboard } from 'react-native';
import { baseNativeComponent } from '../base';
import { funHp, componentHp } from '../../helper';
import { NativeFactory as f } from '../../class/Factory';
export class ScrollView extends baseNativeComponent {
    constructor(props) {
        super(props);
        this.setNowFocusNode = (node) => {
            this.nowFocusNode = node;
        };
        this.keyboardWillShow = (frames) => {
            if (this.nowFocusNode != null) {
                try {
                    let scrollResponder = this.instance.getScrollResponder();
                    scrollResponder.scrollResponderScrollNativeHandleToKeyboard(this.nowFocusNode, frames.endCoordinates.height * 0.5, true);
                }
                catch (e) {
                }
            }
        };
        this.keyboardWillHide = (frames) => {
            if (this.nowFocusNode != null) {
                try {
                    let scrollResponder = this.instance.getScrollResponder();
                    scrollResponder.scrollResponderScrollNativeHandleToKeyboard(this.nowFocusNode, frames.endCoordinates.height, true);
                }
                catch (e) {
                }
            }
        };
        this.onTouchStart = (event) => {
            const { refreshWillTitle = '下拉刷新', onTouchStart } = this.props;
            this.setState({
                refreshTitle: refreshWillTitle
            });
            if (funHp.isFun(onTouchStart)) {
                onTouchStart(event);
            }
        };
        this.onRefresh = () => {
            const { refreshingTitle = '正在刷新...', refreshedTitle = '刷新完成' } = this.props;
            this.setState({
                isRefreshing: true,
                refreshTitle: refreshingTitle
            });
            try {
                this.props.onRefreshCallBack().then(() => {
                    setTimeout(() => {
                        this.setState({
                            isRefreshing: false,
                            refreshTitle: refreshedTitle
                        });
                        setTimeout(() => {
                            this.instance.scrollTo({ x: 0, y: 0, animated: true });
                        }, 200);
                    }, 500);
                });
            }
            catch (e) {
                this.setState({
                    isRefreshing: false,
                    refreshTitle: refreshedTitle
                });
            }
        };
        this.state = {
            refreshTitle: props.refreshWillTitle
        };
    }
    get instance() {
        return this.refs['ScrollView'];
    }
    componentWillUnmount() {
        if (this.keyboardWillShowListener) {
            this.keyboardWillShowListener.remove();
        }
        if (this.keyboardWillHideListener) {
            this.keyboardWillHideListener.remove();
        }
    }
    componentDidMount() {
        if (this.props.needTrimWhenKeyboardShow && f.Device.IsIOS) {
            this.keyboardWillShowListener = Keyboard.addListener('keyboardWillShow', this.keyboardWillShow, null);
            this.keyboardWillHideListener = Keyboard.addListener('keyboardWillHide', this.keyboardWillHide, null);
        }
        if (this.props.needTrim) {
            const param = this.props.horizontal ?
                { x: -1, y: 0, animated: false } :
                { x: 0, y: -1, animated: false };
            this.instance.scrollTo(param);
        }
    }
    render() {
        const { onRefreshCallBack, horizontal, style, contentContainerStyle, RefreshColors = ['#2ecc71'], RefreshProgressBackgroundColor = '#FFFFFF', RefreshSize, RefreshProgressViewOffset, RefreshTitleColor = '#2ecc71', RefreshTintColor = '#2ecc71' } = this.props;
        const { refreshTitle = '下拉刷新', isRefreshing = false } = this.state;
        const defaultStyles = getStyles();
        const topProps = componentHp.createTopProps({
            onRefreshCallBack: undefined,
            needTrim: undefined,
            refreshWillTitle: undefined,
            refreshingTitle: undefined,
            refreshedTitle: undefined,
            ref: 'ScrollView',
            style: [defaultStyles.style, style],
            contentContainerStyle: [defaultStyles.contentContainerStyle, contentContainerStyle],
            onTouchStart: this.onTouchStart,
            refreshControl: !horizontal && funHp.isFun(onRefreshCallBack) ? React.createElement(RefreshControl, { refreshing: isRefreshing, onRefresh: this.onRefresh, tintColor: RefreshTintColor, title: refreshTitle, titleColor: RefreshTitleColor, colors: RefreshColors, progressBackgroundColor: RefreshProgressBackgroundColor, size: RefreshSize, progressViewOffset: RefreshProgressViewOffset })
                : undefined
        });
        return React.createElement(RNScrollView, tslib_1.__assign({}, defaultProps, this.props, topProps));
    }
}
let _styles;
const getStyles = () => {
    if (!_styles && f.Device) {
        try {
            _styles = StyleSheet.create({
                style: {},
                contentContainerStyle: {}
            });
        }
        catch (e) {
        }
    }
    return _styles;
};
const defaultProps = {
    horizontal: false,
    showsHorizontalScrollIndicator: false,
    showsVerticalScrollIndicator: false,
    bouncesZoom: false,
    directionalLockEnabled: true
};
