import { useState, useEffect } from "react";
import Chart from "./Chart";
import DataRange from "./DataRange";
import { AiOutlineLogout } from "react-icons/ai";
import { Link } from "react-router-dom";

function Dashboard() {
  const [selectFrom, setSelectFrom] = useState("");
  const [selectTo, setSelectTo] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    setName(user.name);
  }, []);

  const handleChangeSelectFrom = (date, dateToString) => {
    if (dateToString) {
      setSelectFrom(dateToString.split("-")?.[1]);
    } else {
      setSelectFrom("");
    }
  };
  const handleChangeSelectTo = (date, dateToString) => {
    if (dateToString) {
      setSelectTo(dateToString.split("-")?.[1]);
    } else {
      setSelectTo("");
    }
  };
  return (
    <div className="container">
      <Link to="/">
        <AiOutlineLogout className="logOut" />
      </Link>
      <div className="main-title">
        <h1>
          Hi <span>{name} </span>
        </h1>
        <p>Here's Your Report...</p>
      </div>
      <div className="content">
        <Chart selectFrom={selectFrom} selectTo={selectTo} />
        <DataRange
          handleChangeSelectFrom={handleChangeSelectFrom}
          handleChangeSelectTo={handleChangeSelectTo}
        />
      </div>
    </div>
  );
}

export default Dashboard;
