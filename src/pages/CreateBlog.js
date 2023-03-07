import React, { useEffect } from 'react'
import { useState } from 'react'
import Navbar2 from '../components/common/Navbar2'
import Breadcrumb from '../components/common/Breadcrumb'
import ContactForm from '../components/contact/contactform/ContactForm'
import Maps from '../components/contact/ContactMap'
import Footer from '../components/common/Footer'
import ScrollTop from '../components/common/ScrollTop'
import { FiUser, FiBookOpen, FiEdit2 } from 'react-icons/fi'
import { FaRegEnvelope } from 'react-icons/fa'
import { supabase } from '../supabase'
export default function CreateBlog() {
    const [images, setImages] = useState([]);
    const [blogTitle, setBlogTitle] = useState("");
    const [description, setDescription] = useState("");
    const [descriptionAr, setDescriptionAr] = useState("");
  
    const handleImageUpload = async (e) => {
      const uploadedImages = e.target.files;
      for (let i = 0; i < uploadedImages.length; i++) {
        try {
          let blob = await fetch(URL.createObjectURL(uploadedImages[i])).then(r => r.blob());
          console.log(uploadedImages[i])
          let { data } = await supabase.storage
            .from('blogs')
            .upload(`images/${uploadedImages[i].name}`, blob)
          setImages([...images, data.url]);
          console.log(data);
        } catch (error) {
          console.error(error);
        }
      }
    };
  
    const handleImageDelete = (imageIndex) => {
      const updatedImages = [...images];
      updatedImages.splice(imageIndex, 1);
      setImages(updatedImages);
    };
  
    useEffect(() => {
      console.log(images);
    }, [images])
  
    async function submitBlog(e) {
      e.preventDefault();
      try {
        const blog = await supabase.from('blogs').insert({
          title: blogTitle,
          description,
          description_ar: descriptionAr,
          images
        });
        console.log(blog);
      } catch (error) {
        console.error(error);
      }
    }
  return (
    <main className="contact">
                <Navbar2 />
                <Breadcrumb title="Create blog" />
                <section className="contact-area padding-top-140px padding-bottom-120px">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                            <div className="team-form padding-top-45px">
                    <div className="user-form">
                        <div className="section-heading">
                            <h5 className="section__meta">Create blog</h5>
                            {/* <h2 className="section__title font-size-20 font-weight-medium"></h2> */}
                        </div>
                        <div className="contact-form-action mt-4">
                        <form>
                                <div className="input-box">
                                    <div className="form-group">
                                        <input className="form-control" type="text" id="name" name="name" placeholder="Title" />
                                        <FiBookOpen className="input-icon" />
                                    </div>
                                </div>
                                <div className="input-box">
                                    <div className="form-group">
                                        <input className="form-control" type="email" id="email" name="email" placeholder="العنوان" />
                                        <FiBookOpen className="input-icon" />
                                    </div>
                                </div>
                                <div className="input-box">
                                    <div className="form-group">
                                        <textarea className="message-control form-control" name="message" placeholder="Description"></textarea>
                                        <FiEdit2 className="input-icon" />
                                    </div>
                                </div>
                                <div className="input-box">
                                    <div className="form-group">
                                        <textarea className="message-control form-control" name="message" placeholder="وصف"></textarea>
                                        <FiEdit2 className="input-icon" />
                                    </div>
                                </div>
                                <div className="input-box">
                                    <div className="form-group">
                                        <label htmlFor="image-upload">Upload Images</label>
                                        <input type="file" id="image-upload" multiple onChange={handleImageUpload} />
                                    </div>
                                </div>
                                <div className="container">
  <div className="row">
    {images.map((image, index) => (
      <div className="image-preview col-lg-6" style={{height: '20rem', display: 'flex', flexDirection: 'column', justifyContent: 'center'}} key={index}>
        <img src={image} style={{maxWidth: '100%', maxHeight: '100%', paddingBottom: '1rem'}} alt="Preview" />
        <button
          className="delete-button"
          style={{
            position: 'absolute',
            top: '0',
            // right: '0',
            border: 'none',
            // background: 'none',
            backgroundColor: '#FFFFFF56',
            width: '2rem',
            height: '3rem',
            fontSize: '2rem',
            color: 'black',
            padding: '0',
            borderRadius: '0'
          }}
          onClick={() => handleImageDelete(index)}
        >
          &times;
        </button>
      </div>
    ))}
  </div>
</div>

                                <div className="btn-box">
                                    <div className="form-group text-center mb-0">
                                        <button className="template-btn border-0 w-100" type="submit">Submit</button>
                                    </div>
                                </div>
                                
                            </form>
                        </div>
                    </div>
                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <ScrollTop />
                <Footer />
            </main>
    )
}
