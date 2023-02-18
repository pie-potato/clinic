import React from "react";
import { useState } from 'react';
import servicesData from "./servicesData.json";


const servicesList = [{title: "Специалисты", value: "specialists"}, {title: "Физиолечение", value: "physiotherapy"}]

export default function Services() {
    
    

    const [currentItem, setCurrrentItem] = useState(servicesList[0])

    const changeListItemHandle = (item) => {
        setCurrrentItem(item)
    }

    return <>
        <div className="container-0">
            <div className="services">
                <h1 className="name-services">Услуги</h1>
                <button className="button-services">ЗАПИСАТЬСЯ</button>
            </div>
            <div className="services">
                <div className="services-point">
                    {servicesList.map(listItem => {
                        let classes = "services-point-item"
                        if (listItem.value === currentItem.value) {
                            classes += " point-is-active"
                        }
                        return <div className={classes} key={listItem.value} onClick={() => changeListItemHandle(listItem)}>{listItem.title}</div>
                    })}
                </div>
                <div className="services-list">  
                    {servicesData[currentItem.value].map(obj => {
                        return (<div className="services-list-point">
                                <p className="services-title">{obj.title}</p>
                                <p className="services-price">{obj.price}</p>
                                </div>)
                    })}
                </div>
            </div>
            
        </div>
    </>;
}