import { useContext } from "react";
import styles from "../../assets/css/styles.module.css";
import Context from "../../context/Contex";

const Item = ({ task, index }) => {

    const [data, setData] = useContext(Context);

    const handleRemoverItemClick = (index) => {
        setData(data.filter((_, i) => i !== index));
    };

    return (
        <article className={styles.details}>
            <h6>{task.name}</h6>
            <section className={styles.button}>
                <h6>({task.category})</h6>
                <button type="button" onClick={() => handleRemoverItemClick(index)}>x</button>
            </section>
        </article>
    )
}

export default Item;