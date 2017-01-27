import { ANativeComponent } from './';
export class ANativeSceneComponent extends ANativeComponent {
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
