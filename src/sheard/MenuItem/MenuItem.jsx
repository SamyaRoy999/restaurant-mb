

const MenuItem = ({ item }) => {
    const { name, image, price, recipe } = item
    return (
        <div className=" flex gap-8 text-[#151515] mb-6">
            <img className="w-[120px] rounded-tr-[230px] rounded-br-[230px] rounded-bl-[230px] " src={image} alt="" />
            <div >
                <h3 className=" font-normal text-xl">{name}------------------</h3>                
                <p className="text-base">{recipe}</p>
            </div>
            <p className="text-[#BB8506] text-xl font-normal"> ${price}</p>
        </div>
    )
}

export default MenuItem