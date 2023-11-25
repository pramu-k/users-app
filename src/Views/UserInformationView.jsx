import axios from "axios";
import { useEffect, useState } from "react";
import { useParams ,useNavigate, Navigate} from "react-router-dom";

const UserInformationView = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    
    axios.get("/users/" + id).then((response) => {
      setUser(response.data.data);
    }).catch(error=>console.log(error));
  }, []);

  const handleClick = ()=>{
    navigate('/');
  }

  return (
    <div className="w-screen max-w-6xl flex flex-col items-center mx-auto">
      <button className="py-4 bg-cyan-500 w-full text-left px-4 text-white" onClick={handleClick}>Back</button>
      <div className="mt-20">
        {user ? (
          <div className="grid sm:grid-cols-2 max-w-3xl items-center">
            <div className="h-48 w-48 bg-gray-100 p-2 m-2 justify-self-center">
              <img className="rounded-full w-full " src={user.avatar} alt="" />
            </div>
            <div className="bg-gray-100 h-32 flex flex-col justify-between py-2 px-4 rounded-xl">
                <div className="flex ">
                    <h1 className="w-32">First Name</h1>
                    <h1 className=" flex-1">{user.first_name}</h1>
                </div>
                <div className="flex">
                    <h1 className="w-32">Last Name</h1>
                    <h1 className="flex-1">{user.last_name}</h1>
                </div>
                <div className="flex">
                    <h1 className="w-32">Email</h1>
                    <h1 className="flex-1">{user.email}</h1>
                </div>
            </div>
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
};
export default UserInformationView;

