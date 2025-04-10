const TestimonialSection = () => {
  const videos = ['wv1.mp4', 'wv2.mp4', 'wv3.mp4', 'wv4.mp4'];

  return (
    <section className="w-full py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      {/* Heading and Subtitle */}
      <div className="text-center mb-10">
        <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-yellow-600 uppercase mb-3">
          Trusted by 200+ Women Across the U.S.
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-yellow-600 font-medium">
          From Busy Moms to Professionals – They All Got Results
        </p>
      </div>

      {/* Video Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {videos.map((video, index) => (
          <div
            key={index}
            className="bg-pink-50 rounded-2xl overflow-hidden shadow-lg"
          >
            <div className="relative pb-[56.25%] h-0"> {/* 16:9 Aspect Ratio */}
              <video
                className="absolute top-0 left-0 w-full h-full object-cover rounded"
    
                playsInline
                autoPlay
                muted
                loop
              >
                <source src={`/videos/${video}`} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;
