import WeatherSkeleton from "@/components/loading-skeleton";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button"
import { useGeoLocation } from "@/hooks/use-geolocation"
import { useForecastQuery, useReverseGeolocationQuery, useWeatherQuery } from "@/hooks/use-weather";
import { AlertCircle, MapPin, RefreshCw } from "lucide-react"

const Dashboard = () => {
  const { getLocation, coordinates, error: locationError, isLoading: locationLoading } = useGeoLocation();

  const locationQuery = useReverseGeolocationQuery(coordinates);
  const weatherQuery = useWeatherQuery(coordinates);
  const forecastQuery = useForecastQuery(coordinates);


  const handleRefresh = () => {
    getLocation();
    if (coordinates) {
      weatherQuery.refetch()
      locationQuery.refetch()
      forecastQuery.refetch()
    }
  }


  if (locationError) {
    return <Alert variant="destructive">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Location Error</AlertTitle>
      <AlertDescription>
        <p>{locationError}</p>
        <Button onClick={handleRefresh} variant={"outline"} className="w-fit">
          <MapPin className="mr-2 h-4 w-4" />
          Enable Location
        </Button>
      </AlertDescription>
    </Alert>
  }


  if (!coordinates) {
    return <Alert variant="destructive">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Location Not enabled</AlertTitle>
      <AlertDescription>
        <p>Please enable location to get the weather!</p>
        <Button onClick={handleRefresh} variant={"outline"} className="w-fit">
          <MapPin className="mr-2 h-4 w-4" />
          Enable Location
        </Button>
      </AlertDescription>
    </Alert>
  }


  if (locationLoading)
    return <WeatherSkeleton />


  const location = locationQuery.data?.[0];

  console.log(location?.name)

  if (weatherQuery.error || forecastQuery.error) {
    return <Alert variant="destructive">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Location Not enabled</AlertTitle>
      <AlertDescription>
        <p>Data fetching Failed! Please try again! </p>
        <Button onClick={handleRefresh} variant={"outline"} className="w-fit">
          <MapPin className="mr-2 h-4 w-4" />
          Enable Location
        </Button>
      </AlertDescription>
    </Alert>
  }

  if (!weatherQuery.data || !forecastQuery.data)
    return <WeatherSkeleton />

  return (
    <div className="space-y-4">
      {/* fav cities  */}
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold tracking-tight">My Location</h1>
        <Button
          variant={"outline"}
          size={"icon"}
          onClick={handleRefresh}
          disabled={weatherQuery.isFetching || forecastQuery.isFetching}
        >
          <RefreshCw className={`h-4 w-4 ${weatherQuery.isFetching ? "animate-spin" : ""}`} />
        </Button>
      </div>

      {/* current and hourly weather  */}
    </div>
  )
}


export default Dashboard