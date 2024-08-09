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
