import Arrow from "../assets/ubpl-arrow.gif";

const Clients = () => {
  const clients = [
    "Tata Project Limited",
    "Vodafone Idea Telecom Infrastructure Ltd",
    "Sterlite Technologies Ltd",
    "Apco Infratech Pvt Ltd",
    "Larsen & Toubro Ltd (L&T)",
    "PNC Infratech Limited",
    "Rudra Gas Enterprise Limited",
  ];

  return (
    <div className="w-full space-y-4">
      {/* Header */}
      <div className="flex items-center gap-2 bg-blue-100 px-3 py-1 border border-blue-200">
        <img src={Arrow} alt="Arrow" className="w-[18px] h-[12px] mt-0.5" />
        <h1 className="text-base font-bold text-blue-800">Our Clients</h1>
      </div>

      {/* Client List */}
      <div className="bg-white border border-gray-200 p-4 rounded text-sm">
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          {clients.map((client, i) => (
            <li key={i}>{client}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Clients;
