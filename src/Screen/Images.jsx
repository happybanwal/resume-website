import React from "react";

// import { fill } from "@cloudinary/url-gen/actions/resize";
import { Cloudinary } from "@cloudinary/url-gen";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

// import { thumbnail } from "@cloudinary/url-gen/actions/resize";
// import { byRadius } from "@cloudinary/url-gen/actions/roundCorners";
// import { focusOn } from "@cloudinary/url-gen/qualifiers/gravity";
// import { FocusOn } from "@cloudinary/url-gen/qualifiers/focusOn";

function ViewImage(props) {
  const routeParams = useParams();

  // console.log(routeParams.id);

  const cld = new Cloudinary({
    cloud: {
      cloudName: "dsnvjmelk",
    },
  });

  const myImage = cld.image(`${routeParams.id}`);

  // console.log(myImage)

  const myUrl = myImage.toURL();
  // console.log({ myUrl });

 const getResumePhoto = async () => {
   try {
     const config = {
       headers: {
         Accept: "application/json",
       },
     };
     const res = await axios.get(
       `http://54.167.87.106:8080/api/v1/resume/getResumePhoto/${routeParams.id}`,
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

  return (
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
