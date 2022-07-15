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
        <div className="bg-[#ebebeb] px-3 py-3 rounded-lg mt-6 space-x-6 flex   max-w-[90%] mx-auto">
          <img className="w-[3rem] h-[3rem] rounded-full" src={avatar} alt="" />
          <div>
            <p className="font-bold">{reponame}</p>
            <p className="mt-2 ">{repodescription}</p>
            <div className="mt-2 items-center space-x-8  flex">
              <p>Stars:{stars}</p>
              <p>Issues:{issues.number}</p>
              <p>{timeinterval}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RepoCard;
