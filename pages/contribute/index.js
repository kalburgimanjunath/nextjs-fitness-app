import { Input, Loading } from '../../components/';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Formik, Form, Field, ErrorMessage } from 'formik';
// import { Editable, withReact, useSlate, Slate } from 'slate-react';
// import { BaseEditor, Descendant } from 'slate';
// import { ReactEditor } from 'slate-react';
// import {
//   Editor,
//   Transforms,
//   createEditor,
//   Element as SlateElement,
// } from 'slate';
export default function index() {
  const [posts, setPosts] = useState([]);
  // const [editor] = useState(() => withReact(createEditor()));
  // const initialValue = [
  //   {
  //     type: 'paragraph',
  //     children: [{ text: 'A line of text in a paragraph.' }],
  //   },
  // ];
  const fetchRecords = () => {
    fetch(
      'https://api.airtable.com/v0/appdX135RjDD0zlEn/allposts?api_key=keyeNXyxxuuYJY19w'
    )
      .then((res) => res.json())
      .then((result) => setPosts(result));
  };
  const saveData = (data) => {
    const url = `https://api.airtable.com/v0/appdX135RjDD0zlEn/allposts`;
    const requestOptions = {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer keyeNXyxxuuYJY19w',
      },
      body: JSON.stringify(data),
      typecast: true,
    };
    console.log(requestOptions);
    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    fetchRecords();
  }, [posts]);
  const Posts = ({ items }) => {
    return (
      items &&
      items.map((item) => {
        return (
          <div className="lists-item post list-item-style">
            {/* <div>
              <img
                src="https://picsum.photos/seed/picsum/200/300"
                width={200}
                height={200}
              />
            </div> */}
            <h4>{item.fields.title}</h4>

            <details>
              <summary>
                {item.fields.content.length > 256
                  ? item.fields.content.substring(1, 256) + '...more'
                  : item.fields.content}
              </summary>
              <p>
                {item.fields.content.length > 256
                  ? item.fields.content
                  : item.fields.content}
              </p>
            </details>
          </div>
        );
      })
    );
  };
  return (
    <div>
      <header>
        <h4>Submit a Post to our community about fitness tips</h4>
      </header>

      <div>
        <Formik
          initialValues={{ title: '' }}
          validate={(values) => {
            const errors = {};
            if (!values.title) {
              errors.title = 'Required';
            }
            if (!values.description) {
              errors.description = 'Required';
            }
            if (!values.content) {
              errors.content = 'Required';
            }
            if (!values.tags) {
              errors.tags = 'Required';
            }
            if (!values.category) {
              errors.category = 'Required';
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert('Successfully posted');
              saveData({
                fields: values,
              });
              setSubmitting(false);
            }, 400);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <Form className="mx-auto">
              <div className="form-group">
                <Field
                  className="form-control"
                  type="text"
                  name="title"
                  value={values.title}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="title"
                />
                <ErrorMessage name="title" component="div" />
              </div>
              <div className="form-group">
                <Field
                  className="form-control"
                  type="text"
                  name="description"
                  value={values.description}
                  placeholder="description"
                />
                <ErrorMessage name="description" component="div" />
              </div>
              <div className="form-group">
                <Field
                  className="form-control"
                  type="text"
                  name="content"
                  value={values.content}
                  placeholder="content"
                />
                <ErrorMessage name="content" component="div" />
              </div>
              <div className="form-group">
                <Field
                  className="form-control"
                  type="text"
                  name="tags"
                  value="tags"
                  value={values.tags}
                  placeholder="tags"
                />
                <ErrorMessage name="tags" component="div" />
              </div>
              <div className="form-group">
                <Field
                  className="form-control"
                  type="text"
                  name="category"
                  value={values.category}
                  placeholder="category"
                />
                <ErrorMessage name="category" component="div" />
              </div>
              {/* <Slate
                className="form-control"
                editor={editor}
                value={initialValue}
              >
                
                <Editable
                 
                  onKeyDown={(event) => {
                    console.log(event.key);
                  }}
                />
              </Slate> */}

              <footer>
                <button
                  className="btn btn-primary"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Submit Post
                </button>
                <button className="btn btn-default">Cancel Post</button>
              </footer>
            </Form>
          )}
        </Formik>
      </div>
      <div>
        <h5>Latest Posts</h5>
        {posts ? <Posts items={posts.records} /> : <Loading />}
      </div>
    </div>
  );
}
