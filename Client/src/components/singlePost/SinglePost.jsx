import "./singlePost.css";
import { useLocation } from "react-router";
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";

export default function SinglePost() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const PF = "http://localhost:5000/images/";
  const { user } = useContext(Context);

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/posts/" + path);
      setPost(res.data);
    };
    getPost();
  }, [path]);
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.photo && (
          <img
            className="singlePostImage"
            src={PF + post.photo}
            alt="food image"
          />
        )}

        <h1 className="singlePostTitle">
          {post.title}
          {post.username === user?.username && (
            <div className="singlePostEdit">
              <i className="singlePostIcon far fa-edit"></i>
              <i className="singlePostIcon far fa-trash-alt"></i>
            </div>
          )}
        </h1>
        <div className="singlePostInfo">
          <span className="sinlePostAuthor">
            Author:
            <Link
              style={{ color: "inherit", textDecoration: "none" }}
              to={`/?user=${post.username}`}
            >
              <b>{post.username}</b>
            </Link>
          </span>
          <span className="sinlePostDate">
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>

        <div className="singlePostDescription ">
          <p className="par">{post.description}</p>
        </div>
      </div>
    </div>
  );
}
