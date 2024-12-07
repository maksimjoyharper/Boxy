import { useEffect, useState } from "react";

const useImgUnit = (
  imagesObj: Record<string, string>
): Record<string, HTMLImageElement | null> => {
  const [images, setImages] = useState<Record<string, HTMLImageElement | null>>(
    {}
  );

  useEffect(() => {
    const loadImage = (id: string, src: string) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        setImages((prevImages) => ({ ...prevImages, [id]: img }));
      };
    };

    Object.entries(imagesObj).forEach(([id, src]) => {
      loadImage(id, src);
    });
  }, [imagesObj]);

  return images;
};

export default useImgUnit;
