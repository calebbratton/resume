import React, { ReactNode, useEffect, useState } from "react";
import Draggable from "react-draggable";
import "98.css";

interface WindowProps {
  title: string;
  children?: ReactNode;
}

function WindowComponent({ title, children }: WindowProps) {
  return (
    <Draggable>
      <div className="window max-w-sm">
        <div className="title-bar">
          <div className="title-bar-text">{title}</div>
          <div className="title-bar-controls">
            <button aria-label="Minimize" />
            <button aria-label="Maximize" />
            <button aria-label="Close" />
          </div>
        </div>
        <div className="window-body">{children}</div>
      </div>
    </Draggable>
  );
}

export default WindowComponent;
