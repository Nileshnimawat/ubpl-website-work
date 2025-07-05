import Arrow from "../assets/ubpl-arrow.gif";

const CorporateOverview = () => {
  return (
    <div className="w-full space-y-4">
      {/* Header with Arrow */}
      <div className="flex items-center gap-2 bg-blue-100 px-3 py-1 border border-blue-200">
        <img src={Arrow} alt="Arrow" className="w-[18px] h-[12px] mt-0.5" />
        <h1 className="text-base font-bold text-blue-800">Corporate Overview</h1>
      </div>

      {/* Body */}
      <div className="bg-white text-gray-700 text-sm leading-relaxed px-2 py-1 space-y-3">
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
          collaborations. In addition, UBPL has ushered into the arena of{" "}
          <span className="font-semibold text-blue-800">Skill Development</span>.
          Responding to the clarion call of the Hon'ble Prime Minister to make
          India a skilled nation, UBPL has onboarded some of the best minds in
          the field and built state-of-the-art training and skilling facilities.
        </p>

        <p>
          UBPL is growing geometrically and contributing to the growth of society
          and development of the nation.
        </p>

        {/* Financial Data */}
        <div className="bg-gray-50 border rounded p-3 text-sm">
          <p className="font-medium text-gray-800 mb-1">Turnover for the last three years:</p>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            <li><span className="font-semibold text-blue-800">FY 2021-22:</span> ₹ 8.44 Cr</li>
            <li><span className="font-semibold text-blue-800">FY 2022-23:</span> ₹ 6.14 Cr</li>
            <li><span className="font-semibold text-blue-800">FY 2023-24:</span> ₹ 10.06 Cr</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CorporateOverview;
