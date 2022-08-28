import { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../core/Hooks';
import { fetchCollection } from '../../core/CollectionSlice';
import { itemSelected } from '../../core/ItemSlice';
import ParameterFields from "../components/ParameterFields";
import { RootState } from '../../core/Store';
import { IItem } from '../../model/Item';
import Item from '../components/Item';
import { useNavigate } from "react-router-dom";
import Page from './Page';

var Loader = require('react-loader');

const SearchPage = () => {

    const collection = useAppSelector((state: RootState) => { return state.collection });
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [loaded, setLoaded] = useState(true);

    const renderCollection = () => {
        return collection?.items?.map((item: IItem) => {
            return <div onClick={() => {
                dispatch(itemSelected(item));
                navigate("/show");
            }}>
            <Item item={item} /></div>
        })
    }

    const fetchData = async (parameters: any) => {
        setLoaded(false);
        let response = await dispatch(fetchCollection(parameters));
        if(response){
            setLoaded(true);
        }
    };

    return (
    <Page title={"Search Page"}>
        <div className='home'>
            <div>
                <ParameterFields searchData={fetchData} />
                <Loader loaded={loaded}>
                <div>{renderCollection()}</div>
                </Loader>
            </div>
        </div>
    </Page>
    );
  };
  
  export default SearchPage;