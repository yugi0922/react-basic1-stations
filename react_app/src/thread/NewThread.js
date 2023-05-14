import { useState } from "react";
import { useCallback } from "react";
import { useNavigate } from "react-router";
import Header from "../Header.js";
import "../css/NewThread.css";

export const NewThread = () => {
  // スレッドタイトル
  const [title, setTitle] = useState("");
  // ページ遷移用API
  const navigate = useNavigate();

  // スレッドタイトル入力イベント
  const changeThreadTitle = (e) => {
    setTitle(e.target.value);
  };

  // Topに戻る押下時、スレッド一覧画面に遷移
  const onClickTopPage = useCallback(
    (e) => {
      navigate("/");
    },
    [navigate]
  );

  // スレッド作成処理
  async function createThread(e) {
    const obj = {
      title: `${title}`,
    };
    e.preventDefault();
    await fetch(
      "https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads",
      {
        method: "POST",
        body: JSON.stringify(obj),
      }
    )
      .then(function (response) {
        //処理成功時処理
        onClickTopPage();
      })
      .catch(function (err) {
        //処理失敗時処理
      });
  }
  return (
    <>
      <Header />
      <div className="main-title">
        <h1>スレッド新規作成</h1>
      </div>
      <form>
        <input
          type="text"
          className="thread-title"
          onChange={changeThreadTitle}
          value={title}
          placeholder="スレッドタイトル"
        />
        <div className="form-button">
          <a href="/" onClick={onClickTopPage} className="top-page-link">
            Topに戻る
          </a>
          <button
            type="submit"
            onClick={createThread}
            className="submit-button"
          >
            作成
          </button>
        </div>
      </form>
    </>
  );
};
