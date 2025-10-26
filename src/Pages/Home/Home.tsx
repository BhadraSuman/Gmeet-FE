import React, { useState, useEffect } from "react";
import { FaPlus, FaKeyboard, FaGear, FaVideo, FaQuestion } from "react-icons/fa6";
import logo from "../../assets/images/logoLong.png";
import { HiBars3 } from "react-icons/hi2";

const HomePage = () => {
    const [joinCode, setJoinCode] = useState<string>("");
    const [currentTime, setCurrentTime] = useState<Date>(new Date());

    useEffect(() => {
        const timerId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(timerId);
    }, []);

    const handleNewMeeting = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const randomCode = Math.random().toString(36).substring(2, 12);
        alert(`Creating new meeting... Your code is: ${randomCode}`);
    };

    const handleJoinMeeting = () => {
        if (!joinCode.trim()) return;
        alert(`Joining meeting: ${joinCode}`);
        setJoinCode("");
    };

    // Event is typed as a keyboard event on an HTMLInputElement
    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            handleJoinMeeting();
        }
    };

    // Event is typed as a change event on an HTMLInputElement
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setJoinCode(e.target.value);
    };

    const formattedTime = currentTime.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
    });

    const formattedDate = currentTime.toLocaleDateString("en-US", {
        weekday: "short", // "Sun"
        month: "short", // "Oct"
        day: "numeric", // "26"
    });

    return (
        <div className="flex flex-col min-h-screen bg-white font-roboto">
            {/* --- 1. Header --- */}
            <header className="flex items-center justify-between px-4 py-3 sm:px-6">
                <div className="flex items-center gap-2">
                    <HiBars3 className="text-3xl text-gray-700 mr-1" />
                    <img src={logo} alt="Logo" className="h-10 w-full" />
                </div>
                <nav className="flex items-center gap-8">
                    <span className="hidden text-lg text-gray-700 md:block">
                        {formattedTime} • {formattedDate}
                    </span>
                    <button className="text-gray-500 hover:text-gray-800">
                        <FaQuestion className="h-5 w-5" />
                    </button>
                    <button className="text-gray-500 hover:text-gray-800">
                        <FaGear className="h-5 w-5" />
                    </button>
                    {/* Simple Profile Avatar */}
                    <div className="h-8 w-8 cursor-pointer rounded-full bg-teal-600 flex items-center justify-center font-bold text-white">
                        U
                    </div>
                </nav>
            </header>

            {/* --- 2. Main Content --- */}
            <main className="grow flex  justify-center p-4">
                <div className="container mx-auto max-w-6xl">
                    <div className="flex flex-col items-center  md:max-w-2/3 mx-auto p-4">
                        <h1 className="text-5xl text-center text-gray-800">Video calls and meetings for everyone</h1>
                        <p className="text-2xl text-center text-gray-500 mt-4 px-8">
                            Connect, collaborate, and celebrate from any where with Google meet
                        </p>
                        <div className="flex items-center justify-center mt-8 gap-4 flex-wrap">
                            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-full flex items-center justify-center gap-2 text-nowrap w-full md:w-auto ">
                                <FaVideo />
                                New meeting
                            </button>
                            <div className="flex items-center gap-2 border border-gray-300 py-3 pr-6 pl-3 rounded-full focus-within:ring-2 focus-within:ring-blue-500 w-full md:w-auto">
                                <FaKeyboard className="text-gray-600 text-xl" />
                                <input
                                    type="text"
                                    placeholder="Join with code"
                                    value={joinCode}
                                    onChange={handleInputChange}
                                    className="outline-none bg-transparent text-gray-600 w-full"
                                />
                            </div>
                            <button
                                disabled={!joinCode.trim()}
                                onClick={handleJoinMeeting}
                                className="text-blue-600 font-medium disabled:text-gray-600"
                            >
                                Join
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default HomePage;
