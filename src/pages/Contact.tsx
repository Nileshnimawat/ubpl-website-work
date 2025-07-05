import Arrow from "../assets/ubpl-arrow.gif";

const Contact = () => {
  return (
    <div className="w-full space-y-4">
      {/* Header with Arrow */}
      <div className="flex items-center gap-2 bg-blue-100 px-3 py-1 border border-blue-200">
        <img src={Arrow} alt="Arrow" className="w-[18px] h-[12px] mt-0.5" />
        <h1 className="text-base font-bold text-blue-800">Contact Us</h1>
      </div>

      {/* Contact Details */}
      <div className="bg-white border border-gray-200 p-4 rounded text-sm space-y-3 text-gray-700">
        <p>
          <strong className="text-blue-800">Company Name:</strong>{" "}
          Utishta Bharata Private Limited
        </p>
        <p>
          <strong className="text-blue-800">Address:</strong> Flat No 521, 1st Floor, A.G, Slice No-3,
          Aaranya Nagar, Scheme No-78, Indore, MP, 452001
        </p>
        <p>
          <strong className="text-blue-800">Phone:</strong> Mr. Alok Ranjan – 7869977333,<br />
          Mr. Sandeep Kumar – 9457635747
        </p>
        <p>
          <strong className="text-blue-800">Email:</strong>{" "}
          <a
            href="mailto:ubpl.business@gmail.com"
            className="text-blue-600 underline"
          >
            ubpl.business@gmail.com
          </a>
        </p>
        <p>
          <strong className="text-blue-800">GST:</strong> 23AACCU1029L1ZI | 22AACCU1029L1ZK | 10AACCU1029L1ZP
        </p>
        <p>
          <strong className="text-blue-800">CIN No:</strong> U52609OR2017PTC027207
        </p>
      </div>
    </div>
  );
};

export default Contact;
