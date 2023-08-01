import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { UserProvider } from './Components/Context/UserContext';
import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Components/Home';
import UserKitchen from './Components/User/UserKitchen';
import UserFeed from './Components/User/UserFeed';
import RecipeSearch from './Components/RecipeSearch';
import SignupLoginComponent from './Components/LogInSignUp';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: <Error />,
    children: [
      {
        index: true, element: <Home />
      },
      {
        path: "/my-kitchen", element: <UserKitchen />
      },
      {
        path: "/feed", element: <UserFeed />
      },
      {
        path: "/search", element: <RecipeSearch />
      },
      {
        path: "/login", element: <SignupLoginComponent />
      }
    ]
  },
])

root.render(
  <React.StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
