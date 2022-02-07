import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import Categories from '../showCategories/Categories';

const Editproduct = (props:any) => {
    //useState
    const [bookname, setBookname] = useState(String);
    const [publisher, setPublisher] = useState(String);
    const [description, setDescription] = useState(String);
    const [publishyear, setPublishyear] = useState(Number);
    const [price, setPrice] = useState(Number);
    const [writer, setWriter] = useState(String);
    const [tel, setTel] = useState(String);
    const [contact, setContact] = useState(String);
    const [img, setImg] = useState(String);
    const [category, setCategory] = useState<any>([]);
    const [bookid, setBookid] = useState<any>();
    const [oldimg, setOldimg] = useState(String);
    //const [check, setCheck] = useState<any>([])
    //const [isCheck, setIscheck] = useState<boolean>(false);
    //get method
    const [categories, setCategories] = useState([]);
    //Data Props
    const bookdata1 = {
        bookname: bookname,
        publisher: publisher,
        desc: description,
        publishyear: publishyear,
        price: price,
        writer: writer,
        tel: tel,
        contact: contact,
        img: img,
        category: category
    }
    const bookdata2 = {
        bookname: bookname,
        publisher: publisher,
        desc: description,
        publishyear: publishyear,
        price: price,
        writer: writer,
        tel: tel,
        contact: contact,
        img: oldimg,
        category: category
    }

   //event Handle
   const booknameHandleChange = (event:any) => {
       setBookname(event.target.value);
   }
   const publisherHandleChange = (event:any) => {
       setPublisher(event.target.value);
   }
   const descHandleChange = (event:any) => {
       setDescription(event.target.value);
   }
   const publishyearHandleChange = (event:any) => {
       setPublishyear(event.target.value);
   }
   const priceHandleChange = (event:any) => {
       setPrice(event.target.value);
   }
   const writerHandleChange = (event:any) => {
       setWriter(event.target.value);
   }
   const telHandleChange = (event:any) => {
       setTel(event.target.value);
   }
   const contactHandleChange = (event:any) => {
       setContact(event.target.value);
   }
   //event Handle
   const imgHandleChange = (event:any) => {
    setImg(event.target.value);
   }
//    const categoryHandleChange = (event:any) => {
//        setCategory(event.target.value);
//    }
   const checkHandleChange = (event:any) => {
    let newArray = [...category, event.target.value];
    if (category.includes(event.target.value)) {
        newArray = newArray.filter((cate:any) => cate !== event.target.value);
    }
    setCategory(newArray);
    }
   //send Data via REST Api
   const saveBook = (event:any) => {
       event.preventDefault();
       if(img === ""){
        console.log(bookdata2);
        axios
        .put(`${process.env.REACT_APP_API}/updateproduct/${bookid}`, bookdata2)
        .then(response => {
             Swal.fire({
                 title: "Updated",
                 text: "update user data success!!",
                 icon: "success"
             }).then((result) => {
                 if(result.isConfirmed){
                     window.location.reload();
                 }
             })
        })
        .catch(error => {
            Swal.fire('Something went wrong!',error.response.data.err,'error');
        })
       }else{
        console.log(bookdata1);
        axios
       .put(`${process.env.REACT_APP_API}/updateproduct/${bookid}`, bookdata1)
       .then(response => {
            Swal.fire({
                title: "Updated",
                text: "update user data success!!",
                icon: "success"
            }).then((result) => {
                if(result.isConfirmed){
                    window.location.reload();
                }
            })
       })
       .catch(error => {
           Swal.fire('Something went wrong!',error.response.data.err,'error');
       })
       }
       console.log("api is => ", process.env.REACT_APP_API);
   }
   // fetch Categories
   const fetchCategories = () => {
       axios
       .get(`${process.env.REACT_APP_API}/getcategory`)
       .then(response => {
           setCategories(response.data)
       })
       .catch(error => {
           alert(error)
       })
   }

   //use effect
   useEffect(() => {
        // fetchcategory data
        fetchCategories()
        // check image
        // fetch Product Data
        const fetchData = () => {
            axios.get(`${process.env.REACT_APP_API}/getoneproduct/${props.match.params._id}`)
            .then(response => {
                console.log(response.data);
                const bookname = response.data.bookname;
                setBookname(bookname);
                const publisher = response.data.publisher;
                setPublisher(publisher);
                const desc = response.data.desc;
                setDescription(desc);
                const publishyear = response.data.publishyear;
                setPublishyear(publishyear);
                const price = response.data.price;
                setPrice(price);
                const writer = response.data.writer;
                setWriter(writer);
                const tel = response.data.tel;
                setTel(tel);
                const contact = response.data.contact;
                setContact(contact);
                const img = response.data.img;
                setOldimg(img);
                const category = response.data.category;
                setCategory(category);
                const bookid = response.data._id;
                setBookid(bookid);
            })
            .catch(error => {
                alert(error)
            })
        }
        fetchData();
        // eslint-disable-next-line
   },[])

   //--------------------------------------------------------------------------

    return (
        <div className="container ms-3 ps-3 mb-5">
            {JSON.stringify(bookdata1)}
            <h1><strong>Edit Product</strong></h1>
            <form onSubmit={saveBook}>
                <div className="form-group">
                <div className="row mb-3  mt-5">
                    <div className="col-1">
                        <label className="form-label">BookName</label>
                    </div>
                    <div className="col-4">
                        <input type="text" className="form-control" 
                        value={bookname} 
                        onChange={booknameHandleChange}></input>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-1">
                        <label className="form-label">Describtion</label>
                    </div>
                    <div className="col-4">
                        <textarea className="form-control" 
                        value={description} 
                        onChange={descHandleChange}></textarea>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-1">
                        <label className="form-label">Price-Bath</label>
                    </div>
                    <div className="col-4">
                        <input type="text" className="form-control" 
                        value={price} 
                        onChange={priceHandleChange}></input>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-1">
                        <label className="form-label">Publisher</label>
                    </div>
                    <div className="col-4">
                        <input type="text" className="form-control" 
                        value={publisher} 
                        onChange={publisherHandleChange}></input>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-1">
                        <label className="form-label">PublishYear</label>
                    </div>
                    <div className="col-4">
                        <input type="text" className="form-control" 
                        value={publishyear} 
                        onChange={publishyearHandleChange}></input>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-1">
                        <label className="form-label">Writer</label>
                    </div>
                    <div className="col-4">
                        <input type="text" className="form-control" 
                        value={writer} 
                        onChange={writerHandleChange}></input>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-1">
                        <label className="form-label">Tel.</label>
                    </div>
                    <div className="col-4">
                        <input type="text" className="form-control" 
                        value={tel} 
                        onChange={telHandleChange}></input>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-1">
                        <label className="form-label">Contact</label>
                    </div>
                    <div className="col-4">
                        <textarea className="form-control" 
                        value={contact} 
                        onChange={contactHandleChange}></textarea>
                    </div>
                </div>
                {/* <div className="row mb-3">
                <div className="col-1">
                        <label className="form-label text-danger">Warning!!</label>
                    </div>
                    <div className="col-4">
                        <input type="text" className="form-control" 
                        placeholder="Always choose image before Update !!"
                        disabled
                        ></input>
                    </div>
                    
                </div>
                <div className="row mb-3">
                <div className="col-1">
                        <label className="form-label text-danger">Warning!!</label>
                    </div>
                    <div className="col-4">
                        <input type="text" className="form-control " 
                        value={`Your previous Image is : ${oldimg}`}
                        disabled readOnly
                        ></input>
                    </div>
                    
                </div> */}
                <div className="row mb-3">
                    <div className="col-1">
                        <label className="form-label">Image</label>
                    </div>
                    <div className="col-4">
                        <input className="form-control" type="file" 
                        value={img} 
                        onChange={imgHandleChange}
                        ></input>
                    </div>
                </div>
                {/* <div className="row mb-3 me-0">
                    <div className="col-1">
                        <label className="form-label">Category</label>
                    </div>
                    <div className="col-3">

                        <select className="form-select" value={category} 
                        onChange={categoryHandleChange}>
                            <option defaultValue={category}></option>
                            {categories.map((item:any, index)=>
                                <option key={index} value={item.categoryname}>{item.categoryname}</option>
                            )}
                        </select>
                    </div>
                    <div className="col-1">
                        <button type="button" className="btn btn-success">+</button>
                    </div>
                </div> */}
                <div className="row mb-3 me-0">
                    <div className="col-1">
                        <label className="form-label">Category</label>
                    </div>
                    <div className="col-3">
                    {categories.map((item1:any, idx1:any) =>
                        <div className="form-check" key={idx1}>
                        <input className="form-check-input" type="checkbox" 
                        value={item1._id} 
                        id={item1._id} 
                        onChange={checkHandleChange}
                        //checked={}
                        >    
                        </input>
                        <label className="form-check-label" htmlFor={item1._id}>
                            {item1.categoryname}
                        </label>        
                        </div>
                    )}
                    </div>
                </div>
                <div className="">
                    <button type="submit" className="btn btn-primary">Update</button>
                </div>
                </div>
            </form>
        </div>
    )
}

export default Editproduct


