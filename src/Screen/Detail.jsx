import React from "react";

// import { fill } from "@cloudinary/url-gen/actions/resize";
import { Cloudinary } from "@cloudinary/url-gen";
import { useParams } from "react-router-dom";

// import { thumbnail } from "@cloudinary/url-gen/actions/resize";
// import { byRadius } from "@cloudinary/url-gen/actions/roundCorners";
// import { focusOn } from "@cloudinary/url-gen/qualifiers/gravity";
// import { FocusOn } from "@cloudinary/url-gen/qualifiers/focusOn";

function Detail(props) {
  const routeParams = useParams();

  console.log(routeParams.id);

  const cld = new Cloudinary({
    cloud: {
      cloudName: "dsnvjmelk",
    },
  });

  const myImage = cld.image(`${routeParams.id}`);

  console.log(myImage);

  const myUrl = myImage.toURL();
  console.log({ myUrl });

  return (
    // <div
    //   style={{
    //     display: "flex",
    //     justifyContent: "center",
    //     alignItems: "center",
    //     objectfit: "cover",
    //     overflow: "contain",
    //   }}
    // >
    //   <AdvancedImage cldImg={myImage} />
    // </div>
    <div>
      <img
        src={myUrl}
        alt="new"
        style={{ width: "100%", maxWidth: "100%", height: "auto" }}
      />
    </div>
  );
}

export default Detail;
