// eslint-disable-next-line react/prop-types
const ErrorMessage = ({error, onRetry}) => {
  return (
    <div className="error-container">
        <h3>Oops! Something went wrong</h3>
        <p>{error}</p>
        <button onClick={onRetry}>Try Again</button>
      </div>
  )
}

export default ErrorMessage