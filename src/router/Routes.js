import BlogList from "../adminPanel/pages/BlogList";
import Dashboard from "../adminPanel/pages/Dashboard";
import PhotoGalleryList from "../adminPanel/pages/PhotoGalleryList";
import VideoGalleryList from "../adminPanel/pages/VideoGalleryList";
import AddPhotos from "../adminPanel/pages/AddPhotos";
import BlogPage from "../pages/BlogPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import PageNotFound from "../pages/PageNotFound";
import PhotosGallery from "../pages/PhotosGallery";
import VideoGallery from "../pages/VideoGallery";


const routes = [
  { path: "/", name: "Home", element: HomePage },
  { path: "/home", name: "home", element: HomePage },
  { path: "/photos-gallery", name: "Photo Gallery", element: PhotosGallery },
  { path: "/videos-gallery", name: "Videos Gallery", element: VideoGallery },
  { path: "/blog", name: "Blog Page", element: BlogPage },
  { path: "/author-login", name: "Login Page", element: LoginPage },
  { path: "/dashboard", name: "Login Page", element: Dashboard },
  { path: "/photo-gallery-list", name: "Photo Gallery Page", element: PhotoGalleryList },
  { path: "/add-photos", name: "add-photos", element: AddPhotos },
  { path: "/blog-list", name: "Blog List Page", element: BlogList },
  { path: "*", name: "404", element: PageNotFound },
 
];

export default routes;
