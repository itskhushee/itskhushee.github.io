"use client";
import React, { useState } from "react";


const myExperience = [
    {
        company: "Get Vitals",
        position: "Software Engineering Intern",
        at: "Boston, MA (Remote)",
        duration: "June 2025 - Present",
        responsibilities: [
            "Developing and refining React Native features for AI-driven emotional support tools used by frontline nurses.",
            "Conducting cross-platform testing and debugging on iOS and Android to ensure stability and performance.",
            "Participating in agile stand-ups, sprint planning, user testing coordination, and documentation of code architecture.",
        ],
    },
    {
        company: "Fero.AI Freight Technologies",
        position: "Software Engineering Intern",
        at: "Gujarat, India",
        duration: "January 2024 - May 2024",
        responsibilities: [
            "Engineered and deployed a web application using Django, REST API, Python, and Vue.js, enhancing customer data tracking accuracy by 30%.",
            "Designed automated processes that reduced manual tasks by 20%, boosting team productivity.",
            "Led rigorous software testing to resolve critical issues, improving stability and reducing bugs by 25%.",
            " Actively participated in agile stand-ups, sprint planning, and retrospectives to ensure timely delivery.",
        ],
    }
];

export default function Experience() {
    return (
        <section id="experience" className="bg-gradient-to-b from-slate-800 to-slate-700 text-white py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-5xl font-bold text-center mb-8">Experience</h2>
                <div className="space-y-8">
                    {myExperience.map((exp, index) => (
                        <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
                            <div className="flex justify-between items-center mb-2">
                                <h3 className="text-3xl font-semibold">{exp.company}</h3>
                                <span className="text-sm text-gray-300">{exp.at}</span>
                            </div>
                            <p className="text-xl mb-1">{exp.position}</p>
                            <p className="text-sm text-gray-400 mb-4">{exp.duration}</p>
                            <ul className="list-disc pl-5 space-y-2">
                                {exp.responsibilities.map((task, idx) => (
                                    <li key={idx}>{task}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

