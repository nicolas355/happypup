import Truck from "../assets/icons/Truck";
import Ticket from "../assets/icons/Ticket";
import Support from "../assets/icons/Support";
import { FC } from 'react';

interface Newlleter {
    icon: FC; 
    title: string;
    sub: string;
}

const newlletter: Newlleter[] = [
    {
        icon: Truck,
        title: "100% Free Delivery", // Corregido "Delivary" a "Delivery"
        sub: "ALL ORDERS OVER $59",
    },
    {
        icon: Ticket,
        title: "100% Back to money", // Corregido "Delivary" a "Delivery"
        sub: "ALL ORDERs",
    },
    {
        icon: Support,
        title: "Support Customer", // Corregido "Delivary" a "Delivery"
        sub: "SUPPORT 24/7",
    },
];

export { newlletter };