import * as React from "react";
import "./css/ThreadList.css";

function ThreadList() {
  // スレッド一覧
  const [thread, setThread] = React.useState([]);
  // タイトル一覧リスト
  var titleList = [];

  // APIからスレッド一覧を取得
  React.useEffect(() => {
    fetch("https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads")
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        createThread(json);
      });
  }, []);
  const createThread = (json) => {
    for (var i = 0; i < json.length; i++) {
      console.log("json[i].title");
      console.log(json[i].title);
      titleList.push(json[i].title);
      setThread(titleList);
    }
  };

  return (
    <>
      <table>
        <tbody>
          {thread.map((title) => (
            <tr>
              <td>{title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default ThreadList;
