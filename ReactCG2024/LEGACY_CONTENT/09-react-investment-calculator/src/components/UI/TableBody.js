import React from "react";
import styles from "./TableBody.module.css";

const TableBody = () => {
  return (
    <tbody className={styles.tablebody}>
      <tr>
        <td>YEAR NUMBER</td>
        <td>TOTAL SAVINGS END OF YEAR</td>
        <td>INTEREST GAINED IN YEAR</td>
        <td>TOTAL INTEREST GAINED</td>
        <td>TOTAL INVESTED CAPITAL</td>
      </tr>
    </tbody>
  );
};

export default TableBody;
