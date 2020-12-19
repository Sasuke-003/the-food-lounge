import React, { useState } from "react";
import "./Home.css";

import DisplayItem from "../../components/displayitem/DisplayItem";

import DisplayClothing from "../../components/displayclothing/DisplayClothing";
import OrderStepper from "../../components/orderStepper/OrderStepper";

function Home() {
    const [name, setname] = useState("");

    const [items, setItems] = useState([
        { itemName: "Nike Neon II", itemImage: "nike1.png", itemType: "Running", itemCompany: "Nike", itemColor: "yellow" },
        { itemName: "Nike Phantom", itemImage: "nike2.png", itemType: "Gym", itemCompany: "Nike", itemColor: "red" },
        { itemName: "Nike Mercurial", itemImage: "nike3.png", itemType: "Casual", itemCompany: "Nike", itemColor: "pink" },
        { itemName: "Nike Superfly", itemImage: "nike4.png", itemType: "Women Running", itemCompany: "Nike", itemColor: "blue" },
        { itemName: "Nike Neon II", itemImage: "crocs1.png", itemType: "Clogs", itemCompany: "Crocs", itemColor: "green" },
        { itemName: "Nike Neon II", itemImage: "nike1.png", itemType: "Running", itemCompany: "Nike", itemColor: "yellow" },
        { itemName: "Nike Phantom", itemImage: "nike2.png", itemType: "Gym", itemCompany: "Nike", itemColor: "red" },
        { itemName: "Nike Mercurial", itemImage: "nike3.png", itemType: "Casual", itemCompany: "Nike", itemColor: "pink" },
        { itemName: "Nike Superfly", itemImage: "nike4.png", itemType: "Women Running", itemCompany: "Nike", itemColor: "blue" },
        { itemName: "Nike Neon II", itemImage: "crocs1.png", itemType: "Clogs", itemCompany: "Crocs", itemColor: "green" },
        { itemName: "Nike Neon II", itemImage: "nike1.png", itemType: "Running", itemCompany: "Nike", itemColor: "yellow" },
        { itemName: "Nike Phantom", itemImage: "nike2.png", itemType: "Gym", itemCompany: "Nike", itemColor: "red" },
        { itemName: "Nike Mercurial", itemImage: "nike3.png", itemType: "Casual", itemCompany: "Nike", itemColor: "pink" },
        { itemName: "Nike Superfly", itemImage: "nike4.png", itemType: "Women Running", itemCompany: "Nike", itemColor: "blue" },
        { itemName: "Nike Neon II", itemImage: "crocs1.png", itemType: "Clogs", itemCompany: "Crocs", itemColor: "green" },
        { itemName: "Nike Neon II", itemImage: "nike1.png", itemType: "Running", itemCompany: "Nike", itemColor: "yellow" },
        { itemName: "Nike Phantom", itemImage: "nike2.png", itemType: "Gym", itemCompany: "Nike", itemColor: "red" },
        { itemName: "Nike Mercurial", itemImage: "nike3.png", itemType: "Casual", itemCompany: "Nike", itemColor: "pink" },
        { itemName: "Nike Superfly", itemImage: "nike4.png", itemType: "Women Running", itemCompany: "Nike", itemColor: "blue" },
        { itemName: "Nike Neon II", itemImage: "crocs1.png", itemType: "Clogs", itemCompany: "Crocs", itemColor: "green" },
    ]);
    const [cloth, setCloth] = useState([
        {
            itemName: "FC Barcelona",
            itemImage: "barcelona.png",
            itemLogo: "barcelonalogo.png",
            itemCompany: "Nike",
            itemColor: "blue",
        },
        { itemName: "Juventus", itemImage: "juventus.png", itemLogo: "juventuslogo.png", itemCompany: "Adidas", itemColor: "red" },
        {
            itemName: "Real Madrid",
            itemImage: "realmadrid.png",
            itemLogo: "realmadridlogo.png",
            itemCompany: "Adidas",
            itemColor: "green",
        },
        {
            itemName: "Liverpool",
            itemImage: "liverpool.png",
            itemLogo: "liverpoollogo.png",
            itemCompany: "NewBalance",
            itemColor: "yellow",
        },
        {
            itemName: "FC Barcelona",
            itemImage: "barcelona.png",
            itemLogo: "barcelonalogo.png",
            itemCompany: "Nike",
            itemColor: "blue",
        },
        { itemName: "Juventus", itemImage: "juventus.png", itemLogo: "juventuslogo.png", itemCompany: "Adidas", itemColor: "red" },
        {
            itemName: "Real Madrid",
            itemImage: "realmadrid.png",
            itemLogo: "realmadridlogo.png",
            itemCompany: "Adidas",
            itemColor: "green",
        },
        {
            itemName: "Liverpool",
            itemImage: "liverpool.png",
            itemLogo: "liverpoollogo.png",
            itemCompany: "NewBalance",
            itemColor: "yellow",
        },
        {
            itemName: "FC Barcelona",
            itemImage: "barcelona.png",
            itemLogo: "barcelonalogo.png",
            itemCompany: "Nike",
            itemColor: "blue",
        },
        { itemName: "Juventus", itemImage: "juventus.png", itemLogo: "juventuslogo.png", itemCompany: "Adidas", itemColor: "red" },
        {
            itemName: "Real Madrid",
            itemImage: "realmadrid.png",
            itemLogo: "realmadridlogo.png",
            itemCompany: "Adidas",
            itemColor: "green",
        },
        {
            itemName: "Liverpool",
            itemImage: "liverpool.png",
            itemLogo: "liverpoollogo.png",
            itemCompany: "NewBalance",
            itemColor: "yellow",
        },
    ]);
    return (
        <div className='home'>
            <div className='home__top'>
                <img src='/assets/images/home.png' alt='oops'></img>
            </div>
            <div className='home__itemsContainer'>
                <div className='home__shoes'>
                    {" "}
                    {items.map(({ itemName, itemImage, itemType, itemCompany, itemColor }) => (
                        <DisplayItem
                            key={itemName}
                            itemImage={"/assets/images/" + itemImage}
                            itemName={itemName}
                            itemType={itemType}
                            itemCompany={itemCompany}
                            itemColor={itemColor}
                        />
                    ))}
                </div>
                <div className='home__tShirts'>
                    {cloth.map(({ itemName, itemImage, itemLogo, itemCompany, itemColor }) => (
                        <DisplayClothing
                            key={itemName}
                            itemImage={"/assets/images/" + itemImage}
                            itemName={itemName}
                            itemLogo={"/assets/images/" + itemLogo}
                            itemCompany={itemCompany}
                            itemColor={itemColor}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Home;
