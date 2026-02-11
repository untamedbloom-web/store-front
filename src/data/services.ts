// import weddingImg from '../assets/images/service-wedding.png';
import weddingImg from '../assets/images/WeddingsFlower.jpg';
import alacarteImg from '../assets/images/service-alacarte.png';
import workshopImg from '../assets/images/service-workshop.png';

export const services = [
    {
        id: 'curated',
        title: "Today’s Curated Collection",
        shortDescription: "Delivering wild, soulful florals across Colorado.",
        description: "Delivering wild, soulful florals across Colorado, traveling near & far to wherever your story takes us. Our daily collection features unique, artist-choice arrangements.",
        features: [
            "Wild Mini Bundles",
            "Signature Bouquets",
            "Designer Vase Arrangements",
            "Custom Color Palettes Welcome"
        ],
        image: alacarteImg,
        ctaText: "Order Now",
        ctaLink: "/contact",
        ctaStyle: "btn-outline"
    },
    {
        id: 'seasonal',
        title: "Seasonal & Holiday",
        shortDescription: "Subscriptions, holiday specials, and seasonal organic decor.",
        description: "Celebrate the changing seasons with our recurring subscriptions and exclusive holiday offerings. From monthly bouquets to fresh winter wreaths, bring the outdoors in.",
        features: [
            "Monthly Bouquets & Arrangements",
            "Seasonal Centerpieces",
            "Designer Holiday Arrangements",
            "Gathering Table Garland",
            "Fresh Winter Wreaths"
        ],
        image: workshopImg,
        ctaText: "Inquire",
        ctaLink: "/contact",
        ctaStyle: "btn-outline"
    },
    {
        id: 'events',
        title: "Custom Floral Design & Event Planning",
        shortDescription: "Bespoke floral design for weddings, events, and installations.",
        description: "For the couple who wants every detail to blossom. Includes personal consultation, mood board design, delivery, installation, and breakdown. Bespoke proposals available upon request.",
        features: [
            "Weddings & Elopements",
            "Events Large or Small",
            "Home Floral Refreshes",
            "Corporate & Client Gifts",
            "Installations & Consultations"
        ],
        image: weddingImg,
        ctaText: "Start Your Design",
        ctaLink: "/contact",
        ctaStyle: "btn-primary"
    }
];
