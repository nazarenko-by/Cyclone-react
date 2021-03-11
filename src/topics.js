// Category: 
// 0 - All
// 1 - Hot Topics
// 2 - Article Slider
// 3 - Main


const topics = [
    {
        id: 1,
        image: './images/HotTopics/hot-topics-title-1.png',
        tag: ["Fashion"],
        title: <>19 Artists<br/>at Galerie Mathgoth</>,
        text:`As their first exhibition in the new year, Galerie Mathgoth will be presenting a group exhibition titled The Grape Format where 19 artists will be exploring the art of paper. The title of the show takes us back a few centuries into the French history. In France in the Middle Ages, all papers of certified origin had a watermark. The each format of the paper had their own symbol: a bell, a crown, the great eagle or Jesus. The 50 x 56 cm format was marked by a bunch of grapes. There were also several kinds of grape formats such as the half-grape or a double-grape. It corresponded to the format of a 15P frame. For this exhibition, each artist was invited to create a work on paper sized 50 x 56 cm. The show will feature works by Hera, Mademoiselle Maurice, Addison Karl, AkaCorleone, Akut, Alëxone Dizac, Anthony Lister, Aurel Rubbish, C215, Case Maclaim, Jean Faucheur, Fintan Magee, Herakut, Jef Aérosol, SHOK-1, Stew, Twoone, Yash, and Gérard Zlotykamien.`,
        autor:'By Adam Nagourney',
        category: 1
    },
    {
        id: 2,
        image: './images/HotTopics/hot-topics-title-4.png',
        tag:["Art", "LiveStyle"],
        title:<>Cy Twombly<br/>Painting Can Bring<br/>Eight Or Nine<br/>Figures In Auction!</>,
        text:`As one of the most intelligent, erudite, sophisticated and emotionally eloquent artists of our age, Cy Twombly is a figure of great authority in modern art. Expressive drips and graffiti-like scribbles and scratches became the characteristic style of Cy Twombly paintings. Talking about these scribbled and scratched lines, he described them as childlike, but certainly not childish. "It is very difficult to fake… to get that quality you need to project yourself into the child's line. It has to be felt", he once said. Since he rarely spoke to the press, his life was surrounded by unique mystery.`,
        autor:'By Adam Nagourney',
        category: 1
    },
    {
        id: 3,
        image: './images/HotTopics/hot-topics-title-6.png',
        tag:["Art", "Design"],
        title:<>Ten Inspiration<br/>Picasso Sketches</>,
        text:`<div>Apart from being an exceptional painter and <span className="text-line">the father of Cubism</span>, Pablo Picasso was also one of the best draftsmen on the 20th century. Pablo Picasso sketches served as a mean of discovery and engagement with masters from the past that in many ways contributed to the creation and the development of his unique art style. Throughout his life, the prolific artist created an array of hand drawings dealing with a variety of topics including humans, animals, and mythological creatures. Since his university days, the artist used drawing to abstract his subjects by carefully removing their features one by one until they were reduced to only a few lines capturing the outlines of their anatomy. Picasso stated that: 'Drawing is a kind of hypnotism: one looks in such a way at the model, that he comes and takes a seat on the paper.</div>'`,
        autor:'By Adam Nagourney',
        category: 1
    },
    {
        id:4,
        image: './images/HotTopics/hot-topics-title-2.png',
        tag:["Travel","LiveStyle"],
        title:<>New Zealand's<br/>Backpacker Buses</>,
        text:`There are so many trip planning resources out there: the Google Trips app; 100,000+ blogs; countless forums, communities, and sharing-economy websites; and everything in between. In that sea of endless information, here’s how to find what is accurate and trustworthy.`,
        autor:'By NomadicMatt',
        category: 1
    },

    {
        id: 5,
        image: './images/HotTopics/hot-topics-title-7.png',
        tag:["Fashion", "Art"],
        title:<><span className="title-line">Discovering New</span><br/>Worlds Of experience<br/>With Synesthesia In Art</>,
        text:`The age-old creative views on what synesthesia art truly means overlap with major scientific and neurological synesthesia research. Historically referred to a wide variety of artists’ experiments that explore the co-operation of the senses, synesthesia art is best described as the union of the senses, where one sensory experience involuntarily and consistently prompts another. Even though the most common field of research in the visual arts was based on the connection between seeing and hearing, there are over 70 different types of synesthesia. From tasting time and smelling a music symphony, to understanding the days of the week through certain shades of color, for the four percent of the world population defined as synaesthetes this is both a gift and, in extreme situations, even a curse. Yet, for some major artists of the past, synesthesia art was a magnificent playground, an arena of experimentation where forces of visual, music, literature, and theater arts all come together.`,
        autor:'By Adam Nagourney',
        category: 1
    },
    {
        id: 6,
        image: './images/HotTopics/hot-topics-title-5.png',
        tag:["Art", "LiveStyle"],
        title:<>Eight Free Museums<br/>In Europe You Have<br/><span className="text-line">To Check Out</span></>,
        text:`As some of the best tourist attractions, museums in Europe offer the finest settings for those who are interested in learning, not only the culture of the city visiting but also of the world. In most cases, museums in Europe do charge an entry fee but there are still few of the most significant institutions that believe in the availability of art for all. Frequently we are witnesses to free evenings at the museum, free workshops, or free lectures which aim to bring art production not only to the professionals but to the youngest generation as well.Regardless of the fact that we are living in the globalized digitalized and technology obsessed world, there are still a number of us out there that enjoy the guided tour of the museum. Even though there is much debate about the significance of museums, and their specific role in the art world, the major museums in Europe are still considered important.`,
        autor:'By Adam Nagourney',
        category: 1
    },
    {
        id: 7,
        image: './images/HotTopics/hot-topics-title-3.png',
        tag:["Travel", "LiveStyle"],
        title:<>How To Know<br/>If The Travel Info<br/>You Find Is Legit</>,
        text:`While Mademoiselle Maurice is best known for her colorful origami reminiscent of nature and man’s connection with it, Addison Karl combines art and existing environment to create symmetry, harmony, balance and bring a colorless wall to life. While AkaCorleonei blends colors, typography, characters and forms to achieve eye-catching compositions imbued with originality and humor, Alëxone Dizac combines paint drips, ghost tags, flames, one-line geometrical patterns, funny punchlines and surrealistic bestiary. Hailing from Australia, Anthony Lister has gained critical acclaim for his outstanding pop-surrealist graffiti, paintings, and installations that embody a fusion of highbrow and lowbrow culture. On the other hand, Aurel Rubbish, a pioneer of paper cuts in France, creates beautiful, finely chiseled compositions, adorned with floral elements, evoking numerous influences of historical decorative movements. While C215 is one of the most famous stencil artists in the world, Case Maclaim is known for his incredibly life-like graffiti based on the representation of body shapes and photo-realistic portraits adorning buildings all across Europe.`,
        autor:'By NomadicMatt',
        category: 1
    },      
    {
        id: 8,
        image: './images/HotTopics/hot-topics-title-8.png',
        tag: ["Fashion"],
        title:<>10 Best Museum<br/>Shops to visit</>,
        text:'<div>Even <span className="text-line">the most esteemed art institutions</span> can have disappointing museum shops, stocked with posters and logo-emblazoned totes and refrigerator magnets. But the exit through the gift shop can also be a true delight. There are institutions with truly special and striking stores that are creatively stocked and worth a visit in their own right. The desire to collect mementos has motivated travelers ever since Marco Polo, and gift and souvenir shops have proliferated around the world to meet that desire. Many museums all around the world have perfected the art of curating just the right keepsakes for visitors to take home with them. Realizing that now consumers have a much more sophisticated palette and an appetite for well-made products from cultural institutions, these shops reflect the values and aesthetics of the museum and are full of fascinating things, displayed with style.</div>',
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
    {
        id: 13,
        tag: ["Fashion", "Art"],
        title: <>The fascination <span className="italic"><span className="yellow-text text-line">with Alchemy</span> in Art</span></>,
        text: <>Alchemy as a protoscientific and philosophical method influenced artists to create works that can be categorized as alchemy art. However, this tradition is not generally accepted in art historical classifications, and often <span className="italic text-line">alchemical elements</span> in art are subscribed under different, stylistically and historically guided categorizations. <br/><br/> However, being as it is, it cannot be denied that alchemy had a significant influence on art and artists over the centuries, and can be traced in works from ancient Egypt, European Middle ages through Renaissance and contemporary art, to traditions of Asia and Far East.</>,  
        image: '/images/main.png',
        category: 3
    },

]

export default topics