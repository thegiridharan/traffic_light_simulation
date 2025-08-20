"use client";
import {useEffect, useState} from "react";

const lights = ["red", "yellow", "green"];

const duration = {
    "red": 6000,
    "yellow": 3000,
    "green": 5000,
}

const bgColor = [
    "bg-red-600",
    "bg-yellow-400",
    "bg-green-600",
];

export default function Simulation() {
    const [activeLight, setActiveLight] = useState("red");
    const [color, setColor] = useState(bgColor[0]);

    useEffect(() => {
        const timer = setTimeout(() => {
            const currentIndex = lights.indexOf(activeLight);
            const nextIndex = (currentIndex + 1) % lights.length;
            setActiveLight(lights[nextIndex]);
            setColor(bgColor[nextIndex]);
        }, duration[activeLight]);

        return () => clearTimeout(timer);
    }, [activeLight])

    return(
        <div className="bg-gray-100 min-h-screen flex flex-col justify-evenly">
            <p className="font-semibold text-[20px] flex items-center justify-center">Traffic Light Simulation</p>
            <div className="flex flex-row justify-evenly">
                <div className="flex flex-col items-center justify-center">
                    <div className="flex flex-col gap-[10px] p-[20px] outline-1 outline-black/30 rounded-[7px] w-fit h-fit">
                        <p className={`h-[50px] w-[50px] rounded-full ${color === "bg-red-600" ? color : "bg-red-100"}`}></p>
                        <p className={`h-[50px] w-[50px] rounded-full ${color === "bg-yellow-400" ? color : "bg-yellow-100"}`}></p>
                        <p className={`h-[50px] w-[50px] rounded-full ${color === "bg-green-600" ? color : "bg-green-100"}`}></p>
                    </div>
                    <div className="h-[250px] w-[2px] bg-black" />
                    <div className="h-[2px] w-[150px] bg-black" />
                </div>
                <div className="flex items-center justify-center w-[200px]">
                    {activeLight === "red" && (<p className="font-semibold text-[26px]">Wait</p>)}
                    {activeLight === "yellow" && (<p className="font-semibold text-[26px]">Ready to Go</p>)}
                    {activeLight === "green" && (<p className="font-semibold text-[26px]">Go</p>)}
                </div>
            </div>
        </div>
    );
}
