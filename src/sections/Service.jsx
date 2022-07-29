import React from "react";


const images = [
  {
    link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD8-X52NrbbjB0rxPO_NiLEE5crYo0RNnPFc0tryWSG0fZoPqyXqsC9iAxivgJeC0v4qg&usqp=CAU",
    title: "DİZAYN VƏ MEMARLIQ",
  },
  {
    link: "https://dekoriko.ru/images/article/cropped/337-253/2018/01/landshaftnyj-dizajn-originalnye-idei-oformleniya-uchastka-3.jpg",

    title: "LANDŞAFT İŞLƏRİ",
  },
  {
    link: "https://xidmetler.az/uploads/news/b1ff8945f6d0807eb6d707544f1271c2.jpg",

    title: "HOVUZ PLANLARI",
  },
  {
    link: "https://i2.wp.com/fb.ru/misc/i/gallery/33135/1641439.jpg",

    title: "GEODEZİYA XİDMƏTİ",
  },
];

function Service() {
  return (
    <div className="Service">
      <h2>Xidmətlər</h2>
      <div className="container">
        {images.map((image, index) => (
          
            <div className="card" key={index}>
              <div className="shadow"></div>
              <img src={image.link} alt="" />
              <div className="title">
                <h3>{image.title} </h3>
              </div>
            </div>
          
        ))}
      </div>
    </div>
  );
}

export default Service;
