import React from "react";
import { useEffect } from "react";
import RepoCard from "../Components/RepoCard";

const GithubPages = () => {
  useEffect(() => {
    fetch(
      "https://api.github.com/search/repositories?q=created:>2021-08-13&sort=stars&order=desc"
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
      });
  }, []);

  return <div>hi</div>;
};

export default GithubPages;
