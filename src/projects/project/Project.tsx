import s from "./Project.module.css"
import {FC} from "react";
import sbutton from "./../../common/styles/Button.module.css"

type ProjectType = {
    title: string
    description: string
}

export const Project:FC<ProjectType> = ({title, description}) => {
    return (
        <div className={s.project}>
            <div className={s.imgContainer}>
                <img/>
                <button className={sbutton.button}>Preview</button>
            </div>

            <h3 className={s.title}>{title}</h3>
            <span className={s.description}>{description}</span>
        </div>
    );
};

