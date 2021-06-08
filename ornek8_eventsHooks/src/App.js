import Events from "./Events";
import Hooks from "./Hooks";
import HooksOrnek from "./HooksOrnek";
import ClassComponent from "./ClassComponent";
function App() {
  return (
    <div className="App">
      <Events />
      <ClassComponent sayi="10" />
      <ClassComponent sayi="100" />
      <Hooks />
      <HooksOrnek />
    </div>
  );
}
export default App;
