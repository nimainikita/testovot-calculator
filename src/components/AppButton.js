import React from "react";

function AppButton({onClick, children}){
  return <button onClick={onClick}>{children}</button>
}

export default AppButton;