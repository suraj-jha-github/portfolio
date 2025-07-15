import TestimonialAvatar from "./TestimonialAvatar";

const TestimonialCard = ({ testimonial, index }) => {
  // Different positions and rotations for each avatar to make them unique
  const avatarConfigs = [
    { position: [0, 0, 0], rotation: [0, 0, 0] },
    { position: [0.5, 0, 0], rotation: [0, 0.3, 0] },
    { position: [-0.5, 0, 0], rotation: [0, -0.3, 0] },
    { position: [0, 0.3, 0], rotation: [0.1, 0, 0] },
  ];

  const config = avatarConfigs[index % avatarConfigs.length];

  return (
    <div className="col-span-1 p-10 bg-black-300 rounded-xl testimonial-card">
      <div className="flex items-center justify-between">
        <div className="md:w-36 md:h-36 w-24 h-24 rounded-full overflow-hidden bg-gradient-to-br from-pink-100 to-blue-50">
          <TestimonialAvatar 
            position={config.position} 
            rotation={config.rotation} 
          />
        </div>
        <img
          src="/images/quote.png"
          alt="cover-img"
          className="md:w-28 md:h-28 w-14 h-14"
        />
      </div>
      <div className="mt-10">
        <p className="md:text-2xl font-light">{testimonial.review}</p>
      </div>
      <div className="flex md:flex-row flex-col md:items-center justify-between md:mt-20 mt-10">
        <div>
          <h1 className="text-blue-50 md:text-3xl text-lg font-medium mb-1">
            {testimonial.name}
          </h1>
          <p className="md:text-xl text-sm opacity-70 font-light">
            {testimonial.pos}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
