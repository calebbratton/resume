import React, { ReactNode, useContext, useEffect, useState } from "react";
import Draggable from "react-draggable";
import "98.css";
import { WindowContext } from "@/context/context";

interface WindowProps {
  title: string;
  children?: ReactNode;
  className?: string;
}

function WindowComponent({ title, children, className }: WindowProps) {
  const { windows, setWindows } = useContext(WindowContext);
  const handleClose = () => {
    const deletion = { ...windows };
    delete deletion[title];
    setWindows(deletion);
  };
  const handleMinimize = () => {
    setWindows({ ...windows, [title]: false });
  };
  return (
    <Draggable defaultClassName="absolute" cancel=".btn">
      <div className={`window overflow-scroll absolute ${className} `}>
        <div className="title-bar">
          <div className="title-bar-text">{title}</div>
          <div className="title-bar-controls">
            <button
              className="btn"
              aria-label="Minimize"
              onClick={handleMinimize}
            />
            <button className="btn" aria-label="Maximize" />
            <button className="btn" aria-label="Close" onClick={handleClose} />
          </div>
        </div>
        <div className="window-body">{children}</div>
      </div>
    </Draggable>
  );
}

export default WindowComponent;
