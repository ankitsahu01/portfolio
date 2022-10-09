import TalkgramPrg from "./TalkgramPrg";
import DowntapePrg from "./DowntapePrg";
import ShoppingPrg from "./ShoppingPrg";
import StudyMaterialPrg from "./StudyMaterialPrg";

const Project = () => {
  return (
    <div className="min-h-screen pt-20 p-2">
      <div className="text-lg my-6 grid grid-cols-1 md:grid-cols-3 justify-items-center items-center gap-y-0 md:gap-y-20">
        <TalkgramPrg />
        <DowntapePrg />
        <ShoppingPrg />
        <StudyMaterialPrg />
      </div>
    </div>
  );
};

export default Project;
