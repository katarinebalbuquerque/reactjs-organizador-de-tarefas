import Container from "../Container/Container";
import styles from "../../assets/css/styles.module.css";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Container>
                <section className={styles.description}>
                    <h6>GerenciadorDeTarefas@2025<br />Todos os direitos reservados</h6>                   
                </section>
            </Container>
        </footer>
    )
}

export default Footer;