import { useEffect, useState } from "react"
import SectionHeading from "../SectionHeading/SectionHeading"
import MenuItem from "../../sheard/MenuItem/MenuItem"


const PopulerMenu = () => {

    const [menu, setMenu] = useState([])

    useEffect(() => {
        fetch("menu.json")
        .then(res=> res.json())
        .then(data=> {
            const populerItem = data.filter(item => item.category === "popular")
            setMenu(populerItem)
        })

    }, [])
    console.log(menu);
    return (
        <div>
            <SectionHeading heading='FROM OUR MENU ' subHeading='---Check it out---' />
            <div>
                {menu.map(item => <MenuItem key={item._id} item={item}/>)}
            </div>
        </div>
    )
}

export default PopulerMenu