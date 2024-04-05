import { MetaProvider } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";

import CoreLayout from "./layouts/CoreLayout.jsx";

const App = () => {
  return (
    <main>
      <MetaProvider>
        <CoreLayout>
          <Router root={(props) => <Suspense>{props.children}</Suspense>}>
            <FileRoutes />
          </Router>
        </CoreLayout>
      </MetaProvider>
    </main>
  );
};
export default App;
