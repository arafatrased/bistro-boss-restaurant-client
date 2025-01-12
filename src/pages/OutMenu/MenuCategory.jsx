import Cover from "../../shared/Cover/Cover";
import MenuItem from "../../shared/MenuItem/MenuItem";
import { Link } from 'react-router-dom';


const MenuCategory = ({items, title, img}) => {
    return (
        <div className='pt-8'>
            { title && <Cover img={img} title={title}></Cover>}
            <div className="grid md:grid-cols-2 w-10/12 mx-auto gap-10 mt-16">
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <div className="flex items-center justify-center mb-8"><Link className="" to={`/order/${title}`}>
            <button className="btn btn-outline border-0 border-b-4 mt-8">Order Now</button>
            </Link></div>
        </div>
    );
};

export default MenuCategory;