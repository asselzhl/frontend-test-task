import { stateStatuses } from "./constants";
import { StateStatus } from "./types";

export const handlePending = (state: { status: StateStatus }) => {
    state.status = stateStatuses.loading;
};

export const handleRejected = (
    state: { status: StateStatus; error: string | null },
    action
) => {
    state.status = stateStatuses.failed;
    state.error = action.error.message;
};
