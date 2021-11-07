import React, { useContext, useState } from "react";
import GlobalState from "../GlobalState";
import ReactPaginate from "react-paginate";
import UserList from "../components/UserList";

function Customers() {
  const state = useContext(GlobalState);
  const [users] = state.customerAPI.customers;
  const [page, setPage] = useState(0);

  console.log(users);

  const userPerPage = 10;
  const pageVisited = page * userPerPage;

  const displayUser = users.slice(pageVisited, pageVisited + userPerPage);

  const pageCount = Math.ceil(users.length / userPerPage);

  const changePage = ({ selected }) => {
    setPage(selected);
  };

  return (
    <div className="container bg-white pb-5">
      <h2 className="text-center pt-5">Customers</h2>
      <UserList displayUser={displayUser} />
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </div>
  );
}

export default Customers;
