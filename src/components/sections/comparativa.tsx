"use client";

import {
  CircleDollarSign,
  ShieldCheck,
  UserRoundCheck,
  UserRoundX,
  X,
} from "lucide-react";
import { MotionBlock } from "@/components/ui";

const units = [
  { label: "Pagou", status: "ok" },
  { label: "Pagou", status: "ok" },
  { label: "Atrasou", status: "bad" },
] as const;

function UnitCard({
  label,
  status,
}: {
  label: string;
  status: "ok" | "bad";
}) {
  const paid = status === "ok";
  const Icon = paid ? UserRoundCheck : UserRoundX;

  return (
    <div className={`flow-clean-unit ${paid ? "flow-clean-unit-paid" : "flow-clean-unit-late"}`}>
      <Icon aria-hidden="true" className="h-5 w-5" />
      <p className="mt-2 text-xs font-black uppercase tracking-[0.14em] text-white">
        Unidade
      </p>
      <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.18em] text-white/48">
        {label}
      </p>
    </div>
  );
}

function ScenarioFlow({ mode }: { mode: "without" | "with" }) {
  const withNpg = mode === "with";

  return (
    <article className={`flow-clean-panel ${withNpg ? "flow-clean-panel-good" : "flow-clean-panel-risk"}`}>
      <div className="relative z-10">
        <div className="text-center">
          <p className={`text-xs font-black uppercase tracking-[0.22em] ${withNpg ? "text-[#F1C75B]" : "text-white/48"}`}>
            {withNpg ? "Com NPG Capital" : "Sem NPG"}
          </p>
          <h3 className="mt-2 text-xl font-black text-white">
            {withNpg ? "O repasse chega completo" : "A inadimplência reduz o caixa"}
          </h3>
        </div>

        <div className="flow-clean-stage">
          <div className="flow-clean-units">
            {units.map((unit, index) => (
              <UnitCard
                key={`${unit.label}-${index}`}
                label={unit.label}
                status={unit.status}
              />
            ))}
          </div>

          <svg
            aria-hidden="true"
            className="flow-clean-svg"
            viewBox="0 0 520 260"
            preserveAspectRatio="none"
          >
            <path className="flow-clean-track" d="M78 0 C78 72 206 62 260 118" />
            <path className="flow-clean-track" d="M260 0 V118" />
            <path className="flow-clean-track" d="M442 0 C442 72 314 62 260 118" />
            <path className="flow-clean-track" d="M260 118 V212" />

            <path
              className={`flow-clean-stream ${withNpg ? "flow-clean-stream-good" : "flow-clean-stream-risk"}`}
              d="M78 0 C78 72 206 62 260 118"
            />
            <path
              className={`flow-clean-stream flow-clean-stream-delay ${withNpg ? "flow-clean-stream-good" : "flow-clean-stream-risk"}`}
              d="M260 0 V118"
            />
            <path
              className={`flow-clean-stream flow-clean-stream-delay-2 ${withNpg ? "flow-clean-stream-good" : "flow-clean-stream-loss"}`}
              d="M442 0 C442 72 314 62 260 118"
            />
            <path
              className={`flow-clean-stream flow-clean-stream-down ${withNpg ? "flow-clean-stream-good" : "flow-clean-stream-risk"}`}
              d="M260 118 V212"
            />
          </svg>

          <div className={`flow-clean-center ${withNpg ? "flow-clean-center-good" : "flow-clean-center-risk"}`}>
            {withNpg ? (
              <ShieldCheck aria-hidden="true" className="h-6 w-6" />
            ) : (
              <X aria-hidden="true" className="h-6 w-6" />
            )}
          </div>

          <div className={`flow-clean-result ${withNpg ? "flow-clean-result-good" : "flow-clean-result-risk"}`}>
            <div className="flex items-center justify-center gap-3">
              <CircleDollarSign
                aria-hidden="true"
                className={`h-9 w-9 ${withNpg ? "text-[#33C46B]" : "text-[#F1C75B]"}`}
              />
              <p className={`text-4xl font-black ${withNpg ? "text-white" : "text-[#F1C75B]"}`}>
                {withNpg ? "100%" : "85%"}
              </p>
            </div>
            <p className="mt-3 text-center text-sm font-black text-white">
              Caixa do condomínio
            </p>
            <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
              <div
                className={`h-full rounded-full ${withNpg ? "flow-clean-bar-good" : "flow-clean-bar-risk"}`}
                style={{ width: withNpg ? "100%" : "85%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export function ComparativaSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[#0E1F1E] px-3 py-14 text-white lg:py-12">
      <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(20,52,78,0.94),rgba(14,31,30,1)_52%,rgba(20,52,78,0.86))]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#F1C75B]/70 to-transparent" />
      <div className="relative z-10 mx-auto w-full max-w-[1120px] px-4 sm:px-5 lg:px-6">
        <MotionBlock>
          <h2 className="mx-auto max-w-3xl text-center text-3xl font-black leading-tight md:text-4xl">
            O caminho do dinheiro muda quando a NPG entra no fluxo.
          </h2>
        </MotionBlock>

        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          <MotionBlock delay={0.08}>
            <ScenarioFlow mode="without" />
          </MotionBlock>

          <MotionBlock delay={0.16}>
            <ScenarioFlow mode="with" />
          </MotionBlock>
        </div>
      </div>
    </section>
  );
}
