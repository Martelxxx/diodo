export default function PrivacyPolicyPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="hero-title mb-4">Politique de Confidentialité</h1>
          <div className="w-20 h-1 bg-gold mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Dernière mise à jour:{" "}
            {new Date().toLocaleDateString("fr-FR", { year: "numeric", month: "long", day: "numeric" })}
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <p>
            Chez Diodo Couture, nous accordons une grande importance à la protection de vos données personnelles. Cette
            politique de confidentialité explique comment nous collectons, utilisons, partageons et protégeons vos
            informations lorsque vous visitez notre site web ou utilisez nos services.
          </p>

          <h2>Collecte d'Informations</h2>
          <p>
            Nous collectons différents types d'informations lorsque vous visitez notre site web, créez un compte,
            effectuez un achat ou interagissez avec nos services:
          </p>
          <ul>
            <li>
              <strong>Informations personnelles:</strong> Nom, adresse email, numéro de téléphone, adresse postale,
              informations de paiement.
            </li>
            <li>
              <strong>Informations de navigation:</strong> Adresse IP, type de navigateur, pages visitées, temps passé
              sur le site, liens cliqués.
            </li>
            <li>
              <strong>Informations d'appareil:</strong> Type d'appareil, système d'exploitation, identifiants uniques.
            </li>
          </ul>

          <h2>Utilisation de Google Analytics</h2>
          <p>
            Notre site utilise Google Analytics, un service d'analyse web fourni par Google, Inc. Google Analytics
            utilise des cookies pour nous aider à analyser comment les utilisateurs utilisent notre site. Les
            informations générées par ces cookies concernant votre utilisation de notre site (y compris votre adresse
            IP) seront transmises et stockées par Google sur des serveurs situés aux États-Unis.
          </p>
          <p>
            Google utilisera ces informations dans le but d'évaluer votre utilisation de notre site, de compiler des
            rapports sur l'activité du site pour les opérateurs du site et de fournir d'autres services relatifs à
            l'activité du site et à l'utilisation d'Internet. Google peut également transférer ces informations à des
            tiers lorsque la loi l'exige ou lorsque ces tiers traitent les informations pour le compte de Google.
          </p>
          <p>
            Vous pouvez refuser l'utilisation de cookies en sélectionnant les paramètres appropriés sur votre
            navigateur. Cependant, veuillez noter que si vous le faites, vous ne pourrez peut-être pas utiliser toutes
            les fonctionnalités de ce site.
          </p>

          <h2>Utilisation de Google AdSense</h2>
          <p>
            Notre site utilise Google AdSense, un service de publicité fourni par Google, Inc. Google AdSense utilise
            des cookies pour diffuser des annonces pertinentes aux utilisateurs en fonction de leur navigation sur notre
            site et d'autres sites. Les cookies permettent à Google et à ses partenaires de diffuser des annonces basées
            sur les visites précédentes d'un utilisateur sur notre site ou sur d'autres sites.
          </p>
          <p>
            Google peut utiliser des cookies de publicité pour personnaliser les annonces que vous voyez. Si vous ne
            souhaitez pas que des informations soient collectées par Google à des fins publicitaires, vous pouvez
            désactiver les cookies pour la publicité en visitant les paramètres des annonces de Google.
          </p>
          <p>
            En utilisant ce site, vous consentez au traitement de vos données par Google de la manière et aux fins
            décrites ci-dessus.
          </p>

          <h2>Utilisation des Informations</h2>
          <p>Nous utilisons les informations que nous collectons pour:</p>
          <ul>
            <li>Traiter vos commandes et gérer votre compte</li>
            <li>Améliorer notre site web et nos services</li>
            <li>Personnaliser votre expérience utilisateur</li>
            <li>Communiquer avec vous concernant vos commandes, nos produits et nos offres spéciales</li>
            <li>Analyser les tendances d'utilisation et l'efficacité de nos campagnes marketing</li>
            <li>Prévenir les activités frauduleuses et améliorer la sécurité de notre site</li>
          </ul>

          <h2>Partage des Informations</h2>
          <p>
            Nous ne vendons, n'échangeons ni ne transférons vos informations personnelles à des tiers sans votre
            consentement, sauf dans les cas suivants:
          </p>
          <ul>
            <li>
              Avec des prestataires de services qui nous aident à exploiter notre site web, à conduire nos activités ou
              à vous servir (par exemple, les services de traitement des paiements ou de livraison)
            </li>
            <li>
              Lorsque nous pensons que la divulgation est nécessaire pour se conformer à la loi, faire respecter nos
              politiques du site, ou protéger nos droits ou ceux d'autrui
            </li>
            <li>
              En cas de fusion, acquisition ou vente d'actifs, auquel cas vous serez informé par email et/ou par un avis
              bien visible sur notre site web de tout changement de propriétaire ou d'utilisation de vos informations
              personnelles
            </li>
          </ul>

          <h2>Protection des Informations</h2>
          <p>
            Nous mettons en œuvre diverses mesures de sécurité pour maintenir la sécurité de vos informations
            personnelles. Nous utilisons un cryptage de pointe pour protéger les informations sensibles transmises en
            ligne. Nous protégeons également vos informations hors ligne. Seuls les employés qui ont besoin d'effectuer
            un travail spécifique ont accès aux informations personnelles identifiables.
          </p>

          <h2>Vos Droits</h2>
          <p>
            Vous avez le droit d'accéder, de corriger ou de supprimer vos données personnelles. Vous pouvez également
            vous opposer au traitement de vos données, demander une limitation du traitement ou la portabilité de vos
            données. Pour exercer ces droits, veuillez nous contacter à l'adresse indiquée ci-dessous.
          </p>

          <h2>Modifications de la Politique de Confidentialité</h2>
          <p>
            Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Toute
            modification sera publiée sur cette page avec une date de mise à jour révisée. Nous vous encourageons à
            consulter régulièrement cette page pour rester informé des changements.
          </p>

          <h2>Contact</h2>
          <p>Si vous avez des questions concernant cette politique de confidentialité, vous pouvez nous contacter à:</p>
          <p>
            Diodo Couture
            <br />
            123 Rue de la Mode
            <br />
            Dakar, Sénégal
            <br />
            Email: privacy@diodocouture.com
            <br />
            Téléphone: +221 XX XXX XXXX
          </p>
        </div>
      </div>
    </div>
  )
}
