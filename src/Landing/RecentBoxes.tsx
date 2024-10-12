import SmallBoxCard from "../common/BoxCard/SmallBoxCard";
import { allBoxes } from "../data/boxes";

const RecentBoxes = () => {
  return (
    <section className="flex flex-col gap-4">
      <h3 className="text-lg font-bold">Recent drops</h3>
      <div className="flex overflow-auto gap-2.5">
        {allBoxes.map((box) => (
          <SmallBoxCard {...box} key={box.name} />
        ))}
      </div>
    </section>
  );
};

export default RecentBoxes;
