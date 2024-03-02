import { useRef } from 'react';

export default function useDebounce(fn: any, delay: number) {
    const timeoutRef = useRef<any>(null);

    const debouncedFn = (...args: any) => {
        return new Promise((resolve) => {
            window.clearTimeout(timeoutRef.current);
            timeoutRef.current = window.setTimeout(() => {
                resolve(fn(...args));
            }, delay);
        });
    };

    return debouncedFn;
};
