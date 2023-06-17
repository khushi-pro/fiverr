import React from 'react';
import '/app.scss';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import Footer from './components/footer/Footer';
import Gigs from './pages/gigs/Gigs';
import Gig from './pages/gig/Gig';
import Orders from './pages/orders/Orders';
import MyGigs from './pages/myGigs/MyGigs';
import Add from './pages/add/Add';
import Messages from './pages/messages/Messages';
import Message from './pages/message/Message';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

function App() {
  const Layout = () => {
    return (
      <div className="app">
        <Navbar />
        <Outlet /> {/* Use Outlet to render the nested routes */}
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/gigs',
          element: <Gigs />
        },
        {
          path: '/gig',
          element: <Gig />
        },
        {
          path: '/orders',
          element: <Orders />
        },
        {
          path: '/mygigs',
          element: <MyGigs />
        },
        {
          path: '/add',
          element: <Add />
        },
        {
          path: '/messages',
          element: <Messages />
        },
        {
          path: '/message/:id',
          element: <Message />
        }
      ]
    }
  ]);

  return (
    <RouterProvider router={router}>
      <Outlet /> {/* Use Outlet to render the top-level routes */}
    </RouterProvider>
  );
}

export default App;
