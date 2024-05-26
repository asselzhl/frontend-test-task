type InputTypes = 'text' | 'number';

interface FormField {
    type: InputTypes;
    labelText: string;
    placeholderText: string;
    name: string;
    inputID: string;
}
type FormFieldNames = 'name' | 'coordinates' | 'labels';

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
    coordinates: {
        type: 'number',
        labelText: 'Entity coordinates',
        placeholderText: 'Entity coordinates',
        name: 'coordinates',
        inputID: 'coordinates',
    },
    labels: {
        type: 'text',
        labelText: 'Entity labels',
        placeholderText: 'Entity labels',
        name: 'labels',
        inputID: 'labels',
    },
};