import "./App.css";
import AppHeader from "./components/navigation/AppHeader";
import MessageToHer from "./sections/message/MessageToHer";
import ErrorBoundary from "./utilities/ErrorBoundaries";
function App() {
  return (
    <>
      {/* <ErrorBoundary fallbackComponent={<>No workea</>} resetCondition={name}> */}
      <AppHeader />
      <MessageToHer />
      {/* </ErrorBoundary> */}
    </>
  );
}

export default App;
