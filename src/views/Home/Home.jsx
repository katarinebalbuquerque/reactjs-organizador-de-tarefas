import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Container from "../../components/Container/Container";
import styles from "../../assets/css/styles.module.css";
import List from "../../components/list/List";
import Category from "../../components/category/Category";
import { useState } from "react";
import Context from "../../context/Contex";

const Home = () => {

    const [data, setData] = useState([]);

    return (
        <>
            <Header />
            <section className={styles.home}>
                <Container>
                    <section className={styles.content}>
                        <Context.Provider value={[data, setData]}>
                            <Category/>
                            <List/>
                        </Context.Provider>
                    </section>                    
                </Container>
            </section>
            <Footer />
        </>
    )
}

export default Home;