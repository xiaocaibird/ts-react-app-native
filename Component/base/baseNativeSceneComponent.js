import { baseNativeComponent } from './';
export class baseNativeSceneComponent extends baseNativeComponent {
    constructor() {
        super(...arguments);
        this._sceneProps = [];
        this._navigatorType = 0;
    }
    get SceneProps() {
        return this._sceneProps;
    }
    get NavigatorType() {
        return this._navigatorType;
    }
}
