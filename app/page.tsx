"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Instagram, Menu, X, ChevronLeft, ChevronRight, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"

const galleryImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_4195.JPG-Wia4zOSdHhfcVGKlxO52U1clddhb3a.jpeg",
    alt: "Precision clipper work in black and white"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5613.JPEG-Jqeo6EEhSfm5WnTlWUns3Uqbq2k5Fv.jpeg",
    alt: "Curly textured top with clean fade"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5607.JPEG-IUV8BQuAOuj8g8J6scT6DmUwuTCJBz.jpeg",
    alt: "Textured top with low fade back view"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_4196.JPG-TCU3wjAovAVuApriUJMdfTNA6q2nGH.jpeg",
    alt: "Clean textured haircut from behind"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5611.JPEG-DGevT2ex8hn6bhpezzhJM4hDv6IPrq.jpeg",
    alt: "Textured top with clean fade back view"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5609.JPEG-knVHCFAI3UhtAFqrD8YR1vgSPAMnI6.jpeg",
    alt: "Textured top with sharp neckline taper"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_4194.JPG-axrw2dMNcvr39Mm8A7Gl16rGgcplAg.jpeg",
    alt: "Detailed fade haircut in progress"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5533-EBBHHn9oghOmMvJJAXQ3F8vdomEuvD.jpeg",
    alt: "Textured haircut with low fade side profile"
  },
]

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
  )
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#gallery", label: "Gallery" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <nav
      className={`fixed w-full z-50 top-0 start-0 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#home" className="flex items-center space-x-3">
          <span className="self-center text-xl font-semibold whitespace-nowrap tracking-tight text-foreground">
            cutsbybryan
          </span>
        </a>

        <div className="flex md:order-2 gap-2">
          <a
            href="https://www.picktime.com/cutsbybryan#book/services"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex"
          >
            <Button size="sm" className="gap-2">
              <Calendar className="w-4 h-4" />
              Book Now
            </Button>
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-muted-foreground rounded-lg md:hidden hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-border"
            aria-controls="navbar-menu"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
            isOpen ? "block" : "hidden"
          }`}
          id="navbar-menu"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 border border-border rounded-lg bg-secondary md:flex-row md:gap-8 md:mt-0 md:border-0 md:bg-transparent">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-2 px-3 text-muted-foreground rounded hover:bg-accent hover:text-foreground md:hover:bg-transparent md:p-0 md:hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_4185.JPG-5pbR2w61sRo7rzRZHpTOFgA4upjsvE.jpeg"
          alt="Barber studio atmosphere"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-32">
        <span className="inline-block mb-6 text-sm tracking-widest uppercase text-muted-foreground border border-border px-4 py-1.5 rounded-full">
          Aspiring Barber
        </span>
        <h1 className="mb-6 text-5xl font-bold tracking-tighter text-foreground md:text-6xl lg:text-7xl font-serif">
          cutsbybryan
        </h1>
        <p className="mb-10 text-lg font-normal text-muted-foreground md:text-xl max-w-2xl mx-auto leading-relaxed">
          Crafting clean fades, sharp lineups, and modern textures. Every cut is a canvas — let me create yours.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://www.picktime.com/cutsbybryan#book/services"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" className="w-full sm:w-auto gap-2">
              <Calendar className="w-5 h-5" />
              Book Now
            </Button>
          </a>
          <a href="#gallery">
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              View My Work
            </Button>
          </a>
        </div>

        {/* Social Links */}
        <div className="mt-12 flex justify-center gap-6">
          <a
            href="https://instagram.com/bryann.817"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Instagram className="w-6 h-6" />
            <span className="sr-only">Instagram</span>
          </a>
          <a
            href="https://tiktok.com/@cutsbybryan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <TikTokIcon className="w-6 h-6" />
            <span className="sr-only">TikTok</span>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-2 bg-muted-foreground rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}

function GallerySection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.ceil(galleryImages.length / 3))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? Math.ceil(galleryImages.length / 3) - 1 : prev - 1
    )
  }

  const openLightbox = (index: number) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
  }

  const nextLightbox = () => {
    setLightboxIndex((prev) => (prev + 1) % galleryImages.length)
  }

  const prevLightbox = () => {
    setLightboxIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1))
  }

  return (
    <section id="gallery" className="py-20 md:py-32 bg-background">
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm tracking-widest uppercase text-muted-foreground">
            Portfolio
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl font-serif">
            My Work
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            A collection of cuts showcasing my style and attention to detail
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {galleryImages.map((image, index) => (
            <button
              key={index}
              onClick={() => openLightbox(index)}
              className="group relative aspect-square overflow-hidden rounded-lg bg-secondary cursor-pointer focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-all duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-sm font-medium">View</span>
              </div>
            </button>
          ))}
        </div>

        {/* Lightbox */}
        {lightboxOpen && (
          <div
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white/80 hover:text-white p-2 z-50"
            >
              <X className="w-8 h-8" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation()
                prevLightbox()
              }}
              className="absolute left-4 text-white/80 hover:text-white p-2"
            >
              <ChevronLeft className="w-10 h-10" />
            </button>

            <div
              className="relative w-full max-w-4xl aspect-[3/4] md:aspect-video"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={galleryImages[lightboxIndex].src}
                alt={galleryImages[lightboxIndex].alt}
                fill
                className="object-contain"
                priority
              />
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation()
                nextLightbox()
              }}
              className="absolute right-4 text-white/80 hover:text-white p-2"
            >
              <ChevronRight className="w-10 h-10" />
            </button>

            <div className="absolute bottom-4 text-white/60 text-sm">
              {lightboxIndex + 1} / {galleryImages.length}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 bg-secondary/50">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_4188.JPG-dbv6xyZ9MAVY890dJkndpB5jbsGakI.jpeg"
                alt="Bryan cutting hair"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 border-2 border-border rounded-lg -z-10 hidden md:block" />
          </div>

          {/* Content */}
          <div>
            <span className="text-sm tracking-widest uppercase text-muted-foreground">
              About Me
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground md:text-4xl font-serif">
              Passionate About the Craft
            </h2>
            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                {"I'm Bryan — an aspiring barber with a passion for clean cuts and creative styling. What started as cutting my own hair has grown into a genuine love for the craft."}
              </p>
              <p>
                Every haircut is an opportunity to help someone look and feel their best. I focus on modern fades, textured styles, and sharp lineups that complement each client&apos;s unique look.
              </p>
              <p>
                I&apos;m always learning, always improving, and dedicated to perfecting my skills one cut at a time.
              </p>
            </div>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-2 gap-8">
              <div>
                <div className="text-3xl font-bold text-foreground">100+</div>
                <div className="text-sm text-muted-foreground mt-1">Satisfied Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground">2+</div>
                <div className="text-sm text-muted-foreground mt-1">Years Learning</div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-10 flex gap-4">
              <a
                href="https://instagram.com/bryann.817"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" className="gap-2">
                  <Instagram className="w-4 h-4" />
                  @bryann.817
                </Button>
              </a>
              <a
                href="https://tiktok.com/@cutsbybryan"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" className="gap-2">
                  <TikTokIcon className="w-4 h-4" />
                  @cutsbybryan
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-32 bg-background">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-sm tracking-widest uppercase text-muted-foreground">
            Get in Touch
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl font-serif">
            Ready for a Fresh Cut?
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            {"Hit me up on Instagram or TikTok to schedule your next haircut. I'm always excited to meet new clients and create something great."}
          </p>

          {/* Contact Cards */}
          <div className="mt-12 grid sm:grid-cols-2 gap-6">
            <a
              href="https://instagram.com/bryann.817"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-8 bg-secondary rounded-lg border border-border hover:border-foreground/20 transition-all duration-300"
            >
              <Instagram className="w-10 h-10 mx-auto text-muted-foreground group-hover:text-foreground transition-colors" />
              <h3 className="mt-4 text-lg font-semibold text-foreground">Instagram</h3>
              <p className="mt-2 text-muted-foreground">@bryann.817</p>
              <p className="mt-3 text-sm text-muted-foreground">
                DM me for appointments
              </p>
            </a>

            <a
              href="https://tiktok.com/@cutsbybryan"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-8 bg-secondary rounded-lg border border-border hover:border-foreground/20 transition-all duration-300"
            >
              <TikTokIcon className="w-10 h-10 mx-auto text-muted-foreground group-hover:text-foreground transition-colors" />
              <h3 className="mt-4 text-lg font-semibold text-foreground">TikTok</h3>
              <p className="mt-2 text-muted-foreground">@cutsbybryan</p>
              <p className="mt-3 text-sm text-muted-foreground">
                Check out my latest videos
              </p>
            </a>
          </div>

          {/* CTA */}
          <div className="mt-12">
            <a
              href="https://www.picktime.com/cutsbybryan#book/services"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="gap-2">
                <Calendar className="w-5 h-5" />
                Book Your Appointment
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="w-full mx-auto max-w-screen-xl p-6 md:py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <span className="text-xl font-semibold text-foreground tracking-tight">
              cutsbybryan
            </span>
            <p className="mt-1 text-sm text-muted-foreground">
              Clean cuts. Fresh style.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://instagram.com/bryann.817"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Instagram className="w-5 h-5" />
              <span className="sr-only">Instagram</span>
            </a>
            <a
              href="https://tiktok.com/@cutsbybryan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <TikTokIcon className="w-5 h-5" />
              <span className="sr-only">TikTok</span>
            </a>
          </div>
        </div>

        <hr className="my-6 border-border" />

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <span className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} cutsbybryan. All rights reserved.
          </span>
          <ul className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <li>
              <a href="#home" className="hover:text-foreground transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="#gallery" className="hover:text-foreground transition-colors">
                Gallery
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-foreground transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-foreground transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <GallerySection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
