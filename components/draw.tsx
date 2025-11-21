"use client";
import { Tldraw } from "tldraw";
import "tldraw/tldraw.css";

const DrawComponent = () => {
    return (
        <div className="flex flex-col h-screen w-full">
            <Tldraw persistenceKey="drawcodeai" />
        </div>
    );
};

export default DrawComponent;