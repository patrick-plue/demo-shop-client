import { Product } from '../routes/Products';
export default function ProductPreview({ product }: { product: Product }) {
    return (
        <div>
            <p>{product.name}</p>
        </div>
    );
}
