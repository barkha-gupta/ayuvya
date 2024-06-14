import { praiseData } from "../utils";

interface PraiseProps {
  onClick: (praise: string) => void;
  praise: any;
}

const formatPraise = (item: string) => {
  return item.toLowerCase().replace(/\s+/g, "_");
};

const PraiseComp: React.FC<PraiseProps> = ({ onClick, praise }) => {
  return (
    <div className="flex gap-3 flex-wrap">
      {praiseData.map((item) => {
        const formattedItem = formatPraise(item);
        const isSelected = praise[formattedItem];
        return (
          <div
            key={item}
            className={`border border-slate-200 rounded-xl text-[0.9rem] px-[10px] py-[5px] cursor-pointer  ${
              isSelected ? "bg-[#9eaefc]  font-[500] " : "bg-gray-200"
            }`}
            onClick={() => onClick(formattedItem)}
          >
            {item}
          </div>
        );
      })}
    </div>
  );
};

export default PraiseComp;
