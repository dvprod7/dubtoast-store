/* Data model of the products */

export interface Product {
    id: number;
    name: string;
    price: number;
    tags: string[];
    image: string;
    altimg?: string;
    infotitle: string;
    infopack: string;
    packincludes: string[];
    excerpt: string;
}