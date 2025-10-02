import { useState } from "react"
import Comparison from "./components/Comparison"
import Controlled from "./components/Controlled"
import UnControlled from "./components/UnControlled"

const App = () => {
  const  [activeTab, setActiveTab] = useState("comparison")
  return (
    <div className="mt-20 container mx-auto">
        {/* tab button    */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <button onClick={()=> setActiveTab("comparison")}
          className={`px-4 py-2 rounded-lg cursor-pointer ${activeTab === "comparison" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
            >
          Table
          </button>
          <button onClick={()=> setActiveTab("controlled")}
          className={`px-4 py-2 rounded-lg cursor-pointer ${activeTab === "controlled" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
            >
          Controlled Form
          </button>
          <button onClick={()=> setActiveTab("uncontrolled")}
          className={`px-4 py-2 rounded-lg cursor-pointer ${activeTab === "uncontrolled" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
            >
          Controlled Form
          </button>
        </div>



        {/* tab contents  */}
        <div className="border p-4 rounded-lg shadow">
          {activeTab === "comparison" && <Comparison />}
          {activeTab === "controlled" && <Controlled />}
          {activeTab === "uncontrolled" && <UnControlled />}
        </div>



    </div>
  )
}

export default App