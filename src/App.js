import React, { useState, useCallback, useEffect } from "react";
import "./App.css";
import Avatar from "./components/Avatar";
import PartList from "./components/PartList";
const total = {
  accessories: {
    hats: 28,
    glasses: 17,
    earrings: 32,
    neckwear: 18,
  },
  clothes: {
    clothing1: 5,
    clothing2: 5,
    clothing3: 9,
  },
  body: 17,
  eyes: 17,
  hair: 73,
  mouths: 24,
  eyebrows: 15,
  facial_hair: 17,
  nose: 1,
};

function getRandomNumber(num) {
  return Math.floor(Math.random() * (num - 1) + 1);
}
function App() {
  // const [body, setBody] = useState();
  // const [eye, setEye] = useState();
  // const [hair, setHair] = useState();
  // const [mouth, setMouth] = useState();
  // const [nose, setNose] = useState();
  // const [facialhair, setFacialhair] = useState();
  // const [eyebrows, setEyebrows] = useState();
  // const [glasses, setGlasses] = useState();
  // const [earrings, setEarrings] = useState();
  // const [hat, setHat] = useState();
  // const [neckwear, setNeckwear] = useState();
  // const [clothing1, setClothing1] = useState();
  // const [clothing2, setClothing2] = useState();
  // const [clothing3, setClothing3] = useState();

  const [avatar, setAvatar] = useState({});

  const generateRandomAvatar = useCallback(
    () => ({
      body: `images/body/${getRandomNumber(total.body)}.png`,
      eye: `images/eyes/${getRandomNumber(total.eyes)}.png`,
      hair: `images/hair/${getRandomNumber(total.hair)}.png`,
      mouth: `images/mouths/${getRandomNumber(total.mouths)}.png`,
      facialhair: `images/facial_hair/${getRandomNumber(
        total.facial_hair
      )}.png`,
      eyebrows: `images/eyebrows/${getRandomNumber(total.eyebrows)}.png`,
      glasses: `images/accessories/glasses/${getRandomNumber(
        total.accessories.glasses
      )}.png`,
      earrings: `images/accessories/earrings/${getRandomNumber(
        total.accessories.glasses
      )}.png`,
      hat: `images/accessories/hats/${getRandomNumber(
        total.accessories.hats
      )}.png`,
      neckwear: `images/accessories/neckwear/${getRandomNumber(
        total.accessories.neckwear
      )}.png`,
      clothing1: `images/clothes/clothing1/${getRandomNumber(
        total.clothes.clothing1
      )}.png`,
      clothing2: `images/clothes/clothing2/${getRandomNumber(
        total.clothes.clothing2
      )}.png`,
      clothing3: `images/clothes/clothing3/${getRandomNumber(
        total.clothes.clothing3
      )}.png`,
      nose: `images/nose/${getRandomNumber(total.nose)}.png`,
    }),
    []
  );
  const randomAvatar = useCallback(() => {
    const newAvatar = generateRandomAvatar();
    setAvatar(newAvatar);
  }, [generateRandomAvatar, setAvatar]);

  useEffect(() => {
    setAvatar(generateRandomAvatar());
  }, []);

  const renderAvatar = (name, index) => {
    if (name === "eyes") {
      setAvatar({
        ...avatar,
        eye: `images/eyes/${index}.png`,
      });
    } else if (name === "hair") {
      setAvatar({
        ...avatar,
        hair: `images/hair/${index}.png`,
      });
    }
    console.log(name, index);
  };
  // const renderAvatar = (name, index) => {
  //   setAvatar({
  //     ...avatar,
  //     eye: `images/${name}/${index}.png`,
  //     hair: `images/${name}/${index}.png`,
  //   });
  // };

  // printEvent();
  // console.log(avatar);
  // useEffect(() => {
  //   setAvatar(renderAvatar);
  // }, [avatar]);
  // console.log(avatar);
  // const renderPatternList = (obj, dir = "") => {
  //   let content = [];
  //   for (let key in obj) {
  //     if (typeof obj[key] !== "number") {
  //       let res = renderPatternList(obj[key], key);
  //       content.push(...res);
  //       console.log(content);
  //     } else {
  //       content.push(
  //         <PartList len={obj[key]} name={key} dir={`${dir}/${key}`} />
  //       );
  //     }
  //   }
  //   return content;
  // };

  const renderPatternList = (obj, dir = "") => {
    let content = [];
    for (let key in obj) {
      const value = obj[key];
      content.push(
        typeof value !== "number" ? (
          renderPatternList(value, key)
        ) : (
          <PartList
            len={value}
            name={key}
            dir={`${dir}/${key}`}
            renderAvatar={renderAvatar}
            // printEvent={printEvent}
          />
        )
      );
    }

    return content;
  };

  return (
    <>
      <h1 className="title">Character customize</h1>
      <div className="container">
        <Avatar avatar={avatar} randomAvatar={randomAvatar} />
        <div className="item-clothe">{renderPatternList(total)}</div>
      </div>
    </>
  );
}

export default App;
