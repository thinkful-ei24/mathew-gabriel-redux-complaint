export const required = value => (value ? undefined : 'Field is required');

export const nonEmpty = value =>
    value.trim() !== '' ? undefined : 'Field must not be empty';

export const isNumber = value => 
    value && !isNaN(Number(value)) && value.length === 5 ? undefined : 'Tracking number must be a number';