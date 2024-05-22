import MenuItem from "../../sheard/MenuItem/MenuItem"

const Manu = ({item}) => {
   

    return (
        <div>
             <div className=" grid gap-8 grid-cols-1 mb-10 md:grid-cols-2">
                {item.map(item => <MenuItem key={item._id} item={item}/>)}
            </div>
        </div>
    )
}

export default Manu