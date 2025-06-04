import { HeroSection } from "./HeroSection"
import { FormSection } from "./FormSection"

export const DesktopContainer = () => {
  return(
    <article className="absolute -left-[9999px] w-px h-px overflow-hidden lg:static lg:left-auto lg:w-auto lg:h-auto lg:overflow-visible grid grid-cols-2 lg:grid">
      <HeroSection 
        imgUrl="/assets/images/background-image.png"
        title="FUSION"
      />

      <div className="p-12">
        <FormSection />
      </div>
    </article>
  );
}