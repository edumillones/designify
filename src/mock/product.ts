import { Description } from "@radix-ui/react-toast";

export interface IProduct {
    id: number;
    title: string;
    price: number;
    img: string;
    description: string[];
}

export const Product: IProduct = {
    id: 1,
    title: "Paquete Basico",
    price: 500,
    description: [
        ""
    ],
    img: "",

}
