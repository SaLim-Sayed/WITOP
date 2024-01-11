
import {
  FcAbout,
  FcBiotech,
  FcBusinessContact,
  FcHome,
  FcPortraitMode,
  FcReadingEbook,
  FcVideoProjector,
} from "react-icons/fc";

export const links = [
  { id: 1, title: "Home", url: "#", icon: <FcHome size={30} /> },
  { id: 2, title: "About", url: "#about", icon: <FcAbout size={30} /> },
  {
    id: 5,
    title: "Work Experince",
    url: "#WorkExperince",
    icon: <FcPortraitMode size={30} />,
  },
  {
    id: 6,
    title: "Tech Stack",
    url: "#techStack",
    icon: <FcBiotech size={30} />,
  },
  {
    id: 7,
    title: "Education",
    url: "#Education",
    icon: <FcReadingEbook size={30} />,
  },
  {
    id: 8,
    title: "Projects",
    url: "#Projects",
    icon: <FcVideoProjector size={30} />,
  },
  {
    id: 9,
    title: "Contact",
    url: "#contact",
    icon: <FcBusinessContact size={30} />,
  },
];
