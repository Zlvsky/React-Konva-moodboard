import PhotoIcon from '@mui/icons-material/Photo';
import UploadFileRoundedIcon from "@mui/icons-material/UploadFileRounded";
import WallpaperIcon from '@mui/icons-material/Wallpaper';
import IosShareRoundedIcon from "@mui/icons-material/IosShareRounded";
// below is list of components that appear in sidebar
// id - unique id
// title - title of tool
// icon - imported icon from material ui
// component - component string needed for conditional rendering in itemsList.js
export const tools = [
  {
    id: 0,
    title: "Photos",
    icon: <PhotoIcon />,
    component: "imagesSection",
  },
  {
    id: 1,
    title: "Backgrounds",
    icon: <WallpaperIcon />,
    component: "backgroundsSection",
  },
  {
    id: 2,
    title: "Uploads",
    icon: <UploadFileRoundedIcon />,
    component: "uploadSection",
  },
  {
    id: 3,
    title: "Share",
    icon: <IosShareRoundedIcon />,
    component: "shareSection",
  },
];
