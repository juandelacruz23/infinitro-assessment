import { useState } from "react";
import BoxCard from "../common/BoxCard/BoxCard";
import TagButton from "../common/TagButton";
import { allBoxes } from "../data/boxes";
import SearchInput from "../common/SearchInput";

const tags = [
  "all",
  "new",
  "featured",
  "gaming",
  "electronics",
  "jewelry",
  "mix",
  "others",
];

const BoxSearch = () => {
  const [selectedTag, setSelectedTag] = useState("all");
  return (
    <section className="flex flex-col gap-4">
      <h3 className="text-lg font-bold">All boxes</h3>
      <div className="flex gap-1 overflow-auto">
        {tags.map((tag) => (
          <TagButton
            onSelect={setSelectedTag}
            id={tag}
            key={tag}
            selected={tag === selectedTag}
          >
            {tag}
          </TagButton>
        ))}
      </div>
      <SearchInput />
      <div className="flex overflow-auto gap-2.5">
        {allBoxes.map((box, i) => (
          <BoxCard {...box} key={i} />
        ))}
      </div>
    </section>
  );
};

export default BoxSearch;
