import { IItem } from "../../model/Item";
import { List } from 'antd';


const Item = ({item}: {item: IItem}) => {
  let thumbnail = item?.links[0]?.href;
  return (
     <div className="item-data">
        <img src={thumbnail} className='item-image' alt="thumbnail" />
        <div style={{width: '100%'}}>
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
        </div>
     </div>
  );
};

export default Item;