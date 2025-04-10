import { Button } from "@/components/ui/button";

const TransformationSection = () => {
  // Predefined positions for left-side images (based on the image pattern)
  const leftImages = [
    { top: "5%", left: "5%", size: "w-36 h-36", rotate: "0deg" },
    { top: "1%", left: "70%", size: "w-36 h-36", rotate: "0deg" },
    { top: "16%", left: "40%", size: "w-36 h-36", rotate: "0deg" },
    { top: "30%", left: "13%", size: "w-36 h-36", rotate: "0deg" },
    { top: "35%", left: "60%", size: "w-36 h-36", rotate: "0deg" },
    { top: "56%", left: "5%", size: "w-36 h-36", rotate: "0deg" },
    { top: "58%", left: "35%", size: "w-36 h-36", rotate: "0deg" },
    { top: "68%", left: "55%", size: "w-36 h-36", rotate: "0deg" },
    { top: "79%", left: "25%", size: "w-36 h-36", rotate: "0deg" },
  ];

  // Predefined positions for right-side images (based on the image pattern)
  const rightImages = [
    { top: "5%", right: "5%", size: "w-36 h-36", rotate: "0deg" },
    { top: "1%", right: "50%", size: "w-36 h-36", rotate: "0deg" },
    { top: "16%", right: "70%", size: "w-36 h-36", rotate: "0deg" },
    { top: "16%", right: "40%", size: "w-36 h-36", rotate: "0deg" },
    { top: "30%", right: "13%", size: "w-36 h-36", rotate: "0deg" },
    { top: "35%", right: "60%", size: "w-36 h-36", rotate: "0deg" },
    { top: "56%", right: "5%", size: "w-36 h-36", rotate: "0deg" },
    { top: "58%", right: "35%", size: "w-36 h-36", rotate: "0deg" },
    { top: "68%", right: "55%", size: "w-36 h-36", rotate: "0deg" },
    { top: "79%", right: "25%", size: "w-36 h-36", rotate: "0deg" },
  ];

  return (
    <section className="relative w-full py-24 overflow-hidden bg-white">
      {/* Left side images */}
      <div className="absolute left-0 top-0 w-1/3 h-full pointer-events-none">
        {leftImages.map((img, index) => (
          <div
            key={`left-${index}`}
            className={`absolute ${img.size} rounded-lg overflow-hidden shadow-md`}
            style={{
              top: img.top,
              left: img.left,
              transform: `rotate(${img.rotate})`,
            }}
          >
            <img
              src="/lovable-uploads/4cee20c2-2fe5-4bbb-9e55-6727ed2f2209.png"
              alt={`Gym owner success ${index}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Right side images */}
      <div className="absolute right-0 top-0 w-1/3 h-full pointer-events-none">
        {rightImages.map((img, index) => (
          <div
            key={`right-${index}`}
            className={`absolute ${img.size} rounded-lg overflow-hidden shadow-md`}
            style={{
              top: img.top,
              right: img.right,
              transform: `rotate(${img.rotate})`,
            }}
          >
            <img
              src="/lovable-uploads/4cee20c2-2fe5-4bbb-9e55-6727ed2f2209.png"
              alt={`Gym owner success ${index}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Center content */}
      <div className="max-w-xl mx-auto px-4 relative z-10 text-center bg-white bg-opacity-80 py-8 rounded-lg ">
        <h2 className="text-4xl md:text-5xl font-bold text-black uppercase mb-6">
          REAL RESULTS
          <br />
          FROM REAL
          <br />
          GYM OWNERS
        </h2>

        <p className="text-lg text-gray-700 mb-8">
          Gym Launch has helped 6,000+ Gym Owners build wildly profitable gyms.
          The only question is, will yours be next?
        </p>

        <Button className="bg-amber-600 hover:bg-amber-700 text-white uppercase px-8 py-6 text-lg h-auto font-bold rounded-full">
          LEARN HOW WE DO IT
        </Button>
      </div>
    </section>
  );
};

export default TransformationSection;