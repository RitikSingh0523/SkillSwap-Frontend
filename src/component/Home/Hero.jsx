import heroImg from "../../assets/image/hero.png";

const Hero = () => {
  return (
    <div
      className="w-full h-[calc(100vh-65px)] bg-cover bg-center "
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className="w-full h-full flex flex-col justify-center items-center bg-[#ffffffb3] gap-4">
        <p className="text-[55px] w-[80vw] text-center text-[#000000b3]">
          <strong>Swap Skills, Learn Together, Grow Your Community</strong>
        </p>
        <p className="w-[60vw] text-[24px] text-center text-[#00000080]">
          Unlock your potential by exchanging knowledge and expertise with ate
          individuals around the globe. SkillSwap makes learning accessible and
          collaborative
        </p>
        <button className="p-3 px-5 text-white cursor-pointer bg-[#636ae8] rounded-[25px]">
          Start Learning Today
        </button>
      </div>
    </div>
  );
};

export default Hero;
