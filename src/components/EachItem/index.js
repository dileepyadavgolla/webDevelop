import { AiFillLike, AiFillEye, AiOutlineShareAlt } from "react-icons/ai";
import "./index.css";

const EachItem = (props) => {
  const { each } = props;
  const {
    id,
    thumbNailImage,
    eventDate,
    eventName,
    views,
    shares,
    likes,
  } = each;
  console.log(id);
  return (
    <li className="list-item">
      <img src={thumbNailImage} className="image" alt={eventName} />
      <div className="text-con">
        <p>{eventName}</p>
        <p>{eventDate}</p>

        <div className="iconsCon">
          <p className="para">
            <AiFillLike className="icon" /> {likes}
          </p>
          <p className="para">
            <AiFillEye className="icon" /> {views}
          </p>
          <p className="para">
            <AiOutlineShareAlt className="icon" /> {shares}
          </p>
        </div>
      </div>
    </li>
  );
};

export default EachItem;
