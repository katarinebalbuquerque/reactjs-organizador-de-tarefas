import { useContext, useState } from "react";
import styles from "../../assets/css/styles.module.css";
import Context from "../../context/Contex";
import SemTasks from "../../assets/images/vazio.png";
import Item from "../Item/Item";

const List = () => {

    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [data, setData] = useContext(Context);

    const handleAddTaskClick = (e) => {
        e.preventDefault();
        setData([...data, { name, category }]);
    }

    return (
        <article className={styles.list}>
            <form onSubmit={handleAddTaskClick} className={styles.inputs}>
                <input required onChange={e => setName(e.target.value)} type="text" name="name" maxLength="18" autoComplete="off" placeholder="Digite uma tarefa..." />
                <select required onChange={e => setCategory(e.target.value)} name="category">
                    <option value="">Selecionar...</option>
                    <option value="Estudos">Estudos</option>
                    <option value="Trabalho">Trabalho</option>
                    <option value="Casa">Casa</option>
                    <option value="Lazer">Lazer</option>
                </select>
                <button type="submit">+</button>
                <button className={styles.reset} type="reset">Limpe</button>
            </form>
            <hr /><br />
            {
                data.length === 0 ?
                    <>
                        <img width="100" src={SemTasks} alt="Sem Itens" />
                        <h5>Sem Tarefas!</h5>
                    </>
                    :
                    data.map((task, index) => (
                        <>
                            <Item key={index} task={task} index={index} />
                            <hr />
                        </>
                    ))}
        </article>
    )
}

export default List;