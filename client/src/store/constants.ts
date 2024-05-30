import { StateStatus } from "./types";

export const stateStatuses: { [key in StateStatus]: StateStatus } = {
    idle: 'idle',
    loading: 'loading',
    succeeded: 'succeeded',
    failed: 'failed',

}