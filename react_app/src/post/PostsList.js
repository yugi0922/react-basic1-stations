import * as React from "react";
import { useLocation } from "react-router";
import Header from "../Header.js";
import "../css/PostsList.css";

const PostsList = () => {
  // 投稿内容
  const [postContent, setPostContent] = React.useState();
  // ページ遷移で保持されている値
  const location = useLocation();
  // 投稿一覧
  const [posts, setPosts] = React.useState([]);
  // ページタイトル
  const [postTitle, setPostTitle] = React.useState(location.state.title);
  // 投稿内容入力イベント
  const changePostContent = (e) => {
    setPostContent(e.target.value);
  };

  // APIからスレッド一覧を取得
  React.useEffect(() => {
    fetch(
      `https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads/${location.state.id}/posts`
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        setPosts(json.posts);
      });
  }, []);

  // 新規投稿処理
  async function createPost(e) {
    e.preventDefault();
    const obj = {
      post: `${postContent}`,
    };
    await fetch(
      `https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads/${location.state.id}/posts`,
      { method: "POST", body: JSON.stringify(obj) }
    )
      .then(function (response) {
        setPostTitle(postTitle);
        return response.json();
      })
      .then(function (json) {
        const newPost = json.post;
        // //TODO データの順番を気にするなら全部とりなおす
        // setPosts([...posts, newPost]);
        // 新規投稿後にページをリロード
        // 画面全体の再レンダリングになってしまっている
        // 投稿だけがリロードされるように
        window.location.reload();
      });
  }
  return (
    <>
      <Header></Header>
      <div className="post-page-container">
        <dir className="post-contents-container">
          <div className="post-title">
            <h1>{postTitle}</h1>
          </div>
          <div className="post-list-container">
            {posts.map((post, id) => (
              <div className="post-div-txt" key={id}>
                <p className="post-txt">{post.post}</p>
              </div>
            ))}
          </div>
        </dir>
        <form>
          <textarea
            cols="30"
            rows="7"
            placeholder="投稿しよう！"
            onChange={changePostContent}
          ></textarea>
          <div className="post-button-div">
            <button type="submit" onClick={createPost} className="post-button">
              投稿
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default PostsList;
