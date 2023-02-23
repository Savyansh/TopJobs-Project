const initialState = {
  applications: [],
  jobs: [],
  messages: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "JOBS":
      return { ...state, jobs: action.payload };

    case "APPLICATIONS":
      return {
        ...state,
        applications: [...action.payload]
      };
    case "MESSAGES":
      return {
        ...state,
        messages: [...action.payload]
      };

    default:
      return state;
  }
}
