import { PayloadAction } from "@reduxjs/toolkit";
import { ItemResponse, LiveResponse } from "../types/live";
export interface LiveState {
    news: LiveResponse;
    tops: LiveResponse;
    page: number;
    size: number;
    currentLive: Array<ItemResponse>;
}
export declare const live: import("@reduxjs/toolkit").Slice<LiveState, {
    setNews: (state: import("immer/dist/internal").WritableDraft<LiveState>, action: PayloadAction<LiveState["news"]>) => void;
    setTops: (state: import("immer/dist/internal").WritableDraft<LiveState>, action: PayloadAction<LiveState["tops"]>) => void;
    setPage: (state: import("immer/dist/internal").WritableDraft<LiveState>, action: PayloadAction<LiveState["page"]>) => void;
    setCurrentLive: (state: import("immer/dist/internal").WritableDraft<LiveState>, action: PayloadAction<LiveState["currentLive"]>) => void;
}, "live">;
export declare const setNews: import("@reduxjs/toolkit").ActionCreatorWithPayload<LiveResponse, string>, setTops: import("@reduxjs/toolkit").ActionCreatorWithPayload<LiveResponse, string>, setCurrentLive: import("@reduxjs/toolkit").ActionCreatorWithPayload<ItemResponse[], string>, setPage: import("@reduxjs/toolkit").ActionCreatorWithPayload<number, string>;
//# sourceMappingURL=live.d.ts.map