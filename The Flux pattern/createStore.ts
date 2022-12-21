function createStore(initialState: { count: number }): [() => { count: number }, (state: { count: number }) => void] {
    let state = initialState;
    return [
        () => state,
        (newState: { count: number }) => {
            state = newState;
        },
    ];
}

const [getState, setState] = createStore({ count: 0 });
