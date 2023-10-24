import React, { ReactNode, useContext, useEffect, useState } from "react";
import Draggable from "react-draggable";
import "98.css";
import "./override98.css";
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
  const handleClick = () => {
    const deletion = { ...windows };
    delete deletion[title];
    deletion[title] = true;
    setWindows(deletion);
  };
  const handleMinimize = () => {
    setWindows({ ...windows, [title]: false });
  };
  return (
    <Draggable handle=".handle" cancel=".btn" onMouseDown={handleClick}>
      <div className={`window absolute top-20 left-2 md:left-12 lg:left-12`}>
        <div className="title-bar handle">
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
        <div
          className={`relative overflow-auto flex flex-col items-center ${className}`}
        >
          {children}
        </div>
      </div>
    </Draggable>
  );
}

export default WindowComponent;
