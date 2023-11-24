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
    });
  }, []);

  const handleClick = ()=>{
    navigate('/users');
  }

  return (
    <div>
      <button onClick={handleClick}>Back</button>
      <div>
        {user ? (
          <div>
            <div>
              <img src={user.avatar} alt="" />
            </div>
            <div>
                <div>
                    <h1>First Name</h1>
                    <h1>{user.first_name}</h1>
                </div>
                <div>
                    <h1>Last Name</h1>
                    <h1>{user.last_name}</h1>
                </div>
                <div>
                    <h1>Email</h1>
                    <h1>{user.email}</h1>
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
