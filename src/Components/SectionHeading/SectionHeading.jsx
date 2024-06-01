

const SectionHeading = ({ heading, subHeading ,w}) => {
    return (
        <div className={`mx-auto text-center ${w ? w : 'w-4/12'} `}> 
            <p className="text-[#D99904] py-4 text-xl font-normal">{subHeading}</p>
            <h3 className=" mb-10  py-8 border-gray-300  border-y font-normal text-[#151515] text-4xl">{heading}</h3>
        </div>
    )
}

export default SectionHeading