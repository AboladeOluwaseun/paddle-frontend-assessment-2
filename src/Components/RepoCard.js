import React from "react";
import pic from "../mypic.jpg";

const RepoCard = ({
  avatar,
  reponame,
  repodescription,
  stars,
  issues,
  timeinterval,
}) => {
  return (
    <>
      <div className="mt-4 flex max-w-[80%] mx-auto">
        <img className="w-[5rem] h-[5rem] rounded-full" src={avatar} alt="" />
        <div>
          <p>{reponame}</p>
          <p>{repodescription}</p>
          <div className="flex">
            <p>{stars}</p>
            <p>{issues}</p>
            <p>Time Interval</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RepoCard;
