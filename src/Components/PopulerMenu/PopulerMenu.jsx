
import SectionHeading from "../SectionHeading/SectionHeading"
import MenuItem from "../../sheard/MenuItem/MenuItem"
import useMenu from "../../hooks/useMenu"




const PopulerMenu = () => {
    
    const [menu] = useMenu()
    const populer = menu.filter(item => (
        item.category === "popular"
    ))

    return (
        <div>
            <SectionHeading heading='FROM OUR MENU ' subHeading='---Check it out---' />
            <div className=" grid gap-8 grid-cols-1 mb-10 md:grid-cols-2">
                {populer.map(item => <MenuItem key={item._id} item={item}/>)}
            </div>
        </div>
    )
}

export default PopulerMenu