import React, { useState } from "react";
import documents from './documents.json'

const servicesList = [
    { title: "Нормативно-правовые документы", value: "regulatory_documents" },
    { title: "Учредительные документы", value: "statutory_documents" },
    { title: "Социальные услуги", value: "social_services" },
    { title: "Платные услуги", value: "paid_services" }
];

export default function Documents() {

    const [currentItem, setCurrrentItem] = useState(servicesList[0]);

    return (
        <div className="container-0" id="documents">
            <div className="services-hover">
                <h1 className="name-services">Документы</h1>
            </div>
            <div className="services">
                <div className="services-point">
                    {servicesList.map((listItem) => {
                        let classes = "services-point-item";
                        if (listItem.value === currentItem.value) {
                            classes += " point-is-active";
                        }
                        return (
                            <div
                                className={classes}
                                key={listItem.value}
                                onClick={() => setCurrrentItem(listItem)}
                            >
                                {listItem.title}
                            </div>
                        );
                    })}
                </div>
                <div className="services-list">
                    {documents[currentItem.value].map((obj) => {
                        return (
                            <div key={obj} className="services-list-point">
                                <a href={`../${currentItem.value}/${obj}`} className="services-title">{obj}</a>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}