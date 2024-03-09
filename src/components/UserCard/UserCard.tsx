import LazyLoad from "react-lazy-load";
import { UserType } from "../SearchResults/SearchContext";
import "./style.css";

export function UserCard(props: UserType) {
  return (
    <div className="userCard">
      <LazyLoad height={80} width={80} threshold={0.55}>
        <img className="userPic" src={props.image} />
      </LazyLoad>
      <div className="userInfo">
        <div>{`${props.firstName} ${props.lastName}`}</div>
        <div>{props.address.city}</div>
      </div>
    </div>
  );
}
