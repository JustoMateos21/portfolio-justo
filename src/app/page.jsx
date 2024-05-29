import Image from "next/image";

const Homepage = () => {
  return (
    <div className="h-full flex flex-col">
      {/*IMAGE CONTAINER*/}
      <div className="h-1/2 relative ">
        <Image src="/hero.png" alt="" fill />
      </div>
      {/*TEXT CONTAINER*/}
      <div className=""></div>
    </div>
  );
};

export default Homepage;
