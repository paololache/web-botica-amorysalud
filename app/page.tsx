import { HeroCarousel } from "@/components/HeroCarousel";
import {
  BenefitsBar,
  BrandStrip,
  CampaignSplit,
  CategoryGrid,
  ProductSection,
  PromoBannerGrid,
  StoreLocation,
  WideBanner,
} from "@/components/Sections";
import { byCategory, getProduct, onSale } from "@/lib/data";

// Orden de la "Versión recomendada para una botica de barrio" (external/Estructura-home.md)
export default function Home() {
  const campaign = ["gasa-esteril", "termometro-digital-flexible", "algodon-bolitas"].map((s) => getProduct(s)!);
  return (
    <div className="container">
      <div className="section-tight">
        <HeroCarousel />
      </div>
      <BenefitsBar />
      <ProductSection title="Ofertas de la semana" subtitle="Descuentos reales, hasta agotar stock" href="/buscar?ofertas=1" products={onSale().slice(0, 10)} />
      <CategoryGrid />
      <PromoBannerGrid />
      <ProductSection title="Botiquín del hogar" subtitle="Cuidado para ti y tu familia" href="/categoria/botiquin" products={byCategory("botiquin")} />
      <CampaignSplit
        title="Lo esencial para estar preparado"
        href="/categoria/botiquin"
        products={campaign}
        image="/img/banners/campana-familia.jpg"
        alt="Familia jugando junta en la sala de su casa"
      />
      <ProductSection title="Mamá y bebé" subtitle="Amor y cuidado en cada momento" href="/categoria/mama-y-bebe" products={byCategory("mama-y-bebe")} />
      <WideBanner />
      <ProductSection title="Lo mejor para tu nutrición" href="/categoria/nutricion" products={byCategory("nutricion")} />
      <BrandStrip />
      <StoreLocation />
    </div>
  );
}
