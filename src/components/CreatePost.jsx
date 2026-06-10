import { useContext, useState } from "react";
import { PostList } from "../store/post-list";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const { addPost } = useContext(PostList);
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.target);
    const postData = Object.fromEntries(formData);
    
    // Transform data
    postData.tags = postData.tags.split(" ").filter(t => t.trim() !== "");
    postData.reactions = { 
      likes: parseInt(postData.likes) || 0, 
      dislikes: parseInt(postData.dislikes) || 0 
    };

    try {
      // Simulate API call to dummyjson
      const res = await fetch("https://dummyjson.com/posts/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(postData),
      });
      const post = await res.json();
      
      // Because dummyjson returns a generic ID for all new posts, we give it a unique one for our UI to work.
      post.id = Date.now(); 
      addPost(post);
      navigate("/");
    } catch (err) {
      console.error("Failed to create post", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container py-4">
      <div className="card shadow-sm border-0">
        <div className="card-body p-4">
          <h3 className="fw-bold mb-4">Create New Post</h3>
          <form onSubmit={handleSubmit} className="create-post w-100 m-0">
            <div className="mb-3">
              <label htmlFor="userId" className="form-label fw-semibold">
                User ID
              </label>
              <input
                type="number"
                name="userId"
                className="form-control"
                id="userId"
                placeholder="Enter your User ID (e.g. 1)"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="title" className="form-label fw-semibold">
                Post Title
              </label>
              <input
                type="text"
                name="title"
                className="form-control"
                id="title"
                placeholder="What's on your mind?"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="body" className="form-label fw-semibold">
                Post Content
              </label>
              <textarea
                name="body"
                rows={4}
                className="form-control"
                id="body"
                placeholder="Tell us more about it..."
                required
              />
            </div>

            <div className="row mb-3">
              <div className="col">
                <label htmlFor="likes" className="form-label fw-semibold">
                  👍 Initial Likes
                </label>
                <input
                  type="number"
                  name="likes"
                  className="form-control"
                  id="likes"
                  defaultValue="0"
                />
              </div>
              <div className="col">
                <label htmlFor="dislikes" className="form-label fw-semibold">
                  👎 Initial Dislikes
                </label>
                <input
                  type="number"
                  name="dislikes"
                  className="form-control"
                  id="dislikes"
                  defaultValue="0"
                />
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="tags" className="form-label fw-semibold">
                Tags (Space Separated)
              </label>
              <input
                type="text"
                name="tags"
                className="form-control"
                id="tags"
                placeholder="tech coding react"
              />
            </div>

            <button type="submit" className="btn btn-primary px-4 rounded-pill" disabled={isSubmitting}>
              {isSubmitting ? "Posting..." : "Create Post"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
