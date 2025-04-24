import css from './ImageCard.module.css';
import type { ImageItem } from '../App/App';

type ImageCardProps = {
    image: ImageItem;
    onClick: (image: ImageItem) => void;
};

export default function ImageCard({ image,onClick }: ImageCardProps) {
    return (
        <div onClick={() => onClick(image)}>
            <img className={css.image} src={image.urls.small} alt={image.alt_description} />
           
       </div> 
    )
}