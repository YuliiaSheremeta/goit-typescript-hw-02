import css from './Loader.module.css';
import ClipLoader from "react-spinners/ClipLoader";

export default function Loader() {
    return (
      <div className={css.loaderContainer}>
            <ClipLoader size={50} color={"#007bff"} loading={true} /> 
            <p className={css.loaderText}>Loading data, please wait...</p>
        </div>
    )
 };