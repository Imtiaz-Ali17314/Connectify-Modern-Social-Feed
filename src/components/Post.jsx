import { useContext, useState } from "react";
import { AiFillDelete, AiFillEdit, AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { PostList } from "../store/post-list";

const Post = ({ post }) => {
  const { deletePost, updatePost } = useContext(PostList);
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState({
    title: post.title,
    body: post.body,
    tags: post.tags ? post.tags.join(" ") : "",
  });

  const handleEditChange = (e) => {
    setEditForm({ ...editForm, [e.target.name]: e.target.value });
  };

  const submitEdit = (e) => {
    e.preventDefault();
    const updatedPost = {
      ...post,
      title: editForm.title,
      body: editForm.body,
      tags: editForm.tags.split(" ").filter(t => t.trim() !== ""),
    };
    updatePost(updatedPost);
    setIsEditing(false);
  };

  return (
    <>
      <div className="card mb-4 shadow-sm border-0 rounded-4">
        <div className="card-body p-4">
          <div className="d-flex justify-content-between align-items-start mb-3">
            <div className="d-flex align-items-center">
              <img 
                src={`https://robohash.org/${post.userId}?set=set4&size=50x50`} 
                className="rounded-circle me-3 bg-secondary bg-opacity-10" 
                alt="avatar" 
                width="48" 
                height="48" 
              />
              <div>
                <h6 className="mb-0 fw-bold">User {post.userId}</h6>
                <small className="text-muted">Just now</small>
              </div>
            </div>
            
            <div className="d-flex gap-2">
              <button 
                className="btn btn-sm btn-outline-secondary rounded-circle d-flex align-items-center justify-content-center" 
                style={{width: '32px', height: '32px'}}
                onClick={() => setIsEditing(true)}
                title="Edit Post"
              >
                <AiFillEdit />
              </button>
              <button 
                className="btn btn-sm btn-outline-danger rounded-circle d-flex align-items-center justify-content-center" 
                style={{width: '32px', height: '32px'}}
                onClick={() => deletePost(post.id)}
                title="Delete Post"
              >
                <AiFillDelete />
              </button>
            </div>
          </div>

          <h5 className="card-title fw-bold mb-2">{post.title}</h5>
          <p className="card-text mb-3" style={{ fontSize: "1.05rem" }}>{post.body}</p>
          
          <div className="mb-3">
            {post.tags && post.tags.map((tag, index) => (
              <span key={index} className="badge bg-primary bg-opacity-10 text-primary rounded-pill me-2 px-3 py-2">
                #{tag}
              </span>
            ))}
          </div>

          <div className="d-flex pt-3 border-top gap-4 text-muted fw-semibold">
            <span className="d-flex align-items-center gap-1 cursor-pointer hover-text-primary">
              <AiOutlineLike size={20} /> {post.reactions?.likes || 0}
            </span>
            <span className="d-flex align-items-center gap-1 cursor-pointer hover-text-danger">
              <AiOutlineDislike size={20} /> {post.reactions?.dislikes || 0}
            </span>
          </div>
        </div>
      </div>

      {isEditing && (
        <>
          <div className="modal-backdrop fade show"></div>
          <div className="modal fade show d-block" tabIndex="-1">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title fw-bold">Edit Post</h5>
                  <button type="button" className="btn-close" onClick={() => setIsEditing(false)}></button>
                </div>
                <form onSubmit={submitEdit}>
                  <div className="modal-body">
                    <div className="mb-3">
                      <label className="form-label fw-semibold">Title</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        name="title"
                        value={editForm.title} 
                        onChange={handleEditChange} 
                        required 
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label fw-semibold">Content</label>
                      <textarea 
                        className="form-control" 
                        name="body"
                        rows="4" 
                        value={editForm.body} 
                        onChange={handleEditChange} 
                        required 
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label fw-semibold">Tags (space separated)</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        name="tags"
                        value={editForm.tags} 
                        onChange={handleEditChange} 
                      />
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" onClick={() => setIsEditing(false)}>Cancel</button>
                    <button type="submit" className="btn btn-primary">Save Changes</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Post;
