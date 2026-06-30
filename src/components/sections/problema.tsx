"use client";

import Image from "next/image";
import { Building2, ChartNoAxesCombined, ShieldCheck } from "lucide-react";
import { MotionBlock } from "@/components/ui";

const pillars = [
  {
    icon: ShieldCheck,
    title: "Receita protegida",
    text: "Previsibilidade para manter a operação em dia.",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Gestão planejada",
    text: "Caixa mais claro para decidir com segurança.",
  },
  {
    icon: Building2,
    title: "Condomínio em movimento",
    text: "Mais tranquilidade para cuidar do que importa.",
  },
];

export function ProblemaSection() {
  return (
    <section className="relative overflow-hidden bg-white px-5 py-24 lg:px-8 lg:py-32">
      <div className="absolute inset-0 section-grid opacity-75" />
      <div className="relative mx-auto max-w-[1120px]">
        <div className="grid items-center gap-14 lg:grid-cols-[0.92fr_1.08fr]">
          <MotionBlock>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-[#D7A93A]">
              A empresa
            </p>

            <h2 className="mt-5 max-w-2xl text-4xl font-black leading-tight text-[#14344E] md:text-5xl">
              Estabilidade financeira para o condomínio funcionar melhor.
            </h2>

            <div className="mt-7 max-w-2xl space-y-5 text-base leading-8 text-[#14344E]/76">
              <p className="font-semibold text-[#14344E]">
                Na NPG Capital, acreditamos que a tranquilidade de um condomínio
                começa quando a receita deixa de ser uma incerteza.
              </p>
              <p>
                Atuamos ao lado de síndicos e administradoras para garantir mais
                previsibilidade, reduzir o desgaste da cobrança e dar base para
                decisões mais profissionais no dia a dia.
              </p>
              <p>
                Com caixa protegido, o condomínio mantém contratos, planeja
                melhorias e preserva a qualidade de vida de quem mora ali.
              </p>
            </div>
          </MotionBlock>

          <MotionBlock delay={0.12}>
            <div className="relative">
              <div className="overflow-hidden rounded-[24px] border border-[#14344E]/10 bg-[#0E1F1E] shadow-[0_28px_90px_rgba(20,52,78,0.18)]">
                <Image
                  src="/assets/sao-paulo-custom-hero-18.webp"
                  alt="Edifícios residenciais e corporativos em São Paulo"
                  width={1920}
                  height={1080}
                  className="h-[430px] w-full object-cover opacity-92"
                  sizes="(min-width: 1024px) 600px, 100vw"
                />
              </div>

              <div className="absolute inset-x-5 bottom-5 rounded-[22px] border border-white/20 bg-[#0E1F1E]/72 p-5 text-white shadow-[0_20px_60px_rgba(4,17,24,0.28),inset_0_1px_0_rgba(255,255,255,0.22)] backdrop-blur-2xl">
                <div className="grid gap-4 sm:grid-cols-3">
                  {pillars.map((pillar) => {
                    const Icon = pillar.icon;

                    return (
                      <div key={pillar.title} className="min-w-0">
                        <Icon
                          aria-hidden="true"
                          className="h-6 w-6 text-[#F1C75B]"
                        />
                        <p className="mt-3 text-sm font-black leading-tight">
                          {pillar.title}
                        </p>
                        <p className="mt-1 text-xs font-medium leading-5 text-white/72">
                          {pillar.text}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </MotionBlock>
        </div>
      </div>
    </section>
  );
}
