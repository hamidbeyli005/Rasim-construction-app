import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { useWindowWidth } from "@react-hook/window-size";

function Projects() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 3000,
    arrows: false,
    className: "center",
    centerMode: true,
    responsive: [
      {
        breakpoint: 1270,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const onlyWidth = useWindowWidth();
  

  return (
    <div className="Projects">
      <h2>Layihələr</h2>
      <Slider {...settings}>
        <div>
          <div className="project">
            <img
              src="data:image/png;base64,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"
              alt=""
            />
            {onlyWidth > 550 ? (
              <p>
                <span>
                  BAŞ MEMAR SENİOR ARCHİTEC <br /> VİMS GROUP{" "}
                </span>
                Konsept layihələrin hazırlanması Eskiz və işçi layihələrin
                hazırlanmasında birbaşa iştirak etmək.
                {onlyWidth > 726 ? (
                  <>
                    Vizual görünüşlərin hazırlanması həmçini texniki məsələlərin
                    öncədən həlli.As-builtlərin hazırlanması (mövcud cizgilər)
                  </>
                ) : null}
              </p>
            ) : null}
          </div>
        </div>
        <div>
          <div className="project">
            <img
              src="data:image/png;base64,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"
              alt=""
            />
            {onlyWidth > 550 ? (
              <p>
                {" "}
                <span>SAHƏ MEMARI - Basqal Otel Kontinent construction</span>
                Layihəçilər tərəfindən hazırlanmış cizgilərin yoxlanılması,icra
                zamanı prosedura uyğun aparılması.
                {onlyWidth > 726 ? (
                  <>
                    {" "}
                    Fasad cizgilərinin hazırlanması və quraşdırılmasına
                    nəzarət.Ümumi həcimlərin hazırlanması (F-N2).
                    Fit-outcizgilərinin hazırlanması.
                  </>
                ) : null}
              </p>
            ) : null}
          </div>
        </div>
        <div>
          <div className="project">
            <img
              src="data:image/jpeg;base64,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"
              alt=""
            />
            {onlyWidth > 550 ? (
              <p>
                {" "}
                <span> MEMAR -Bakı Mərkəzi Park İLKconstructio</span>
                Memarlıq layihələrinin hazırlanması. İcra olunan işlərə nəzarət.
                {onlyWidth > 726 ? (
                  <>
                    {" "}
                    Layihə üzr əmaterialların rənglərin lanşaft detallarının
                    seçilməsində iştirak etmək. Materialların seçimi və
                    sifarişçi ilə razılaşdırılması.
                  </>
                ) : null}
              </p>
            ) : null}
          </div>
        </div>
        <div>
          <div className="project">
            <img
              src="data:image/png;base64,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"
              alt=""
            />
            {onlyWidth > 550 ? (
              <p>
                {" "}
                <span> MEMAR ARCHİTECT Şəmkir şprist zavodu</span>
                Şəmkir Aqropark-sahədə layihəyə nəzarət Şəmkir OXFORT school-un
                yaxaqxanası-eskiz
                {onlyWidth > 726 ? (
                  <>
                    {" "}
                    Gəncə,H.Əliyevpr-də çoxmərtəbəli yaşayış kompleks Qala altı
                    SPA korpusu-layihəyə nəzarət Şüvalan villa layihəsi
                  </>
                ) : null}
              </p>
            ) : null}
          </div>
        </div>
        <div>
          <div className="project">
            <img
              src="data:image/png;base64,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"
              alt=""
            />
            {onlyWidth > 550 ? (
              <p>
                {" "}
                <span> RƏSSAM - DİZAYNER ARTİST ÇAŞIOĞLU</span>
                Uşaqlar üçün yazılmış kitab və jurnallara mövzuya aid rəsmlərin
                çəkilməsi
                {onlyWidth > 726 ? (
                  <> həmçinin kitablara dizayn işlərinin görülməsi</>
                ) : null}
              </p>
            ) : null}
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default Projects;
