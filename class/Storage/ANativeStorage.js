import { AStorage } from 'ts-react-app-infrastructure';
import { AsyncStorage } from 'react-native';
export class ANativeStorage extends AStorage {
    clear() {
        return AsyncStorage.clear();
    }
    getValue(key) {
        return AsyncStorage.getItem(key);
    }
    setValue(key, value) {
        return AsyncStorage.setItem(key, value);
    }
    remove(key) {
        return AsyncStorage.removeItem(key);
    }
}
