/* @ds-bundle: {"format":4,"namespace":"MiBotica","components":[{"name":"Button"},{"name":"Badge"},{"name":"PriceTag"},{"name":"SearchField"},{"name":"AnnouncementBar"},{"name":"Header"},{"name":"CategoryNav"},{"name":"HeroCarousel"},{"name":"SectionHeader"},{"name":"BrandStrip"},{"name":"BenefitsBar"},{"name":"PromoBannerGrid"},{"name":"ProductCard"},{"name":"ProductRail"},{"name":"WideBanner"},{"name":"CampaignSplit"},{"name":"ReelsGrid"},{"name":"Footer"},{"name":"WhatsAppFab"}]} */
(function(){var w=window;w.MiBotica=w.MiBotica||{};
/* Sistema CSS-first: los componentes son marcado HTML + clases mb-* de bundle.css. Helpers mínimos: */
w.MiBotica.formatPrice=function(n){return "S/ "+Number(n).toFixed(2)};
w.MiBotica.discount=function(regular,sale){return "-"+Math.round((1-sale/regular)*100)+"%"};
})();
