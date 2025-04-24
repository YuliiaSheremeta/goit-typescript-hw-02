import axios from "axios";
import type {ImageItem} from './components/App/App'


type UnsplashResponse = {
    results: ImageItem[];
};

export const fetchImagesWithSearch = async(image:string, currentPage:number) : Promise <ImageItem[]>=> {

    const response = await axios.get<UnsplashResponse>('https://api.unsplash.com/search/photos', {
        params: {
            query: image,
            per_page: 6,
            page: currentPage,
            client_id: 'Z9jVQDRBlyL_g9dl05CLN1H76YpBoBAhL1lEhm63P-U',
        },
    });
    
    return response.data.results as ImageItem[];
    
};