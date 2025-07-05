import Arrow from "../assets/ubpl-arrow.gif";
import sandeepImg from "/assets/sandeep.jpeg"; // ✅ Update if not loading
import archanaImg from "/assets/archana.jpeg"; // ✅ Update if not loading

const Directors = () => (
  <div className="w-full space-y-4">
    {/* Header */}
    <div className="flex items-center gap-2 bg-blue-100 px-3 py-1 border border-blue-200">
      <img src={Arrow} alt="Arrow" className="w-[18px] h-[12px] mt-0.5" />
      <h1 className="text-base font-bold text-blue-800">Founders</h1>
    </div>

    {/* Team Members */}
    <div className="bg-white border border-gray-200 p-5 rounded text-sm space-y-8 text-gray-700">
      {/* Mr. Sandeep Kumar */}
      <div className="flex gap-4 items-start">
        <div className="w-[600px] h-[150px]">
          <img
            src={sandeepImg}
            alt="Mr. Sandeep Kumar"
            className="w-full h-full object-cover rounded-md border shadow-sm"
          />
        </div>
        <div>
          <h3 className="text-base font-semibold text-blue-800 mb-1">
            Mr. Sandeep Kumar
          </h3>
          <p className="text-xs leading-relaxed">
            <strong>Director – Operations & Execution:</strong> With over a decade of experience in telecom infrastructure,
            Mr. Sandeep Kumar has been instrumental in UBPL’s rapid growth. He oversees project execution,
            operational monitoring, and skill development initiatives across India. Known for his disciplined
            leadership style, he is a firm taskmaster who leads by example.
          </p>
        </div>
      </div>

      {/* Mrs. Archana Ranjan */}
      <div className="flex gap-4 items-start">
        <div className="w-[650px] h-[160px]">
          <img
            src={archanaImg}
            alt="Mrs. Archana Ranjan"
            className="w-full h-full object-cover rounded-md border shadow-sm"
          />
        </div>
        <div>
          <h3 className="text-base font-semibold text-blue-800 mb-1">
            Mrs. Archana Ranjan
          </h3>
          <p className="text-xs leading-relaxed">
            <strong>Co-founder & Director – Strategy:</strong> An energetic and visionary leader with over 10 years of experience in
            telecom services, Mrs. Archana Ranjan has been the driving force behind UBPL’s strategic direction.
            Her ability to identify and capitalize on business opportunities has earned recognition and awards
            from industry partners for her excellence in project execution and leadership.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Directors;
