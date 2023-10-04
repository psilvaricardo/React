import React from "react";
import styles from "./TableHead.module.css";

const TableHead = () => {
  return (
    <thead className={styles.tablehead}>
      <tr>
        <th>Year</th>
        <th>Total Savings</th>
        <th>Interest (Year)</th>
        <th>Total Interest</th>
        <th>Invested Capital</th>
      </tr>
    </thead>
  );
};

export default TableHead;
