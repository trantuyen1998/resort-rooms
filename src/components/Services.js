import React, { Component } from 'react'

import Title from './Title';

import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

export default class Services extends Component {
    state = {
        services: [
            {
                icon: <FaCocktail />,
                title: "Free coktails",
                info: ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. iste praesentium earum'
            },
            {
                icon: <FaHiking />,
                title: "Free coktails",
                info: ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. iste praesentium earum'
            },
            {
                icon: <FaShuttleVan />,
                title: "Free coktails",
                info: ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. iste praesentium earum'
            },
            {
                icon: <FaBeer />,
                title: "Free coktails",
                info: ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. iste praesentium earum'
            },

        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="Services" />
                <div className="services-center">
                    {this.state.services.map((item, index) => {
                        return <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
                </div>
            </section>
        )
    }
}
