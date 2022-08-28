import { RootState } from '../../core/Store';
import { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../core/Hooks';
import { List } from 'antd';
import { useNavigate } from "react-router-dom";
import Page from './Page';
import { fetchImages } from '../../core/ItemSlice';

var Loader = require('react-loader');

const IMAGE_SIZE = 'small';

const ShowPage = () => {
    
    const item = useAppSelector((state: RootState) => { return state.item });
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [loaded, setLoaded] = useState(true);

    useEffect(() => {
        getImages();
      }, []); 

    const getImages = async () => {
        if(item){
            setLoaded(false);
            let response = await dispatch(fetchImages(item));
            if(response){
                setLoaded(true);
            }
        }
    }

    const formatDate = (dateString: string) => {
        return new Date(Date.parse(dateString)).toLocaleDateString('en-GB');
    }

    const renderImages = (images: string[]) => {
        if(!images || images.length === 0){
            return <div>No Images</div>;
        }
        let firstImageName = images[0].split('~')[0];
        let filteredList = images.filter(image => (image.includes(`${firstImageName}~${IMAGE_SIZE}`)) 
            || (image.split('~')[0] !== firstImageName && image.includes(IMAGE_SIZE)));
        return filteredList.map(image => {
            return <img src={image} className="image" alt={item?.data[0]?.title} />
        })
    }

    return (
    <Page title={"Show Page"}>
        <div className="item-details">
            <div onClick={() => {
                navigate("/");
            }} className="back-button">
                <img src={process.env.PUBLIC_URL + "back-arrow.png"} 
                style={{ width: '40px', height: '40px', marginRight: '0.5em' }} />
            </div>
        <div>
        {item?.data[0]?.title && 
            <List.Item>
                <List.Item.Meta
                title={"Title"}
                description={item?.data[0]?.title}
                />
            </List.Item>
        }
        {item?.data[0]?.location && 
            <List.Item>
                <List.Item.Meta
                title={"Location"}
                description={item?.data[0]?.location}
                />
            </List.Item>
        }         
        {item?.data[0]?.photographer &&   
            <List.Item>
                <List.Item.Meta
                title={"Photographer"}
                description={item?.data[0]?.photographer}
                />
            </List.Item>
        }
        {item?.data[0]?.description &&   
            <List.Item>
                <List.Item.Meta
                title={"Description"}
                description={item?.data[0]?.description}
                />
            </List.Item>
        }
        {item?.data[0]?.keywords &&  
            <List.Item>
                <List.Item.Meta
                title={"Keywords"}
                description={item?.data[0]?.keywords}
                />
            </List.Item>
        }
        {item?.data[0]?.date_created &&  
            <List.Item>
                <List.Item.Meta
                title={"Date"}
                description={formatDate(item?.data[0]?.date_created)}
                />
            </List.Item>
        }
        </div>
        <Loader loaded={loaded}>
            <div className="image-collection">{renderImages(item?.images)}</div>
        </Loader>
     </div>
     </Page>
    );
  };
  
  export default ShowPage;
