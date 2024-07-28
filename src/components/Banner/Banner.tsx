import Image from 'next/image';

const Banner: React.FC = () => {
  return (
    <section className="bg-background-1 bg-red flex h-[1080px] w-full items-center justify-center bg-cover bg-center">
      <div className="container font-bold">
        <Image
          src={'/icons/Vector.svg'}
          width={105}
          height={113}
          alt="vector"
        />
        <h1 className="text-h2 text-white">PRIMAFIT</h1>
        <h1 className="w-2/5 text-h3 text-white">
          Started in 1988 with an Idea and a Vision
        </h1>
      </div>
    </section>
  );
};

export default Banner;
