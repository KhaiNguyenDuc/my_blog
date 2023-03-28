import './App.css';
import { privateRoutes, publicRoutes } from "./routes/index"
import { Route, Routes } from 'react-router-dom';
import NotFound from './components/NotFound'
function App() {
  return (
    <div className="App">

      <Routes>
        {/* Public routes */}
        {publicRoutes.map((myRoute, index) => {

          let Layout = myRoute.layout
          let Page = myRoute.page
          return (
            <Route
              key={index}
              path={myRoute.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />
          )
        }
        )}

        {/* Private routes */}
        {privateRoutes.map((myRoute, index) => {

          let Layout = myRoute.layout
          let Page = myRoute.page
          return (
            <Route
              key={index}
              path={myRoute.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />
          )
        })}

        {/* not found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App;
