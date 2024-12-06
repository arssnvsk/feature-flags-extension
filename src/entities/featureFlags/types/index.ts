export type Flag = {
    name: string;
    description: string | null;
    id: number;
    enabled: boolean;
};

export type FeatureFlagsList = Array<Flag>;

export type FeatureFlagListParams = {
    limit?: number;
}