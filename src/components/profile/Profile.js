import { Button } from "react-bootstrap";
import UIImage from "../shared/ui-image/UIImage";
import "./Profile.scss";
import { useContext, useEffect, useState } from "react";
import Contacts from "./contacts/Contacts";
import Socials from "./socials/Socials";
import { DataContext } from "../../store/DataContextProvider";

const Profile = () => {
  const { profile } = useContext(DataContext);
  const [hostClass, setHostClass] = useState("");
  const [imageWidth, setImageWidth] = useState("80px");

  const handleImageResize = () => {
    const width = window.innerWidth;
    if (width > 1250) {
      setImageWidth("150px");
    } else if (width > 580) {
      setImageWidth("120px");
    } else {
      setImageWidth("80px");
    }
  };

  const toggleProfile = () => {
    setHostClass(hostClass ? "" : "active");
  };

  useEffect(() => {
    handleImageResize();
    window.addEventListener("resize", handleImageResize);
    return () => {
      window.removeEventListener("resize", handleImageResize);
    };
  }, []);

  return (
    <div className={`profile-container ${hostClass}`}>
      <div className="sidebar-info">
        <figure className="avatar-box">
          <UIImage
            src={profile?.avatar}
            alt={profile?.name}
            width={imageWidth}
            loaderPadding="10px"
          />
        </figure>

        <div className="info-content">
          <h1 className="name">{profile?.name}</h1>
          {profile?.title && <p className="title">{profile?.title}</p>}
        </div>

        <Button className="info_more-btn" onClick={toggleProfile}>
          <span>Show Contacts</span>
          <i className="bx bx-chevron-down chevron-down"></i>
        </Button>
      </div>

      <div className="sidebar-info_more">
        <div className="separator"></div>
        <Contacts contacts={profile?.contacts} />
        <div className="separator"></div>
        <Socials socials={profile?.socials} />
      </div>
    </div>
  );
};

export default Profile;
