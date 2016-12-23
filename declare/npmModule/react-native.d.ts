import * as React from 'react';
export = React;
export as namespace React;

declare const fetch: React.fetch;

declare module 'react' {
    interface ListViewStatic {
        scrollProperties: any
    }
}

