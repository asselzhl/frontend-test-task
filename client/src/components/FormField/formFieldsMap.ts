type InputTypes = 'text' | 'number';

interface FormField {
    type: InputTypes;
    labelText: string;
    placeholderText: string;
    name: string;
    inputID: string;
}
type FormFieldNames = 'name' | 'coordinate1' | 'coordinate2' | 'labels' | 'x1' | 'y1' | 'x2' | 'y2';

type FormFieldsMap = {
    [key in FormFieldNames]: FormField;
};


export const formFieldsMap: FormFieldsMap = {
    name: {
        type: 'text',
        labelText: 'Name',
        placeholderText: 'Name',
        name: 'name',
        inputID: 'name',
    },
    coordinate1: {
        type: 'number',
        labelText: 'Coordinate 1',
        placeholderText: 'Coordinate 1',
        name: 'coordinate1',
        inputID: 'coordinate1',
    },
    coordinate2: {
        type: 'number',
        labelText: 'Coordinate 2',
        placeholderText: 'Coordinate 2',
        name: 'coordinate2',
        inputID: 'coordinate2',
    },
    labels: {
        type: 'text',
        labelText: 'Labels',
        placeholderText: 'Labels',
        name: 'labels',
        inputID: 'labels',
    },
    x1: {
        type: 'number',
        labelText: 'x1',
        placeholderText: 'x1',
        name: 'x1',
        inputID: 'x1',
    },
    y1: {
        type: 'number',
        labelText: 'y1',
        placeholderText: 'y1',
        name: 'y1',
        inputID: 'y1',
    },
    x2: {
        type: 'number',
        labelText: 'x2',
        placeholderText: 'x2',
        name: 'x2',
        inputID: 'x2',
    },
    y2: {
        type: 'number',
        labelText: 'y2',
        placeholderText: 'y2',
        name: 'y2',
        inputID: 'y2',
    },
};