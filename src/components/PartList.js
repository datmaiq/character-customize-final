import React from "react";
import ListItem from "./ListItem";

function PartList({ len, name, dir, printEvent, renderAvatar }) {
  const renderItem = (len, dir) => {
    let content = [];

    for (let i = 1; i <= len; i++) {
      // console.log(i);
      content.push(
        <ListItem
          index={i}
          dir={dir}
          width="100px"
          height="100px"
          renderAvatar={renderAvatar}
          printEvent={printEvent}
          name={name}
        />
      );
    }
    return content;
  };

  return (
    <div>
      <h1 className="title-part-list">{name}</h1>
      <div className="part-list-eyes">{renderItem(len, dir)}</div>
    </div>
  );
}

export default PartList;
