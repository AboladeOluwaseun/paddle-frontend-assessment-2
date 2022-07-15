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
      <div className="max-w-[100%]">
        <div className="mt-4 space-x-6 flex   max-w-[50%] mx-auto">
          <img className="w-[3rem] h-[3rem] rounded-full" src={avatar} alt="" />
          <div>
            <p className="font-bold">{reponame}</p>
            <p className="mt-2 ">{repodescription}</p>
            <div className="mt-2 flex">
              <p>{stars}</p>
              <p>{issues.number}</p>
              <p>Time Interval</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RepoCard;
