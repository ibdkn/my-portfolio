import './App.css';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/section/main/Main";
import {Quote} from "./layout/section/quote/Quote";
import {Projects} from "./layout/section/projects/Projects";
import {Skills} from "./layout/section/skills/Skills";
import {About} from "./layout/section/about/About";
import {Contacts} from "./layout/section/contacts/Contacts";
import {Footer} from "./layout/footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <main>
                <Main />
                <Quote />
                <Projects />
                <Skills />
                <About />
                <Contacts />
            </main>
            <Footer/>
        </div>
    );
}

export default App;
