import React, { useState } from "react";

import GalleryImage1 from "../../assets/gallery1.jpeg";
import GalleryImage2 from "../../assets/gallery2.jpeg";
import GalleryImage3 from "../../assets/gallery3.jpeg";
import GalleryImage4 from "../../assets/gallery4.jpeg";
import GalleryImage5 from "../../assets/gallery5.jpeg";
import GalleryImage6 from "../../assets/gallery6.jpeg";
import GalleryImage7 from "../../assets/gallery7.jpeg";
import GalleryImage8 from "../../assets/gallery8.jpeg";
import GalleryImage9 from "../../assets/gallery9.jpeg";
import GalleryImage10 from "../../assets/gallery10.jpeg";
import GalleryImage11 from "../../assets/gallery11.jpeg";
import GalleryImage12 from "../../assets/gallery12.jpeg";

const WorkoutGallery = () => {
  const [galleryImages, setGalleryImages] = useState([
    GalleryImage1,
    GalleryImage2,
    GalleryImage3,
    GalleryImage4,
    GalleryImage5,
    GalleryImage6,
    GalleryImage7,
    GalleryImage8,
    GalleryImage9,
    GalleryImage10,
    GalleryImage11,
    GalleryImage12,
  ]);

  return (
    <div className="grid xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-6 grid-cols-4 gap-4">
      {galleryImages.map((imageSrc, ind) => {
        return (
          <img
            src={imageSrc}
            key={ind}
            className="cursor-pointer hover:scale-105 transition-all duration-100 hover:overflow-clip"
          />
        );
      })}
    </div>
  );
};

export default WorkoutGallery;
