import Image from "next/image";


const Home = () => {
  return (
    <div className="">
      <div className="">
        <h1 className="">Creative Thoughts Agency.</h1>
        <p className="">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
          blanditiis adipisci minima reiciendis a autem assumenda dolore.
        </p>
        <div className="">
          <button className="">Learn More</button>
          <button className="">Contact</button>
        </div>
        <div className="">
          {/* <Image src="/brands.png" className="w-10"/> */}
        </div>
      </div>
      <div className="w-10">
        {/* <Image src="/hero.gif" alt=""/> */}
      </div>
    </div>
  );
};

export default Home;
