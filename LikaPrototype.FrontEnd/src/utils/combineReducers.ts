// TODO: fix typing
export function combineReducers<T, A>(
    reducers: any
): [(state: T, action: A) => T, T] {
    const reducerKeys = Object.keys(reducers);
    const reducerValues: any[] = Object.values(reducers);
    let globalState: T = {} as T;
    reducerKeys.forEach((key, index) => {
        globalState = { ...globalState, [key]: reducerValues[index][1] };
    });
    let finalReducers: { [key: string]: Function } = {} as any;
    reducerValues.forEach((value, index) => {
        finalReducers = { ...finalReducers, [reducerKeys[index]]: value[0] };
    });
    return [
        (state: T, action: A): T => {
            let hasStateChanged = false;
            let newState: T = {} as any;
            let nextStateForCurrentKey = {};
            for (let i = 0; i < reducerKeys.length; i++) {
                const currentKey = reducerKeys[i];
                const currentReducer = finalReducers[currentKey];
                const prevStateForCurrentKey = (state as any)[currentKey];
                nextStateForCurrentKey = currentReducer(
                    prevStateForCurrentKey,
                    action
                );
                hasStateChanged =
                    hasStateChanged ||
                    nextStateForCurrentKey !== prevStateForCurrentKey;
                (newState as any)[currentKey] = nextStateForCurrentKey;
            }
            return hasStateChanged ? newState : state;
        },
        globalState,
    ];
}
