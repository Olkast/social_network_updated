import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";
import { useFormik } from "formik";


const PostForm = (props) => {

  const formik = useFormik({
    initialValues: {
      newPost: "",
    },
    onSubmit: ({newPost}) => {
      props.AddPost(newPost)
    },
  })

  return (
    <div className={styles.myPost}>
      <h3>My posts</h3>
      <div className={styles.TextArea}>
        <form onSubmit={formik.handleSubmit}>
          <input
            id="newPost"
            name="newPost"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.newPost}
          />
          <button type="submit" className={styles.button}>Help me</button>
        </form>
      </div>
      <div>
        {props.postData.map(({text, id}) => {
          return (
            <Post key={id} text={text}/>
          )
        })}
      </div>
    </div>
  )}


export default PostForm;