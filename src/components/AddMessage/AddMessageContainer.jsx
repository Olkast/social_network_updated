import {AddMessageActionCreator} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";
import AddMessageForm from "./AddMessage";


const mapStateToProps = (state) => {
  return {
    newMessageText: state.dialogsPage.newMessageText,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    AddMessage: (newMessage) => {
      dispatch(AddMessageActionCreator(newMessage));
    }
  }
}



const AddMessageContainer = connect(mapStateToProps, mapDispatchToProps) (AddMessageForm);

export default AddMessageContainer;