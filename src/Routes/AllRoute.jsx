import Courses from "../Components/Adminitems/Courses";
import DashBoard from "../Components/Adminitems/DashBoard";
import EditPage from "../Components/Adminitems/EditPage";
import AddCourse from "../Components/Adminitems/AddCourse";
import LandingPage from "../Pages/LandingPage";
import PageNotFound from "../Pages/PageNotFound";
import UserDashboard from "../Pages/UserDashboard";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Discount from "../Components/Adminitems/Discount";
import Statistics from "../Components/Adminitems/Statistics";
import Setting from "../Components/Adminitems/Setting";
import GiftCard from "../Components/Adminitems/GiftCard";
import Users from "../Components/Adminitems/Users";
import SinglePage from "../Components/singlePageComps/SinglePage";
import Login from "../Components/LogIn";
import SignUp from "../Components/SignUp";
import Payment from "../Pages/Payment/Payment";
import AddUser from "../Components/Adminitems/AddUser";
import EditUser from "../Components/Adminitems/EditUsers";
import GetVideos from "../Components/Adminitems/GetVideos";
import AddVideo from "../Components/Adminitems/AddVideos";
import ProfilePage from "../Pages/ProfilePage";
import PrivateRoutes from "./PrivateRoutes";
import { AdminRoute } from "./AdminRoute";
import TeachVerify from "../Components/TeacherComponents/TeachVerify";
import TeacherDashboard from "../Components/TeacherComponents/TeacherDashboard";
import { TeacherRoute } from "./TeacherRoute";
import Add from "../Components/Adminitems/Add";
import TeacherCourses from "../Components/TeacherComponents/TeacherCourses";
import AddTeacherCourse from "../Components/TeacherComponents/AddCourse";
import AddTeacherVideos from "../Components/TeacherComponents/AddTeacherVideos";
import AddTeacher from "../Components/TeacherComponents/AddTeacher";
import GetTeacherVideos from "../Components/TeacherComponents/GetTeacherVideos";


const AllRoute = () => {
  return (
    <Routes>
      <Route
        path="/course/:id"
        element={
          <PrivateRoutes>
            <SinglePage />
          </PrivateRoutes>
        }
      />

      <Route
        path="/admin/dashboard"
        element={
          <PrivateRoutes>
            <AdminRoute>
              <DashBoard />
            </AdminRoute>
          </PrivateRoutes>
        }
      />
      <Route
        path="/admin/courses"
        element={
          <PrivateRoutes>
          <AdminRoute>
          <Courses />
          </AdminRoute>
          </PrivateRoutes>
        }
      />

      <Route
        path="/admin/edit/:id"
        element={
          <PrivateRoutes>
          <AdminRoute>
          <EditPage />
          </AdminRoute>
          </PrivateRoutes>
        }
      />
      <Route
        path="/admin/addCourse"
        element={
          <PrivateRoutes>
          <AdminRoute>
          <AddCourse />
          </AdminRoute>
          </PrivateRoutes>
        }
      />

      <Route
        path="/admin/Add"
        element={
          <PrivateRoutes>
          <AdminRoute>
          <Add/>
          </AdminRoute>
          </PrivateRoutes>
        }
      />

      <Route
        path="/home"
        element={
          <PrivateRoutes>
            <UserDashboard />
          </PrivateRoutes>
        }
      />
      <Route
        path="/admin/discount"
        element={
          <PrivateRoutes>
          <AdminRoute>
          <Discount />
          </AdminRoute>
          </PrivateRoutes>
        }
      />
      <Route
        path="/admin/statistic"
        element={
          <PrivateRoutes>
           <AdminRoute>
           <Statistics />
           </AdminRoute>
          </PrivateRoutes>
        }
      />
      <Route
        path="/admin/giftcard"
        element={
          <PrivateRoutes>
            <AdminRoute>
            <GiftCard />
            </AdminRoute>
          </PrivateRoutes>
        }
      />
      <Route
        path="/admin/setting"
        element={
          <PrivateRoutes>
           <AdminRoute>
           <Setting />
           </AdminRoute>
          </PrivateRoutes>
        }
      />
      <Route
        path="/admin/users"
        element={
          <PrivateRoutes>
            <AdminRoute>
            <Users />
            </AdminRoute>
          </PrivateRoutes>
        }
      />
      <Route
        path="/admin/users/add"
        element={
          <PrivateRoutes>
           <AdminRoute>
           <AddUser />
           </AdminRoute>
          </PrivateRoutes>
        }
      />
      <Route
        path="/admin/users/edit/:id"
        element={
          <PrivateRoutes>
            <AdminRoute>
            <EditUser />
            </AdminRoute>
          </PrivateRoutes>
        }
      />

      <Route
        path="/Teacher/edit/:id"
        element={
          <PrivateRoutes>
          <TeacherRoute>
          <EditPage />
          </TeacherRoute>
          </PrivateRoutes>
        }
      />

      <Route
        path="/admin/videos"
        element={
          <PrivateRoutes>
           <AdminRoute>
           <GetVideos />
           </AdminRoute>
          </PrivateRoutes>
        }
      />

      <Route
        path="/admin/videos/add/:courseId"
        element={
          <PrivateRoutes>
          <AdminRoute>
          <AddVideo />
          </AdminRoute>
          </PrivateRoutes>
        }
      />

      <Route path="/" element={<LandingPage />} />
      <Route path="*" element={<PageNotFound />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
  
      <Route
        path="/Teachme"
        element={
          <PrivateRoutes>
            <TeachVerify/>
          </PrivateRoutes>
        }
      />
      
      <Route
        path="/TeacherDashboard"
        element={
          <PrivateRoutes>
            <TeacherRoute>
            <TeacherDashboard/>
            </TeacherRoute>
          </PrivateRoutes>
        }
      />

      <Route
        path="/Teacher/courses"
        element={
          <PrivateRoutes>
            <TeacherRoute>
            <TeacherCourses/>
            </TeacherRoute>
          </PrivateRoutes>
        }
      />

      <Route
        path="/Teacher/videos/add/:courseId"
        element={
          <PrivateRoutes>
          <TeacherRoute>
          <AddTeacherVideos />
          </TeacherRoute>
          </PrivateRoutes>
        }
      />

      <Route
        path="/Teacher/Add"
        element={
          <PrivateRoutes>
          <TeacherRoute>
          <AddTeacher/>
          </TeacherRoute>
          </PrivateRoutes>
        }
      />

      <Route
        path="/Teacher/addCourse"
        element={
          <PrivateRoutes>
            <TeacherRoute>
            <AddTeacherCourse/>
            </TeacherRoute>
          </PrivateRoutes>
        }
      />

      <Route
        path="/Teacher/videos"
        element={
          <PrivateRoutes>
           <TeacherRoute>
           <GetTeacherVideos/>
           </TeacherRoute>
          </PrivateRoutes>
        }
      />


      <Route
        path="/payment"
        element={
          <PrivateRoutes>
            <Payment />
          </PrivateRoutes>
        }
      />
      <Route
        path="/profile"
        element={
          <PrivateRoutes>
            <ProfilePage />
          </PrivateRoutes>
        }
      />
    </Routes>
  );
};

export default AllRoute;
