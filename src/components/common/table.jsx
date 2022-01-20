import React from "react";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

// in functional components object destructuring can be done like this below
const Table = ({ sortColumn, onSort, columns, data }) => {
  return (
    <table className="table">
      <TableHeader columns={columns} sortColumn={sortColumn} onSort={onSort} />
      <TableBody columns={columns} data={data} />
    </table>
  );
};

export default Table;
