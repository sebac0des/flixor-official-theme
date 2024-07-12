// Components
import { ProductVideoCard } from '@/components/flixor/product/product-video-card'
import { ProductCard, ProductCardContent, ProductCardDescription, ProductCardFooter, ProductCardHeader, ProductCardImage, ProductCardTitle } from '@/components/flixor/product/product-card'

// Utils
import { cn } from "@/lib/utils";

// Types
import { Product } from "@/types/product";
import { fontMono } from '@/app/fonts';
import { AddToCartButton, AddToCartButtonIcon, AddToCartButtonText } from '@/components/flixor/add-to-cart';

interface ComboShowcaseProps {
  children: React.ReactNode;
  className?: string;
}

interface ComboShowcaseContentProps {
  children: React.ReactNode;
  className?: string;
}

interface ComboShoppingCardProps {
  className?: string;
  product: Product
}

interface ComboVideoCardProps {
  className?: string;
  product: Product
}

const ComboShowcase = ({ className, children, ...props }: ComboShowcaseProps) => (
  <div
    {...props}
  >
    {children}
  </div>
);

const ComboShowcaseContent = ({ className, children, ...props }: ComboShowcaseContentProps) => (
  <div
    className={cn(
      "flex flex-col md:flex-row gap-2",
      className
    )}
    {...props}
  >
    {children}
  </div>
);

const ComboShoppingCard = ({ product, ...props }: ComboShoppingCardProps) => <ProductCard>
  <ProductCardImage width={1080} height={1080} alt="" src={product.cover_image} />
  <ProductCardHeader>
    <ProductCardTitle>{product.name}</ProductCardTitle>
    <ProductCardDescription>{product.short_desc}</ProductCardDescription>
  </ProductCardHeader>

  <ProductCardFooter className="place-content-between">
    <span className={cn(fontMono.className, "text-lg")}>${product.price.toFixed(2)}</span>
    <AddToCartButton
      className="text-xs"
      size="sm"
      variant="secondary" cartItem={product}>
      <AddToCartButtonText>Agregar al carrito</AddToCartButtonText>
      <AddToCartButtonIcon className="w-4 h-4 ml-2.5" />
    </AddToCartButton>
  </ProductCardFooter>
</ProductCard>

const ComboVideoCard = ({ product, ...props }: ComboVideoCardProps) => <ProductVideoCard product={product} {...props} />

export { ComboShowcase, ComboShowcaseContent, ComboShoppingCard, ComboVideoCard }

