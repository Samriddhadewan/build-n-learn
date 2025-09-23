import { Button } from "@/components/ui/button"
import { useGeoLocation } from "@/hooks/use-geolocation"
import { RefreshCw } from "lucide-react"

const Dashboard = () => {
  const {getLocation, coordinates, error, isLoading} = useGeoLocation();
    console.log(coordinates)
  return (
    <div className="space-y-4">
      {/* fav cities  */}
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold tracking-tight">My Location</h1>
        <Button
        variant={"outline"}
        size={"icon"}
        // onClick={handleRefresh}
        // disabled={}
        >
          <RefreshCw className="h-4 w-4" />
        </Button>
      </div>

      {/* current and hourly weather  */}
    </div>
  )
}

export default Dashboard