import HomePage from "../pages/HomePage";
import PageNotFound from "../pages/PageNotFound";
import PhotosGallery from "../pages/PhotosGallery";
import VideoGallery from "../pages/VideoGallery";


const routes = [
  { path: "/", name: "Home", element: HomePage },
  { path: "/home", name: "home", element: HomePage },
  { path: "/photos-gallery", name: "Photo Gallery", element: PhotosGallery },
  { path: "/videos-gallery", name: "Videos Gallery", element: VideoGallery },
  { path: "*", name: "404", element: PageNotFound },
 
];

export default routes;
