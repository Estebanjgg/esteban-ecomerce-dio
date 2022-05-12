import { BrowserRouter as Router } from "react-router-dom";
import  Routes from './routas';
import { Container} from "@material-ui/core/";
import  Header from './componets/Header';
 
const App = () => {
    return (
        <Container maxWidth="xl">
            <Router>
                <Header />
                <Routes />
            </Router>
        </Container>
    );
};

export default App;
