export type StateStatus = 'idle' | 'loading' | 'succeeded' | 'failed';


export interface EntitiesItem {
    id: string;
    name: string;
    coordinate: number[];
    labels: string[];
}

export interface EntitiesState {
    status: StateStatus;
    data: EntitiesItem[];
    error: null | string;
}

export interface EntityFormState {
    name: string;
    coordinate: string[];
    labels: string[];
}

export interface UpdatedEntity {
    id: string;
    entityFormData: EntityFormState;
}

export type EntityFormKeys = 'createEntityForm' | 'editEntityForm';
export interface EntityFormValues {
    name: string;
    coordinate1: string;
    coordinate2: string;
    labels: string[];
}

export type QueryFormCoordinatesKeys = 'x1' | 'y1' | 'x2' | 'y2';


export interface QueryFormCoordinatesState {
    coordinates;
    entityNames: string[];
    entityLabels: string[];
}