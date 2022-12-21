function createAction(setState: (state: { count: number }) => void): { increment: () => void; decrement: () => void } {
    return {
        increment: () => setState({ count: getState().count + 1 }),
        decrement: () => setState({ count: getState().count - 1 }),
    };
}

const { increment, decrement } = createAction(setState);
