import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const PreviewImage = ({ images }: { images: string[] }) => {
  // Chuyển đổi danh sách ảnh thành định dạng phù hợp với react-image-gallery
  const galleryItems = images.map(image => ({
    original: image,
    thumbnail: image,
  }));

  return (
    <div className="">
      <ImageGallery
        items={galleryItems}
        showThumbnails={true} // Hiển thị ảnh thu nhỏ
        showPlayButton={true} // Hiển thị nút phát slideshow
        autoPlay={true} // Tự động phát
        slideInterval={3000} // Thời gian giữa các slide
        showNav={true} // Hiển thị nút điều hướng
        infinite={true} // Lặp lại vô hạn
      />
    </div>
  );
};

export default PreviewImage;
