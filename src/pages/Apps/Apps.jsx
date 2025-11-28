import React, { useEffect, useState } from "react";

const Apps = () => {
  const [allApps, setAllApps] = useState([]);

  useEffect(() => {
    fetch("appsData.json")
      .then((res) => res.json())
      .then((data) => {
        setAllApps(data);
      });
  }, []);

  return (
    <div>
      {/* <h1 className=" text-3xl text-center p-6">Apps</h1>
      <Suspense fallback={<span>loading......</span>}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {allApps?.map((singleApps) => (
            <Book key={singleApps.bookId} singleApps={singleApps}></Book>
          ))}
        </div>
      </Suspense> */}
    </div>
  );
};

export default Apps;
