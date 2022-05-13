import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from './componets/store'
import Routes from "./routas";
import { Container } from "@material-ui/core/";
import Header from "./componets/Header";

const App = () => {
    return (
        <Provider store={store}>
            <Container maxWidth="xl">
                <Router>
                    <Header />
                    <Routes />
                </Router>
            </Container>
        </Provider>
    );
};

export default App;
