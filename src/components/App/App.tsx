import { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';

import SearchBox from '../SearchBox/SearchBox';
import Loader from '../Loader/Loader'
import ImageGallery from '../ImageGallery/ImageGallery';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import ImageModal from '../ImageModal/ImageModal';

import { fetchImagesWithSearch } from "../../articles-api";

export type ImageItem = {
  id: string;
  alt_description: string;
  description: string;
  likes: number;
  urls: {
    small: string;
    regular: string;
    full: string; 
  };
  user: {
    name: string;
    profile_image: {
      small: string;
    };
  };
};

export default function App() {
  const [galleryImage, setGalleryImage] = useState<ImageItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [page, setPage] = useState<number>(1);


  const [selectedImage, setSelectedImage] = useState<ImageItem | null>(null);

  const [hasMoreImages, setHasMoreImages] = useState<boolean>(true);


const openModal = (image:ImageItem)=> {
  setSelectedImage(image);
  
  }

 const closeModal = ()=>  {
   setSelectedImage(null);
  
  }


  const handleSearch = (image:string) => {
    setSearchTerm(`${image}/${Date.now()}`)
    setPage(1);
    setGalleryImage([]);
    setHasMoreImages(true);

  };
  
  const handleLoadMoreClick = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    if (searchTerm === '') {
      return;
    }

  const getData = async() => {
    try {
      setError(false);
      setIsLoading(true);

      const data:ImageItem[] = await fetchImagesWithSearch(searchTerm.split('/')[0], page);
     
     
      setGalleryImage((prevImages) => [...prevImages, ...data]);
      
       if (data.length < 6) {
                    setHasMoreImages(false);
                }
      }
       catch (error) {
      setError(true);
      toast.error('An error occurred while fetching images')

    } finally {
      setIsLoading(false);
    }
  }
  getData();
}, [page, searchTerm]);
  
  return (
    <div>
      <Toaster/>
      <SearchBox onSubmit={handleSearch} />
      {error && <ErrorMessage/>}
      {galleryImage.length > 0 && <ImageGallery items={galleryImage} onImageClick={openModal } />}
      {isLoading && <Loader />}
      {hasMoreImages && galleryImage.length > 0 && !isLoading && <LoadMoreBtn onClick={handleLoadMoreClick} />}
      <ImageModal  onRequestClose={closeModal} image={selectedImage} />
    </div>
  )
};
