import axios from "axios";
import { useEffect, useState } from "react";
import UserCard from "./components/UserCard";

export type UserData = {
  companyLogo: string;
  companyName: string;
  letterDate: string;
  employeeName: string;
  employeeID: string;
  dateOfHire: string;
  citation: string;
  incidentDate: string;
  presidentName: string;
};

function App() {
  const [message, setMessage] = useState<string>("");
  const [user, setUser] = useState<UserData | null>(null);
  const [getMessage, setGetMessage] = useState<string>("")

  const changeInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const sendMessageHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("send message", message);
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_APP_BACKEND_URL}/sendmessage`,
        {
          message: message,
        }
      );
      setGetMessage(res.data.message);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    async function getUser(): Promise<void> {
      const res = await axios.get(
        `${import.meta.env.VITE_APP_BACKEND_URL}/userdata`
      );
      setUser(res.data.user);
    }
    getUser();
  }, []);

  return (
    <>
      <div>
        <form onSubmit={sendMessageHandler}>
          <input
            type="text"
            placeholder="send message"
            value={message}
            onChange={changeInputHandler}
          />
          <button type="submit">send</button>
          <p>{getMessage}</p>
        </form>
        {user && <UserCard userDetail={user} />}
      </div>
    </>
  );
}

export default App;
