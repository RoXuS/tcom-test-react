import { PayloadAction } from "@reduxjs/toolkit";
export interface AppState {
    currentPage: string;
    menu: Array<string>;
}
export declare const app: import("@reduxjs/toolkit").Slice<AppState, {
    setCurrentPage: (state: import("immer/dist/internal").WritableDraft<AppState>, action: PayloadAction<AppState["currentPage"]>) => void;
}, "app">;
export declare const setCurrentPage: import("@reduxjs/toolkit").ActionCreatorWithPayload<string, string>;
//# sourceMappingURL=app.d.ts.map