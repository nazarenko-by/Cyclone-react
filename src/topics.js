// Category: 
// 1 - Hot Topics
// 2 - Article Slider
// 3 - All

const topics = [
    {
        id: 1,
        image: './images/HotTopics/hot-topics-title-1.png',
        tag: ["Fashion"],
        title: <>19 Artists<br/>at Galerie Mathgoth</>,
        text:<>As their first exhibition in the new year, Galerie Mathgoth will be presenting a group exhibition titled The Grape Format where 19 artists will be exploring the art of paper.</>,
        autor:'By Adam Nagourney',
        category: 1
    },
    {
        id: 2,
        image: './images/HotTopics/hot-topics-title-4.png',
        tag:["Art", "LiveStyle"],
        title:<>Cy Twombly<br/>Painting Can Bring<br/>Eight Or Nine<br/>Figures In Auction!</>,
        text:<>As one of the most intelligent, erudite, sophisticated and emotionally eloquent artists of our age, Cy Twombly is a figure of great authority in modern art.</>,
        autor:'By Adam Nagourney',
        category: 1
    },
    {
        id: 3,
        image: './images/HotTopics/hot-topics-title-6.png',
        tag:["Art", "Design"],
        title:<>Ten Inspiration<br/>Picasso Sketches</>,
        text:<>Apart from being an exceptional painter and <span className="text-line">the father of Cubism</span>, Pablo Picasso was also one of the best draftsmen on the 20th century.</>,
        autor:'By Adam Nagourney',
        category: 1
    },
    {
        id:4,
        image: './images/HotTopics/hot-topics-title-2.png',
        tag:["Travel","LiveStyle"],
        title:<>New Zealand's<br/>Backpacker Buses</>,
        text:<>There are so many trip planning resources out there: the Google Trips app; 100,000+ blogs; countless forums, communities, and sharing-economy websites; and everything in between. In that sea of endless information, here’s how to find what is accurate and trustworthy.</>,
        autor:'By NomadicMatt',
        category: 1
    },

    {
        id: 5,
        image: './images/HotTopics/hot-topics-title-7.png',
        tag:["Fashion", "Art"],
        title:<><span className="title-line">Discovering New</span><br/>Worlds Of experience<br/>With Synesthesia In Art</>,
        text:<>What is synesthesia art and how does it widen both the perception and creation of art? Where does such concept lie in terms of contemporary art today?</>,
        autor:'By Adam Nagourney',
        category: 1
    },
    {
        id: 6,
        image: './images/HotTopics/hot-topics-title-5.png',
        tag:["Art", "LiveStyle"],
        title:<>Eight Free Museums<br/>In Europe You Have<br/><span className="text-line">To Check Out</span></>,
        text:<>As some of the best tourist attractions, museums in Europe offer the finest settings for those who are interested in learning, not only the culture of the city visiting but also of the world. In most cases, museums in Europe do charge an entry fee but there are still few of the most significant institutions that believe in the availability of art for all.</>,
        autor:'By Adam Nagourney',
        category: 1
    },
    {
        id: 7,
        image: './images/HotTopics/hot-topics-title-3.png',
        tag:["Travel", "LiveStyle"],
        title:<>How To Know<br/>If The Travel Info<br/>You Find Is Legit</>,
        text:<>As their first exhibition in the new year, Galerie Mathgoth will be presenting a group exhibition titled The Grape Format where 19 artists will be exploring the art of paper.</>,
        autor:'By NomadicMatt',
        category: 1
    },      
    {
        id: 8,
        image: './images/HotTopics/hot-topics-title-8.png',
        tag: ["Fashion"],
        title:<>10 Best Museum<br/>Shops to visit</>,
        text:<>Even <span className="text-line">the most esteemed art institutions</span> can have disappointing museum shops, stocked with posters and logo-emblazoned totes and refrigerator magnets. But the exit through the gift shop can also be a true delight.</>,
        autor:'By Adam Nagourney',
        category: 1
    },
    {
        id: 9,
        tag: ["Fashion"],
        title: '19 Artists at Galerie Mathgoth',
        text: 'As their first exhibition in the new year, Galerie Mathgoth will be presenting a group exhibition titled The Grape Format where 19 artists will be exploring the art of paper. The title of the show takes us back a few centuries into the French history. In France in the Middle Ages, all papers of certified origin had a watermark.',  
        image: '/images/article-img-1.png',
        category: 2
    },
    {
        id: 10,
        tag: ["Art", "Fashion"],
        title: 'DADA Manifesto Explaned',
        text: 'As in every human endeavor when two strong personalities meet, opinions may clash and an argument often ensues. The same applies to the art world. Dada Manifesto is not a singular writing; over the years several were made, including perhaps the best-known by Hugo Ball and Tristan Tzara.',  
        image: '/images/article-img-2.png',
        category: 2
    },
    {
        id: 11,
        tag: ["Art", "Design"],
        title: 'The Magic Still Works',
        text: 'Being at the forefront of urban art expansion, Jef Aérosol stands among the giants of the scene who helped shape it and contributed immensely to its popularity. Born in Nantes in 1957, Aérosol belongs to a group of early graffiti artists who defined public art, such as Blek Le Rat, Miss Tic, and Speedy Graphito.',  
        image: '/images/article-img-3.png',
        category: 2
    },
    {
        id: 12,
        tag: ["Design"],
        title: 'Genesis Of a Polaroid Photo',
        text: 'In a world where nearly everyone has a cellphone camera capable of taking countless instant photos, it can be a challenge to remember just how special and transformative Polaroid photo was in its day, and the beauty and banality of film that develops in the palm of your hand can be difficult to relate to.',  
        image: '/images/article-img-4.png',
        category: 2
    },
]

export default topics