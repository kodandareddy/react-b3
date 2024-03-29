import { Card, CardBody } from "reactstrap";

const UserCard = ({user}) => {
    console.log(user,"+++")
  return (
    <Card className="text-center mt-3 mb-3">
      <img
        src={user?.avatar_url}
        className="img_thumbnail"
      />
      <CardBody>
        <div className="text-primary">{user?.name}</div>
        <div className="text-primary">{user?.location}</div>
        <div className="text-primary">{user?.bio}</div>
        <div className="text-info">Available for hire:{user?.hireable ?"Yes":"NO"}</div>
        <div className="text-info">
            Followers:{user?.followers}
        </div>
      </CardBody>
    </Card>
  );
};

export default UserCard;
