import { AApp } from 'ts-react-app-infrastructure';
import { NativeFactory as f } from '../Factory';
export class ANativeApp extends AApp {
    reset() {
        f.Navigation.toEntry(true);
        this.clearState();
    }
}
