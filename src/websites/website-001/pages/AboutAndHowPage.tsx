import React from 'react';
import {
  Award,
  CheckCircle2,
  Clock,
  Globe,
  IndianRupee,
  Lock,
  Phone,
  Shield,
  Users,
  VenetianMask,
  Zap,
  ArrowRight,
  FileCheck,
} from 'lucide-react';
import { vsMessages } from '../assets/vakeelsaabData';

interface PageProps {
  onNavigate: (path: string) => void;
  onOpenCallModal: () => void;
}

export const AboutPage: React.FC<PageProps> = ({ onNavigate, onOpenCallModal }) => {
  const about = vsMessages['about-us'];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#172B54] via-[#1B3A6B] to-[#0b1a3a] text-white py-16 px-6">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <span className="inline-block px-4 py-1 rounded-full bg-[#FEC556]/15 border border-[#FEC556]/30 text-[#FEC556] text-xs font-bold uppercase tracking-widest">
            India&apos;s Trusted Legal Consultation Platform
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold">{about.hero.heading}</h1>
          <p className="text-lg md:text-xl text-[#FEC556] font-semibold">
            {about.hero.description.line1}
          </p>
          <p className="text-white/80 max-w-2xl mx-auto text-base">
            {about.hero.description.line2}
          </p>
        </div>
      </section>

      {/* Byte from the Founder */}
      <section className="py-14 px-6 pattern-bg">
        <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-8 items-center bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
          <div className="md:col-span-5">
            <img
              src="/websites/website-001/images/heroImg2.png"
              alt={about.founder.name}
              className="w-full h-80 object-cover rounded-2xl shadow-md"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="md:col-span-7 space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-[#172B54]">
              {about.founder.heading}
            </h2>
            <p className="text-[#2D3748] text-sm md:text-base leading-relaxed">
              {about.founder.para1}
            </p>
            <p className="text-[#2D3748] text-sm md:text-base leading-relaxed">
              {about.founder.para2}
            </p>
            <p className="text-[#2D3748] text-sm md:text-base leading-relaxed">
              {about.founder.para3}
            </p>
            <div className="pt-2 border-t border-gray-200">
              <p className="font-bold text-lg text-[#172B54]">{about.founder.name}</p>
              <p className="text-xs text-[#4A5568]">
                Founder, VakeelSaab (MV HUMHAINA Private Limited)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 px-6 bg-[#EDF3FA]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {[about.mission, about.vision].map((block, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 space-y-4"
            >
              <div className="w-12 h-12 rounded-xl bg-[#172B54] text-[#FEC556] flex items-center justify-center">
                {i === 0 ? <Shield className="w-6 h-6" /> : <Globe className="w-6 h-6" />}
              </div>
              <h3 className="text-2xl font-bold text-[#172B54]">{block.title}</h3>
              <p className="text-[#4A5568] text-sm leading-relaxed">{block.description}</p>
              <ul className="space-y-2 pt-2">
                {[block.point1, block.point2, block.point3].map((pt, idx) => (
                  <li key={idx} className="flex items-center gap-2.5 text-sm text-[#172B54] font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* How We Help: Business & Individual */}
      <section className="py-14 px-6 pattern-bg">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#172B54] section-headline">
              {about.howWeHelp.title}
            </h2>
            <p className="text-[#4A5568] mt-3 max-w-2xl mx-auto">
              {about.howWeHelp.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[about.howWeHelp.individual, about.howWeHelp.business].map((group, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
              >
                <h3 className="text-2xl font-bold text-[#172B54] mb-6 pb-3 border-b border-gray-100">
                  For {group.title}s
                </h3>
                <div className="space-y-5">
                  {[group.feature1, group.feature2, group.feature3, group.feature4].map(
                    (f, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-3.5">
                        <div className="w-8 h-8 rounded-lg bg-[#FEC556]/20 text-[#172B54] font-bold text-sm flex items-center justify-center shrink-0 mt-0.5">
                          {fIdx + 1}
                        </div>
                        <div>
                          <h4 className="font-bold text-[#172B54] text-base">{f.title}</h4>
                          <p className="text-sm text-[#4A5568] mt-0.5">{f.desc}</p>
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values & Lawyer Onboarding Rigor */}
      <section className="py-14 px-6 bg-[#172B54] text-white">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold section-headline text-white">
              {about.onboarding.title}
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto mt-3">
              {about.onboarding.subtitle}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              about.onboarding.item1,
              about.onboarding.item2,
              about.onboarding.item3,
              about.onboarding.item4,
            ].map((step, idx) => (
              <div
                key={idx}
                className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-6 space-y-3"
              >
                <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-[#FEC556] text-[#172B54] font-extrabold text-sm">
                  0{idx + 1}
                </span>
                <h3 className="text-lg font-bold text-white">{step.title}</h3>
                <p className="text-sm text-white/80 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-white/10 border border-[#FEC556]/30 rounded-2xl p-8 flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="space-y-2 max-w-3xl">
              <h3 className="text-xl font-bold text-[#FEC556]">
                {about.onboarding.promiseTitle}
              </h3>
              <p className="text-sm text-white/85 leading-relaxed">
                {about.onboarding.promiseDesc}
              </p>
            </div>
            <button
              onClick={onOpenCallModal}
              className="bg-[#FEC556] text-[#172B54] hover:bg-[#FEC556]/90 font-bold px-7 py-3.5 rounded-xl whitespace-nowrap shadow-lg cursor-pointer"
            >
              {about.cta.button}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export const HowWeWorkPage: React.FC<PageProps> = ({ onOpenCallModal }) => {
  const how = vsMessages['how-we-work'];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#172B54] to-[#0b1a3a] text-white py-16 px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <h1 className="text-3xl md:text-5xl font-extrabold">{how.hero.heading}</h1>
          <p className="text-lg text-white/85">{how.hero.subheading.line1}</p>
          <div className="pt-2">
            <button
              onClick={onOpenCallModal}
              className="bg-[#FEC556] text-[#172B54] font-bold px-8 py-3.5 rounded-full shadow-lg hover:scale-105 transition-transform cursor-pointer inline-flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>{how.book.cta}</span>
            </button>
          </div>
        </div>
      </section>

      {/* 3-Step Book Consultation */}
      <section className="py-14 px-6 pattern-bg">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#172B54] section-headline">
              {how.book.heading}
            </h2>
            <p className="text-[#4A5568] mt-3">{how.book.subheading}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[how.book.step1, how.book.step2, how.book.step3].map((st, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-7 shadow-lg border border-gray-100 relative"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#172B54] text-[#FEC556] font-extrabold text-lg flex items-center justify-center mb-4">
                  0{idx + 1}
                </div>
                <h3 className="text-xl font-bold text-[#172B54] mb-2">{st.title}</h3>
                <p className="text-sm text-[#4A5568] leading-relaxed">{st.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6-Step In-Person Engagement Process */}
      <section className="py-14 px-6 bg-[#EDF3FA]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#172B54] section-headline">
              {how.process.heading}
            </h2>
            <p className="text-[#4A5568] mt-3">{how.process.subheading}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {how.steps.map(
              (
                step: { title: string; summary: string; full: string },
                idx: number
              ) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#FEC556]/20 text-[#172B54]">
                        Stage 0{idx + 1}
                      </span>
                      <FileCheck className="w-5 h-5 text-[#172B54]" />
                    </div>
                    <h3 className="text-lg font-bold text-[#172B54] mb-2">
                      {step.title}
                    </h3>
                    <p className="text-xs font-semibold text-[#172B54]/80 mb-2">
                      {step.summary}
                    </p>
                    <p className="text-sm text-[#4A5568] leading-relaxed">
                      {step.full}
                    </p>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Confidential Second Opinion */}
      <section className="py-14 px-6 bg-[#172B54] text-white">
        <div className="max-w-6xl mx-auto space-y-10">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold section-headline text-white">
              {how.secondOpinion.heading}
            </h2>
            <p className="text-white/80 mt-3">{how.secondOpinion.subheading}</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {how.secondOpinion.benefits.map(
              (b: { title: string; desc: string }, idx: number) => (
                <div
                  key={idx}
                  className="bg-white/10 border border-white/15 rounded-2xl p-6 space-y-2"
                >
                  <h3 className="text-lg font-bold text-[#FEC556]">{b.title}</h3>
                  <p className="text-sm text-white/85 leading-relaxed">{b.desc}</p>
                </div>
              )
            )}
          </div>

          <div className="text-center space-y-4 pt-4">
            <p className="text-white/90 italic max-w-2xl mx-auto">
              &ldquo;{how.secondOpinion.footer}&rdquo;
            </p>
            <button
              onClick={onOpenCallModal}
              className="bg-[#FEC556] text-[#172B54] font-bold px-8 py-3.5 rounded-xl shadow-lg cursor-pointer"
            >
              {how.secondOpinion.cta}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export const FeaturePillarPage: React.FC<{
  pillar: 'anonymous' | 'accessible' | 'affordable';
  onNavigate: (path: string) => void;
  onOpenCallModal: () => void;
}> = ({ pillar, onNavigate, onOpenCallModal }) => {
  const data = vsMessages[pillar];

  if (pillar === 'anonymous') {
    return (
      <div className="min-h-screen bg-white">
        <section className="bg-[#172B54] text-white py-16 px-6 text-center">
          <div className="max-w-4xl mx-auto space-y-4">
            <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#FEC556]/20 text-[#FEC556] text-xs font-bold">
              <VenetianMask className="w-4 h-4" />
              {data.hero.privacyTag}
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold">
              {data.hero.headline.before}{' '}
              <span className="text-[#FEC556]">{data.hero.headline.highlight}</span>{' '}
              {data.hero.headline.after}
            </h1>
            <p className="text-white/85 max-w-2xl mx-auto text-base leading-relaxed">
              {data.hero.description}
            </p>
            <button
              onClick={onOpenCallModal}
              className="bg-[#FEC556] text-[#172B54] font-bold px-8 py-3.5 rounded-full shadow-lg cursor-pointer"
            >
              {data.hero.cta}
            </button>
          </div>
        </section>

        <section className="py-14 px-6 pattern-bg">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-[#172B54] section-headline">
                {data.whyItMatters.headline}
              </h2>
              <p className="text-[#4A5568] mt-3">{data.whyItMatters.description}</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {data.whyItMatters.cards.map(
                (c: { title: string; description: string }, i: number) => (
                  <div
                    key={i}
                    className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 space-y-2"
                  >
                    <h3 className="text-xl font-bold text-[#172B54]">{c.title}</h3>
                    <p className="text-sm text-[#4A5568] leading-relaxed">
                      {c.description}
                    </p>
                  </div>
                )
              )}
            </div>

            <div className="text-center pt-6">
              <h2 className="text-3xl font-bold text-[#172B54] section-headline">
                {data.howItWorks.heading}
              </h2>
              <p className="text-[#4A5568] mt-3">{data.howItWorks.description}</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {data.howItWorks.cards.map(
                (c: { title: string; description: string }, i: number) => (
                  <div
                    key={i}
                    className="bg-[#172B54] text-white rounded-2xl p-6 space-y-2"
                  >
                    <Lock className="w-7 h-7 text-[#FEC556] mb-2" />
                    <h3 className="text-lg font-bold">{c.title}</h3>
                    <p className="text-sm text-white/80">{c.description}</p>
                  </div>
                )
              )}
            </div>
          </div>
        </section>
      </div>
    );
  }

  if (pillar === 'accessible') {
    return (
      <div className="min-h-screen bg-white">
        <section className="bg-[#172B54] text-white py-16 px-6 text-center">
          <div className="max-w-4xl mx-auto space-y-4">
            <span className="inline-block px-4 py-1 rounded-full bg-[#FEC556]/20 text-[#FEC556] text-xs font-bold">
              {data.hero.tagline}
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold">
              {data.hero.headline.part1}{' '}
              <span className="text-[#FEC556]">{data.hero.headline.highlight}</span>
            </h1>
            <p className="text-white/85 max-w-2xl mx-auto text-base leading-relaxed">
              {data.hero.description}
            </p>
            <button
              onClick={onOpenCallModal}
              className="bg-[#FEC556] text-[#172B54] font-bold px-8 py-3.5 rounded-full shadow-lg cursor-pointer"
            >
              {data.hero.cta}
            </button>
          </div>
        </section>

        <section className="py-14 px-6 pattern-bg">
          <div className="max-w-6xl mx-auto space-y-10">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-[#172B54] section-headline">
                {data.challenge.title}
              </h2>
              <p className="text-[#4A5568] mt-3">{data.challenge.subtitle}</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.challenge.items.map(
                (item: { title: string; description: string }, i: number) => (
                  <div
                    key={i}
                    className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 space-y-2"
                  >
                    <h3 className="text-lg font-bold text-[#172B54]">{item.title}</h3>
                    <p className="text-sm text-[#4A5568]">{item.description}</p>
                  </div>
                )
              )}
            </div>
          </div>
        </section>
      </div>
    );
  }

  // Affordable
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-[#172B54] text-white py-16 px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="inline-block px-4 py-1 rounded-full bg-[#FEC556]/20 text-[#FEC556] text-xs font-bold">
            {data.hero.badge}
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold">
            {data.hero.heading.before}{' '}
            <span className="text-[#FEC556]">{data.hero.heading.highlight}</span>{' '}
            {data.hero.heading.after}
          </h1>
          <p className="text-white/85 max-w-2xl mx-auto text-base leading-relaxed">
            {data.hero.subheading}
          </p>
          <button
            onClick={onOpenCallModal}
            className="bg-[#FEC556] text-[#172B54] font-bold px-8 py-3.5 rounded-full shadow-lg cursor-pointer"
          >
            {data.hero.cta}
          </button>
        </div>
      </section>

      <section className="py-14 px-6 pattern-bg">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-[#172B54] section-headline">
              {data.costBarrier.heading}
            </h2>
            <p className="text-[#4A5568] mt-3">{data.costBarrier.subheading}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              data.costBarrier.highFees,
              data.costBarrier.complexBilling,
              data.costBarrier.inequality,
            ].map((c, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 space-y-2"
              >
                <h3 className="text-xl font-bold text-[#172B54]">{c.title}</h3>
                <p className="text-sm text-[#4A5568]">{c.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-[#172B54] text-white rounded-2xl p-8 grid md:grid-cols-3 gap-6">
            {[data.solution.option1, data.solution.option2, data.solution.option3].map(
              (opt, idx) => (
                <div
                  key={idx}
                  className="bg-white/10 rounded-xl p-5 border border-white/15"
                >
                  <h4 className="font-bold text-[#FEC556] text-lg mb-1">
                    {opt.title}
                  </h4>
                  <p className="text-sm text-white/85">{opt.desc}</p>
                </div>
              )
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
