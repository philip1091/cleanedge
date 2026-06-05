import React from "react";

export const content = {
    en:{
        header: {
            title: "Property Services",
            services: "Services",
            process: "Process",
            about: "About",
            contact: "Get a quote",
        },
        hero: {
            banner: "Montréal's Commercial Cleaning Leaders",
            title: {
                part1: "Cleaner",
                part2: "Spaces",
                part3: "Better places."
            },
            sub_title: ["Reliable .", "Professional .", "Essential"],
            description:"CleanExcel delivers premium commercial cleaning, property maintenance, and day porter services across Greater Montréal — bilingual, bonded, and built around your schedule.",
            button1:"Our Services",
            button2:"Request a Free Quote",
            hero_foot:[
                {
                    icon: <svg className="stat-icon text-green shrink-0" width="28" height="28" viewBox="0 0 28 28" fill="none">
                        <path d="M14 4 C9 4 5 8 5 13 C5 18 9 22 14 22" stroke="#6abf1e" strokeWidth="1.8"
                    strokeLinecap="round"/>
                        <path d="M14 22 C19 22 23 18 23 13" stroke="#6abf1e" strokeWidth="1.8" strokeLinecap="round"
                    strokeLinejoin="2 2"/>
                        <path d="M10 13 L13 16 L20 9" stroke="#6abf1e" strokeWidth="1.8" strokeLinecap="round"
                    strokeLinejoin="round"/>
                        </svg>,
                    title:"Free",
                    description:"Site Assessment"
                },
                {
                    icon: <svg className="stat-icon text-green shrink-0" width="28" height="28" viewBox="0 0 28 28" fill="none">
                        <circle cx="14" cy="14" r="10" stroke="#6abf1e" strokeWidth="1.8"/>
                        <path d="M14 8V14L18 17" stroke="#6abf1e" strokeWidth="1.8" strokeLinecap="round"/>
                    </svg>,
                    title:"24h",
                    description:"Quote Turnaround"
                },
                {
                    icon: <svg className="stat-icon text-green shrink-0" width="28" height="28" viewBox="0 0 28 28" fill="none">
                        <path d="M14 4 L17 10 L24 11 L19 16 L20 23 L14 20 L8 23 L9 16 L4 11 L11 10 Z" stroke="#6abf1e"
                              strokeWidth="1.8" strokeLinejoin="round"/>
                    </svg>,
                    title:"100%",
                    description:"Satisfaction Guarantee"
                },
                {
                    icon: <svg className="stat-icon text-green shrink-0" width="28" height="28" viewBox="0 0 28 28" fill="none">
                        <path d="M6 14 L10 8 L14 12 L18 6 L22 10" stroke="#6abf1e" strokeWidth="1.8" strokeLinecap="round"
                              strokeLinejoin="round"/>
                        <line x1="4" y1="22" x2="24" y2="22" stroke="#6abf1e" strokeWidth="1.5" strokeLinecap="round"/>
                        <circle cx="22" cy="7" r="3" stroke="#6abf1e" strokeWidth="1.5"/>
                    </svg>,
                    title:"Bilingual",
                    description:"FR\n" + "\t\t\t\t\t\t\t/ EN Service"
                },
            ]
        },
        banner_intro: [
            {
                title: "Commercial Cleaning",
                icon:<svg className="strip-icon text-navy opacity-80" width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <rect x="2" y="6" width="18" height="14" rx="1" stroke="#0e1b2e" strokeWidth="2"/>
                    <path d="M7 6V4C7 3 7.9 2 9 2H13C14.1 2 15 3 15 4V6" stroke="#0e1b2e" strokeWidth="2"/>
                </svg>
            },
            {
                title: "Property Maintenance",
                icon:<svg className="strip-icon" width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <path d="M11 2 L19 7 L19 20 L3 20 L3 7 Z" stroke="#0e1b2e" strokeWidth="2" strokeLinejoin="round"/>
                    <rect x="8" y="13" width="6" height="7" stroke="#0e1b2e" strokeWidth="1.5"/>
                </svg>
            },
            {
                title: "Day Porter Services",
                icon:<svg className="strip-icon" width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <path d="M6 18 L6 8 Q6 4 11 4 Q16 4 16 8 L16 18" stroke="#0e1b2e" strokeWidth="2" strokeLinecap="round"/>
                    <line x1="3" y1="18" x2="19" y2="18" stroke="#0e1b2e" strokeWidth="2" strokeLinecap="round"/>
                </svg>
            },
            {
                title: "Eco-Friendly Solutions",
                icon:<svg className="strip-icon" width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <path d="M11 3 C7 3 4 6 4 9 C4 13 7 15 11 19 C15 15 18 13 18 9 C18 6 15 3 11 3Z" stroke="#0e1b2e" strokeWidth="2" strokeLinejoin="round"/>
                </svg>
            },
        ],
        about:{
            left:{
                intro: "Who We Are",
                title: {
                    part1: "MONTRÉAL'S",
                    part2: "TRUSTED",
                    part3: "CLEANING PARTNER"
                },
                description: "Founded in Montréal, CleanExcel was built on a simple promise: show up, do the job right, every single time. We serve offices, hospitality venues, healthcare facilities, and more — with bilingual staff who understand your business.",
                checks:["Fully insured & bonded", "Background-checked team", "Bilingual service — FR/EN", "100% eco-certified products"]

            },
            right:{
                intro: "Our Commitment",
                title: {
                    part1: "PROMISES WE",
                    part2: "STAND BEHIND"
                },
                content: [
                    {
                        title: "Free",
                        title_side:"↗",
                        subTitle:"No-Obligation Site Assessment",
                        description:"We visit your property, evaluate your needs, and design a custom plan — at zero cost to you."
                    },
                    {
                        title: "24",
                        title_side:"H",
                        subTitle:"Quote Guarantee",
                        description:"Clear, itemized pricing delivered within 24 hours. No vague estimates, no hidden fees."
                    },
                    {
                        title: "Lock",
                        title_side:"🔒",
                        subTitle:"Founding Client Rate",
                        description:"Our first clients lock in introductory pricing — permanently. Be among the first to benefit."
                    },
                    {
                        title: "100",
                        title_side:"%",
                        subTitle:"Satisfaction Guarantee",
                        description:"Not happy with a visit? We return and re-clean at no charge. Your standards are our standards."
                    },
                ]
            }
        },
        services:{
            intro: "What We Offer",
            title: {
                part1:"Our",
                part2: "Services",
            },
            button: "View all services",
            content:[
                {
                    icon: <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
                        <rect x="3" y="7" width="20" height="16" rx="1" stroke="#6abf1e" strokeWidth="1.8"/>
                        <path d="M8 7V5C8 4 8.9 3 10 3H16C17.1 3 18 4 18 5V7" stroke="#6abf1e" strokeWidth="1.8"/>
                        <line x1="8" y1="14" x2="18" y2="14" stroke="#6abf1e" strokeWidth="1.4" strokeLinecap="round"/>
                        <line x1="8" y1="18" x2="14" y2="18" stroke="#6abf1e" strokeWidth="1.4" strokeLinecap="round"/>
                    </svg>,
                    title: "Office Cleaning",
                    description:"Daily, weekly, or monthly programs for workspaces of all sizes. Desks, boardrooms, kitchens, and washrooms — spotless on your schedule."
                },
                {
                    icon: <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
                        <path d="M13 3 L22 8 L22 23 L4 23 L4 8 Z" stroke="#6abf1e" strokeWidth="1.8" strokeLinejoin="round"/>
                        <rect x="10" y="15" width="6" height="8" stroke="#6abf1e" strokeWidth="1.5"/>
                        <circle cx="19" cy="12" r="2" stroke="#6abf1e" strokeWidth="1.5"/>
                    </svg>,
                    title: "Hospitality",
                    description: "Hotels, restaurants, and event spaces cleaned to the highest standards of hygiene. Guest-ready results, every shift."
                },
                {
                    icon: <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
                        <path d="M7 23 L7 12 Q7 5 13 5 Q19 5 19 12 L19 23" stroke="#6abf1e" strokeWidth="1.8" strokeLinecap="round"/>
                        <line x1="3" y1="23" x2="23" y2="23" stroke="#6abf1e" strokeWidth="1.8" strokeLinecap="round"/>
                        <line x1="10" y1="14" x2="16" y2="14" stroke="#6abf1e" strokeWidth="1.3" opacity="0.6"/>
                    </svg>,
                    title: "Day Porter Services",
                    description: "On-site staff during business hours to maintain lobbies, washrooms, and common areas. Continuous cleanliness, all day long."
                },
                {
                    icon: <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
                        <circle cx="13" cy="13" r="9" stroke="#6abf1e" strokeWidth="1.8"/>
                        <path d="M13 7 L13 13 L18 17" stroke="#6abf1e" strokeWidth="1.8" strokeLinecap="round"/>
                    </svg>,
                    title: "Post-Construction",
                    description: "Deep cleaning for newly built or renovated spaces. Dust, debris, paint residue — fully cleared before your grand opening."
                },
                {
                    icon: <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
                        <path d="M13 3 C9 3 5 6.5 5 10 C5 15 9 17.5 13 22 C17 17.5 21 15 21 10 C21 6.5 17 3 13 3Z" stroke="#6abf1e" strokeWidth="1.8" strokeLinejoin="round"/>
                        <circle cx="13" cy="11" r="3" stroke="#6abf1e" strokeWidth="1.5"/>
                    </svg>,
                    title: "Eco-Friendly Cleaning",
                    description: "All ECOLOGO-certified, non-toxic products. Safer for your employees, better for the environment — no compromise on results.",
                },
                {
                    icon: <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
                        <circle cx="13" cy="10" r="5" stroke="#6abf1e" strokeWidth="1.8"/>
                        <path d="M5 23 C5 18 21 18 21 23" stroke="#6abf1e" strokeWidth="1.8" strokeLinecap="round"/>
                    </svg>,
                    title: "Healthcare & Medical",
                    description: "Hospital-grade disinfection for clinics and medical offices. Full compliance with Québec public health sanitation protocols."
                }
            ]
        },
        process:{
            intro: "How It Works",
            title: {
                part1: "Our",
                part2: "Process",
            },
            content: [
                {
                    title: "Free Site Assessment",
                    description: "We visit your property, assess your needs, and design a custom cleaning plan — at absolutely no cost to you."
                },
                {
                    title: "Custom Quote",
                    description: "You receive a clear, itemized proposal within 24 hours. No hidden fees, no vague pricing — just straightforward numbers."
                },
                {
                    title: "Dedicated Team",
                    description: "A consistent, vetted, bilingual crew is assigned exclusively to your account. Same faces, same standards, every visit."
                },
                {
                    title: "Ongoing Quality",
                    description: "Monthly check-ins, digital checklists, and a direct line to management keep your standards locked in — permanently."
                }
            ]
        },
        testimonial:{
            intro: "Now Accepting Clients",
            title: {
                part1: "BE AMONG OUR",
                part2: "FIRST CLIENTS",
            },
            description: "CleanExcel is launching in Montréal and accepting our first commercial accounts. Join early and lock in founding rates — permanently — while helping shape a new standard in property services.",
            content: [
                {
                    icon: "🎯",
                    title: "Founding Rate Lock",
                    description: "Sign on as one of our first 10 clients and your introductory rate is locked in for the life of the contract — no annual increases.",
                },
                {
                    icon: "✅",
                    title: "First Month at 20% Off",
                    description: "New accounts receive 20% off their first full month of service — no promo codes, no conditions. Just our way of earning your trust."
                },
                {
                    icon: "🔄",
                    title: "Re-Clean Guarantee",
                    description: " any visit doesn't meet your expectations, we return within 24 hours and re-clean at absolutely no charge. No arguments, no forms."
                }
            ],
            creds: [
                ["🛡", "Fully Insured & Bonded"],
                ["🌿", "ECOLOGO-Certified Products"],
                ["✔", "Background-Checked Team"],
                ["🏥", "Québec Health Protocol Compliant"],
                ["🗣", "Bilingual Service — FR / EN"],
                ["📋", "Digital Checklists & Reporting"],
            ]
        },
        contact:{
            intro: "Get In Touch",
            title: {
                part1: "REQUEST YOUR",
                part2: "Free",
                part3: "Quote"
            },
            description: "Free site assessment, clear pricing within 24 hours, and no obligation. Fill out the form and we'll be in touch by the next business day.",
            contact: [
                {
                    icon:<svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path
                            d="M3 3H7L9 7L7 8.5C8 10.5 9.5 12 11.5 13L13 11L17 13V17C17 17 15 18 13 17C7 15 3 11 3 5C2 3 3 3 3 3Z"
                            stroke="#6abf1e"
                            strokeWidth="1.6"
                            strokeLinejoin="round"
                        />
                    </svg>,
                    title: "phone",
                    description: "(581) 889-3500",
                    isLink: true,
                    ref: "tel:+15145550199"
                },
                {
                    icon:<svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <rect
                            x="2"
                            y="4"
                            width="14"
                            height="10"
                            rx="1"
                            stroke="#6abf1e"
                            strokeWidth="1.6"
                        />

                        <path
                            d="M2 5L9 10L16 5"
                            stroke="#6abf1e"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                        />
                    </svg>,
                    title: "email",
                    description: "info@cleanexcel.ca",
                    isLink: true,
                    ref: "mailto:info@cleanexcel.ca?subject=Request%20for%20a%20Free%20Quote"
                },
                {
                    icon:<svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path
                            d="M9 2C6 2 3.5 4.5 3.5 7.5C3.5 11.5 9 16 9 16C9 16 14.5 11.5 14.5 7.5C14.5 4.5 12 2 9 2Z"
                            stroke="#6abf1e"
                            strokeWidth="1.6"
                        />

                        <circle
                            cx="9"
                            cy="7.5"
                            r="2"
                            stroke="#6abf1e"
                            strokeWidth="1.4"
                        />
                    </svg>,
                    title: "Service Area",
                    description: "Greater Montréal, QC",
                    isLink: false
                },
                {
                    icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <circle
                            cx="9"
                            cy="9"
                            r="7"
                            stroke="#6abf1e"
                            strokeWidth="1.6"
                        />

                        <path
                            d="M9 5V9L12 11"
                            stroke="#6abf1e"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                        />
                    </svg>,
                    title: "Hours",
                    description: "Mon–Fri 8am–6pm · 24/7 Emergency",
                    isLink: false
                }
            ],
            form: {
                f_name:{
                    label: "First Name",
                    placeholder: "John",
                },
                l_name:{
                    label: "Last Name",
                    placeholder: "Doe",
                },
                email:{
                    label: "Email",
                    placeholder: "johndoe@company.ca",
                },
                phone:{
                    label: "Phone",
                    placeholder: "514 000-0000",
                },
                company:{
                    label: "Company / Property",
                    placeholder: "Your business or property name",
                },
                services:{
                    label: "Service Required",
                    placeholder: "Select a service…",
                    content:["Office Cleaning", "Hospitality Cleaning", "Day Porter Services", "Post-Construction Cleaning", "Eco-Friendly Cleaning", "Healthcare & Medical","Not sure — I need a consultation" ],
                },
                message:{
                    label: "Your message",
                    placeholder: "Tell us about your space and requirements...",
                },
                button:"Send Request — Free Quote",
                success: {
                    message1: "Request Received",
                    message2: "We will follow up within one business day with your free quote."
                }
            }
        }


    },
    fr:{
        header: {
            title: "Services Nettoyage",
            services: "Services",
            process: "Processus",
            about: "A Propos",
            contact: "Obtenez un devis",
        },
        hero: {
            banner: "Les leaders du nettoyage commercial à Montréal",
            title: {
                part1: "Espace",
                part2: "Propre.",
                part3: "lieux au top."
            },
            sub_title: ["Fiable .", "Professionnel .", "Essentiel"],
            description: "CleanExcel propose des services professionnels de nettoyage commercial, d’entretien d’immeubles et de conciergerie de jour partout dans le Grand Montréal — bilingues, assurés et conçus selon votre horaire.",
            button1:"Nos Services",
            button2:"Demander un devis gratuit",
            hero_foot:[
                {
                    icon: <svg className="stat-icon text-green shrink-0" width="28" height="28" viewBox="0 0 28 28" fill="none">
                        <path d="M14 4 C9 4 5 8 5 13 C5 18 9 22 14 22" stroke="#6abf1e" strokeWidth="1.8"
                              strokeLinecap="round"/>
                        <path d="M14 22 C19 22 23 18 23 13" stroke="#6abf1e" strokeWidth="1.8" strokeLinecap="round"
                              strokeLinejoin="2 2"/>
                        <path d="M10 13 L13 16 L20 9" stroke="#6abf1e" strokeWidth="1.8" strokeLinecap="round"
                              strokeLinejoin="round"/>
                    </svg>,
                    title:"Gratuit",
                    description:"Évaluation de la place"
                },
                {
                    icon: <svg className="stat-icon text-green shrink-0" width="28" height="28" viewBox="0 0 28 28" fill="none">
                        <circle cx="14" cy="14" r="10" stroke="#6abf1e" strokeWidth="1.8"/>
                        <path d="M14 8V14L18 17" stroke="#6abf1e" strokeWidth="1.8" strokeLinecap="round"/>
                    </svg>,
                    title:"24h",
                    description:"Devis rapide"
                },
                {
                    icon: <svg className="stat-icon text-green shrink-0" width="28" height="28" viewBox="0 0 28 28" fill="none">
                        <path d="M14 4 L17 10 L24 11 L19 16 L20 23 L14 20 L8 23 L9 16 L4 11 L11 10 Z" stroke="#6abf1e"
                              strokeWidth="1.8" strokeLinejoin="round"/>
                    </svg>,
                    title:"100%",
                    description:"Satisfaction garantie"
                },
                {
                    icon: <svg className="stat-icon text-green shrink-0" width="28" height="28" viewBox="0 0 28 28" fill="none">
                        <path d="M6 14 L10 8 L14 12 L18 6 L22 10" stroke="#6abf1e" strokeWidth="1.8" strokeLinecap="round"
                              strokeLinejoin="round"/>
                        <line x1="4" y1="22" x2="24" y2="22" stroke="#6abf1e" strokeWidth="1.5" strokeLinecap="round"/>
                        <circle cx="22" cy="7" r="3" stroke="#6abf1e" strokeWidth="1.5"/>
                    </svg>,
                    title:"Bilingue",
                    description:"FR\n" + "\t\t\t\t\t\t\t/ EN Service"
                },
            ]
        },
        banner_intro: [
            {
                title: "Nettoyage commercial ",
                icon:<svg className="strip-icon text-navy opacity-80" width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <rect x="2" y="6" width="18" height="14" rx="1" stroke="#0e1b2e" strokeWidth="2"/>
                    <path d="M7 6V4C7 3 7.9 2 9 2H13C14.1 2 15 3 15 4V6" stroke="#0e1b2e" strokeWidth="2"/>
                </svg>
            },
            {
                title: "Entretien immobilier ",
                icon:<svg className="strip-icon" width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <path d="M11 2 L19 7 L19 20 L3 20 L3 7 Z" stroke="#0e1b2e" strokeWidth="2" strokeLinejoin="round"/>
                    <rect x="8" y="13" width="6" height="7" stroke="#0e1b2e" strokeWidth="1.5"/>
                </svg>
            },
            {
                title: "Services de conciergerie de jour ",
                icon:<svg className="strip-icon" width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <path d="M6 18 L6 8 Q6 4 11 4 Q16 4 16 8 L16 18" stroke="#0e1b2e" strokeWidth="2" strokeLinecap="round"/>
                    <line x1="3" y1="18" x2="19" y2="18" stroke="#0e1b2e" strokeWidth="2" strokeLinecap="round"/>
                </svg>
            },
            {
                title: "Solutions écologiques ",
                icon:<svg className="strip-icon" width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <path d="M11 3 C7 3 4 6 4 9 C4 13 7 15 11 19 C15 15 18 13 18 9 C18 6 15 3 11 3Z" stroke="#0e1b2e" strokeWidth="2" strokeLinejoin="round"/>
                </svg>
            },
        ],
        about:{
            left:{
                intro: "Qui nous sommes",
                title: {
                    part1: "LE PARTENAIRE",
                    part2: "DE CONFIANCE",
                    part3: "POUR LE NETTOYAGE A MONTRÉAL"
                },
                description: "Fondée à Montréal, CleanExcel repose sur une promesse simple : être présent, faire le travail correctement et offrir un service fiable à chaque visite. Nous desservons les bureaux, les établissements hôteliers, les cliniques, les commerces et plus encore — avec une équipe bilingue qui comprend les besoins de votre entreprise.",
                checks:[
                    "Entièrement assuré et cautionné",
                    "Équipe fiable et vérifiée",
                    "Service bilingue — FR/EN",
                    "Produits écocertifiés à 100 %"
                ]

            },
            right:{
                intro: "Notre engagement",
                title: {
                    part1: "LES PROMESSES",
                    part2: "QUE NOUS TENONS"
                },
                content: [
                    {
                        title: "Gratuit",
                        title_side: "↗",
                        subTitle: "Évaluation sans engagement",
                        description:
                            "Nous visitons vos locaux, évaluons vos besoins et préparons un plan sur mesure — sans frais pour vous."
                    },
                    {
                        title: "24",
                        title_side: "H",
                        subTitle: "Devis garanti",
                        description:
                            "Un prix clair et détaillé, envoyé en moins de 24 h. Pas d’estimation vague, pas de frais cachés."
                    },
                    {
                        title: "Tarif",
                        title_side: "🔒",
                        subTitle: "Prix fondateur garanti",
                        description:
                            "Nos premiers clients profitent d’un tarif de lancement verrouillé à long terme. Soyez parmi les premiers à en bénéficier."
                    },
                    {
                        title: "100",
                        title_side: "%",
                        subTitle: "Satisfaction garantie",
                        description:
                            "Vous n’êtes pas satisfait d’une visite? Nous revenons corriger la situation sans frais. Vos standards sont aussi les nôtres."
                    }
                ]
            }
        },
        services:{
            intro: "Services Offerts",
            title: {
                part1:"Nos",
                part2: "Services",
            },
            button: "Voir tous Nos services",
            content: [
                {
                    icon: <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
                        <rect x="3" y="7" width="20" height="16" rx="1" stroke="#6abf1e" strokeWidth="1.8"/>
                        <path d="M8 7V5C8 4 8.9 3 10 3H16C17.1 3 18 4 18 5V7" stroke="#6abf1e" strokeWidth="1.8"/>
                        <line x1="8" y1="14" x2="18" y2="14" stroke="#6abf1e" strokeWidth="1.4" strokeLinecap="round"/>
                        <line x1="8" y1="18" x2="14" y2="18" stroke="#6abf1e" strokeWidth="1.4" strokeLinecap="round"/>
                    </svg>,
                    title: "Nettoyage de bureaux",
                    description:
                        "Des services quotidiens, hebdomadaires ou mensuels pour des espaces de travail de toutes tailles. Bureaux, salles de réunion, cuisines et toilettes — impeccables, selon votre horaire."
                },
                {
                    icon: <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
                        <path d="M13 3 L22 8 L22 23 L4 23 L4 8 Z" stroke="#6abf1e" strokeWidth="1.8" strokeLinejoin="round"/>
                        <rect x="10" y="15" width="6" height="8" stroke="#6abf1e" strokeWidth="1.5"/>
                        <circle cx="19" cy="12" r="2" stroke="#6abf1e" strokeWidth="1.5"/>
                    </svg>,
                    title: "Hôtellerie et restauration",
                    description:
                        "Hôtels, restaurants et espaces événementiels nettoyés selon des standards élevés d’hygiène et de présentation. Des lieux propres, accueillants et prêts à recevoir vos clients."
                },
                {
                    icon: <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
                        <path d="M7 23 L7 12 Q7 5 13 5 Q19 5 19 12 L19 23" stroke="#6abf1e" strokeWidth="1.8" strokeLinecap="round"/>
                        <line x1="3" y1="23" x2="23" y2="23" stroke="#6abf1e" strokeWidth="1.8" strokeLinecap="round"/>
                        <line x1="10" y1="14" x2="16" y2="14" stroke="#6abf1e" strokeWidth="1.3" opacity="0.6"/>
                    </svg>,
                    title: "Conciergerie de jour",
                    description:
                        "Du personnel sur place durant vos heures d’ouverture pour entretenir les halls, toilettes et aires communes. Une propreté constante, du matin au soir."
                },
                {
                    icon: <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
                        <circle cx="13" cy="13" r="9" stroke="#6abf1e" strokeWidth="1.8"/>
                        <path d="M13 7 L13 13 L18 17" stroke="#6abf1e" strokeWidth="1.8" strokeLinecap="round"/>
                    </svg>,
                    title: "Nettoyage après travaux",
                    description:
                        "Un nettoyage en profondeur pour les espaces rénovés ou nouvellement construits. Poussière, débris et résidus — tout est prêt avant votre ouverture."
                },
                {
                    icon: <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
                        <path d="M13 3 C9 3 5 6.5 5 10 C5 15 9 17.5 13 22 C17 17.5 21 15 21 10 C21 6.5 17 3 13 3Z" stroke="#6abf1e" strokeWidth="1.8" strokeLinejoin="round"/>
                        <circle cx="13" cy="11" r="3" stroke="#6abf1e" strokeWidth="1.5"/>
                    </svg>,
                    title: "Nettoyage écoresponsable",
                    description:
                        "Des produits non toxiques et certifiés ECOLOGO, plus sécuritaires pour vos employés et meilleurs pour l’environnement — sans compromis sur les résultats."
                },
                {
                    icon: <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
                        <circle cx="13" cy="10" r="5" stroke="#6abf1e" strokeWidth="1.8"/>
                        <path d="M5 23 C5 18 21 18 21 23" stroke="#6abf1e" strokeWidth="1.8" strokeLinecap="round"/>
                    </svg>,
                    title: "Cliniques et espaces médicaux",
                    description:
                        "Des services de nettoyage et de désinfection adaptés aux cliniques, bureaux médicaux et espaces de soins, avec une attention particulière aux normes d’hygiène du Québec."
                }
            ]
        },
        process: {
            intro: "Comment ça marche",
            title: {
                part1: "Notre",
                part2: "Processus",
            },
            content: [
                {
                    title: "Évaluation gratuite sur place",
                    description:
                        "Nous visitons vos locaux, évaluons vos besoins et préparons un plan de nettoyage sur mesure — entièrement sans frais."
                },
                {
                    title: "Devis personnalisé",
                    description:
                        "Vous recevez une proposition claire et détaillée en moins de 24 h. Pas de frais cachés, pas de prix vague — seulement des chiffres simples et transparents."
                },
                {
                    title: "Équipe dédiée",
                    description:
                        "Une équipe bilingue, fiable et vérifiée est attitrée à votre compte. Les mêmes visages, les mêmes standards, à chaque visite."
                },
                {
                    title: "Qualité continue",
                    description:
                        "Des suivis mensuels, des listes de contrôle numériques et un accès direct à la gestion assurent le maintien de vos standards — à long terme."
                }
            ]
        },
        testimonial:{
            intro: "Nous acceptons de nouveaux clients",
            title: {
                part1: "SOYEZ PARMI NOS",
                part2: "PREMIERS CLIENTS",
            },
            description: "CleanExcel arrive à Montréal et accepte maintenant ses premiers clients commerciaux. Profitez d’un tarif fondateur garanti à long terme et participez à la création d’un nouveau standard en entretien immobilier.",
            content: [
                {
                    icon: "🎯",
                    title: "Tarif fondateur garanti",
                    description:
                        "Devenez l’un de nos 10 premiers clients et votre tarif de lancement est garanti pour toute la durée du contrat — sans augmentation annuelle."
                },
                {
                    icon: "✅",
                    title: "20 % de rabais le premier mois",
                    description:
                        "Les nouveaux comptes obtiennent 20 % de rabais sur leur premier mois complet de service — sans code promo, sans condition. C’est notre façon de gagner votre confiance."
                },
                {
                    icon: "🔄",
                    title: "Garantie de reprise",
                    description:
                        "Si une visite ne répond pas à vos attentes, nous revenons dans les 24 h pour corriger la situation sans frais. Sans discussion, sans formulaire."
                }
            ],
            creds: [
                ["🛡", "Entièrement assuré et cautionné"],
                ["🌿", "Produits certifiés ECOLOGO"],
                ["✔", "Équipe vérifiée"],
                ["🏥", "Conforme aux protocoles sanitaires du Québec"],
                ["🗣", "Service bilingue — FR / EN"],
                ["📋", "Listes de contrôle et rapports numériques"],
            ]
        },
        contact:{
            intro: "Contactez-nous",
            title: {
                part1: "DEMANDEZ",
                part2: "Gratuitement",
                part3: "VOTRE DEVIS"
            },
            description: "Évaluation gratuite sur place, prix clair en moins de 24 h et aucune obligation. Remplissez le formulaire et nous vous contacterons d’ici le prochain jour ouvrable.",
            contact: [
                {
                    icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path
                            d="M3 3H7L9 7L7 8.5C8 10.5 9.5 12 11.5 13L13 11L17 13V17C17 17 15 18 13 17C7 15 3 11 3 5C2 3 3 3 3 3Z"
                            stroke="#6abf1e"
                            strokeWidth="1.6"
                            strokeLinejoin="round"
                        />
                    </svg>,
                    title: "Téléphone",
                    description: "(581) 889-3500",
                    isLink: true,
                    ref: "tel:+15145550199"
                },
                {
                    icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <rect
                            x="2"
                            y="4"
                            width="14"
                            height="10"
                            rx="1"
                            stroke="#6abf1e"
                            strokeWidth="1.6"
                        />

                        <path
                            d="M2 5L9 10L16 5"
                            stroke="#6abf1e"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                        />
                    </svg>,
                    title: "Courriel",
                    description: "info@cleanexcel.ca",
                    isLink: true,
                    ref: "mailto:info@cleanexcel.ca?subject=Demande%20de%20devis%20gratuit"
                },
                {
                    icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path
                            d="M9 2C6 2 3.5 4.5 3.5 7.5C3.5 11.5 9 16 9 16C9 16 14.5 11.5 14.5 7.5C14.5 4.5 12 2 9 2Z"
                            stroke="#6abf1e"
                            strokeWidth="1.6"
                        />

                        <circle
                            cx="9"
                            cy="7.5"
                            r="2"
                            stroke="#6abf1e"
                            strokeWidth="1.4"
                        />
                    </svg>,
                    title: "Zone de service",
                    description: "Grand Montréal, QC",
                    isLink: false
                },
                {
                    icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <circle
                            cx="9"
                            cy="9"
                            r="7"
                            stroke="#6abf1e"
                            strokeWidth="1.6"
                        />

                        <path
                            d="M9 5V9L12 11"
                            stroke="#6abf1e"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                        />
                    </svg>,
                    title: "Heures d’ouverture",
                    description: "Lun–ven 8 h–18 h · Urgence 24/7",
                    isLink: false
                }
            ],
            form: {
                f_name: {
                    label: "Prénom",
                    placeholder: "Jean",
                },
                l_name: {
                    label: "Nom",
                    placeholder: "Tremblay",
                },
                email: {
                    label: "Courriel",
                    placeholder: "jeantremblay@entreprise.ca",
                },
                phone: {
                    label: "Téléphone",
                    placeholder: "514 000-0000",
                },
                company: {
                    label: "Entreprise / Immeuble",
                    placeholder: "Nom de votre entreprise ou immeuble",
                },
                services: {
                    label: "Service requis",
                    placeholder: "Sélectionnez un service…",
                    content: [
                        "Nettoyage de bureaux",
                        "Nettoyage en hôtellerie et restauration",
                        "Conciergerie de jour",
                        "Nettoyage après travaux",
                        "Nettoyage écoresponsable",
                        "Cliniques et espaces médicaux",
                        "Je ne suis pas sûr — j’ai besoin d’une consultation",
                    ],
                },
                message: {
                    label: "Votre message",
                    placeholder: "Parlez-nous de vos locaux et de vos besoins...",
                },
                button: "Envoyer la demande — devis gratuit",
                success: {
                    message1: "Demande reçue",
                    message2: "Nous vous contacterons d’ici un jour ouvrable avec votre devis gratuit."
                }
            }
        }

    }
}