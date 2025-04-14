"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, CheckCircle } from "lucide-react"

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would normally handle the form submission
    setIsSubmitted(true)
  }

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="hero-title mb-4">Contactez-Nous</h1>
          <div className="w-20 h-1 bg-gold mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Nous sommes à votre disposition pour répondre à toutes vos questions et vous accompagner dans votre
            découverte de Diodo Couture.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-muted p-8">
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
                <CheckCircle className="h-16 w-16 text-gold" />
                <h2 className="text-2xl font-serif font-medium">Message Envoyé!</h2>
                <p className="text-muted-foreground">
                  Merci pour votre message. Notre équipe vous contactera dans les plus brefs délais.
                </p>
                <Button onClick={() => setIsSubmitted(false)} className="btn-gold mt-4">
                  Envoyer un autre message
                </Button>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-serif font-medium mb-6">Envoyez-nous un message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="text-sm font-medium">
                        Prénom
                      </label>
                      <Input id="firstName" placeholder="Votre prénom" required />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="text-sm font-medium">
                        Nom
                      </label>
                      <Input id="lastName" placeholder="Votre nom" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="Votre email" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                      Téléphone
                    </label>
                    <Input id="phone" placeholder="Votre numéro de téléphone" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Sujet
                    </label>
                    <Input id="subject" placeholder="Sujet de votre message" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea id="message" placeholder="Votre message" rows={5} required />
                  </div>
                  <Button type="submit" className="btn-gold w-full">
                    Envoyer le message
                  </Button>
                </form>
              </>
            )}
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-serif font-medium mb-6">Informations de Contact</h2>
              <p className="text-muted-foreground mb-8">
                N'hésitez pas à nous contacter pour toute question concernant nos produits, services ou pour planifier
                une visite à notre atelier.
              </p>
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-gold mr-4 mt-1" />
                  <div>
                    <h3 className="font-medium">Adresse</h3>
                    <p className="text-muted-foreground">123 Rue de la Mode, Dakar, Sénégal</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-gold mr-4 mt-1" />
                  <div>
                    <h3 className="font-medium">Téléphone</h3>
                    <p className="text-muted-foreground">+221 XX XXX XXXX</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-gold mr-4 mt-1" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-muted-foreground">contact@diodocouture.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-gold mr-4 mt-1" />
                  <div>
                    <h3 className="font-medium">Heures d'Ouverture</h3>
                    <p className="text-muted-foreground">
                      Lundi - Vendredi: 9h00 - 18h00
                      <br />
                      Samedi: 10h00 - 16h00
                      <br />
                      Dimanche: Fermé
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="mt-8">
              <h3 className="font-medium mb-4">Notre Emplacement</h3>
              <div className="aspect-video bg-muted relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-muted-foreground">Carte interactive</p>
                  {/* In a real implementation, you would embed a Google Map or similar here */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
