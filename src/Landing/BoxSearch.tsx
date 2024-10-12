import BoxCard from "../common/BoxCard/BoxCard";

const BoxSearch = () => {
  return (
    <section>
      <h3>All boxes</h3>
      <BoxCard
        name="Enigma chest"
        description="Mystery Marvels"
        state="new"
        price={59.99}
        creator="@kevin_gather8391"
      />
    </section>
  );
};

export default BoxSearch;
