import Collection, { ICollection } from '../model/Collection';
import Item, { IItem } from '../model/Item';

export interface INasaService {
    search(query: any, yearStart: number, yearEnd: number): Promise<ICollection>;
    getJsonImages(item: IItem): Promise<IItem>;
}

const MEDIA_TYPE = "media_type=image"

const NasaService = (): INasaService => {
    return {
        async search(query: any, yearStart: number, yearEnd: number){
            let queryString = `&q=${query}`;
            if(yearStart){
                queryString += `&year_start=${yearStart}`
            }
            if(yearEnd){
                queryString += `&year_end=${yearEnd}`
            }
            const requestOptions = {
                method: 'GET',
                headers: {
                'Content-Type': 'application/json'
                }
            };
            let response = await fetch(`${process.env.REACT_APP_NASA_API}search?${MEDIA_TYPE}${queryString}`, requestOptions);

            const jsonResponse = await response.json();

            var result = Collection(jsonResponse?.collection);
            let list = result?.items?.map( (item: any) =>{
                let object = Item(item);
                return object;
            });
            result.items = list;
            return result;
        },

        async getJsonImages(item: IItem){
            const requestOptions = {
                method: 'GET',
                headers: {
                'Content-Type': 'application/json'
                }
            };
            let response = await fetch(item?.href, requestOptions);
            let jsonResponse: string[]  = await response.json();
            item.images = jsonResponse;
            return Item(item);
        }
    }
};

export default NasaService;