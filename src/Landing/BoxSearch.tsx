import BoxCard from "../common/BoxCard/BoxCard";
import { allBoxes } from "../data/boxes";

const BoxSearch = () => {
  return (
    <section>
      <h3>All boxes</h3>
      <div className="flex overflow-auto gap-2.5">
        {allBoxes.map((box, i) => (
          <BoxCard {...box} key={i} />
        ))}
      </div>
    </section>
  );
};

export default BoxSearch;
