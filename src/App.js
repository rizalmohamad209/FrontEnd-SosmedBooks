import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home";
import DetailsBook from "./pages/Description";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import Books from "./pages/Books";
import Outofdate from "./pages/OutOfDate";
import WaitingBorrow from "./pages/WaitingBorrow";
import Waiting from "./pages/Waiting";
import Search from "./pages/Search";
import Category from "./pages/Category";
import Borrow from "./pages/Borrow";
import DescriptionLogin from "./pages/DescriptionLogin";
import HomeNotLogin from "./pages/HomeNotLogin";
import UploadBooks from "./pages/UploadBooks";
import Confirmation from "./pages/Confirmation";
function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={HomeNotLogin} />
      <Route path="/detail/:id" component={DetailsBook} />
      <Route path="/sign-in" component={SignIn} />
      <Route path="/sign-up" component={SignUp} />
      <Route path="/profile" component={Profile} />
      <Route path="/books" component={Books} />
      <Route path="/outofdate" component={Outofdate} />
      <Route path="/waitingborrow" component={WaitingBorrow} />
      <Route path="/waiting" component={Waiting} />
      <Route path="/search" component={Search} />
      <Route path="/category" component={Category} />
      <Route path="/borrow" component={Borrow} />
      <Route path="/descriptionlogin" component={DescriptionLogin} />
      <Route path="/home" component={Home} />
      <Route path="/uploadbooks" component={UploadBooks} />
      <Route path="/confirmation" component={Confirmation} />
    </BrowserRouter>
  );
}

export default App;
