import Arrow from "../assets/ubpl-arrow.gif";

const Profile = () => (
  <div className="w-full space-y-4">
    <div className="flex items-center gap-2 bg-blue-100 px-3 py-1 border border-blue-200">
      <img src={Arrow} alt="Arrow" className="w-[18px] h-[12px] mt-0.5" />
      <h1 className="text-base font-bold text-blue-800">Company Profile</h1>
    </div>
    <div className="bg-white border border-gray-200 p-4 rounded text-sm space-y-2 text-gray-700">
      <p><strong>Name:</strong> Utishta Bharata Private Limited</p>
      <p><strong>Entity:</strong> Pvt. Ltd. Company</p>
      <p><strong>Address:</strong> Slice-3, Flat No 521/A/G, Scheme-78, Aaranya Nagar, Indore, MP-452001</p>
      <p><strong>Contacts:</strong> Mr. Alok Ranjan – 7869977333, Mr. Sandeep Kumar – 9457635747</p>
      <p><strong>Email:</strong> ubpl.business@gmail.com</p>
      <p><strong>CIN No:</strong> U52609OR2017PTC027207</p>
      <p><strong>PAN No:</strong> AACCU1029L</p>
      <p><strong>GST No:</strong> 23AACCU1029L1ZI, 22AACCU1029L1ZK, 10AACCU1029L1ZP</p>
      <p><strong>PF No:</strong> MPIND2455881000</p>
      <p><strong>ESI No:</strong> 18000389600001304</p>
      <p><strong>MSME No:</strong> UDYAM-BR-26-0009181</p>
    </div>
  </div>
);

export default Profile;