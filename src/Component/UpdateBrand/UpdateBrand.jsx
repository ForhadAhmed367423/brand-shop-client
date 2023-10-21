import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2'
const UpdateBrand = () => {
    const handleUpdateProduct = event => {

        const product =useLoaderData({params});
        const {brand}= product;

        event.preventDefault();
        
        const form = event.target
        console.log(form)
        const image = form.image.value
        const name = form.name.value
        const brands = form.brand.value
        const type = form.type.value
        const price = form.price.value
        const description = form.description.value
        
        const newProduct ={image, name, brands, price, description, type};
        console.log(newProduct);

        fetch(`https://brand-shop-server-sable-gamma.vercel.app/product/${brand}`, {
            method: 'PUT',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(newProduct)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Product added successfully.',
                    icon:'success',
                    confirmButtonText:'cool',
                    
                })
            }
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
    }
    return (
        <div>
            <div className='lg:px-[160px] lg:py-[100px] md:px-[30px] md:[30px] '>
            <h2 className='text-[60px] text-[#1B3C35] font-medium mb-[10px] '>Update products</h2>
            <p className=' text-[#AEC3BE] text-[18px] font-normal mb-[38px]'>Dolor consectetuer posuere maecenas tempor pede tellus. <br /> Nec eros curae luctus hac elementum penatibus pulvinar <br /> faucibus potenti vestibulum blandit.</p>
            <div className='bg-[#ECEDE8] rounded-[10px] py-[60px] px-[100px] '>
                <form onSubmit={handleUpdateProduct}>
                    <div className=' lg:flex  gap-[50px] mb-8'>
                        <div className='mb-[20px]'>
                            <h6 className='text-[#1B3C35] text-[20px] font-normal mb-2 '>Image</h6>
                            <input className='rounded-[10px] lg:w-[400px] py-[16px] px-[16px] border-2 bg-[transparent] border-[#000000] text-[#1B3C35] outline-none ' type="text" placeholder='image' name='image'/>
                        </div>
                        <div className='mb-[20px]'>
                            <h6 className='text-[#1B3C35] text-[20px] font-normal mb-2 '>Name</h6>
                            <input className='rounded-[10px] lg:w-[400px] py-[16px] px-[16px] border-2 bg-[transparent] border-[#000000] text-[#1B3C35] outline-none' type="text" placeholder='name' name='name'/>
                        </div>
                    </div>
                    <div className='lg:flex  gap-[50px] mb-8'>
                    <div>
                            <h6 className='text-[#1B3C35] text-[20px] font-normal mb-2 '>Brand</h6>
                            <select className='rounded-[10px] lg:w-[400px] py-[16px] px-[16px] border-2 bg-[transparent] border-[#000000] text-[#1B3C35] outline-none' name='brand'>
                                <option value="samsung">Samsung</option>
                                <option value="dell">Dell</option>
                                <option value="logitech">Logitech</option>
                                <option value="amazon">Amazon</option>
                                <option value="apple">Apple</option>
                                <option value="microsoft">Microsoft</option>
                            </select>
                        </div>
                        <div>
                            <h6 className='text-[#1B3C35] text-[20px] font-normal mb-2 '>Type</h6>
                            <select className='rounded-[10px] lg:w-[400px] py-[16px] px-[16px] border-2 bg-[transparent] border-[#000000] text-[#1B3C35] outline-none' name='type'>
                                <option value="mobile">Mobile</option>
                                <option value="Headphone">Headphone</option>
                                <option value="Pc">Pc</option>
                                <option value="mac">Mac</option>
                                <option value="Others">Others</option>
                            </select>
                        </div>
                       
                    </div>
                    <div className='mb-8'>
                        <h6 className='text-[#1B3C35] text-[20px] font-normal mb-2'>Price</h6>
                        <input className='rounded-[10px] lg:w-full py-[16px] px-[16px] border-2 bg-[transparent] border-[#000000] text-[#1B3C35] outline-none' type="number" placeholder='Price' name='price'/>
                    </div>
                    <div className='mb-8'>
                        <h6 className='text-[#1B3C35] text-[20px] font-normal mb-2'>Rating :</h6>
                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400"/>
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" checked/>
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" />
                        </div>
                    </div>
                    <div className='mb-9'>
                        <h6 className='text-[#1B3C35] text-[20px] font-normal mb-2'>Short Description</h6>
                        <input className='rounded-[10px] lg:w-[850px] pt-[16px] pb-[100px] px-[16px] border-2 bg-[transparent] border-[#000000] text-[#1B3C35] outline-none' type="text" placeholder='Short Description' name='description'/>
                    </div>
                </form>
                    <div>
                        <button onClick={handleUpdateProduct} className='px-8 py-4 bg-[#000000] text-white font-semibold text-[18px]'>Update product</button>
                    </div>
            </div>
        </div>
        </div>
    );
};

export default UpdateBrand;