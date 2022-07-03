import Dashboard from "../adminPanel/pages/Dashboard";
import BlogPage from "../pages/BlogPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import PageNotFound from "../pages/PageNotFound";
import PhotosGallery from "../pages/PhotosGallery";
import VideoGallery from "../pages/VideoGallery";
import PhotoGalleryList from "../adminPanel/pages/photoGallery/PhotoGalleryList";
import AddPhotos from "../adminPanel/pages/photoGallery/_redux/reducer/AddPhotos";
import VideoGalleryList from "../adminPanel/pages/videoGallery/VideoGalleryList";
import AddVideo from "../adminPanel/pages/videoGallery/AddVideo";
import BlogList from "../adminPanel/pages/blog/BlogList";
import AddBlog from "../adminPanel/pages/blog/AddBlog";



const routes = [
  { path: "/", name: "Home", element: HomePage },
  { path: "/home", name: "home", element: HomePage },
  { path: "/photos-gallery", name: "Photo Gallery", element: PhotosGallery },
  { path: "/videos-gallery", name: "Videos Gallery", element: VideoGallery },
  { path: "/blog", name: "Blog Page", element: BlogPage },
  { path: "/author-login", name: "Login Page", element: LoginPage },
  { path: "/dashboard", name: "Login Page", element: Dashboard },
  { path: "/dashboard/photo-gallery-list", name: "Photo Gallery Page", element: PhotoGalleryList },
  { path: "/add-photos", name: "add-photos", element: AddPhotos },
  { path: "/dashboard/video-gallery-list", name: "Video Gallery Page", element: VideoGalleryList },
  { path: "/dashboard/add-video", name: "Video Gallery Page", element: AddVideo },
  { path: "/dashboard/blog-list", name: "Blog Page", element: BlogList },
  { path: "/dashboard/add-blog", name: "Blog Page", element: AddBlog },

  { path: "*", name: "404", element: PageNotFound },
 
];

export default routes;
