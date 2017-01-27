import { ANativeComponent } from './';

export abstract class ANativeSceneComponent<P, S> extends ANativeComponent<P, S> {
    protected _sceneProps: eNativeCommon.sceneProps[] = [];
    get SceneProps() {
        return this._sceneProps;
    }
    protected _navigatorType: eNativeCommon.navigatorType = eNativeCommon.navigatorType.home;
    get NavigatorType() {
        return this._navigatorType;
    }
}
