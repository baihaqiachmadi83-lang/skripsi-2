// ============================================================================
// DATA DRIVEN CURRICULUM GENERATOR
// ============================================================================
const curriculum = [];

function getPlaceholderContent(uIdx, sIdx) {
  return {
    id: `u${uIdx}s${sIdx}`, title: `Session ${sIdx}`, type: "learning",
    explanation: { eng: "Content coming soon.", ind: "Konten akan segera hadir." },
    exercises: [
      {
        type: "mcq",
        q_eng: "Choose the correct placeholder answer.", q_ind: "Pilih jawaban sementara yang benar.",
        opts: ["Correct", "Wrong"], answer: 0,
        exp_eng: "This is correct.", exp_ind: "Ini benar."
      }
    ]
  };
}

for (let u = 1; u <= 3; u++) {
  const unit = {
    id: `u${u}`,
    title: `Unit ${u}: ${u===1 ? 'Vocabulary' : u===2 ? 'Speaking' : 'Reading'}`,
    sessions: [],
    quiz: {
      id: `u${u}q`, title: `Unit ${u} Final Quiz`, type: "quiz",
      exercises: [
        { type: "mcq", q_eng: "Quiz placeholder.", q_ind: "Kuis sementara.", opts: ["A", "B"], answer: 0, exp_eng: "", exp_ind: "" }
      ]
    }
  };

  for (let s = 1; s <= 8; s++) {
    if (u === 1 && s === 1) {
      unit.sessions.push({
        id: "u1s1", title: "Session 1: Introducing Basic Everyday Nouns", type: "learning",
        blocks: [
          {
            type: "warmup_blanks",
            image: "house_scene_u1s1_1782016013490.png",
            text_eng: "Look at the picture. What do you see?",
            text_ind: "Lihat gambar ini. Apa yang kamu lihat?",
            blanks: [
              { ind: "Ibu", eng: "mother" },
              { ind: "Rumah", eng: "house" },
              { ind: "Sofa", eng: "sofa" }
            ]
          },
          {
            type: "flashcards",
            text_eng: "Vocabulary Presentation: Tap the cards to flip!",
            text_ind: "Kosakata: Ketuk kartu untuk membalik!",
            cards: [
              { ind: "ibu", eng: "mother", phon: "MA-ther", icon: "👩" },
              { ind: "ayah", eng: "father", phon: "FA-ther", icon: "👨" },
              { ind: "rumah", eng: "house", phon: "HAUS", icon: "🏠" },
              { ind: "sofa", eng: "sofa", phon: "SO-fa", icon: "🛋️" },
              { ind: "kursi", eng: "chair", phon: "CHER", icon: "🪑" },
              { ind: "pintu", eng: "door", phon: "DOR", icon: "🚪" },
              { ind: "jendela", eng: "window", phon: "WIN-do", icon: "🪟" },
              { ind: "tempat tidur", eng: "bed", phon: "BED", icon: "🛏️" }
            ]
          }
        ],
        exercises: [
          {
            type: "pic_mcq_seq",
            q_eng: "Which English word matches the picture?",
            q_ind: "Kata bahasa Inggris mana yang cocok dengan gambar ini?",
            questions: [
              { icon: "🏠", opts: ["house", "sofa", "bed"], answer: 0 },
              { icon: "👩", opts: ["father", "mother", "door"], answer: 1 },
              { icon: "🚪", opts: ["window", "chair", "door"], answer: 2 },
              { icon: "🛏️", opts: ["bed", "sofa", "house"], answer: 0 },
              { icon: "👨", opts: ["father", "mother", "chair"], answer: 0 },
              { icon: "🪟", opts: ["door", "window", "bed"], answer: 1 },
              { icon: "🪑", opts: ["chair", "sofa", "house"], answer: 0 },
              { icon: "🛋️", opts: ["chair", "sofa", "door"], answer: 1 }
            ]
          },
          {
            type: "word_pic_seq",
            q_eng: "Which picture shows this word?",
            q_ind: "Gambar mana yang menunjukkan kata ini?",
            questions: [
              { word: "CHAIR", opts: ["🏠", "🪑", "🚪"], answer: 1 },
              { word: "WINDOW", opts: ["🪟", "👨", "🛏️"], answer: 0 },
              { word: "FATHER", opts: ["👩", "🪑", "👨"], answer: 2 },
              { word: "BED", opts: ["🛏️", "🚪", "🍽️"], answer: 0 },
              { word: "MOTHER", opts: ["👨", "👩", "🏠"], answer: 1 },
              { word: "HOUSE", opts: ["🏠", "🪟", "🪑"], answer: 0 },
              { word: "DOOR", opts: ["🛏️", "🚪", "👩"], answer: 1 },
              { word: "SOFA", opts: ["🛋️", "🪑", "🏠"], answer: 0 },
            ]
          }
        ],
        summary: {
          eng: "Today you learned 8 words about home and family!",
          ind: "Hari ini Anda telah belajar 8 kata tentang rumah dan keluarga!",
          cards: [
            { eng: "mother", icon: "👩" }, { eng: "father", icon: "👨" },
            { eng: "house", icon: "🏠" }, { eng: "sofa", icon: "🛋️" },
            { eng: "chair", icon: "🪑" }, { eng: "door", icon: "🚪" },
            { eng: "window", icon: "🪟" }, { eng: "bed", icon: "🛏️" }
          ]
        }
      });
    } else if (u === 1 && s === 2) {
      unit.sessions.push({
        id: "u1s2", title: "Session 2: Everyday Objects at Work and Market", type: "learning",
        blocks: [
          {
            type: "warmup_blanks",
            image: "market_scene_u1s2_1782016028542.png",
            text_eng: "What things can you see at the market?",
            text_ind: "Apa saja yang bisa Anda lihat di pasar?",
            blanks: [
              { ind: "Uang", eng: "money" },
              { ind: "Timbangan", eng: "scale" },
              { ind: "Tas", eng: "bag" }
            ]
          },
          {
            type: "flashcards",
            text_eng: "Vocabulary Presentation: Tap the cards to flip!",
            text_ind: "Kosakata: Ketuk kartu untuk membalik!",
            cards: [
              { ind: "uang", eng: "money", phon: "MA-ni", icon: "💵" },
              { ind: "tas", eng: "bag", phon: "BAG", icon: "👜" },
              { ind: "timbangan", eng: "scale", phon: "SKEIL", icon: "⚖️" },
              { ind: "toko", eng: "shop", phon: "SHYOP", icon: "🏪" },
              { ind: "harga", eng: "price", phon: "PRAIS", icon: "🏷️" },
              { ind: "pelanggan", eng: "customer", phon: "KAS-to-mer", icon: "🛒" },
              { ind: "penjual", eng: "seller", phon: "SE-ler", icon: "🧑‍🌾" },
              { ind: "produk", eng: "product", phon: "PRO-dukt", icon: "📦" }
            ]
          }
        ],
        exercises: [
          {
            type: "dnd_pic",
            q_eng: "Tap a word, then tap the picture to match them.",
            q_ind: "Ketuk sebuah kata, lalu ketuk gambar untuk memasangkannya.",
            words: ["money", "bag", "scale", "shop", "price", "customer", "seller", "product"],
            items: [
              { icon: "🏪", answer: "shop" },
              { icon: "💵", answer: "money" },
              { icon: "⚖️", answer: "scale" },
              { icon: "🛒", answer: "customer" },
              { icon: "👜", answer: "bag" },
              { icon: "🏷️", answer: "price" },
              { icon: "🧑‍🌾", answer: "seller" },
              { icon: "📦", answer: "product" }
            ]
          },
          {
            type: "fill_bank",
            q_eng: "Read the sentences and choose the missing word from the box.",
            q_ind: "Baca kalimat-kalimat berikut dan pilih kata yang hilang dari kotak.",
            words: ["money", "price", "seller", "shop", "scale"],
            sentences: [
              { text: "She puts the ___ in her bag.", answer: "money" },
              { text: "The ___ is too high. I cannot buy it.", answer: "price" },
              { text: "He is a ___ at the market.", answer: "seller" },
              { text: "I want to go to the ___.", answer: "shop" },
              { text: "The ___ weighs the vegetables.", answer: "scale" }
            ]
          }
        ],
        summary: {
          eng: "Today you learned 8 words about work and the market!",
          ind: "Hari ini Anda telah belajar 8 kata tentang pekerjaan dan pasar!",
          cards: [
            { eng: "money", icon: "💵" }, { eng: "bag", icon: "👜" },
            { eng: "scale", icon: "⚖️" }, { eng: "shop", icon: "🏪" },
            { eng: "price", icon: "🏷️" }, { eng: "customer", icon: "🛒" },
            { eng: "seller", icon: "🧑‍🌾" }, { eng: "product", icon: "📦" }
          ]
        }
      });
    } else if (u === 1 && s === 3) {
      unit.sessions.push({
        id: "u1s3", title: "Session 3: Numbers and Time Words", type: "learning",
        blocks: [
          {
            type: "warmup_blanks",
            image: "clock_price_u1s3_1782016046349.png",
            text_eng: "Can you say these numbers in English?",
            text_ind: "Dapatkah Anda menyebutkan angka-angka ini dalam bahasa Inggris?",
            blanks: [
              { ind: "3", eng: "three" },
              { ind: "7", eng: "seven" },
              { ind: "15", eng: "fifteen" }
            ]
          },
          {
            type: "num_grid",
            text_eng: "Part A — Numbers 1 to 20: Tap a number to see its word!",
            text_ind: "Bagian A — Angka 1 sampai 20: Ketuk angka untuk melihat ejaannya!",
            numbers: [
              { n: 1, w: "one", p: "WAN" }, { n: 2, w: "two", p: "TU" },
              { n: 3, w: "three", p: "THRI" }, { n: 4, w: "four", p: "FOR" },
              { n: 5, w: "five", p: "FAIV" }, { n: 6, w: "six", p: "SIKS" },
              { n: 7, w: "seven", p: "SE-ven" }, { n: 8, w: "eight", p: "EIT" },
              { n: 9, w: "nine", p: "NAIN" }, { n: 10, w: "ten", p: "TEN" },
              { n: 11, w: "eleven", p: "i-LE-ven" }, { n: 12, w: "twelve", p: "TWELF" },
              { n: 13, w: "thirteen", p: "THER-tin" }, { n: 14, w: "fourteen", p: "FOR-tin" },
              { n: 15, w: "fifteen", p: "FIF-tin" }, { n: 16, w: "sixteen", p: "SIKS-tin" },
              { n: 17, w: "seventeen", p: "SE-ven-tin" }, { n: 18, w: "eighteen", p: "EI-tin" },
              { n: 19, w: "nineteen", p: "NAIN-tin" }, { n: 20, w: "twenty", p: "TWEN-ti" }
            ]
          },
          {
            type: "flashcards",
            text_eng: "Part B — Time words: Tap the cards to flip!",
            text_ind: "Bagian B — Kata keterangan waktu: Ketuk kartu untuk membalik!",
            cards: [
              { ind: "pagi", eng: "morning", phon: "MOR-ning", icon: "🌅" },
              { ind: "siang", eng: "afternoon", phon: "af-ter-NUN", icon: "☀️" },
              { ind: "sore", eng: "evening", phon: "IV-ning", icon: "🌇" },
              { ind: "malam", eng: "night", phon: "NAIT", icon: "🌙" },
              { ind: "hari ini", eng: "today", phon: "tu-DEI", icon: "📅" },
              { ind: "besok", eng: "tomorrow", phon: "tu-MA-ro", icon: "⏭️" },
              { ind: "kemarin", eng: "yesterday", phon: "YES-ter-dei", icon: "⏮️" },
              { ind: "sekarang", eng: "now", phon: "NAU", icon: "⏳" }
            ]
          }
        ],
        exercises: [
          {
            type: "word_pic_seq",
            randomize: true,
            q_eng: "Which number matches this word?",
            q_ind: "Angka mana yang cocok dengan kata ini?",
            questions: [
              { word: "FIFTEEN", opts: ["13", "15", "50", "5"], answer: 1 },
              { word: "TWELVE", opts: ["20", "12", "2", "21"], answer: 1 },
              { word: "EIGHTEEN", opts: ["18", "80", "8", "81"], answer: 0 },
              { word: "THREE", opts: ["30", "13", "3", "33"], answer: 2 },
              { word: "ELEVEN", opts: ["11", "7", "12", "1"], answer: 0 },
              { word: "TWENTY", opts: ["12", "2", "22", "20"], answer: 3 },
              { word: "THIRTEEN", opts: ["30", "13", "3", "14"], answer: 1 },
              { word: "NINETEEN", opts: ["9", "90", "19", "91"], answer: 2 },
              { word: "FOURTEEN", opts: ["40", "14", "4", "44"], answer: 1 },
              { word: "SEVENTEEN", opts: ["70", "7", "17", "71"], answer: 2 },
              { word: "SIXTEEN", opts: ["16", "60", "6", "61"], answer: 0 },
              { word: "FIVE", opts: ["15", "50", "55", "5"], answer: 3 },
              { word: "EIGHT", opts: ["18", "8", "80", "88"], answer: 1 },
              { word: "TEN", opts: ["1", "10", "100", "0"], answer: 1 },
              { word: "ONE", opts: ["10", "11", "1", "0"], answer: 2 },
              { word: "TWO", opts: ["12", "2", "20", "22"], answer: 1 },
              { word: "FOUR", opts: ["14", "4", "40", "44"], answer: 1 },
              { word: "SIX", opts: ["16", "60", "6", "66"], answer: 2 },
              { word: "SEVEN", opts: ["17", "70", "7", "77"], answer: 2 },
              { word: "NINE", opts: ["19", "9", "90", "99"], answer: 1 }
            ]
          },
          {
            type: "fill_bank",
            q_eng: "Read the sentences and choose the missing time word from the box.",
            q_ind: "Baca kalimat-kalimat berikut dan pilih kata waktu yang hilang dari kotak.",
            words: ["morning", "tomorrow", "night", "now", "yesterday"],
            sentences: [
              { text: "I go to the market every ___.", answer: "morning" },
              { text: "I will study ___.", answer: "tomorrow" },
              { text: "I went to the hospital ___.", answer: "yesterday" },
              { text: "It is dark at ___.", answer: "night" },
              { text: "I am eating lunch ___.", answer: "now" }
            ]
          }
        ],
        summary: {
          eng: "Today you learned numbers and time words!",
          ind: "Hari ini Anda telah belajar angka dan kata waktu!",
          cheat_sheet: true,
          cards: [] 
        }
      });
    } else if (u === 1 && s === 5) {
      unit.sessions.push({
        id: "u1s5", title: "Session 5: Describing Words (Basic Adjectives)", type: "learning",
        blocks: [
          {
            type: "warmup_blanks",
            image: "adjectives_warmup_u1s5_1782016059238.png",
            text_eng: "What is different about these two things?",
            text_ind: "Apa yang berbeda dari kedua benda ini?",
            blanks: [
              { ind: "Besar", eng: "big" },
              { ind: "Kecil", eng: "small" },
              { ind: "Mahal", eng: "expensive" }
            ]
          },
          {
            type: "flashcards",
            text_eng: "Vocabulary Presentation: Tap the cards to flip!",
            text_ind: "Kosakata: Ketuk kartu untuk membalik!",
            cards: [
              { ind: "besar", eng: "big", phon: "BIG", icon: "🐘", sentence: "This bag is big." },
              { ind: "kecil", eng: "small", phon: "SMOL", icon: "🐜", sentence: "That house is small." },
              { ind: "murah", eng: "cheap", phon: "CHIP", icon: "🏷️", sentence: "The price is cheap." },
              { ind: "mahal", eng: "expensive", phon: "ek-SPEN-siv", icon: "💎", sentence: "This phone is expensive." },
              { ind: "panas", eng: "hot", phon: "HOT", icon: "🔥", sentence: "The water is hot." },
              { ind: "dingin", eng: "cold", phon: "KOLD", icon: "❄️", sentence: "The air is cold." },
              { ind: "bersih", eng: "clean", phon: "KLIN", icon: "✨", sentence: "The room is clean." },
              { ind: "kotor", eng: "dirty", phon: "DER-ti", icon: "💩", sentence: "My hands are dirty." },
              { ind: "mudah", eng: "easy", phon: "I-zi", icon: "✅", sentence: "This work is easy." },
              { ind: "sulit", eng: "difficult", phon: "DI-fi-kalt", icon: "🧩", sentence: "English is not difficult!" }
            ]
          }
        ],
        exercises: [
          {
            type: "word_text_seq",
            randomize: true,
            q_eng: "Choose the opposite word!",
            q_ind: "Pilih kata yang berlawanan (antonim)!",
            questions: [
              { word: "BIG", opts: ["small", "cheap"], answer: 0 },
              { word: "SMALL", opts: ["big", "expensive"], answer: 0 },
              { word: "CHEAP", opts: ["dirty", "expensive"], answer: 1 },
              { word: "EXPENSIVE", opts: ["cheap", "clean"], answer: 0 },
              { word: "HOT", opts: ["cold", "hot"], answer: 0 },
              { word: "COLD", opts: ["hot", "easy"], answer: 0 },
              { word: "CLEAN", opts: ["dirty", "clean"], answer: 0 },
              { word: "DIRTY", opts: ["easy", "clean"], answer: 1 },
              { word: "EASY", opts: ["difficult", "small"], answer: 0 },
              { word: "DIFFICULT", opts: ["big", "easy"], answer: 1 }
            ]
          },
          {
            type: "pic_mcq_seq",
            randomize: true,
            q_eng: "Which adjective describes the picture?",
            q_ind: "Kata sifat mana yang menggambarkan gambar ini?",
            questions: [
              { icon: "❄️", opts: ["hot", "cold", "clean"], answer: 1 },
              { icon: "🔥", opts: ["hot", "cold", "dirty"], answer: 0 },
              { icon: "🐘", opts: ["small", "big", "cheap"], answer: 1 },
              { icon: "🐜", opts: ["big", "small", "expensive"], answer: 1 },
              { icon: "✨", opts: ["clean", "dirty", "easy"], answer: 0 }
            ]
          }
        ],
        summary: {
          eng: "Today you learned 10 basic adjectives!",
          ind: "Hari ini Anda telah belajar 10 kata sifat dasar!",
          cards: [
            { eng: "big", icon: "🐘", sentence: "This bag is big." },
            { eng: "small", icon: "🐜", sentence: "That house is small." },
            { eng: "cheap", icon: "🏷️", sentence: "The price is cheap." },
            { eng: "expensive", icon: "💎", sentence: "This phone is expensive." },
            { eng: "hot", icon: "🔥", sentence: "The water is hot." },
            { eng: "cold", icon: "❄️", sentence: "The air is cold." },
            { eng: "clean", icon: "✨", sentence: "The room is clean." },
            { eng: "dirty", icon: "💩", sentence: "My hands are dirty." },
            { eng: "easy", icon: "✅", sentence: "This work is easy." },
            { eng: "difficult", icon: "🧩", sentence: "English is not difficult!" }
          ]
        }
      });
    } else if (u === 1 && s === 6) {
      unit.sessions.push({
        id: "u1s6", title: "Session 6: Review and Vocabulary Building", type: "learning",
        blocks: [],
        exercises: [
          {
            type: "mem_game",
            q_eng: "Warm-Up: Memory Game! Find the matching pairs.",
            q_ind: "Pemanasan: Gim Memori! Temukan pasangan yang cocok.",
            pairs: [
              { w: "mother", i: "👩" }, { w: "house", i: "🏠" },
              { w: "money", i: "💵" }, { w: "shop", i: "🏪" },
              { w: "morning", i: "🌅" }, { w: "night", i: "🌙" },
              { w: "eat", i: "🍽️" }, { w: "sleep", i: "😴" }
            ]
          },
          {
            type: "cat_sort",
            q_eng: "Review 1: Sort the words into the correct category.",
            q_ind: "Ulasan 1: Urutkan kata-kata ke dalam kategori yang tepat.",
            cats: ["Home & Family", "Market & Work", "Actions", "Descriptions"],
            words: [
              { w: "father", c: 0 }, { w: "door", c: 0 }, { w: "bed", c: 0 }, { w: "table", c: 0 },
              { w: "customer", c: 1 }, { w: "price", c: 1 }, { w: "product", c: 1 }, { w: "bag", c: 1 },
              { w: "buy", c: 2 }, { w: "sell", c: 2 }, { w: "walk", c: 2 }, { w: "drink", c: 2 },
              { w: "cheap", c: 3 }, { w: "clean", c: 3 }, { w: "easy", c: 3 }, { w: "hot", c: 3 }
            ]
          },
          {
            type: "story_read",
            q_eng: "Review 2: Read the story. Tap underlined words to see the meaning.",
            q_ind: "Ulasan 2: Baca cerita berikut. Ketuk kata bergaris bawah untuk melihat artinya.",
            story: `Every <span class="vocab-hl" data-ind="pagi" onclick="this.classList.toggle('show')">morning<div class="vocab-tooltip">pagi</div></span>, Ali <span class="vocab-hl" data-ind="pergi" onclick="this.classList.toggle('show')">goes<div class="vocab-tooltip">pergi</div></span> to the <span class="vocab-hl" data-ind="pasar" onclick="this.classList.toggle('show')">market<div class="vocab-tooltip">pasar</div></span>. He <span class="vocab-hl" data-ind="menjual" onclick="this.classList.toggle('show')">sells<div class="vocab-tooltip">menjual</div></span> vegetables. The <span class="vocab-hl" data-ind="harga" onclick="this.classList.toggle('show')">price<div class="vocab-tooltip">harga</div></span> is <span class="vocab-hl" data-ind="murah" onclick="this.classList.toggle('show')">cheap<div class="vocab-tooltip">murah</div></span>. His <span class="vocab-hl" data-ind="tas" onclick="this.classList.toggle('show')">bag<div class="vocab-tooltip">tas</div></span> is <span class="vocab-hl" data-ind="besar" onclick="this.classList.toggle('show')">big<div class="vocab-tooltip">besar</div></span>. He <span class="vocab-hl" data-ind="datang" onclick="this.classList.toggle('show')">comes<div class="vocab-tooltip">datang</div></span> <span class="vocab-hl" data-ind="rumah" onclick="this.classList.toggle('show')">home<div class="vocab-tooltip">rumah</div></span> in the <span class="vocab-hl" data-ind="sore" onclick="this.classList.toggle('show')">evening<div class="vocab-tooltip">sore</div></span>.`,
            mcq: [
              { q: "Where does Ali go in the morning?", opts: ["Hospital", "Market", "School", "Home"], answer: 1 },
              { q: "What does Ali sell?", opts: ["Vegetables", "Phones", "Bags", "Water"], answer: 0 },
              { q: "Is the price expensive?", opts: ["Yes, very expensive", "No, it is cheap", "It is free", "I don't know"], answer: 1 },
              { q: "When does Ali come home?", opts: ["Morning", "Afternoon", "Evening", "Night"], answer: 2 }
            ]
          },
          {
            type: "speed_round",
            q_eng: "Vocabulary Speed Round! You have 5 seconds per picture.",
            q_ind: "Ronde Cepat Kosakata! Anda punya 5 detik untuk tiap gambar.",
            time_ms: 5000,
            questions: [
              { i: "🚶", opts: ["walk", "go", "come", "sleep"], a: 0 },
              { i: "🐘", opts: ["small", "big", "cheap", "hot"], a: 1 },
              { i: "💰", opts: ["bag", "price", "money", "shop"], a: 2 },
              { i: "🏠", opts: ["bed", "door", "house", "window"], a: 2 },
              { i: "❄️", opts: ["clean", "hot", "cold", "dirty"], a: 2 },
              { i: "🍽️", opts: ["cook", "eat", "drink", "buy"], a: 1 },
              { i: "📅", opts: ["today", "tomorrow", "now", "night"], a: 0 },
              { i: "🛒", opts: ["seller", "product", "customer", "shop"], a: 2 },
              { i: "✨", opts: ["dirty", "clean", "easy", "difficult"], a: 1 },
              { i: "🛍️", opts: ["buy", "sell", "money", "price"], a: 0 }
            ]
          }
        ],
        summary: {
          eng: "You have reviewed over 40 words so far! Keep it up!",
          ind: "Anda telah mengulas lebih dari 40 kata sejauh ini! Lanjutkan!",
          cards: []
        }
      });
    } else if (u === 1 && s === 7) {
      unit.sessions.push({
        id: "u1s7", title: "Session 7: Vocabulary in Real-Life Situations", type: "learning",
        blocks: [],
        exercises: [
          {
            type: "vocab_find",
            q_eng: "Scenario 1: At the Market. Tap 5 hidden English words!",
            q_ind: "Skenario 1: Di Pasar. Ketuk 5 kata bahasa Inggris yang tersembunyi!",
            image: "u1s7_market_scenario_1781947815729.png",
            text: "Siti wants to <span class='vf-word' data-w='buy' onclick='tapVf(0, this)'>buy</span> tomatoes. The <span class='vf-word' data-w='price' onclick='tapVf(0, this)'>price</span> is Rp5.000 per kilogram. She goes to the <span class='vf-word' data-w='market' onclick='tapVf(0, this)'>market</span>. She has a lot of <span class='vf-word' data-w='money' onclick='tapVf(0, this)'>money</span>. The seller wants to <span class='vf-word' data-w='sell' onclick='tapVf(0, this)'>sell</span> fresh vegetables.",
            targets: ["buy", "price", "market", "money", "sell"]
          },
          {
            type: "fill_bank",
            q_eng: "Scenario 2: At Home in the Morning. Label the panels.",
            q_ind: "Skenario 2: Di Rumah Pagi Hari. Beri label pada panel.",
            words: ["sleep", "cook", "eat", "walk"],
            sentences: [
              { text: "<img src='u1s7_comic_morning_1781947849478.png' style='width:100%; border-radius:10px; margin-bottom:10px;'><br>Panel 1 (Top Left): ___", answer: "sleep" },
              { text: "Panel 2 (Top Right): ___", answer: "cook" },
              { text: "Panel 3 (Bottom Left): ___", answer: "eat" },
              { text: "Panel 4 (Bottom Right): ___", answer: "walk" }
            ]
          },
          {
            type: "word_pic_seq",
            randomize: false,
            q_eng: "Scenario 3: Describing Your Job. Match the text to the picture.",
            q_ind: "Skenario 3: Mendeskripsikan Pekerjaan. Cocokkan teks dengan gambar.",
            questions: [
              { word: "He works outside. He sells vegetables.", opts: ["🧑‍🌾", "👨‍🍳", "🏪", "🧹"], answer: 0 },
              { word: "She works at the market. She sells fish and meat.", opts: ["👩‍🏫", "👩‍🍳", "👩‍💼", "🏪"], answer: 3 },
              { word: "He is in the house. He cooks food.", opts: ["👨‍🍳", "👨‍🌾", "👨‍🔧", "👨‍💼"], answer: 0 },
              { word: "She cleans the house. The house is clean now.", opts: ["👩‍⚕️", "👩‍🌾", "🧹", "🏪"], answer: 2 }
            ]
          },
          {
            type: "dropdown_build",
            q_eng: "Exercise: Create Your Own Sentence!",
            q_ind: "Latihan: Buat Kalimat Anda Sendiri!",
            fields: [
              { type: "text", label: "My name is", ph: "Your Name" },
              { type: "select", label: ". I am a", opts: ["student", "seller", "farmer", "worker"] },
              { type: "select", label: ". Every", opts: ["morning", "afternoon", "evening", "night"] },
              { type: "select", label: ", I", opts: ["go to the market.", "cook food.", "clean the house.", "work hard."] }
            ]
          }
        ],
        summary: {
          eng: "You can now use English words in real life. Amazing!",
          ind: "Anda sekarang bisa menggunakan kata bahasa Inggris di kehidupan nyata. Luar biasa!",
          cards: []
        }
      });
    } else if (u === 1 && s === 8) {
      unit.sessions.push({
        id: "u1s8", title: "Session 8: Final Review & Consolidation", type: "learning",
        blocks: [
          {
            type: "flashcards",
            text_eng: "Vocabulary Gallery: Review all the words you learned!",
            text_ind: "Galeri Kosakata: Ulas semua kata yang telah Anda pelajari!",
            cards: [
              { ind: "ibu", eng: "mother", phon: "MA-ther", icon: "👩" }, { ind: "ayah", eng: "father", phon: "FA-ther", icon: "👨" }, { ind: "rumah", eng: "house", phon: "HAUS", icon: "🏠" }, { ind: "meja", eng: "table", phon: "TEI-bel", icon: "🪑" },
              { ind: "uang", eng: "money", phon: "MA-ni", icon: "💵" }, { ind: "harga", eng: "price", phon: "PRAIS", icon: "🏷️" }, { ind: "toko", eng: "shop", phon: "SHYOP", icon: "🏪" }, { ind: "tas", eng: "bag", phon: "BAG", icon: "🛍️" },
              { ind: "pagi", eng: "morning", phon: "MOR-ning", icon: "🌅" }, { ind: "malam", eng: "night", phon: "NAIT", icon: "🌙" }, { ind: "hari ini", eng: "today", phon: "tu-DEI", icon: "📅" }, { ind: "sekarang", eng: "now", phon: "NAU", icon: "⏱️" },
              { ind: "makan", eng: "eat", phon: "IT", icon: "🍽️" }, { ind: "minum", eng: "drink", phon: "DRINK", icon: "🥛" }, { ind: "bekerja", eng: "work", phon: "WERK", icon: "💼" }, { ind: "tidur", eng: "sleep", phon: "SLIP", icon: "😴" },
              { ind: "besar", eng: "big", phon: "BIG", icon: "🐘" }, { ind: "kecil", eng: "small", phon: "SMOL", icon: "🐜" }, { ind: "murah", eng: "cheap", phon: "CHIP", icon: "📉" }, { ind: "mahal", eng: "expensive", phon: "ek-SPEN-siv", icon: "💎" }
            ]
          }
        ],
        exercises: [
          {
            type: "word_pic_seq",
            randomize: true,
            q_eng: "Practice 1: Word to Picture Matching",
            q_ind: "Latihan 1: Cocokkan Kata dengan Gambar",
            questions: [
              { word: "MOTHER", opts: ["👨", "👩", "🧒"], answer: 1 },
              { word: "HOUSE", opts: ["🏪", "🏢", "🏠"], answer: 2 },
              { word: "SLEEP", opts: ["🚶", "😴", "🍽️"], answer: 1 },
              { word: "MONEY", opts: ["🛍️", "💵", "🏷️"], answer: 1 },
              { word: "BIG", opts: ["🐘", "🐜", "💎"], answer: 0 }
            ]
          },
          {
            type: "fill_bank",
            q_eng: "Practice 2: Fill in the Blanks",
            q_ind: "Latihan 2: Isi Titik-Titik",
            words: ["morning", "cook", "price", "clean", "eat"],
            sentences: [
              { text: "Every ___, I wake up early.", answer: "morning" },
              { text: "My mother likes to ___ food.", answer: "cook" },
              { text: "The ___ of this bag is cheap.", answer: "price" },
              { text: "I wash my hands so they are ___.", answer: "clean" },
              { text: "We ___ rice every day.", answer: "eat" }
            ]
          },
          {
            type: "cat_sort",
            q_eng: "Practice 3: Sort by Category",
            q_ind: "Latihan 3: Urutkan Berdasarkan Kategori",
            cats: ["Actions (Kata Kerja)", "Descriptions (Kata Sifat)"],
            words: [
              { w: "buy", c: 0 }, { w: "sell", c: 0 }, { w: "walk", c: 0 },
              { w: "hot", c: 1 }, { w: "cold", c: 1 }, { w: "easy", c: 1 }
            ]
          },
          {
            type: "sent_build",
            q_eng: "Practice 4: Build the Sentence",
            q_ind: "Latihan 4: Susun Kalimat",
            sentences: [
              { words: ["is", "bag", "big", "This"], answer: ["This", "bag", "is", "big"] },
              { words: ["to", "go", "I", "work"], answer: ["I", "go", "to", "work"] },
              { words: ["is", "water", "The", "hot"], answer: ["The", "water", "is", "hot"] },
              { words: ["market", "go", "the", "to", "We"], answer: ["We", "go", "to", "the", "market"] }
            ]
          }
        ],
        summary: {
          eng: "Study Tips before the Quiz:<br>1. Look at English words around you.<br>2. Say the word out loud.<br>3. Connect words to things you know.",
          ind: "Tips Belajar sebelum Kuis:<br>1. Perhatikan kata bahasa Inggris di sekelilingmu.<br>2. Ucapkan kata tersebut dengan lantang.<br>3. Hubungkan kata dengan benda yang sudah kamu ketahui.",
          cards: []
        }
      });
    } else if (u === 2 && s === 1) {
      unit.sessions.push({
        id: "u2s1", title: "Session 1: Greetings & Introductions", type: "learning",
        blocks: [
          {
            type: "flashcards",
            text_eng: "Key Expressions: Tap a card to see the English!",
            text_ind: "Ungkapan Kunci: Ketuk kartu untuk melihat bahasa Inggrisnya!",
            cards: [
              { ind: "halo", eng: "Hello", phon: "HE-lo", icon: "👋" },
              { ind: "selamat pagi", eng: "Good morning", phon: "GUD MOR-ning", icon: "🌅" },
              { ind: "nama saya adalah", eng: "My name is", phon: "MAI NEIM iz", icon: "📛" },
              { ind: "senang bertemu denganmu", eng: "Nice to meet you", phon: "NAIS tu MIT yu", icon: "🤝" },
              { ind: "apa kabar?", eng: "How are you?", phon: "HAU ar yu", icon: "❓" },
              { ind: "saya baik-baik saja", eng: "I am fine", phon: "AI am FAIN", icon: "👍" }
            ]
          }
        ],
        exercises: [
          {
            type: "sent_build",
            q_eng: "Exercise 1: A greeting between two people is mixed up. Tap the lines in the CORRECT ORDER to arrange the dialogue.",
            q_ind: "Latihan 1: Percakapan antara dua orang ini acak. Ketuk baris-baris dalam URUTAN YANG BENAR untuk menyusun dialognya.",
            sentences: [
              {
                words: ["I am fine, thank you!", "Hello! Good morning!", "How are you?", "Good morning!"],
                answer: ["Hello! Good morning!", "Good morning!", "How are you?", "I am fine, thank you!"]
              }
            ]
          },
          {
            type: "fill_bank",
            q_eng: "Exercise 2: Read the dialogue. Choose the missing word from the box to fill each blank.",
            q_ind: "Latihan 2: Baca percakapan berikut. Pilih kata yang hilang dari kotak untuk mengisi setiap titik-titik.",
            words: ["morning", "name", "meet", "you"],
            sentences: [
              { text: "A: Good ___! My name is Budi.", answer: "morning" },
              { text: "B: Hello, Budi! My ___ is Siti.", answer: "name" },
              { text: "A: Nice to ___ you, Siti!", answer: "meet" },
              { text: "B: Nice to meet ___, too!", answer: "you" }
            ]
          }
        ],
        summary: {
          eng: "Great work! You can now greet people and introduce yourself in English.",
          ind: "Kerja bagus! Anda sekarang bisa menyapa orang lain dan memperkenalkan diri dalam bahasa Inggris.",
          cards: [
            { eng: "Hello / Good morning", icon: "👋" },
            { eng: "My name is...", icon: "📛" },
            { eng: "Nice to meet you", icon: "🤝" },
            { eng: "How are you?", icon: "❓" },
            { eng: "I am fine", icon: "👍" }
          ]
        }
      });
    } else if (u === 2 && s === 2) {
      unit.sessions.push({
        id: "u2s2", title: "Session 2: Introducing Your Family", type: "learning",
        blocks: [
          {
            type: "flashcards",
            text_eng: "Key Pattern: 'This is my ___. He/She is a ___.'",
            text_ind: "Pola Kunci: 'Ini adalah ___ saya. Dia adalah seorang ___.' Ketuk kartu!",
            cards: [
              { ind: "ini adalah", eng: "This is", phon: "THIS iz", icon: "👉" },
              { ind: "ibu (saya)", eng: "my mother", phon: "MAI MA-ther", icon: "👩" },
              { ind: "ayah (saya)", eng: "my father", phon: "MAI FA-ther", icon: "👨" },
              { ind: "saudara laki-laki", eng: "my brother", phon: "MAI BRA-ther", icon: "👦" },
              { ind: "saudara perempuan", eng: "my sister", phon: "MAI SIS-ter", icon: "👧" },
              { ind: "suami (saya)", eng: "my husband", phon: "MAI HAS-band", icon: "🤵" },
              { ind: "istri (saya)", eng: "my wife", phon: "MAI WAIF", icon: "👰" },
              { ind: "anak (saya)", eng: "my child", phon: "MAI CHAILD", icon: "👶" }
            ]
          }
        ],
        exercises: [
          {
            type: "match",
            q_eng: "Exercise 1: Match the English word to its Indonesian meaning.",
            q_ind: "Latihan 1: Cocokkan kata bahasa Inggris dengan artinya dalam bahasa Indonesia.",
            exp_ind: "Hebat! Semua kata anggota keluarga cocok!",
            pairs: [
              { word: "husband", meaning: "suami" },
              { word: "wife", meaning: "istri" },
              { word: "brother", meaning: "saudara laki-laki" },
              { word: "sister", meaning: "saudara perempuan" },
              { word: "child", meaning: "anak" }
            ]
          },
          {
            type: "fill_bank",
            q_eng: "Exercise 2: Look at the family picture below. Complete these introduction sentences using the words in the box.",
            q_ind: "Latihan 2: Lihat gambar keluarga di bawah. Lengkapi kalimat perkenalan ini menggunakan kata-kata di kotak.",
            words: ["mother", "husband", "sister", "child"],
            sentences: [
              { text: "This is my ___. She cooks every morning.", answer: "mother" },
              { text: "This is my ___. He works at the market.", answer: "husband" },
              { text: "This is my ___. She is a student.", answer: "sister" },
              { text: "This is my ___. He is small and happy.", answer: "child" }
            ]
          }
        ],
        summary: {
          eng: "Excellent! You can now introduce your family members in English.",
          ind: "Luar biasa! Anda sekarang bisa memperkenalkan anggota keluarga dalam bahasa Inggris.",
          cards: [
            { eng: "This is my mother", icon: "👩" },
            { eng: "This is my father", icon: "👨" },
            { eng: "This is my brother", icon: "👦" },
            { eng: "This is my sister", icon: "👧" },
            { eng: "This is my husband", icon: "🤵" },
            { eng: "This is my wife", icon: "👰" },
            { eng: "This is my child", icon: "👶" }
          ]
        }
      });
    } else if (u === 2 && s === 3) {
      unit.sessions.push({
        id: "u2s3", title: "Session 3: Talking About Your Job", type: "learning",
        blocks: [
          {
            type: "flashcards",
            text_eng: "Key Expressions: How to talk about your job!",
            text_ind: "Ungkapan Kunci: Cara berbicara tentang pekerjaan Anda!",
            cards: [
              { ind: "saya adalah seorang", eng: "I am a", phon: "AI am a", icon: "💼" },
              { ind: "pekerjaanku adalah", eng: "My job is", phon: "MAI jyob iz", icon: "🏷️" },
              { ind: "saya bekerja di", eng: "I work at", phon: "AI werk at", icon: "🏢" },
              { ind: "saya bekerja setiap pagi", eng: "I work every morning", phon: "AI werk EV-ri MOR-ning", icon: "🌅" },
              { ind: "saya menjual", eng: "I sell", phon: "AI sel", icon: "🛍️" },
              { ind: "saya menanam", eng: "I grow", phon: "AI gro", icon: "🌱" },
              { ind: "saya membuat", eng: "I make", phon: "AI meik", icon: "🔨" },
              { ind: "petani", eng: "farmer", phon: "FAR-mer", icon: "🧑‍🌾" },
              { ind: "penjual", eng: "seller", phon: "SE-ler", icon: "🏪" },
              { ind: "pekerja pabrik", eng: "factory worker", phon: "FAK-to-ri WER-ker", icon: "👷" },
              { ind: "juru masak", eng: "cook", phon: "KUK", icon: "👨‍🍳" }
            ]
          }
        ],
        exercises: [
          {
            type: "word_pic_seq",
            randomize: false,
            q_eng: "Exercise 1: Read the job description. Tap the correct picture (emoji) that matches the job.",
            q_ind: "Latihan 1: Baca deskripsi pekerjaan. Ketuk gambar (emoji) yang sesuai dengan pekerjaannya.",
            questions: [
              { word: "I am a farmer. I work outside every morning. I grow vegetables.", opts: ["🧑‍🌾", "👷", "👨‍🍳"], answer: 0 },
              { word: "I am a seller. My job is to sell clothes and bags at the market.", opts: ["🧑‍🌾", "🏪", "👷"], answer: 1 },
              { word: "I am a factory worker. I work at a factory. I make shoes.", opts: ["👨‍🍳", "🧑‍🌾", "👷"], answer: 2 },
              { word: "I am a cook. I work in a restaurant. I make food every day.", opts: ["🏪", "👨‍🍳", "🧑‍🌾"], answer: 1 }
            ]
          },
          {
            type: "dropdown_build",
            q_eng: "Exercise 2: Build YOUR OWN sentence about your job! Select words from each dropdown.",
            q_ind: "Latihan 2: Buat KALIMAT ANDA SENDIRI tentang pekerjaan Anda! Pilih kata dari setiap dropdown.",
            fields: [
              { type: "text", label: "My name is", ph: "your name" },
              { type: "text", label: ". I am a", ph: "your job" },
              { type: "select", label: ". I work in the", opts: ["morning", "afternoon", "evening", "night"] },
              { type: "select", label: ". Every day, I", opts: ["grow vegetables", "sell clothes", "make products", "cook food", "sell at the market"] },
              { type: "text", label: ". My job is important.", ph: "" }
            ]
          }
        ],
        summary: {
          eng: "Well done! You can now describe your job in English.",
          ind: "Kerja bagus! Anda sekarang bisa mendeskripsikan pekerjaan Anda dalam bahasa Inggris.",
          cards: [
            { eng: "I am a farmer", icon: "🧑‍🌾" },
            { eng: "I am a seller", icon: "🏪" },
            { eng: "I am a factory worker", icon: "👷" },
            { eng: "I am a cook", icon: "👨‍🍳" },
            { eng: "I work every morning", icon: "🌅" },
            { eng: "I sell / I grow / I make", icon: "💼" }
          ]
        }
      });
    } else if (u === 2 && s === 4) {
      unit.sessions.push({
        id: "u2s4", title: "Session 4: Asking for Information (Locations)", type: "learning",
        blocks: [
          {
            type: "flashcards",
            text_eng: "Key Expressions: How to ask for directions!",
            text_ind: "Ungkapan Kunci: Cara menanyakan arah!",
            cards: [
              { ind: "permisi", eng: "Excuse me", phon: "eks-KYUZ mi", icon: "🙋" },
              { ind: "di mana ...?", eng: "Where is ...?", phon: "WER iz", icon: "📍" },
              { ind: "belok kiri", eng: "Turn left", phon: "TERN left", icon: "⬅️" },
              { ind: "belok kanan", eng: "Turn right", phon: "TERN rait", icon: "➡️" },
              { ind: "lurus terus", eng: "Go straight", phon: "GO streit", icon: "⬆️" },
              { ind: "dekat", eng: "It is near", phon: "it iz NIR", icon: "🏘️" },
              { ind: "jauh", eng: "It is far", phon: "it iz FAR", icon: "🛣️" },
              { ind: "terima kasih", eng: "Thank you", phon: "THANK yu", icon: "🙏" }
            ]
          }
        ],
        exercises: [
          {
            type: "story_read",
            q_eng: "Exercise 1: Read the dialogue below. Answer: where does the person want to go?",
            q_ind: "Latihan 1: Baca percakapan di bawah ini. Jawab: ke mana orang tersebut ingin pergi?",
            story: "<strong>A:</strong> Excuse me. Where is the hospital?<br><strong>B:</strong> The hospital? Go straight, then turn left. It is near the market.<br><strong>A:</strong> Is it far?<br><strong>B:</strong> No, it is near. About 5 minutes.<br><strong>A:</strong> Thank you very much!<br><strong>B:</strong> You are welcome.",
            mcq: [
              { q: "Where does person A want to go?", opts: ["The market", "The hospital", "The factory", "The school"], answer: 1 },
              { q: "Which direction does B give first?", opts: ["Turn right", "Turn left", "Go straight", "Go back"], answer: 2 },
              { q: "Is the hospital far?", opts: ["Yes, very far", "No, it is near", "Yes, about 30 minutes", "I don't know"], answer: 1 },
              { q: "What does A say at the end?", opts: ["Excuse me", "Where is it?", "Thank you", "Go straight"], answer: 2 }
            ]
          },
          {
            type: "fill_bank",
            q_eng: "Exercise 2: Complete this direction dialogue. Choose the correct word from the box.",
            q_ind: "Latihan 2: Lengkapi dialog arah ini. Pilih kata yang benar dari kotak.",
            words: ["Excuse", "Where", "straight", "left", "Thank"],
            sentences: [
              { text: "A: ___ me, sir. Can you help me?", answer: "Excuse" },
              { text: "A: ___ is the market?", answer: "Where" },
              { text: "B: Go ___ on this road.", answer: "straight" },
              { text: "B: Then turn ___. The market is on the right side.", answer: "left" },
              { text: "A: ___ you very much!", answer: "Thank" }
            ]
          }
        ],
        summary: {
          eng: "Well done! You can now ask for and give directions in English.",
          ind: "Bagus sekali! Anda sekarang bisa menanyakan dan memberikan arah dalam bahasa Inggris.",
          cards: [
            { eng: "Excuse me, where is ...?", icon: "🙋" },
            { eng: "Go straight", icon: "⬆️" },
            { eng: "Turn left / Turn right", icon: "⬅️" },
            { eng: "It is near / It is far", icon: "📍" },
            { eng: "Thank you", icon: "🙏" }
          ]
        }
      });
    } else if (u === 2 && s === 5) {
      unit.sessions.push({
        id: "u2s5", title: "Session 5: Asking for Prices and Shopping", type: "learning",
        blocks: [
          {
            type: "flashcards",
            text_eng: "Key Expressions: Shopping in English!",
            text_ind: "Ungkapan Kunci: Berbelanja dalam bahasa Inggris!",
            cards: [
              { ind: "berapa harganya?", eng: "How much is it?", phon: "HAU mach iz it", icon: "💰" },
              { ind: "harganya Rp...", eng: "It is Rp...", phon: "it iz", icon: "💵" },
              { ind: "itu mahal", eng: "That is expensive", phon: "THAT iz ek-SPEN-siv", icon: "📈" },
              { ind: "bolehkah saya minta", eng: "Can I have ...", phon: "KAN ai hav", icon: "🤲" },
              { ind: "saya ingin membeli", eng: "I want to buy", phon: "AI wont tu bai", icon: "🛒" },
              { ind: "apakah anda punya?", eng: "Do you have ...?", phon: "DU yu hav", icon: "🤔" }
            ]
          }
        ],
        exercises: [
          {
            type: "story_read",
            q_eng: "Exercise 1: Read this market dialogue. Answer the questions about what was bought and the price.",
            q_ind: "Latihan 1: Baca percakapan di pasar ini. Jawab pertanyaan tentang apa yang dibeli dan harganya.",
            story: "<strong>Siti:</strong> Excuse me. Do you have red chilies?<br><strong>Seller:</strong> Yes, I have. Fresh from the farm today!<br><strong>Siti:</strong> I want to buy 500 grams. How much is it?<br><strong>Seller:</strong> It is Rp8.000.<br><strong>Siti:</strong> That is cheap! Can I have 1 kilogram?<br><strong>Seller:</strong> Of course. 1 kilogram is Rp16.000.<br><strong>Siti:</strong> OK. Here is Rp20.000.<br><strong>Seller:</strong> Your change is Rp4.000. Thank you!",
            mcq: [
              { q: "What does Siti want to buy?", opts: ["Tomatoes", "Red chilies", "Vegetables", "Garlic"], answer: 1 },
              { q: "What is the price for 500 grams?", opts: ["Rp4.000", "Rp8.000", "Rp16.000", "Rp20.000"], answer: 1 },
              { q: "How much does Siti finally buy?", opts: ["500 grams", "1 kilogram", "2 kilograms", "1 piece"], answer: 1 },
              { q: "Does Siti think the price is expensive?", opts: ["Yes, very expensive", "No, she says it is cheap", "She doesn't say", "Yes, she does not buy"], answer: 1 }
            ]
          },
          {
            type: "sent_build",
            q_eng: "Exercise 2: A shopping dialogue of 6 lines is scrambled. Tap each line in the CORRECT ORDER.",
            q_ind: "Latihan 2: Dialog belanja 6 baris ini acak. Ketuk setiap baris dalam URUTAN YANG BENAR.",
            sentences: [
              {
                words: ["It is Rp25.000.", "I want to buy this bag. How much is it?", "Thank you!", "Good morning! Can I help you?", "Here is Rp25.000.", "Good morning!"],
                answer: ["Good morning! Can I help you?", "Good morning!", "I want to buy this bag. How much is it?", "It is Rp25.000.", "Here is Rp25.000.", "Thank you!"]
              }
            ]
          }
        ],
        summary: {
          eng: "Excellent! You can now have a shopping conversation in English.",
          ind: "Luar biasa! Anda sekarang bisa melakukan percakapan belanja dalam bahasa Inggris.",
          cards: [
            { eng: "How much is it?", icon: "💰" },
            { eng: "It is Rp...", icon: "💵" },
            { eng: "I want to buy...", icon: "🛒" },
            { eng: "Do you have ...?", icon: "🤔" },
            { eng: "Can I have ...?", icon: "🤲" },
            { eng: "That is expensive!", icon: "📈" }
          ]
        }
      });
    } else if (u === 2 && s === 6) {
      unit.sessions.push({
        id: "u2s6", title: "Session 6: Expressing Needs and Requests", type: "learning",
        blocks: [
          {
            type: "flashcards",
            text_eng: "Key Expressions: How to express what you need!",
            text_ind: "Ungkapan Kunci: Cara menyatakan apa yang Anda butuhkan!",
            cards: [
              { ind: "saya butuh", eng: "I need", phon: "AI nid", icon: "❗" },
              { ind: "saya ingin", eng: "I want", phon: "AI wont", icon: "🥺" },
              { ind: "bisakah anda membantu saya?", eng: "Can you help me?", phon: "KAN yu help mi", icon: "🆘" },
              { ind: "tolong", eng: "Please", phon: "PLIZ", icon: "🙏" },
              { ind: "saya tidak mengerti", eng: "I don't understand", phon: "AI dont an-der-STAND", icon: "🤷" },
              { ind: "bisakah anda mengulanginya?", eng: "Can you repeat that?", phon: "KAN yu ri-PIT that", icon: "🔁" }
            ]
          }
        ],
        exercises: [
          {
            type: "match",
            q_eng: "Exercise 1: Match the situation to the correct English expression.",
            q_ind: "Latihan 1: Cocokkan situasi dengan ungkapan bahasa Inggris yang tepat.",
            exp_ind: "Sempurna! Anda tahu cara meminta bantuan dalam bahasa Inggris!",
            pairs: [
              { word: "You don't understand.", meaning: "I don't understand." },
              { word: "Someone speaks too fast.", meaning: "Can you repeat that?" },
              { word: "You need help.", meaning: "Can you help me?" },
              { word: "You ask nicely.", meaning: "Please." },
              { word: "You need something.", meaning: "I need..." }
            ]
          },
          {
            type: "word_text_seq",
            randomize: true,
            q_eng: "Exercise 2: Read the situation and choose the BEST response in English.",
            q_ind: "Latihan 2: Baca situasinya dan pilih respons TERBAIK dalam bahasa Inggris.",
            questions: [
              { word: "The teacher speaks very fast. You cannot follow.", opts: ["I am fine.", "Can you repeat that?", "Thank you."], answer: 1 },
              { word: "A box is very heavy. You need someone to help.", opts: ["I don't understand.", "Can you help me?", "Where is it?"], answer: 1 },
              { word: "You want to order food at a restaurant.", opts: ["I want rice and water, please.", "I don't understand.", "Go straight."], answer: 0 },
              { word: "Someone explains something. You are confused.", opts: ["Nice to meet you.", "I don't understand. Can you repeat that?", "It is cheap."], answer: 1 },
              { word: "You need water at a meeting.", opts: ["I need water, please.", "How much is it?", "Turn left."], answer: 0 }
            ]
          }
        ],
        summary: {
          eng: "Amazing! You can now express your needs and requests politely in English.",
          ind: "Luar biasa! Anda sekarang bisa menyatakan kebutuhan dan permintaan dengan sopan dalam bahasa Inggris.",
          cards: [
            { eng: "I need ...", icon: "❗" },
            { eng: "I want ...", icon: "🥺" },
            { eng: "Can you help me?", icon: "🆘" },
            { eng: "Please.", icon: "🙏" },
            { eng: "I don't understand.", icon: "🤷" },
            { eng: "Can you repeat that?", icon: "🔁" }
          ]
        }
      });
    } else if (u === 2 && s === 7) {
      unit.sessions.push({
        id: "u2s7", title: "Session 7: Talking About Daily Routine", type: "learning",
        blocks: [
          {
            type: "flashcards",
            text_eng: "Key Expressions: Describe your daily routine!",
            text_ind: "Ungkapan Kunci: Ceritakan rutinitas harianmu!",
            cards: [
              { ind: "saya bangun jam", eng: "I wake up at", phon: "AI weik ap at", icon: "⏰" },
              { ind: "saya pergi ke", eng: "I go to", phon: "AI go tu", icon: "🚶" },
              { ind: "saya pulang jam", eng: "I come home at", phon: "AI kam hom at", icon: "🏠" },
              { ind: "saya makan", eng: "I eat", phon: "AI it", icon: "🍽️" },
              { ind: "saya tidur jam", eng: "I sleep at", phon: "AI slip at", icon: "😴" },
              { ind: "setiap hari", eng: "every day", phon: "EV-ri dei", icon: "📅" },
              { ind: "biasanya", eng: "usually", phon: "YU-zhyu-a-li", icon: "🔄" },
              { ind: "selalu", eng: "always", phon: "OL-weiz", icon: "✅" },
              { ind: "kadang-kadang", eng: "sometimes", phon: "SAM-taimz", icon: "🌗" }
            ]
          }
        ],
        exercises: [
          {
            type: "story_read",
            q_eng: "Exercise 1: Read Ali's daily routine paragraph carefully. Then answer 4 questions.",
            q_ind: "Latihan 1: Baca paragraf rutinitas harian Ali dengan cermat. Kemudian jawab 4 pertanyaan.",
            story: "Hello! My name is Ali. I am a farmer. I always wake up at 04:30 every day. I wash my face and eat breakfast. Usually, I go to the farm at 06:00. I grow vegetables — tomatoes, chilies, and spinach. I come home at 12:00. I eat lunch with my family. In the afternoon, I sometimes go to the market to sell vegetables. I always sleep at 21:00. My life is simple but I am happy!",
            mcq: [
              { q: "What time does Ali wake up?", opts: ["04:00", "04:30", "05:00", "06:00"], answer: 1 },
              { q: "What is Ali's job?", opts: ["Seller", "Factory worker", "Farmer", "Cook"], answer: 2 },
              { q: "What does Ali grow?", opts: ["Rice and corn", "Tomatoes, chilies, and spinach", "Fruit and flowers", "Garlic and onion"], answer: 1 },
              { q: "What does Ali do in the afternoon?", opts: ["He sleeps", "He cooks", "He sometimes goes to the market", "He goes to the farm"], answer: 2 }
            ]
          },
          {
            type: "dropdown_build",
            q_eng: "Exercise 2: Write YOUR own daily routine! Use the word banks below to fill in the gaps.",
            q_ind: "Latihan 2: Tulis rutinitas harian ANDA SENDIRI! Gunakan kotak kata di bawah untuk mengisi titik-titik.",
            fields: [
              { type: "text", label: "My name is", ph: "your name" },
              { type: "select", label: ". I always wake up at", opts: ["04:00", "04:30", "05:00", "05:30", "06:00", "06:30", "07:00"] },
              { type: "select", label: ". Every day, I go to", opts: ["the market", "the farm", "the factory", "the shop", "school", "work"] },
              { type: "select", label: "in the", opts: ["morning", "afternoon", "evening"] },
              { type: "select", label: ". I usually come home at", opts: ["12:00", "13:00", "15:00", "16:00", "17:00", "18:00"] },
              { type: "select", label: ". I always sleep at", opts: ["20:00", "21:00", "22:00", "23:00"] },
              { type: "text", label: ". I am happy!", ph: "" }
            ]
          }
        ],
        summary: {
          eng: "Fantastic! You can now talk about your daily routine in English. Very useful for real life!",
          ind: "Luar biasa! Anda sekarang bisa berbicara tentang rutinitas harian Anda dalam bahasa Inggris. Sangat berguna untuk kehidupan nyata!",
          cards: [
            { eng: "I wake up at ...", icon: "⏰" },
            { eng: "I go to ...", icon: "🚶" },
            { eng: "I come home at ...", icon: "🏠" },
            { eng: "I eat / I sleep at ...", icon: "🍽️" },
            { eng: "every day / usually", icon: "📅" },
            { eng: "always / sometimes", icon: "🔄" }
          ]
        }
      });
    } else if (u === 2 && s === 8) {
      unit.sessions.push({
        id: "u2s8", title: "Session 8: Review & Speaking Practice", type: "learning",
        blocks: [
          {
            type: "flashcards",
            text_eng: "Final Review: All Key Expressions from Unit 2",
            text_ind: "Ulasan Akhir: Semua Ungkapan Kunci dari Unit 2",
            cards: [
              { ind: "Salam", eng: "Hello / Good morning!", phon: "HE-lo / GUD MOR-ning", icon: "👋" },
              { ind: "Nama saya ...", eng: "My name is ...", phon: "MAI NEIM iz", icon: "📛" },
              { ind: "Ini adalah ... saya", eng: "This is my ...", phon: "THIS iz MAI", icon: "👨‍👩‍👧" },
              { ind: "Saya adalah seorang ...", eng: "I am a ...", phon: "AI am a", icon: "💼" },
              { ind: "Permisi, di mana ...?", eng: "Excuse me, where is ...?", phon: "eks-KYUZ mi WER iz", icon: "🙋" },
              { ind: "Berapa harganya?", eng: "How much is it?", phon: "HAU mach iz it", icon: "💰" },
              { ind: "Saya butuh / Tolong", eng: "I need / Please", phon: "AI nid / PLIZ", icon: "🙏" },
              { ind: "Saya bangun jam ...", eng: "I wake up at ...", phon: "AI weik ap at", icon: "⏰" }
            ]
          }
        ],
        exercises: [
          {
            type: "intro_card_builder",
            q_eng: "Final Activity: Build Your Full Self-Introduction! Complete all the sections below. Your introduction card will appear when you finish.",
            q_ind: "Aktivitas Akhir: Buat Perkenalan Diri Lengkap Anda! Lengkapi semua bagian di bawah. Kartu perkenalan Anda akan muncul saat Anda selesai.",
            fields: [
              { section: "🙋 Greeting & Name", items: [
                { type: "select", label: "Say hello:", opts: ["Hello!", "Good morning!", "Good afternoon!"] },
                { type: "text", label: "My name is", ph: "your name" }
              ]},
              { section: "💼 Job", items: [
                { type: "select", label: "I am a", opts: ["farmer", "seller", "factory worker", "cook", "student", "worker"] },
                { type: "select", label: "I work in the", opts: ["morning", "afternoon", "evening"] },
                { type: "select", label: "Every day, I", opts: ["grow vegetables", "sell products", "make things", "cook food", "study"] }
              ]},
              { section: "👨‍👩‍👧 Family", items: [
                { type: "select", label: "This is my", opts: ["husband", "wife", "mother", "father", "child", "family"] },
                { type: "select", label: ". He/She is a", opts: ["farmer", "seller", "cook", "student", "worker"] }
              ]},
              { section: "⏰ Daily Routine", items: [
                { type: "select", label: "I wake up at", opts: ["04:00", "04:30", "05:00", "05:30", "06:00", "07:00"] },
                { type: "select", label: ". I come home at", opts: ["12:00", "14:00", "16:00", "17:00", "18:00"] },
                { type: "select", label: ". I sleep at", opts: ["20:00", "21:00", "22:00"] }
              ]},
              { section: "🙏 A Need or Request", items: [
                { type: "select", label: "I need", opts: ["help", "water", "food", "information"] },
                { type: "select", label: ". Can you", opts: ["help me?", "repeat that?", "show me the way?"] }
              ]}
            ]
          }
        ],
        summary: {
          eng: "Congratulations! 🎉 You have completed all 8 sessions of Unit 2: Speaking! You are now ready for the Unit 2 Quiz.",
          ind: "Selamat! 🎉 Anda telah menyelesaikan semua 8 sesi Unit 2: Berbicara! Anda sekarang siap untuk Kuis Unit 2.",
          cards: []
        }
      });
    } else if (u === 3 && s === 1) {
      unit.sessions.push({
        id: "u3s1", title: "Session 1: Reading a Shop Sign / Notice", type: "learning",
        blocks: [
          {
            type: "flashcards",
            text_eng: "Strategy: What does this text tell me? (Main Idea)",
            text_ind: "Strategi: Apa yang dikatakan teks ini? (Ide Pokok)",
            cards: [
              { ind: "buka", eng: "Open", phon: "O-pen", icon: "🟢" },
              { ind: "tutup", eng: "Closed", phon: "KLOZD", icon: "🔴" },
              { ind: "jam", eng: "Hours", phon: "AU-erz", icon: "⏱️" },
              { ind: "hari", eng: "Days", phon: "DEIZ", icon: "📅" }
            ]
          }
        ],
        exercises: [
          {
            type: "story_read",
            q_eng: "Exercise 1: Read the shop sign and answer 3 questions.",
            q_ind: "Latihan 1: Baca papan pengumuman toko dan jawab 3 pertanyaan.",
            story: "<div style='text-align:center; padding:15px; border:2px solid var(--primary); border-radius:8px; font-family:sans-serif;'><h2>BUDI'S GROCERY</h2><br><strong>OPEN:</strong> Monday - Saturday<br><strong>HOURS:</strong> 06:00 - 18:00<br><br><span style='color:red; font-weight:bold;'>CLOSED ON SUNDAY</span></div>",
            mcq: [
              { q: "What does this text tell us?", opts: ["The price of groceries", "The shop opening hours", "The name of a hospital"], answer: 1 },
              { q: "Is the shop open on Monday?", opts: ["Yes", "No", "I don't know"], answer: 0 },
              { q: "Is the shop open on Sunday?", opts: ["Yes", "No", "I don't know"], answer: 1 }
            ]
          },
          {
            type: "match",
            q_eng: "Exercise 2: Match the notice to its meaning.",
            q_ind: "Latihan 2: Cocokkan papan pengumuman dengan artinya.",
            exp_ind: "Bagus! Anda bisa memahami arti berbagai papan pengumuman.",
            pairs: [
              { word: "OPEN EVERY DAY", meaning: "Toko tidak pernah tutup." },
              { word: "CLOSED TODAY", meaning: "Toko tidak buka hari ini." },
              { word: "OPEN 08:00 - 20:00", meaning: "Toko buka 12 jam." },
              { word: "CASH ONLY", meaning: "Hanya menerima uang tunai." }
            ]
          }
        ],
        summary: {
          eng: "Great! You can read a shop sign.",
          ind: "Bagus! Anda sudah bisa membaca papan pengumuman toko.",
          cards: []
        }
      });
    } else if (u === 3 && s === 2) {
      unit.sessions.push({
        id: "u3s2", title: "Session 2: Reading a Price List", type: "learning",
        blocks: [
          {
            type: "flashcards",
            text_eng: "Strategy: Scanning for specific information (numbers, names)",
            text_ind: "Strategi: Membaca cepat untuk mencari informasi spesifik (angka, nama)",
            cards: [
              { ind: "harga", eng: "Price", phon: "PRAIS", icon: "💰" },
              { ind: "barang", eng: "Item", phon: "AI-tem", icon: "🏷️" },
              { ind: "per kilogram", eng: "Per kg", phon: "per KI-lo-gram", icon: "⚖️" }
            ]
          }
        ],
        exercises: [
          {
            type: "story_read",
            q_eng: "Exercise 1 & 2: Read the price list and answer the questions.",
            q_ind: "Latihan 1 & 2: Baca daftar harga dan jawab pertanyaannya.",
            story: "<div style='padding:15px; border:2px solid var(--primary); border-radius:8px; font-family:sans-serif;'><h3>MARKET PRICE LIST</h3><ul style='list-style-type:none; padding-left:0; line-height:2;'><li style='display:flex; justify-content:space-between; border-bottom:1px solid #ccc;'><span>Tomatoes (1kg)</span><span>Rp 15.000</span></li><li style='display:flex; justify-content:space-between; border-bottom:1px solid #ccc;'><span>Onions (1kg)</span><span>Rp 25.000</span></li><li style='display:flex; justify-content:space-between; border-bottom:1px solid #ccc;'><span>Garlic (500g)</span><span>Rp 20.000</span></li><li style='display:flex; justify-content:space-between; border-bottom:1px solid #ccc;'><span>Chilies (1kg)</span><span>Rp 40.000</span></li><li style='display:flex; justify-content:space-between;'><span>Eggs (1kg)</span><span>Rp 28.000</span></li></ul></div>",
            mcq: [
              { q: "What is the price of Tomatoes?", opts: ["Rp 15.000", "Rp 20.000", "Rp 40.000"], answer: 0 },
              { q: "How much is 1kg of Onions?", opts: ["Rp 15.000", "Rp 25.000", "Rp 28.000"], answer: 1 },
              { q: "What item costs Rp 40.000?", opts: ["Eggs", "Onions", "Chilies"], answer: 2 },
              { q: "Which item is sold for 500g instead of 1kg?", opts: ["Garlic", "Tomatoes", "Eggs"], answer: 0 },
              { q: "(True/False) Eggs are Rp 28.000 per kilogram.", opts: ["True", "False"], answer: 0 },
              { q: "(True/False) Onions are cheaper than Tomatoes.", opts: ["True", "False"], answer: 1 },
              { q: "(True/False) Chilies are the most expensive item on the list.", opts: ["True", "False"], answer: 0 },
              { q: "(True/False) Garlic costs Rp 40.000 for 1kg.", opts: ["True", "False"], answer: 1 },
              { q: "(True/False) The list shows prices for clothes.", opts: ["True", "False"], answer: 1 }
            ]
          }
        ],
        summary: { eng: "Well done! You can read a price list.", ind: "Bagus! Anda bisa membaca daftar harga.", cards: [] }
      });
    } else if (u === 3 && s === 3) {
      unit.sessions.push({
        id: "u3s3", title: "Session 3: Reading a Simple Schedule", type: "learning",
        blocks: [
          {
            type: "flashcards",
            text_eng: "Strategy: Reading a table (find row, column, information)",
            text_ind: "Strategi: Membaca tabel (cari baris, kolom, informasi)",
            cards: [
              { ind: "jadwal", eng: "Schedule", phon: "SKE-jul", icon: "📅" },
              { ind: "kelas", eng: "Class", phon: "KLAS", icon: "🏫" },
              { ind: "kerja", eng: "Work", phon: "WERK", icon: "💼" },
              { ind: "libur", eng: "Off / Rest", phon: "OF / REST", icon: "🏖️" }
            ]
          }
        ],
        exercises: [
          {
            type: "story_read",
            q_eng: "Exercise 1: Look at Ali's weekly work schedule. Answer the 5 questions.",
            q_ind: "Latihan 1: Lihat jadwal kerja mingguan Ali. Jawab 5 pertanyaan.",
            story: "<div style='overflow-x:auto;'><table style='width:100%; border-collapse:collapse; text-align:center;'><thead><tr style='background:var(--primary-light); color:var(--primary-dark);'><th>Day</th><th>Morning</th><th>Afternoon</th></tr></thead><tbody><tr><td style='border:1px solid #ccc; font-weight:bold; padding:8px;'>Monday</td><td style='border:1px solid #ccc;'>Market</td><td style='border:1px solid #ccc;'>Farm</td></tr><tr><td style='border:1px solid #ccc; font-weight:bold; padding:8px;'>Tuesday</td><td style='border:1px solid #ccc;'>Market</td><td style='border:1px solid #ccc;'>Farm</td></tr><tr><td style='border:1px solid #ccc; font-weight:bold; padding:8px;'>Wednesday</td><td style='border:1px solid #ccc;'>Farm</td><td style='border:1px solid #ccc;'>Farm</td></tr><tr><td style='border:1px solid #ccc; font-weight:bold; padding:8px;'>Thursday</td><td style='border:1px solid #ccc;'>Market</td><td style='border:1px solid #ccc; color:red;'>Rest</td></tr><tr><td style='border:1px solid #ccc; font-weight:bold; padding:8px;'>Friday</td><td style='border:1px solid #ccc;'>Market</td><td style='border:1px solid #ccc;'>Market</td></tr></tbody></table></div>",
            mcq: [
              { q: "Where is Ali on Monday morning?", opts: ["Farm", "Market", "Rest"], answer: 1 },
              { q: "Where does Ali go on Wednesday morning?", opts: ["Farm", "Market", "Rest"], answer: 0 },
              { q: "When does Ali rest?", opts: ["Wednesday afternoon", "Thursday afternoon", "Friday morning"], answer: 1 },
              { q: "What does Ali do on Friday afternoon?", opts: ["Market", "Farm", "Rest"], answer: 0 },
              { q: "How many days does Ali work at the farm in the afternoon?", opts: ["1 day", "2 days", "3 days"], answer: 2 }
            ]
          },
          {
            type: "fill_bank",
            q_eng: "Exercise 2: Complete the sentences based on Ali's schedule.",
            q_ind: "Latihan 2: Lengkapi kalimat berdasarkan jadwal Ali.",
            words: ["Market", "Farm", "Thursday"],
            sentences: [
              { text: "On Tuesday morning, Ali goes to the ___.", answer: "Market" },
              { text: "Ali is at the ___ on Wednesday afternoon.", answer: "Farm" },
              { text: "Ali rests on ___ afternoon.", answer: "Thursday" }
            ]
          }
        ],
        summary: { eng: "Fantastic! You can read schedules.", ind: "Luar biasa! Anda bisa membaca jadwal.", cards: [] }
      });
    } else if (u === 3 && s === 4) {
      unit.sessions.push({
        id: "u3s4", title: "Session 4: Reading a Short Message / SMS", type: "learning",
        blocks: [
          {
            type: "flashcards",
            text_eng: "Strategy: Who is sending? What do they want?",
            text_ind: "Strategi: Siapa yang mengirim? Apa yang mereka inginkan?",
            cards: [
              { ind: "pesan", eng: "Message", phon: "ME-sej", icon: "💬" },
              { ind: "pengirim", eng: "Sender", phon: "SEN-der", icon: "📤" },
              { ind: "penerima", eng: "Receiver", phon: "ri-SI-ver", icon: "📥" }
            ]
          }
        ],
        exercises: [
          {
            type: "story_read",
            q_eng: "Exercise 1: Read the WhatsApp message.",
            q_ind: "Latihan 1: Baca pesan WhatsApp.",
            story: "<div style='background:#e5ddd5; padding:15px; border-radius:8px; font-family:sans-serif; max-width:300px; margin:0 auto;'><div style='background:white; padding:10px; border-radius:8px; margin-bottom:10px; box-shadow:0 1px 1px rgba(0,0,0,0.1);'><div style='font-size:0.8rem; color:var(--primary); font-weight:bold; margin-bottom:4px;'>Budi</div>Hello Siti! Are you at the market today? I need to buy 2kg of tomatoes and 1kg of onions. Please let me know. Thanks!</div></div>",
            mcq: [
              { q: "Who is the sender of this message?", opts: ["Siti", "Budi", "The market"], answer: 1 },
              { q: "Who is receiving the message?", opts: ["Siti", "Budi", "Tomatoes"], answer: 0 },
              { q: "What does Budi want to buy?", opts: ["1kg of tomatoes", "2kg of tomatoes and 1kg of onions", "Eggs"], answer: 1 }
            ]
          },
          {
            type: "word_text_seq",
            randomize: true,
            q_eng: "Exercise 2: Choose the best reply from Siti.",
            q_ind: "Latihan 2: Pilih balasan terbaik dari Siti.",
            questions: [
              { word: "How should Siti reply to Budi's message?", opts: ["No, I don't know you.", "Yes, Budi! I am at the market. I have tomatoes and onions.", "I am a factory worker."], answer: 1 }
            ]
          }
        ],
        summary: { eng: "Excellent! You can read short messages.", ind: "Luar biasa! Anda bisa membaca pesan singkat.", cards: [] }
      });
    } else if (u === 3 && s === 5) {
      unit.sessions.push({
        id: "u3s5", title: "Session 5: Reading a Product Label", type: "learning",
        blocks: [
          {
            type: "flashcards",
            text_eng: "Key Words: Reading Labels",
            text_ind: "Kata Kunci: Membaca Label",
            cards: [
              { ind: "bahan", eng: "Ingredients", phon: "in-GRI-di-ents", icon: "🧪" },
              { ind: "cara pakai", eng: "Directions", phon: "di-REK-shuns", icon: "📋" },
              { ind: "peringatan", eng: "Warning", phon: "WOR-ning", icon: "⚠️" },
              { ind: "kedaluwarsa", eng: "Expired", phon: "ek-SPAIRD", icon: "⏳" }
            ]
          }
        ],
        exercises: [
          {
            type: "story_read",
            q_eng: "Exercise 1 & 2: Read the medicine label and answer the questions.",
            q_ind: "Latihan 1 & 2: Baca label obat dan jawab pertanyaannya.",
            story: "<div style='border:3px solid #1976D2; border-radius:12px; padding:15px; font-family:sans-serif; background:#e3f2fd;'><h2 style='color:#1976D2; margin-top:0;'>COUGH SYRUP</h2><strong>DIRECTIONS:</strong><br>Adults: 2 spoons, 3 times a day.<br>Children: 1 spoon, 2 times a day.<br>Take after eating.<br><br><strong style='color:#d32f2f;'>WARNING:</strong> Do not give to babies.<br><br><strong>EXPIRED:</strong> December 2026</div>",
            mcq: [
              { q: "What is this product?", opts: ["Food", "Cough Syrup", "Soap"], answer: 1 },
              { q: "How many spoons for an adult?", opts: ["1 spoon", "2 spoons", "3 spoons"], answer: 1 },
              { q: "When should you take the medicine?", opts: ["Before eating", "After eating", "Before sleeping"], answer: 1 },
              { q: "Who cannot take this medicine?", opts: ["Adults", "Children", "Babies"], answer: 2 },
              { q: "(True/False) Adults take the medicine 3 times a day.", opts: ["True", "False"], answer: 0 },
              { q: "(True/False) Children take 2 spoons.", opts: ["True", "False"], answer: 1 },
              { q: "(True/False) The medicine is expired in 2025.", opts: ["True", "False"], answer: 1 },
              { q: "(True/False) You take it after eating.", opts: ["True", "False"], answer: 0 }
            ]
          }
        ],
        summary: { eng: "Great job! You can read labels safely.", ind: "Kerja bagus! Anda bisa membaca label dengan aman.", cards: [] }
      });
    } else if (u === 3 && s === 6) {
      unit.sessions.push({
        id: "u3s6", title: "Session 6: Reading a Short Advertisement", type: "learning",
        blocks: [
          {
            type: "flashcards",
            text_eng: "Strategy: What is sold? What is the price? What is the benefit?",
            text_ind: "Strategi: Apa yang dijual? Berapa harganya? Apa manfaatnya?",
            cards: [
              { ind: "dijual", eng: "For Sale", phon: "for SEIL", icon: "🛍️" },
              { ind: "diskon", eng: "Discount", phon: "DIS-kaunt", icon: "🏷️" },
              { ind: "baru", eng: "New", phon: "NYU", icon: "✨" },
              { ind: "murah", eng: "Cheap", phon: "CHIP", icon: "💲" }
            ]
          }
        ],
        exercises: [
          {
            type: "story_read",
            q_eng: "Exercise 1: Read the flyer and answer the questions.",
            q_ind: "Latihan 1: Baca brosur dan jawab pertanyaannya.",
            story: "<div style='text-align:center; padding:20px; background:#fff3e0; border:2px dashed #ff9800; border-radius:10px;'><h1 style='color:#e65100; margin-top:0;'>FRESH MILK FOR SALE!</h1><p style='font-size:1.1rem;'>Healthy and delicious milk from our farm.</p><div style='background:#ff9800; color:white; display:inline-block; padding:10px 20px; font-weight:bold; border-radius:20px; font-size:1.2rem; margin:10px 0;'>Only Rp 12.000 / bottle</div><p style='color:#d84315; font-weight:bold;'>Buy 2 bottles, get a 10% DISCOUNT!</p><p>Visit Ali's Farm today!</p></div>",
            mcq: [
              { q: "What is being sold?", opts: ["Water", "Fresh Milk", "Vegetables"], answer: 1 },
              { q: "How much is one bottle?", opts: ["Rp 10.000", "Rp 12.000", "Rp 20.000"], answer: 1 },
              { q: "Where can you buy it?", opts: ["Ali's Farm", "The hospital", "The factory"], answer: 0 },
              { q: "What is the benefit if you buy 2 bottles?", opts: ["Free delivery", "10% discount", "Free bottle"], answer: 1 }
            ]
          },
          {
            type: "dropdown_build",
            q_eng: "Exercise 2: Write 2 sentences about what the ad offers.",
            q_ind: "Latihan 2: Tulis 2 kalimat tentang apa yang ditawarkan iklan ini.",
            fields: [
              { type: "text", label: "This ad is selling", ph: "" },
              { type: "select", label: "from", opts: ["fresh milk", "vegetables", "meat"] },
              { type: "select", label: ".", opts: ["Ali's Farm", "Budi's Shop"] },
              { type: "text", label: "The price is", ph: "" },
              { type: "select", label: "per bottle.", opts: ["Rp 10.000", "Rp 12.000", "Rp 15.000"] }
            ]
          }
        ],
        summary: { eng: "Perfect! You can read ads.", ind: "Sempurna! Anda bisa membaca iklan.", cards: [] }
      });
    } else if (u === 3 && s === 7) {
      unit.sessions.push({
        id: "u3s7", title: "Session 7: Reading a Short Paragraph", type: "learning",
        blocks: [
          {
            type: "flashcards",
            text_eng: "Strategy: Find main idea + supporting details",
            text_ind: "Strategi: Cari ide pokok + detail pendukung",
            cards: [
              { ind: "ide pokok", eng: "Main Idea", phon: "MEIN ai-DI-a", icon: "💡" },
              { ind: "detail", eng: "Detail", phon: "DI-teil", icon: "🔍" },
              { ind: "siapa", eng: "Who", phon: "HU", icon: "👤" },
              { ind: "apa", eng: "What", phon: "WOT", icon: "❓" }
            ]
          }
        ],
        exercises: [
          {
            type: "story_read",
            q_eng: "Exercise 1: Read the paragraph and answer the questions.",
            q_ind: "Latihan 1: Baca paragraf dan jawab pertanyaannya.",
            story: "<div style='background:var(--surface); padding:15px; border-radius:8px; line-height:1.6;'>Siti is a seller at the market. Every morning, she wakes up at 04:00. She cooks rice and prepares her vegetables. At 05:30, Siti goes to the market. She sells tomatoes, chilies, and onions. Many people buy from Siti because her vegetables are fresh and cheap. She goes home at 14:00. She is tired, but she is happy.</div>",
            mcq: [
              { q: "What is the main idea of this paragraph?", opts: ["Siti's daily life as a seller", "How to cook rice", "The price of tomatoes"], answer: 0 },
              { q: "What time does Siti go to the market?", opts: ["04:00", "05:30", "14:00"], answer: 1 },
              { q: "Why do many people buy from Siti?", opts: ["She is tired", "Her vegetables are fresh and cheap", "She wakes up early"], answer: 1 },
              { q: "How does Siti feel at the end of the day?", opts: ["Sad and angry", "Tired but happy", "Hungry"], answer: 1 }
            ]
          },
          {
            type: "match",
            q_eng: "Exercise 2: Match vocabulary words from the text to their meaning.",
            q_ind: "Latihan 2: Cocokkan kosakata dari teks dengan artinya.",
            exp_ind: "Bagus! Pemahaman kata Anda semakin meningkat.",
            pairs: [
              { word: "Seller", meaning: "Penjual" },
              { word: "Fresh", meaning: "Segar" },
              { word: "Cheap", meaning: "Murah" },
              { word: "Tired", meaning: "Lelah" },
              { word: "Prepare", meaning: "Menyiapkan" }
            ]
          }
        ],
        summary: { eng: "Amazing! You can read paragraphs.", ind: "Luar biasa! Anda bisa membaca paragraf.", cards: [] }
      });
    } else if (u === 3 && s === 8) {
      unit.sessions.push({
        id: "u3s8", title: "Session 8: Review & Consolidation", type: "learning",
        blocks: [
          {
            type: "flashcards",
            text_eng: "Review: Reading Strategies. Tap the cards to remember before the quiz!",
            text_ind: "Ulasan: Strategi Membaca. Ketuk kartu untuk mengingat sebelum kuis!",
            cards: [
              { ind: "Papan & Iklan", eng: "Main idea, hours, price", phon: "MEIN ai-DI-a...", icon: "📖" },
              { ind: "Daftar Harga & Tabel", eng: "Scan for numbers/items", phon: "SKAN for...", icon: "📊" },
              { ind: "Label", eng: "Ingredients, warning", phon: "in-GRI-di-ents...", icon: "🏷️" },
              { ind: "Pesan", eng: "Who sends it? What?", phon: "HU sendz it...", icon: "💬" }
            ]
          }
        ],
        exercises: [
          {
            type: "story_read",
            q_eng: "Review Activity 1: Shop Notice",
            q_ind: "Aktivitas Ulasan 1: Papan Pengumuman Toko",
            story: "<div style='text-align:center; padding:15px; border:2px dashed var(--primary); background:#fff;'><h3>LAUNDRY SERVICE</h3><p>Open: 07:00 - 19:00</p><p>Wash & Fold: Rp 6.000 / kg</p><p style='color:red; font-weight:bold;'>Closed every Tuesday</p></div>",
            mcq: [
              { q: "What service is this?", opts: ["Car wash", "Laundry service", "Grocery shop"], answer: 1 },
              { q: "How much is Wash & Fold per kg?", opts: ["Rp 6.000", "Rp 7.000", "Rp 19.000"], answer: 0 },
              { q: "Is it open on Tuesday?", opts: ["Yes", "No", "Only morning"], answer: 1 }
            ]
          },
          {
            type: "story_read",
            q_eng: "Review Activity 2: Product Label",
            q_ind: "Aktivitas Ulasan 2: Label Produk",
            story: "<div style='padding:15px; border:2px solid green; background:#e8f5e9;'><h3 style='color:green; margin-top:0;'>FRESH APPLE JUICE</h3><p><strong>Ingredients:</strong> Water, Apples, Sugar.</p><p><strong>Directions:</strong> Shake well before drinking. Keep in refrigerator.</p><p><strong>Expired:</strong> 10/10/2026</p></div>",
            mcq: [
              { q: "What is the product?", opts: ["Fresh milk", "Apple juice", "Sugar"], answer: 1 },
              { q: "What should you do before drinking?", opts: ["Add water", "Shake well", "Boil it"], answer: 1 },
              { q: "Does this juice contain sugar?", opts: ["Yes", "No", "Not sure"], answer: 0 }
            ]
          },
          {
            type: "story_read",
            q_eng: "Review Activity 3: Text Message",
            q_ind: "Aktivitas Ulasan 3: Pesan Teks",
            story: "<div style='background:#e5ddd5; padding:15px; max-width:300px; margin:0 auto;'><div style='background:white; padding:10px; border-radius:8px;'><div style='font-size:0.8rem; font-weight:bold; color:blue; margin-bottom:4px;'>Boss</div>Ali, please come to the farm at 06:00 tomorrow. We need to plant the tomatoes. Bring your tools. Thank you.</div></div>",
            mcq: [
              { q: "Who sends the message?", opts: ["Ali", "Boss", "Tomatoes"], answer: 1 },
              { q: "When does Ali need to come?", opts: ["06:00 tomorrow", "06:00 today", "08:00 tomorrow"], answer: 0 },
              { q: "What do they need to do?", opts: ["Sell tomatoes", "Plant tomatoes", "Buy tools"], answer: 1 }
            ]
          },
          {
            type: "story_read",
            q_eng: "Review Activity 4: Short Paragraph",
            q_ind: "Aktivitas Ulasan 4: Paragraf Pendek",
            story: "<div style='padding:15px; border:1px solid #ccc; background:#fff;'>Budi is a factory worker. He makes shoes. He works from Monday to Friday. On Saturday and Sunday, he rests at home with his family. He likes his job because the factory is near his house.</div>",
            mcq: [
              { q: "What does Budi make?", opts: ["Clothes", "Shoes", "Bags"], answer: 1 },
              { q: "Does he work on Sunday?", opts: ["Yes", "No", "Sometimes"], answer: 1 },
              { q: "Why does he like his job?", opts: ["It is easy", "The factory is near his house", "He makes lots of money"], answer: 1 }
            ]
          }
        ],
        summary: {
          eng: "Congratulations! 🎉 You have completed all 8 sessions of Unit 3: Reading! You are now ready for the Unit 3 Quiz.",
          ind: "Selamat! 🎉 Anda telah menyelesaikan semua 8 sesi Unit 3: Membaca! Anda sekarang siap untuk Kuis Unit 3.",
          cards: []
        }
      });
    } else {
      unit.sessions.push(getPlaceholderContent(u, s));
    }
  }

  if (u === 1) {
    unit.quiz = {
      id: "u1q", title: "Unit 1 Final Quiz", type: "quiz",
      explanation: {
        eng: "Vocabulary Assessment. 25 Questions. Passing score: 70%. Good luck!",
        ind: "Asesmen Kosakata. 25 Pertanyaan. Nilai kelulusan: 70%. Semoga berhasil!"
      },
      exercises: [
        {
          type: "word_pic_seq",
          randomize: true,
          q_eng: "Part 1: Match the word to the picture",
          q_ind: "Bagian 1: Cocokkan kata dengan gambar",
          questions: [
            { word: "MOTHER", opts: ["👨", "👩", "🧒"], answer: 1 },
            { word: "HOUSE", opts: ["🏪", "🏢", "🏠"], answer: 2 },
            { word: "MARKET", opts: ["🏪", "🛍️", "🛒"], answer: 0 },
            { word: "MONEY", opts: ["💰", "💵", "🏷️"], answer: 1 },
            { word: "NIGHT", opts: ["🌅", "🌙", "☁️"], answer: 1 },
            { word: "EAT", opts: ["🍽️", "🥛", "😴"], answer: 0 },
            { word: "BIG", opts: ["🐜", "🐘", "💎"], answer: 1 },
            { word: "EXPENSIVE", opts: ["📉", "🗑️", "💎"], answer: 2 }
          ]
        },
        {
          type: "word_text_seq",
          randomize: true,
          q_eng: "Part 2: Select the correct Indonesian meaning",
          q_ind: "Bagian 2: Pilih arti bahasa Indonesia yang benar",
          questions: [
            { word: "SELL", opts: ["Membeli", "Menjual", "Bekerja"], answer: 1 },
            { word: "YESTERDAY", opts: ["Hari ini", "Besok", "Kemarin"], answer: 2 },
            { word: "CLEAN", opts: ["Bersih", "Kotor", "Mudah"], answer: 0 },
            { word: "DOOR", opts: ["Jendela", "Meja", "Pintu"], answer: 2 },
            { word: "PRICE", opts: ["Uang", "Harga", "Toko"], answer: 1 }
          ]
        },
        {
          type: "fill_bank",
          q_eng: "Part 3: Fill in the blank",
          q_ind: "Bagian 3: Isi titik-titik",
          words: ["easy", "water", "bed", "work", "buy"],
          sentences: [
            { text: "I want to ___ some tomatoes.", answer: "buy" },
            { text: "He goes to ___ every morning.", answer: "work" },
            { text: "English is not difficult, it is ___!", answer: "easy" },
            { text: "I drink cold ___.", answer: "water" },
            { text: "I sleep on the ___.", answer: "bed" }
          ]
        },
        {
          type: "sent_build",
          q_eng: "Part 4: Arrange the words into a sentence",
          q_ind: "Bagian 4: Susun kata-kata menjadi kalimat",
          sentences: [
            { words: ["is", "The", "room", "clean"], answer: ["The", "room", "is", "clean"] },
            { words: ["go", "I", "to", "school"], answer: ["I", "go", "to", "school"] },
            { words: ["bag", "is", "expensive", "This"], answer: ["This", "bag", "is", "expensive"] },
            { words: ["every", "She", "cooks", "morning"], answer: ["She", "cooks", "every", "morning"] }
          ]
        },
        {
          type: "story_read",
          q_eng: "Part 5: Reading Comprehension",
          q_ind: "Bagian 5: Pemahaman Bacaan",
          story: `Today is morning. Budi is at the shop. He wants to buy a table. The price is expensive, so he uses a lot of money.`,
          mcq: [
            { q: "Where is Budi?", opts: ["At home", "At the market", "At the shop", "At school"], answer: 2 },
            { q: "What does he want to buy?", opts: ["A chair", "A bag", "A table", "A bed"], answer: 2 },
            { q: "Is the table cheap?", opts: ["Yes, it is cheap", "No, it is expensive", "It is free", "I don't know"], answer: 1 }
          ]
        }
      ]
    };
  }

  if (u === 2) {
    unit.quiz = {
      id: "u2q", title: "Unit 2 Final Quiz – Speaking & Functions", type: "quiz",
      explanation: {
        eng: "Speaking & Functions Assessment. 25 Questions across 5 sections. Passing score: 70%. You may retake if needed. Good luck!",
        ind: "Asesmen Berbicara & Fungsi. 25 Pertanyaan dalam 5 bagian. Nilai kelulusan: 70%. Anda boleh mengulang jika perlu. Semoga berhasil!"
      },
      exercises: [
        {
          type: "word_text_seq",
          randomize: true,
          q_eng: "Part 1 (5 questions): Read each situation. Choose the CORRECT greeting or expression to use.",
          q_ind: "Bagian 1 (5 pertanyaan): Baca setiap situasi. Pilih salam atau ungkapan yang BENAR untuk digunakan.",
          questions: [
            { word: "You see your neighbor early in the morning.", opts: ["Good morning!", "Good night!", "How much is it?"], answer: 0 },
            { word: "You meet a new person for the first time.", opts: ["Goodbye!", "Nice to meet you!", "I don't understand."], answer: 1 },
            { word: "Someone asks: 'How are you?' — what do you say?", opts: ["My name is Budi.", "I am fine, thank you!", "Where is the market?"], answer: 1 },
            { word: "You want to introduce yourself.", opts: ["My name is Siti.", "I don't understand.", "Go straight."], answer: 0 },
            { word: "A friend says 'Nice to meet you.' What do you reply?", opts: ["Thank you.", "Nice to meet you too!", "I am a farmer."], answer: 1 }
          ]
        },
        {
          type: "fill_bank",
          q_eng: "Part 2 (5 questions): Read each line of dialogue. Fill in the blank with the correct word from the box.",
          q_ind: "Bagian 2 (5 pertanyaan): Baca setiap baris percakapan. Isi titik-titik dengan kata yang benar dari kotak.",
          words: ["Excuse", "straight", "meet", "buy", "repeat"],
          sentences: [
            { text: "A: ___ me. Where is the clinic?", answer: "Excuse" },
            { text: "B: Go ___ and turn right.", answer: "straight" },
            { text: "A: Nice to ___ you, Budi.", answer: "meet" },
            { text: "A: I want to ___ 2 kilograms of rice.", answer: "buy" },
            { text: "B: Sorry, can you ___ that? I don't understand.", answer: "repeat" }
          ]
        },
        {
          type: "sent_build",
          q_eng: "Part 3 (5 dialogues): Each short dialogue is scrambled. Tap the lines in the CORRECT ORDER.",
          q_ind: "Bagian 3 (5 dialog): Setiap dialog pendek ini acak. Ketuk baris-baris dalam URUTAN YANG BENAR.",
          sentences: [
            { words: ["I am fine, thank you!", "How are you?", "Hello, good morning!"], answer: ["Hello, good morning!", "How are you?", "I am fine, thank you!"] },
            { words: ["It is Rp20.000.", "Excuse me, how much is this bag?", "Here is Rp20.000."], answer: ["Excuse me, how much is this bag?", "It is Rp20.000.", "Here is Rp20.000."] },
            { words: ["Go straight, then turn left.", "Excuse me, where is the market?", "Thank you!"], answer: ["Excuse me, where is the market?", "Go straight, then turn left.", "Thank you!"] },
            { words: ["Nice to meet you, Siti.", "My name is Siti. Nice to meet you!", "Hello! My name is Budi."], answer: ["Hello! My name is Budi.", "My name is Siti. Nice to meet you!", "Nice to meet you, Siti."] },
            { words: ["I am a farmer. I grow vegetables.", "Hello! What is your job?", "Nice! That is a great job."], answer: ["Hello! What is your job?", "I am a farmer. I grow vegetables.", "Nice! That is a great job."] }
          ]
        },
        {
          type: "story_read",
          q_eng: "Part 4 (5 questions): Read this short dialogue. Then answer the comprehension questions.",
          q_ind: "Bagian 4 (5 pertanyaan): Baca dialog pendek ini. Kemudian jawab pertanyaan pemahamannya.",
          story: "<strong>Budi:</strong> Good morning! My name is Budi. Nice to meet you.<br><strong>Siti:</strong> Good morning, Budi! My name is Siti. Nice to meet you too!<br><strong>Budi:</strong> What is your job, Siti?<br><strong>Siti:</strong> I am a seller. I sell vegetables at the market every morning. What about you?<br><strong>Budi:</strong> I am a factory worker. I work in the evening.<br><strong>Siti:</strong> Excuse me, Budi — where is the nearest shop?<br><strong>Budi:</strong> Go straight and turn right. It is near, about 3 minutes.<br><strong>Siti:</strong> Thank you!",
          mcq: [
            { q: "What time of day are Budi and Siti talking?", opts: ["Morning", "Afternoon", "Evening", "Night"], answer: 0 },
            { q: "What is Siti's job?", opts: ["Factory worker", "Farmer", "Seller", "Cook"], answer: 2 },
            { q: "When does Budi work?", opts: ["Morning", "Afternoon", "Evening", "Night"], answer: 2 },
            { q: "What does Siti ask Budi?", opts: ["Where he works", "Where the nearest shop is", "What he sells", "How much the bag costs"], answer: 1 },
            { q: "How far is the shop?", opts: ["30 minutes", "Very far", "About 3 minutes", "Across the river"], answer: 2 }
          ]
        },
        {
          type: "word_text_seq",
          randomize: true,
          q_eng: "Part 5 (5 questions): Read the prompt. Select the MOST APPROPRIATE response.",
          q_ind: "Bagian 5 (5 pertanyaan): Baca pertanyaan/situasinya. Pilih respons yang PALING TEPAT.",
          questions: [
            { word: "Someone says: 'Thank you very much!'", opts: ["You are welcome!", "Excuse me.", "Go straight."], answer: 0 },
            { word: "You don't understand what someone said.", opts: ["I am fine.", "I don't understand. Can you repeat that?", "Nice to meet you."], answer: 1 },
            { word: "You want to buy tomatoes. What do you say?", opts: ["I want to buy tomatoes, please.", "I don't understand.", "Turn left."], answer: 0 },
            { word: "Someone asks: 'Where do you work?'", opts: ["I wake up at 05:00.", "I work at the market.", "It is near."], answer: 1 },
            { word: "A new friend asks: 'What is your daily routine?'", opts: ["I need help.", "Go straight and turn right.", "I wake up at 05:00 and go to the farm every morning."], answer: 2 }
          ]
        }
      ]
    };
  }

  if (u === 3) {
    unit.quiz = {
      id: "u3q", title: "Unit 3 Final Quiz – Reading Comprehension", type: "quiz",
      explanation: {
        eng: "Reading Assessment. 25 Questions based on 3 texts. Passing score: 70%. Good luck!",
        ind: "Asesmen Membaca. 25 Pertanyaan berdasarkan 3 teks. Nilai kelulusan: 70%. Semoga berhasil!"
      },
      exercises: [
        {
          type: "story_read",
          q_eng: "Text 1 (8 questions): Read the clinic notice.",
          q_ind: "Teks 1 (8 pertanyaan): Baca pengumuman klinik ini.",
          story: "<div style='text-align:center; padding:20px; border:2px solid blue; background:#f0f8ff;'><h2>SEHAT CLINIC</h2><br><strong>Open:</strong> Monday - Saturday<br><strong>Hours:</strong> 08:00 - 20:00<br><strong>Doctor:</strong> Dr. Rahman<br><br><span style='color:red; font-weight:bold;'>Closed on Sunday and Public Holidays.</span><br><br><strong>Price List:</strong><br>Consultation: Rp 50.000<br>Medicine: Rp 20.000 - Rp 100.000</div>",
          mcq: [
            { q: "What is the name of the clinic?", opts: ["Dr. Rahman Clinic", "Sehat Clinic", "Monday Clinic"], answer: 1 },
            { q: "Who is the doctor?", opts: ["Dr. Rahman", "Dr. Sehat", "Dr. Budi"], answer: 0 },
            { q: "Is the clinic open on Monday?", opts: ["Yes", "No", "I don't know"], answer: 0 },
            { q: "Is the clinic open on Sunday?", opts: ["Yes", "No", "I don't know"], answer: 1 },
            { q: "What time does the clinic close?", opts: ["08:00", "18:00", "20:00"], answer: 2 },
            { q: "How much is a consultation?", opts: ["Rp 20.000", "Rp 50.000", "Rp 100.000"], answer: 1 },
            { q: "What is the lowest price for medicine?", opts: ["Rp 20.000", "Rp 50.000", "Rp 100.000"], answer: 0 },
            { q: "(True/False) The clinic is open on Public Holidays.", opts: ["True", "False"], answer: 1 }
          ]
        },
        {
          type: "story_read",
          q_eng: "Text 2 (8 questions): Read the short message.",
          q_ind: "Teks 2 (8 pertanyaan): Baca pesan singkat ini.",
          story: "<div style='background:#e5ddd5; padding:15px; max-width:300px; margin:0 auto;'><div style='background:white; padding:10px; border-radius:8px;'><div style='font-size:0.8rem; font-weight:bold; color:green; margin-bottom:4px;'>Siti</div>Hello Ali! I want to make a cake today. Do you have 2kg of sugar and 1kg of eggs at your shop? Please let me know the total price. I will come at 15:00. Thank you!</div></div>",
          mcq: [
            { q: "Who sends the message?", opts: ["Ali", "Siti", "The shop"], answer: 1 },
            { q: "Who is the receiver?", opts: ["Ali", "Siti", "Budi"], answer: 0 },
            { q: "What does Siti want to make?", opts: ["Bread", "A cake", "Dinner"], answer: 1 },
            { q: "How much sugar does she need?", opts: ["1kg", "2kg", "3kg"], answer: 1 },
            { q: "How much eggs does she need?", opts: ["1kg", "2kg", "1 piece"], answer: 0 },
            { q: "What does she ask Ali for?", opts: ["The total price", "The address", "Free eggs"], answer: 0 },
            { q: "What time will Siti come to the shop?", opts: ["08:00", "15:00", "20:00"], answer: 1 },
            { q: "(True/False) Siti wants to buy rice.", opts: ["True", "False"], answer: 1 }
          ]
        },
        {
          type: "story_read",
          q_eng: "Text 3 (9 questions): Read the short paragraph.",
          q_ind: "Teks 3 (9 pertanyaan): Baca paragraf pendek ini.",
          story: "<div style='padding:15px; border:1px solid #ccc; line-height:1.6; background:#fff;'>This is my husband, Joko. He is a farmer. Every morning, he wakes up at 04:30. He goes to the farm at 05:30. He grows corn and tomatoes. His farm is big and clean. He comes home at 13:00 to eat lunch and rest. Sometimes, in the afternoon, he goes to the market to sell the corn. Joko is a hardworking man. We are a happy family.</div>",
          mcq: [
            { q: "Who is the paragraph about?", opts: ["The writer", "Joko, the husband", "Siti"], answer: 1 },
            { q: "What is Joko's job?", opts: ["Seller", "Farmer", "Factory worker"], answer: 1 },
            { q: "What time does Joko wake up?", opts: ["04:30", "05:30", "13:00"], answer: 0 },
            { q: "What does Joko grow?", opts: ["Rice and chilies", "Corn and tomatoes", "Flowers"], answer: 1 },
            { q: "How is his farm described?", opts: ["Small and dirty", "Big and clean", "Near the market"], answer: 1 },
            { q: "When does Joko come home?", opts: ["13:00", "15:00", "Evening"], answer: 0 },
            { q: "Why does he come home?", opts: ["To sell corn", "To eat lunch and rest", "To wake up"], answer: 1 },
            { q: "What does he sometimes do in the afternoon?", opts: ["Sleep", "Go to the market to sell corn", "Cook dinner"], answer: 1 },
            { q: "What kind of man is Joko?", opts: ["Lazy", "Hardworking", "Angry"], answer: 1 }
          ]
        }
      ]
    };
  }

  curriculum.push(unit);
}

// Map everything to a linear index
const stepMap = [];
curriculum.forEach(u => {
  u.sessions.forEach(s => { stepMap.push({ unitId: u.id, stepData: s, isQuiz: false }); });
  stepMap.push({ unitId: u.id, stepData: u.quiz, isQuiz: true });
});
stepMap.push({
  unitId: "final", isQuiz: true,
  stepData: { 
    id: "final", 
    title: "English Communication Skills — Final Test", 
    type: "quiz",
    explanation: {
      eng: "Answer all questions carefully. This test covers everything you have learned. Total: 40 questions.",
      ind: "Jawab semua soal dengan teliti. Tes ini mencakup semua yang telah kamu pelajari. Total: 40 pertanyaan."
    },
    exercises: [
      {
        type: "word_pic_seq",
        randomize: true,
        q_eng: "SECTION A: Vocabulary (Part 1). Match the word to the picture.",
        q_ind: "BAGIAN A: Kosakata (Bagian 1). Cocokkan kata dengan gambar.",
        questions: [
          { word: "FAMILY", opts: ["👨‍👩‍👧", "🏢", "🚗"], answer: 0 },
          { word: "MORNING", opts: ["🌙", "🌅", "🌧️"], answer: 1 },
          { word: "VEGETABLES", opts: ["🥦", "🥩", "🍰"], answer: 0 },
          { word: "HOSPITAL", opts: ["🏪", "🏥", "🏫"], answer: 1 },
          { word: "MONEY", opts: ["💰", "🏷️", "💳"], answer: 0 }
        ]
      },
      {
        type: "word_text_seq",
        randomize: true,
        q_eng: "SECTION A: Vocabulary (Part 2). Select the correct Indonesian meaning.",
        q_ind: "BAGIAN A: Kosakata (Bagian 2). Pilih arti bahasa Indonesia yang benar.",
        questions: [
          { word: "CHEAP", opts: ["Mahal", "Murah", "Segar"], answer: 1 },
          { word: "TOMORROW", opts: ["Kemarin", "Hari ini", "Besok"], answer: 2 },
          { word: "SELLER", opts: ["Pembeli", "Penjual", "Pekerja"], answer: 1 },
          { word: "STRAIGHT", opts: ["Lurus", "Kanan", "Kiri"], answer: 0 },
          { word: "ALWAYS", opts: ["Kadang-kadang", "Selalu", "Tidak pernah"], answer: 1 }
        ]
      },
      {
        type: "fill_bank",
        q_eng: "SECTION A: Vocabulary (Part 3). Fill in the blank.",
        q_ind: "BAGIAN A: Kosakata (Bagian 3). Isi titik-titik pada kalimat.",
        words: ["clean", "buy", "expensive", "work", "need"],
        sentences: [
          { text: "I want to ___ 1kg of onions.", answer: "buy" },
          { text: "This bag is Rp 1.000.000! It is very ___.", answer: "expensive" },
          { text: "His farm is very big and ___.", answer: "clean" },
          { text: "I go to ___ at 06:00 every morning.", answer: "work" },
          { text: "Excuse me, I ___ help.", answer: "need" }
        ]
      },
      {
        type: "word_text_seq",
        randomize: true,
        q_eng: "SECTION B: Speaking (Part 1). Choose the CORRECT expression.",
        q_ind: "BAGIAN B: Berbicara (Bagian 1). Pilih ungkapan yang BENAR.",
        questions: [
          { word: "You meet someone for the first time.", opts: ["Goodbye!", "Nice to meet you!", "How much is it?"], answer: 1 },
          { word: "You want to know the price of tomatoes.", opts: ["Where is it?", "How much is it?", "I am fine."], answer: 1 },
          { word: "Someone asks: 'How are you?'", opts: ["I am fine, thank you.", "My name is Budi.", "I don't understand."], answer: 0 },
          { word: "You don't understand what someone said.", opts: ["Thank you.", "Go straight.", "Can you repeat that?"], answer: 2 },
          { word: "Someone asks: 'Where is the market?'", opts: ["It is Rp 10.000.", "Go straight and turn left.", "I wake up at 05:00."], answer: 1 }
        ]
      },
      {
        type: "fill_bank",
        q_eng: "SECTION B: Speaking (Part 2). Complete the dialogue.",
        q_ind: "BAGIAN B: Berbicara (Bagian 2). Lengkapi percakapan.",
        words: ["Excuse", "job", "welcome", "much", "time"],
        sentences: [
          { text: "A: ___ me, where is the clinic?", answer: "Excuse" },
          { text: "B: Thank you! A: You are ___.", answer: "welcome" },
          { text: "A: What is your ___? B: I am a farmer.", answer: "job" },
          { text: "A: How ___ is this milk? B: It is Rp 12.000.", answer: "much" },
          { text: "A: What ___ do you wake up? B: At 05:00.", answer: "time" }
        ]
      },
      {
        type: "sent_build",
        q_eng: "SECTION B: Speaking (Part 3). Arrange the scrambled lines.",
        q_ind: "BAGIAN B: Berbicara (Bagian 3). Susun baris acak menjadi dialog yang benar.",
        sentences: [
          { words: ["I am fine, thank you!", "Hello! How are you?", "Good morning!"], answer: ["Good morning!", "Hello! How are you?", "I am fine, thank you!"] },
          { words: ["Excuse me, how much is this?", "Here is Rp 20.000.", "It is Rp 20.000."], answer: ["Excuse me, how much is this?", "It is Rp 20.000.", "Here is Rp 20.000."] },
          { words: ["Thank you!", "Go straight, then turn right.", "Where is the shop?"], answer: ["Where is the shop?", "Go straight, then turn right.", "Thank you!"] },
          { words: ["Nice to meet you, Budi.", "Hello! My name is Budi.", "My name is Siti. Nice to meet you!"], answer: ["Hello! My name is Budi.", "My name is Siti. Nice to meet you!", "Nice to meet you, Budi."] },
          { words: ["I am a seller. And you?", "I am a factory worker.", "What is your job?"], answer: ["What is your job?", "I am a seller. And you?", "I am a factory worker."] }
        ]
      },
      {
        type: "story_read",
        q_eng: "SECTION C: Reading. Read the text and answer the questions.",
        q_ind: "BAGIAN C: Membaca. Baca teks dan jawab pertanyaan.",
        story: "<div style='padding:15px; border:2px solid var(--primary); background:#fff; font-family:sans-serif; line-height:1.6;'><h2 style='text-align:center; margin-top:0;'>BUDI'S FARM</h2><p><strong>Open:</strong> Monday to Saturday (06:00 - 15:00)<br><strong style='color:red;'>Closed on Sunday</strong></p><hr><p>Budi is a <span style='background:yellow; padding:0 4px; font-weight:bold;'>hardworking</span> farmer. Every morning, he goes to his farm at 06:00. He grows <span style='background:yellow; padding:0 4px; font-weight:bold;'>fresh</span> tomatoes and chilies. Many people visit his farm to <span style='background:yellow; padding:0 4px; font-weight:bold;'>buy</span> <span style='background:yellow; padding:0 4px; font-weight:bold;'>cheap</span> vegetables. A kilogram of tomatoes is only Rp 10.000. Budi is very <span style='background:yellow; padding:0 4px; font-weight:bold;'>happy</span> when his vegetables are sold out.</p></div>",
        mcq: [
          { q: "1. Is the farm open on Sunday?", opts: ["Yes", "No", "I don't know"], answer: 1 },
          { q: "2. What time does the farm close?", opts: ["06:00", "15:00", "Saturday"], answer: 1 },
          { q: "3. What does Budi grow?", opts: ["Tomatoes and chilies", "Apples and oranges", "Onions and garlic"], answer: 0 },
          { q: "4. Why do people visit his farm?", opts: ["To buy cheap vegetables", "To sleep", "To meet his family"], answer: 0 },
          { q: "5. How much is 1kg of tomatoes?", opts: ["Rp 10.000", "Rp 15.000", "Rp 20.000"], answer: 0 },
          { q: "6. What does the highlighted word 'hardworking' mean?", opts: ["Malas", "Pekerja keras", "Kaya"], answer: 1 },
          { q: "7. What does the highlighted word 'fresh' mean?", opts: ["Segar", "Busuk", "Mahal"], answer: 0 },
          { q: "8. What does the highlighted word 'buy' mean?", opts: ["Menjual", "Membeli", "Membuat"], answer: 1 },
          { q: "9. What does the highlighted word 'cheap' mean?", opts: ["Mahal", "Murah", "Besar"], answer: 1 },
          { q: "10. What does the highlighted word 'happy' mean?", opts: ["Sedih", "Marah", "Senang"], answer: 2 }
        ]
      }
    ]
  }
});

// ============================================================================
// STATE & APP LOGIC
// ============================================================================
let state = { unlockedStep: 0, scores: {} };
try { const s = localStorage.getItem('paketC_state'); if (s) state = JSON.parse(s); } catch(e) {}
function saveState() { localStorage.setItem('paketC_state', JSON.stringify(state)); }

const app = document.getElementById('app');
const btnBack = document.getElementById('btn-back');
const btnNext = document.getElementById('btn-next');

let exerciseStatus = [];
let exerciseScore = [];
