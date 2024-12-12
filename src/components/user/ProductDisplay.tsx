import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

// Định nghĩa kiểu cho props
interface IProp {
  title: string;
  children?: React.ReactNode;
}

const ProductDisplay: React.FC<IProp> = props => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex">
        <p
          className={`bg-[#aa052d] whitespace-nowrap text-white font-bold p-3 text-base rounded-tl-2xl`}
        >
          {props.title}
        </p>
        <p className={`bg-[#ff0000] w-full rounded-tr-2xl`}></p>
      </div>
      {props.children}
    </div>
  );
};

export default ProductDisplay;
