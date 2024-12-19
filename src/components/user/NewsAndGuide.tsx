import { dataNewsAndGuide } from '@/mockData/dataNewsAndGuide';
import Image from 'next/image';

const NewAndGuide = () => {
  return (
    <div className="mt-3 flex flex-col gap-3 ">
      {dataNewsAndGuide.map(item => (
        <Image
          key={item.id}
          src={item.image}
          alt="item"
          width={210}
          height={300}
          className="rounded-xl"
        />
      ))}
    </div>
  );
};
export default NewAndGuide;
