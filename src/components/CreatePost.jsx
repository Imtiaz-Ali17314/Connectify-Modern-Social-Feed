import { Form, redirect } from "react-router-dom";
import { useContext } from "react";
import { PostList } from "../store/post-list";

const CreatePost = () => {
  const { addPost } = useContext(PostList);
  return (
    <Form
      className="create-post"
      method="POST"
      action={(data) => createPostAction(data, addPost)}
    >
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          Enter your User Id here
        </label>
        <input
          type="text"
          name="userId"
          className="form-control"
          id="userId"
          placeholder="Your User Id"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post title
        </label>
        <input
          type="text"
          name="title"
          className="form-control"
          id="title"
          placeholder="How are you feeling today...."
        />
      </div>

      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Content
        </label>
        <textarea
          type="text"
          name="body"
          rows={4}
          className="form-control"
          id="body"
          placeholder="Tell us more about it."
        />
      </div>

      <div className="row mb-3">
        <div className="col">
          <label htmlFor="likes" className="form-label">
            👍Likes
          </label>
          <input
            type="text"
            name="likes"
            className="form-control"
            id="likes"
            placeholder="Likes"
          />
        </div>
        <div className="col">
          <label htmlFor="dislikes" className="form-label">
            👎Dislikes
          </label>
          <input
            type="text"
            name="dislikes"
            className="form-control"
            id="dislikes"
            placeholder="Dislikes"
          />
        </div>
      </div>

      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Enter your hashTags here
        </label>
        <input
          type="text"
          name="tags"
          className="form-control"
          id="tags"
          placeholder="Please enter tags using space"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </Form>
  );
};

export const createPostAction = async (data, addPost) => {
  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);
  postData.tags = postData.tags.split(" ");
  postData.reactions = { likes: postData.likes, dislikes: postData.dislikes };

  const res = await fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData),
  });

  const post = await res.json();
  // addPost(post);
  console.log(post);

  return redirect("/");
};

export default CreatePost;
