import React from "react";
import styles from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import AddMessageContainer from "../AddMessage/AddMessageContainer";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


export const Dialogs = (props) => {
  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItem}>
        {props.dialogData.map(dialog => <DialogItem key={dialog.id}
          name={dialog.name}
          id={dialog.id}
        />)}
      </div>
      <div className={styles.messages}>
        {props.messagesData.map(m => <Message key={m.id} message={m.message}/>)}
        <AddMessageContainer />
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    messagesData: state.dialogsPage.messagesData,
    dialogData: state.dialogsPage.dialogData,
  }
}


export default compose(
  connect(mapStateToProps),
  withAuthRedirect
)(Dialogs);



