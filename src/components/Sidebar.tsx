import { NavLink } from "react-router-dom";
import Arrow from "../assets/ubpl-arrow.gif";

export default function Sidebar() {
  const navItems = [
    { name: "Corporate Overview", path: "/corporate-overview" },
    { name: "Vision & Mission", path: "/vision" },
     { name: "Founders", path: "/directors" },
    { name: "Management Team", path: "/management-teams" },
    { name: "Our Focus", path: "/focus" },
    { name: "Projects", path: "/projects" },
    { name: "Machinery", path: "/machinery" },
    { name: "Prestigious Clients", path: "/clients" },
     { name: "Company Profile", path: "/profile" },
    { name: "Contact", path: "/contact" },///management-teams

  ];

  return (
    <aside className="bg-white p-1 mt-1 w-full lg:w-1/5">
      <ul className="space-y-2 text-[#003399] text-xs font-bold">
        {navItems.map((item) => (
          <li key={item.path}>
            <div className="flex gap-1 items-center bg-blue-50 px-1 py-0.5">
              <img className="w-[19px] h-[12px] mt-1" src={Arrow} alt="" />
              <NavLink
                to={item.path}
                className="hover:underline"
              >
                {item.name}
              </NavLink>
            </div>
          </li>
        ))}
      </ul>
      <div className="w-full mt-3">
    <div className="flex items-center gap-2 bg-blue-100 px-3 py-1 border border-blue-200">
      <h1 className="text-xs font-bold text-blue-800">Core Values</h1>
    </div>
    <div className="bg-white border border-gray-200 p-2 rounded text-xs  text-gray-700">
      <ul className="list-disc list-inside ">
        <li>Success</li>
        <li>Integrity</li>
        <li>Timeliness</li>
        <li>Quality</li>
        <li>Transparency</li>
        <li>Passion</li>
        <li>Excellence</li>
      </ul>
    </div>
  </div>
    </aside>
  );
}
