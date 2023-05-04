import { useCallback } from "react";
import { useNavigate } from "react-router";
import "./css/Header.css";

const Header = () => {
  const navigate = useNavigate();
  const onClickNewThread = useCallback(
    (e) => {
      e.preventDefault();
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
        <a href="/thread/new" onClick={onClickNewThread} className="thread">
          スレッドを立てる
        </a>
      </div>
    </header>
  );
};

export default Header;
