// local reviews data
const reviews = [
  {
    id: 1,
    name: 'Gojo satoru',
    job: 'Jujutsu sorcerer',
    img: "gojo-satoru.jpeg",
    text: "Satoru Gojo (Japanese: 五条 悟, Hepburn: Gojō Satoru) is a fictional character from Gege Akutami's manga Jujutsu Kaisen. He was first introduced in Akutami's short series Tokyo Metropolitan Curse Technical School as the mentor of the cursed teenager Yuta Okkotsu at Tokyo Prefectural Jujutsu High School",
  },
  {
    id: 2,
    name: 'Dazai Osamu',
    job: 'Armed detective agent',
    img: 'dazai-osamu.jpeg',
    text: 'Dazai is a young man with mildly wavy, short, dark brown hair and narrow dark brown eyes. His bangs frame his face, while some are gathered at the center of his forehead. He is quite tall and slim in terms of physique.',
  },
  {
    id: 3,
    name: 'Venti',
    job: 'Archon',
    img: 'venti.jpeg',
    text: "Venti has a somewhat recalcitrant, carefree, and playful attitude as well as a liking to rhyming in his speech. He sees a particular worth in music to the point where he names his lyre, saying, 'every being deserves a name to be called upon, and woven into a song.' He is also bold, not fearing to insult or ignore those who are supposedly powerful. In the game, he responds to Paimon's comments and nicknaming by parroting her.",
  },
  {
    id: 4,
    name: 'Cid Kagenou',
    job: 'Leader of shadow garden',
    img: 'cid-kagenou.jpeg',
    text: "CID Kagenou is a mysterious and skilled operative from the organization Shadow Garden. With unparalleled mastery of stealth and disguise, he excels in infiltration, sabotage, and assassination. His red eyes gleam with intelligence and strategic thinking, making him a valuable asset to his allies. CID's loyalty and dedication to his friends are unwavering.",
  },
  {
    id: 5,
    name: 'Yuuta Okkotsu',
    job: 'Jujutsu sorcerer',
    img: 'yuuta.jpeg',
    text: "Yuuta Okkotsu, a prominent figure in 'Jujutsu Kaisen,' is renowned for his immense potential as a jujutsu sorcerer. Introduced in the prequel 'Jujutsu Kaisen 0,' he grapples with the curse of Rika, a powerful spirit tied to his past. Yuuta's journey of mastering his abilities and confronting his fears highlights his complex character and significance in the series.",
  },
  {
    id: 6,
    name: 'Ryomen Sukuna',
    job: 'Jujutsu sorcerer',
    img: 'sukuna.jpeg',
    text: "Ryomen Sukuna, often referred to as the 'King of Curses', is a central antagonist in 'Jujutsu Kaisen'. An ancient and immensely powerful curse, Sukuna's malevolent influence spans centuries. His terrifying strength and cunning make him a formidable force within the series. Sukuna's complex relationship with the protagonist, Yuji Itadori, drives much of the story's tension and intrigue.",
  },
  {
    id: 7,
    name: 'Levi Ackerman',
    job: 'Captain of survey corps',
    img: 'levi.jpeg',
    text: "Levi Ackerman, a fan-favorite from 'Attack on Titan', is revered for his unparalleled combat skills and stoic demeanor. As humanity's strongest soldier, Levi's leadership and tactical brilliance make him a key figure in the battle against the Titans. His complex past and unwavering dedication to his comrades add depth to his character, making him one of the most iconic figures in the series.",
  },
  {
    id: 8,
    name: 'Mikasa Ackerman',
    job: 'Member Of survey corps',
    img: 'mikasa.jpeg',
    text: "Mikasa Ackerman, a central character in 'Attack on Titan', is renowned for her exceptional combat skills and unwavering loyalty. As a highly skilled soldier in the Survey Corps, Mikasa is driven by a deep bond with her childhood friend, Eren Yeager. Her dedication to protecting those she cares about, combined with her formidable strength and tactical prowess, make her one of the most respected and powerful characters in the series.",
  },
  {
    id: 9,
    name: 'Eren Yeager',
    job: 'Member of survey corps',
    img: 'eren.jpeg',
    text: "Eren Yeager, the protagonist of 'Attack on Titan', is a complex and evolving character central to the series' narrative. Initially driven by a fierce desire to eliminate all Titans and avenge his mother's death, Eren joins the Survey Corps to fight for humanity's freedom. As the story progresses, Eren's character becomes increasingly multifaceted, grappling with themes of freedom, power, and identity.",
  },
  {
    id: 10,
    name: 'Itoshi rin',
    job: 'Blue lock',
    img: 'itoshi.jpeg',
    text: "Rin Itoshi, a prominent character in 'Blue Lock', is an exceptionally skilled forward with a fierce competitive edge. Known for his sharp instincts and advanced football techniques, Rin is driven by a strong desire to surpass his peers and achieve greatness on the field. His intense focus and natural talent make him a formidable opponent in the series.",
  },
  {
    id: 11,
    name: 'Nagi seishiro',
    job: 'Blue lock',
    img: 'nagi.jpeg',
    text: "Seishiro Nagi, a standout character in 'Blue Lock', is renowned for his extraordinary natural talent and effortless skill on the field. With a remarkable sense of touch and vision, Nagi excels as a forward. His laid-back attitude and innate ability make him a key player in the competition."
  },
  {
    id: 12,
    name: 'Makima',
    job: 'Public Safety Devil hunter',
    img: 'makima.jpeg',
    text: "Makima is a central character in 'Chainsaw Man', known for her enigmatic and manipulative nature. As a high-ranking Public Safety Devil Hunter, she wields significant influence and possesses a powerful, mysterious ability. Her complex motives and charismatic demeanor make her a pivotal and captivating figure in the series.",
  },
];
// select items
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener('DOMContentLoaded', function() {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
});

// show person based on item
function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}
// show next person
nextBtn.addEventListener('click', function() {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});

prevBtn.addEventListener('click', function() {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});

randomBtn.addEventListener("click", function() {
  currentItem = Math.floor(Math.random() * reviews.length)
  showPerson(currentItem);
})
