import React, { useEffect } from "react";
import { AdvancedImage } from "@cloudinary/react";
// import { fill } from "@cloudinary/url-gen/actions/resize";
import { Cloudinary } from "@cloudinary/url-gen";
import { useParams } from "react-router-dom";
import axios from "axios";
// import { thumbnail } from "@cloudinary/url-gen/actions/resize";
// import { byRadius } from "@cloudinary/url-gen/actions/roundCorners";
// import { focusOn } from "@cloudinary/url-gen/qualifiers/gravity";
// import { FocusOn } from "@cloudinary/url-gen/qualifiers/focusOn";

function ViewImage(props) {
  const routeParams = useParams();

  console.log(routeParams.id);

  const cld = new Cloudinary({
    cloud: {
      cloudName: "dsnvjmelk",
    },
  });

  const myImage = cld.image(`${routeParams.id}`);

  // Resize to 250 x 250 pixels using the 'fill' crop mode.
  // myImage.resize(
  //   thumbnail().width(600).height(1000).gravity(focusOn(FocusOn.face()))
  // );

  const getResumePhoto = async () => {
    try {
      const config = {
        headers: {
          Accept: "application/json",
        },
      };
      const res = await axios.get(
        "https://resume-builder-ar9x.onrender.com/api/v1/resume/getResumePhoto/axa1rnie1vyrrcnf8fvb",
        config
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getResumePhoto();
  }, []);

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

export default ViewImage;
