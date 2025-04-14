import { Store } from "./store";
import { InMemoryConfigStore } from "./in-memory-store";
export declare class EventStorage {
    analyticsApi: string | undefined;
    config: InMemoryConfigStore;
    store: Store;
    verbose: boolean;
    debugEvents: boolean;
    disabled: boolean;
    constructor();
    isTrackingDisabled(): boolean;
    addEvent(_event: unknown): void;
    sendEvents(): Promise<boolean>;
    submitEvents(_events: unknown): Promise<boolean>;
    getUserAgent(): string;
    getConfig(key: string): string | boolean | unknown | Record<string, unknown>;
    updateConfig(key: string, value: string | number | boolean | null): void;
}
