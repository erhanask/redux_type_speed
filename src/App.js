import './App.css';
import {GeneratedText} from "./components/GeneratedText";
import {InfoBar} from "./components/InfoBar";

function App() {
    return (
        <div className="App">
            <div className="appContainer">
                <GeneratedText/>
                <InfoBar/>
            </div>
        </div>
    );
}

export default App;
