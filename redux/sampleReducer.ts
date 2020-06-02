const INITIAL_STATE: String = 'hello world';

export const sampleReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return INITIAL_STATE;
  }
};
