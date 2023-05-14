import { useCallback } from "react";
import { useNavigate } from "react-router";
import "./css/Header.css";

const Header = () => {
  // ページ遷移用API
  const navigate = useNavigate();

  // スレッド作成画面に遷移
  const onClickNewThread = useCallback(
    (e) => {
      navigate("/thread/new");
    },
    [navigate]
  );

  return (
    <header>
      <div className="header-left">
        <p className="title">掲示板</p>
      </div>
      <div className="header-right">
        <a
          href="/thread/new"
          onClick={onClickNewThread}
          className="thread-page-link"
        >
          スレッドを立てる
        </a>
      </div>
    </header>
  );
};

export default Header;
