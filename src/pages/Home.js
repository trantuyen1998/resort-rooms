import React from 'react'

import Hero from '../components/Hero';
import Banner from '../components/Banner';
import Services from '../components/Services';


import { Link } from 'react-router-dom';
import FeaturedRooms from '../components/FeaturedRooms';
import Button from '../components/StyledHero';


export default function Home() {
    return(
    <>
        <Hero>
            <Banner title="Lustay Rooms"
                subtitle="Booking rooms starting at $299"
            >
                <Link to="/rooms" className="btn-primary">
                    Our Rooms
            </Link>
            </Banner>
        </Hero>
        <Services/>
        <FeaturedRooms/>
        <Button>
            Helllo
        </Button>
    </>)
}
