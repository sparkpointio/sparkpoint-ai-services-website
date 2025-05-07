"use client"

import { new_sparkpoint_logo_full_light } from '@/lib/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faXTwitter, faFacebook, faInstagram, faYoutube, faMedium, faTelegram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export function Footer() {

  const footer_links = [
    {
      label: "Privacy Policy",
      url: "/privacy-policy",
      target: "_self",
      col: 1
    },
    {
      label: "SRK Token",
      url: "https://app.uniswap.org/explore/tokens/ethereum/0x0488401c3f535193fa8df029d9ffe615a06e74e6",
      target: "_blank",
      col: 1
    },
    {
      label: "CertiK Audit",
      url: "https://drive.google.com/file/d/1BizTH7JZgiYQaJbLyAGTnS83Do3yLvfT/view?usp=sharing",
      target: "_blank",
      col: 1
    },
    {
      label: "Home",
      url: "#",
      target: "_self",
      col: 2
    },
    {
      label: "CoinMarketCap",
      url: "https://coinmarketcap.com/currencies/sparkpoint/",
      target: "_blank",
      col: 2
    },
    {
      label: "Contact",
      url: "mailto:support@sparkpoint.io",
      target: "_self",
      col: 2
    }
  ];

  const socials = [
    {
      icon: faGithub,
      href: "https://github.com/sparkpointio"
    },
    {
      icon: faXTwitter,
      href: "https://x.com/sparkpointio"
    },
    {
      icon: faFacebook,
      href: "https://facebook.com/sparkpointio"
    },
    {
      icon: faInstagram,
      href: "https://www.instagram.com/sparkpointio"
    },
    {
      icon: faYoutube,
      href: "https://www.youtube.com/@sparkpointio"
    },
    {
      icon: faMedium,
      href: "https://medium.com/theecosystem"
    },
    {
      icon: faTelegram,
      href: "https://t.me/SparkPointOfficial"
    },
    {
      icon: faLinkedin,
      href: "https://www.linkedin.com/company/sparkpointio"
    }
  ]
  return (
    <footer className="tw-bg-[#20282A] tw-text-white md:tw-px-44 tw-p-10 tw-py-16 tw-flex tw-justify-between tw-items-start tw-gap-8 tw-mx-auto lg:tw-flex-row tw-flex-col">
      <div className="tw-grid tw-gap-4">
        <Link className="tw-flex tw-items-center tw-gap-2" href="#">
          <Image
            src={new_sparkpoint_logo_full_light}
            alt="SparkPoint Logo"
            className="tw-h-8 tw-w-fit"
          />
        </Link>
        <div className="tw-flex tw-gap-4 tw-items-center tw-justify-start tw-flex-wrap">
          {socials.map((social, index) => {
            return (
              <Link key={index} href={social.href} target='_blank'>
                <FontAwesomeIcon icon={social.icon} size='xl' color='#FF6F00' />
              </Link>
            )
          })}
        </div>
        <p className="tw-text-sm">
          © {new Date().getFullYear()} SparkPoint Technologies Inc.
        </p>
      </div>

      <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-4">
        {[1, 2].map(col => (
          <div key={col} className="tw-flex tw-flex-col tw-gap-2">
            {footer_links.filter(link => link.col === col).map(link => (
              <Link href={link.url} key={link.label} className="tw-text-sm hover:tw-text-gray-400" target={link.target}>
                {link.label}
              </Link>
            ))}
          </div>
        ))}
      </div>
    </footer>
  )
}