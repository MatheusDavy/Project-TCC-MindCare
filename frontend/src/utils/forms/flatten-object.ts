export function flattenObject(obj: Record<string, unknown>): Object {
    const flattenedObject: Record<string, unknown> = {};

    function flattenHelper(
        currentObject: Record<string, unknown>,
        prefix: string = ''
    ) {
        for (const [key, value] of Object.entries(currentObject)) {
            const newKey = prefix ? key : key;

            if (value && typeof value === 'object' && !Array.isArray(value)) {
                flattenHelper(value as Record<string, unknown>, newKey);
            } else {
                flattenedObject[newKey] = value;
            }
        }
    }

    flattenHelper(obj);

    return flattenedObject;
}
