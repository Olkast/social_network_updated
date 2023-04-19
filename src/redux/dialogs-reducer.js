const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_MESSAGE = "UPDATE-MESSAGE";

const initialState = {
  dialogData: [
    {id: 1, name: "Alex"},
    {id: 2, name: "Petya"},
    {id: 3, name: "Olga"},
    {id: 4, name: "Vanya"},
    {id: 5, name: "Petya"},
    {id: 6, name: "Tanya"}
  ],
  messagesData: [
    {id: 1, message: "Hello"},
    {id: 2, message: "No"},
    {id: 3, message: "Yes"},
    {id: 4, message: "Hello"},
    {id: 5, message: "No"},
    {id: 6, message: "Yes"}
  ]
}

const dialogsReducer = (state = initialState, action) => {

  let copyState = {...state};

  switch (action.type) {
  case ADD_MESSAGE:
    // eslint-disable-next-line no-case-declarations
    const newMessage = {
      id: Date.now(),
      message: action.NewMessage,
    }
    copyState.messagesData = [...state.messagesData];
    copyState.messagesData.push(newMessage);

    return copyState;
  case UPDATE_MESSAGE:
    copyState.newMessageText = action.message;
    return copyState;
  default:
    return state;
  }

}

export const AddMessageActionCreator = (NewMessage) => ({type: ADD_MESSAGE, NewMessage});


export default dialogsReducer;