import Slider from "react-slick";


const clientLogos = [
  "/assets/client-1.jpg",
  "/assets/client-1.jpg",
  "/assets/client-1.jpg",
  "/assets/client-1.jpg",
  // "/assets/client-5.jpg",
  // "/assets/client-6.jpg",
  // "/assets/client-7.jpg",
  // "/assets/client-8.jpg",
] as const;

export default function Rightbar() {
  const sliderSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <aside className="w-full lg:w-1/6 bg-white border-l px-2 text-center space-y-4">
      {/* Our Clients Slideshow */}
       <div className="my-2 ">
          <Slider {...sliderSettings}>
            {clientLogos.map((logo, idx) => (
              <div key={idx} className="h-[140px] border-1 border-black">
                <img
                  src={logo}
                  alt={`Client ${idx + 1}`}
                  className="w-full h-auto object-cover"
                />
              </div>
            ))}
          </Slider>
        </div>
      <div>
        <h3 className="text-xs font-bold bg-blue-100 text-blue-800 py-0.5 border-y border-blue-200">
          Our Clients
        </h3>
        <div className="my-2 ">
          <Slider {...sliderSettings}>
            {clientLogos.map((logo, idx) => (
              <div key={idx} className="h-[100px] p-5 border-1 border-black">
                <img
                  src={logo}
                  alt={`Client ${idx + 1}`}
                  className="w-full h-[60px] object-cover"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* UBPL Branding */}
      <div>
        <h3 className="text-xs font-bold bg-blue-100 text-blue-800 py-0.5 border-y border-blue-200">
          UBPL Projects
        </h3>
        <img
          src="/assets/ubpl-logo.jpg"
          alt="UBPL Logo"
          className="w-full h-[80px] object-contain border my-2"
        />
        <p className="text-xs text-orange-600 font-semibold">
          www.ubplprojects.com
        </p>
      </div>
    </aside>
  );
}
