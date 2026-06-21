let currentStep = -2; // -2 = map, -1 = home, >=0 = step
let seqState = {};
let dndState = {};
let fbankState = {};
let sbState = {};
let memState = {};
let csortState = {};
let speedState = {};
let vfState = {};

function handleFbank(exIdx, word, btn) {
  const st = stepMap[currentStep].stepData.exercises[exIdx];
  const blank = document.getElementById(`fb-${exIdx}`);
  blank.innerText = word;
  fbankState[exIdx] = word;
  btn.parentNode.querySelectorAll('.fill-opt').forEach(b => b.style.opacity = '0.5');
  btn.style.opacity = '1';
  document.getElementById(`fbank-check-${exIdx}`).style.display = 'block';
}

function checkFbank(exIdx) {
  const st = stepMap[currentStep].stepData.exercises[exIdx];
  const ans = fbankState[exIdx];
  const correct = (ans === st.sentence.split('___')[0].split(' ').pop() || ans === st.answer);
  
  if (correct) {
    exerciseStatus[exIdx] = true;
    document.getElementById(`fbank-check-${exIdx}`).innerText = "Correct! ✅";
    document.getElementById(`fbank-check-${exIdx}`).style.background = "var(--success)";
  } else {
    document.getElementById(`fbank-check-${exIdx}`).innerText = "Try again! ❌";
    document.getElementById(`fbank-check-${exIdx}`).style.background = "var(--error)";
  }
}

function fbankMulti(exIdx) {
  const st = stepMap[currentStep].stepData.exercises[exIdx];
  let correctCount = 0;
  st.sentences.forEach((s, i) => {
    if (fbankState[`${exIdx}-${i}`] === s.answer) correctCount++;
  });
  document.getElementById(`fbank-check-${exIdx}`).style.display = 'none';
  document.getElementById(`fbank-score-${exIdx}`).innerHTML = `Score: ${correctCount} out of ${st.sentences.length}`;
  document.getElementById(`fbank-score-${exIdx}`).style.display = 'block';
  showExFeedback(exIdx, true, correctCount === st.sentences.length ? 'Sempurna!' : 'Periksa jawaban yang benar.');
}

function showNumDisp(blockIdx, arrIdx) {
  const n = window.curNumData[arrIdx];
  document.getElementById(`ndw-${blockIdx}`).innerText = n.w.toUpperCase();
  document.getElementById(`ndp-${blockIdx}`).innerText = n.p;
}

function handleSeq(exIdx, qIdx, optIdx, correctIdx, btn) {
  const st = stepMap[currentStep].stepData.exercises[exIdx];
  const isCorrect = optIdx === correctIdx;
  if (isCorrect) seqState[exIdx].score++;
  
  btn.style.background = isCorrect ? 'var(--success)' : 'var(--error)';
  
  setTimeout(() => {
    document.getElementById(`seq-${exIdx}-${qIdx}`).style.display = 'none';
    if (qIdx + 1 < st.questions.length) {
      document.getElementById(`seq-${exIdx}-${qIdx + 1}`).style.display = 'block';
      seqState[exIdx].cur++;
    } else {
      const scoreDiv = document.getElementById(`seq-score-${exIdx}`);
      scoreDiv.style.display = 'block';
      scoreDiv.innerHTML = `Final Score: ${seqState[exIdx].score} / ${seqState[exIdx].max}`;
      exerciseStatus[exIdx] = true;
      showExFeedback(exIdx, true, seqState[exIdx].score === seqState[exIdx].max ? 'Sempurna!' : 'Bagus, coba lagi nanti.');
    }
  }, 500);
}

function renderHome() {
  currentStep = -1;
  document.getElementById('prog-text').innerText = 'Home';
  document.getElementById('prog-bar').style.width = '0%';

  app.innerHTML = `
    <div class="card" style="text-align:center; padding:30px 20px;">
      
      <div class="hero-4d">
        <div class="hero-content">
          <img src="classroom_hero.png" class="hero-graphic-4d" alt="Classroom Learning" onerror="this.src='https://via.placeholder.com/200?text=Hero'">
          <h1 class="hero-title-4d">English Communication<br>Skills</h1>
          <div class="hero-subtitle-4d">Interactive E-Learning Module</div>
        </div>
        <div class="particle p1"></div>
        <div class="particle p2"></div>
        <div class="particle p3"></div>
        <div class="particle p4"></div>
      </div>
      
      <div style="background:var(--primary-light); padding:16px; border-radius:var(--r-md); margin-bottom:24px; text-align:left;">
        <div class="instr-eng" style="color:var(--primary-dark);">Welcome! This module will help you learn English for daily life. You will learn Vocabulary, Speaking, and Reading step by step.</div>
        <div class="instr-ind">Selamat datang! Modul ini akan membantu Anda belajar bahasa Inggris untuk kehidupan sehari-hari. Anda akan belajar Kosakata, Berbicara, dan Membaca selangkah demi selangkah.</div>
      </div>

      <div style="display:flex; flex-direction:column; gap:12px; margin-bottom:24px;">
        <div style="display:flex; align-items:center; background:var(--bg); padding:12px; border-radius:var(--r-sm); border:1px solid var(--border); text-align:left;">
          <div style="font-size:1.5rem; margin-right:12px;">📖</div><div style="font-weight:700;">Unit 1: Vocabulary</div>
        </div>
        <div style="display:flex; align-items:center; background:var(--bg); padding:12px; border-radius:var(--r-sm); border:1px solid var(--border); text-align:left;">
          <div style="font-size:1.5rem; margin-right:12px;">💬</div><div style="font-weight:700;">Unit 2: Speaking</div>
        </div>
        <div style="display:flex; align-items:center; background:var(--bg); padding:12px; border-radius:var(--r-sm); border:1px solid var(--border); text-align:left;">
          <div style="font-size:1.5rem; margin-right:12px;">📰</div><div style="font-weight:700;">Unit 3: Reading</div>
        </div>
      </div>

      <button class="btn btn-primary" style="width:100%; justify-content:center; padding:16px; font-size:1.1rem;" onclick="startStep(state.unlockedStep)">START LEARNING</button>
      <button class="btn btn-outline" style="width:100%; justify-content:center; margin-top:10px;" onclick="renderMap()">View Curriculum Map</button>

      <div style="margin-top:20px; font-size:0.85rem; color:var(--text-sub);">
        <div style="font-weight:600;">No account needed. Learn anytime, anywhere.</div>
        <div style="font-style:italic;">Tidak perlu akun. Belajar kapan saja, di mana saja.</div>
      </div>
    </div>
  `;
  btnBack.style.visibility = 'hidden';
  btnNext.style.visibility = 'hidden';
  window.scrollTo(0,0);
}

function renderMap() {
  currentStep = -2;
  document.getElementById('prog-text').innerText = 'Curriculum Map';
  document.getElementById('prog-bar').style.width = '0%';
  
  let html = `<div style="text-align:center; margin-bottom:24px;"><h1>Curriculum Map</h1></div>`;

  let globalIdx = 0;
  curriculum.forEach((u) => {
    let completedInUnit = 0;
    let sessHtml = `<div class="session-list">`;
    u.sessions.forEach((s) => {
      const isUnlocked = globalIdx <= state.unlockedStep;
      const isCompleted = globalIdx < state.unlockedStep;
      if (isCompleted) completedInUnit++;
      
      const icon = isCompleted ? '✅' : (isUnlocked ? '📖' : '🔒');
      const cls = isCompleted ? 'completed' : (isUnlocked ? '' : 'locked');
      sessHtml += `<button class="sess-btn ${cls}" ${isUnlocked ? `onclick="startStep(${globalIdx})"` : 'disabled'}>
        <div class="sess-icon">${icon}</div><div>${s.title}</div></button>`;
      globalIdx++;
    });

    const isQuizUnlocked = globalIdx <= state.unlockedStep;
    const isQuizCompleted = globalIdx < state.unlockedStep;
    if (isQuizCompleted) completedInUnit++;
    sessHtml += `<button class="sess-btn ${isQuizCompleted?'completed':(isQuizUnlocked?'':'locked')}" style="background:var(--accent-light);border-color:var(--accent);" ${isQuizUnlocked ? `onclick="startStep(${globalIdx})"` : 'disabled'}>
      <div class="sess-icon">🏆</div><div>${u.quiz.title}</div></button></div>`;
    globalIdx++;

    html += `<div class="unit-box"><div class="unit-hdr"><div class="unit-title">${u.title}</div><div class="unit-prog">${completedInUnit}/9</div></div>${sessHtml}</div>`;
  });

  const isFinalUnlocked = globalIdx <= state.unlockedStep;
  html += `<div class="unit-box" style="border-color:var(--error); border-width:3px;"><div class="unit-hdr" style="background:var(--error-bg);"><div class="unit-title" style="color:var(--error);">End-of-Semester Final Test</div></div><div class="session-list"><button class="sess-btn ${isFinalUnlocked?'':'locked'}" ${isFinalUnlocked ? `onclick="startStep(${globalIdx})"` : 'disabled'}><div class="sess-icon">🎓</div><div>Start Final Test</div></button></div></div>`;

  app.innerHTML = html;
  btnBack.style.visibility = 'visible';
  btnBack.innerText = '← Home';
  btnBack.onclick = renderHome;
  btnNext.style.visibility = 'hidden';
  window.scrollTo(0,0);
}

function startStep(idx) {
  currentStep = idx;
  const step = stepMap[idx];
  
  if (step.stepData && step.stepData.exercises) {
    step.stepData.exercises.forEach(ex => {
      if (ex.randomize && ex.questions) {
        ex.questions.sort(() => Math.random() - 0.5);
      }
    });
  }
  
  exerciseStatus = step.stepData.exercises.map(() => false);
  exerciseScore = step.stepData.exercises.map(() => 0);
  seqState = {}; dndState = {}; fbankState = {}; sbState = {};
  memState = {}; csortState = {}; speedState = {}; vfState = {};
  renderCurrentStep();
}

function renderCurrentStep() {
  const step = stepMap[currentStep];
  const pct = Math.round(((currentStep) / stepMap.length) * 100);
  document.getElementById('prog-text').innerText = step.isQuiz ? 'Quiz' : step.stepData.title;
  document.getElementById('prog-bar').style.width = pct + '%';

  let html = `<div class="card"><h2>${step.stepData.title}</h2>`;

  if (step.stepData.explanation) {
    html += `<div style="background:var(--primary-light); padding:16px; border-radius:var(--r-sm); margin-bottom:20px;">
      <div class="instr-eng" style="color:var(--primary-dark);">${step.stepData.explanation.eng}</div>
      <div class="instr-ind">${step.stepData.explanation.ind}</div></div>`;
  }

  if (step.stepData.blocks) {
    step.stepData.blocks.forEach((blk, bi) => {
      if (blk.type === 'warmup_blanks') {
        html += `<div class="wu-box">
          <div class="instr-eng">${blk.text_eng}</div><div class="instr-ind">${blk.text_ind}</div>
          <img src="${blk.image}" class="wu-img">
          <div>
            ${blk.blanks.map((b,i) => `<div class="wu-item">${b.ind} = <div class="wu-blank" id="wub-${bi}-${i}" onclick="this.innerHTML='${b.eng}'; this.classList.add('revealed')">?</div></div>`).join('')}
          </div>
        </div>`;
      } else if (blk.type === 'flashcards') {
        html += `<div class="card" style="margin-bottom:24px;">
          <div class="instr-eng">${blk.text_eng}</div><div class="instr-ind" style="margin-bottom:20px;">${blk.text_ind}</div>
          <div class="fc-grid">
            ${blk.cards.map(c => `
              <div class="fc" onclick="this.classList.toggle('flipped')">
                <div class="fc-inner">
                  <div class="fc-front"><div class="fc-icon">${c.icon}</div><div class="fc-text">${c.ind}</div></div>
                  <div class="fc-back"><div class="fc-text">${c.eng}</div><div class="fc-phon">${c.phon}</div></div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>`;
      } else if (blk.type === 'num_grid') {
        window.curNumData = blk.numbers;
        html += `<div class="card" style="margin-bottom:24px;">
          <div class="instr-eng">${blk.text_eng}</div><div class="instr-ind" style="margin-bottom:20px;">${blk.text_ind}</div>
          <div class="num-disp" id="ndisp-${bi}">
            <div class="num-disp-word" id="ndw-${bi}">?</div>
            <div class="num-disp-phon" id="ndp-${bi}">Tap a number</div>
          </div>
          <div class="num-grid">
            ${blk.numbers.map((n, i) => `<button class="num-btn" onclick="showNumDisp(${bi}, ${i})">${n.n}</button>`).join('')}
          </div>
        </div>`;
      }
    });
  }

  // Render all exercises
  step.stepData.exercises.forEach((ex, i) => {
    html += `<div class="ex-card" id="ex-${i}">`;
    html += `<div class="instr-eng">${ex.q_eng}</div><div class="instr-ind">${ex.q_ind}</div>`;
    
    if (ex.type === 'mcq') {
      html += `<div class="mcq-opts">`;
      ex.opts.forEach((opt, oi) => {
        html += `<button class="mcq-opt" onclick="handleMCQ(${i}, ${oi}, this)">${opt}</button>`;
      });
      html += `</div>`;
    } 
    else if (ex.type === 'fill') {
      html += `<div class="fill-sentence">${ex.sentence.replace('___', '<span class="fill-blank" id="fb-${i}">___</span>')}</div>`;
      html += `<div class="fill-opts">`;
      ex.opts.forEach(opt => {
        html += `<button class="fill-opt" onclick="handleFill(${i}, '${opt}', this)">${opt}</button>`;
      });
      html += `</div>`;
    }
    else if (ex.type === 'match') {
      html += `<div class="match-grid"><div class="match-col" id="ml-${i}"></div><div class="match-col" id="mr-${i}"></div></div>`;
    }
    else if (ex.type === 'pic_mcq_seq' || ex.type === 'word_pic_seq' || ex.type === 'word_text_seq') {
      html += `<div id="seq-wrap-${i}">`;
      ex.questions.forEach((q, qi) => {
        html += `<div id="seq-${i}-${qi}" style="display:${qi===0?'block':'none'}; text-align:center;">`;
        if (ex.type === 'pic_mcq_seq') {
          html += `<div style="font-size:4rem; margin:10px 0 20px;">${q.icon}</div>`;
          html += `<div class="mcq-opts">`;
          q.opts.forEach((o, oi) => {
            html += `<button class="mcq-opt" style="text-align:center; font-size:1.1rem;" onclick="handleSeq(${i}, ${qi}, ${oi}, ${q.answer}, this)">${o}</button>`;
          });
          html += `</div>`;
        } else if (ex.type === 'word_pic_seq') {
          html += `<div style="font-size:2rem; font-weight:800; margin:10px 0 20px; letter-spacing:2px; color:var(--primary-dark);">${q.word}</div>`;
          html += `<div class="pic-opts">`;
          q.opts.forEach((o, oi) => {
            html += `<button class="pic-opt" onclick="handleSeq(${i}, ${qi}, ${oi}, ${q.answer}, this)">${o}</button>`;
          });
          html += `</div>`;
        } else if (ex.type === 'word_text_seq') {
          html += `<div style="font-size:2rem; font-weight:800; margin:10px 0 20px; letter-spacing:2px; color:var(--primary-dark);">${q.word}</div>`;
          html += `<div class="mcq-opts">`;
          q.opts.forEach((o, oi) => {
            html += `<button class="mcq-opt" style="text-align:center; font-size:1.1rem;" onclick="handleSeq(${i}, ${qi}, ${oi}, ${q.answer}, this)">${o}</button>`;
          });
          html += `</div>`;
        }
        html += `</div>`;
      });
      html += `<div id="seq-score-${i}" class="score-txt" style="display:none;"></div>`;
      html += `</div>`;
      seqState[i] = { cur: 0, score: 0, max: ex.questions.length };
    }
    else if (ex.type === 'dnd_pic') {
      html += `<div id="dnd-wrap-${i}">`;
      html += `<div class="dnd-bank" id="dnd-bank-${i}">
        ${ex.words.map(w => `<button class="dnd-word" id="dnd-w-${i}-${w}" onclick="selectDnd(${i}, '${w}')">${w}</button>`).join('')}
      </div>`;
      html += `<div class="dnd-grid" id="dnd-grid-${i}">
        ${ex.items.map((it, idx) => `
          <div class="dnd-item">
            <div class="dnd-icon">${it.icon}</div>
            <div class="dnd-slot" id="dnd-s-${i}-${idx}" onclick="placeDnd(${i}, ${idx})"></div>
            <div class="dnd-ans" id="dnd-ans-${i}-${idx}">Ans: ${it.answer}</div>
          </div>
        `).join('')}
      </div>`;
      html += `<button class="btn btn-primary" id="dnd-check-${i}" style="width:100%; justify-content:center; margin-top:20px; display:none;" onclick="checkDnd(${i})">Check Answers (Periksa)</button>`;
      html += `<div id="dnd-score-${i}" class="score-txt" style="display:none;"></div>`;
      html += `</div>`;
      dndState[i] = { words: [...ex.words], slots: new Array(ex.items.length).fill(null), selWord: null, ex };
    }
    else if (ex.type === 'fill_bank') {
      html += `<div id="fbank-wrap-${i}" class="fbank-wrap">`;
      html += `<div class="fbank-bank" id="fbank-bank-${i}">
        ${ex.words.map(w => `<button class="fbank-word" id="fb-w-${i}-${w}" onclick="selectFbank(${i}, '${w}')">${w}</button>`).join('')}
      </div>`;
      html += `<div id="fbank-sents-${i}">
        ${ex.sentences.map((s, idx) => `
          <div class="fbank-sent">
            ${s.text.replace('___', `<span class="fbank-slot" id="fb-s-${i}-${idx}" onclick="placeFbank(${i}, ${idx})"></span>`)}
            <div class="dnd-ans" id="fbank-ans-${i}-${idx}">Ans: ${s.answer}</div>
          </div>
        `).join('')}
      </div>`;
      html += `<button class="btn btn-primary" id="fbank-check-${i}" style="width:100%; justify-content:center; margin-top:20px; display:none;" onclick="checkFbank(${i})">Check Answers (Periksa)</button>`;
      html += `<div id="fbank-score-${i}" class="score-txt" style="display:none;"></div>`;
      html += `</div>`;
      fbankState[i] = { words: [...ex.words], slots: new Array(ex.sentences.length).fill(null), selWord: null, ex };
    }
    else if (ex.type === 'sent_build') {
      // Sentence Builder — show sentences one at a time
      html += `<div id="sb-wrap-${i}">`;
      ex.sentences.forEach((sent, si) => {
        const shuffled = [...sent.words].sort(() => Math.random() - 0.5);
        html += `<div id="sb-${i}-${si}" style="display:${si===0?'block':'none'}">`;
        html += `<div style="font-size:0.85rem; color:var(--text-sub); margin-bottom:8px; font-weight:600;">Dialogue ${si+1} of ${ex.sentences.length}</div>`;
        html += `<div style="font-style:italic; color:var(--text-sub); font-size:0.85rem; margin-bottom:12px;">Tap each line in the correct order:</div>`;
        html += `<div id="sb-bank-${i}-${si}" style="display:flex; flex-direction:column; gap:8px; margin-bottom:12px;">`;
        shuffled.forEach((w, wi) => {
          const origIdx = sent.words.indexOf(w);
          html += `<button class="mcq-opt" id="sb-t-${i}-${si}-${wi}" onclick="tapSbTile(${i}, ${si}, ${wi}, ${JSON.stringify(w)})" style="text-align:left; font-size:0.95rem; padding:10px 14px;">${w}</button>`;
        });
        html += `</div>`;
        html += `<div id="sb-ans-${i}-${si}" style="min-height:40px; border:2px dashed var(--border); border-radius:var(--r-sm); padding:8px; margin-bottom:8px; display:flex; flex-direction:column; gap:6px; font-size:0.9rem; color:var(--primary-dark); font-weight:600;"></div>`;
        html += `<button onclick="resetSb(${i}, ${si})" style="font-size:0.8rem; color:var(--text-sub); background:none; border:1px solid var(--border); border-radius:4px; padding:4px 8px; cursor:pointer; margin-bottom:8px;">↺ Reset</button>`;
        html += `</div>`;
      });
      html += `<div id="sb-score-${i}" class="score-txt" style="display:none;"></div>`;
      html += `</div>`;
      sbState[i] = { sents: ex.sentences.map(() => []), score: 0, max: ex.sentences.length };
    }
    else if (ex.type === 'mem_game') {
      html += `<div id="mem-wrap-${i}"><div class="mem-grid" id="mem-grid-${i}">`;
      let allCards = [];
      ex.pairs.forEach((p, idx) => {
        allCards.push({ id: idx, t: p.w, type: 'w' });
        allCards.push({ id: idx, t: p.i, type: 'i' });
      });
      allCards.sort(() => Math.random() - 0.5);
      memState[i] = { cards: allCards, open: [], matched: 0, ex };
      allCards.forEach((c, ci) => {
        html += `<button class="mem-card" id="mem-c-${i}-${ci}" onclick="tapMem(${i}, ${ci})">
          <div class="mem-card-inner">
            <div class="mem-front">❓</div>
            <div class="mem-back">${c.t}</div>
          </div>
        </button>`;
      });
      html += `</div>`;
      html += `<div id="mem-score-${i}" class="score-txt" style="display:none;"></div></div>`;
    }
    else if (ex.type === 'cat_sort') {
      html += `<div id="csort-wrap-${i}">`;
      let words = [...ex.words].sort(() => Math.random() - 0.5);
      csortState[i] = { words, selIdx: null, placed: 0, max: words.length, cats: ex.cats.map(() => []) };
      html += `<div class="csort-bank" id="csort-bank-${i}">
        ${words.map((w, wi) => `<button class="csort-word" id="csort-w-${i}-${wi}" onclick="selectCsort(${i}, ${wi})">${w.w}</button>`).join('')}
      </div>`;
      html += `<div class="csort-grid">
        ${ex.cats.map((cat, ci) => `<div class="csort-box" onclick="placeCsort(${i}, ${ci})">
          <div class="csort-box-title">${cat}</div>
          <div class="csort-items" id="csort-items-${i}-${ci}"></div>
        </div>`).join('')}
      </div>`;
      html += `<button class="btn btn-primary" id="csort-check-${i}" style="width:100%; justify-content:center; margin-top:20px; display:none;" onclick="checkCsort(${i})">Check Answers (Periksa)</button>`;
      html += `<div id="csort-score-${i}" class="score-txt" style="display:none;"></div></div>`;
    }
    else if (ex.type === 'story_read') {
      html += `<div id="story-wrap-${i}">
        <div class="story-box">${ex.story}</div>
        <div id="story-mcq-${i}">`;
      ex.mcq.forEach((q, qi) => {
        html += `<div id="smcq-${i}-${qi}" style="display:${qi===0?'block':'none'}; margin-top:20px;">
          <div class="instr-eng" style="font-weight:700;">Question ${qi+1}: ${q.q}</div>
          <div class="mcq-opts">`;
        q.opts.forEach((o, oi) => {
          html += `<button class="mcq-opt" style="text-align:left;" onclick="handleStoryMcq(${i}, ${qi}, ${oi}, ${q.answer}, this)">${o}</button>`;
        });
        html += `</div></div>`;
      });
      html += `</div><div id="story-score-${i}" class="score-txt" style="display:none;"></div></div>`;
      seqState[i] = { cur: 0, score: 0, max: ex.mcq.length };
    }
    else if (ex.type === 'speed_round') {
      html += `<div id="speed-wrap-${i}">
        <div class="speed-wrap">
          <div class="speed-timer-bar"><div class="speed-timer-fill" id="speed-fill-${i}"></div></div>
          <div id="speed-icon-${i}" class="speed-icon">⏱️</div>
          <div class="speed-opts" id="speed-opts-${i}">
            <button class="btn btn-primary" onclick="startSpeedRound(${i})" style="grid-column: span 2; justify-content:center;">START SPEED ROUND! (Mulai)</button>
          </div>
        </div>
        <div id="speed-score-${i}" class="score-txt" style="display:none;"></div>
      </div>`;
      speedState[i] = { cur: 0, score: 0, max: ex.questions.length, timer: null };
    }

    else if (ex.type === 'vocab_find') {
      html += `<div id="vf-wrap-${i}">
        <img src="${ex.image}" style="width:100%; border-radius:10px; margin-bottom:16px;">
        <div class="vf-status"><span>Words Found: <span id="vf-count-${i}">0</span> / ${ex.targets.length}</span></div>
        <div class="vf-box">${ex.text}</div>
        <div id="vf-score-${i}" class="score-txt" style="display:none;"></div>
      </div>`;
      vfState[i] = { found: 0, max: ex.targets.length };
    }
    else if (ex.type === 'dropdown_build') {
      html += `<div id="ddb-wrap-${i}" class="ddb-wrap">
        <div class="ddb-sent">`;
      ex.fields.forEach((f, fi) => {
        if (f.type === 'text') {
          html += `${f.label} <input type="text" class="ddb-sel" id="ddb-f-${i}-${fi}" placeholder="${f.ph}" oninput="checkDdbActive(${i})">`;
        } else if (f.type === 'select') {
          html += `${f.label} <select class="ddb-sel" id="ddb-f-${i}-${fi}" onchange="checkDdbActive(${i})">
            <option value="" disabled selected>...</option>
            ${f.opts.map(o => `<option value="${o}">${o}</option>`).join('')}
          </select>`;
        }
      });
      html += `</div>
        <button class="btn btn-primary" id="ddb-check-${i}" style="width:100%; justify-content:center; display:none;" onclick="submitDdb(${i})">Finish Sentence (Selesaikan)</button>
        <div class="ddb-res" id="ddb-res-${i}"></div>
      </div>`;
    }
    else if (ex.type === 'intro_card_builder') {
      html += `<div id="icb-wrap-${i}" class="ddb-wrap" style="background:var(--surface); padding:20px; border-radius:var(--r-md); border:2px solid var(--primary);">`;
      ex.fields.forEach((section, si) => {
        html += `<div style="background:var(--primary-light); border-radius:var(--r-sm); padding:12px 16px; margin-bottom:16px;">`;
        html += `<div style="font-weight:800; color:var(--primary-dark); font-size:1rem; margin-bottom:12px;">${section.section}</div>`;
        html += `<div style="font-size:1.1rem; line-height:2.2;">`;
        section.items.forEach((f, fi) => {
          const fieldId = `icb-f-${i}-${si}-${fi}`;
          if (f.type === 'text') {
            html += `${f.label} <input type="text" class="ddb-sel" id="${fieldId}" placeholder="${f.ph}" oninput="checkIcbActive(${i})"> `;
          } else if (f.type === 'select') {
            html += `${f.label} <select class="ddb-sel" id="${fieldId}" onchange="checkIcbActive(${i})">
              <option value="" disabled selected>...</option>
              ${f.opts.map(o => `<option value="${o}">${o}</option>`).join('')}
            </select> `;
          }
        });
        html += `</div></div>`;
      });
      html += `<button class="btn btn-primary" id="icb-check-${i}" style="width:100%; justify-content:center; display:none;" onclick="submitIcb(${i})">Build My Introduction Card (Buat Kartu) 🎴</button>`;
      html += `<div id="icb-res-${i}" style="display:none; margin-top:16px;"></div>`;
      html += `</div>`;
    }

    html += `<button class="btn btn-outline" style="padding:4px 12px; font-size:0.8rem; margin-top:12px; border-radius:4px;" onclick="showHint(${i})">💡 Hint (Petunjuk)</button>`;
    html += `<div id="hint-${i}" style="display:none; font-size:0.85rem; color:var(--primary-dark); margin-top:8px; margin-bottom:12px; font-style:italic; background:var(--primary-light); padding:8px; border-radius:4px; border-left:3px solid var(--primary);"></div>`;
    html += `<div id="fb-box-${i}" class="fb-box"></div></div>`;
  });

  if (step.stepData.summary) {

    let sumHtml = `<div id="sum-block" class="card" style="display:none; text-align:center; background:var(--primary-light); border:2px solid var(--primary);">
      <h2 style="color:var(--primary-dark);">Summary</h2>
      <div class="instr-eng">${step.stepData.summary.eng}</div>
      <div class="instr-ind">${step.stepData.summary.ind}</div>`;
      
    if (step.stepData.summary.cheat_sheet) {
      sumHtml += `
      <div class="cs-box">
        <div class="cs-title">Unit 1 - Session 3: Mini Cheat Sheet</div>
        <div class="cs-grid">
          <div>
            <div class="cs-col-title">Numbers 1-20</div>
            <div style="column-count: 2; column-gap: 16px;">
              ${window.curNumData ? window.curNumData.map(n => `<div class="cs-item"><span>${n.n}</span><span>${n.w}</span></div>`).join('') : ''}
            </div>
          </div>
          <div>
            <div class="cs-col-title">Time Words</div>
            <div class="cs-item"><span>morning</span><span>pagi</span></div>
            <div class="cs-item"><span>afternoon</span><span>siang</span></div>
            <div class="cs-item"><span>evening</span><span>sore</span></div>
            <div class="cs-item"><span>night</span><span>malam</span></div>
            <div class="cs-item"><span>today</span><span>hari ini</span></div>
            <div class="cs-item"><span>tomorrow</span><span>besok</span></div>
            <div class="cs-item"><span>yesterday</span><span>kemarin</span></div>
            <div class="cs-item"><span>now</span><span>sekarang</span></div>
          </div>
        </div>
      </div>
      <button class="btn btn-secondary" style="margin: 0 auto;" onclick="window.print()">Save / Screenshot this card</button>
      `;
    }

    if (step.stepData.summary.cards && step.stepData.summary.cards.length > 0) {
      sumHtml += `<div style="display:flex; gap:10px; flex-wrap:wrap; justify-content:center; margin-top:20px;">
        ${step.stepData.summary.cards.map(c => `
          <div style="background:var(--surface); padding:8px 16px; border-radius:50px; font-weight:700; border:1px solid var(--border);">
            <span style="font-size:1.5rem; margin-right:8px; vertical-align:middle;">${c.icon}</span><span style="vertical-align:middle;">${c.eng}</span>
          </div>
        `).join('')}
      </div>`;
    }
    sumHtml += `</div>`;
    html += sumHtml;
  }

  html += `</div>`;
  app.innerHTML = html;

  // Init special exercises
  step.stepData.exercises.forEach((ex, i) => {
    if (ex.type === 'match') initMatch(i, ex.pairs);
  });
  
  checkStepCompletion();
  btnBack.style.visibility = 'visible';
  btnBack.onclick = renderMap;
  window.scrollTo(0,0);
}

// Check if all exercises in this step are passed
function checkStepCompletion() {
  const allPassed = exerciseStatus.every(s => s === true);
  if (exerciseStatus.length === 0) { btnNext.style.visibility = 'visible'; btnNext.disabled = false; btnNext.innerText = 'Next (Lanjut) →'; btnNext.onclick = goNextStep; return; }
  
  btnNext.style.visibility = 'visible';
  btnNext.disabled = !allPassed;
  
  let nextText = 'Next Session (Lanjut) →';
  if (allPassed && currentStep + 1 < stepMap.length && stepMap[currentStep + 1].isQuiz) {
    nextText = 'Take the Quiz (Ikuti Kuis) →';
  }
  
  if (stepMap[currentStep].isQuiz) {
    btnNext.innerText = allPassed ? 'Submit Quiz (Kirim Hasil)' : 'Complete all to submit (Selesaikan semua)';
    btnNext.onclick = submitQuiz;
  } else {
    btnNext.innerText = allPassed ? nextText : 'Complete exercises to continue (Selesaikan latihan)';
    btnNext.onclick = goNextStep;
  }

  if (allPassed) {
    const sb = document.getElementById('sum-block');
    if (sb) sb.style.display = 'block';
  }
}

function goNextStep() {
  if (currentStep >= state.unlockedStep) {
    state.unlockedStep = currentStep + 1;
    saveState();
  }
  if (currentStep < stepMap.length - 1) startStep(currentStep + 1);
  else renderMap();
}

function showExFeedback(exIdx, isCorrect, expInd) {
  const fb = document.getElementById(`fb-box-${exIdx}`);
  if (isCorrect) {
    fb.className = 'fb-box ok';
    fb.innerHTML = `<strong>✅ Correct! (Benar!)</strong><div class="fb-ind">${expInd||''}</div>`;
    exerciseStatus[exIdx] = true;
  } else {
    fb.className = 'fb-box err';
    fb.innerHTML = `<strong>❌ Incorrect (Kurang tepat)</strong><div class="fb-ind">💡 <strong>Penjelasan:</strong><br>${expInd||'Coba lagi.'}</div>`;
  }
  checkStepCompletion();
}

// Memory Game
function tapMem(exIdx, ci) {
  if (exerciseStatus[exIdx]) return;
  const st = memState[exIdx];
  const btn = document.getElementById(`mem-c-${exIdx}-${ci}`);
  if (btn.classList.contains('flipped') || st.open.length >= 2) return;
  
  btn.classList.add('flipped');
  st.open.push(ci);
  
  if (st.open.length === 2) {
    const c1 = st.cards[st.open[0]];
    const c2 = st.cards[st.open[1]];
    if (c1.id === c2.id) {
      setTimeout(() => {
        document.getElementById(`mem-c-${exIdx}-${st.open[0]}`).classList.add('matched');
        document.getElementById(`mem-c-${exIdx}-${st.open[1]}`).classList.add('matched');
        st.open = [];
        st.matched++;
        if (st.matched === 8) {
          exerciseStatus[exIdx] = true;
          document.getElementById(`mem-score-${exIdx}`).innerHTML = `Game Complete!`;
          document.getElementById(`mem-score-${exIdx}`).style.display = 'block';
          showExFeedback(exIdx, true, 'Luar biasa! Ingatan yang kuat!');
        }
      }, 500);
    } else {
      setTimeout(() => {
        document.getElementById(`mem-c-${exIdx}-${st.open[0]}`).classList.remove('flipped');
        document.getElementById(`mem-c-${exIdx}-${st.open[1]}`).classList.remove('flipped');
        st.open = [];
      }, 1000);
    }
  }
}

// Category Sort
function selectCsort(exIdx, wi) {
  if (exerciseStatus[exIdx]) return;
  const st = csortState[exIdx];
  const btn = document.getElementById(`csort-w-${exIdx}-${wi}`);
  if (btn.classList.contains('used')) return;
  
  if (st.selIdx !== null) document.getElementById(`csort-w-${exIdx}-${st.selIdx}`).classList.remove('sel');
  if (st.selIdx === wi) { st.selIdx = null; return; }
  
  st.selIdx = wi;
  btn.classList.add('sel');
}
function placeCsort(exIdx, ci) {
  if (exerciseStatus[exIdx]) return;
  const st = csortState[exIdx];
  if (st.selIdx !== null) {
    const wObj = st.words[st.selIdx];
    st.cats[ci].push({ word: wObj.w, catTarget: wObj.c, wi: st.selIdx });
    
    document.getElementById(`csort-w-${exIdx}-${st.selIdx}`).classList.remove('sel');
    document.getElementById(`csort-w-${exIdx}-${st.selIdx}`).classList.add('used');
    st.selIdx = null;
    st.placed++;
    
    renderCsortCats(exIdx);
    
    if (st.placed === st.max) {
      document.getElementById(`csort-check-${exIdx}`).style.display = 'block';
    }
  }
}
function renderCsortCats(exIdx) {
  const st = csortState[exIdx];
  st.cats.forEach((catArr, ci) => {
    document.getElementById(`csort-items-${exIdx}-${ci}`).innerHTML = catArr.map(item => `<div class="csort-item">${item.word}</div>`).join('');
  });
}
function checkCsort(exIdx) {
  const st = csortState[exIdx];
  let correctCount = 0;
  st.cats.forEach((catArr, ci) => {
    let html = '';
    catArr.forEach(item => {
      const isCorrect = item.catTarget === ci;
      if (isCorrect) correctCount++;
      html += `<div class="csort-item" style="background:${isCorrect?'var(--success)':'var(--error)'}; color:white;">${item.word}</div>`;
    });
    document.getElementById(`csort-items-${exIdx}-${ci}`).innerHTML = html;
  });
  
  document.getElementById(`csort-check-${exIdx}`).style.display = 'none';
  document.getElementById(`csort-score-${exIdx}`).innerHTML = `Score: ${correctCount} / ${st.max}`;
  document.getElementById(`csort-score-${exIdx}`).style.display = 'block';
  showExFeedback(exIdx, true, correctCount === st.max ? 'Sempurna!' : 'Periksa kembali kategorinya.');
}

// Story Reading
function handleStoryMcq(exIdx, qIdx, optIdx, correctIdx, btn) {
  const st = seqState[exIdx];
  const container = btn.parentElement;
  Array.from(container.children).forEach(b => b.disabled = true);
  
  if (optIdx === correctIdx) {
    btn.classList.add('correct');
    st.score++;
  } else {
    btn.classList.add('wrong');
    container.children[correctIdx].classList.add('correct');
  }
  
  setTimeout(() => {
    document.getElementById(`smcq-${exIdx}-${qIdx}`).style.display = 'none';
    if (qIdx + 1 < st.max) {
      document.getElementById(`smcq-${exIdx}-${qIdx + 1}`).style.display = 'block';
    } else {
      document.getElementById(`story-score-${exIdx}`).innerHTML = `Reading Comprehension Score: ${st.score} / ${st.max}`;
      document.getElementById(`story-score-${exIdx}`).style.display = 'block';
      exerciseStatus[exIdx] = true;
      showExFeedback(exIdx, true, st.score === st.max ? 'Bagus!' : 'Terus berlatih membaca.');
    }
  }, 1000);
}

// Speed Round
function startSpeedRound(exIdx) {
  document.getElementById(`speed-opts-${exIdx}`).innerHTML = '';
  nextSpeed(exIdx);
}
function nextSpeed(exIdx) {
  const st = speedState[exIdx];
  const ex = stepMap[currentStep].stepData.exercises[exIdx];
  if (st.cur >= st.max) {
    document.getElementById(`speed-icon-${exIdx}`).innerHTML = '🏆';
    document.getElementById(`speed-opts-${exIdx}`).innerHTML = `<div style="grid-column: span 2; font-weight:700;">Complete!</div>`;
    document.getElementById(`speed-fill-${exIdx}`).style.width = '0%';
    document.getElementById(`speed-score-${exIdx}`).innerHTML = `Final Score: ${st.score} / ${st.max}`;
    document.getElementById(`speed-score-${exIdx}`).style.display = 'block';
    exerciseStatus[exIdx] = true;
    showExFeedback(exIdx, true, st.score === st.max ? 'Sangat Cepat!' : 'Kerja bagus!');
    return;
  }
  
  const q = ex.questions[st.cur];
  const iconDiv = document.getElementById(`speed-icon-${exIdx}`);
  iconDiv.innerHTML = q.i;
  
  iconDiv.style.animation = 'none';
  iconDiv.offsetHeight; 
  iconDiv.style.animation = 'fadeIn 0.3s ease';
  
  document.getElementById(`speed-opts-${exIdx}`).innerHTML = q.opts.map((o, oi) => 
    `<button class="mcq-opt" onclick="handleSpeed(${exIdx}, ${oi}, ${q.a}, this)">${o}</button>`
  ).join('');
  
  const fill = document.getElementById(`speed-fill-${exIdx}`);
  fill.style.transition = 'none';
  fill.style.width = '100%';
  fill.style.background = 'var(--accent)';
  fill.offsetHeight;
  fill.style.transition = `width ${ex.time_ms}ms linear`;
  fill.style.width = '0%';
  
  st.timer = setTimeout(() => {
    const container = document.getElementById(`speed-opts-${exIdx}`);
    Array.from(container.children).forEach(b => b.disabled = true);
    container.children[q.a].classList.add('correct');
    setTimeout(() => { st.cur++; nextSpeed(exIdx); }, 1000);
  }, ex.time_ms);
}
function handleSpeed(exIdx, optIdx, answer, btn) {
  const st = speedState[exIdx];
  clearTimeout(st.timer);
  const container = btn.parentElement;
  Array.from(container.children).forEach(b => b.disabled = true);
  
  const fill = document.getElementById(`speed-fill-${exIdx}`);
  fill.style.transition = 'none'; 
  
  if (optIdx === answer) {
    btn.classList.add('correct');
    st.score++;
    fill.style.background = 'var(--success)';
  } else {
    btn.classList.add('wrong');
    container.children[answer].classList.add('correct');
    fill.style.background = 'var(--error)';
  }
  setTimeout(() => { st.cur++; nextSpeed(exIdx); }, 800);
}

// Vocab Find
function tapVf(exIdx, el) {
  if (exerciseStatus[exIdx]) return;
  const st = vfState[exIdx];
  if (el.classList.contains('found')) return;
  
  el.classList.add('found');
  st.found++;
  document.getElementById(`vf-count-${exIdx}`).innerText = st.found;
  
  if (st.found === st.max) {
    exerciseStatus[exIdx] = true;
    document.getElementById(`vf-score-${exIdx}`).innerHTML = `Completed! You found all ${st.max} words.`;
    document.getElementById(`vf-score-${exIdx}`).style.display = 'block';
    showExFeedback(exIdx, true, 'Luar biasa! Pengamatan yang jeli.');
  }
}

function checkIcbActive(exIdx) {
  if (exerciseStatus[exIdx]) return;
  const ex = stepMap[currentStep].stepData.exercises[exIdx];
  let allFilled = true;
  ex.fields.forEach((section, si) => {
    section.items.forEach((f, fi) => {
      const el = document.getElementById(`icb-f-${exIdx}-${si}-${fi}`);
      if (!el || !el.value || el.value.trim() === '') allFilled = false;
    });
  });
  const btn = document.getElementById(`icb-check-${exIdx}`);
  if (btn) { if (allFilled) btn.style.display = 'flex'; else btn.style.display = 'none'; }
}

function submitIcb(exIdx) {
  if (exerciseStatus[exIdx]) return;
  const ex = stepMap[currentStep].stepData.exercises[exIdx];
  
  // Build the card HTML
  let cardParts = [];
  ex.fields.forEach((section, si) => {
    let sectionText = '';
    section.items.forEach((f, fi) => {
      const val = document.getElementById(`icb-f-${exIdx}-${si}-${fi}`).value;
      sectionText += (f.label ? f.label + ' ' : '') + val + ' ';
    });
    cardParts.push({ icon: section.section.split(' ')[0], label: section.section.substring(2).trim(), text: sectionText.trim() });
  });
  
  const cardHtml = `
    <div style="background:linear-gradient(135deg, #E8F5E9 0%, #fff 100%); border:3px solid var(--primary); border-radius:16px; padding:24px; box-shadow:0 8px 20px rgba(76,175,120,0.2);">
      <div style="text-align:center; margin-bottom:16px;">
        <div style="font-size:2.5rem;">🪪</div>
        <div style="font-family:'Nunito',sans-serif; font-weight:800; font-size:1.3rem; color:var(--primary-dark);">My Introduction Card</div>
        <div style="font-size:0.8rem; color:var(--text-sub); font-style:italic;">Kartu Perkenalan Saya</div>
      </div>
      ${cardParts.map(p => `
        <div style="background:white; border-radius:8px; padding:10px 14px; margin-bottom:10px; border-left:4px solid var(--primary);">
          <div style="font-size:0.75rem; font-weight:700; color:var(--primary); text-transform:uppercase; letter-spacing:1px; margin-bottom:4px;">${p.icon} ${p.label}</div>
          <div style="font-size:1rem; color:var(--text-main); font-weight:500;">${p.text}</div>
        </div>
      `).join('')}
      <div style="text-align:center; margin-top:16px; padding:10px; background:var(--accent-light); border-radius:8px;">
        <div style="font-size:0.85rem; font-weight:700; color:var(--accent);">📸 Screenshot this card to save it!</div>
        <div style="font-size:0.8rem; color:var(--text-sub); font-style:italic;">Screenshot kartu ini untuk menyimpannya!</div>
      </div>
    </div>`;
  
  document.getElementById(`icb-check-${exIdx}`).style.display = 'none';
  const res = document.getElementById(`icb-res-${exIdx}`);
  res.innerHTML = cardHtml;
  res.style.display = 'block';
  
  exerciseStatus[exIdx] = true;
  showExFeedback(exIdx, true, 'Kartu perkenalan Anda sudah jadi! Screenshot untuk menyimpan.');
}


// Dropdown Build
function checkDdbActive(exIdx) {
  if (exerciseStatus[exIdx]) return;
  const ex = stepMap[currentStep].stepData.exercises[exIdx];
  let allFilled = true;
  ex.fields.forEach((f, fi) => {
    const val = document.getElementById(`ddb-f-${exIdx}-${fi}`).value;
    if (!val || val.trim() === '') allFilled = false;
  });
  
  const btn = document.getElementById(`ddb-check-${exIdx}`);
  if (allFilled) btn.style.display = 'flex';
  else btn.style.display = 'none';
}

function submitDdb(exIdx) {
  if (exerciseStatus[exIdx]) return;
  const ex = stepMap[currentStep].stepData.exercises[exIdx];
  let fullSentence = '';
  ex.fields.forEach((f, fi) => {
    const val = document.getElementById(`ddb-f-${exIdx}-${fi}`).value;
    if (f.label) fullSentence += f.label + ' ';
    fullSentence += val;
  });
  
  document.getElementById(`ddb-check-${exIdx}`).style.display = 'none';
  const res = document.getElementById(`ddb-res-${exIdx}`);
  res.innerHTML = `<strong>Your Sentence:</strong><br>${fullSentence}`;
  res.style.display = 'block';
  
  exerciseStatus[exIdx] = true;
  showExFeedback(exIdx, true, 'Kalimat yang sangat bagus! Silakan screenshot kalimat ini.');
}

// Handlers
function handleMCQ(exIdx, optIdx, btn) {
  if (exerciseStatus[exIdx]) return;
  const isQuiz = stepMap[currentStep].isQuiz;
  const ex = stepMap[currentStep].stepData.exercises[exIdx];
  const container = btn.parentElement;
  
  if (optIdx === ex.answer) {
    btn.classList.add('correct');
    exerciseScore[exIdx] = 1;
    exerciseStatus[exIdx] = true;
    Array.from(container.children).forEach(b => b.disabled = true);
    if (!isQuiz) showExFeedback(exIdx, true, ex.exp_ind);
  } else {
    btn.classList.add('wrong');
    if (isQuiz) {
      container.children[ex.answer].classList.add('correct');
      exerciseScore[exIdx] = 0;
      exerciseStatus[exIdx] = true;
      Array.from(container.children).forEach(b => b.disabled = true);
    } else {
      showExFeedback(exIdx, false, ex.exp_ind);
      setTimeout(() => { btn.classList.remove('wrong'); document.getElementById(`fb-box-${exIdx}`).className='fb-box'; }, 2000);
    }
  }
  checkStepCompletion();
}

// Sent Build Logic
function tapSbTile(exIdx, sentIdx, wordIdx, word) {
  if (exerciseStatus[exIdx]) return;
  const btn = document.getElementById(`sb-t-${exIdx}-${sentIdx}-${wordIdx}`);
  if (btn.classList.contains('used') || btn.disabled) return;
  
  btn.disabled = true;
  btn.style.opacity = '0.4';
  btn.style.textDecoration = 'line-through';
  sbState[exIdx].sents[sentIdx].push({ word, wi: wordIdx });
  renderSbAns(exIdx, sentIdx);
}

function resetSb(exIdx, sentIdx) {
  if (exerciseStatus[exIdx]) return;
  sbState[exIdx].sents[sentIdx] = [];
  const bank = document.getElementById(`sb-bank-${exIdx}-${sentIdx}`);
  Array.from(bank.children).forEach(b => {
    b.disabled = false;
    b.style.opacity = '1';
    b.style.textDecoration = 'none';
    b.classList.remove('used');
  });
  renderSbAns(exIdx, sentIdx);
}

function renderSbAns(exIdx, sentIdx) {
  const ansDiv = document.getElementById(`sb-ans-${exIdx}-${sentIdx}`);
  const st = sbState[exIdx];
  const entries = st.sents[sentIdx];
  const words = entries.map(e => e.word);
  
  ansDiv.innerHTML = words.length === 0 
    ? `<span style="color:var(--text-sub); font-style:italic; font-size:0.85rem;">Your order will appear here...</span>` 
    : words.map((w, idx) => `<div style="background:var(--primary-light); padding:6px 10px; border-radius:4px; border-left:3px solid var(--primary);">${idx+1}. ${w}</div>`).join('');
  
  const ex = stepMap[currentStep].stepData.exercises[exIdx];
  const targetWords = ex.sentences[sentIdx].answer;
  if (words.length === targetWords.length) {
    const isCorrect = JSON.stringify(words) === JSON.stringify(targetWords);
    if (isCorrect) {
      ansDiv.style.borderColor = 'var(--success)';
      ansDiv.style.background = 'var(--success-bg)';
      setTimeout(() => {
        st.score++;
        nextSbSent(exIdx, sentIdx);
      }, 1200);
    } else {
      ansDiv.style.borderColor = 'var(--error)';
      ansDiv.style.background = 'var(--error-bg)';
      setTimeout(() => {
        ansDiv.style.borderColor = 'var(--border)';
        ansDiv.style.background = '';
        resetSb(exIdx, sentIdx);
      }, 1200);
    }
  }
}

function nextSbSent(exIdx, sentIdx) {
  document.getElementById(`sb-${exIdx}-${sentIdx}`).style.display = 'none';
  const st = sbState[exIdx];
  if (sentIdx + 1 < st.max) {
    document.getElementById(`sb-${exIdx}-${sentIdx + 1}`).style.display = 'block';
  } else {
    document.getElementById(`sb-score-${exIdx}`).innerHTML = `Score: ${st.score} out of ${st.max}`;
    document.getElementById(`sb-score-${exIdx}`).style.display = 'block';
    exerciseStatus[exIdx] = true;
    showExFeedback(exIdx, true, 'Sempurna! Kalimat berhasil disusun.');
  }
}

function handleSeq(exIdx, qIdx, optIdx, correctIdx, btn) {
  if (exerciseStatus[exIdx]) return;
  const st = seqState[exIdx];
  const container = btn.parentElement;
  Array.from(container.children).forEach(b => b.disabled = true);

  if (optIdx === correctIdx) {
    btn.classList.add('correct');
    st.score++;
  } else {
    btn.classList.add('wrong');
    container.children[correctIdx].classList.add('correct');
  }

  setTimeout(() => {
    document.getElementById(`seq-${exIdx}-${qIdx}`).style.display = 'none';
    if (qIdx + 1 < st.max) {
      document.getElementById(`seq-${exIdx}-${qIdx+1}`).style.display = 'block';
    } else {
      const scoreDiv = document.getElementById(`seq-score-${exIdx}`);
      scoreDiv.innerHTML = `Score: ${st.score} out of ${st.max}`;
      scoreDiv.style.display = 'block';
      showExFeedback(exIdx, true, 'Latihan selesai!');
    }
  }, 1000);
}

function handleStoryMcq(exIdx, qIdx, optIdx, correctIdx, btn) {
  if (exerciseStatus[exIdx]) return;
  const st = seqState[exIdx];
  const container = btn.parentElement;
  Array.from(container.children).forEach(b => b.disabled = true);

  if (optIdx === correctIdx) {
    btn.classList.add('correct');
    st.score++;
  } else {
    btn.classList.add('wrong');
    container.children[correctIdx].classList.add('correct');
  }

  setTimeout(() => {
    document.getElementById(`smcq-${exIdx}-${qIdx}`).style.display = 'none';
    if (qIdx + 1 < st.max) {
      document.getElementById(`smcq-${exIdx}-${qIdx+1}`).style.display = 'block';
    } else {
      const scoreDiv = document.getElementById(`story-score-${exIdx}`);
      scoreDiv.innerHTML = `Score: ${st.score} out of ${st.max}`;
      scoreDiv.style.display = 'block';
      exerciseStatus[exIdx] = true;
      if (!stepMap[currentStep].isQuiz) {
        showExFeedback(exIdx, true, 'Sesi membaca selesai!');
      } else {
        checkStepCompletion();
      }
    }
  }, 1000);
}

function handleFill(exIdx, optVal, btn) {
  if (exerciseStatus[exIdx]) return;
  const isQuiz = stepMap[currentStep].isQuiz;
  const ex = stepMap[currentStep].stepData.exercises[exIdx];
  const container = btn.parentElement;
  
  if (optVal === ex.answer) {
    btn.classList.add('correct');
    document.getElementById(`fb-${exIdx}`).innerText = optVal;
    exerciseScore[exIdx] = 1;
    exerciseStatus[exIdx] = true;
    Array.from(container.children).forEach(b => b.disabled = true);
    if (!isQuiz) showExFeedback(exIdx, true, ex.exp_ind);
  } else {
    btn.classList.add('wrong');
    if (isQuiz) {
      document.getElementById(`fb-${exIdx}`).innerText = ex.answer;
      exerciseScore[exIdx] = 0;
      exerciseStatus[exIdx] = true;
      Array.from(container.children).forEach(b => b.disabled = true);
    } else {
      showExFeedback(exIdx, false, ex.exp_ind);
      setTimeout(() => { btn.classList.remove('wrong'); document.getElementById(`fb-box-${exIdx}`).className='fb-box'; }, 2000);
    }
  }
  checkStepCompletion();
}

// Matching logic for multiple pairs
let matchState = {};
function initMatch(exIdx, pairs) {
  const left = document.getElementById(`ml-${exIdx}`);
  const right = document.getElementById(`mr-${exIdx}`);
  matchState[exIdx] = { sel: null, count: 0, max: pairs.length };
  
  const w = [...pairs].sort(()=>Math.random()-.5);
  const m = [...pairs].sort(()=>Math.random()-.5);
  
  w.forEach(p => {
    const b = document.createElement('button'); b.className = 'match-btn'; b.innerText = p.word;
    b.onclick = () => handleMatch(exIdx, b, 'left', p.word); left.appendChild(b);
  });
  m.forEach(p => {
    const b = document.createElement('button'); b.className = 'match-btn'; b.innerText = p.meaning;
    b.onclick = () => handleMatch(exIdx, b, 'right', p.word); right.appendChild(b);
  });
}

function handleMatch(exIdx, btn, side, word) {
  if (exerciseStatus[exIdx] || btn.classList.contains('matched')) return;
  const state = matchState[exIdx];
  
  if (!state.sel) {
    state.sel = { btn, side, word };
    btn.classList.add('sel');
  } else {
    if (state.sel.side === side) {
      state.sel.btn.classList.remove('sel');
      state.sel = { btn, side, word };
      btn.classList.add('sel');
    } else {
      if (state.sel.word === word) {
        state.sel.btn.classList.remove('sel'); state.sel.btn.classList.add('matched');
        btn.classList.add('matched'); state.count++;
        if (state.count === state.max) { showExFeedback(exIdx, true, stepMap[currentStep].stepData.exercises[exIdx].exp_ind); }
      } else {
        state.sel.btn.classList.remove('sel'); state.sel.btn.classList.add('shake'); btn.classList.add('shake');
        showExFeedback(exIdx, false, 'Pasangan tidak cocok. Coba lagi!');
        setTimeout(() => { document.querySelectorAll('.shake').forEach(el=>el.classList.remove('shake')); document.getElementById(`fb-box-${exIdx}`).className='fb-box'; }, 800);
      }
      state.sel = null;
    }
  }
}

// Quiz Engine
function submitQuiz() {
  const step = stepMap[currentStep];
  let score = 0;
  let max = 0;
  let categories = {
    'Picture Matching': { score: 0, max: 0 },
    'Meaning Translation': { score: 0, max: 0 },
    'Fill in the Blank': { score: 0, max: 0 },
    'Sentence Building': { score: 0, max: 0 },
    'Reading Comprehension': { score: 0, max: 0 }
  };
  
  step.stepData.exercises.forEach((ex, i) => {
    let exScore = 0; let exMax = 0; let cat = '';
    
    if (ex.type === 'word_pic_seq') {
      exScore = seqState[i].score || 0; exMax = seqState[i].max || 0; cat = 'Picture Matching';
    } else if (ex.type === 'word_text_seq') {
      exScore = seqState[i].score || 0; exMax = seqState[i].max || 0; cat = 'Meaning Translation';
    } else if (ex.type === 'story_read') {
      exScore = seqState[i].score || 0; exMax = seqState[i].max || 0; cat = 'Reading Comprehension';
    } else if (ex.type === 'fill_bank' || ex.type === 'fbank') {
      fbankState[i].slots.forEach((w, sidx) => { if (w === ex.sentences[sidx].answer) exScore++; });
      exMax = ex.sentences.length; cat = 'Fill in the Blank';
    } else if (ex.type === 'sent_build') {
      exScore = sbState[i].score || 0; exMax = sbState[i].max || ex.sentences.length; cat = 'Sentence Building';
    } else if (ex.type === 'cat_sort') {
      csortState[i].cats.forEach((arr, ci) => { arr.forEach(item => { if (item.catTarget === ci) exScore++; }); });
      exMax = csortState[i].max || ex.words.length; cat = 'Meaning Translation';
    } else if (ex.type === 'mcq') {
      exScore = exerciseScore[i] || 0; exMax = 1; cat = 'Meaning Translation';
    }
    
    score += exScore; max += exMax;
    if (categories[cat]) { categories[cat].score += exScore; categories[cat].max += exMax; }
  });

  const pct = Math.round((score / max) * 100);
  const isPass = pct >= 70;
  
  if (isPass) {
    state.scores[step.unitId] = pct;
    saveState();
  }
  
  // Determine which unit this quiz belongs to
  const quizTitle = step.stepData.title || 'Quiz';
  let passMsg = 'Congratulations! You passed! You may continue to the next unit.';
  let failMsg = 'Good try! Please review the sessions and retake the quiz.';
  let nextBtnLabel = 'Continue →';
  let isFinal = false;
  
  if (quizTitle.includes('Unit 1')) {
    passMsg = 'Congratulations! You passed Unit 1! You may continue to Unit 2: Speaking.';
  } else if (quizTitle.includes('Unit 2')) {
    passMsg = 'Congratulations! You passed Unit 2! You may continue to Unit 3: Reading.';
  } else if (quizTitle.includes('Unit 3')) {
    passMsg = 'Congratulations! You passed Unit 3! Excellent work!';
  } else if (quizTitle.includes('Final Test')) {
    isFinal = true;
    passMsg = 'Selamat! You have successfully completed the English Communication Skills module!';
    failMsg = 'You are so close! Review the sections below and speak to your teacher.';
  }
  
  let weakHtml = '';
  if (!isPass) {
    let weaks = [];
    Object.keys(categories).forEach(c => {
      const cst = categories[c];
      if (cst.max > 0 && (cst.score / cst.max) < 0.7) {
        weaks.push(`<li>${c} (${cst.score}/${cst.max})</li>`);
      }
    });
    if (weaks.length > 0) {
      weakHtml = `<div style="text-align:left; background:var(--error-bg); color:var(--error); padding:16px; border-radius:8px; margin: 20px auto; max-width: 400px;">
        <strong>Areas to Review:</strong><ul>${weaks.join('')}</ul>
      </div>`;
    }
  }

  let certHtml = '';
  if (isFinal && isPass) {
    const today = new Date().toLocaleDateString('en-GB');
    certHtml = `
      <div id="cert-card" style="border:5px solid var(--primary); padding:30px; border-radius:15px; background:#fff; max-width:500px; margin:30px auto; text-align:center; box-shadow:0 10px 20px rgba(0,0,0,0.1); position:relative;">
        <div style="font-size:4rem; margin-bottom:10px;">🎓</div>
        <h2 style="color:var(--primary-dark); margin-bottom:10px;">CERTIFICATE OF COMPLETION</h2>
        <div style="font-size:1.1rem; color:var(--text-sub); margin-bottom:20px;">This certifies that</div>
        <input type="text" placeholder="Enter your name..." style="font-size:1.5rem; font-weight:bold; text-align:center; border:none; border-bottom:2px solid var(--border); width:80%; padding:5px; margin-bottom:20px; color:var(--text); font-family:inherit; background:transparent;" id="cert-name">
        <div style="font-size:1.1rem; color:var(--text-sub); margin-bottom:20px;">has successfully completed the module</div>
        <h3 style="color:var(--primary); margin-bottom:30px; font-size:1.5rem;">English Communication Skills</h3>
        <div style="display:flex; justify-content:space-between; align-items:flex-end; padding:0 20px; margin-top:40px;">
          <div style="text-align:left;">
            <div style="border-bottom:1px solid #000; width:100px; margin-bottom:5px;"></div>
            <div style="font-size:0.9rem; color:var(--text-sub);">Instructor</div>
          </div>
          <div style="text-align:right;">
            <div style="font-weight:bold; font-size:1.1rem;">${today}</div>
            <div style="font-size:0.9rem; color:var(--text-sub);">Date</div>
          </div>
        </div>
      </div>
      <div style="font-style:italic; color:var(--text-sub); margin-bottom:20px;">Tip: Enter your name and take a screenshot of your certificate!</div>
    `;
  }
  
  let html = `<div style="text-align:center; padding: 40px 20px;">
    <h1>${isFinal ? 'Final Test Results' : 'Quiz Results'}</h1>
    <div style="font-size: 4rem; margin: 20px 0;">${isPass ? (isFinal ? '🏆' : '🎉') : '💪'}</div>
    <h2>Score: ${score} / ${max} (${pct}%)</h2>
    <div style="margin-bottom:20px; font-size:1.2rem; color:var(--text-sub);">
      ${isPass ? passMsg : failMsg}
    </div>
    ${weakHtml}
    ${certHtml}
    <div style="display:flex; flex-direction:column; gap:10px; max-width:300px; margin: 0 auto;">
      ${isPass ? 
        (isFinal ? `<button class="btn btn-primary" style="justify-content:center;" onclick="renderClosingPage()">Continue to Results (Lanjut ke Hasil) →</button>` : `<button class="btn btn-primary" style="justify-content:center;" onclick="state.unlockedStep = currentStep + 1; saveState(); renderMap();">${nextBtnLabel}</button>`) :
        (isFinal ? `<button class="btn btn-outline" style="justify-content:center;" onclick="renderHome()">Back to Home to Review</button>` : `<button class="btn btn-outline" style="justify-content:center;" onclick="startStep(${currentStep-1})">Review Previous Session</button>
         <button class="btn btn-primary" style="justify-content:center;" onclick="startStep(${currentStep})">Retake Quiz</button>`)
      }
    </div>
  </div>`;
  
  document.getElementById('app').innerHTML = html;
  btnNext.style.visibility = 'hidden';
  btnBack.style.visibility = 'hidden';
  window.scrollTo(0,0);
}

function showHint(exIdx) {
  const ex = stepMap[currentStep].stepData.exercises[exIdx];
  const hintDiv = document.getElementById(`hint-${exIdx}`);
  let hint = 'Baca kembali materinya dengan teliti.';
  if (ex.type === 'word_pic_seq' || ex.type === 'word_text_seq' || ex.type === 'match') {
    hint = 'Pikirkan kata yang paling sering kamu dengar di kehidupan sehari-hari.';
  } else if (ex.type === 'fill_bank' || ex.type === 'sent_build' || ex.type === 'dropdown_build') {
    hint = 'Perhatikan struktur kalimat: Subjek + Kata Kerja + Objek, atau urutan percakapan yang masuk akal.';
  } else if (ex.type === 'story_read') {
    hint = 'Cari kata kunci pertanyaan di dalam teks bacaan. Jawabannya ada di sana!';
  } else if (ex.type === 'mem_game') {
    hint = 'Ingat-ingat letak kartu yang sudah terbuka sebelumnya.';
  }
  hintDiv.innerHTML = `💡 ${hint}`;
  hintDiv.style.display = 'block';
}

function openKamus() {
  document.getElementById('kamus-modal').style.display = 'flex';
  document.getElementById('kamus-search').value = '';
  searchKamus();
}

function searchKamus() {
  const q = document.getElementById('kamus-search').value.toLowerCase();
  const list = document.getElementById('kamus-list');
  let vocab = [];
  curriculum.forEach(u => {
    if(u.sessions) {
      u.sessions.forEach(s => {
        if(s.blocks) {
          s.blocks.forEach(b => {
            if(b.type === 'flashcards' && b.cards) {
              b.cards.forEach(c => vocab.push(c));
            }
          });
        }
      });
    }
  });
  
  const uniqueVocab = [];
  const seen = new Set();
  vocab.forEach(c => {
    const key = c.ind + c.eng;
    if(!seen.has(key)) { seen.add(key); uniqueVocab.push(c); }
  });
  
  uniqueVocab.sort((a,b) => a.eng.localeCompare(b.eng));
  const filtered = uniqueVocab.filter(c => c.eng.toLowerCase().includes(q) || c.ind.toLowerCase().includes(q));
  
  list.innerHTML = filtered.length > 0 ? filtered.map(c => `
    <div style="padding:12px; background:var(--bg); border:1px solid var(--border); border-radius:var(--r-sm); display:flex; justify-content:space-between; align-items:center;">
      <div>
        <div style="font-weight:bold; color:var(--primary-dark);">${c.eng}</div>
        <div style="font-size:0.85rem; color:var(--text-sub); font-style:italic;">${c.ind}</div>
      </div>
      <div style="font-size:1.5rem;">${c.icon||'💬'}</div>
    </div>
  `).join('') : '<div style="text-align:center; color:var(--text-sub); padding:20px;">Kata tidak ditemukan.</div>';
}

function renderClosingPage() {
  currentStep = -1;
  document.getElementById('prog-text').innerText = 'Completed!';
  document.getElementById('prog-bar').style.width = '100%';
  
  const s1 = state.scores['unit1'] || 0;
  const s2 = state.scores['unit2'] || 0;
  const s3 = state.scores['unit3'] || 0;
  const sF = state.scores['final'] || 0;

  app.innerHTML = `
    <div class="card" style="text-align:center; padding:40px 20px;">
      <div style="font-size:4rem; margin-bottom:10px;">🌟</div>
      <h1 style="color:var(--primary-dark); margin-bottom:10px;">You Did It! Selamat!</h1>
      <div style="background:var(--primary-light); padding:20px; border-radius:var(--r-md); margin-bottom:24px; text-align:left; border:2px solid var(--primary);">
        <h3 style="text-align:center; border-bottom:2px solid var(--primary); padding-bottom:10px; margin-bottom:16px;">Your Final Scores</h3>
        <div style="display:flex; justify-content:space-between; font-weight:600; font-size:1.1rem; margin-bottom:8px;">
          <span>✓ Unit 1 Vocabulary</span><span style="color:var(--primary-dark);">${s1}%</span>
        </div>
        <div style="display:flex; justify-content:space-between; font-weight:600; font-size:1.1rem; margin-bottom:8px;">
          <span>✓ Unit 2 Speaking</span><span style="color:var(--primary-dark);">${s2}%</span>
        </div>
        <div style="display:flex; justify-content:space-between; font-weight:600; font-size:1.1rem; margin-bottom:8px;">
          <span>✓ Unit 3 Reading</span><span style="color:var(--primary-dark);">${s3}%</span>
        </div>
        <div style="display:flex; justify-content:space-between; font-weight:800; font-size:1.2rem; margin-top:16px; border-top:1px dashed var(--primary); padding-top:12px; color:var(--accent);">
          <span>✓ Final Test</span><span>${sF}%</span>
        </div>
      </div>
      <div style="font-size:1.1rem; line-height:1.6; margin-bottom:24px; color:var(--text-main);">
        "Learning English is a journey. You have taken a big step today. Keep practicing every day and believe in yourself!"<br><br>
        <span style="font-style:italic; color:var(--text-sub); font-size:0.95rem;">"Belajar bahasa Inggris adalah sebuah perjalanan. Kamu sudah melangkah jauh hari ini. Terus berlatih setiap hari dan percayalah pada dirimu sendiri!"</span>
      </div>
      <button class="btn btn-primary" style="width:100%; justify-content:center; padding:16px; font-size:1.1rem; margin-bottom:12px;" onclick="renderHome()">Back to Home (Kembali ke Beranda)</button>
      <button class="btn btn-outline" style="width:100%; justify-content:center;" onclick="renderMap()">Review Any Unit (Ulas Kembali)</button>
    </div>
  `;
  btnBack.style.visibility = 'hidden';
  btnNext.style.visibility = 'hidden';
  window.scrollTo(0,0);
}

function toggleTheme() {
  const html = document.documentElement;
  const currentTheme = html.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', newTheme);
  localStorage.setItem('paketC_theme', newTheme);
  document.getElementById('theme-toggle').innerText = newTheme === 'dark' ? '☀️' : '🌙';
}

// Init Theme
const savedTheme = localStorage.getItem('paketC_theme') || 'light';
document.documentElement.setAttribute('data-theme', savedTheme);
document.getElementById('theme-toggle').innerText = savedTheme === 'dark' ? '☀️' : '🌙';

// Init
renderHome();
