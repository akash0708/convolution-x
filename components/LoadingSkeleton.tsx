import React from "react";

const ProfileSkeleton = () => {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center  bg-darkBlue">

    <div className="max-w-4xl w-full mx-auto p-4 space-y-8 ">
      {/* Header Section */}
      <div className="flex items-center space-x-6">
        {/* Avatar skeleton */}
        <div className="rounded-full bg-softPurple/80 w-24 h-24 animate-pulse" />

        {/* Name and basic info */}
        <div className="space-y-3 flex-1">
          <div className="h-4 bg-blue-950 rounded-md w-1/3 animate-pulse" />
          <div className="h-2 bg-blue-950 rounded-md w-1/4 animate-pulse" />
          <div className="h-2 bg-blue-950 rounded-md w-1/4 animate-pulse" />
        </div>
      </div>

      {/* Bio Section */}
      {/* <div className="space-y-4">
        <div className="h-4 bg-blue-950 rounded-md w-3/4 animate-pulse" />
        <div className="h-4 bg-blue-950 rounded-md w-2/3 animate-pulse" />
        <div className="h-4 bg-blue-950 rounded-md w-1/2 animate-pulse" />
      </div> */}

      {/* Stats Section */}
      {/* <div className="grid grid-cols-3 gap-4 py-4">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="space-y-2">
            <div className="h-8 bg-blue-950 rounded-md animate-pulse" />
            <div className="h-4 bg-blue-950 rounded-md w-1/2 mx-auto animate-pulse" />
          </div>
        ))}
      </div> */}

      {/* Content Sections */}
      <div className="space-y-6">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="space-y-3">
            <div className="h-6 bg-blue-950 rounded-md w-1/4 animate-pulse" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[...Array(2)].map((_, j) => (
                <div
                  key={j}
                  className="h-64 bg-blue-950 rounded-lg animate-pulse"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default ProfileSkeleton;
