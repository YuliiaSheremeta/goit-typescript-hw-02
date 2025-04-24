import css from './ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard'
import type { ImageItem } from '../App/App';

type ImageGalleryProps = {
    items: ImageItem[];
    onImageClick: (image: ImageItem) => void;
}

export default function ImageGallery({ items,onImageClick }: ImageGalleryProps) {
    return (
        <ul className={css.list}>
            {items.map((item) => (
                <li key={item.id}>
                    <ImageCard image={item} onClick={onImageClick} />
                </li>
            ))}
	
       </ul>
    );
};