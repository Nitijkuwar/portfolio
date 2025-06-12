import React from "react";

const Skills = () => {
  const skills = [
    { name: "HTML", level: 90, color: "bg-orange-500" },
    { name: "CSS", level: 85, color: "bg-blue-500" },
    { name: "JavaScript", level: 70, color: "bg-yellow-400" },
    { name: "React", level: 60, color: "bg-cyan-500" },
    { name: "Tailwind CSS", level: 75, color: "bg-sky-500" },
  ];

  return (
    <div
      className="min-h-screen flex items-center justify-center px-6"
      id="skills"
    >
      <div className="w-full max-w-3xl">
        <h2 className="text-center font-bold text-3xl mb-10">My Skills</h2>

        <div className="space-y-6">
          {skills.map((skill, index) => (
            <div key={index}>
              <div className="flex justify-between mb-2 text-base sm:text-lg">
                <span className="font-medium">{skill.name}</span>
                <span className="text-gray-100">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-md overflow-hidden">
                <div
                  className={`${skill.color} h-4 rounded-md`}
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
