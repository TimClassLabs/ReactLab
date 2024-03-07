import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ThumpsUp = ()=>{
  let likes = 0;
  return (
    <button className="button is-info" onClick={()=> likes++}>
    <span className="icon">
      <FontAwesomeIcon icon={faThumbsUp} />
    </span>
    <span>{likes}</span>
  </button>
  );
}