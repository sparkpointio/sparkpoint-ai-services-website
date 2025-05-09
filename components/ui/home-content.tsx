'use client';
import React from 'react';
import { bg1, bg2, bg3, bg4, img1, img2, img3, img4, img5 } from '@/lib/assets';
import Image from 'next/image'
// import Link from 'next/link';
// import { Waitlist } from '@/components/ui/waitlist-dialog';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import JotFormEmbed from '@/components/ui/JotFormEmbed';

const HomeContent = () => {
  return (
      <div>
        <div className="background-image-cover" style={{backgroundImage: "url('" + bg1.src + "')"}}>
          <div
              style={{background: "rgba(255,125,50, 0.6); background: linear-gradient(90deg, rgba(255,125,50,0.6) 50%, rgba(255,255,255,0) 100%)"}}>
            <div className="container">
              <div className="row align-items-center min-vh-100">
                <div className="order-1 order-lg-0 col-lg-7 pb-5 pt-lg-5">
                  <div className="text-center text-lg-start py-5 xl:tw-pe-[20px] xxl:tw-pe-[50px]">
                    <h1 className="rubik tw-font-[700] h-custom-1 px-4 px-md-0 mb-4">Deploy AI That’s Tailored<br
                        className="d-none d-sm-block"/> to Your Needs</h1>
                    <p className="h-custom-4 px-sm-4 px-md-0 mb-5 pb-2">SparkPoint’s AI Deployment Services make it easy
                      to integrate practical, cost-efficient automation into your business without the tech
                      overwhelm.</p>

                    <div className="">
                      <button onClick={() => {
                        const el = document.getElementById('cta');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }}
                         className="btn btn-custom-2 px-sm-4 px-md-5 px-lg-4 px-xl-5 py-3 h-custom-5 tw-rounded-[50px]">Get
                        Your Complimentary AI Deployment Assessment</button>
                    </div>
                  </div>
                </div>

                <div className="order-0 order-lg-1 col-lg-5 pt-5 pb-lg-5">
                  <div className="pt-5 pb-0 pb-lg-5">
                    <div className="w-100 tw-px-[30px] sm:tw-px-[100px] md:tw-px-[200px] lg:tw-px-[0]">
                      <Image src={img1} className="w-100" alt={''}/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="background-image-cover" style={{backgroundImage: "url('" + bg2.src + "')"}}>
          <div style={{background: "linear-gradient(270deg, rgba(255,255,255,0.6) 50%, rgba(255,255,255,0) 100%)"}}>
            <div className="container">
              <div className="row justify-content-end align-items-center tw-min-h-[calc(100vh-78px)]">
                <div className="col-md-12 col-lg-10 py-5">
                  <div className="text-center text-lg-end pt-4 pb-5 py-sm-5">
                    <p className="font-weight-500 tw-tracking-[-0.05em] tw-leading-[1.2em] lg:tw-leading-[1.1em] h-custom-2 px-4 px-md-0 mb-4">Skip
                      the Noise. Focus on What Works.</p>
                    <p className="h-custom-4 px-4 px-md-0 mb-4">Manual work eats up time and slows growth. Most teams
                      want
                      to<br className="d-none d-xl-block"/> use AI, but lack the in-house skills or resources to do it
                      right.</p>
                    <p className="h-custom-4 px-4 px-md-0 mb-4">That’s where SparkPoint comes in. We take the stress out
                      of
                      AI
                      deployment<br className="d-none d-xl-block"/> by building and training systems tailored to how you
                      work.</p>
                    <p className="h-custom-4 px-4 px-md-0 mb-5 pb-2">Whether you&#39;re trying to automate support,
                      improve
                      operations, or test AI-driven<br className="d-none d-xl-block"/> workflows, we get you up and
                      running without the typical
                      delays.
                    </p>

                    <div className="">
                      <button onClick={() => {
                        const el = document.getElementById('cta');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }}
                         className="btn btn-custom-2 px-5 py-3 h-custom-5 tw-rounded-[50px]">Get Your Complimentary AI
                        Deployment Assessment</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="background-image-cover" style={{backgroundImage: "url('" + bg3.src + "')"}}>
          <div style={{background: "linear-gradient(270deg, rgba(84,140,233,0.8) 50%, rgba(255,125,50,0.8) 100%)"}}>
            <div className="py-5">
              <div className="container py-5">
                <p className="text-center font-weight-500 tw-tracking-[-0.05em] tw-leading-[1.2em] lg:tw-leading-[1.1em] h-custom-2 px-4 px-md-0 mb-4">What
                  We Can Do for You</p>

                <div className="row align-items-center mb-4">
                  <div
                      className="col-lg-4 col-xl-3 tw-px-[60px] sm:tw-px-[130px] md:tw-px-[220px] lg:tw-ps-[0] lg:tw-pe-[30px] xl:tw-pe-[40px]">
                    <Image src={img2} className="w-100" alt=""/>
                  </div>

                  <div className="col-lg-8 col-xl-9">
                    <div className="font-size-80">
                      <p className="text-center text-lg-start font-weight-500 tw-tracking-[-0.05em] tw-leading-[1.2em] lg:tw-leading-[1.1em] h-custom-2 px-4 px-md-0 mb-4">On-Premise
                        Deployment</p>
                    </div>

                    <p className="text-center text-lg-start h-custom-4 mb-4">For teams with strict security needs, we
                      provide
                      full AI integration on your local infrastructure, keeping your data private and compliant.</p>
                  </div>
                </div>

                <div className="row align-items-center mb-4">
                  <div
                      className="col-lg-4 col-xl-3 tw-px-[60px] sm:tw-px-[130px] md:tw-px-[220px] lg:tw-ps-[0] lg:tw-pe-[30px] xl:tw-pe-[40px]">
                    <Image src={img3} className="w-100" alt=""/>
                  </div>

                  <div className="col-lg-8 col-xl-9">
                    <div className="font-size-80">
                      <p className="text-center text-lg-start font-weight-500 tw-tracking-[-0.05em] tw-leading-[1.2em] lg:tw-leading-[1.1em] h-custom-2 px-4 px-md-0 mb-4">AI
                        Agent Implementation</p>
                    </div>

                    <p className="text-center text-lg-start h-custom-4 mb-4">We help you deploy AI agents that handle
                      repetitive tasks, respond to customers, and support internal workflows.</p>
                  </div>
                </div>

                <div className="row align-items-center mb-4">
                  <div
                      className="col-lg-4 col-xl-3 tw-px-[60px] sm:tw-px-[130px] md:tw-px-[220px] lg:tw-ps-[0] lg:tw-pe-[30px] xl:tw-pe-[40px]">
                    <Image src={img4} className="w-100" alt=""/>
                  </div>

                  <div className="col-lg-8 col-xl-9">
                    <div className="font-size-80">
                      <p className="text-center text-lg-start font-weight-500 tw-tracking-[-0.05em] tw-leading-[1.2em] lg:tw-leading-[1.1em] h-custom-2 px-4 px-md-0 mb-4">Custom
                        Model Training</p>
                    </div>

                    <p className="text-center text-lg-start h-custom-4 mb-4">Your business is unique. We train AI models
                      using
                      your actual data so performance reflects real-world conditions.</p>
                  </div>
                </div>

                <div className="row align-items-center mb-5">
                  <div
                      className="col-lg-4 col-xl-3 tw-px-[60px] sm:tw-px-[130px] md:tw-px-[220px] lg:tw-ps-[0] lg:tw-pe-[30px] xl:tw-pe-[40px]">
                    <Image src={img5} className="w-100" alt=""/>
                  </div>

                  <div className="col-lg-8 col-xl-9">
                    <div className="font-size-80">
                      <p className="text-center text-lg-start font-weight-500 tw-tracking-[-0.05em] tw-leading-[1.2em] lg:tw-leading-[1.1em] h-custom-2 px-4 px-md-0 mb-4">Team
                        Training and Ongoing Support</p>
                    </div>

                    <p className="text-center text-lg-start h-custom-4 mb-4">We’ll show your team how to use, manage,
                      and optimize your AI systems, and stick around to help when needed.</p>
                  </div>
                </div>

                <div className="text-center">
                  <button onClick={() => {
                    const el = document.getElementById('cta');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                     className="btn btn-custom-2 px-5 py-3 h-custom-5 tw-rounded-[50px]">Get Your Complimentary AI
                    Deployment Assessment</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div className="container-fluid">
            <div className="row tw-min-h-[calc(100vh-78px)] align-items-stretch">
              <div className="col-lg-7 bg-color-2 d-flex justify-content-end">
                <div
                    className="lg:tw-max-w-[calc((960px/12)*7)] xl:tw-max-w-[calc((1140px/12)*7)] xxl:tw-max-w-[calc((1320px/12)*7)] w-100 tw-px-[8px]">
                  <div className="h-100 w-100 d-flex align-items-center md:tw-px-[100px] lg:tw-px-[0]">
                    <div className="py-5 pe-lg-5 text-center text-lg-start">
                      <div className="py-5">
                        <p className="text-center text-lg-start font-weight-500 tw-tracking-[-0.05em] tw-leading-[1.2em] lg:tw-leading-[1.1em] h-custom-2 px-4 px-md-0 mb-5">Why
                          Build With Us</p>

                        <div className="d-flex flex-column flex-sm-row align-items-center mb-5">
                          <div className="pe-md-4 pe-md-5 mb-4 mb-sm-0">
                            <FontAwesomeIcon className="font-size-560 tw-text-[#ff7c32]" icon={faCircleCheck}/>
                          </div>

                          <div>
                            <p className="text-center text-sm-start h-custom-5 px-4 px-md-0 mb-0">We’ve been building in
                              blockchain since 2018, with a track record rooted in product development, community
                              engagement, and Web3 innovation.</p>
                          </div>
                        </div>

                        <div className="d-flex flex-column flex-sm-row align-items-center mb-5">
                          <div className="pe-md-4 pe-md-5 mb-4 mb-sm-0">
                            <FontAwesomeIcon className="font-size-560 tw-text-[#ff7c32]" icon={faCircleCheck}/>
                          </div>

                          <div>
                            <p className="text-center text-sm-start h-custom-5 px-4 px-md-0 mb-0">Our AI deployment
                              services build on that foundation, with practical solutions and clear support for projects
                              that need to move fast without wasting time or money.</p>
                          </div>
                        </div>

                        <div className="text-center text-lg-start">
                          <button onClick={() => {
                            const el = document.getElementById('cta');
                            if (el) el.scrollIntoView({ behavior: 'smooth' });
                          }}
                             className="btn btn-custom-2 px-5 py-3 h-custom-5 tw-rounded-[50px]">Get Your Complimentary
                            AI Deployment Assessment</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-5 background-image-cover p-0 tw-min-h-[calc(100vh-78px)] lg:tw-min-h-[initial]"
                   style={{backgroundImage: "url('" + bg4.src + "')"}}></div>
            </div>
          </div>
        </div>

        <div className="background-image-cover" id="cta" style={{backgroundImage: "url('" + bg3.src + "')"}}>
          <div className="d-flex py-5 w-100 min-vh-100 align-items-center">
            <div className="container w-100 py-5">
              <div className="text-center mb-5">
                <Image src={img1} className="tw-w-[200px] d-inline-block" alt={''}/>
              </div>

              <p className="text-center font-weight-500 tw-leading-[1em] h-custom-2 px-4 px-md-0 mb-5">Ready to See What
                AI Can Do for You?</p>
              <p className="text-center h-custom-5 mb-3">We’ll walk you through where AI fits into your business,<br className="d-none d-xl-block"/> what it
                can automate, and what kind of savings or workflow efficiency you can expect.</p>
              <p className="text-center h-custom-5 mb-5 pb-4">Click the button below to get a free AI deployment
                assessment.</p>

              <div className="text-center">
                <JotFormEmbed />
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default HomeContent;