import "./App.scss";
import "../backend/index";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AppDispatch } from "store";
import { Login, MainPage, Create } from "pages";
import { useEffect, useState } from "react";
import { userApi } from "store/reducers/user";
import { UIProvider } from "ui";

function App() {
  const dispatch = useDispatch() as AppDispatch;
  const [startApp, setStartApp] = useState(false);

  useEffect(() => {
    async function getUser() {
      dispatch(userApi.auth()).then(() => {
        setStartApp(true);
      });
    }
    getUser();
  }, []);

  if (startApp) {
    return (
      <div>
        <BrowserRouter>
          <UIProvider>
            <Routes>
              <Route element={<MainPage />} path="*" />{" "}
              <Route element={<Login />} path="/login" />
              <Route element={<Create />} path="/create" />
            </Routes>
          </UIProvider>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
