import React, { useState } from "react";
import { useEffect } from "react";
import RepoCard from "../Components/RepoCard";

const GithubPages = () => {
  const [githubrepos, setgithubrepos] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.github.com/search/repositories?q=created:>2021-08-13&sort=stars&order=desc"
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // console.log(data);
        setgithubrepos(data.items);
      });
  }, []);
  console.log(githubrepos);
  const displayRepos = githubrepos.map((repo) => {
    return (
      <RepoCard
        avatar={repo.owner.avatar_url}
        reponame={repo.name}
        repodescription={repo.description}
        stars={repo.stargazers_count}
        issues={repo.issues_url}
        timeinterval={repo.owner.id}
        key={repo.id}
      ></RepoCard>
    );
  });
  return <div>{displayRepos}</div>;
};

export default GithubPages;
