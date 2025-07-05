import Arrow from "../assets/ubpl-arrow.gif";

const Focus = () => (
  <div className="w-full space-y-4">
    <div className="flex items-center gap-2 bg-blue-100 px-3 py-1 border border-blue-200">
      <img src={Arrow} alt="Arrow" className="w-[18px] h-[12px] mt-0.5" />
      <h1 className="text-base font-bold text-blue-800">Our Focus</h1>
    </div>
    <div className="bg-white border border-gray-200 p-4 rounded text-sm space-y-2 text-gray-700">
      <ul className="list-disc list-inside space-y-1">
        <li>Optical Fiber Cable (OFC)</li>
        <li>Solar Projects</li>
        <li>Telecom Infrastructure – Tower & Fibre</li>
        <li>Construction – Civil & Electrical</li>
        <li>Gas Pipelines</li>
        <li>Roads and Building</li>
        <li>Skill Development (Govt. Projects)</li>
      </ul>
    </div>
  </div>
);

export default Focus;