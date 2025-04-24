import css from './LoadMoreBtn.module.css';
import type { MouseEventHandler } from 'react';

type LoadMoreBtnProps = {
    onClick: MouseEventHandler<HTMLButtonElement>;
};

export default function LoadMoreBtn({onClick}: LoadMoreBtnProps) { 
    return (
        <button className={css.button} onClick={onClick}>
            Load more
      </button>  
    );
};