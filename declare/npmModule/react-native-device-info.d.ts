declare module "react-native-device-info" {
    namespace DeviceInfo {
        const getUniqueID: () => string;
        const getSystemName: () => string;
        const getReadableVersion: () => string;
        const getVersion: () => string;
        const getModel: () => string;
        const getManufacturer: () => string;
        const getBrand: () => string;
        const getDeviceId: () => string;
        const getSystemVersion: () => string;
        const getBundleId: () => string;
        const getBuildNumber: () => string;
        const getDeviceName: () => string;
        const getUserAgent: () => string;
        const getDeviceLocale: () => string;
        const getDeviceCountry: () => string;
        const getTimezone: () => string;
        const getInstanceID: () => string;
    }
    export default DeviceInfo;
}