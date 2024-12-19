import { ICFacebook } from '@/icon/ICFacebook';
import { ICInstagram } from '@/icon/ICInstagram';
import { ICTiktok } from '@/icon/ICTiktok';
import { ICYoutube } from '@/icon/ICYoutube';

const Footer = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="bg-yellow-400 grid grid-cols-4 justify-between  px-32">
        <div className="py-3 flex flex-col gap-2 items-center border-r border-black">
          <p className="font-bold">Giao hàng siêu tốc</p>
          <p>Thanh toán khi nhận hàng</p>
        </div>
        <div className="py-3 flex flex-col gap-2 items-center border-r border-black">
          <p className="font-bold">MUA HÀNG TÍCH LŨY ĐIỂM</p>
          <p>Giảm giá khi mua hàng</p>
        </div>
        <div className="py-3 flex flex-col gap-2 items-center border-r border-black">
          <p className="font-bold">SẢN PHẨM</p>
          <p>CHÍNH HÃNG</p>
        </div>
        <div className="py-3 flex flex-col gap-2 items-center border-r border-black">
          <p className="font-bold">HỖ TRỢ TRỰC TUYẾN</p>
          <p>090.292.3333</p>
        </div>
      </div>

      <div className="flex px-32 justify-between">
        <div className="flex items-center gap-4 flex-col">
          <p className="font-bold text-base w-44">THEO DÕI HEROGAME</p>
          <div className="flex gap-5 flex-col w-20">
            <div className="flex gap-5">
              <ICFacebook fill="#1178f2" width={40} height={40} />
              <ICYoutube fill="#cc191e" width={40} height={40} />
            </div>
            <div className="flex gap-5">
              <ICTiktok width={35} height={35} />
              <ICInstagram width={35} height={35} />
            </div>
          </div>
        </div>
        <div className="text-[13px]">
          <p className=" font-bold text-base">LIÊN HỆ</p>
          <p>Giới thiệu game</p>
          <div className="flex w-52">
            <p className="font-bold mr-2">Hero HCM:</p>
            <p>200 Nguyễn Trọng Tuyến, P.13, Q.Bình Thạnh, TP.HCM</p>
          </div>
          <div className="flex">
            <p className="font-bold mr-2">Hero HN:</p>
            <p>20 Ngọc Khánh, Q Ba Đình</p>
          </div>
          <div className="flex">
            <p className="font-bold mr-2">Hero HN:</p>
            <p>shop.herogame@gmail.com</p>
          </div>
          <div className="">
            <p className="font-bold mr-2">Khiếu nại & Hỗ trợ :</p>
            <p>hotro.herogame@gmail.com</p>
          </div>
        </div>
        <div className="flex flex-col gap-2 ">
          <p className="font-bold text-base">HOTLINE</p>
          <div className="flex">
            <p>Mở cửa :</p>
            <p>9:00 - 20:00</p>
          </div>
          <div>
            <p className="font-bold text-red-50">TP. HỒ CHÍ MINH</p>
            <p>090.292.3986</p>
          </div>
          <div>
            <p className="font-bold text-red-50">HÀ NỘI</p>
            <p>090.292.3986</p>
          </div>
        </div>
        <div className="text-sm">
          <p className="font-bold text-base">Hỗ trợ khách hàng</p>
          <p>Điều khoản dịch vụ</p>
          <p>Chính sách bảo mật thông tin</p>
          <p>Phương thức giao hàng</p>
          <p>Chính sách đổi trả</p>
          <p>Chính sách bảo hành</p>
          <p>Phương thức thanh toán</p>
          <p>Phương thức trả góp</p>
        </div>
        <div className="text-[13px]">
          <p className="font-bold text-base">VỀ HERO GAME</p>
          <p>Liên hệ</p>
          <p>Giới thiệu Herogame</p>
          <p className="w-52">
            MST: 0313404917, GCNDK hộ kinh doanh số 41P8016680, cấp ngày
            17/08/2015, cấp bởi Ủy Ban Nhân Dân Quận Phú Nhuận.Về Hero game
          </p>
          <p className="w-52">
            Cửa hàng kinh doanh các sản phẩm máy chơi game Chính Hãng Nintendo ,
            Playstation, Bandai ,... ra mắt 2015
          </p>
        </div>
      </div>
      <div className="w-full border-t-2 border-dashed border-gray-500 my-4 flex justify-center">
        <p className="mt-3">Copyright © 2024 Herogame powered by Herogame</p>
      </div>
    </div>
  );
};

export default Footer;
