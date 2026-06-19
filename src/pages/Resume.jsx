import React from "react";
import profileImg from "../assets/profile.jpg";


export default function Resume() {
  return (
    <div className="min-h-screen bg-gray-200 flex justify-center items-center p-6">
      <div className="w-[850px] bg-white shadow-2xl relative overflow-hidden rounded-lg">
        
        {/* Top Design */}
        <div className="absolute top-0 left-0 w-56 h-56 bg-[#0b1b52] rounded-br-[140px]"></div>

        {/* Bottom Design */}
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#0b1b52] rounded-tl-[100px]"></div>

        <div className="grid grid-cols-3 relative z-10">
          
          {/* LEFT SIDE */}
          <div className="bg-white p-6 border-r border-gray-300">
           
           <div>
            <h1 className="text-5xl underline font-bold text-orange-500 mt-4 uppercase">
              RESUME</h1>
           </div>

            {/* Contact */}
            <div className="mt-17 mb-10">
              <h2 className="text-xl font-bold mb-4 text-[#0b1b52]">
                Contact
              </h2>

              <div className="space-y-3 text-sm">
                <p>📞 +91 77174-47908</p>
                <p>📧 singhkarmsingh62@gmail.com</p>
                <p>📍 Punjab, India</p>
              </div>
            </div>

            {/* Skills */}
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4 text-[#0b1b52]">
                Personal Skills
              </h2>

              <ul className="list-disc ml-5 space-y-2 text-sm">
                <li>Communication Skills</li>
                <li>Teamwork</li>
                <li>Problem Solving</li>
                
                <li>Time Management</li>
              </ul>
            </div>

            {/* Language */}
            <div>
              <h2 className="text-xl font-bold mb-4 text-[#0b1b52]">
                Language
              </h2>

              <ul className="list-disc ml-5 space-y-2 text-sm">
                
                <li>English</li>
                <li>Punjabi</li>
              </ul>

             <div className="mt-10">
              <h2 className="text-2xl font-bold text-[#0b1b52] mb-4">
                Hobbies
              </h2>
              <ul className="list-disc ml-5 text-gray-700 space-y-2">
                <li>Gym</li>
                <li>Music</li>
                <li>Coding</li>
                <li>Traveling</li>
              </ul>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="col-span-2 p-10">
            
            {/* Name */}
            <div className="mb-8">
              <h1 className="text-5xl font-bold text-[#0b1b52] uppercase">
               karm singh
              </h1>

              <p className="text-gray-600 text-xl mt-2">
                Frontend Developer
              </p>
            </div>

            {/* Career Objective */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-[#0b1b52] mb-3">
                Career Objective
              </h2>

              <p className="text-gray-700 leading-7">
               Passionate and self-motivated fresher with knowledge of HTML, CSS, JavaScript, React, and Node.js seeking an opportunity to start my career as a web developer where I can enhance my skills and contribute to real-world projects.
              </p>
            </div>

            {/* Education */}
            <div className="mb-4">
              <h2 className="text-2xl font-bold text-[#0b1b52] mb-4">
                Education
              </h2>
 
 
                <h3 className=" font-semibold text-lg">
                 Mechanic(Motor Vehicle) ITI
                </h3>

                <p className="text-gray-600">
                  Goverment industrial training institute ferozepur  | 2021-23
                </p>
                </div>
            
  <div>
                <h3 className="font-semibold text-lg">
                  Stenographer & secretatial assistant ITI
                </h3>

                <p className="text-gray-600">
                  Goverment industrial training institute ferozepur | 2020-21
                </p>
                </div>
 
 
 <div>

              <div>
                <h3 className="mt-2 font-semibold text-lg">
                  12th Class
                </h3>

                <p className="text-gray-600">
                  Govt. sen. sec school, sandhe hasham | 2020
                </p>
                </div>

                <div>
                <h3 className=" mt-2 font-semibold text-lg">
                  10th Class
                </h3>
                  <p className="text-gray-600 mb-5">
                  Govt. sen. sec school, sandhe hasham | 2018
                </p>
              </div>
            </div>

            {/* Technical Skills */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-[#0b1b52] mb-4">
                Technical Skills
              </h2>

              <ul className="grid grid-cols-2 gap-3 list-disc ml-5 text-gray-700">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React JS</li>
                <li>Tailwind CSS</li>
                <li>Node JS</li>
              </ul>
            </div>

            {/* Hobbies */}
           

              
          
          </div>
        </div>
      </div>
    </div>
  );
}