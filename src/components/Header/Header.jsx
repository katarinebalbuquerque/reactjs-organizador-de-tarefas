import Container from "../Container/Container";
import Logo from "../../assets/images/logo.png";
import styles from "../../assets/css/styles.module.css";

const Header = () => {
    return (
        <header className={styles.header}>
            <Container>
                <nav className={styles.nav}>
                    <article className={styles.logo}>
                        <img width="48" src={Logo} alt="Logo"/>                        
                    </article>
                    
                    <article>
                        <h5>Organizador de Tarefas</h5>
                        <h6><strong>React Js</strong></h6>                        
                    </article>
                </nav>
            </Container>
        </header>
    )
}

export default Header;