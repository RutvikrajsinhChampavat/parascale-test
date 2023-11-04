import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/route";

function App() {
  return (
    <Suspense fallback={<h1>Loading</h1>}>
      <RouterProvider router={routes} fallbackElement={<h1>Loading</h1>} />
    </Suspense>
  );
}

export default App;
