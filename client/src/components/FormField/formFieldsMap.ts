type InputTypes = 'text' | 'number';

interface FormField {
    type: InputTypes;
    labelText: string;
    placeholderText: string;
    name: string;
    inputID: string;
}
type FormFieldNames = 'name' | 'coordinate1' | 'coordinate2' | 'labels';

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
};