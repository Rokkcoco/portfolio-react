import s from "./Skill.module.css"
import {FC} from "react";
type SkillType = {
    title: string
    description: string
}
export const Skill:FC<SkillType> = ({title, description}) => {
    return (
        <div className={s.skill}>
            <div className={s.icon}></div>
            <h3>{title}</h3>
            <span className={s.description}>{description}</span>
        </div>
    );
};

