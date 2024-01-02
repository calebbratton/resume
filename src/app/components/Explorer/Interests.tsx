const Interests = () => {
  return (
    <div className="mt-4 border-2 border-bannerBlue">
      <div className="text-white font-bold px-4 bg-bannerBlue">
        Caleb's Interests
      </div>
      <div className="grid grid-cols-4 pt-0.5 gap-0.5 grid-flow-row text-sm">
        <div className="bg-detailTitleBg px-2 font-bold text-detailTitle">
          General
        </div>
        <div className="bg-detailInfoBg px-2 col-span-3">
          I love coding, climbing, snowboarding, fall weather, music, and my
          wife (hey babe).
        </div>
        <div className="bg-detailTitleBg px-2 font-bold text-detailTitle">
          Work History
        </div>
        <div className="bg-detailInfoBg px-2 col-span-3">
          My current role has provided me with many opportunities. I have worked
          on well-established backend microservices, as well as full stack green
          field projects, taking an idea from zero to one.
        </div>
        <div className="bg-detailTitleBg px-2 font-bold text-detailTitle">
          Music
        </div>
        <div className="bg-detailInfoBg px-2 col-span-3">
          I love everything; from hardcore, punk, and indie rock to country,
          folk, and R&B. I find almost all music enjoyable. I am currently
          listening to a lot of indie rock. Alex G and Men I Trust have
          frequently been on my playlist.
        </div>
      </div>
    </div>
  );
};

export default Interests;
