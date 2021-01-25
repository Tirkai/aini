
export const switched = <T, K>(value: T | undefined, values: [key: T, value: K][], defaultValue: K) => {
    const map = new Map<T,K>();
    values.forEach(item => {
        const [ key, value ] = item;
        map.set(key, value);
    });

    const result = value ? map.get(value) : defaultValue
    return result ? result : defaultValue;
}