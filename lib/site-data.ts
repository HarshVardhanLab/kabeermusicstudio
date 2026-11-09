export const bookingPhone = process.env.NEXT_PUBLIC_BOOKING_PHONE || "917906695961";
export const displayPhone = process.env.NEXT_PUBLIC_BOOKING_DISPLAY_PHONE || "+91 79066 95961";
export const bookingPhone2 = process.env.NEXT_PUBLIC_BOOKING_PHONE2 || "919557535987";
export const displayPhone2 = process.env.NEXT_PUBLIC_BOOKING_DISPLAY_PHONE2 || "+91 95575 35987";
export const bookingPhone3 = process.env.NEXT_PUBLIC_BOOKING_PHONE3 || "918630148164";
export const displayPhone3 = process.env.NEXT_PUBLIC_BOOKING_DISPLAY_PHONE3 || "+91 86301 48164";
export const channelUrl = "https://www.youtube.com/@Bhajankirtansonotek";

export const programs = [
  { slug: "bhajan-sandhya", title: "Bhajan Sandhya", category: "SING TOGETHER", description: "For an evening of shared devotion.", symbol: "music_note", iconName: "music_note", color: "rose" },
  { slug: "kirtan", title: "Kirtan", category: "CALL & RESPONSE", description: "A joyful, participatory gathering.", symbol: "groups", iconName: "groups", color: "gold" },
  { slug: "mata-ki-chowki", title: "Mata Ki Chowki", category: "CELEBRATE", description: "For a special devotional occasion.", symbol: "celebration", iconName: "celebration", color: "green" },
  { slug: "satsang", title: "Satsang & devotional music", category: "COME TOGETHER", description: "Share a moment of reflection.", symbol: "spa", iconName: "spa", color: "lilac" },
];

export const videos = [
  { id: "bvYoTfjCmY0", title: "Hanuman Bhajan", singer: "Sonotek", category: "Hanuman", subtitle: "Hanuman Ji Bhajan" },
  { id: "JSooAKbDF_Y", title: "Shyam Bhajan", singer: "Sonotek", category: "Shyam", subtitle: "Khatu Shyam Bhajan" },
  { id: "nqgCxrkFmsE", title: "Bhajan", singer: "Sonotek", category: "Bhajan", subtitle: "Devotional Bhajan" },
  { id: "wdSwi4W6_co", title: "Bhajan", singer: "Sonotek", category: "Bhajan", subtitle: "Devotional Bhajan" },
  { id: "m8sGCs_DcZs", title: "Bhajan", singer: "Sonotek", category: "Bhajan", subtitle: "Devotional Bhajan" },
  { id: "stmMozD47Zg", title: "Bhajan", singer: "Sonotek", category: "Bhajan", subtitle: "Devotional Bhajan" },
  { id: "gog4g2WWfqw", title: "Bhajan", singer: "Sonotek", category: "Bhajan", subtitle: "Devotional Bhajan" },
  { id: "YpGe7j5cwXo", title: "Bhajan", singer: "Sonotek", category: "Bhajan", subtitle: "Devotional Bhajan" },
];

export const traditions = [
  {
    slug: "shiva",
    title: "Shiva Bhajan",
    hindi: "शिव भजन",
    symbol: "trident",
    iconName: "spa",
    symbolText: "ॐ नमः शिवाय",
    color: "blue",
    description: "Devotional songs in praise of Lord Shiva — the destroyer and transformer in the Hindu trinity. Shiva bhajans evoke themes of asceticism, cosmic power, and grace.",
    mood: "Meditative, powerful, transcendent",
    occasions: ["Maha Shivratri", "Monday Puja", "Satsang evenings"],
  },
  {
    slug: "hanuman",
    title: "Hanuman Bhajan",
    hindi: "हनुमान भजन",
    symbol: "bolt",
    iconName: "bolt",
    symbolText: "जय श्री राम",
    color: "saffron",
    description: "Bhajans celebrating Hanuman — the devoted servant of Lord Ram, symbol of strength, courage and bhakti. These high-energy songs are sung to invoke Hanuman's blessings.",
    mood: "Energetic, devotional, victorious",
    occasions: ["Hanuman Jayanti", "Tuesday Puja", "Kirtan evenings"],
  },
  {
    slug: "ram",
    title: "Ram Bhajan",
    hindi: "राम भजन",
    symbol: "brightness_high",
    iconName: "brightness_high",
    symbolText: "जय श्री राम",
    color: "rose",
    description: "Songs dedicated to Lord Ram, the ideal king and seventh avatar of Vishnu. Ram bhajans are deeply melodic, often drawing from the Ramayana narrative.",
    mood: "Serene, joyful, narrative",
    occasions: ["Ram Navami", "Vivah Panchami", "Bhajan Sandhya"],
  },
  {
    slug: "krishna",
    title: "Krishna Bhajan",
    hindi: "कृष्ण भजन",
    symbol: "music_note",
    iconName: "music_note",
    symbolText: "राधे कृष्णा",
    color: "gold",
    description: "Devotional music for Lord Krishna — beloved deity of love, music, and divine play. Krishna bhajans range from playful raas-leela songs to deeply emotional prem-bhakti.",
    mood: "Playful, romantic, blissful",
    occasions: ["Janmashtami", "Holi celebrations", "Satsang"],
  },
  {
    slug: "mata",
    title: "Mata Bhajan",
    hindi: "माता भजन",
    symbol: "local_fire_department",
    iconName: "local_fire_department",
    symbolText: "जय माता दी",
    color: "green",
    description: "Songs in praise of the Divine Mother — Durga, Kali, Lakshmi, Saraswati, Vaishno Devi and more. Mata bhajans are essential for Navratri celebrations and Jagrans.",
    mood: "Celebratory, powerful, melodic",
    occasions: ["Navratri", "Mata Ki Chowki", "Jagran"],
  },
  {
    slug: "goga-ji",
    title: "Goga Ji Bhajan",
    hindi: "गोगा जी भजन",
    symbol: "military_tech",
    iconName: "military_tech",
    symbolText: "जाहर पीर",
    color: "lilac",
    description: "Devotional songs for Goga Ji — a revered folk deity of Rajasthan and Haryana. These bhajans are sung especially during Goga Navami.",
    mood: "Folk, spirited, traditional",
    occasions: ["Goga Navami", "Local celebrations", "Folk Satsang"],
  },
];

export const artists = [
  {
    slug: "pramod-ajmeriya",
    name: "Bhajan Samrat Pramod Ajmeriya",
    specialty: "Devotional Singer · Sonotek",
    description: "Bhajan Samrat Pramod Ajmeriya is a celebrated devotional singer renowned for his soul-stirring Hanuman and Khatu Shyam bhajans.",
    videos: ["bvYoTfjCmY0", "JSooAKbDF_Y", "nqgCxrkFmsE", "wdSwi4W6_co", "m8sGCs_DcZs", "stmMozD47Zg", "gog4g2WWfqw", "YpGe7j5cwXo"],
  },
];

export const faqs = [
  { q: "How do I enquire about an event?", a: "Share your occasion, date, city and preferred format in the enquiry form. You can send it through WhatsApp or use the phone contact to speak with the team." },
  { q: "Does sending an enquiry confirm my booking?", a: "No. The date, artist availability, event details and terms need to be confirmed by the team before a booking is confirmed." },
  { q: "Which devotional styles can I ask about?", a: "The channel features Shiva, Hanuman, Ram, Krishna, Mata, satsangi and Goga Ji devotional music. Tell us the tradition or mood you have in mind." },
  { q: "Can I request a particular singer?", a: "You can mention a preferred singer in your enquiry. The team will let you know whether that performer is available for your event." },
  { q: "What is Mata Ki Chowki?", a: "Mata Ki Chowki is a traditional devotional gathering in honour of the Goddess, featuring bhajans, aarti and communal worship. It is typically held in the evening and can span several hours." },
  { q: "What occasions are best suited for a Bhajan Sandhya?", a: "Bhajan Sandhya works beautifully for birthday celebrations, house-warming ceremonies (Griha Pravesh), anniversaries, religious observances, and evening satsang gatherings." },
  { q: "How long does a typical program last?", a: "Program durations vary. A simple Bhajan Sandhya may last 1–2 hours, while a full Mata Ki Chowki or Jagran can extend through the night. Share your timing expectations in the enquiry." },
  { q: "Can programs be organised outside Delhi NCR?", a: "Yes. The team works across cities. Share your location in the enquiry and the team will confirm whether travel logistics are feasible for your date." },
];
