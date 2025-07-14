// Firebase configuration - REPLACE WITH YOUR ACTUAL CONFIG
const firebaseConfig = {
    apiKey: "AIzaSyYOUR_API_KEY",
    authDomain: "your-project-id.firebaseapp.com",
    projectId: "musicidrobloxadmin",
    storageBucket: "your-project-id.appspot.com",
    messagingSenderId: "123456789012",
    appId: "1:123456789012:web:abcdef1234567890"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// List of admin emails (replace with your admin emails)
const ADMIN_EMAILS = ["your.admin@email.com", "another.admin@email.com"];

// Music database
const musicDatabase = [
    { id: 'code1', title: 'គូរគ្រង', artist: 'Zento', code: '84305116140540' },
    { id: 'code2', title: 'ចម្លើយស្នែហ៍', artist: 'Zento', code: '92588836020828' },
    { id: 'code3', title: 'អធិដ្ឋានស្នែហ៍', artist: 'Zento', code: '82330278156288' },
    { id: 'code4', title: 'Giorno\'s Theme', artist: 'Zento', code: '90270663976140' },
    { id: 'code5', title: 'VANNDA-អត្មា', artist: 'Zed', code: '90873052017024' },
    { id: 'code6', title: 'ចងចាំ', artist: 'Davit (Live Band Cover)', code: '74514494857338' },
    { id: 'code7', title: 'លួង', artist: 'Mut Phearin & YCN Tomie', code: '131431561522082' },
    { id: 'code8', title: 'នាងយំ', artist: 'Live Band Cover - Davit', code: '122544451365771' },
    { id: 'code9', title: 'somtus 10000', artist: '', code: '122529694819238' },
    { id: 'code10', title: 'tree sne', artist: '', code: '76587252793954' },
    { id: 'code11', title: 'my only one', artist: '', code: '99268099461896' },
    { id: 'code12', title: 'ธีรญบาชิรบทดี', artist: '', code: '117233660353801' },
    { id: 'code13', title: 'รีหมูรบูริกเห', artist: '', code: '138294988289756' },
    { id: 'code14', title: 'bẻr pel nis b mean nak tmey oun sby jit te', artist: '', code: '71379169121394' },
    { id: 'code15', title: 'อย่าทำอย่างนี้ไม่', artist: '', code: '106705287989620' },
    { id: 'code16', title: '366day', artist: '', code: '109418353561448' },
    { id: 'code17', title: 'เปะผู้พ?:กู)', artist: '', code: '75669508918999' },
    { id: 'code18', title: 'DuSơnLuyến', artist: '', code: '136377493310438' },
    { id: 'code19', title: '阿几', artist: '', code: '103521802666694' },
    { id: 'code20', title: 'Tam Bái Hồng Trần Lương', artist: '', code: '129458898801883' },
    { id: 'code21', title: '刚好遇见你', artist: '', code: '91606369194846' },
    { id: 'code22', title: 'ក្រោមពន្លឺព្រះអាទិត្យគ្មានអ្វីថ្មី', artist: 'STEEZY', code: '139726188372414' },
    { id: 'code23', title: 'THE OLD ME (ជីវិតអ្នកដឹកម្ហូប)', artist: 'OG GOLDEN', code: '126541783653109' },
    { id: 'code24', title: 'komarey 25 chnam', artist: '', code: '114635732694106' },
    { id: 'code25', title: 'KAMAZ', artist: 'ToRo', code: '104098229311705' },
    { id: 'code26', title: 'ចំណងដៃ', artist: 'NPN', code: '133382907953940' },
    { id: 'code27', title: 'ឥឡូវខ្ញុំឡូយ', artist: 'OG Golden', code: '119597955669098' },
    { id: 'code28', title: 'ពងទា Parody', artist: 'Vin Vitou family', code: '126537290643524' },
    { id: 'code29', title: '', artist: 'YUNG JX', code: '133211166913185' },
    { id: 'code30', title: 'ZADES DUMA DUMA', artist: '', code: '132918661174913' },
    { id: 'code31', title: 'Remix', artist: '', code: '80543855580206' },
    { id: 'code32', title: 'RemixChinese', artist: '', code: '107009063035868' },
    { id: 'code33', title: 'FREE MY MIND', artist: 'Yuhaii', code: '98561294135147' },
    { id: 'code34', title: 'លលាម', artist: 'Cover by ដែន SUFFER', code: '81739792338438' },
    { id: 'code35', title: 'ចែវទូកនេសាទ', artist: 'Cover by ដែន SUFFER', code: '132147892037894' },
    { id: 'code36', title: 'កែវភ្នែក', artist: 'Cover by ដែន SUFFER', code: '115391115799222' },
    { id: 'code37', title: 'សំលេងបេះដូង', artist: 'Tom saradeth Rizer', code: '75968387676674' },
    { id: 'code38', title: 'ចម្រៀងស្នេហ៍ Jom Reang Snae', artist: 'Cover By Sok Saraden', code: '123753351643079' },
    { id: 'code39', title: 'Lost', artist: 'Jady', code: '121084553758004' },
    { id: 'code40', title: 'Star', artist: 'Jady', code: '100768765638324' },
    { id: 'code41', title: 'Realize', artist: 'Jady', code: '106304031101772' },
    { id: 'code42', title: 'Thousand Miles', artist: 'RAKHIE', code: '83386148095598' },
    { id: 'code43', title: 'Her', artist: 'Jady', code: '129776047299514' }
];

// DOM Elements
const signInButton = document.getElementById('signInButton');
const signOutButton = document.getElementById('signOutButton');
const addMusicForm = document.querySelector('.add-music-form');
const searchInput = document.querySelector('.search-input');
const tabs = document.querySelectorAll('.category-tab');

// Initialize the page
function initializePage() {
    renderMusicCards();
    setupEventListeners();
}

// Render all music cards
function renderMusicCards() {
    const container = document.getElementById('music-cards-container');
    container.innerHTML = '';
    
    musicDatabase.forEach(song => {
        const card = document.createElement('div');
        card.className = 'music-card';
        card.innerHTML = `
            <div class="music-title">${song.title || 'Untitled'}</div>
            <div class="music-artist">${song.artist || 'Unknown Artist'}</div>
            <div class="code-container">
                <div class="code" id="${song.id}">${song.code}</div>
                <button class="copy-btn" onclick="copyCode('${song.id}', this)">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg>
                    Copy
                </button>
            </div>
        `;
        container.appendChild(card);
    });
}

// Add new music from form
function addMusicFromForm() {
    const title = document.getElementById('newTitle').value;
    const artist = document.getElementById('newArtist').value;
    const code = document.getElementById('newCode').value;
    
    if (!title || !code) {
        alert('Please at least provide a title and code');
        return;
    }
    
    const newId = 'code' + (musicDatabase.length + 1);
    musicDatabase.push({
        id: newId,
        title: title,
        artist: artist,
        code: code
    });
    
    // Clear form
    document.getElementById('newTitle').value = '';
    document.getElementById('newArtist').value = '';
    document.getElementById('newCode').value = '';
    
    renderMusicCards();
}

// Copy code to clipboard
function copyCode(id, button) {
    const codeElement = document.getElementById(id);
    const code = codeElement.innerText;
    
    navigator.clipboard.writeText(code).then(() => {
        const originalText = button.innerHTML;
        button.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Copied!';
        button.classList.add('copied');
        
        setTimeout(() => {
            button.innerHTML = originalText;
            button.classList.remove('copied');
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy: ', err);
        alert('Failed to copy code. Please try again.');
    });
}

// Setup event listeners
function setupEventListeners() {
    // Auth state observer
    auth.onAuthStateChanged((user) => {
        if (user && ADMIN_EMAILS.includes(user.email)) {
            // Admin is signed in
            signInButton.style.display = 'none';
            signOutButton.style.display = 'block';
            addMusicForm.style.display = 'block';
        } else {
            // User is not admin or signed out
            signInButton.style.display = 'block';
            signOutButton.style.display = 'none';
            addMusicForm.style.display = 'none';
        }
    });

    // Sign in handler
    signInButton.addEventListener('click', () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider)
            .catch((error) => {
                console.error('Sign in error:', error);
                alert('Sign in failed. Please try again.');
            });
    });

    // Sign out handler
    signOutButton.addEventListener('click', () => {
        auth.signOut()
            .catch((error) => {
                console.error('Sign out error:', error);
            });
    });

    // Search functionality
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const cards = document.querySelectorAll('.music-card');
        
        cards.forEach(card => {
            const title = card.querySelector('.music-title').textContent.toLowerCase();
            const artist = card.querySelector('.music-artist').textContent.toLowerCase();
            
            if (title.includes(searchTerm) || artist.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });

    // Tab functionality
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            // Filter functionality would go here
        });
    });
}


// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initializePage);

