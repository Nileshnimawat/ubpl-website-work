// src/pages/Machinery.tsx
import Arrow from "../assets/ubpl-arrow.gif";

const Machinery = () => (
  <div className="w-full space-y-4">
    <div className="flex items-center gap-2 bg-blue-100 px-3 py-1 border border-blue-200">
      <img src={Arrow} alt="Arrow" className="w-[18px] h-[12px] mt-0.5" />
      <h1 className="text-base font-bold text-blue-800">Machinery</h1>
    </div>
    <div className="bg-white border border-gray-200 p-4 rounded text-sm space-y-2 text-gray-700">
      <ul className="list-disc list-inside space-y-1">
        <li>HDD Machine — 7 Owned, 10 Hired</li>
        <li>JCB — 2 Owned, 20 Hired</li>
        <li>Poclain & Breaker — 0 Owned, 5 Hired</li>
        <li>Tippers, Tractor & Tanker — 0 Owned, 10 Hired</li>
        <li>Blowing Machine — 1 Owned, 5 Hired</li>
        <li>Splicing Machine & OTDRs — 1 Owned, 5 Hired</li>
        <li>Trailers & Loaders — 3 Owned, 4 Hired</li>
        <li>Pickup 207 — 2 Owned, 5 Hired</li>
      </ul>
      <p className="text-xs italic text-gray-500 pt-2">
        Note: We have an organized setup of leased machinery required to cater any quantum of work.
      </p>
    </div>
  </div>
);

export default Machinery;