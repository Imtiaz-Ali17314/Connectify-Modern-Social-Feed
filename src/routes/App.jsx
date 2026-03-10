import "./App.css";
import Header from "../components/Header.jsx";
import Sidebar from "../components/Sidebar.jsx";
import Footer from "../components/Footer.jsx";
import PostListProvider from "../store/post-list.jsx";
import { Outlet, useNavigation } from "react-router-dom";
import LoaderSpinner from "../components/LoaderSpinner.jsx";

function App() {
  const navigate = useNavigation();
  const isLoading = navigate.state === "loading";

  return (
    <PostListProvider>
      <div className="app-container">
        <Sidebar />
        <div className="content">
          <Header />
          {isLoading ? <LoaderSpinner /> : <Outlet />}
          <Footer />
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
