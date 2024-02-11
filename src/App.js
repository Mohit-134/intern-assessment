import React, { useState, useEffect } from "react";

function App() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetch("https://randomuser.me/api/")
      .then((response) => response.json())
      .then((data) => setUserData(data.results[0]))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="bg-black flex justify-center items-center h-screen">
      <div className="bg-white p-8 w-[30%] h-[30%]">
        {userData && (
          <div>
            <div className=" border-black border-[6px] p-8  flex justify-stretch space-x-7">
              <div className=" border-black border-[6px]">
                <img width={120}  src={userData.picture.large} alt="User" />
              </div>
              <div className="space-y-4">
                <p>
                   {userData.name.first} {userData.name.last}
                </p>
                <p> {userData.gender}</p>
                <p> {userData.phone}</p>

                
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
