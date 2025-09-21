// eslint-disable-next-line react/prop-types
const LoadingSpinner = ({message}) => {
  return (
    <div className="loading-container">
        <div className="spinner"></div>
        <p>{message}</p>
      </div>
  )
}

export default LoadingSpinner