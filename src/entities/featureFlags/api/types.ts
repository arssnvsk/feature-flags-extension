export type FeatureFlagsResponse = {
    data: Array<{
        name: string;
        description: string | null;
        id: number;
        enabled: boolean;
    }>
}

export type FeatureFlagRequestParams = {
    limit?: number;
}