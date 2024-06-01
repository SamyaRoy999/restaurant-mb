
import { IoBagAdd } from "react-icons/io5";
import { useForm } from "react-hook-form"

import SectionHeading from "../../../Components/SectionHeading/SectionHeading";
import useAxiosPublicSecour from "../../../hooks/useAxiosPublicSecour";
import useAxiosSecure from '../../../hooks/useAxiosSecure'
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
import Swal from 'sweetalert2'

const AddItems = () => {

  const {
    register,
    handleSubmit,
  } = useForm()

  const axiosPiublicSecoutr = useAxiosPublicSecour()
  const axiosSecure = useAxiosSecure()
  const onSubmit = async (data) => {

    const {
      recipeName,
      category,
      price,
      recipeDetails,
      image

    } = data;
    // console.log(recipeName, category, price, recipeDetails, image);
    const imageFile = { image: image[0] }

    const res = await axiosPiublicSecoutr.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data"
      }
    })
    if (res.data.success) {
      const addItem = {
        name: recipeName,
        recipe: recipeDetails,
        image: res.data.data.display_url,
        category: category,
        price: parseFloat(price)
      }

      const menuAdd = axiosSecure.post('/menu', addItem)
      console.log(menuAdd.data)

    }
    if (res.data.succes) {
  
      Swal.fire({
        position: "center",
        icon: "success",
        title: "added items has been saved",
        showConfirmButton: false,
        timer: 1500
      });
    }
    console.log(res.data);
  }

  return (

    <div className="flex  w-full items-center justify-center bg-gray-900 bg-cover bg-no-repeat bg-[url('https://i.ibb.co/mCdJQgC/india-republic-day-celebration-digital-art-with-woman-portrait.jpg')]" >
      <div className="rounded-xl my-10 bg-gray-800 bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
        <div className="text-white ">
          <div className="mb-8 flex flex-col items-center">
            <IoBagAdd className=" text-6xl" />
            <SectionHeading heading='ADD AN ITEM' subHeading={'---What\'s new?---'} w='w-7/12 text-[#fff]'></SectionHeading>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4 text-lg w-full">
              <input  {...register("recipeName", { required: true })} className="rounded-3xl  w-full border-none bg-[#E65B56] bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md" type="text" name="recipeName" placeholder="recipeName" required />
            </div>
            <div className="mb-4 text-lg flex flex-col lg:flex-row gap-4">
              <select defaultValue='Category' className=" w-full rounded-3xl border-none bg-[#E65B56] bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md" id="category" name="category"  {...register("category", { required: true })} required>
                <option disabled value='Category' hidden>Category</option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="desserts">Desserts</option>
                <option value="drinks">Drinks</option>

              </select>

              <input  {...register("price", { required: true })} className="rounded-3xl  w-full border-none bg-[#E65B56] bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md" type="text" name="price" placeholder="Price" required />
            </div>

            <div className="mb-4 text-lg">
              <input className="rounded-3xl w-full h-32 border-none bg-[#E65B56] bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md" type="text" name="recipeDetails"  {...register("recipeDetails", { required: true })} placeholder="Recipe Details" required />
            </div>
            <div>
              <input {...register("image", { required: true })} type="file" className="file-input file-input-ghost w-full max-w-xs" />
            </div>
            <div className="mt-8 flex justify-center text-lg text-black">
              <button type="submit" className="rounded-3xl bg-[#E65B56] bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-yellow-600">Add</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddItems

