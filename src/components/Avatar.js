import React from "react";
function Avatar({ avatar, randomAvatar, printEvent }) {
  return (
    <div
      className="wrap-avatar"
      style={{ display: "flex", position: "relative" }}
    >
      <div className="avatar" style={{ position: "fixed" }}>
        <img src={avatar.body} zIndex={0} alt="body" />
        <img
          src={avatar.eye}
          alt="eye"
          style={{ zIndex: 1, position: "absolute", left: 0 }}
        />
        <img
          src={avatar.hat}
          alt="accessories/hats"
          style={{ zIndex: 2, position: "absolute", left: 0 }}
        />
        <img
          src={avatar.glasses}
          alt={"accessories/glasses"}
          style={{ zIndex: 2, position: "absolute", left: 0 }}
        />
        <img
          src={avatar.clothing1}
          alt={"clothes/clothing1"}
          style={{ zIndex: 2, position: "absolute", left: 0 }}
        />
        <img
          src={avatar.clothing2}
          alt="clothes/clothing2"
          style={{ zIndex: 3, position: "absolute", left: 0 }}
        />
        <img
          src={avatar.clothing3}
          alt="clothes/clothing3"
          style={{ zIndex: 4, position: "absolute", left: 0 }}
        />
        <img
          src={avatar.hair}
          alt="hair"
          style={{ zIndex: 1, position: "absolute", left: 0 }}
        />
        <img
          src={avatar.mouth}
          alt="mouths"
          style={{ zIndex: 1, position: "absolute", left: 0 }}
        />
        <img
          src={avatar.earrings}
          alt="earrings"
          style={{ zIndex: 1, position: "absolute", left: 0 }}
        />
        <img
          src={avatar.eyebrows}
          alt="eyebrows"
          style={{ zIndex: 1, position: "absolute", left: 0 }}
        />
        <img
          src={avatar.facialhair}
          alt="facial_hair"
          style={{ zIndex: 1, position: "absolute", left: 0 }}
        />
        <img
          src={avatar.nose}
          pathUrl={"nose"}
          style={{ zIndex: 1, position: "absolute", left: 0 }}
        />
      </div>

      <button className="button-random" onClick={() => randomAvatar()}>
        RANDOMIZE
      </button>
    </div>
  );
}

export default Avatar;
