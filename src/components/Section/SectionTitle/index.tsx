import RedVector from '@/../public/icons/RedVector.svg';

interface SectionTitleProps {
  text: string;
  reverse: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = (props) => {
  const { reverse = false } = props;
  return (
    <div
      className={`flex ${reverse ? 'justify-end' : 'justify-start'} items-center gap-2 text-primary`}
    >
      <RedVector width={66} height={69} />
      <h2 className="text-h3 font-bold">{props.text}</h2>
    </div>
  );
};

export default SectionTitle;
