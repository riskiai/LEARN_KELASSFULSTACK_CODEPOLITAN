import { useContext } from "react";
import { GlobalContext } from "../context";


/*
    function tambah (a, b) {
    return a + b
    } 
*/

/* Buat Komponen Baru  Conditional Rendering 2*/
const ArticleStatus = ({ isNew }) => {
    return isNew && <span>--Baru !!!</span>
}

/* Cara Lain */
/* const NewArticle = () => {
    return <span>-- Baru !!</span>
} */

/* Menaruh Properti -> props */
function Article(props) {
    const user = useContext(GlobalContext);
   /*  
    const name = "Riski";
    const titles = ["Tutorial ReactJs", "Tutorial Nextjs", "Tutorial NodeJS"];
   */

    return (
        <>
        {/* Beberapa Kode bisa dibuat langsung dan lebih flexibel */}
            <h3>{props.title}</h3>
            {/* <h3>{props.name}</h3> */}
            <small>Date : {props.date}, tags: {props.tags.join(", ")} 
            {/* {props.isNew && '-- Baru !!'} */}
            <ArticleStatus isNew={props.isNew} />
            </small>
            {/* {props.isNew  && <NewArticle />} */}
            {/* <div>
                {props.titles.map((title) => {
                    return <div>{title}</div>;
                })}
            </div> */}
            <div>
            <small>Ditulis oleh {user.username}</small>
            </div>
        </>
    );
}

export default Article;
