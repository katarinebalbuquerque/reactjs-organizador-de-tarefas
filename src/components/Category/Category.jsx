import { useContext, useMemo } from "react";
import styles from "../../assets/css/styles.module.css";
import Context from "../../context/Contex";

const Category = () => {

    const [data, setData] = useContext(Context);

    const countEstudos = useMemo(() => {
        return data.filter(item => item.category === "Estudos" ? item.category : "").length;
    });

    const countTrabalho = useMemo(() => {
        return data.filter(item => item.category === "Trabalho" ? item.category : "").length;
    });

    const countCasa = useMemo(() => {
        return data.filter(item => item.category === "Casa" ? item.category : "").length;
    });

    const countLazer = useMemo(() => {
        return data.filter(item => item.category === "Lazer" ? item.category : "").length;
    });

    const countTotal = useMemo(() => {
        return data.filter(item => item.name).length;
    });

    return (
        <article className={styles.category}>
            <h5>Categorias</h5>
            <hr /><br />
            <h6>Estudos ( {countEstudos} )</h6>
            <h6>Trabalho ( {countTrabalho} )</h6>
            <h6>Casa ( {countCasa} )</h6>
            <h6>Lazer ( {countLazer} )</h6>
            <br />
            <hr />
            <br />
            <h5>Total de Tarefas: {countTotal}</h5>            
        </article>
    )
}

export default Category;