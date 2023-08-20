/* Data model of the products */

export interface Product {
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