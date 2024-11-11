import { Link } from "@mui/material";
import PropTypes from "prop-types";
import { useContext, useState } from "react";
import CardContainer from "../../components/Links/Card";
import Card from "../../components/Links/Card/Card";
import Popup from "../../components/Links/Popup/Popup";
import LoadingArea from "../../components/LoadingPage/LoadingArea";
import { HelperLinkContext } from "../../services/linksProvider";
import s from "./LinkPage.module.scss";

const LinkContent = ({ isLoading = false }) => {
  const [draggingItem, setDraggingItem] = useState(null);

  const { links, toggleSettings, setLinks } = useContext(HelperLinkContext);

  const handleDragStart = (item) => {
    setDraggingItem(item);
  };

  const handleDragEnd = () => {
    setDraggingItem(null);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (targetItem) => {
    if (!draggingItem) return;

    const currentIndex = links.indexOf(draggingItem);
    const targetIndex = links.indexOf(targetItem);

    if (currentIndex !== -1 && targetIndex !== -1) {
      links.splice(currentIndex, 1);
      links.splice(targetIndex, 0, draggingItem);
      setLinks(links.map((it, i) => ({ ...it, order: i + 1 })));
    }
  };

  if (isLoading) {
    return <LoadingArea />;
  }

  return (
    <>
      <div className={s.body__links}>
        <h3 className={s.body__title}>Link items</h3>
        <CardContainer>
          {links.map((item) => (
            <Card
              card={item}
              key={item.id}
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

LinkContent.propTypes = {
  isLoading: PropTypes.bool,
};

export default LinkContent;
