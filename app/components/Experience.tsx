import { praiseData } from "../utils";
const Experience = () => {
  return (
    <div className="flex gap-2 flex-wrap w-[100%]">
      {praiseData.map((item) => (
        <div className="border border-slate-200 rounded-lg bg-slate-200m text-[0.9rem] px-[6px] py-[4px] cursor-pointer">
          {item}
        </div>
      ))}
    </div>
  );
};

export default Experience;
