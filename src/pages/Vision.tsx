import Arrow from "../assets/ubpl-arrow.gif";

const Vision = () => {
  return (
    <div className="w-full space-y-4">
      {/* Header */}
      <div className="flex items-center gap-2 bg-blue-100 px-3 py-1 border border-blue-200">
        <img src={Arrow} alt="Arrow" className="w-[18px] h-[12px] mt-0.5" />
        <h1 className="text-base font-bold text-blue-800">Vision & Mission</h1>
      </div>

      {/* Content */}
      <div className="bg-white border border-gray-200 p-4 rounded text-sm space-y-4 text-gray-700">
        <div>
          <h3 className="text-blue-800 font-semibold">Our Vision</h3>
          <p>
            To be atop-class infrastructure company by continuous striving for
            corporate excellence. With quality deliverables, corporate
            performance and efficient governance, we aim to be a major
            disciplined force in the country. Our expansion plan is charting
            into new verticals to ensure its growth thereby contributing its bit
            to the growth of nation
          </p>
        </div>

        <div>
          <h3 className="text-blue-800 font-semibold">Our Mission</h3>
          <p>
            To ensure high level of productivity in compliance to the corporate
            principles governed by trust, integrity, fulfilment of commitment
            and trenchancy. Weaimtobestate-of-art organization driven by
            technological advancement, sound organization policies and financial
            standing. We aim to be a responsible corporate entity with deep
            concern for human values thereby ensuring our contribution to
            nation-building.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Vision;
