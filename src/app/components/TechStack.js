// components/TechStack.js
"use client";
import React from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiDjango,
  SiPostgresql,
  SiGit,
  SiPython,
  SiMysql,
  SiRender,
  SiVercel,
  SiGithub,
  SiOpenai,
  SiDocker
} from "react-icons/si";

const techs = [
  { name: "HTML5",      icon: <SiHtml5 size={24} /> },
  { name: "CSS3",       icon: <SiCss3 size={24} /> },
  { name: "JavaScript", icon: <SiJavascript size={24} /> },
  { name: "React",      icon: <SiReact size={24} /> },
  { name: "Next.js",    icon: <SiNextdotjs size={24} /> },
  { name: "MongoDB",    icon: <SiMongodb size={24} /> },
  { name: "Django",     icon: <SiDjango size={24} /> },
  { name: "PostgreSQL", icon: <SiPostgresql size={24} /> },
  { name: "Git",        icon: <SiGit size={24} /> },
  { name: "Python",     icon: <SiPython size={24} /> },
  { name: "MySQL",      icon: <SiMysql size={24} /> },
  { name: "Render",     icon: <SiRender size={24} /> },
  { name: "Vercel",     icon: <SiVercel size={24} /> },
  { name: "GitHub",     icon: <SiGithub size={24} /> },
    { name: "OpenAI",     icon: <SiOpenai size={24} /> },
    { name: "Docker",     icon: <SiDocker size={24} /> },
   

];

export default function TechStack() {
  return (
    <ul
      className="
        mt-8
        grid gap-6
        justify-items-center
        grid-cols-[repeat(auto-fit,minmax(120px,1fr))]
        max-w-6xl mx-auto
      "
    >
      {techs.map(({ name, icon }) => (
        <li key={name} className="w-full max-w-[140px]">
          <div className="group p-0.5 bg-white rounded-lg hover:shadow-lg transition-shadow duration-200">
            <div className="bg-slate-900 rounded-lg flex flex-col items-center justify-center p-2 space-y-1 transform group-hover:scale-105 transition-transform duration-200">
              {icon}
              <span className="text-white font-medium text-xs">{name}</span>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
