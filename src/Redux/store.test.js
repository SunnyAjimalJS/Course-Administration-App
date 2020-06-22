import { createStore } from "redux";
import rootReducer from "./Reducers";
import initialState from "./Reducers/initialState";
import * as courseActions from "./Actions/courseActions";

it("Should handle creating courses", function () {
  // Arrange
  const store = createStore(rootReducer, initialState);
  const course = {
    title: "Clean Code",
  };

  // Act
  const action = courseActions.createCourseSuccess(course);
  store.dispatch(action);

  // Assert
  const createdCourse = store.getState().courses[0];
  expect(createdCourse).toEqual(course);
});
