// ===== Navigation =====
function showPage(name) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('nav button').forEach(b => b.classList.remove('active'));
  document.getElementById('page-' + name).classList.add('active');
  const navBtns = document.querySelectorAll('nav button');
  const pageMap = ['home','outline','writing','listening','reading','translation','vocab','quiz'];
  const idx = pageMap.indexOf(name);
  if (idx >= 0) navBtns[idx].classList.add('active');
  // sync home quick-nav buttons
  document.querySelectorAll('.home-nav-btn').forEach(b => b.classList.remove('active'));
  const hBtn = document.getElementById('hnav-' + name);
  if (hBtn) hBtn.classList.add('active');
  if (name !== 'quiz') stopTimer();
  if (name === 'vocab') renderVocab('all');
  if (name === 'reading') initReadingPage();
  if (name === 'translation') initTranslationPage();
  if (name === 'writing') initWritingPage();
  if (name === 'listening') initListeningPage();
  if (name === 'quiz') { renderScoreHistory(); renderWrongBook(); }
}

// ===== Writing =====
// WRITING_TIPS and WRITING_EXAMS are loaded from data/writing.js

let selectedTopicIdx = -1;

function selectWritingTopic(idx) {
  selectedTopicIdx = idx;
  const exam = WRITING_EXAMS[idx];
  document.querySelectorAll('#writing-topic-list .writing-prompt').forEach((t,i) => {
    t.style.border = i===idx ? '2px solid var(--primary)' : '';
  });
  document.getElementById('writing-practice-area').style.display = 'block';
  const openingHtml = exam.opening
    ? '<div style="background:var(--bg-secondary);border-left:4px solid var(--primary);padding:12px 16px;margin:10px 0;border-radius:4px;font-style:italic;font-size:1.05em">"' + exam.opening + '"</div>'
    : '';
  document.getElementById('selected-topic').innerHTML =
    '<h4>' + exam.year + '年' + exam.period + ' · ' + exam.set + '：' + exam.title + '</h4>' +
    openingHtml +
    '<p style="color:var(--text-muted);font-size:0.9em;margin-top:8px">' + exam.prompt + '</p>';
  document.getElementById('writing-input').value = exam.opening ? exam.opening + ' ' : '';
  updateWordCount();
  document.getElementById('writing-tips').style.display = 'none';
  document.getElementById('writing-practice-area').scrollIntoView({behavior:'smooth'});
}

function updateWordCount() {
  const text = document.getElementById('writing-input').value.trim();
  const words = text ? text.split(/\s+/).length : 0;
  const el = document.getElementById('wc-display');
  el.textContent = '字数：' + words + ' 词';
  el.style.color = words < 150 ? 'var(--danger)' : words > 200 ? 'var(--warning)' : 'var(--success)';
}

function showWritingTips() {
  if (selectedTopicIdx < 0) return;
  const tip = WRITING_TIPS[selectedTopicIdx];
  document.getElementById('writing-tips-body').innerHTML = tip ? tip.tips : '暂无提示';
  document.getElementById('writing-tips').style.display = 'block';
}

function clearWriting() {
  document.getElementById('writing-input').value = '';
  updateWordCount();
}

function initWritingPage() {
  const container = document.getElementById('writing-topic-list');
  if (!container || container.querySelector('.writing-prompt')) return;
  let html = '';
  const years = [...new Set(WRITING_EXAMS.map(e => e.year))];
  years.forEach(year => {
    html += '<h3 style="color:var(--primary);border-left:3px solid var(--primary);padding-left:10px;margin:16px 0 12px">' + year + '年</h3>';
    WRITING_EXAMS.forEach((exam, i) => {
      if (exam.year !== year) return;
      const preview = exam.opening
        ? '<p style="font-style:italic;color:var(--text-muted);font-size:0.9em;margin:4px 0 0">"' + exam.opening.substring(0,60) + (exam.opening.length>60?'…':'') + '"</p>'
        : '';
      html += '<div class="writing-prompt" style="cursor:pointer" onclick="selectWritingTopic(' + i + ')">' +
        '<h4>' + exam.period + ' · ' + exam.set + '：' + exam.title + '</h4>' +
        preview +
        '</div>';
    });
  });
  container.innerHTML = html;
}

// ===== Accordion =====
function toggleAccordion(header) {
  const body = header.nextElementSibling;
  const arrow = header.querySelector('.accordion-arrow');
  body.classList.toggle('open');
  arrow.classList.toggle('open');
}

function toggleVocabGroup(header) {
  const body = header.nextElementSibling;
  const arrow = header.querySelector('.vocab-arrow');
  const isOpen = body.style.display !== 'none';
  body.style.display = isOpen ? 'none' : 'block';
  arrow.textContent = isOpen ? '▶' : '▼';
}

// ===== Cloze =====
// READING_CLOZE and READING_ANSWERS are loaded from data/reading.js
let selectedClozeWord = null;

function selectClozeWord(el, word) {
  document.querySelectorAll('#cloze-wordbank span').forEach(s => s.style.outline = '');
  el.style.outline = '2px solid var(--primary)';
  selectedClozeWord = word;
}

function fillCloze(blank) {
  if (!selectedClozeWord) { alert('请先从词库中点击选择一个词'); return; }
  blank.textContent = selectedClozeWord;
  blank.dataset.filled = selectedClozeWord;
  blank.style.background = '#dbeafe';
  blank.style.padding = '2px 8px';
  blank.style.borderRadius = '4px';
  selectedClozeWord = null;
  document.querySelectorAll('#cloze-wordbank span').forEach(s => s.style.outline = '');
}

function checkCloze() {
  const blanks = document.querySelectorAll('.cloze-blank');
  let correct = 0;
  blanks.forEach(b => {
    const filled = b.dataset.filled || '';
    const answer = b.dataset.answer;
    if (filled === answer) { b.style.background = '#d1fae5'; correct++; }
    else if (filled) { b.style.background = '#fee2e2'; }
  });
  const res = document.getElementById('cloze-result');
  res.style.display = 'block';
  res.innerHTML = '<div style="padding:12px;border-radius:8px;background:' + (correct>=8?'#d1fae5':'#fff7ed') + ';border:1px solid ' + (correct>=8?'var(--success)':'var(--warning)') + '">正确 <strong>' + correct + '/10</strong> 题' + (correct>=8?' 优秀！':correct>=6?' 继续加油！':' 需要加强词汇练习') + '</div>';
}

function resetCloze() {
  document.querySelectorAll('.cloze-blank').forEach(b => {
    b.textContent = '[___' + b.dataset.answer.substring(0,1).toUpperCase() + '___]';
    b.style.background = '';
    b.style.padding = '';
    b.style.borderRadius = '';
    delete b.dataset.filled;
  });
  document.getElementById('cloze-result').style.display = 'none';
  selectedClozeWord = null;
  document.querySelectorAll('#cloze-wordbank span').forEach(s => s.style.outline = '');
}

// ===== Reading Quiz =====
function checkReadingAnswers() {
  const answers = READING_ANSWERS;
  let correct = 0;
  Object.keys(answers).forEach(name => {
    const selected = document.querySelector('input[name=' + name + ']:checked');
    const expEl = document.getElementById(name + '-exp');
    const labels = document.querySelectorAll('input[name=' + name + ']');
    labels.forEach(inp => {
      const lbl = inp.parentElement;
      lbl.classList.remove('correct','wrong');
      if (inp.value === answers[name]) lbl.classList.add('correct');
      else if (selected && inp.value === selected.value) lbl.classList.add('wrong');
    });
    if (expEl) expEl.classList.add('show');
    if (selected && selected.value === answers[name]) correct++;
  });
}

// ===== Translation =====
function toggleTransRef(id) {
  const el = document.getElementById(id);
  el.classList.toggle('show');
}

// ===== Vocab =====
// VOCAB_DATA is loaded from vocab_data.js
const VC_MASTERED_KEY = 'cet6_mastered';
const VC_WORDBOOK_KEY = 'cet6_wordbook';

function loadSet(key) {
  try { return new Set(JSON.parse(localStorage.getItem(key) || '[]')); } catch { return new Set(); }
}
function saveSet(key, set) {
  localStorage.setItem(key, JSON.stringify([...set]));
}

let masteredWords = loadSet(VC_MASTERED_KEY);
let wordbookWords = loadSet(VC_WORDBOOK_KEY);
let flippedCards = new Set();

function getPool() {
  return VOCAB_DATA.filter(v => !masteredWords.has(v.word));
}

function sampleByLevel(pool, easyN, midN, hardN) {
  const easy = pool.filter(v => v.level === 1);
  const mid  = pool.filter(v => v.level === 2);
  const hard = pool.filter(v => v.level === 3);
  const pick = (arr, n) => arr.sort(() => Math.random() - 0.5).slice(0, n);
  let picked = [...pick(easy, easyN), ...pick(mid, midN), ...pick(hard, hardN)];
  if (picked.length < 20) {
    const used = new Set(picked.map(v => v.word));
    const rest = pool.filter(v => !used.has(v.word)).sort(() => Math.random() - 0.5);
    picked = [...picked, ...rest.slice(0, 20 - picked.length)];
  }
  return picked.sort(() => Math.random() - 0.5);
}

function drawCards() {
  flippedCards.clear();
  const pool = getPool();
  const cards = sampleByLevel(pool, 5, 10, 5);
  renderFlashcards(cards);
  updateVocabStats();
}

function levelColor(level) {
  return level === 1 ? '#d1fae5' : level === 2 ? '#fef9c3' : '#fee2e2';
}
function levelTextColor(level) {
  return level === 1 ? '#065f46' : level === 2 ? '#92400e' : '#991b1b';
}
function levelLabel(level) {
  return level === 1 ? '简单' : level === 2 ? '中等' : '难';
}

function sourceLabel(source) {
  if (!source) return '';
  const parts = source.split('+');
  return parts.map(s => {
    const colors = { '新东方': ['#fce7f3','#9d174d'], '周计划': ['#e0e7ff','#3730a3'] };
    const [bg, fg] = colors[s] || ['#f1f5f9','#475569'];
    return `<span style="background:${bg};color:${fg};font-size:0.65rem;font-weight:700;padding:1px 5px;border-radius:6px;margin-left:3px">${s}</span>`;
  }).join('');
}

function examLabel(exam) {
  if (!exam) return '';
  const colors = { 'CET6': ['#dbeafe','#1e40af'], 'CET4': ['#d1fae5','#065f46'] };
  const [bg, fg] = colors[exam] || ['#f1f5f9','#475569'];
  return `<span style="background:${bg};color:${fg};font-size:0.65rem;font-weight:700;padding:1px 6px;border-radius:6px">${exam}</span>`;
}

function renderFlashcards(cards) {
  const grid = document.getElementById('flashcard-grid');
  grid.innerHTML = cards.map(v => {
    const inWB = wordbookWords.has(v.word);
    const lc = levelColor(v.level), ltc = levelTextColor(v.level);
    const safeWord = v.word.replace(/'/g, "\\'");
    return `
    <div class="flashcard" id="fc-${v.word}" onclick="flipCard('${safeWord}')"
      style="background:white;border-radius:12px;border:2px solid ${lc};padding:18px;cursor:pointer;
             transition:all 0.2s;min-height:120px;position:relative;box-shadow:0 1px 4px rgba(0,0,0,0.08)">
      <div style="position:absolute;top:8px;right:8px;background:${lc};color:${ltc};
                  font-size:0.7rem;font-weight:700;padding:2px 7px;border-radius:10px">${levelLabel(v.level)}</div>
      <div style="font-size:1.2rem;font-weight:700;color:var(--primary);margin-bottom:4px">${v.word}</div>
      <div style="font-size:0.78rem;color:var(--text-muted);margin-bottom:6px">${v.phonetic ? '[' + v.phonetic + ']' : ''} <span style="color:var(--text-muted)">${v.pos}</span></div>
      <div style="margin-bottom:8px">${examLabel(v.exam)}${sourceLabel(v.source)}</div>
      <div class="fc-meaning" id="fcm-${v.word}" style="display:none;font-size:0.88rem;color:var(--text);line-height:1.6;margin-bottom:10px">${v.meaning}</div>
      <div class="fc-hint" id="fch-${v.word}" style="font-size:0.82rem;color:var(--text-muted);font-style:italic">点击查看释义</div>
      <div class="fc-actions" id="fca-${v.word}" style="display:none;margin-top:10px;gap:6px;flex-wrap:wrap" onclick="event.stopPropagation()">
        <button class="btn btn-success btn-sm" style="font-size:0.78rem;padding:4px 10px" onclick="markMastered('${safeWord}')">✓ 已掌握</button>
        <button class="btn btn-sm" style="font-size:0.78rem;padding:4px 10px;background:${inWB?'#fee2e2':'#eff6ff'};color:${inWB?'var(--danger)':'var(--primary)'};border:1px solid ${inWB?'var(--danger)':'var(--primary)'}" id="wb-btn-${v.word}" onclick="toggleWordbook('${safeWord}')">${inWB ? '★ 已加生词本' : '☆ 加入生词本'}</button>
      </div>
    </div>`;
  }).join('');
  updateCardProgress();
}

function flipCard(word) {
  const meaning = document.getElementById('fcm-' + word);
  const hint = document.getElementById('fch-' + word);
  const actions = document.getElementById('fca-' + word);
  const card = document.getElementById('fc-' + word);
  if (!flippedCards.has(word)) {
    flippedCards.add(word);
    meaning.style.display = 'block';
    hint.style.display = 'none';
    actions.style.display = 'flex';
    card.style.borderWidth = '2px';
    card.style.boxShadow = '0 4px 12px rgba(37,99,235,0.15)';
  } else {
    flippedCards.delete(word);
    meaning.style.display = 'none';
    hint.style.display = 'block';
    actions.style.display = 'none';
    card.style.boxShadow = '0 1px 4px rgba(0,0,0,0.08)';
  }
  updateCardProgress();
}

function updateCardProgress() {
  const total = document.querySelectorAll('.flashcard').length;
  document.getElementById('card-progress').textContent = flippedCards.size + '/' + total + ' 已翻转';
}

function markMastered(word) {
  masteredWords.add(word);
  saveSet(VC_MASTERED_KEY, masteredWords);
  const card = document.getElementById('fc-' + word);
  if (card) {
    card.style.opacity = '0.4';
    card.style.pointerEvents = 'none';
    const hint = card.querySelector('.fc-hint');
    if (hint) hint.textContent = '✓ 已掌握';
  }
  updateVocabStats();
}

function toggleWordbook(word) {
  const btn = document.getElementById('wb-btn-' + word);
  if (wordbookWords.has(word)) {
    wordbookWords.delete(word);
    saveSet(VC_WORDBOOK_KEY, wordbookWords);
    if (btn) { btn.textContent = '☆ 加入生词本'; btn.style.background = '#eff6ff'; btn.style.color = 'var(--primary)'; btn.style.borderColor = 'var(--primary)'; }
  } else {
    wordbookWords.add(word);
    saveSet(VC_WORDBOOK_KEY, wordbookWords);
    if (btn) { btn.textContent = '★ 已加生词本'; btn.style.background = '#fee2e2'; btn.style.color = 'var(--danger)'; btn.style.borderColor = 'var(--danger)'; }
  }
}

function updateVocabStats() {
  const total = VOCAB_DATA.length;
  const mastered = masteredWords.size;
  const remaining = total - mastered;
  const el = document.getElementById('vocab-stats');
  if (el) el.textContent = `共 ${total} 词 · 已掌握 ${mastered} · 剩余 ${remaining}`;
}

function showWordbook() {
  const modal = document.getElementById('wordbook-modal');
  const list = document.getElementById('wordbook-list');
  const count = document.getElementById('wb-count');
  const words = [...wordbookWords];
  count.textContent = words.length + ' 词';
  if (words.length === 0) {
    list.innerHTML = '<p class="text-muted" style="text-align:center;padding:20px">生词本为空，在闪卡中点击"加入生词本"添加</p>';
  } else {
    const entries = words.map(w => VOCAB_DATA.find(v => v.word === w)).filter(Boolean);
    list.innerHTML = `<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:10px">` +
      entries.map(v => `
        <div style="background:#f8fafc;border-radius:8px;padding:12px;border:1px solid var(--border)">
          <div style="display:flex;justify-content:space-between;align-items:flex-start">
            <div>
              <span style="font-weight:700;color:var(--primary)">${v.word}</span>
              <span style="font-size:0.78rem;color:var(--text-muted);margin-left:6px">${v.pos}</span>
            </div>
            <button style="background:none;border:none;cursor:pointer;color:var(--danger);font-size:1rem" onclick="removeFromWordbook('${v.word.replace(/'/g,"\\'")}')">✕</button>
          </div>
          <div style="font-size:0.78rem;color:var(--text-muted);margin-bottom:3px">${v.phonetic ? '[' + v.phonetic + ']' : ''}</div>
          <div style="margin-bottom:4px">${examLabel(v.exam)}${sourceLabel(v.source)}</div>
          <div style="font-size:0.85rem;margin-top:4px">${v.meaning}</div>
        </div>`).join('') + '</div>';
  }
  modal.style.display = 'block';
}

function removeFromWordbook(word) {
  wordbookWords.delete(word);
  saveSet(VC_WORDBOOK_KEY, wordbookWords);
  showWordbook();
}

function closeWordbook() {
  document.getElementById('wordbook-modal').style.display = 'none';
}

function clearWordbook() {
  if (!confirm('确定清空生词本？')) return;
  wordbookWords.clear();
  saveSet(VC_WORDBOOK_KEY, wordbookWords);
  showWordbook();
}

function showMastered() {
  const modal = document.getElementById('mastered-modal');
  const list = document.getElementById('mastered-list');
  const count = document.getElementById('ms-count');
  const words = [...masteredWords].sort();
  count.textContent = words.length + ' 词';
  if (words.length === 0) {
    list.innerHTML = '<p class="text-muted" style="text-align:center;padding:20px">还没有标记为已掌握的单词</p>';
  } else {
    const entries = words.map(w => VOCAB_DATA.find(v => v.word === w)).filter(Boolean);
    list.innerHTML = `<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:10px">` +
      entries.map(v => `
        <div style="background:#f0fdf4;border-radius:8px;padding:12px;border:1px solid #bbf7d0">
          <div style="display:flex;justify-content:space-between;align-items:flex-start">
            <div>
              <span style="font-weight:700;color:var(--primary)">${v.word}</span>
              <span style="font-size:0.78rem;color:var(--text-muted);margin-left:6px">${v.pos}</span>
            </div>
            <button style="background:none;border:1px solid var(--warning);color:var(--warning);border-radius:6px;padding:2px 8px;cursor:pointer;font-size:0.78rem" onclick="unmarkMastered('${v.word.replace(/'/g,"\\'")}')">撤回</button>
          </div>
          <div style="font-size:0.78rem;color:var(--text-muted);margin-bottom:3px">${v.phonetic ? '[' + v.phonetic + ']' : ''}</div>
          <div style="margin-bottom:4px">${examLabel(v.exam)}${sourceLabel(v.source)}</div>
          <div style="font-size:0.85rem;margin-top:4px">${v.meaning}</div>
        </div>`).join('') + '</div>';
  }
  modal.style.display = 'block';
}

function closeMastered() {
  document.getElementById('mastered-modal').style.display = 'none';
}

function unmarkMastered(word) {
  masteredWords.delete(word);
  saveSet(VC_MASTERED_KEY, masteredWords);
  updateVocabStats();
  showMastered();
}

function exportWordbook() {
  const words = [...wordbookWords];
  const entries = words.map(w => VOCAB_DATA.find(v => v.word === w)).filter(Boolean);
  const text = entries.map(v => `${v.word}\t[${v.phonetic}]\t${v.pos}\t${v.meaning}`).join('\n');
  const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'CET6_生词本.txt';
  a.click();
}

function vocabSearch() {
  const q = document.getElementById('vocab-search-input').value.trim().toLowerCase();
  const container = document.getElementById('vocab-search-results');
  if (!q) { container.innerHTML = ''; return; }
  const results = VOCAB_DATA.filter(v =>
    v.word.toLowerCase().includes(q) || v.meaning.includes(q)
  ).slice(0, 30);
  if (results.length === 0) {
    container.innerHTML = '<p class="text-muted">未找到匹配词汇</p>';
    return;
  }
  container.innerHTML = `<p class="text-muted" style="margin-bottom:8px">找到 ${results.length} 个结果${results.length===30?' (显示前30条)':''}：</p>
    <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:8px">` +
    results.map(v => {
      const inWB = wordbookWords.has(v.word);
      const lc = levelColor(v.level), ltc = levelTextColor(v.level);
      const safeWord = v.word.replace(/'/g, "\\'");
      return `<div style="background:white;border-radius:8px;padding:12px;border:1px solid var(--border);box-shadow:0 1px 3px rgba(0,0,0,0.06)">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px">
          <span style="font-weight:700;color:var(--primary);font-size:1rem">${v.word}</span>
          <span style="background:${lc};color:${ltc};font-size:0.7rem;font-weight:700;padding:1px 6px;border-radius:8px">${levelLabel(v.level)}</span>
        </div>
        <div style="font-size:0.78rem;color:var(--text-muted);margin-bottom:4px">${v.phonetic ? '[' + v.phonetic + ']' : ''} ${v.pos}</div>
        <div style="margin-bottom:4px">${examLabel(v.exam)}${sourceLabel(v.source)}</div>
        <div style="font-size:0.85rem;line-height:1.5">${v.meaning}</div>
        <div style="margin-top:8px;display:flex;gap:6px">
          <button class="btn btn-success btn-sm" style="font-size:0.75rem;padding:3px 8px" onclick="markMastered('${safeWord}')">✓ 已掌握</button>
          <button class="btn btn-sm" style="font-size:0.75rem;padding:3px 8px;background:${inWB?'#fee2e2':'#eff6ff'};color:${inWB?'var(--danger)':'var(--primary)'};border:1px solid ${inWB?'var(--danger)':'var(--primary)'}" id="sr-wb-${v.word}" onclick="toggleWordbookSearch('${safeWord}')">${inWB ? '★ 已加' : '☆ 生词本'}</button>
        </div>
      </div>`;
    }).join('') + '</div>';
}

function toggleWordbookSearch(word) {
  toggleWordbook(word);
  vocabSearch();
}

function renderVocab(filter) {
  // placeholder — vocab page uses flashcard system
}

// ===== Timer =====
let timerInterval = null;
let timerRemaining = 0;
let timerPaused = false;

function startTimer(seconds, label) {
  stopTimer();
  timerRemaining = seconds;
  timerPaused = false;
  const bar = document.getElementById('exam-timer-bar');
  document.getElementById('exam-timer-label').textContent = '⏱ ' + label;
  bar.className = 'show';
  updateTimerDisplay();
  timerInterval = setInterval(() => {
    if (timerPaused) return;
    timerRemaining--;
    updateTimerDisplay();
    const bar = document.getElementById('exam-timer-bar');
    if (timerRemaining <= 300 && timerRemaining > 60) bar.className = 'show warning';
    else if (timerRemaining <= 60) bar.className = 'show danger';
    if (timerRemaining <= 0) {
      clearInterval(timerInterval);
      timerInterval = null;
      bar.className = 'show danger';
      document.getElementById('exam-timer-display').textContent = '时间到！';
    }
  }, 1000);
}

function updateTimerDisplay() {
  const m = Math.floor(timerRemaining / 60);
  const s = timerRemaining % 60;
  document.getElementById('exam-timer-display').textContent =
    String(m).padStart(2,'0') + ':' + String(s).padStart(2,'0');
}

function toggleTimer() {
  timerPaused = !timerPaused;
  document.querySelector('#exam-timer-bar button').textContent = timerPaused ? '继续' : '暂停';
}

function stopTimer() {
  if (timerInterval) { clearInterval(timerInterval); timerInterval = null; }
  const bar = document.getElementById('exam-timer-bar');
  if (bar) bar.className = '';
}

// ===== Score History =====
function loadScores() {
  try { return JSON.parse(localStorage.getItem('cet6_scores') || '[]'); } catch(e) { return []; }
}

function saveScore(label, correct, total) {
  const scores = loadScores();
  scores.push({ date: new Date().toLocaleDateString('zh-CN'), label, correct, total, pct: Math.round(correct/total*100) });
  if (scores.length > 50) scores.splice(0, scores.length - 50);
  localStorage.setItem('cet6_scores', JSON.stringify(scores));
  renderScoreHistory();
}

function renderScoreHistory() {
  const area = document.getElementById('score-history-area');
  if (!area) return;
  const scores = loadScores();
  if (!scores.length) {
    area.innerHTML = '<p class="text-muted" style="font-size:0.88rem">暂无记录。完成任意模拟测试后自动保存。</p>';
    return;
  }
  const recent = scores.slice(-20).reverse();
  area.innerHTML = recent.map(s => {
    const cls = s.pct >= 80 ? 'good' : s.pct >= 60 ? 'ok' : 'bad';
    return `<div class="score-bar-row">
      <span class="score-bar-label" title="${s.date} ${s.label}">${s.date} ${s.label}</span>
      <div class="score-bar-track"><div class="score-bar-fill ${cls}" style="width:${s.pct}%"></div></div>
      <span class="score-bar-pct" style="color:var(--${cls==='good'?'success':cls==='ok'?'warning':'danger'})">${s.pct}%</span>
    </div>`;
  }).join('') + `<p style="font-size:0.78rem;color:var(--text-muted);margin-top:8px">显示最近 ${recent.length} 条记录</p>`;
}

function clearScoreHistory() {
  if (!confirm('确定清空所有成绩记录？')) return;
  localStorage.removeItem('cet6_scores');
  renderScoreHistory();
}

// ===== Wrong Answer Notebook =====
function loadWrongBook() {
  try { return JSON.parse(localStorage.getItem('cet6_wrong') || '[]'); } catch(e) { return []; }
}

function addWrongAnswers(questions, answers, source, nameKey) {
  const book = loadWrongBook();
  questions.forEach((q, i) => {
    const key = nameKey ? nameKey(i) : i;
    const selected = answers[key];
    if (selected && selected !== q.ans) {
      const text = q.q || q.sentence || '';
      if (book.some(w => w.q === text)) return;
      book.push({ q: text, opts: q.opts, ans: q.ans, exp: q.exp, source, date: new Date().toLocaleDateString('zh-CN') });
    }
  });
  if (book.length > 200) book.splice(0, book.length - 200);
  localStorage.setItem('cet6_wrong', JSON.stringify(book));
  renderWrongBook();
}

function renderWrongBook() {
  const area = document.getElementById('wrong-book-area');
  if (!area) return;
  const book = loadWrongBook();
  if (!book.length) {
    area.innerHTML = '<p class="text-muted" style="font-size:0.88rem">暂无错题。答题后答错的客观题自动收录。</p>';
    return;
  }
  area.innerHTML = book.slice().reverse().map((w, i) => `
    <div class="wrong-item">
      <div class="wrong-q">${w.q}</div>
      <div style="font-size:0.83rem;margin-bottom:6px">${w.opts.join(' &nbsp; ')}</div>
      <div class="wrong-ans">正确答案：${w.ans}</div>
      <div class="wrong-exp">${w.exp}</div>
      <div class="wrong-src">${w.source} · ${w.date}</div>
    </div>`).join('') +
    `<p style="font-size:0.78rem;color:var(--text-muted);margin-top:8px">共 ${book.length} 道错题（最多保存200条）</p>`;
}

function clearWrongBook() {
  if (!confirm('确定清空所有错题？')) return;
  localStorage.removeItem('cet6_wrong');
  renderWrongBook();
}

// ===== Quiz (基础模拟测试) =====
// QUIZ_QUESTIONS is loaded from data/quiz.js (legacy quiz)
let quizAnswers = {};
let quizSubmitted = false;

function startQuiz() {
  quizAnswers = {};
  quizSubmitted = false;
  document.getElementById('quiz-start-area').style.display = 'none';
  document.getElementById('quiz-result').style.display = 'none';
  const area = document.getElementById('quiz-area');
  area.style.display = 'block';
  area.innerHTML = QUIZ_QUESTIONS.map((q,i) => `
    <div class="quiz-question">
      <p>${i+1}. ${q.q}</p>
      <div class="quiz-options">
        ${q.opts.map(opt => `<label><input type="radio" name="qq${i}" value="${opt[0]}" onchange="recordQuizAnswer(${i},'${opt[0]}')"> ${opt}</label>`).join('')}
      </div>
      <div class="quiz-explanation" id="qexp-${i}"><strong>解析：</strong>${q.exp}</div>
    </div>`).join('') +
    '<div style="margin-top:20px;display:flex;gap:12px"><button class="btn btn-primary" onclick="submitQuiz()">提交答案</button><button class="btn btn-outline" onclick="resetQuiz()">重新开始</button></div>';
}

function recordQuizAnswer(idx, val) { quizAnswers[idx] = val; }

function submitQuiz() {
  if (quizSubmitted) return;
  quizSubmitted = true;
  let correct = 0;
  QUIZ_QUESTIONS.forEach((q,i) => {
    const selected = quizAnswers[i];
    const labels = document.querySelectorAll(`input[name=qq${i}]`);
    labels.forEach(inp => {
      const lbl = inp.parentElement;
      if (inp.value === q.ans) lbl.classList.add('correct');
      else if (selected && inp.value === selected) lbl.classList.add('wrong');
    });
    document.getElementById('qexp-' + i).classList.add('show');
    if (selected === q.ans) correct++;
  });
  const pct = Math.round(correct / QUIZ_QUESTIONS.length * 100);
  const res = document.getElementById('quiz-result');
  res.style.display = 'block';
  res.innerHTML = `<div style="background:${pct>=80?'#d1fae5':pct>=60?'#fff7ed':'#fee2e2'};border-radius:12px;padding:24px;text-align:center;border:1px solid ${pct>=80?'var(--success)':pct>=60?'var(--warning)':'var(--danger)'}">
    <div style="font-size:2.5rem;font-weight:700;color:${pct>=80?'var(--success)':pct>=60?'var(--warning)':'var(--danger)'}">${pct}分</div>
    <div style="font-size:1.1rem;margin:8px 0">答对 ${correct} / ${QUIZ_QUESTIONS.length} 题</div>
    <div style="color:var(--text-muted)">${pct>=80?'优秀！继续保持！':pct>=60?'良好，还有提升空间':'需要加强复习，继续努力！'}</div>
    <button class="btn btn-outline" style="margin-top:16px" onclick="resetQuiz()">再来一次</button>
  </div>`;
  res.scrollIntoView({behavior:'smooth'});
  saveScore('基础词汇测试', correct, QUIZ_QUESTIONS.length);
  addWrongAnswers(QUIZ_QUESTIONS, quizAnswers, '基础词汇测试', i => i);
}

function resetQuiz() {
  quizAnswers = {};
  quizSubmitted = false;
  document.getElementById('quiz-area').style.display = 'none';
  document.getElementById('quiz-result').style.display = 'none';
  document.getElementById('quiz-start-area').style.display = 'block';
}

// ===== Mock Tests =====
// MOCK_TESTS is loaded from data/quiz.js
let currentMockType = null;
let currentMockSet = null;
let mockAnswers = {};
let mockSubmitted = false;

function showMockType(type) {
  currentMockType = type;
  currentMockSet = null;
  const typeNames = { writing:'写作专项', reading:'阅读专项', translation:'翻译专项', vocab:'词汇专项', comprehensive:'综合专项' };
  document.getElementById('mock-type-title').textContent = typeNames[type] || type;
  const sets = MOCK_TESTS[type] || [];
  document.getElementById('mock-set-list').innerHTML = sets.map((s,i) =>
    `<button class="mock-set-btn" onclick="startMockSet('${type}',${i})">${s.title}</button>`
  ).join('');
  document.getElementById('mock-type-area').style.display = 'block';
  document.getElementById('mock-practice-area').style.display = 'none';
  document.getElementById('mock-type-area').scrollIntoView({behavior:'smooth'});
}

function startMockSet(type, idx) {
  currentMockType = type;
  currentMockSet = idx;
  mockAnswers = {};
  mockSubmitted = false;
  const set = MOCK_TESTS[type][idx];
  const area = document.getElementById('mock-practice-area');
  area.style.display = 'block';
  area.innerHTML = renderMockSet(type, set);
  // start timer if enabled
  const timerCheck = document.getElementById('timer-enable-check');
  if (timerCheck && timerCheck.checked) {
    const dur = parseInt(document.getElementById('timer-duration-select').value) || 1800;
    const typeNames = { writing:'写作专项', reading:'阅读专项', translation:'翻译专项', vocab:'词汇专项', comprehensive:'综合专项' };
    startTimer(dur, (typeNames[type]||type) + ' · ' + set.title);
  }
  area.scrollIntoView({behavior:'smooth'});
}

function renderMockSet(type, set) {
  if (type === 'writing') return renderMockWriting(set);
  if (type === 'reading') return renderMockReading(set);
  if (type === 'translation') return renderMockTranslation(set);
  if (type === 'vocab') return renderMockVocab(set);
  if (type === 'comprehensive') return renderMockComprehensive(set);
  return '';
}

function renderMockWriting(set) {
  return `<div class="card">
    <h3>${set.title}</h3>
    <div style="background:#f0f9ff;border-radius:8px;padding:16px;margin-bottom:16px;border-left:4px solid var(--primary)">
      <p style="font-weight:600;margin-bottom:8px">题目要求：</p>
      <p>${set.prompt}</p>
    </div>
    <div style="background:#f0fdf4;border-radius:8px;padding:16px;margin-bottom:16px;border-left:4px solid var(--success)">
      <p style="font-weight:600;margin-bottom:8px">写作提示：</p>
      <p>${set.tips}</p>
    </div>
    <p style="font-weight:600;margin-bottom:8px">关键词组：</p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:16px">
      ${set.keyPhrases.map(p => `<span style="background:#dbeafe;color:#1e40af;padding:4px 10px;border-radius:20px;font-size:0.85rem">${p}</span>`).join('')}
    </div>
    <textarea id="mock-writing-input" style="width:100%;min-height:200px;padding:12px;border:1px solid var(--border);border-radius:8px;font-size:0.95rem;resize:vertical" placeholder="在此输入你的作文..." oninput="updateMockWordCount()"></textarea>
    <div style="display:flex;justify-content:space-between;align-items:center;margin-top:8px">
      <span id="mock-wc" style="color:var(--text-muted);font-size:0.85rem">字数：0 词</span>
      <button class="btn btn-primary" onclick="showMockWritingRef('${set.id}')">查看参考范文</button>
    </div>
    <div id="mock-writing-ref-${set.id}" style="display:none;margin-top:16px;background:#f8fafc;border-radius:8px;padding:16px;border:1px solid var(--border)">
      <p style="font-weight:600;margin-bottom:8px">参考范文：</p>
      <p style="line-height:1.8">${set.reference}</p>
    </div>
  </div>`;
}

function updateMockWordCount() {
  const text = (document.getElementById('mock-writing-input') || {}).value || '';
  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  const el = document.getElementById('mock-wc');
  if (el) { el.textContent = '字数：' + words + ' 词'; el.style.color = words<150?'var(--danger)':words>200?'var(--warning)':'var(--success)'; }
}

function showMockWritingRef(id) {
  const el = document.getElementById('mock-writing-ref-' + id);
  if (el) el.style.display = el.style.display === 'none' ? 'block' : 'none';
}

function renderMockReading(set) {
  return `<div class="card">
    <h3>${set.title}</h3>
    <div style="background:#f8fafc;border-radius:8px;padding:16px;margin-bottom:20px;border:1px solid var(--border);line-height:1.8">${set.passage}</div>
    ${set.questions.map((q,i) => `
    <div class="quiz-question" id="mock-rq-${i}">
      <p>${i+1}. ${q.q}</p>
      <div class="quiz-options">
        ${q.opts.map(opt => `<label><input type="radio" name="mrq${i}" value="${opt[0]}" onchange="mockAnswers[${i}]='${opt[0]}'"> ${opt}</label>`).join('')}
      </div>
      <div class="quiz-explanation" id="mock-rexp-${i}"><strong>解析：</strong>${q.exp}</div>
    </div>`).join('')}
    <div style="margin-top:20px;display:flex;gap:12px">
      <button class="btn btn-primary" onclick="submitMockReading()">提交答案</button>
      <button class="btn btn-outline" onclick="startMockSet('${currentMockType}',${currentMockSet})">重置</button>
    </div>
    <div id="mock-reading-result" style="display:none;margin-top:16px"></div>
  </div>`;
}

function submitMockReading() {
  if (mockSubmitted) return;
  mockSubmitted = true;
  stopTimer();
  const set = MOCK_TESTS[currentMockType][currentMockSet];
  let correct = 0;
  set.questions.forEach((q,i) => {
    const selected = mockAnswers[i];
    document.querySelectorAll(`input[name=mrq${i}]`).forEach(inp => {
      const lbl = inp.parentElement;
      if (inp.value === q.ans) lbl.classList.add('correct');
      else if (selected && inp.value === selected) lbl.classList.add('wrong');
    });
    document.getElementById('mock-rexp-' + i).classList.add('show');
    if (selected === q.ans) correct++;
  });
  const pct = Math.round(correct / set.questions.length * 100);
  const res = document.getElementById('mock-reading-result');
  res.style.display = 'block';
  res.innerHTML = `<div style="background:${pct>=80?'#d1fae5':'#fff7ed'};border-radius:8px;padding:16px;text-align:center">
    答对 <strong>${correct}/${set.questions.length}</strong> 题 · ${pct}分 ${pct>=80?'优秀！':'继续加油！'}
  </div>`;
  saveScore('阅读·' + set.title, correct, set.questions.length);
  addWrongAnswers(set.questions, mockAnswers, '阅读·' + set.title, i => i);
}

function renderMockTranslation(set) {
  return `<div class="card">
    <h3>${set.title}</h3>
    <div style="background:#f0f9ff;border-radius:8px;padding:16px;margin-bottom:16px;border-left:4px solid var(--primary)">
      <p style="font-weight:600;margin-bottom:8px">原文（中译英）：</p>
      <p style="line-height:1.8">${set.original}</p>
    </div>
    <p style="font-weight:600;margin-bottom:8px">关键词组：</p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:16px">
      ${set.keypoints.map(p => `<span style="background:#dbeafe;color:#1e40af;padding:4px 10px;border-radius:20px;font-size:0.85rem">${p}</span>`).join('')}
    </div>
    <textarea style="width:100%;min-height:160px;padding:12px;border:1px solid var(--border);border-radius:8px;font-size:0.95rem;resize:vertical" placeholder="在此输入你的译文..."></textarea>
    <div style="margin-top:12px">
      <button class="btn btn-primary" onclick="this.nextElementSibling.style.display='block';this.style.display='none'">查看参考译文</button>
      <div style="display:none;background:#f0fdf4;border-radius:8px;padding:16px;border-left:4px solid var(--success)">
        <p style="font-weight:600;margin-bottom:8px">参考译文：</p>
        <p style="line-height:1.8">${set.reference}</p>
      </div>
    </div>
  </div>`;
}

function renderMockVocab(set) {
  return `<div class="card">
    <h3>${set.title}</h3>
    ${set.questions.map((q,i) => `
    <div class="quiz-question">
      <p>${i+1}. ${q.sentence}</p>
      <div class="quiz-options">
        ${q.opts.map(opt => `<label><input type="radio" name="mvq${i}" value="${opt[0]}" onchange="mockAnswers[${i}]='${opt[0]}'"> ${opt}</label>`).join('')}
      </div>
      <div class="quiz-explanation" id="mock-vexp-${i}"><strong>解析：</strong>${q.exp}</div>
    </div>`).join('')}
    <div style="margin-top:20px;display:flex;gap:12px">
      <button class="btn btn-primary" onclick="submitMockVocab()">提交答案</button>
      <button class="btn btn-outline" onclick="startMockSet('${currentMockType}',${currentMockSet})">重置</button>
    </div>
    <div id="mock-vocab-result" style="display:none;margin-top:16px"></div>
  </div>`;
}

function submitMockVocab() {
  if (mockSubmitted) return;
  mockSubmitted = true;
  stopTimer();
  const set = MOCK_TESTS[currentMockType][currentMockSet];
  let correct = 0;
  set.questions.forEach((q,i) => {
    const selected = mockAnswers[i];
    document.querySelectorAll(`input[name=mvq${i}]`).forEach(inp => {
      const lbl = inp.parentElement;
      if (inp.value === q.ans) lbl.classList.add('correct');
      else if (selected && inp.value === selected) lbl.classList.add('wrong');
    });
    document.getElementById('mock-vexp-' + i).classList.add('show');
    if (selected === q.ans) correct++;
  });
  const pct = Math.round(correct / set.questions.length * 100);
  const res = document.getElementById('mock-vocab-result');
  res.style.display = 'block';
  res.innerHTML = `<div style="background:${pct>=80?'#d1fae5':'#fff7ed'};border-radius:8px;padding:16px;text-align:center">
    答对 <strong>${correct}/${set.questions.length}</strong> 题 · ${pct}分 ${pct>=80?'优秀！':'继续加油！'}
  </div>`;
  saveScore('词汇·' + set.title, correct, set.questions.length);
  addWrongAnswers(set.questions, mockAnswers, '词汇·' + set.title, i => i);
}

function renderMockComprehensive(set) {
  const s = set.sections;
  return `<div class="card">
    <h3>${set.title}</h3>
    <div style="background:#f0f9ff;border-radius:8px;padding:16px;margin-bottom:20px;border-left:4px solid var(--primary)">
      <h4 style="margin-bottom:8px">第一部分：${s.writing.title}</h4>
      <p>${s.writing.prompt}</p>
      <p style="color:var(--text-muted);font-size:0.85rem;margin-top:8px">${s.writing.tips}</p>
      <textarea style="width:100%;min-height:150px;padding:12px;border:1px solid var(--border);border-radius:8px;font-size:0.95rem;resize:vertical;margin-top:10px" placeholder="在此输入作文..."></textarea>
    </div>
    <div style="background:#f8fafc;border-radius:8px;padding:16px;margin-bottom:20px;border:1px solid var(--border)">
      <h4 style="margin-bottom:12px">第二部分：阅读理解</h4>
      <p style="line-height:1.8;margin-bottom:16px">${s.reading.passage}</p>
      ${s.reading.questions.map((q,i) => `
      <div class="quiz-question">
        <p>${i+1}. ${q.q}</p>
        <div class="quiz-options">
          ${q.opts.map(opt => `<label><input type="radio" name="cmpq${i}" value="${opt[0]}" onchange="mockAnswers['r'+${i}]='${opt[0]}'"> ${opt}</label>`).join('')}
        </div>
        <div class="quiz-explanation" id="cmp-rexp-${i}"><strong>解析：</strong>${q.exp}</div>
      </div>`).join('')}
    </div>
    <div style="background:#f0fdf4;border-radius:8px;padding:16px;margin-bottom:20px;border-left:4px solid var(--success)">
      <h4 style="margin-bottom:8px">第三部分：翻译</h4>
      <p style="line-height:1.8;margin-bottom:12px">${s.translation.original}</p>
      <div style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:12px">
        ${s.translation.keypoints.map(p => `<span style="background:#dbeafe;color:#1e40af;padding:3px 8px;border-radius:16px;font-size:0.82rem">${p}</span>`).join('')}
      </div>
      <textarea style="width:100%;min-height:100px;padding:12px;border:1px solid var(--border);border-radius:8px;font-size:0.95rem;resize:vertical" placeholder="在此输入译文..."></textarea>
      <button class="btn btn-sm btn-outline" style="margin-top:8px" onclick="this.nextElementSibling.style.display='block';this.style.display='none'">查看参考译文</button>
      <div style="display:none;margin-top:8px;color:var(--text-muted);font-size:0.88rem;line-height:1.7">${s.translation.reference}</div>
    </div>
    <div style="background:#fefce8;border-radius:8px;padding:16px;margin-bottom:20px;border-left:4px solid var(--warning)">
      <h4 style="margin-bottom:12px">第四部分：词汇</h4>
      ${s.vocab.map((q,i) => `
      <div class="quiz-question">
        <p>${i+1}. ${q.sentence}</p>
        <div class="quiz-options">
          ${q.opts.map(opt => `<label><input type="radio" name="cmpvq${i}" value="${opt[0]}" onchange="mockAnswers['v'+${i}]='${opt[0]}'"> ${opt}</label>`).join('')}
        </div>
        <div class="quiz-explanation" id="cmp-vexp-${i}"><strong>解析：</strong>${q.exp}</div>
      </div>`).join('')}
    </div>
    <div style="margin-top:20px;display:flex;gap:12px">
      <button class="btn btn-primary" onclick="submitMockComprehensive()">提交答案</button>
      <button class="btn btn-outline" onclick="startMockSet('${currentMockType}',${currentMockSet})">重置</button>
    </div>
    <div id="mock-comp-result" style="display:none;margin-top:16px"></div>
  </div>`;
}

function submitMockComprehensive() {
  if (mockSubmitted) return;
  mockSubmitted = true;
  const set = MOCK_TESTS[currentMockType][currentMockSet];
  let correct = 0, total = 0;
  set.sections.reading.questions.forEach((q,i) => {
    const selected = mockAnswers['r'+i];
    document.querySelectorAll(`input[name=cmpq${i}]`).forEach(inp => {
      const lbl = inp.parentElement;
      if (inp.value === q.ans) lbl.classList.add('correct');
      else if (selected && inp.value === selected) lbl.classList.add('wrong');
    });
    document.getElementById('cmp-rexp-' + i).classList.add('show');
    if (selected === q.ans) correct++;
    total++;
  });
  set.sections.vocab.forEach((q,i) => {
    const selected = mockAnswers['v'+i];
    document.querySelectorAll(`input[name=cmpvq${i}]`).forEach(inp => {
      const lbl = inp.parentElement;
      if (inp.value === q.ans) lbl.classList.add('correct');
      else if (selected && inp.value === selected) lbl.classList.add('wrong');
    });
    document.getElementById('cmp-vexp-' + i).classList.add('show');
    if (selected === q.ans) correct++;
    total++;
  });
  const pct = Math.round(correct / total * 100);
  const res = document.getElementById('mock-comp-result');
  res.style.display = 'block';
  res.innerHTML = `<div style="background:${pct>=80?'#d1fae5':'#fff7ed'};border-radius:8px;padding:16px;text-align:center">
    客观题答对 <strong>${correct}/${total}</strong> 题 · ${pct}分。写作和翻译请对照参考答案自评。
  </div>`;
  stopTimer();
  saveScore('综合·' + set.title, correct, total);
  addWrongAnswers(set.sections.reading.questions, mockAnswers, '综合阅读·' + set.title, i => 'r'+i);
  addWrongAnswers(set.sections.vocab, mockAnswers, '综合词汇·' + set.title, i => 'v'+i);
}

// ===== Template Mounting =====
function mountTemplates() {
  ['home','outline','writing','listening','reading','translation','vocab','quiz'].forEach(name => {
    const tpl = document.getElementById('tpl-' + name);
    const el  = document.getElementById('page-' + name);
    if (tpl && el) el.innerHTML = tpl.textContent;
  });
}

// ===== Reading (Real Exams) =====
let currentReadingExam = null;
let currentReadingSection = 'cloze';
let readingClozeAnswers = {};

function initReadingPage() {
  const sel = document.getElementById('reading-exam-selector');
  if (!sel || sel.children.length > 0) return;
  READING_EXAMS.forEach((exam, i) => {
    const btn = document.createElement('button');
    btn.className = 'btn btn-outline btn-sm';
    btn.textContent = exam.year + exam.period + ' ' + exam.set;
    btn.onclick = () => selectReadingExam(i);
    sel.appendChild(btn);
  });
}

function selectReadingExam(idx) {
  currentReadingExam = idx;
  readingClozeAnswers = {};
  const btns = document.querySelectorAll('#reading-exam-selector button');
  btns.forEach((b, i) => b.className = 'btn btn-sm ' + (i === idx ? 'btn-primary' : 'btn-outline'));
  const tabs = document.getElementById('reading-section-tabs');
  tabs.style.display = 'flex';
  tabs.style.gap = '8px';
  // Show/hide Section B tab based on data availability
  const exam = READING_EXAMS[idx];
  const tabB = document.getElementById('rtab-sectionb');
  if (tabB) tabB.style.display = exam.sectionB ? '' : 'none';
  showReadingSection('cloze');
}

function showReadingSection(section) {
  currentReadingSection = section;
  ['cloze','sectionb','reading'].forEach(s => {
    const tab = document.getElementById('rtab-' + s);
    if (tab) tab.className = 'btn btn-sm ' + (s === section ? 'btn-primary' : 'btn-outline');
  });
  const exam = READING_EXAMS[currentReadingExam];
  const content = document.getElementById('reading-exam-content');
  if (section === 'cloze') {
    renderReadingCloze(exam, content);
  } else if (section === 'sectionb') {
    renderSectionB(exam, content);
  } else {
    renderReadingPassages(exam, content);
  }
}

function renderReadingCloze(exam, container) {
  const wb = exam.cloze.wordbank;
  const passage = exam.cloze.passage;
  // Detect blank markers: either [__26__] format or inline numbers 26-35 surrounded by spaces/word boundaries
  let html = passage;
  // First try explicit markers
  if (/\[__\d+__\]/.test(html)) {
    html = html.replace(/\[__(\d+)__\]/g, (m, n) =>
      `<span class="cloze-blank" data-num="${n}" data-filled="" onclick="fillRealCloze(this)">[___${n}___]</span>`
    );
  } else {
    // Inline number format: space + 26-35 + space (not followed by % or preceded by digit)
    html = html.replace(/(?<![0-9])\b(2[6-9]|3[0-5])\b(?![%0-9])/g, (m, n) =>
      `<span class="cloze-blank" data-num="${n}" data-filled="" onclick="fillRealCloze(this)">[___${n}___]</span>`
    );
  }
  container.innerHTML = `
    <div style="background:#f8fafc;border-radius:8px;padding:16px;margin-bottom:16px">
      <p style="font-weight:600;margin-bottom:8px">词库（15选10）：</p>
      <div id="real-cloze-wordbank" style="display:flex;flex-wrap:wrap;gap:8px">
        ${wb.map(w => `<span class="tag tag-blue" style="cursor:pointer;font-size:0.9rem" onclick="selectRealClozeWord(this,'${w}')">${w}</span>`).join('')}
      </div>
    </div>
    <div style="line-height:2.2;font-size:0.95rem;background:#fff;border-radius:8px;padding:16px;border:1px solid var(--border)">${html}</div>
    <div style="margin-top:16px;display:flex;gap:12px">
      <button class="btn btn-primary btn-sm" onclick="checkRealCloze()">✓ 检查答案</button>
      <button class="btn btn-outline btn-sm" onclick="resetRealCloze()">↺ 重置</button>
    </div>
    <div id="real-cloze-result" style="margin-top:12px;display:none"></div>`;
}

let selectedRealClozeWord = null;

function selectRealClozeWord(el, word) {
  document.querySelectorAll('#real-cloze-wordbank span').forEach(s => s.style.outline = '');
  el.style.outline = '2px solid var(--primary)';
  selectedRealClozeWord = word;
}

function fillRealCloze(blank) {
  if (!selectedRealClozeWord) { alert('请先从词库中点击选择一个词'); return; }
  blank.textContent = selectedRealClozeWord;
  blank.dataset.filled = selectedRealClozeWord;
  blank.style.background = '#dbeafe';
  blank.style.padding = '2px 8px';
  blank.style.borderRadius = '4px';
  selectedRealClozeWord = null;
  document.querySelectorAll('#real-cloze-wordbank span').forEach(s => s.style.outline = '');
}

function checkRealCloze() {
  const blanks = document.querySelectorAll('.cloze-blank[data-num]');
  const exam = READING_EXAMS[currentReadingExam];
  const ans = exam.answers && exam.answers.cloze;
  let correct = 0, total = 0;
  blanks.forEach(b => {
    const num = b.dataset.num;
    const filled = b.dataset.filled;
    if (!filled) return;
    total++;
    if (ans && ans[num]) {
      const isCorrect = filled.charAt(0).toUpperCase() === ans[num].toUpperCase();
      b.style.background = isCorrect ? '#d1fae5' : '#fee2e2';
      b.style.color = isCorrect ? '#065f46' : '#991b1b';
      if (isCorrect) {
        correct++;
      } else {
        // Find the correct word from wordbank
        const wb = exam.cloze.wordbank;
        const correctWord = wb.find(w => w.charAt(0) === ans[num]);
        if (correctWord) b.title = '正确答案：' + correctWord;
      }
    }
  });
  const res = document.getElementById('real-cloze-result');
  res.style.display = 'block';
  if (ans) {
    res.innerHTML = `<div style="padding:12px;border-radius:8px;background:${correct===total&&total>0?'#d1fae5':'#f0f9ff'};border:1px solid var(--primary)">
      已填写 ${total}/10 个空格，答对 <strong>${correct}</strong> 个。
      ${total < 10 ? '<span style="color:var(--text-muted)">（未填写的空格不计分）</span>' : ''}
    </div>`;
  } else {
    res.innerHTML = '<div style="padding:12px;border-radius:8px;background:#f0f9ff;border:1px solid var(--primary)">已填写 ' + total + '/10 个空格。（该套题暂无答案数据）</div>';
  }
}

function resetRealCloze() {
  document.querySelectorAll('.cloze-blank[data-num]').forEach(b => {
    b.textContent = '[___' + b.dataset.num + '___]';
    b.style.background = '';
    b.style.padding = '';
    b.style.borderRadius = '';
    b.dataset.filled = '';
  });
  document.getElementById('real-cloze-result').style.display = 'none';
  selectedRealClozeWord = null;
  document.querySelectorAll('#real-cloze-wordbank span').forEach(s => s.style.outline = '');
}

function renderSectionB(exam, container) {
  if (!exam.sectionB) {
    container.innerHTML = '<p class="text-muted">该套题暂无 Section B 数据。</p>';
    return;
  }
  const sb = exam.sectionB;
  // Render article paragraphs — split on paragraph letter markers like "A. " "B. " etc.
  let articleBuilt = '';
  const parts = sb.article.replace(/([A-N])\. /g, '\x00$1\x00').split('\x00');
  for (let i = 0; i < parts.length; i++) {
    if (/^[A-N]$/.test(parts[i]) && i + 1 < parts.length) {
      articleBuilt += `<p><strong style="color:var(--primary)">[${parts[i]}]</strong> ${parts[i+1]}</p>`;
      i++;
    } else if (parts[i].trim()) {
      articleBuilt += `<p>${parts[i]}</p>`;
    }
  }

  // Detect how many paragraph letters exist in this article
  const paraLetters = [...new Set([...sb.article.matchAll(/\b([A-P])\. /g)].map(m => m[1]))].sort();
  const optionsHtml = `<option value="">— 选择段落 —</option>` +
    paraLetters.map(l => `<option value="${l}">${l}</option>`).join('');

  const stmtsHtml = sb.statements.map(s => `
    <div class="quiz-question sb-row" data-num="${s.num}" style="display:flex;align-items:flex-start;gap:10px;margin-bottom:10px;padding:8px 10px;border-radius:6px;background:#f8fafc">
      <select name="sb_${s.num}" class="sb-select" style="flex-shrink:0;width:120px;padding:4px 6px;border:1px solid #cbd5e1;border-radius:6px;font-size:0.9rem;cursor:pointer">
        ${optionsHtml}
      </select>
      <span style="font-size:0.92rem;line-height:1.6">${s.num}. ${s.statement}</span>
    </div>`).join('');

  container.innerHTML = `
    <div style="background:#f0f9ff;border-radius:8px;padding:4px 12px;margin-bottom:8px;font-size:0.85rem;color:var(--text-muted)">
      <strong>说明：</strong>阅读文章，判断每条陈述信息来自哪个段落（A-N），每段可多次使用。
    </div>
    <div style="background:#f8fafc;border-radius:8px;padding:16px;margin-bottom:16px;max-height:380px;overflow-y:auto;line-height:1.9;font-size:0.92rem">
      <h4 style="margin-bottom:12px">${sb.title}</h4>
      ${articleBuilt}
    </div>
    <div>${stmtsHtml}</div>
    <div style="margin-top:16px">
      <button class="btn btn-primary btn-sm" onclick="checkSectionB()">✓ 核对答案</button>
      <button class="btn btn-outline btn-sm" onclick="resetSectionB()" style="margin-left:8px">↺ 重置答案</button>
      <div id="secb-result" style="display:none;margin-top:10px"></div>
    </div>`;
}

function checkSectionB() {
  const exam = READING_EXAMS[currentReadingExam];
  const ans = exam.answers && exam.answers.sectionB;
  let correct = 0, total = 0;
  document.querySelectorAll('.sb-row').forEach(row => {
    const sel = row.querySelector('.sb-select');
    if (!sel || !sel.value) return;
    const n = parseInt(row.dataset.num);
    total++;
    const isCorrect = ans && ans[n] && sel.value === ans[n];
    row.style.background = isCorrect ? '#d1fae5' : '#fee2e2';
    if (isCorrect) {
      correct++;
      const old = row.querySelector('.ans-hint');
      if (old) old.remove();
    } else if (ans && ans[n]) {
      let hint = row.querySelector('.ans-hint');
      if (!hint) {
        hint = document.createElement('span');
        hint.className = 'ans-hint';
        hint.style.cssText = 'color:#065f46;font-size:0.82em;white-space:nowrap';
        sel.insertAdjacentElement('afterend', hint);
      }
      hint.textContent = '✓ ' + ans[n];
    }
  });
  const res = document.getElementById('secb-result');
  res.style.display = 'block';
  if (ans) {
    res.innerHTML = `<div style="padding:10px;border-radius:8px;background:${correct===total&&total>0?'#d1fae5':'#f0f9ff'};border:1px solid var(--primary)">
      已作答 ${total}/10 题，答对 <strong>${correct}</strong> 题。</div>`;
  } else {
    res.innerHTML = '<div style="padding:10px;border-radius:8px;background:#f0f9ff;border:1px solid var(--primary)">已作答 ' + total + '/10 题。（该套题暂无答案数据）</div>';
  }
}

function resetSectionB() {
  document.querySelectorAll('.sb-select').forEach(sel => sel.value = '');
  document.querySelectorAll('.sb-row').forEach(row => {
    row.style.background = '#f8fafc';
    const hint = row.querySelector('.ans-hint');
    if (hint) hint.remove();
  });
  const res = document.getElementById('secb-result');
  if (res) res.style.display = 'none';
}

function renderReadingPassages(exam, container) {
  const r = exam.reading;
  const ans = exam.answers && exam.answers.reading;

  function renderPassage(title, passage, questions) {
    const qs = questions.map(q => `
      <div class="quiz-question" id="rq-row-${q.num}">
        <p>${q.num}. ${q.q}</p>
        <div class="quiz-options">
          ${q.opts.map(o => `<label><input type="radio" name="rq_${q.num}" value="${o[0]}"> ${o}</label>`).join('')}
        </div>
      </div>`).join('');
    return `
      <div style="margin-bottom:24px">
        <h4 style="margin-bottom:12px">${title}</h4>
        <div style="background:#f8fafc;border-radius:8px;padding:16px;margin-bottom:16px;line-height:1.9;font-size:0.92rem">${passage}</div>
        ${qs}
      </div>`;
  }

  container.innerHTML = renderPassage('Passage One', r.p1, r.p1Questions)
    + '<hr class="divider">'
    + renderPassage('Passage Two', r.p2, r.p2Questions)
    + `<div style="margin-top:16px">
        <button class="btn btn-primary btn-sm" onclick="checkSectionC()">✓ 核对答案</button>
        <button class="btn btn-outline btn-sm" onclick="resetSectionC()" style="margin-left:8px">↺ 重置答案</button>
        <div id="secc-result" style="display:none;margin-top:10px"></div>
       </div>`;
}

function checkSectionC() {
  const exam = READING_EXAMS[currentReadingExam];
  const ans = exam.answers && exam.answers.reading;
  let correct = 0, total = 0;
  for (let n = 46; n <= 55; n++) {
    const checked = document.querySelector(`[name="rq_${n}"]:checked`);
    if (!checked) continue;
    total++;
    const row = document.getElementById('rq-row-' + n);
    if (ans && ans[n]) {
      const isCorrect = checked.value === ans[n];
      if (row) {
        row.style.background = isCorrect ? '#d1fae5' : '#fee2e2';
        row.style.borderRadius = '6px';
        row.style.padding = '8px';
      }
      if (isCorrect) correct++;
      else {
        const hint = (row && row.querySelector('.ans-hint')) || document.createElement('span');
        hint.className = 'ans-hint';
        hint.style.cssText = 'color:#065f46;font-size:0.85em;margin-left:8px;display:block';
        hint.textContent = '正确答案：' + ans[n];
        if (row && !row.querySelector('.ans-hint')) row.appendChild(hint);
      }
    }
  }
  const res = document.getElementById('secc-result');
  res.style.display = 'block';
  if (ans) {
    res.innerHTML = `<div style="padding:10px;border-radius:8px;background:${correct===total&&total>0?'#d1fae5':'#f0f9ff'};border:1px solid var(--primary)">
      已作答 ${total}/10 题，答对 <strong>${correct}</strong> 题。</div>`;
  } else {
    res.innerHTML = '<div style="padding:10px;border-radius:8px;background:#f0f9ff;border:1px solid var(--primary)">已作答 ' + total + '/10 题。（该套题暂无答案数据）</div>';
  }
}

function resetSectionC() {
  for (let n = 46; n <= 55; n++) {
    document.querySelectorAll(`[name="rq_${n}"]`).forEach(r => r.checked = false);
    const row = document.getElementById('rq-row-' + n);
    if (row) {
      row.style.background = '';
      row.style.padding = '';
      const hint = row.querySelector('.ans-hint');
      if (hint) hint.remove();
    }
  }
  const res = document.getElementById('secc-result');
  if (res) res.style.display = 'none';
}

// ===== Translation (Real Exams) =====
function initTranslationPage() {
  const sel = document.getElementById('trans-exam-selector');
  if (!sel || sel.children.length > 0) return;
  TRANSLATION_DATA.forEach((exam, i) => {
    const btn = document.createElement('button');
    btn.className = 'btn btn-outline btn-sm';
    btn.textContent = exam.year + exam.period + ' ' + exam.set;
    btn.onclick = () => selectTransExam(i);
    sel.appendChild(btn);
  });
}

function selectTransExam(idx) {
  const btns = document.querySelectorAll('#trans-exam-selector button');
  btns.forEach((b, i) => b.className = 'btn btn-sm ' + (i === idx ? 'btn-primary' : 'btn-outline'));
  const exam = TRANSLATION_DATA[idx];
  const content = document.getElementById('trans-exam-content');
  content.innerHTML = `
    <div style="background:#f0f9ff;border-radius:8px;padding:16px;margin-bottom:16px;border-left:4px solid var(--primary)">
      <p style="font-weight:600;margin-bottom:8px">原文（汉译英）：</p>
      <p style="line-height:1.8">${exam.original}</p>
    </div>
    <p style="font-weight:600;margin-bottom:8px">关键词组：</p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:16px">
      ${exam.keypoints.map(p => `<span style="background:#dbeafe;color:#1e40af;padding:4px 10px;border-radius:20px;font-size:0.85rem">${p}</span>`).join('')}
    </div>
    <textarea id="trans-input-${idx}" style="width:100%;min-height:160px;padding:12px;border:1px solid var(--border);border-radius:8px;font-size:0.95rem;resize:vertical" placeholder="在此输入你的译文..."></textarea>
    <div style="margin-top:12px">
      <button class="btn btn-primary" onclick="this.nextElementSibling.style.display='block';this.style.display='none'">查看参考译文</button>
      <div style="display:none;background:#f0fdf4;border-radius:8px;padding:16px;border-left:4px solid var(--success)">
        <p style="font-weight:600;margin-bottom:8px">参考译文：</p>
        <p style="line-height:1.8">${exam.reference}</p>
      </div>
    </div>`;
}

// ===== Listening =====
let currentListeningExam = null;
let currentListeningSection = 'secA';

function initListeningPage() {
  const container = document.getElementById('listening-exam-selector');
  if (!container || container.querySelector('button')) return;
  let html = '';
  const years = [...new Set(LISTENING_EXAMS.map(e => e.year))];
  years.forEach(year => {
    html += '<div style="width:100%;font-weight:600;color:var(--primary);margin-top:8px">' + year + '年</div>';
    LISTENING_EXAMS.forEach((exam, i) => {
      if (exam.year !== year) return;
      html += `<button class="btn btn-outline btn-sm" onclick="selectListeningExam(${i})">${exam.period} · ${exam.set}</button>`;
    });
  });
  container.innerHTML = html;
}

function selectListeningExam(idx) {
  currentListeningExam = idx;
  const exam = LISTENING_EXAMS[idx];
  document.querySelectorAll('#listening-exam-selector button').forEach((b, i) => {
    const examIdx = parseInt(b.getAttribute('onclick').match(/\d+/)[0]);
    b.className = 'btn btn-sm ' + (examIdx === idx ? 'btn-primary' : 'btn-outline');
  });
  // Audio player
  const audioEl = document.getElementById('listening-audio');
  const audioWrap = document.getElementById('listening-audio-player');
  const audioNote = document.getElementById('listening-audio-note');
  audioEl.src = exam.audio;
  audioWrap.style.display = 'block';
  // Note if 第2/3套 share the same audio
  if (exam.set === '第二套' || exam.set === '第三套') {
    audioNote.textContent = '注：第二套与第三套共用同一音频，选项顺序可能略有不同。';
  } else {
    audioNote.textContent = '';
  }
  // Tabs
  const tabs = document.getElementById('listening-section-tabs');
  tabs.style.display = 'flex';
  showListeningSection('secA');
}

function showListeningSection(section) {
  currentListeningSection = section;
  ['secA', 'secB', 'secC'].forEach(s => {
    const tab = document.getElementById('ltab-' + s);
    if (tab) tab.className = 'btn btn-sm ' + (s === section ? 'btn-primary' : 'btn-outline');
  });
  renderListeningSection(LISTENING_EXAMS[currentListeningExam], section);
}

function renderListeningSection(exam, section) {
  const container = document.getElementById('listening-exam-content');
  const questions = exam[section] || [];
  const ans = exam.answers;

  const SECTION_INFO = {
    secA: { title: 'Section A 短对话（1-4题）', desc: '听4段短对话，每段后有一个问题，选择最佳答案。' },
    secB: { title: 'Section B 长对话（5-15题）', desc: '听2段长对话，每段后有若干问题，选择最佳答案。' },
    secC: { title: 'Section C 听力篇章（16-25题）', desc: '听3段短文或讲座，每段后有若干问题，选择最佳答案。' },
  };
  const info = SECTION_INFO[section];

  if (!questions.length) {
    container.innerHTML = '<p class="text-muted">该部分暂无题目数据。</p>';
    return;
  }

  const qHtml = questions.map(q => `
    <div class="quiz-question" id="lq-row-${q.num}">
      <p style="font-weight:500;margin-bottom:8px">${q.num}. <em>（播放音频作答）</em></p>
      <div class="quiz-options" style="display:grid;grid-template-columns:1fr 1fr;gap:4px 16px">
        ${q.opts.map(o => `<label style="cursor:pointer"><input type="radio" name="lq_${q.num}" value="${o.charAt(0)}"> ${o}</label>`).join('')}
      </div>
    </div>`).join('');

  container.innerHTML = `
    <div style="background:#f0f9ff;border-radius:8px;padding:8px 14px;margin-bottom:14px;font-size:0.85rem;color:var(--text-muted)">
      <strong>${info.title}</strong>　${info.desc}
    </div>
    ${qHtml}
    <div style="margin-top:16px;display:flex;gap:10px;align-items:center">
      <button class="btn btn-primary btn-sm" onclick="checkListening()">✓ 核对答案</button>
      <button class="btn btn-outline btn-sm" onclick="resetListening()">↺ 重置</button>
      <div id="listening-result" style="display:none"></div>
    </div>`;
}

function checkListening() {
  const exam = LISTENING_EXAMS[currentListeningExam];
  const ans = exam.answers;
  const section = currentListeningSection;
  const questions = exam[section] || [];
  let correct = 0, total = 0;
  questions.forEach(q => {
    const checked = document.querySelector(`[name="lq_${q.num}"]:checked`);
    if (!checked) return;
    total++;
    const row = document.getElementById('lq-row-' + q.num);
    if (ans && ans[q.num]) {
      const isCorrect = checked.value === ans[q.num];
      if (row) {
        row.style.background = isCorrect ? '#d1fae5' : '#fee2e2';
        row.style.borderRadius = '6px';
        row.style.padding = '8px';
      }
      if (isCorrect) correct++;
      else {
        const hint = (row && row.querySelector('.ans-hint')) || document.createElement('span');
        hint.className = 'ans-hint';
        hint.style.cssText = 'color:#065f46;font-size:0.85em;margin-left:6px';
        hint.textContent = '正确：' + ans[q.num];
        if (row && !row.querySelector('.ans-hint')) row.querySelector('p').appendChild(hint);
      }
    }
  });
  const res = document.getElementById('listening-result');
  res.style.display = 'inline-block';
  res.innerHTML = ans
    ? `<span style="padding:6px 12px;border-radius:6px;background:${correct===total&&total>0?'#d1fae5':'#f0f9ff'};border:1px solid var(--primary)">已作答 ${total}/${questions.length} 题，答对 <strong>${correct}</strong> 题</span>`
    : `<span style="padding:6px 12px;border-radius:6px;background:#f0f9ff;border:1px solid var(--primary)">已作答 ${total}/${questions.length} 题（暂无答案数据）</span>`;
}

function resetListening() {
  const exam = LISTENING_EXAMS[currentListeningExam];
  (exam[currentListeningSection] || []).forEach(q => {
    document.querySelectorAll(`[name="lq_${q.num}"]`).forEach(r => r.checked = false);
    const row = document.getElementById('lq-row-' + q.num);
    if (row) {
      row.style.background = '';
      row.style.padding = '';
      const hint = row.querySelector('.ans-hint');
      if (hint) hint.remove();
    }
  });
  const res = document.getElementById('listening-result');
  if (res) res.style.display = 'none';
}

// ===== Init =====
mountTemplates();
drawCards();
updateVocabStats();
initReadingPage();
initTranslationPage();
initWritingPage();
initListeningPage();

