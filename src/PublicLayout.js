import {
    Footer, Header, ScrollUpButton
} from "./components/index.js";

const PublicLayout = ({ children }) => {
    return (
        <>
            <Header />
            <div>{children}</div>
            <ScrollUpButton />
            <Footer />
        </>
    );
};

export { PublicLayout };
