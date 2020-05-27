export function createCourse(course) {
  return { type: "CREATE_COURSE", course };
}

// This object is an "action". So the function is called the "action creator"
// The type property specifies the action type
// ALL actions must have a type property!! The rest is up to me
//
