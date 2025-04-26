"use client";
import React, { useState, useEffect } from "react";
import Starfield from 'react-starfield';
import { FaLinkedin, FaInstagram, FaSlack, FaGithub, FaMailBulk, FaEnvelope } from "react-icons/fa";

const TypewriterText = ({ text, speed = 50 }) => {
    const [displayedText, setDisplayedText] = useState("");
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index < text.length) {
            const timeout = setTimeout(() => {
                setDisplayedText((prev) => prev + text[index]);
                setIndex(index + 1);
            }, speed);
            return () => clearTimeout(timeout);
        }
    }, [index, text, speed]);

    return <span>{displayedText}</span>;
};

const HeroSection = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <section id="home" className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white py-50">
            {/* Starfield background */}
            <Starfield
                starCount={10000}
                starColor={[255, 255, 255]}
                speedFactor={0.05}
                backgroundColor="black"
            />

            {/* Hero content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
                <h1 className="text-6xl md:text-7xl font-extrabold text-white">
                    Hi, I&apos;m Khushee Vakil.
                </h1>
                <p className={`mt-4 text-xl md:text-4xl text-white transition-opacity duration-1000 delay-500 ${isVisible ? "opacity-100" : "opacity-0"
                    }`}>
                    <TypewriterText
                        text="An aspiring software engineer."
                        speed={50}
                    />
                </p>
                <div className="text-center p-4 text-white rounded-lg mt-8 bg-gunmetal bg-opacity-80">
                    <h3 className="text-tiffany-blue text-xl mb-4 font-bold">Connect with me on:</h3>
                    <div className="flex justify-center space-x-4">
                        <a
                            href="https://www.linkedin.com/in/khushee-vakil-75b50a230/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-tiffany-blue"
                            placeholder="LinkedIn"
                        >
                            <FaLinkedin size={28} />
                        </a>
                        <a
                            href="https://github.com/itskhushee"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-tiffany-blue"
                            placeholder="GitHub"
                        >
                            <FaGithub size={28} />
                        </a>
                        <a
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=khusheevakil@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-tiffany-blue"
                            placeholder="Email"
                        >
                            <FaEnvelope size={28} />
                        </a>

                    </div>
                </div>
                <a
                    href="#about"
                    className="mt-8 inline-block px-8 py-4 text-white font-semibold border-2 border-white
             shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                    View My Work ⬇
                </a>
            </div>
        </section>
    );
};

export default HeroSection;

// Install the package:
// npm install react-starfield-animation
