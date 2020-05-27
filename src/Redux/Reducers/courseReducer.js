export default function courseReducer(state = [], action) {
  switch (action.type) {
    case "CREATE_COURSE":
      return [...state, { ...action.course }];
    default:
      return state;
  }
}

// Whatever is returned from the reducer becomes the new state
// This is will update our Redux Store by adding the new action passed in on action.course
// The default is in place so if the Reducer receives an Action that it doesn't care about, it should return the unchanged state
// ** I'm also using the Spread Operator (...) to clone state and then also clone the course passed in. This ends up creating a new array that has all the existing courses and the new one passed in on the action!!
