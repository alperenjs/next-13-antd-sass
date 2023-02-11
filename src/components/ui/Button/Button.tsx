import React from "react";
import { Button, ButtonProps } from "antd";
import styles from "./Button.module.scss";

function MyButton(props: any) {
  return (
    <>
      <div className={styles.alperen}>
        <Button {...props} />
      </div>
      <Button {...props} />
    </>
  );
}

export default MyButton;
