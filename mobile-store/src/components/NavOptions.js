import React,{useState, useEffect} from 'react'
import NavCard from "./NavCard.js"
import "../styles/NavOptions.css"

const NavOptions = ({ miPhones, redmiPhones, tv, laptops, fitnessAndLifeStyle, home, audio, accessories }) => {
    const [miPhoneToggle, setMiPhoneToggle] = useState(false);
    const [redmiPhonesToggle, setRedmiPhonesToggle] = useState(false);
    const [tvToggle, setTvToggle] = useState(false);
    const [laptopsToggle, setLaptopsToggle] = useState(false);
    const [fitnessAndLifeStyleToggle, setFitnessAndLifeStyleToggle] = useState(false);
    const [homeToggle, setHomeToggle] = useState(false);
    const [audioToggle, setAudioToggle] = useState(false);
    const [accessoriesToggle, setAccessoriesToggle] = useState(false);

    useEffect(() => {
        if(window.location.pathname === "/miphones"){
            return setMiPhoneToggle(true)
        }
        if(window.location.pathname === "/redmiphones"){
            return setRedmiPhonesToggle(true)
        }
        if(window.location.pathname === "/tv"){
            return setTvToggle(true)
        }
        if(window.location.pathname === "/laptops"){
            return setLaptopsToggle(true)
        }
        if(window.location.pathname === "/lifestyle"){
            return setFitnessAndLifeStyleToggle(true)
        }
        if(window.location.pathname === "/home"){
            return setHomeToggle(true)
        }
        if(window.location.pathname === "/audio"){
            return setAudioToggle(true)
        }
        if(window.location.pathname === "/accessories"){
            return setAccessoriesToggle(true)
        }

    }, [])
    return (
        <div className="navOptions" >
            {miPhoneToggle ? miPhones.map((item) => (
                <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
            )) : null}
            {redmiPhonesToggle ? miPhones.map((item) => (
                <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
            )) : null}
            {tvToggle ? miPhones.map((item) => (
                <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
            )) : null}
            {laptopsToggle ? miPhones.map((item) => (
                <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
            )) : null}
            {fitnessAndLifeStyleToggle ? miPhones.map((item) => (
                <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
            )) : null}
            {homeToggle ? miPhones.map((item) => (
                <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
            )) : null}
            {audioToggle ? miPhones.map((item) => (
                <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
            )) : null}
            {accessoriesToggle ? miPhones.map((item) => (
                <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
            )) : null}
        </div>
    )
}

export default NavOptions