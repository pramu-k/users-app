import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const UsersView = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("/users?page=1").then((response) => {
      setUsers(response.data.data);
    }).catch(error=>console.log(error));
  }, []);

  return (
    <div className="max-w-8xl mx-auto flex flex-col items-center">
      <div className=" flex flex-col w-full items-center">
        <div className="py-4 bg-cyan-500 w-full">
          <h1 className="font-bold text-xl text-center text-white">Title</h1>
        </div>
        <div className="w-full py-6 px-4">
            <h1 className="text-lg">Users</h1>
          </div>
        <div>
          {users ? (
            <div className=" py-4 px-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  xl:grid-cols-6 gap-6">
            {users.length > 0 &&
              users.map((user) => {
                return (
                  <Link to={'/users/'+user.id} className="pt-3 border-2 border-gray-200 rounded-xl h-72 w-52 items-center p-2 hover:scale-110 hover:bg-cyan-100" key={user.id}>
                    <div className=" border-2 border-gray-400  w-full rounded-xl p-1">
                        <img className="rounded-full w-full" src={user.avatar} alt="" />
                    </div>
                    <div className="px-1 py-2">
                      <h1 className="text-lg font-medium">{user.first_name}</h1>
                      <p >{user.email}</p>
                    </div>
                    
                  </Link>
                );
              })}
          </div>
          ):(
            <div>Loading...</div>
          )}
          
        </div>
      </div>
    </div>
  );
};
export default UsersView;
