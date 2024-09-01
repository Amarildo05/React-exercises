import { HeartFilled, HeartOutlined } from "@ant-design/icons";
import { useState } from "react";

function Like() {
  //const [state,setState] = useState(defaultValue);
  const [isLiked, setIsLiked] = useState(false);

  function likePost() {
    setIsLiked(true);
  }

  function unLikePost() {
    setIsLiked(false);
  }

  return <div>{isLiked ? <HeartFilled onClick={unLikePost} /> : <HeartOutlined onClick={likePost} />}</div>;
}

export default Like;
