import axios from "axios";
import { useEffect, useState } from "react";

function CustomersAPI(token) {
  const [customers, setCustomers] = useState([]);
  const [callback, setCallback] = useState(false);

  useEffect(() => {
    if (token) {
      const getUsers = async () => {
        const res = await axios.get("/user/users", {
          headers: { Authorization: token },
        });
        setCustomers(res.data.users);
      };
      getUsers();
    }
  }, [callback, token]);

  return {
    customers: [customers, setCustomers],
    callback: [callback, setCallback],
  };
}

export default CustomersAPI;
