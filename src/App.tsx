import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/common/Header";
import GenreForm from "./page/Genre";
import { Toaster } from "./components/ui/sonner";
import Home from "./page/Home";
import MovieDetails from "./components/movie/MovieDetails";
import AuthProvider from "./providers/AuthProvider";
import Profile from "./page/Profile";
import WatchList from "./page/WatchList";
import Explore from "./page/Explore";
import Search from "./page/Search";
import Footer from "./components/common/Footer";

function App() {
  return (
    <main>
      <Router>
        <Header />
        <div className="min-h-[calc(100vh-80px)] max-w-screen-2xl mx-auto">
          <Routes>
            <Route
              path="/"
              element={
                <AuthProvider>
                  <Home />
                </AuthProvider>
              }
            />
            <Route path="/explore" element={<Explore />} />
            <Route
              path="/watchlist"
              element={
                <AuthProvider>
                  <WatchList />
                </AuthProvider>
              }
            />
            <Route path="/search" element={<Search />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
            <Route path="/genre" element={<GenreForm />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
        <Footer />
      </Router>
      <Toaster />
    </main>
  );
}

export default App;
