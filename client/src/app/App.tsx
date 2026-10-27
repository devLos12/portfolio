import { RouterProvider } from "react-router-dom";
import { Router } from "./router";
import { ThemeProvider } from "@/components/common/theme-provider";


const App = () => {
  return (

    <ThemeProvider>
        <div className="bg-white dark:bg-[#040B22]">
          <RouterProvider router={Router}/> 
        </div>
    </ThemeProvider>

  ) 
}
export default App;
