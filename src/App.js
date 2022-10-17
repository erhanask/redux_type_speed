import './App.css';
import {GeneratedText} from "./components/GeneratedText";
import {InfoBar} from "./components/InfoBar";
import {WordInput} from "./components/WordInput";

function App() {
    return (
        <div className="App">
            <div className="appContainer">
                <GeneratedText/>
                <InfoBar/>
                <WordInput/>
            </div>
        </div>
    );
}

export default App;
