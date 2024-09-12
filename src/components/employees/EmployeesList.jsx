import { useEffect, useState } from "react";
import { getStaffUsers } from "../../services/userService.jsx";
import { User } from "../users/Users.jsx";
import "./Employees.css";

export const EmployeesList = () => {
  const [staffUsers, setStaffUsers] = useState([]);

  useEffect(() => {
    getStaffUsers().then((employeeArray) => setStaffUsers(employeeArray));
  }, []);

  return (
    <div className="employees">
      <div>
        {staffUsers.map((employeeObj) => {
          return <User user={employeeObj} key={employeeObj.id} />;
        })}
      </div>
    </div>
  );
};
