import weddingImg from '../assets/images/service-wedding.png';
import alacarteImg from '../assets/images/service-alacarte.png';
import workshopImg from '../assets/images/service-workshop.png';

export const services = [
    {
        id: 'weddings',
        title: "Full Service Weddings",
        shortDescription: "Full-service floral design for your special day. From bouquets to large-scale installations.",
        description: "For the couple who wants every detail to blossom. Our full-service packages include personal consultation, mood board design, delivery, installation, and breakdown. From the bridal bouquet to the grand arbors, we ensure a cohesive and breathtaking botanical experience.",
        features: [
            "Personalized Design Proposal",
            "Ceremony Installations & Arches",
            "Table Centerpieces & Tablescapes",
            "On-site Setup & Breakdown"
        ],
        image: weddingImg,
        ctaText: "Inquire for Wedding",
        ctaLink: "/contact",
        ctaStyle: "btn-primary"
    },
    {
        id: 'alacarte',
        title: "A La Carte & Elopements",
        shortDescription: "Perfect for intimate gatherings and elopements. Beautiful blooms, simplified.",
        description: "Perfect for intimate celebrations, rehearsal dinners, or smaller budgets. Choose from our curated menu of signature color palettes and styles. Simply place your order online and pick up from our studio on your event day.",
        features: [
            "Bridal Bouquets & Boutonnieres",
            "Centerpieces",
            "No Minimum Spend",
            "Easy Online Ordering"
        ],
        image: alacarteImg,
        ctaText: "View Menu",
        ctaLink: "/contact?type=event",
        ctaStyle: "btn-outline"
    },
    {
        id: 'workshops',
        title: "Seasonal Workshops",
        shortDescription: "Learn the art of floral design in our seasonal hands-on classes.",
        description: "Join us in the studio to learn the art of floral design. Our workshops are designed for all skill levels and focus on sustainable mechanics and seasonal blooms. It's the perfect way to connect with nature and your creativity.",
        features: [
            "Spring Wreath Making",
            "Centerpiece 101",
            "Holiday Garlands"
        ],
        image: workshopImg,
        ctaText: "See Schedule",
        ctaLink: "/contact?type=workshop",
        ctaStyle: "btn-outline"
    }
];
