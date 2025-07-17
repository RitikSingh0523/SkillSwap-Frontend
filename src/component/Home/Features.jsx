import { features } from "../../utils/features";
import FeatureCard from "./FeatureCard";

const Features = () => {
  return (
    <div className="py-8 flex flex-col justify-center">
      <h1 className="p-4 text-[30px] text-center">
        <strong>How SkillSwap Works</strong>
      </h1>
      <div className="flex w-full gap-5 flex-wrap justify-center">
        {features &&
          features.map((feature, index) => {
            return <FeatureCard key={index} feature={feature} />;
          })}
      </div>
    </div>
  );
};

export default Features;
