import { IRepositoryId } from "./repository-id";
export type SemVer = string;
interface IOSInfo {
    nodeVersion: SemVer;
    platform: string;
    release: string;
    cpus?: string;
    arch: string;
    ci?: boolean;
    ciName: string | null;
    docker?: boolean;
    termProgram?: string;
    isTTY: boolean;
}
export interface IAggregateStats {
    count: number;
    min: number;
    max: number;
    sum: number;
    mean: number;
    median: number;
    stdDev: number;
    skewness: number;
}
interface IAnalyticsTrackerConstructorParameters {
    componentId?: SemVer;
    gatsbyCliVersion?: SemVer;
    trackingEnabled?: boolean;
}
export interface IStructuredError {
    id?: string;
    code?: string;
    text: string;
    level?: string;
    type?: string;
    context?: unknown;
    error?: {
        stack?: string;
    };
}
export interface IStructuredErrorV2 {
    id?: string;
    text: string;
    level?: string;
    type?: string;
    context?: string;
    stack?: string;
}
export interface ITelemetryTagsPayload {
    name?: string;
    starterName?: string;
    siteName?: string;
    siteHash?: string;
    userAgent?: string;
    pluginName?: string;
    exitCode?: number;
    duration?: number;
    uiSource?: string;
    valid?: boolean;
    plugins?: Array<string>;
    pathname?: string;
    error?: IStructuredError | Array<IStructuredError>;
    cacheStatus?: string;
    pluginCachePurged?: string;
    dependencies?: Array<string>;
    devDependencies?: Array<string>;
    siteMeasurements?: {
        pagesCount?: number;
        totalPagesCount?: number;
        createdNodesCount?: number;
        touchedNodesCount?: number;
        updatedNodesCount?: number;
        deletedNodesCount?: number;
        clientsCount?: number;
        paths?: Array<string | undefined>;
        bundleStats?: unknown;
        pageDataStats?: unknown;
        queryStats?: unknown;
        SSRCount?: number;
        DSGCount?: number;
        SSGCount?: number;
    };
    errorV2?: IStructuredErrorV2;
    valueString?: string;
    valueStringArray?: Array<string>;
    valueInteger?: number;
    valueBoolean?: boolean;
}
export interface IDefaultTelemetryTagsPayload extends ITelemetryTagsPayload {
    gatsbyCliVersion?: SemVer;
    installedGatsbyVersion?: SemVer;
}
export interface ITelemetryOptsPayload {
    debounce?: boolean;
}
export declare class AnalyticsTracker {
    debouncer: {};
    metadataCache: {};
    defaultTags: {};
    osInfo?: IOSInfo;
    trackingEnabled?: boolean;
    componentVersion?: string;
    sessionId: string;
    gatsbyCliVersion?: SemVer;
    installedGatsbyVersion?: SemVer;
    repositoryId?: IRepositoryId;
    siteHash?: string;
    lastEnvTagsFromFileTime: number;
    lastEnvTagsFromFileValue: ITelemetryTagsPayload;
    constructor(_arg?: IAnalyticsTrackerConstructorParameters);
    getSessionId(): string;
    getRepositoryId(): IRepositoryId;
    getTagsFromEnv(): Record<string, unknown>;
    getGatsbyVersion(): SemVer;
    getGatsbyCliVersion(): SemVer;
    trackCli(_type?: string | Array<string>, _tags?: ITelemetryTagsPayload, _opts?: ITelemetryOptsPayload): void;
    captureEvent(_type?: string | Array<string>, _tags?: ITelemetryTagsPayload, _opts?: ITelemetryOptsPayload): void;
    isFinalEvent(event: string): boolean;
    captureError(_type: string, _tags?: ITelemetryTagsPayload): void;
    captureBuildError(_type: string, _tags?: ITelemetryTagsPayload): void;
    formatErrorAndStoreEvent(_eventType: string, _tags: ITelemetryTagsPayload): void;
    buildAndStoreEvent(_eventType: string, _tags: ITelemetryTagsPayload): void;
    getTagsFromPath(): ITelemetryTagsPayload;
    getIsTTY(): boolean;
    getMachineId(): string;
    isTrackingEnabled(): boolean;
    getOsInfo(): IOSInfo;
    trackActivity(_source: string, _tags?: ITelemetryTagsPayload): void;
    decorateNextEvent(_event: string, _obj: any): void;
    addSiteMeasurement(_event: string, _obj: ITelemetryTagsPayload["siteMeasurements"]): void;
    decorateAll(_tags: ITelemetryTagsPayload): void;
    setTelemetryEnabled(_enabled: boolean): void;
    aggregateStats(data: Array<number>): IAggregateStats;
    captureMetadataEvent(): void;
    sendEvents(): Promise<boolean>;
    trackFeatureIsUsed(_name: string): void;
}
export {};
