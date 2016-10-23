import { setInfrastructureFactory } from 'ts-react-app-infrastructure';
class _NativeFactory {
}
export const setNativeFactory = (f) => {
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
};
export const NativeFactory = new _NativeFactory();
