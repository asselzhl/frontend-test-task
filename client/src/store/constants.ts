export type StateStatus = 'idle' | 'loading' | 'succeeded' | 'failed';
export const stateStatuses: { [key in StateStatus]: StateStatus } = {
    idle: 'idle',
    loading: 'loading',
    succeeded: 'succeeded',
    failed: 'failed',

}