import { APrompt } from 'ts-react-app-infrastructure';
import { Alert } from 'react-native';
import Toast from 'react-native-root-toast';
import * as hp from '../../helper';
import { NativeFactory as f } from '../Factory';
export class ANativePrompt extends APrompt {
    createPopUp(title, msg, type, okCallBack = hp.funHp.noop, cancelCallBack = hp.funHp.noop) {
        const buttons = type == 4 ?
            [
                { text: '确定', onPress: okCallBack },
                { text: '取消', onPress: cancelCallBack },
            ] :
            [
                { text: '确定', onPress: okCallBack }
            ];
        Alert.alert(title, msg, buttons);
    }
    createToast(msg, onShow = hp.funHp.noop, onHide = hp.funHp.noop) {
        Toast.show(msg, {
            duration: Toast.durations.LONG,
            position: -f.Device.getActualSize(30),
            shadow: true,
            animation: true,
            hideOnPress: true,
            delay: 0,
            onShow: onShow,
            onHide: onHide,
            onHidden: (t) => {
                setTimeout(() => {
                    try {
                        t.destroy();
                    }
                    catch (e) {
                    }
                }, 500);
            }
        });
    }
}
