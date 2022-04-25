import "./styles.css";
import { useEffect, useState } from "react";
export default function App() {
  const [isShown, setIsShown] = useState(false);
  useEffect(() => {
    isShown &&
      setTimeout(() => {
        setIsShown(false);
      }, 3000);
  }, [isShown]);

  const showToast = () => {
    setIsShown(true);
  };
  return (
    <div className="App">
      <h1>Toast Project</h1>
      <button onClick={showToast}>Click to show Toast</button>
      {isShown && (
        <h2 class="toast">Hi! I'm the toast they are talking about.</h2>
      )}
    </div>
  );
}
