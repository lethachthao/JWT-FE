// import { DataProduct } from '@/app/mockData/dataProduct';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, Autoplay } from 'swiper/modules'; // Import đúng cách
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/autoplay';
// import Image from 'next/image';

// // Định nghĩa kiểu cho props
// interface IProp {
//   title: string;
//   children?: React.ReactNode;
// }

// const ProductDisplayNew: React.FC<IProp> = props => {
//   return (
//     <div className="flex flex-col gap-3">
//       {DataProduct.map((item, idx) => (
//         <div className="flex" key={idx}>
//           <p
//             className={`bg-[#aa052d] whitespace-nowrap text-white font-bold p-3 text-base rounded-tl-2xl`}
//           >
//             {props.title}
//           </p>
//           <p className={`bg-[#ff0000] w-full rounded-tr-2xl`}></p>
//         </div>
//       ))}
//       <div className="">
//         <Swiper
//           modules={[Navigation, Pagination, Autoplay]}
//           spaceBetween={50}
//           slidesPerView={4}
//           navigation
//           pagination={{ clickable: true }}
//           autoplay={{ delay: 3000 }}
//           className=""
//         >
//           {DataProduct.map(item =>
//             item.products.map((product, index) => (
//               <SwiperSlide key={`${item.brand} - ${index}`}>
//                 <div className="w-fit transform transition-transform duration-300 hover:translate-y-[-15px] hover:shadow-lg hover:z-10">
//                   <Image
//                     src={product.image}
//                     alt={product.name}
//                     width={299}
//                     height={299}
//                     className="rounded-t-lg border"
//                   />
//                   <p className="text-center border h-16 text-sm px-3 w-full font-bold overflow-hidden text-ellipsis flex justify-center items-center">
//                     {product.name}
//                   </p>
//                   <p className="text-red-600 font-bold text-center border py-1 w-full">
//                     {product.price}đ
//                   </p>
//                 </div>
//               </SwiperSlide>
//             ))
//           )}
//         </Swiper>
//       </div>
//       <Image src={item.ba} alt="example" width={100} height={100} />
//     </div>
//   );
// };

// export default ProductDisplayNew;
