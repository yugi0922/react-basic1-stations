import * as React from "react";
import "./css/ThreadList.css";
import { useCallback } from "react";
import { useNavigate } from "react-router";

function ThreadList() {
  // スレッド一覧
  const [thread, setThread] = React.useState([]);
  // ページ遷移用API
  const navigate = useNavigate();

  // APIからスレッド一覧を取得
  React.useEffect(() => {
    fetch("https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads")
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        setThread(json);
      });
  }, []);

  // スレッド押下時、スレッド投稿一覧画面に遷移
  // TODO IDをlocationではなくルーターのuseparamsでとってくる
  //  →URLじかだだきでもページが表示できる
  //https://reactrouter.com/en/main/hooks/use-params
  const onClickPostList = useCallback(
    (e) => {
      e.preventDefault();
      //eventからIDを取得
      navigate(`/thread/${e.target.dataset.id}`, {
        state: { id: e.target.dataset.id, title: e.target.innerText },
      });
    },
    [navigate]
  );

  return (
    <>
      <table>
        <tbody>
          {thread.map((threadTitle, id) => (
            <tr key={id}>
              <td>
                <a
                  id="detail-link"
                  href="/thread/id"
                  className="detail-link"
                  defaultValue={threadTitle.id}
                  onClick={onClickPostList}
                  data-id={threadTitle.id}
                >
                  {threadTitle.title}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default ThreadList;
