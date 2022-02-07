import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

export default function AddProduct() {
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
     //const [category, setCategory] = useState(String);
     const [check, setCheck] = useState<any>([])
     //get method
     const [categories, setCategories] = useState([]);
     //Data Props
    const bookdata = {
        bookname: bookname,
        publisher: publisher,
        desc: description,
        publishyear: publishyear,
        price: price,
        writer: writer,
        tel: tel,
        contact: contact,
        img: img,
        category: check
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
    // const categoryHandleChange = (event:any) => {
    //     setCategory(event.target.value);
    // }
    const checkHandleChange = (event:any) => {
        let newArray = [...check, event.target.value];
        if (check.includes(event.target.value)) {
            newArray = newArray.filter((cate:any) => cate !== event.target.value);
        }
        setCheck(newArray);
    }
    //send Data via REST Api
    const saveBook = (event:any) => {
        event.preventDefault();
        console.log(bookdata);
        console.log("api is => ", process.env.REACT_APP_API);
        axios
        .post(`${process.env.REACT_APP_API}/addproduct`, bookdata)
        .then(response => {
            Swal.fire({
                title: "Created",
                text: "add product success!!",
                icon: "success"
            }).then((result) => {
                if(result.isConfirmed){
                    window.location.reload();
                }
            })
            // setBookname("");
            // setPublisher("");
            // setDescription("");
            // setPublishyear(0);
            // setPrice(0);
            // setWriter("");
            // setTel("");
            // setContact("");
            // setImg("");
            // setCheck([]);
        })
        .catch(error => {
            Swal.fire('Something went wrong!',error.response.data.err,'error');
        })
        
    }
    // fetch Data
    const fetchData = () => {
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
        fetchData()
    },[])



    return (
        <div className="container ms-3 ps-3 mb-5">
            {JSON.stringify(bookdata)}
            <h1><strong>Add New Product</strong></h1>
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
                <div className="row mb-3">
                    <div className="col-1">
                        <label className="form-label">Image</label>
                    </div>
                    <div className="col-4">
                        <input className="form-control" type="file" 
                        value={img} 
                        onChange={imgHandleChange}></input>
                    </div>
                </div>
                {/* <div className="row mb-3 me-0">
                    <div className="col-1">
                        <label className="form-label">Category</label>
                    </div>
                    <div className="col-3">

                        <select className="form-select" value={category} 
                        onChange={categoryHandleChange}>
                            <option defaultValue=""></option>
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
                    {categories.map((item:any, index)=>
                    <div className="form-check" key={index}>
                        <input className="form-check-input" type="checkbox" 
                        value={item._id} 
                        id={item._id} 
                        onChange={checkHandleChange}
                        />
                        <label className="form-check-label" htmlFor={item._id}>
                            {item.categoryname}
                        </label>        
                    </div>
                    )}
                    </div>
                </div>
                <div className="">
                    <button type="submit" className="btn btn-primary">Confirm</button>
                </div>
                </div>
            </form>
        </div>
    )
}


