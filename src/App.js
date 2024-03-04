import React, { useState, useCallback, useEffect } from "react";
import "./App.css";
import Avatar from "./components/Avatar";
import PartList from "./components/PartList";
// const total = {
//   accessories: {
//     hats: 28,
//     glasses: 17,
//     earrings: 32,
//     neckwear: 18,
//   },
//   clothes: {
//     clothing1: 5,
//     clothing2: 5,
//     clothing3: 9,
//   },
//   body: 17,
//   eyes: 17,
//   hair: 73,
//   mouths: 24,
//   eyebrows: 15,
//   facial_hair: 17,
//   noses: 1,
// };

const total = {
  accessories: {
    hats: {
      name: `hats`,
      qty: 28,
      style: { zIndex: 2, position: "absolute", left: 0 },
    },
    glasses: {
      name: `glasses`,
      qty: 17,
      style: { zIndex: 2, position: "absolute", left: 0 },
    },
    earrings: {
      name: `earrings`,
      qty: 32,
      style: { zIndex: 1, position: "absolute", left: 0 },
    },
    neckwear: {
      name: `neckwear`,
      qty: 18,
      style: { zIndex: 5, position: "absolute", left: 0 },
    },
  },
  clothes: {
    clothing1: {
      name: `clothing `,
      qty: 5,
      style: { zIndex: 1, position: "absolute", left: 0 },
    },
    clothing2: {
      name: `outerwear`,
      qty: 5,
      style: { zIndex: 3, position: "absolute", left: 0 },
    },
    clothing3: {
      name: `clothing `,
      qty: 9,
      style: { zIndex: 4, position: "absolute", left: 0 },
    },
  },
  body: {
    name: `body`,
    qty: 17,
    style: { zIndex: 0 },
  },
  eyes: {
    name: `eye`,
    qty: 24,
    style: { zIndex: 1, position: "absolute", left: 0 },
  },
  hair: {
    name: `hair`,
    qty: 73,
    style: { zIndex: 1, position: "absolute", left: 0 },
  },
  mouths: {
    name: `mouth`,
    qty: 24,
    style: { zIndex: 1, position: "absolute", left: 0 },
  },
  eyebrows: {
    name: `eyebrows`,
    qty: 15,
    style: { zIndex: 1, position: "absolute", left: 0 },
  },
  facial_hair: {
    name: `facial hair`,
    qty: 17,
    style: { zIndex: 1, position: "absolute", left: 0 },
  },
  noses: {
    name: `nose`,
    qty: 1,
    style: { zIndex: 1, position: "absolute", left: 0 },
  },
};

function getRandomNumber(num) {
  return Math.floor(Math.random() * (num - 1) + 1);
}

function App() {
  const [avatar, setAvatar] = useState({});

  const generateRandomAvatar = useCallback(
    () => ({
      body: {
        dir: `images/body/${getRandomNumber(total.body.qty)}.png`,
        style: total.body.style,
      },
      eyes: {
        dir: `images/eyes/${getRandomNumber(total.eyes.qty)}.png`,
        style: total.eyes.style,
      },
      hair: {
        dir: `images/hair/${getRandomNumber(total.hair.qty)}.png`,
        style: total.hair.style,
      },
      mouths: {
        dir: `images/mouths/${getRandomNumber(total.mouths.qty)}.png`,
        style: total.mouths.style,
      },
      facial_hair: {
        dir: `images/facial_hair/${getRandomNumber(total.facial_hair.qty)}.png`,
        style: total.facial_hair.style,
      },
      eyebrows: {
        dir: `images/eyebrows/${getRandomNumber(total.eyebrows.qty)}.png`,
        style: total.eyebrows.style,
      },
      glasses: {
        dir: `images/accessories/glasses/${getRandomNumber(
          total.accessories.glasses.qty
        )}.png`,
        style: total.accessories.glasses.style,
      },
      earrings: {
        dir: `images/accessories/earrings/${getRandomNumber(
          total.accessories.earrings.qty
        )}.png`,
        style: total.accessories.earrings.style,
      },
      hats: {
        dir: `images/accessories/hats/${getRandomNumber(
          total.accessories.hats.qty
        )}.png`,
        style: total.accessories.hats.style,
      },
      neckwear: {
        dir: `images/accessories/neckwear/${getRandomNumber(
          total.accessories.neckwear.qty
        )}.png`,
        style: total.accessories.neckwear.style,
      },
      clothing1: {
        dir: `images/clothes/clothing1/${getRandomNumber(
          total.clothes.clothing1.qty
        )}.png`,
        style: total.clothes.clothing1.style,
      },
      clothing2: {
        dir: `images/clothes/clothing2/${getRandomNumber(
          total.clothes.clothing2.qty
        )}.png`,
        style: total.clothes.clothing2.style,
      },
      clothing3: {
        dir: `images/clothes/clothing3/${getRandomNumber(
          total.clothes.clothing3.qty
        )}.png`,
        style: total.clothes.clothing3.style,
      },
      noses: {
        dir: `images/noses/${getRandomNumber(total.noses.qty)}.png`,
        style: total.noses.style,
      },
    }),
    []
  );

  const randomAvatar = useCallback(() => {
    const newAvatar = generateRandomAvatar();
    setAvatar(newAvatar);
  }, [generateRandomAvatar, setAvatar]);

  useEffect(() => {
    setAvatar(generateRandomAvatar());
  }, [generateRandomAvatar]);

  const renderAvatar = (name, index) => {
    let temp = { ...avatar };
    temp[name].dir = index;
    setAvatar({
      ...avatar,
      ...temp,
    });
    console.log(name, index);
    console.log(avatar);
  };

  const renderPatternList = (obj, dir = "") => {
    let content = [];
    for (let key in obj) {
      const value = obj[key];
      content.push(
        typeof value === "object" && !Object.hasOwn(value, "name") ? (
          renderPatternList(value, key)
        ) : (
          <PartList
            key={key}
            keyObj={key}
            len={value.qty}
            name={value.name}
            dir={`${dir}/${key}`}
            renderAvatar={renderAvatar}
          />
        )
      );
    }

    return content;
  };

  return (
    <div className="background">
      <h1 className="title">🚻 Character customize 🚻</h1>
      <div className="container">
        <Avatar avatar={avatar} randomAvatar={randomAvatar} />
        <div className="item-clothe">{renderPatternList(total)}</div>
      </div>
    </div>
  );
}

export default App;
