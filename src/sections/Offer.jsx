import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import { useWindowWidth } from "@react-hook/window-size";

function Offer() {
  const onlyWidth = useWindowWidth();

  return (
    <div className="Offer">
      <div>
        <div >Qiymət təklifi al</div>
        {onlyWidth > 1250 ? (
          <div>
            Xidmətlər haqqında qiymət təklifi almaq üçün indi müraciət edin:
          </div>
        ) : null}
        <div>
          <a href="tel:0603312804">
            ZƏNG ET
            <FiPhoneCall></FiPhoneCall>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Offer;
