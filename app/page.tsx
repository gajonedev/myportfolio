import { ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import ProfileImage from "@/public/gajone.jpg";
import MobileSocialsLinks from "@/components/mobileSocialsLinks";

export default function IndexPage() {
  return (
    <>
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32 mb-8">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <Link
            href="/contact"
            className="rounded-2xl bg-muted px-4 py-1.5 text-sm text-foreground font-medium"
          >
            Je veux un devis
          </Link>
          <h1 className="font-calSans text-3xl sm:text-5xl md:text-6xl lg:text-7xl max-md:-mx-6">
            Obtenez votre application web MAINTENANT !!!
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8 max-md:-mx-6">
            Je vais vous construire votre application web moderne, performante
            et optimisée en utilisant les technologies web modernes.
          </p>
          <div className="flex max-md:flex-col gap-4">
            <Link
              href="/contact"
              className={cn(buttonVariants({ size: "lg" }))}
            >
              Me contacter
            </Link>
            <Link
              href="/projects"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
            >
              Mes Projets
            </Link>
          </div>
        </div>
      </section>
      <section
        id="whoiam"
        className="container space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24"
      >
        <div className="mx-auto flex max-w-[68rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-calSans text-2xl leading-[1.1] sm:text-3xl md:text-4xl">
            Qui suis-je ?
          </h2>
          <article className="min-w-full flex max-md:flex-col gap-4 md:gap-12 p-2 items-center justify-center sm:p-6 md:p-10">
            <div className="w-[22rem] h-[25rem] border-border rounded-md overflow-hidden">
              <Image
                src={ProfileImage}
                alt="Gajone Profile Image"
                placeholder="blur"
                className="filter grayscale object-contain object-center"
              />
            </div>
            <div className="md:max-w-[50%] sm:p-8 p-2 md:px-12">
              <p className="leading-normal font-light text-muted-foreground sm:text-lg sm:leading-7 max-md:-px-8 text-left">
                Je suis{" "}
                <span className="font-semibold text-foreground">
                  Néhémie Gandonou
                </span>
                , developpeur web fullstack moderne. Ma passion pour le web ma
                connaissance des technologies web modernes font de moi la
                personne qu&apos;il vous faut pour la conception de votre
                application web. Vous pouvez{" "}
                <Link
                  href="/contact"
                  className="text-foreground font-medium hover:underline underline-offset-4 gap-1 group"
                >
                  me contacter maintenant{" "}
                  <ExternalLink
                    className="inline-block mb-1 group-hover:ml-1 transition-all duration-300"
                    size={16}
                  />
                </Link>{" "}
                et nous discuterons de votre projet.
              </p>
              <div className="flex flex-col mt-6 items-center justify-center text-muted-foreground">
                <Link
                  href="/me"
                  className="font-medium text-foreground text-md underline underline-offset-4 hover:text-foreground/80 group"
                >
                  En savoir plus sur moi
                  <ExternalLink
                    className="inline-block mb-1 ml-1 group-hover:ml-2 transition-all duration-300"
                    size={16}
                  />
                </Link>
                <span className="p-1">ou</span>
                <div>
                  <p>Découvrez-moi sur</p>
                  <MobileSocialsLinks />
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>
      <section
        id="services"
        className="container space-y-6 py-8 md:py-12 lg:py-24"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-calSans text-2xl leading-[1.1] sm:text-3xl md:text-4xl">
            Mes Services
          </h2>
          <p className="md:max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7 max-md:-px-8">
            Ayez une idée des services webs que je propose.
          </p>
        </div>
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
          <div className="overflow-hidden rounded-lg border bg-background/20 p-2 max-sm:w-[20rem] ">
            {/* svg */}
            <div className="space-y-2 p-3">
              <h3 className="font-bold font-calSans text-[20px]">
                Refonte de blog
              </h3>
              <p className="text-muted-foreground text-[15px] text-left min-h-[15rem] leading-6">
                Votre blog n&apos;est pas ou n&apos;est plus optimisé, votre
                site web se charge très lentement ? Je vous ferai une refonte
                complète de votre site avec les technologies webs modernes et
                adaptés à vos besoins afin de vous garantir une présence web
                rapide, optimisé, avec une expérience utilisateur moderne et
                efficace.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="h-[1000px]"></div>
    </>
  );
}
