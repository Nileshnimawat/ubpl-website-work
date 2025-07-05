import { useNavigate } from "react-router-dom";
import Arrow from "../assets/ubpl-arrow.gif";
const slideImages = "/assets/project-1.gif";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-2 w-full">
      {/* Welcome Heading */}
      <h1 className="text-xl flex gap-1 font-bold text-blue-800">
        <img className="w-[19px] h-[12px] mt-2.5" src={Arrow} alt="" />
        <span className="text-red-600"> Welcome to</span> Utishta Bharata
        Private Limited
      </h1>

      {/* Welcome Section (Text Only) */}
      <div className="text-xs font-normal text-gray-700 space-y-2 pb-5 border-b">
        <p>
          UBPL’s mission is to enhance the operations and competence of the
          Indian Core Sector Industries by providing them with cutting-edge
          technological solutions, latest expertise, and developments at the
          global platform.
        </p>
        <p>
          UBPL also represents international companies for their products and
          services in Civil, Telecom, Oil & Gas, Refineries, and Petrochemicals.
        </p>
        <p>
          Alongside this, UBPL is stepping into skill development and global
          collaborations.
          <span
            onClick={() => {
              navigate("/corporate-overview");
            }}
            className="text-blue-600 underline ml-1 cursor-pointer"
          >
            read more…
          </span>
        </p>
      </div>

      {/* Vision & Mission - Text Only */}
      <div className="flex flex-col md:flex-row gap-1 pt-2 border-b pb-5">
        {/* Vision */}
        <div className="w-full md:w-1/2 bg-blue-50 p-2 ">
          <h3 className="font-bold text-center text-blue-800 mb-2">Vision</h3>
          <p className="text-xs text-gray-700">
            To be a top-class infrastructure company by continuous striving for
            corporate excellence. With quality deliverables, corporate
            performance and efficient governance,
             <span
              onClick={() => {
                navigate("/vision");
              }}
              className="text-blue-600 underline ml-1 cursor-pointer"
            >
              read more…
            </span>
          </p>
          
        </div>

        {/* Mission */}
        <div className="w-full md:w-1/2 bg-green-50 p-2 ">
          <h3 className="font-bold text-center text-blue-800 mb-2">Mission</h3>
          <p className="text-xs text-gray-700">
            To ensure high level of productivity in compliance to the corporate
            principles governed by trust, integrity, fulfilment of commitment
            
            <span
              onClick={() => {
                navigate("/vision");
              }}
              className="text-blue-600 underline ml-1 cursor-pointer"
            >
              read more…
            </span>
          </p>
        </div>
      </div>

      {/* Image Slideshow */}
      <div className="border mt-4">
        <div className="h-[210px]">
          <img
            src={slideImages}
            alt={`Slide`}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
