"use client";
import { Tldraw } from "tldraw";
import "tldraw/tldraw.css";
import GenerateButton from "./generate-button";

const DrawComponent = () => {
  return (
    <div className="flex flex-col h-screen w-full space-y-3">
      <div className="flex flex-row justify-end z-10">
        <GenerateButton />
      </div>
      <Tldraw persistenceKey="drawcodeai" />
    </div>
  );
};

export default DrawComponent;
