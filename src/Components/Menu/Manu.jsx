import Cover from "../../sheard/Cover/Cover"
import MenuItem from "../../sheard/MenuItem/MenuItem"
import { Link } from 'react-router-dom'
const Manu = ({ item , img , title, des }) => {

    return (
        <div className="my-20">
            {title && <Cover img={img} title={title} des={des} />}
            
            <div className=" grid gap-8 grid-cols-1 mb-10 md:grid-cols-2">
                {item.map(item => <MenuItem key={item._id} item={item} />)}
            </div>
            <Link to={`/ourShop/${title}`} className="text-center ">
                <button className="btn btn-outline mx-auto border-0 border-b-4 text-[#BB8506]">ORDER YOUR FAVOURITE FOOD </button>
            </Link>
        </div>
    )
}

export default Manu