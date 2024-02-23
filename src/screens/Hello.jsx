import React from "react";

const libraries = [
  {
    name: "Vite",
    id: "vite",
  },
  {
    name: "React",
    id: "react",
  },
  {
    name: "Redux",
    id: "redux",
  },
  {
    name: "TailwindCSS",
    id: "tailwind",
  },
  {
    name: "MUI",
    id: "mui",
  },
  {
    name: "emotion",
    id: "emotion",
  },
];

export default function Hello() {
  return (
    <div className="min-h-screen min-w-screen flex justify-center items-center bg-gray-100">
      <div className="text-center">
        <div className="animate-pulse text-green-500 text-5xl font-bold mb-6">
          Hello
        </div>
        <div className="text-lg font-semibold mb-4">
          This Project setup Template includes the following. <br />Happy Coding!
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
          {libraries.map((library, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 rounded-lg shadow-md bg-white hover:bg-gray-200 transition duration-300 ease-in-out"
            >
              <img
                src={`https://skillicons.dev/icons?i=${library.id}`}
                alt={`${library.name} Logo`}
                className="w-16 h-16 mb-2"
              />
              <div className="text-gray-800">{library.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
