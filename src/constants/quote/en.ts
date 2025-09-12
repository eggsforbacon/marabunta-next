import {Choice} from "@/types/quote";

export const en: {id: string, context?: string, prompt : string, highlight? : string, answers?: Choice[], options?: string[][]}[] = [
    {
        id: "0x0001",
        "prompt": "What are we going to $ together?",
        "highlight": "create",
        "answers": [
            {
                "title": "A digital project",
                "description": "Strategies and content that connect, boost your brand, and generate authentic interaction on social media."
            },
            {
                "title": "A production project",
                "description": "Creative and technical management to bring your ideas to life, from planning to professional execution and logistics."
            },
            {
                "title": "A communications project",
                "description": "Comprehensive plans that strengthen your brand's connection with its audience, delivering clear and effective messages."
            },
            {
                "title": "A design project",
                "description": "Impactful visual creations that represent your brand's essence and capture the attention of your target audience."
            }
        ],
    },
    {
        id: "0x1000",
        "prompt": "How can we $ you?",
        "highlight": "help",
        "answers": [
            {
                "title": "I want a software product",
                "description": "Customized solutions that address your technological needs, optimizing processes and delivering high-quality digital experiences."
            },
            {
                "title": "I want to develop my brand",
                "description": "Comprehensive plans to build a solid, recognizable brand from scratch, aligned with your core values."
            },
            {
                "title": "I want to establish my brand",
                "description": "Creative strategies to enhance your brand identity and emotionally connect with your audience."
            },
        ]
    },
    {
        id: "0x1100",
        "prompt": "What $ of software?",
        "highlight": "type",
        "answers": [
            {
                "title": "A web product",
                "description": "Innovative developments that leverage the web to deliver scalable, accessible, and tailored solutions for your business needs."
            },
            {
                "title": "A desktop product",
                "description": "Robust and efficient applications designed for desktop environments, optimizing performance and productivity."
            },
            {
                "title": "A mobile product",
                "description": "Intuitive and dynamic apps that provide optimized experiences for users on mobile devices."
            }
        ]
    },
    {
        id: "0x1101",
        "prompt": "What $ of page?",
        "highlight": "kind",
        "answers": [
            {
                "title": "A landing page",
                "description": "Capture leads and boost conversions with a landing page."
            },
            {
                "title": "An Ecommerce",
                "description": "Sell your products and services online with an e-commerce store."
            },
            {
                "title": "A blog",
                "description": "Attract traffic and position your brand with an informative blog."
            },
            {
                "title": "A custom website",
                "description": "Thinking of something else? We build your website to meet your business needs."
            },
        ]
    },
    {
        id: "0x1102",
        "prompt": "How $ is your site?",
        "highlight": "big",
    },
    {
        id: "0x1103",
        "prompt": "How many $ does your site have?",
        "highlight": "products",
    },
    {
        id: "0x1104",
        "prompt": "Do you need a $ gateway?",
        "highlight": "payment",
        "answers": [
            {
                "title": "Yes, I need to create one",
                "description": "We can help you set up a payment gateway so you can start accepting payments."
            },
            {
                "title": "I have one, I need to integrate it (choose one)",
                "description": "Let us know which one, and we'll integrate it into your website."
            },
            {
                "title": "No",
            },
        ],
        options: [
            [
                "PayU Latam" +
                "MercadoPago",
                "Place to Pay",
                "ePayco",
                "PSE (Pagos Seguros en Línea)",
                "Stripe",
                "Square",
                "Bank provider (national or international)",
                "Online banking (like Paypal or Revolut)",
                "Other"
            ]
        ]
    },
    {
        id: "0x1105",
        "prompt": "How do you want the $?",
        "highlight": "design",
        "answers": [
            {
                "title": "I already have one",
                "description": "Great! Provide us with your design, and we'll integrate it into a functional and optimized platform."
            },
            {
                "title": "I want a custom design",
                "description": "We'll create a unique, custom design that reflects your brand identity and captivates your audience."
            },
            {
                "title": "I want to use a template",
                "description": "We'll help you find and customize a professional template that suits your needs."
            },
            {
                "title": "I need help deciding",
                "description": "We're happy to help! We'll advise you to find the best design for your goals and budget."
            },
        ]
    },
    {
        id: "0x1106",
        "prompt": "Do you need $ functionality?",
        "highlight": "users and login",
        "answers": [
            {
                "title": "Yes, for administrative purposes",
                "description": "We implement secure and efficient systems to manage your platform."
            },
            {
                "title": "Yes, for my website users",
                "description": "We create user-friendly login experiences, ensuring data protection and accessibility for your users."
            },
            {
                "title": "Yes, multiple logins",
                "description": "We develop complex systems to manage different user roles, prioritizing security and functionality."
            },
            {
                "title": "No",
            },
        ]
    },
    {
        id: "0x1107",
        "prompt": "Do you need an internal $ or index?",
        "highlight": "search",
        "answers": [
            {
                "title": "Yes, for a specific page of the site",
            },
            {
                "title": "Yes, for the whole site",
            },
            {
                "title": "No",
            },
            {
                "title": "I need help deciding",
            },
        ]
    },
    {
        id: "0x1108",
        "prompt": "Do you have $ already?",
        "highlight": "hosting or domain",
        "answers": [
            {
                "title": "Yes, I have both",
            },
            {
                "title": "I only have the hosting",
            },
            {
                "title": "I only have the domain",
            },
            {
                "title": "I don't have either",
            },
        ]
    },
    {
        id: "0x1109",
        "prompt": "Do you need $ services?",
        "highlight": "SEO",
        "answers": [
            {
                "title": "Yes",
            },
            {
                "title": "I don't need them",
            },
            {
                "title": "I need help choosing",
            },
        ]
    },
    {
        id: "0x1001",
        "prompt": "Do you need multiple $ for your software?",
        "highlight": "languages",
        "answers": [
            {
                "title": "Yes",
            },
            {
                "title": "No",
            },
        ],
        options: [
            [
                "English" +
                "Spanish",
                "German",
                "French",
                "Italian",
                "Other",
            ]
        ]
    },
    {
        id: "0x1002",
        "prompt": "What level of $ do you need for your product?",
        "highlight": "interactions and animations",
        "answers": [
            {
                "title": "I don’t need animations or specific interactions.",
                "description": "The product will be static, without additional animations or interactions. This is ideal for simple and functional projects."
            },
            {
                "title": "Fewer than 3 standard animations or interactions.",
                "description": "The product will include basic animations, like smooth transitions or click effects, to subtly improve the user experience."
            },
            {
                "title": "More than 3 complex animations or interactions.",
                "description": "The product will feature advanced animations or dynamic interactions, such as custom movements, complex effects, and tailored interactive elements."
            },
            {
                "title": "I need help choosing.",
            },
        ]
    },
    {
        id: "0x1003",
        "prompt": "What kind of $ do you need after delivery?",
        "highlight": "technical support",
        "answers": [
            {
                "title": "I don’t want maintenance or support.",
                "description": "We'll deliver your product fully completed, with no updates, support, or maintenance included after delivery."
            },
            {
                "title": "Yes, I want periodic maintenance for a defined period.",
                "description": "Regular maintenance, including updates and bug fixes, will be provided during the agreed upon time frame."
            },
            {
                "title": "Yes, I want periodic maintenance for an indefinite period.",
                "description": "Technical support will include long-term continuous maintenance, with regular updates and issue resolution as needed."
            },
            {
                "title": "Yes, I need specific maintenance at pre-scheduled times.",
                "description": "Technical support will be scheduled only on specific dates to address defined needs, such as updates or adjustments."
            }
        ],
        options: [
            [
                "6 months/2 dates",
                "12 months/4 dates",
                "18 months/6 dates",
                "2 years/10 dates",
                "3 years/15 dates",
            ],
            [
                "Every 6 months/Twice a year",
                "Every 3 months/8 times a year",
                "Every 2 months/10 times a year",
                "Monthly/12 times a year",
                "At will"
            ]
        ]
    },
    {
        id: "0x1004",
        "prompt": "What $ is your product at?",
        "highlight": "stage",
        "answers": [
            {
                "title": "It’s just an idea, starting from scratch.",
                "description": "There’s no previous progress; we’ll start from the ground up to conceptualize, design, and fully develop your product."
            },
            {
                "title": "I have some references, but nothing is done.",
                "description": "You have a general idea and some inspiration; we’ll work to turn those references into a clear and functional product."
            },
            {
                "title": "It’s already in development.",
                "description": "Your project is in the early or mid-development stage; we can help complete it to meet your goals."
            },
            {
                "title": "It’s already developed. I want to update or migrate it.",
                "description": "Your product exists, and you need assistance with adding new features, updating it, or adapting it to a new platform or technology."
            }
        ]
    }
];