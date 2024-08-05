import { useLoaderData } from 'react-router-dom';
import ProductPreview from '../components/ProductPreview';
export type Product = {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
    categoryId: number;
};

type ProductResult = {
    message: string;
    result: Product[];
};

export function loader() {
    return fetch(import.meta.env.VITE_API_URL + '/products');
}

export default function Products() {
    const { result: products } = useLoaderData() as ProductResult;
    return (
        <div>
            {products.map((product: Product) => (
                <ProductPreview product={product} key={product.id} />
            ))}
        </div>
    );
}
