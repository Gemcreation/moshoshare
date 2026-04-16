// State
const state = {
  currentRoute: 'landing',
  dataSaver: false,
};

// Elements
const appRoot = document.getElementById('app-root');
const navItems = document.querySelectorAll('.nav-item');
const routeTriggers = document.querySelectorAll('[data-route]');

// Views Content (Mock Data)
const views = {
  landing: () => `
    <div class="landing-view animate-fade-in">
      <div class="hero-section">
        <div class="hero-content">
          <span class="badge">NOW ACTIVE ACROSS 54 NATIONS</span>
          <h1 class="hero-title">Connect.<br>Collaborate.<br>Conquer.</h1>
          <p class="hero-subtitle">The Pan-African student network designed for high impact and low data. Empowering the next generation of African scholars.</p>
          <div class="hero-actions">
            <button class="btn btn-primary" onclick="navigate('hub')">Join the Hub</button>
            <button class="btn btn-secondary">Learn More</button>
          </div>
        </div>
        <div class="hero-visual">
          <!-- Abstract representation block -->
          <div class="glass-card excel-card">
            <div class="icon-node">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a4 4 0 0 0-4 4v1h8V6a4 4 0 0 0-4-4z"/><circle cx="12" cy="12" r="3"/><circle cx="19" cy="12" r="3"/><circle cx="5" cy="12" r="3"/><path d="M7.5 12h3M13.5 12h3M12 15v3"/></svg>
            </div>
            <h3>Academic Excellence</h3>
            <p>Built by students, for students.</p>
          </div>
        </div>
      </div>
      
      <div class="features-section">
        <h2 class="section-title">Built for the Continent</h2>
        <div class="feature-grid">
          <div class="feature-card">
            <div class="feature-icon icon-green"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg></div>
            <h3>Verified Only</h3>
            <p>A secure sanctuary for academia. Access is strictly granted only via .edu email addresses or verified student identification.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon icon-yellow"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" y1="20" x2="12.01" y2="20"/></svg></div>
            <h3>Data-Light</h3>
            <p>Optimized for accessibility across Sub-Saharan Africa. High performance even on 2G/3G networks with minimal data consumption.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon icon-blue"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg></div>
            <h3>Pan-African</h3>
            <p>Break the silos. Join a continent-wide community of scholars from Lagos to Nairobi, Cape Town to Cairo.</p>
          </div>
        </div>
      </div>
      
      <div class="excellence-section">
        <div class="exc-content">
          <h2 class="section-title">Empowering Global African Excellence</h2>
          <p>Beyond networking, UniAfrica is a curated space for research sharing, mentorship, and high-impact collaboration. We prioritize intellectual growth over mindless scrolling.</p>
          <div class="tags-row">
            <span class="tag">#Research</span>
            <span class="tag">#STEM</span>
            <span class="tag">#Humanities</span>
            <span class="tag">#Innovation</span>
          </div>
        </div>
        <div class="exc-stats">
          <div class="stat-card light-stat">
            <h4>500+</h4>
            <span>UNIVERSITIES</span>
          </div>
          <div class="stat-card green-stat">
            <h4>2M+</h4>
            <span>STUDENTS</span>
          </div>
        </div>
      </div>
    </div>
  `,
  hub: () => `
    <div class="hub-view animate-fade-in">
      <div class="hub-header-container">
        <div class="hub-title-area">
          <span class="sub-heading">CAMPUS NETWORK</span>
          <h1>University of Nairobi Hub</h1>
          <p>Connect with students across faculties, share resources, and stay updated with campus life.</p>
        </div>
        <div class="data-saver-toggle">
          <div class="ds-labels">
            <span class="ds-title">DATA SAVER</span>
            <span class="ds-status" id="ds-status-text">Limited Media</span>
          </div>
          <label class="switch">
            <input type="checkbox" id="data-saver-checkbox" onchange="window.toggleDataSaver(this)">
            <span class="slider round"></span>
          </label>
        </div>
      </div>
      
      <div class="hub-grid">
        <div class="main-feed">
          <div class="feed-header">
            <h2>Discussion Threads</h2>
            <button class="btn-text">New Post <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg></button>
          </div>
          
          <div class="post-card">
            <div class="post-meta">
              <div class="avatar avatar-yellow">SM</div>
              <div class="meta-info">
                <span class="author">Sarah Mwakideu</span>
                <span class="time">2 HOURS AGO • COMPUTER SCIENCE</span>
              </div>
            </div>
            <h3 class="post-title">Exam prep for Computer Science: Data Structures & Algorithms</h3>
            <p class="post-body">Anyone interested in a weekend study session at the JKML Library? Focusing specifically on Graph Theory and Tree traversals...</p>
            <div class="post-actions">
              <button class="action-btn"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg> 24 comments</button>
              <button class="action-btn"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg> 12 likes</button>
              <button class="action-btn share-btn"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg></button>
            </div>
          </div>
          
          <div class="post-card">
            <div class="post-meta">
              <div class="avatar avatar-blue">JO</div>
              <div class="meta-info">
                <span class="author">John Okello</span>
                <span class="time">5 HOURS AGO • STUDENT LIFE</span>
              </div>
            </div>
            <h3 class="post-title">Housing near campus: Safe spots in Madaraka?</h3>
            <p class="post-body">Looking for recommendations for a studio apartment near the main gate. Is Madaraka safer than Westlands for a late-night walker?</p>
            <div class="post-actions">
              <button class="action-btn"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg> 56 comments</button>
              <button class="action-btn liked"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg> 89 likes</button>
              <button class="action-btn share-btn"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg></button>
            </div>
          </div>
          
          <div class="post-card">
            <div class="post-meta">
              <div class="avatar avatar-green">UA</div>
              <div class="meta-info">
                <span class="author">UniAfrica Events</span>
                <span class="time">YESTERDAY • INNOVATION HUB</span>
              </div>
            </div>
            <h3 class="post-title">Upcoming Hackathon: Solve for Nairobi 2024</h3>
            <p class="post-body">Registration is now open for the annual innovation challenge. KES 500,000 prize pool for the winning waste management solution.</p>
            <div class="post-actions">
              <button class="action-btn"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg> 12 comments</button>
              <button class="action-btn"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg> 45 likes</button>
              <button class="action-btn share-btn"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg></button>
            </div>
          </div>
        </div>
        
        <div class="sidebar">
          <div class="side-card links-card">
            <h3 class="card-title">QUICK LINKS</h3>
            <ul class="link-list">
              <li>
                <div class="link-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg></div>
                <span>My Groups</span>
                <span class="badge-count">3</span>
              </li>
              <li>
                <div class="link-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg></div>
                <span>Events</span>
              </li>
              <li>
                <div class="link-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg></div>
                <span>Resource Vault</span>
              </li>
            </ul>
          </div>
          
          <div class="side-card promo-card faculty-card">
            <span class="promo-badge">FACULTY FOCUS</span>
            <h3 class="sidebar-promo-title">School of Economics</h3>
            <p>Join the debate on Pan-African Trade Policies starting at 2 PM.</p>
            <button class="btn btn-white">JOIN DISCUSSION</button>
          </div>
          
          <div class="side-card stats-card">
            <h3 class="card-title">HUB ACTIVITY</h3>
            <div class="stat-row">
              <span class="stat-label">Active Students</span>
              <strong class="stat-value">1,240</strong>
            </div>
            <div class="progress-bar"><div class="fill" style="width: 75%"></div></div>
            <p class="stat-note">Peak activity typically occurs between 6 PM and 9 PM.</p>
          </div>
        </div>
      </div>
    </div>
  `,
  explore: () => `
    <div class="explore-view animate-fade-in">
      <div class="explore-hero">
        <div class="explore-hero-content">
          <h1>Connect Beyond Borders</h1>
          <p>Bridge the gap between African campuses. Find peers, share insights, and discover continental opportunities.</p>
          <div class="search-bar">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            <input type="text" placeholder="Search by major or research interest...">
            <button class="btn btn-primary">Find Peers</button>
          </div>
        </div>
        <div class="explore-hero-visual">
          <div class="map-bg"></div>
        </div>
      </div>
      
      <div class="explore-grid">
        <div class="trending-section">
          <div class="section-header">
            <h2><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg> Trending Across Africa</h2>
            <div class="pill-nav">
              <span class="pill active">LAGOS</span> • <span>ACCRA</span> • <span>CAPE TOWN</span>
            </div>
          </div>
          
          <div class="cards-row">
            <div class="explore-card">
              <div class="post-meta">
                <div class="avatar"><img src="https://ui-avatars.com/api/?name=Adebayo+K&background=dbeafe&color=1e40af" alt="User"></div>
                <div class="meta-info">
                  <span class="author">Adebayo K.</span>
                  <span class="time">UNIVERSITY OF LAGOS</span>
                </div>
              </div>
              <h3 class="post-title">Building FinTech for the Unbanked: Lessons from Yaba</h3>
              <p class="post-body">Sharing my journey developing a micro-savings app for local traders. Looking for collaborators in Nairobi!</p>
              <div class="tags-row">
                <span class="tag">#FINTECH</span>
                <span class="tag">#INNOVATION</span>
              </div>
            </div>
            
            <div class="explore-card">
              <div class="post-meta">
                <div class="avatar"><img src="https://ui-avatars.com/api/?name=Thandiwe+M&background=fef08a&color=854d0e" alt="User"></div>
                <div class="meta-info">
                  <span class="author">Thandiwe M.</span>
                  <span class="time">UCT, CAPE TOWN</span>
                </div>
              </div>
              <h3 class="post-title">Sustainable Energy Grid Models for Sub-Saharan Climates</h3>
              <p class="post-body">Analyzing solar efficiency in different regional clusters. Does anyone have data on Accra's seasonal cloud cover?</p>
              <div class="tags-row">
                <span class="tag">#RENEWABLEENERGY</span>
                <span class="tag">#STEM</span>
              </div>
            </div>
          </div>
        </div>
        
        <div class="hubs-section">
          <h2>Regional Hubs</h2>
          <div class="hubs-grid">
            <div class="hub-btn">
              <div class="hub-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg></div>
              <h4>West Africa</h4>
              <span>1.2K ACTIVE</span>
            </div>
            <div class="hub-btn">
              <div class="hub-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg></div>
              <h4>East Africa</h4>
              <span>850 ACTIVE</span>
            </div>
            <div class="hub-btn">
              <div class="hub-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg></div>
              <h4>Southern Africa</h4>
              <span>2.1K ACTIVE</span>
            </div>
            <div class="hub-btn">
              <div class="hub-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></svg></div>
              <h4>North Africa</h4>
              <span>600 ACTIVE</span>
            </div>
          </div>
        </div>
      </div>
      
      <div class="opportunities-section">
        <div class="section-header">
          <h2>Opportunities Without Borders</h2>
          <button class="btn-text">View All <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></button>
        </div>
        <div class="opp-grid">
          <div class="opp-card">
            <div class="opp-img heavy-media img-1">
              <span class="opp-badge">HACKATHON</span>
            </div>
            <div class="opp-content">
              <h3>Pan-African AgTech Challenge 2024</h3>
              <p>Remote teams welcome. Solve food security challenges with AI and IoT.</p>
              <div class="opp-meta">
                <span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg> OCT 12-14</span>
                <span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg> $5,000 PRIZE</span>
              </div>
            </div>
          </div>
          
          <div class="opp-card">
            <div class="opp-img heavy-media img-2">
              <span class="opp-badge blue">INTERNSHIP</span>
            </div>
            <div class="opp-content">
              <h3>Google Research Africa: Residency</h3>
              <p>Location: Accra or Nairobi. 6-month placement for Graduate students in AI/ML.</p>
              <div class="opp-meta">
                <span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> FULL-TIME</span>
                <span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg> GOOGLE AI</span>
              </div>
            </div>
          </div>
          
          <div class="opp-card">
            <div class="opp-img heavy-media img-3">
              <span class="opp-badge green">COMPETITION</span>
            </div>
            <div class="opp-content">
              <h3>Continental Data Science Cup</h3>
              <p>Predict urban growth patterns using open satellite data. Inter-university teams encouraged.</p>
              <div class="opp-meta">
                <span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg> TEAM OF 3</span>
                <span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg> CERTIFICATES</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  vault: () => `
    <div class="vault-view animate-fade-in">
      <div class="offline-banner">
        <div class="offline-left">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
          <span>Offline Access Enabled</span>
        </div>
        <span class="system-active">SYSTEM ACTIVE</span>
      </div>
      
      <div class="vault-header">
        <h1>Resource Vault</h1>
        <p>Your curated academic repository for Sub-Saharan excellence.</p>
        <div class="search-bar vault-search">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          <input type="text" placeholder="Find resources by course code or topic">
        </div>
      </div>
      
      <div class="vault-categories">
        <div class="cat-card">
          <div class="cat-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><polyline points="16 13 8 13 8 17 12 17"/></svg></div>
          <h3>Past Papers</h3>
          <span>1.2K FILES</span>
        </div>
        <div class="cat-card">
          <div class="cat-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg></div>
          <h3>Class Notes</h3>
          <span>3.4K FILES</span>
        </div>
        <div class="cat-card">
          <div class="cat-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg></div>
          <h3>Syllabi</h3>
          <span>450 FILES</span>
        </div>
        <div class="cat-card">
          <div class="cat-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg></div>
          <h3>Research Papers</h3>
          <span>890 FILES</span>
        </div>
      </div>
      
      <div class="recent-resources">
        <div class="section-header">
          <h2>Recent Resources</h2>
          <button class="btn-text">FILTER <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg></button>
        </div>
        
        <div class="resource-list">
          <div class="res-item">
            <div class="res-icon pdf-icon">PDF</div>
            <div class="res-info">
              <h4>CSC301_Final_Exam_2023.pdf</h4>
              <p>Oct 12, 2023 • <span class="res-size">1.4 MB</span></p>
            </div>
            <button class="pin-btn active"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/></svg></button>
          </div>
          
          <div class="res-item">
            <div class="res-icon doc-icon">DOC</div>
            <div class="res-info">
              <h4>Macroeconomics_Week_1-4_Notes.docx</h4>
              <p>Nov 05, 2023 • <span class="res-size">850 KB</span></p>
            </div>
            <button class="pin-btn"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/></svg></button>
          </div>
          
          <div class="res-item">
            <div class="res-icon img-icon">IMG</div>
            <div class="res-info">
              <h4>Sustainable_Ag_In_Sahel.pdf</h4>
              <p>Jan 18, 2024 • <span class="res-size">4.2 MB</span></p>
            </div>
            <button class="pin-btn"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/></svg></button>
          </div>
          
          <div class="res-item">
            <div class="res-icon pdf-icon">PDF</div>
            <div class="res-info">
              <h4>LAW202_Case_Study_Analysis.pdf</h4>
              <p>Feb 02, 2024 • <span class="res-size">2.1 MB</span></p>
            </div>
            <button class="pin-btn"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/></svg></button>
          </div>
        </div>
      </div>
      
      <div class="library-banner heavy-media">
        <div class="lib-content">
          <h2>Knowledge is Power</h2>
          <p>Contribute your notes to the Vault and help peers succeed. Earn credits for every verified upload.</p>
        </div>
      </div>
      
      <button class="upload-fab">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
      </button>
    </div>
  `
};

window.toggleDataSaver = function(checkbox) {
  if (checkbox.checked) {
    document.body.classList.add('data-saver-active');
    document.getElementById('ds-status-text').textContent = 'Images Disabled';
  } else {
    document.body.classList.remove('data-saver-active');
    document.getElementById('ds-status-text').textContent = 'Limited Media';
  }
};

// Router
function navigate(route) {
  if (!views[route]) return;
  
  state.currentRoute = route;
  
  // Update view
  appRoot.innerHTML = views[route]();
  
  // Update active nav state
  navItems.forEach(btn => {
    if (btn.dataset.route === route) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Call mount function if view requires JS setup
  if (route === 'hub' && window.setupHubView) window.setupHubView();
  // We will define these later
}

// Event Listeners
routeTriggers.forEach(trigger => {
  trigger.addEventListener('click', () => {
    navigate(trigger.dataset.route);
  });
});

// Initialize
navigate('landing');

// Service Worker Registration for PWA
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').then(registration => {
      console.log('SW registered: ', registration.scope);
    }).catch(registrationError => {
      console.log('SW registration failed: ', registrationError);
    });
  });
}
