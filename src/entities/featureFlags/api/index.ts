import { httpClient, HTTPClientResponse } from "@/shared/httpClient";
import type { FeatureFlagRequestParams, FeatureFlagsResponse } from "./types";

export const getFeatureFlags = async (params?: FeatureFlagRequestParams): HTTPClientResponse<FeatureFlagsResponse> => {
    return httpClient.get('_cms_api/items/feature_flags', {
        params,
    });
}