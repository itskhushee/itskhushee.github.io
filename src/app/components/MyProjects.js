import React from "react";

const MyProjects = () => {
  const projects = [
    {
      title: "Return2Tech",
      img: "/return2tech.png",
      desc:
        "Built a full-stack app with Express.js, the OpenAI API, and Firebase for personalized career roadmaps.",
      url: "https://github.com/mahimalolla/SheHacks-25",
    },
    {
      title: "StaffSync",
      img: "/staffsync.png",
      desc:
        "Created a role-based employee management system using Django, MySQL, Docker, and AWS.",
      url: "https://github.com/shashhwatiwari/StaffSync.git",
    },
    {
      title: "Matrix Project",
      img: "/matrix.png",
      desc:
        "Developed a Django + Vue.js ERP platform to automate workflows for 1,000+ users with zero downtime.",
      url: "https://github.com/itskhushee",
    },
    {
      title: "Sign Language Detection",
      img: "/asldetection.png",
      desc:
        "Implemented real-time ASL recognition with a CNN-ResNet model and OpenCV, leveraging data augmentation.",
      url: "https://github.com/JillShah189/CSE541-Computer-Vision-2023-Group7.git",
    },
  ];

  return (
    <section
      id="projects"
      className="bg-gradient-to-b from-slate-800 to-slate-900"
    >
      <div className="container mx-auto px-4 py-20">
        <h2 className="text-white text-5xl font-bold text-center mb-6">
          My Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-5">
          {projects.map(({ title, img, desc, url }) => (
            <div
              key={title}
              className="bg-gray-800 text-white rounded-lg shadow-lg flex flex-col md:flex-row overflow-hidden"
            >
              {/* Image */}
              <div className="md:w-1/2 h-32 md:h-auto">
                <img
                  src={img}
                  alt={title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text */}
              <div className="md:w-1/2 p-4 flex flex-col">
                <h3 className="text-2xl font-semibold mb-2">{title}</h3>
                <p className="text-sm mb-4 flex-1">{desc}</p>
                <a
                  href={url}
                  className="text-blue-400 hover:underline self-start"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyProjects;
