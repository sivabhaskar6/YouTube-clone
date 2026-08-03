import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import store from './utils/store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';
import AppLayout from "./AppLayout";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
        children: [
          {
            index: true,
            element: <MainContainer />,
          },
          {
            path: "watch",
            element: <WatchPage />,
          },
        ],
      },
    ],
  },
]);

function App() {

  return (
    <Provider store={store}>
      <div className="h-screen overflow-hidden flex flex-col">
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
