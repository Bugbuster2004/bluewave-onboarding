import { Link } from "@mui/material";
import { useContext, useState } from "react";
import CardContainer from "../../components/Links/Card";
import Card from "../../components/Links/Card/Card";
import Popup from "../../components/Links/Popup/Popup";
import { HelperLinkContext } from "../../services/linksProvider";
import s from "./LinkPage.module.scss";

const LinkContent = () => {
  const [draggingItem, setDraggingItem] = useState(null);

  const { links, toggleSettings, setLinks } = useContext(HelperLinkContext);

  const handleDragStart = (e, item) => {
    setDraggingItem(item);
    e.dataTransfer.setData("text/plain", item.title);
  };

  const handleDragEnd = () => {
    setDraggingItem(null);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, targetItem) => {
    if (!draggingItem) return;

    const currentIndex = links.indexOf(draggingItem);
    const targetIndex = links.indexOf(targetItem);

    if (currentIndex !== -1 && targetIndex !== -1) {
      links.splice(currentIndex, 1);
      links.splice(targetIndex, 0, draggingItem);
      setLinks(links.map((it, i) => ({ ...it, order: i + 1 })));
    }
    e.dataTransfer.clearData();
  };

  return (
    <>
      <div className={s.body__links}>
        <h3 className={s.body__title}>Link items</h3>
        <CardContainer>
          {links.map((item, i) => (
            <Card
              card={item}
              key={item.title}
              onDragStart={handleDragStart}
              onDragEnd={handleDragEnd}
              onDragOver={handleDragOver}
              onDrop={handleDrop}
            />
          ))}
          <Link
            onClick={toggleSettings}
            underline='hover'
            component='button'
            fontSize='0.785rem'
            lineHeight={1.43}
            display='inline-block'
            style={{ margin: "0 0 0 1.4rem" }}
          >
            + Add new link
          </Link>
        </CardContainer>
      </div>
      <Popup />
    </>
  );
};

export default LinkContent;
