import React from "react";
import { Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home1 from "./pages/Home1";
import Home2 from "./pages/Home2";
import Home3 from "./pages/Home3";
import Home4 from "./pages/Home4";
import About from "./pages/About";
import Doctors from "./pages/Doctors";
import DoctorDetails from "./pages/DoctorDetails";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import RecoverPass from "./pages/RecoverPass";
import Prevention from "./pages/Prevention";
import BlogGrid from "./pages/BlogGrid";
import BlogSidebar from "./pages/BlogSidebar";
import BlogDetails from "./pages/BlogDetails";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Error from "./pages/Error";
import CreateBlog from "./pages/CreateBlog";
function App() {
  return (
    <React.Fragment>
      <Route>
        <Switch>
          <Route exact path='/' component={Home1} />
          {/* <Route path="/home-2" component={Home2} /> */}
          {/* <Route path="/home-3" component={Home3} /> */}
          {/* <Route path="/home-4" component={Home4} /> */}
          <Route path='/about' component={About} />
          {/* <Route path="/doctors" component={Doctors} /> */}
          {/* <Route path="/doctor-details" component={DoctorDetails} /> */}
          <Route path='/contact' component={Contact} />
          <Route path='/faq' component={FAQ} />
          {/* <Route path="/recover-pass" component={RecoverPass} /> */}
          {/* <Route path="/prevention" component={Prevention} /> */}
          {/* <Route path="/blog-grid" component={BlogGrid} /> */}
          {/* <Route path="/blog-sidebar" component={BlogSidebar} /> */}
          {/* <Route path="/blog-details" component={BlogDetails} /> */}
          {/* <Route path="/login" component={Login} /> */}
          {/* <Route path="/signin" component={SignUp} /> */}
          {/* <Route path="/create-blog" component={CreateBlog} /> */}
          <Route component={Error} />
        </Switch>
      </Route>
    </React.Fragment>
  );
}

export default App;
