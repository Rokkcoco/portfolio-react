import './App.css'
import {Header} from "./header/Header.tsx";
import {Main} from "./main/Main.tsx";
import {Skills} from "./skills/Skills.tsx";
import {Projects} from "./projects/Projects.tsx";
import {Remotejob} from "./remotejob/Remotejob.tsx";
import {Contacts} from "./contacts/Contacts.tsx";
import {Footer} from "./footer/Footer.tsx";

const App = () => (
    <div className="App">
        <Header/>
        <Main/>
        <Skills/>
        <Projects/>
        <Remotejob/>
        <Contacts/>
        <Footer/>
    </div>

);

export default App
