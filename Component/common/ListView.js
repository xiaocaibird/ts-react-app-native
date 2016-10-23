var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import * as React from 'react';
import { ListView as RNListView, RefreshControl, StyleSheet, Keyboard } from 'react-native';
import { baseNativeComponent } from '../base';
import { funHp, componentHp } from '../../helper';
import { NativeFactory as f } from '../../class/Factory';
export class ListView extends baseNativeComponent {
    constructor(props) {
        super(props);
        this.onContentSizeChange = (w, h) => {
            const offset = this.instance.scrollProperties.offset;
            const visibleLength = this.instance.scrollProperties.visibleLength;
            if (this.props.horizontal) {
                let maxOffset = w - visibleLength;
                if (maxOffset < 0)
                    maxOffset = 0;
                if (offset > maxOffset) {
                    this.instance.scrollTo({ x: maxOffset, animated: false });
                }
            }
            else {
                let maxOffset = h - visibleLength;
                if (maxOffset < 0)
                    maxOffset = 0;
                if (offset > maxOffset) {
                    this.instance.scrollTo({ y: maxOffset, animated: false });
                }
            }
            if (funHp.isFun(this.props.onContentSizeChange)) {
                this.props.onContentSizeChange(w, h);
            }
        };
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
        return this.refs['ListView'];
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
            ref: 'ListView',
            style: [defaultStyles.style, style],
            contentContainerStyle: [defaultStyles.contentContainerStyle, contentContainerStyle],
            onTouchStart: this.onTouchStart,
            onContentSizeChange: this.onContentSizeChange,
            refreshControl: !horizontal && funHp.isFun(onRefreshCallBack) ? React.createElement(RefreshControl, {refreshing: isRefreshing, onRefresh: this.onRefresh, tintColor: RefreshTintColor, title: refreshTitle, titleColor: RefreshTitleColor, colors: RefreshColors, progressBackgroundColor: RefreshProgressBackgroundColor, size: RefreshSize, progressViewOffset: RefreshProgressViewOffset})
                : undefined
        });
        return React.createElement(RNListView, __assign({}, defaultProps, this.props, topProps));
    }
}
ListView.DataSource = RNListView.DataSource;
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
    directionalLockEnabled: true,
    initialListSize: 15,
    onEndReachedThreshold: 10,
    pageSize: 5,
    scrollRenderAheadDistance: 30,
    enableEmptySections: true
};
