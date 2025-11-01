import { Button } from "./ui/button";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./fallbacks/ImageWithFallback";
import type { Product } from "../data/products";

interface ProductCardProps {
  product: Product;
  onLearnMore?: () => void;
}

export function ProductCard({ product, onLearnMore }: ProductCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-xl transition-shadow">
      <div className="aspect-video overflow-hidden bg-slate-100">
        <ImageWithFallback
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-slate-900">{product.name}</h3>
          <Badge variant="secondary" className="ml-2">
            {product.type}
          </Badge>
        </div>
        <p className="text-slate-600 text-sm mb-4">{product.description}</p>
        <div className="space-y-1 text-sm">
          <div className="flex justify-between">
            <span className="text-slate-500">Grade:</span>
            <span className="text-slate-900">{product.grade}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-500">Thickness:</span>
            <span className="text-slate-900">{product.thickness}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-500">Length:</span>
            <span className="text-slate-900">{product.length}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button
          onClick={onLearnMore}
          className="w-full bg-blue-600 hover:bg-blue-700"
        >
          Learn More
        </Button>
      </CardFooter>
    </Card>
  );
}
