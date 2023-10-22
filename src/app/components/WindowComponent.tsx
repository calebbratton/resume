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
    <Draggable defaultClassName={``} handle=".handle" cancel=".btn">
      <div className={`window absolute md:left-32`}>
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
        <div className={`relative overflow-auto ${className} window-body mb-4`}>
          {children}
        </div>
      </div>
    </Draggable>
  );
}

export default WindowComponent;
