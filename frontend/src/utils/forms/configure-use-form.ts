export const configureUseForm = (setValue: any, obj: any): any => {
    Object.entries(obj).forEach(([key, value]) => {
        if (value) setValue(key, value);
    });
};
