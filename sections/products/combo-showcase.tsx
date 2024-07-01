// Components
import {ProductVideoCard} from '@/components/shadcn/product/product-video-card'
import {ProductCard} from '@/components/shadcn/product/product-card'

// Utils
import { cn } from "@/lib/utils";

// Types
import { Product } from "@/types/product";

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
    product:Product
  }

  interface ComboVideoCardProps {
    className?: string;
    product:Product
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

const ComboShoppingCard = ({  product, ...props }: ComboShoppingCardProps) => <ProductCard product={product} {...props} />

const ComboVideoCard = ({ product,...props }: ComboVideoCardProps) => <ProductVideoCard product={product} {...props}/>

export { ComboShowcase,ComboShowcaseContent, ComboShoppingCard, ComboVideoCard }

