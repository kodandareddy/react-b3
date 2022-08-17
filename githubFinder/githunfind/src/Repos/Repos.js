import axios from "axios";
import React, { useEffect, useState } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

const Repos = ({ repUrl }) => {
  const [repos, setRepos] = useState([]);
  console.log(repUrl,"++++")
  const FetchRepos = () => {
    axios.get(repUrl).then((res) => {
      setRepos(res.data);
    });
  };
  useEffect(() => {
    FetchRepos();
  }, []);
  return (
    <ListGroup>
      {repos && repos.map((repo) => {
        return (
          <ListGroupItem key={repo.id}>
            <div className="text-primary">{repo.name}</div>
            <div className="text-secondary">{repo.language}</div>
            <div className="text-info">
              {repo.description}
            </div>
          </ListGroupItem>
        );
      })}
    </ListGroup>
  );
};

export default Repos;
