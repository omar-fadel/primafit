import Banner from '@/components/Banner/Banner';
import Header from '@/components/Header';
import Section from '@/components/Section';

export default function Home() {
  return (
    <main className="">
      <Header />
      <Banner />
      <Section
        body="Enjoyable fitness solutions for a stronger, better-looking, and healthier you."
        header="Vision"
      />
      <Section
        body="To provide equipment that will inspire you to do more, push you further, and build healthy habits."
        header="Mission"
        reverse
      />
      <p className="text-center text-h1 font-bold">Why Us ?</p>
      <p className="text-center text-h4 font-bold">
        Because we are with you every step of the way.
      </p>
    </main>
  );
}
