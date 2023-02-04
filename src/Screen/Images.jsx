import React, { useRef } from "react";

import { Cloudinary } from "@cloudinary/url-gen";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

function ViewImage(props) {
  const routeParams = useParams();
  const timeNow = useRef(performance.now())
  console.log({ timeNow })
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
    timeNow.current = performance.now()
    getResumePhoto();
    // capture component unmount
    return () => {
      const timeElapsed = (performance.now() - timeNow.current) / 1000
      if (timeElapsed > 0.5) {
        // @todo - call endTracking API body: {time: timeElapsed}
        console.log(`${timeElapsed} seconds elapsed since you opened the component (:`)
        axios.post(`http://54.167.87.106:8080/api/v1/resume/analytics/track/${routeParams.id}`, {
          time: timeElapsed
        }, {
          headers: {
            'Content-Type': 'application/json',
          }
        })
      }
    }
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
