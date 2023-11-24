import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const UsersView = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("/users?page=1").then((response) => {
      setUsers(response.data.data);
    });
  }, []);

  return (
    <div>
      <div>
        <h1>Title</h1>
        <div className="">
          <div>
            <h1>Users</h1>
          </div>
          <div className="border-2 flex gap-4">
            {users.length > 0 &&
              users.map((user) => {
                return (
                  <Link to={'/users/'+user.id} className="border-2 border-black h-60 w-48 flex flex-col items-center p-2" key={user.id}>
                    <div className="border-2 border-gray-200 h-auto w-full">
                        <img className="rounded-full" src={user.avatar} alt="" />
                    </div>
                    <h1>{user.first_name}</h1>
                    <h2>{user.email}</h2>
                  </Link>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default UsersView;
