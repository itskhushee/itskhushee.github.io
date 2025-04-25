// components/AboutMe.js
"use client";
import Image from "next/image";
import React from "react";
import TechStack from "./TechStack";

const AboutMe = () => {
    return (
        <section id="about" className="bg-gradient-to-b from-slate-900 to-slate-800 text-white py-20">
            <div className="min-h-screen container mx-auto px-4">
                <h2 className="text-5xl font-bold text-center mb-12">About Me</h2>

                {/* Side-by-side layout: photo + description */}
                <div className="flex flex-col md:flex-row items-center md:items-start gap-8 max-w-3xl mx-auto">
                    {/* Photo */}
                    <div className="relative w-60 h-60 rounded-full overflow-hidden border-4 border-gray-700 shadow-lg">
                        <Image
                            src="/photo.jpeg"
                            alt="Profile Picture"
                            width={350}
                            height={300}
                            className="object-cover object-center"
                            priority
                        />
                    </div>

                    {/* Description */}
                    <div className="flex-1">
                        <p className="text-lg leading-relaxed">
                            I’m <strong>Khushee Vakil</strong>, currently pursuing my M.S. in Computer Science at Northeastern University (expected May 2026). With a solid foundation in data structures, algorithms, and web development, I’ve built full-stack applications using React, Next.js, Django —and I am continuously exploring cloud and AI technologies to solve real-world problems.
                        </p>
                    </div>


                </div>
                <h2 className="text-3xl font-bold text-center mb-6">Tech Stack</h2>
                <TechStack />

            </div>
        </section>
    );
};

export default AboutMe;
