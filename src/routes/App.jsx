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
      <div className="app-container d-flex">
        <Sidebar />
        <div className="content d-flex flex-column flex-grow-1" style={{ height: "100vh", overflow: "hidden" }}>
          <Header />
          <main className="flex-grow-1 overflow-auto">
            {isLoading ? <LoaderSpinner /> : <Outlet />}
          </main>
          <Footer />
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
