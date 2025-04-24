import css from './SearchBox.module.css'
import toast, { Toaster } from 'react-hot-toast';
import { FormEvent } from 'react';

type SearchBarProps = {
    onSubmit: (image: string) => void;
};

export default function SearchBox({ onSubmit }:SearchBarProps) { 

    const handleSubmit = (event:FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const form = event.currentTarget;
        const image = (form.elements.namedItem('image') as HTMLInputElement).value;

        if (image.trim() === '') {
          toast('Please enter search term!');
            return;    
        }
        onSubmit(image);
        form.reset();
    };
    return (
    <header className={css.header}>
         <form className={css.form} onSubmit={handleSubmit}>
                <input className={css.input}
                    type="text"
                    placeholder="Search images and photos"
                    name='image'
    />
        <button className={css.button} type="submit">Search</button>
     </form>
</header>

    );
};
