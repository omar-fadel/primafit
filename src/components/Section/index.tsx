import Image from 'next/image';
import SectionTitle from './SectionTitle';

interface SectionProps {
  header: string;
  body: string;
  reverse?: boolean;
}
const Section: React.FC<SectionProps> = (props) => {
  const { reverse = false } = props;
  return (
    <section className="flex justify-center">
      <div
        className={`container flex min-h-[745px] justify-between p-12 ${reverse ? 'flex-row-reverse' : 'flex-row'}`}
      >
        <div
          className={` ${reverse ? 'text-end' : 'text-start'} flex h-full w-1/2 flex-col justify-center px-8`}
        >
          <SectionTitle text={props.header} reverse={reverse} />
          <p className="text-body text-secondary">
            Enjoyable fitness solutions for a stronger, better-looking, and
            healthier you.
          </p>
        </div>
        <Image
          src={'/backgrounds/bg-1.png'}
          width={498}
          height={745}
          alt="picture"
        />
      </div>
    </section>
  );
};

export default Section;
