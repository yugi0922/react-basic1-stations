import "./css/BulletinBoard.css";
import ThreadList from "./ThreadList";
import Header from "./Header";
function BulletinBoard() {
  return (
    <>
      <Header />
      <div className="main-title">
        <h1>新着スレッド</h1>
      </div>
      <ThreadList />
    </>
  );
}

export default BulletinBoard;
