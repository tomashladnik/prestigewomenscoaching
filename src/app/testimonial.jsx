const TestimonialSection = () => {
    const videos = ['wv1.mp4', 'wv2.mp4', 'wv3.mp4', 'wv4.mp4'];
    
    return (
      <section className="w-full py-16 bg-gray-50">
        {/* Heading and Subtitle */}
        <div className="text-center mb-12">
          <h2 className="text-xl md:text-5xl font-bold text-yellow-600 uppercase mb-4">
            Trusted by 200+ Women Across the U.S.
          </h2>
          <p className="text-lg md:text-xl text-yellow-600 font-semibold">
            From Busy Moms to Professionals – They All Got Results
          </p>
        </div>
  
        {/* Video Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
          {videos.map((video, index) => (
            <div
              key={index}
              className="bg-pink-50 rounded-2xl p-2 shadow-md flex items-center justify-center h-96 overflow-hidden"
            >
              <video 
                className="w-full h-full object-cover rounded"
                
                playsInline
                autoPlay
                muted
                loop
              >
                <source src={`/videos/${video}`} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default TestimonialSection;