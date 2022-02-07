import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';

function Singleproduct(props:any) {
    //get product
    const [product, setProduct] = useState<any>()
    const [categories, setCategories] = useState<any[]>([]);
    const [name, setName] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    
    const filterArray = () => {
        let pro = product.category;   
        for(var i=0;i<pro.length;i++){
            for(var j=0;j<categories.length;j++){
                if(pro[i] === categories[j]._id){
                    let newAr = name;    
                    newAr.push(categories[j].categoryname)
                    setName(newAr);
                }
            }
        }
    }

    // fetch Categories
    const fetchCategories = async () => {
    await axios
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
        fetchCategories();
        // fetch Data
        const fetchData = async () => {
            await axios.get(`${process.env.REACT_APP_API}/getoneproduct/${props.match.params._id}`)
            .then(response => {
                return response.data;
            }).then(data => {
                setProduct(data);
                setLoading(false);
            })
            .catch(error => {
                alert(error)
            })
        }
        fetchData();
        if(product !== undefined){
            filterArray();
            console.log("name sended");
        }
        //filterArray();
        
        // eslint-disable-next-line
    },[loading])

    
    console.log(product);
    console.log(name);



    return (
        <div>
            {product &&<div className="container">
                <div className="row">
                    <div className="col-sm-4 p-5 bg-secondary text-white">
                        <img src={`/images/${product.img}`} className="img-fluid" alt="..."/>
                    </div>
                    <div className="col-sm-8 p-5 bg-dark text-white">
                        <h2 className="display-3">{product.bookname}</h2>
                        <hr />
                        <h4 className="d-inline p-2">Publisher: </h4>
                        <h4 className="d-inline p-2">{product.publisher}</h4>
                        <br /><br />
                        <h4 className="d-inline p-2">Year: </h4>
                        <h4 className="d-inline p-2">{product.publishyear}</h4>
                        <br /><br />
                        <h4 className="d-inline p-2">Writer: </h4>
                        <h4 className="d-inline p-2">{product.writer}</h4>
                        <br /><br />
                        <h4 className="d-inline p-2">ISBN: </h4>
                        <h4 className="d-inline p-2">...</h4>
                        <br /><br />
                        <h4 className="p-2">Description: </h4>
                        <h4 className="p-2">{product.desc}</h4>
                        <br />
                        {/* <div className="d-grid gap-2 d-md-block">
                        {product.category.map((item:any, index:any) => (
                            <button className="btn btn-primary m-2" type="button" key={index}>
                                {item}
                            </button>
                        ))}
                        </div> */}
                        <div className="d-grid gap-2 d-md-block">
                        {name.map((item:any, index:any) => (
                            <button type="button" className="btn btn-primary m-2" key={index} disabled>
                                {item}
                            </button>
                        ))}
                        </div>
                        <br />
                        <h4 className="d-inline p-2">On Sale at: </h4>
                        <h4 className="d-inline p-2">{new Date(product.createdAt).toLocaleString()}</h4>
                        <br /><hr />
                        <h2 className="text-end">{`${product.price} Bath`}</h2>
                        <hr />
                        <div>
                            <button type="button" className="btn btn-light btn-lg float-end">Buy Now</button>
                        </div>
                        
                    </div>
                </div>
            </div>
            }
        </div>
    )
}

export default Singleproduct
