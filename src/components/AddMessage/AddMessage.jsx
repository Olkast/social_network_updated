import React from "react";
import styles from "./AddMessage.module.css";
import { useFormik } from "formik";


// const AddMessageForm = (props) => {
//     return (
//         <form onSubmit={props.handleSubmit}>
//             <div>
//                 <Field validate={[required, maxLength30]} component={Textarea} placeholder="new message" name='NewMessage'/>
//             </div>
//             <button>Добавить</button>
//         </form>
//     )
// }


const AddMessageForm = (props) => {
  const formik = useFormik({
    initialValues: {
      newMessage: "",
    },

    onSubmit: ({newMessage}) => {
      props.AddMessage(newMessage)
    },
  });



  return (
    <form className={styles.AddMessage} onSubmit={formik.handleSubmit}>
      <input
        id="newMessage"
        name="newMessage"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.newMessage}
      />
      <button type ="submit">Добавить</button>
    </form>
  )
}



export default AddMessageForm;











