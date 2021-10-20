import React from "react";
import Slider from "react-slick";

//Component
import Poster from"../Poster/poster.component";

export const Premier = () => {
    const settings = {
      infinite: true,
      autoplay: false,
      slidesToShow: 5,
      slidesToScroll: 2,
      InitialSlide: 0
    };

const PremierImages = [
  {
    src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NzAlICA3ayB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00122455-jnauuzubwb-portrait.jpg",
    alt: "Conjuring",
    title: "The Conjuring:The Devil",
    subtitle: "Horror/Thriller"
  },
  {
    src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-MTI4ayBsaWtlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00056556-zbbswydmwv-portrait.jpg",
    alt: "F9",
    title: "Fast and Furious 9",
    subtitle: "Action/Adventure/Crime/Thriller"
  },
  {
    src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-NzBrIGxpa2Vz,ots-29,otc-FFFFFF,oy-612,ox-70/et00122566-dhudfznjlv-portrait.jpg",
    alt: "Shang-chi",
    title: "Shang-Chi and The Legend of Ten Rings",
    subtitle: "Action/Adventure/Fantasy"
  },
  {
    src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-NGsgbGlrZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00311839-wjuhagwpdg-portrait.jpg",
    alt: "Dear Megha",
    title: "Dear Megha",
    subtitle: "Drama"
  },
  {
    src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NzklICAyMGsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00117102-gukaentnqs-portrait.jpg",
    alt: "Bell Bottom",
    title: "Bell Bottom",
    subtitle: "Action/Thriller"
  },
  {
    src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NjglICAxMGsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00102880-eudztbwuwx-portrait.jpg",
    alt: "Chehre",
    title: "Chehre",
    subtitle: "MysteryThriller"
  },
  {
    src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-ODYlICAxNWsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00311840-ysqndxzafa-portrait.jpg",
    alt: "raja",
    title: "Raja Raja Chora",
    subtitle: "Comedy/Crime"
  },
  {
    src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NzAlICA3ayB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00122455-jnauuzubwb-portrait.jpg",
    alt: "Conjuring",
    title: "The Conjuring:The Devil",
    subtitle: "Horror/Thriller"
  },
  {
    src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-MTI4ayBsaWtlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00056556-zbbswydmwv-portrait.jpg",
    alt: "F9",
    title: "Fast and Furious 9",
    subtitle: "Action/Adventure/Crime/Thriller"
  },
  {
    src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-NzBrIGxpa2Vz,ots-29,otc-FFFFFF,oy-612,ox-70/et00122566-dhudfznjlv-portrait.jpg",
    alt: "Shang-chi",
    title: "Shang-Chi and The Legend of Ten Rings",
    subtitle: "Action/Adventure/Fantasy"
  },
  {
    src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NzAlICA3ayB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00122455-jnauuzubwb-portrait.jpg",
    alt: "Conjuring",
    title: "The Conjuring:The Devil",
    subtitle: "Horror/Thriller"
  },

]

  return (<>
    <div className="flex flex-col items-start py-4">
    <h3 className="text-white text-xl font-bold">Premiers</h3>
    <p className="text-white text-sm">Brand new release every Friday</p>
    </div>
    <Slider {...settings}>
      {PremierImages.map((image)=>(
        <Poster {...image} isDark />
      ))}
    </Slider>
    </>);
};

export default Premier;
