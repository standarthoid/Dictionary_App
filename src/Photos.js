import React from "react";
import "./Photos.css";
export default function Photos(props) {
  console.log(props.photos);
  if (props.photos) {
    return (
      <section className="Photos">
        <div className="row row-style">
          {props.photos.map(function(photo, index) {
            return (
              <div className="col-3 column-style">
                <a href={photo.src.original} target="_blank" rel="noreferrer">
                  <img
                    src={photo.src.landscape}
                    rel="norefferer"
                    key={index}
                    className="photo"
                  />
                </a>
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
