import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "../helpers/nav.css";
import sortPost from "../redux/thunk/sortPost";
const Navbar = ({ modalHandler }) => {
  const [type, setType] = useState("");
  const dispatch = useDispatch();
  const postSort = (e) => {
    dispatch(sortPost(e));
  };
  return (
    <div className="Nav bg-base-100">
      <span style={{ textTransform: "uppercase", fontWeight: "bold" }}>
        RentEasy
      </span>
      <span style={{ textTransform: "uppercase", fontWeight: "bold" }}>
        Available Rent
      </span>
      <ul>
        <Link
          style={{ textTransform: "uppercase", fontWeight: "bold" }}
          to="/history"
          className="cursor-pointer btn btn-primary mx-2"
        >
          History
        </Link>
        <select className="text-black font-bold h-12 rounded-md cursor-pointer" onChange={(e) => postSort(e.target.value)}>
          <option className="text-lg">Sort type</option>
          <option className="text-lg" value="Latest to Oldest">
            Latest to Oldest
          </option>
          <option className="text-lg" value="Oldest To Latest">
            Oldest To Latest
          </option>
        </select>
        <li>
          <Link className="btn btn-primary"
            style={{ textTransform: "uppercase", fontWeight: "bold" }}
            to="/"
          >
            🏡Home{" "}
          </Link>
        </li>

        <label
          for="my-modal"
          class="btn"
          onClick={() => modalHandler("my-modal")}
        >
          Create
        </label>
      </ul>
    </div>
  );
};

export default Navbar;
