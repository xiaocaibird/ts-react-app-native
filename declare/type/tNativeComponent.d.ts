declare namespace tNativeComponent {
    namespace Picker {
        type item = {
            value: string,
            lable: string,
            children?: itemList,
            alwaysGetChildren?: boolean
        }

        type itemList = item[];

        type pickerDataList = item[][];

        type props = {
            isDynamic?: boolean,
            data?: itemList | pickerDataList,

            title?: string,
            topInfoCreateFun?: (selectItems: itemList) => string | null,
            branchTitles?: string[],
            titleStyle?: React.TextStyle,
            topInfoStyle?: React.TextStyle,
            branchTitleStyle?: React.TextStyle[] | React.TextStyle,
            branchPickersStyles?: React.ViewStyle[] | React.TextStyle,
            branchPickersItemStyles?: React.TextStyle[] | React.TextStyle,
            buttonStyle?: React.TextStyle,
            okButtonText?: string,
            cancelButtonText?: string,
            okCallBack?: tCommon.anyFun,
            cancelCallBack?: tCommon.anyFun,
            colunmMax?: number,
            defaultSelectValues?: string[],
            getDefaultSelectValuesFun?: () => string[],
            defaultValueButtonShow?: boolean,
            defaultValueButtonText?: string,
            getChildrenFuns?: ((selectItems: itemList, index: number) => itemList)[],

            pressMaskLayerToHide?: boolean
        };
    }

    namespace TextInput {
        type props = {
            setNowFocusNode?: (node: any) => void
        } & React.TextInputProperties;
    }
}