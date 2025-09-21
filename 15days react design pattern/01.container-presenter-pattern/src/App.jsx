import UserProfile from "./messy-way/components/UserProfile";
import "./App.css"
import UserProfileContainer from "./pattern-way/components/profile/UserProfileContainer";
function App() {
  return (
    <div className="">
      <UserProfileContainer userId={2} />
    </div>
  );
}

export default App;
