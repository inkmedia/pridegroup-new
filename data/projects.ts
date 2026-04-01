import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "wellington",
    title: "2 & 3 BHK Apartments",
    location: "at Pride World City, Charholi",
    hero: {
      type: "image",
      src: "/images/Wellington.png",
      heading: "Wellington",
    },
    overview: {
      category: "Residential",
      status: "Ongoing",
      subtitle: "Starting from Rs. 1.2 Cr*",
      location: "at Pride World City, Charholi, Pune",
      description:
        "Wellington at Pride World City offers luxurious 2 & 3 BHK residences designed for modern living. With an emphasis on space, comfort, and aesthetics, Wellington presents an extraordinary lifestyle with world-class amenities and superior craftsmanship.",
      logoSrc: "/images/projects/PWC_Wellington Logo.png",
      imageSrc: "/images/Wellington.png",
      imageAlt: "Wellington at Pride World City",
      stats: [
        { value: "14", label: "Towers" },
        { value: "110+", label: "Amenities" },
        { value: "2/3", label: "BHK Options" },
      ],
      highlights: [
        "110+ Childhood Amenities",
        "World-Class Lifestyle",
        "Smart & Sustainable Living",
        "Complete Township Convenience",
      ],
      amenities: [
        "Clubhouse",
        "Mini Olympic Pool",
        "Kids Pool",
        "Co-working Lounge",
        "Café",
        "Jogging Track",
        "Cycling Track",
        "Yoga Zone",
        "Futsal Court",
        "Rock Climbing Zone",
        "Forest Trail",
        "Jungle Trail",
      ],
      mediaBadges: [
        { value: "110+", label: "Amenities", position: "top-right" },
        { value: "14", label: "Towers", position: "bottom-left" },
      ],
    },
    details: {
      amenities: {
        title: "Amenities",
        categories: [
          {
            title: "Wellness",
            items: [
              "Gymnasium",
              "Aerobics Room / Zumba",
              "Yoga Room",
              "Yoga & Meditation Zone",
              "Reflexology Pathway",
              "Spa Room",
              "Salon",
              "Open Gym",
              "Jogging Track",
              "Hammock Zone",
              "Aroma Garden",
              "Zen Garden",
              "Herbal Garden",
              "Butterfly Garden",
            ],
          },
          {
            title: "Sports",
            items: [
              "Gymnasium",
              "Aerobics Room / Zumba",
              "Yoga Room",
              "Yoga & Meditation Zone",
              "Reflexology Pathway",
              "Spa Room",
              "Salon",
              "Open Gym",
              "Jogging Track",
              "Hammock Zone",
              "Aroma Garden",
              "Zen Garden",
              "Herbal Garden",
              "Butterfly Garden",
            ],
          },
          {
            title: "Kids",
            items: [
              "Kids Play Area",
              "Toddler’s Play Area",
              "Mud Play Area",
              "Trampoline",
              "Hide & Seek Arena",
              "Tyre Swing",
              "Vish Amrit Game (4 Corners)",
              "Latto Game",
              "Snakes and Ladders",
              "Kiwi Mini Club-1 & 2",
              "Chit-Chat Plaza",
            ],
          },
          {
            title: "Picture Perfect Skies",
            items: [
              "Selfie Point",
              "Viewing Gallery",
              "Sculpture Mound",
              "Tree Plaza",
              "Fountain Plaza",
              "Step Garden",
              "Bonfire Court",
              "Social Island",
              "Welcome Fountain",
              "Viewing Stand",
              "Camp Site",
              "Forest Trail",
              "Jungle Trail",
            ],
          },
        ],
        miscTitle: "Misc",
        miscItems: [
          "Club House (Beehive Club)",
          "Lounge",
          "Cafe",
          "Mini Theatre",
          "Music & Dance Zone",
          "Art & Craft Hobby Zone",
          "Outdoor Play Area",
          "Study & Library",
          "Working Pod",
          "Cards Zone",
          "Dart Game Zone",
          "Social Circle",
          "Senior Citizen Plaza",
          "Multipurpose Lawn",
          "Seating Plaza",
          "Pergola with Seating",
          "BBQ Zone",
          "Trellis with Parents Seat Out",
          "Tree Plaza",
          "Pets Park",
          "Pet Washing / Bathing Station",
          "Urban Farming",
          "Fruit Orchard",
          "Recycle Zone",
          "School",
          "Hospital",
          "Supermarket",
          "Police Chowki",
          "Mall",
          "Bus Terminal",
          "Entrance Gate with 3-Tier Security",
          "CCTV Surveillance at Main Entrance & Each Wing",
          "DG Back-Up for Lifts & Common Areas",
          "Fire Fighting System",
          "Car Charging Station",
          "Sewage Treatment Plant",
          "Organic Waste Converter",
          "Drip/Sprinkler Irrigation for Landscaping",
          "Rainwater Harvesting",
          "Solar Power for Garden & Street Lighting",
          "Changing Room",
          "Amazon Locker",
          "Laundry Room",
          "Drivers Room in Each Building",
        ],
      },
      specifications: [
        {
          title: "Flooring",
          content: [
            "800 mm x 800 mm vitrified tiles in all rooms from Kajaria / ZealTop / Nitco / Johnson / RAK / Somany or equivalent make.",
            "Anti-skid tiles in bathrooms, terrace and dry balcony.",
            "Designer tiles flooring in each floor lobby.",
          ],
        },
        {
          title: "Bathroom",
          content: [
            "Ceramic tile dado up to 7 feet height in each bathroom (2' x 4').",
            "C.P. fittings of Jaquar / Cera / Kohler or equivalent make.",
            "Sanitaryware of Jaquar / Kohler or equivalent make in all bathrooms.",
          ],
        },
        {
          title: "Doors & Windows",
          content: [
            "Veneered finish and melamine polished main door.",
            "Both-side laminated doors for all bedrooms and toilets.",
            "Door fittings of Hafele / Dorma / Hettich / PAG / Europa make.",
            "Powder-coated aluminium windows with PVC mosquito net in each flat, excluding toilet windows.",
            "Aluminium louvered windows with exhaust fan provision.",
            "M.S. railing for aluminium windows up to 1 metre height from finished floor level, excluding toilets.",
          ],
        },
        {
          title: "Electrical",
          content: [
            "Concealed copper wiring with circuit breakers.",
            "Electrical switches of Schneider / Anchor / Vinay / Panasonic make.",
            "Provision for inverter point.",
            "TV and telephone points in hall and master bedroom.",
            "A.C. point provision in all bedrooms and living room.",
            "Video door phone with colour screen in each flat.",
          ],
        },
        {
          title: "Kitchen & Finishes",
          content: [
            "Granite kitchen platform with stainless steel sink and provision for water purifier.",
            "Hob and chimney of Elica / Faber / Jyoti make.",
            "Semi-modular kitchen cabinet below kitchen platform.",
            "Piped gas system of MNGL for each flat.",
            "Oil bound distemper paint for internal walls and ceiling.",
            "Oil paint to railings, and texture with acrylic paint to exterior walls.",
          ],
        },
      ],
      galleryTabs: [
        {
          title: "Gallery",
          anchorId: "gallery",
          images: [
            {
              src: "/images/projects/wellington/7.jpg",
              alt: "Wellington tower view",
              caption: "Tower View",
            },
            {
              src: "/images/projects/wellington/2.jpg",
              alt: "Wellington podium view",
              caption: "Podium View",
            },
            {
              src: "/images/projects/wellington/3.jpg",
              alt: "Wellington landscape view",
              caption: "Landscape View",
            },
            {
              src: "/images/projects/wellington/4.jpg",
              alt: "Wellington arrival view",
              caption: "Arrival Experience",
            },
            {
              src: "/images/projects/wellington/5.jpg",
              alt: "Wellington facade view",
              caption: "Facade View",
            },
            {
              src: "/images/projects/wellington/6.jpg",
              alt: "Wellington tower view",
              caption: "Tower View",
            },
          ],
        },
        {
          title: "Floor Plans",
          anchorId: "floorplans",
          layout: "grid",
          images: [
            {
              src: "/images/projects/wellington/3-BHK-XL.png",
              alt: "Wellington 3 BHK XL floor plan",
              caption: "3 BHK XL",
            },
            {
              src: "/images/projects/wellington/3-BHK-L.png",
              alt: "Wellington 3 BHK L floor plan",
              caption: "3 BHK L",
            },
          ],
        },
        {
          title: "Master Plan Layout",
          anchorId: "master-plan-layout",
          images: [
            {
              src: "/images/projects/wellington/Wellington-Master-Layout.jpg",
              alt: "Master Plan layout of Wellington at Pride World City",
              caption: "Master Plan Layout",
            },
          ],
        },
        {
          title: "Construction Updates",
          anchorId: "construction-updates",
          images: [
            {
              src: "/images/projects/wellington/wellington-video.mp4",
              alt: "Wellington construction status video",
              caption: "Current Status Video",
              type: "video",
            },
          ],
        },
      ],

      connectivity: {
        title: "Connectivity",
        groups: [
          {
            title: "Educational Institutes",
            items: [
              { name: "DY Patil International School", distance: "6 km" },
              { name: "Lexicon International School", distance: "7 km" },
              { name: "Symbiosis International University", distance: "12 km" },
              { name: "Dr. Mar Theophilus School", distance: "5 km" },
            ],
          },
          {
            title: "Connectivity",
            items: [
              { name: "Pune International Airport", distance: "8 km" },
              { name: "Pune Railway Station", distance: "14 km" },
              { name: "Mumbai-Pune Expressway", distance: "15 km" },
            ],
          },
          {
            title: "Entertainment & Leisure",
            items: [
              { name: "Phoenix Marketcity", distance: "9 km" },
              { name: "Amanora Mall", distance: "16 km" },
              { name: "Decathlon Wagholi", distance: "11 km" },
            ],
          },
          {
            title: "Groceries & Mart",
            items: [
              { name: "DMart Ready", distance: "5 km" },
              { name: "Reliance Smart", distance: "6 km" },
              { name: "Star Bazaar", distance: "9 km" },
              {
                name: "Local Markets & Convenience Stores",
                distance: "2-3 km",
              },
            ],
          },
          {
            title: "IT/ITES",
            items: [
              { name: "Commerzone IT Park", distance: "11 km" },
              { name: "EON IT Park", distance: "13 km" },
              { name: "World Trade Center Pune", distance: "13 km" },
              { name: "Weikfield IT Park", distance: "9 km" },
              { name: "Panchshil Tech Park", distance: "10 km" },
              { name: "Cerebrum IT Park", distance: "10 km" },
            ],
          },
          {
            title: "Hospitals",
            items: [
              { name: "Ajeenkya Healthcare Center", distance: "6 km" },
              { name: "Sathe Multi-speciality Hospital", distance: "5 km" },
              {
                name: "Indrayani Hospital and Cancer Institute",
                distance: "8 km",
              },
            ],
          },
          {
            title: "Metro Station",
            items: [
              { name: "Ramwadi", distance: "10 km" },
              { name: "Kalyani Nagar", distance: "11 km" },
              { name: "Yerwada", distance: "11 km" },
              { name: "Bund Garden", distance: "14 km" },
              { name: "Ruby Hall Clinic", distance: "14 km" },
              { name: "Pune Railway Station", distance: "14 km" },
              { name: "Kasarwadi", distance: "12 km" },
              { name: "Bhosari", distance: "9 km" },
            ],
          },
        ],
      },
    },

    cta: {
      title: "Interested in Wellington?",
      description:
        "Get in touch with our sales team to learn more about this project or schedule a site visit.",
      primaryLabel: "Schedule a Site Visit",
      primaryHref: "/contact",
      secondaryLabel: "Contact Us",
      secondaryHref: "/contact",
    },
    rera: {
      note: "MahaRERA registered - Details available at",
      websiteUrl: "https://maharera.mahaonline.gov.in",
      items: [
        {
          title: "Tower - A, B",
          number: "P52100000000",
          qrSrc:
            "/images/projects/wellington/rera/WELLINGTON- A-B ~ P52100031008.png",
        },
        {
          title: "Tower - C, D",
          number: "P52100000001",
          qrSrc:
            "/images/projects/wellington/rera/WELLINGTON C - D ~ P52100048477.png",
        },
        {
          title: "Tower - E, F, J & K ",
          number: "P52100000002",
          qrSrc:
            "/images/projects/wellington/rera/Wellington_E, F, J & K P52100052379.png",
        },
        {
          title: "Tower - F, G",
          number: "P52100000002",
          qrSrc:
            "/images/projects/wellington/rera/WELLINGTON F-G ~ P52100054534.png",
        },
        {
          title: "Tower - L, M",
          number: "P52100000002",
          qrSrc:
            "/images/projects/wellington/rera/WELLINGTON-L-M ~ P52100045786.png",
        },
        {
          title: "Tower - N, O",
          number: "P52100000002",
          qrSrc:
            "/images/projects/wellington/rera/WELLINGTON- N-O ~ P52100032380.png",
        },
      ],
    },
  },
];
