import { AApp } from 'ts-react-app-infrastructure';
import { NativeFactory as f } from '../Factory';

export abstract class ANativeApp<TInitData, TAppConfig> extends AApp<TInitData, TAppConfig>  {
    reset() {
        f.Navigation.toEntry(true);
        this.clearState();
    }
}
