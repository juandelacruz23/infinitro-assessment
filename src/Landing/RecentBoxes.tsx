import SmallBoxCard from "../common/BoxCard/SmallBoxCard";
import { allBoxes } from "../data/boxes";

const RecentBoxes = () => {
  return (
    <section>
      <h3>Recent drops</h3>
      <div className="flex overflow-auto gap-2.5">
        {allBoxes.map((box) => (
          <SmallBoxCard {...box} key={box.name} />
        ))}
      </div>
    </section>
  );
};

export default RecentBoxes;
