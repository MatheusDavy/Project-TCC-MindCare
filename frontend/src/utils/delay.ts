export const delay = async (fn: () => any, delay = 6000) => {
    const delayPromise = () => {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve('');
            }, delay);
        });
    };

    await delayPromise();
    return fn();
};
