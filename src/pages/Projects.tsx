import Arrow from "../assets/ubpl-arrow.gif";

const Projects = () => {
  const projects = [
    {
      name: "Tata Project Ltd (OFC)",
      location: "CG",
      scope: "630 km",
      value: "₹12.12 Cr",
    },
    {
      name: "Sterlite Technologies",
      location: "MP",
      scope: "300 km",
      value: "₹6.05 Cr",
    },
    {
      name: "Third Eye Security",
      location: "MP",
      scope: "80 km",
      value: "₹2.10 Cr",
    },
    {
      name: "JIS Infrastructure",
      location: "OD",
      scope: "150 km",
      value: "₹3.00 Cr",
    },
    {
      name: "JJM Water Pipeline (Kalpatru, Apco, etc.)",
      location: "MP/CG/OD/UP",
      scope: "150 m",
      value: "₹3.10 Cr",
    },
  ];

  return (
    <div className="w-full space-y-4">
      {/* Header */}
      <div className="flex items-center gap-2 bg-blue-100 px-3 py-1 border border-blue-200">
        <img src={Arrow} alt="Arrow" className="w-[18px] h-[12px] mt-0.5" />
        <h1 className="text-base font-bold text-blue-800">
          Projects & Work Profile
        </h1>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm border border-gray-300">
          <thead className="bg-gray-100 text-gray-700 font-semibold text-xs">
            <tr>
              <th className="border border-gray-300 px-3 py-2 text-left">Project</th>
              <th className="border border-gray-300 px-3 py-2 text-left">Location</th>
              <th className="border border-gray-300 px-3 py-2 text-left">Scope</th>
              <th className="border border-gray-300 px-3 py-2 text-left">Value</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((proj, i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                <td className="border border-gray-300 px-3 py-2">{proj.name}</td>
                <td className="border border-gray-300 px-3 py-2">{proj.location}</td>
                <td className="border border-gray-300 px-3 py-2">{proj.scope}</td>
                <td className="border border-gray-300 px-3 py-2">{proj.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Projects;
