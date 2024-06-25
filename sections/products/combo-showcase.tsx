// Components
import Wrapper from "@/components/ui/wrapper";

import {ProductVideoCard} from '@/components/ui/products/product-video-card'
import {ProductCard} from '@/components/ui/products/product-card'


// Utils
import { cn } from "@/lib/utils";

// Types
import { Product } from "@/types";

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
  }

const ComboShowcase = ({ className, children, ...props }: ComboShowcaseProps) => (
    <Wrapper
        container="stretch"
        {...props}
    >
        {children}
    </Wrapper>
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

const ComboShoppingCard = ({ className, product, ...props }: ComboShoppingCardProps) => <ProductCard product={product} {...props} />

const ComboVideoCard = ({ className, ...props }: ComboVideoCardProps) => <ProductVideoCard {...props}/>

export { ComboShowcase,ComboShowcaseContent, ComboShoppingCard, ComboVideoCard }

