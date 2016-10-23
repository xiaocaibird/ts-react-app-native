import { setInfrastructureFactory } from 'ts-react-app-infrastructure';

import { ANativeApp } from './App';
import { ANativeStorage } from './Storage';
import { ANativeRedux } from './Redux';
import { ANativeRequest } from './Request';
import { ANativePrompt } from './Prompt';
import { ANativeNavigation } from './Navigation';
import { ANativeErrorHandler } from './Error';
import { ANativeAsyncOperation } from './AsyncOperation';
import { ANativeDevice } from './Device';
import { ANativeUser } from './User';

class _NativeFactory {
    App: ANativeApp<any, any>;

    Storage: ANativeStorage;

    Redux: ANativeRedux<any, any>;

    Request: ANativeRequest;

    Prompt: ANativePrompt;

    Navigation: ANativeNavigation;

    ErrorHandler: ANativeErrorHandler;

    AsyncOperation: ANativeAsyncOperation;

    Device: ANativeDevice;

    User: ANativeUser<any>;
}

export const setNativeFactory = (f: _NativeFactory) => {
    setInfrastructureFactory(f);
    NativeFactory.App = f.App;
    NativeFactory.Storage = f.Storage;
    NativeFactory.Redux = f.Redux;
    NativeFactory.Request = f.Request;
    NativeFactory.Prompt = f.Prompt;
    NativeFactory.Navigation = f.Navigation;
    NativeFactory.ErrorHandler = f.ErrorHandler;
    NativeFactory.AsyncOperation = f.AsyncOperation;
    NativeFactory.Device = f.Device;
    NativeFactory.User = f.User;
}

export const NativeFactory = new _NativeFactory();