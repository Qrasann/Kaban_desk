import Avatar from "../../assets/img/avatar.svg";
import ArrowUp from "../../assets/img/arrow-up.svg";
import ArrowDown from "../../assets/img/arrow-down.svg";
import DropArrow from "../../assets/img/drop-menu-arrow.svg";
import classes from "./Header.module.css";
import { useState } from "react";

const ProfileArrow = ({ isMenuOpened }) => {
  return isMenuOpened ? (
    <>
      <img src={ArrowUp} alt="Arrow Up" />
      <img src={DropArrow} alt="Drop Arrow" className={classes.dropArrow} />
      <div className={classes.dropMenu}>
        <button className={classes.dropMenuButton}>Profile</button>
        <button className={classes.dropMenuButton}>Log Out</button>
      </div>
    </>
  ) : (
    <img src={ArrowDown} alt="Arrow Down" />
  );
};

const Header = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const handleUserProfileClick = () => {
    setIsMenuOpened(!isMenuOpened);
  };

  return (
    <header className={classes.header}>
      <div className={`${classes.title} ${classes.desktop}`}>
        Awesome Kanban Board
      </div>
      <div className={classes.userProfile} onClick={handleUserProfileClick}>
        <img className={classes.avatar} src={Avatar} alt="user avatar" />
        <ProfileArrow isMenuOpened={isMenuOpened} />
      </div>
    </header>
  );
};

export default Header;