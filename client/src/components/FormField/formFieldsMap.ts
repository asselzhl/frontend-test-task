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
        labelText: 'Entity name',
        placeholderText: 'Entity name',
        name: 'name',
        inputID: 'name',
    },
    coordinate1: {
        type: 'number',
        labelText: 'Entity coordinate 1',
        placeholderText: 'Entity coordinate 1',
        name: 'coordinate1',
        inputID: 'coordinate1',
    },
    coordinate2: {
        type: 'number',
        labelText: 'Entity coordinate 2',
        placeholderText: 'Entity coordinate 2',
        name: 'coordinate2',
        inputID: 'coordinate2',
    },
    labels: {
        type: 'text',
        labelText: 'Entity labels',
        placeholderText: 'Entity labels',
        name: 'labels',
        inputID: 'labels',
    },
};