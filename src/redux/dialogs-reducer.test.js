
import dialogsReducer, {AddMessageActionCreator} from "./dialogs-reducer";

it("new post should be added", () => {
  const action = AddMessageActionCreator("hello");
  const state = {
    messagesData: [
      {id: 1, message: "Hello"},
      {id: 2, message: "No"},
      {id: 3, message: "Yes"},
      {id: 4, message: "Hello"},
      {id: 5, message: "No"},
      {id: 6, message: "Yes"}
    ]
  };
  const newState = dialogsReducer(state, action);
  expect(newState.messagesData.length).toBe(7);
});
