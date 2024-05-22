import SectionHeading from "../SectionHeading/SectionHeading"
import feachurdImg from "../../../public/home/featured.jpg"
import "./Feachurd.css"

const Feachurd = () => {
    return (
        <div className=" relative text-white  bg-fixed feachurd-bg ">
            <SectionHeading heading='FROM OUR MENU ' subHeading='---Check it out---' />
            <div className="flex justify-center relative z-10   items-center gap-14 lg:px-48 ">
                <div>
                    <img src={feachurdImg} alt="" />
                </div>
                <div className="lg:pb-24">
                    <p>March 20, 2023 WHERE CAN I GET SOME? Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className="btn btn-outline border-0 border-b-4 text-white">Default</button>
                </div>
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-50 "></div>
        </div>
    )
}

export default Feachurd