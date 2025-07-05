
import Arrow from "../assets/ubpl-arrow.gif";
const ManagmentTeams = () => {
  return (
  <div className="w-full space-y-4">
    {/* Header */}
    <div className="flex items-center gap-2 bg-blue-100 px-3 py-1 border border-blue-200">
      <img src={Arrow} alt="Arrow" className="w-[18px] h-[12px] mt-0.5" />
      <h1 className="text-base font-bold text-blue-800">Management Team</h1>
    </div>

    {/* Team Members */}
    <div className="bg-white border border-gray-200 p-4 rounded text-sm space-y-4 text-gray-700">
      <div>
        <h3 className="font-semibold text-blue-800">Mr. Nitin Sonar – Corporate Rollout Head</h3>
        <p>
          12+ years of experience in Optical Fiber Cable (OFC) projects. Successfully managed key rollouts
          with Tata Projects and Vodafone. Skilled in planning and execution.
        </p>
      </div>

      <div>
        <h3 className="font-semibold text-blue-800">Mr. Sanoj Kumar – Head of Operations</h3>
        <p>
          10+ years of expertise in end-to-end project delivery. Manages UBPL’s regional and inter-state execution teams.
          Known for operational efficiency and cost optimization.
        </p>
      </div>

      <div>
        <h3 className="font-semibold text-blue-800">Support Team</h3>
        <p>
          UBPL is also supported by a strong workforce comprising:
        </p>
        <ul className="list-disc list-inside pl-2">
          <li>10 Project Managers</li>
          <li>15 Area Managers</li>
          <li>20 Supervisors</li>
          <li>8 Site Engineers</li>
        </ul>
      </div>
    </div>
  </div>
  )
}

export default ManagmentTeams
