import { config } from "../config";

interface Message {
  role: "system" | "user" | "assistant";
  content: string;
}

export const generateAryanAIResponse = (userPrompt: string, _history: Message[] = []): string => {
  const query = userPrompt.trim().toLowerCase();

  // Helper for keyword matching
  const has = (...keywords: string[]) => keywords.some(k => query.includes(k.toLowerCase()));

  // 1. Greetings & Pleasantries
  if (/^(hi|hii+|hey|hello|yo|howdy|sup|hola|namaste|greetings)(\s|[!.,?]|$)/i.test(query) || query === "hi" || query === "hii" || query === "hello") {
    const greetings = [
      "Hey there! 👋 Great to meet you! I'm Aryan's AI persona. Feel free to ask me anything about my projects, skills, education in Information Technology, or connect with me!",
      "Hello! Welcome to my portfolio! 👋 I'm Aryan Virendra Rawat — Software, Web & AI Developer. How can I help you today? Want to explore my projects or tech stack?",
      "Hey! 👋 Thanks for stopping by. I'm Aryan. Ask me anything about what I build, my experience at DMCE, or check out my work!"
    ];
    return greetings[Math.floor(Math.random() * greetings.length)];
  }

  if (has("how are you", "how are u", "how r u", "how's it going", "hows it going")) {
    return "I'm doing great, thanks for asking! 🚀 Coding, solving algorithmic problems on LeetCode, and building modern web and AI applications. How can I help you today?";
  }

  if (has("thank", "thanks", "thx", "appreciate")) {
    return "You're very welcome! If there's anything else you'd like to know about my projects, background, or if you'd like to collaborate, just let me know! 😊";
  }

  if (has("bye", "goodbye", "see ya", "cya", "take care")) {
    return "Thanks for visiting! Have a fantastic day ahead, and feel free to reach out anytime via email or LinkedIn! 👋✨";
  }

  // 2. Who are you / Self Introduction / About Me
  if (has("who are you", "who r u", "about you", "about yourself", "tell me about you", "introduce yourself", "your background", "what do you do", "bio")) {
    return `I am ${config.developer.fullName}, an Information Technology engineering student at Datta Meghe College of Engineering (DMCE) in Navi Mumbai, and a passionate Software Developer, Web Developer, and AI Developer based in Mumbai.

I specialize in building responsive, high-performance web applications using React, TypeScript, and modern JavaScript, coupled with clean UI architectures and AI integrations. I love turning complex algorithmic challenges into fluid, user-friendly digital products.`;
  }

  // 3. Education / College / Degree
  if (has("college", "university", "school", "education", "degree", "study", "studying", "dmce", "datta meghe", "navi mumbai", "b.e", "bachelor", "engineering")) {
    return `🎓 **Education & Background:**
- **Degree:** Bachelor of Engineering (B.E.) in **Information Technology**
- **College:** Datta Meghe College of Engineering (DMCE), Navi Mumbai, India
- **Timeline:** 2023 – Present
- **Focus Areas:** Data Structures & Algorithms, Object-Oriented Software Design, Web Technologies, Database Management Systems, and AI & Machine Learning fundamentals.`;
  }

  // 4. Specific Projects
  if (has("bank simulator", "bank app", "fintech", "banking")) {
    return `💳 **Bank Simulator (Fintech / Web App):**
A full ATM and digital banking simulation supporting deposit, withdrawal, real-time balance calculations, and persistent transaction history.
- **Tech Stack:** React, JSX, LocalStorage as an in-browser database, JavaScript, and TailwindCSS.
- **Key Feature:** Operates completely without needing an external server by leveraging client-side state management and persistent browser storage. Check it out on my GitHub!`;
  }

  if (has("urban eye", "urbaneye", "civic", "pothole", "city map")) {
    return `🗺️ **Urban Eye (Civic Tech Platform):**
A civic engagement web platform designed to bridge the gap between citizens and local governance.
- **What it does:** Allows users to report and track municipal urban issues (like broken streetlights or potholes) using interactive map pins, real-time status updates, and community upvoting.
- **Tech Stack:** React, TypeScript, Interactive Maps API, and TailwindCSS.`;
  }

  if (has("skill swap", "skillswap", "peer to peer", "mentor")) {
    return `🔄 **Skill Swap (Community & EdTech Platform):**
A peer-to-peer skill exchange platform based on the philosophy: *"Teach what you know, learn what you don't."*
- **What it does:** Users create profiles, list their skillset, discover mentors or learners, and connect through intelligent community matching.
- **Tech Stack:** React, TypeScript, Vite, CSS3, and Context API.`;
  }

  if (has("atm simulator", "atm machine") && !has("bank")) {
    return `🏧 **ATM Simulator (Interactive Simulation):**
A realistic digital ATM terminal interface that simulates genuine cash machine operations.
- **Features:** PIN authentication, balance inquiry, cash withdrawal, and comprehensive error state management.
- **Tech Stack:** JavaScript (ES6+), HTML5, and CSS3.`;
  }

  if (has("calculator", "gui calculator", "darkcalc")) {
    return `🧮 **GUI Calculator (Web Utility):**
A sleek glassmorphism calculator with high precision arithmetic evaluation.
- **Features:** Full keyboard input support, scientific functions, error handling (e.g. division by zero), and responsive touch layout.
- **Tech Stack:** JavaScript, HTML5, and modern CSS glassmorphism styling.`;
  }

  // General Projects Overview
  if (has("project", "projects", "portfolio", "built", "work", "creations", "what have you made")) {
    return `🚀 **Here are my featured projects:**

1. **Bank Simulator** — Full fintech banking and ATM simulation with persistent transaction histories using React, LocalStorage & TailwindCSS.
2. **Urban Eye** — Civic tech web platform with interactive maps and community upvoting for reporting local urban infrastructure issues.
3. **Skill Swap** — Peer-to-peer skill exchange platform connecting mentors and learners.
4. **ATM Simulator** — Realistic ATM terminal simulation with PIN security and cash withdrawal logic.
5. **GUI Calculator** — Polished glassmorphism interactive calculator with full keyboard support.

You can view all the details in the **Work** section or on my [GitHub](https://github.com/paraoxxx6969)!`;
  }

  // 5. Skills, Languages & Tech Stack
  if (has("react", "react.js", "reactjs")) {
    return `⚛️ **React:** React is one of my primary frontend frameworks! I build modern, component-driven web applications using React with TypeScript, hooks, Context API, state management, and modern bundlers like Vite.`;
  }

  if (has("typescript", "ts")) {
    return `📘 **TypeScript:** I use TypeScript across my major projects for type safety, maintainable architecture, and robust codebases. Both this portfolio and my featured apps (Urban Eye, Skill Swap) are written with TypeScript!`;
  }

  if (has("python", "ai", "machine learning", "ml", "deep learning")) {
    return `🐍 **Python & AI Development:**
I work with Python for software automation, scripting, and AI/ML exploration. I have attended specialized workshops like *Machine Learning 101* and *Novice to Ninja: Backend Blitz* at DMCE, exploring AI systems and data-driven solutions.`;
  }

  if (has("dsa", "data structure", "algorithm", "leetcode", "competitive program", "problem solving")) {
    return `🧠 **DSA & Algorithmic Problem Solving:**
I'm an active competitive programmer on **LeetCode** ([leetcode.com/u/paradoxx6969](https://leetcode.com/u/paradoxx6969/)). I solve algorithmic challenges focusing on arrays, strings, two-pointers, dynamic programming, trees, and graphs using C++ and JavaScript.`;
  }

  if (has("c++", "cpp", "c plus plus")) {
    return `⚡ **C++:** I use C++ heavily for Data Structures, Algorithms, and competitive programming on LeetCode due to its raw execution speed and STL power.`;
  }

  if (has("tech stack", "skills", "technologies", "what languages", "what do you know", "programming languages", "tools")) {
    return `🛠️ **My Technical Stack & Skills:**

- **Languages:** JavaScript (ES6+), TypeScript, Python, C++, HTML5, CSS3, SQL
- **Frameworks & Libraries:** React, Vite, TailwindCSS, Node.js, Express, Context API
- **Developer Tools:** Git, GitHub, VS Code, Figma, LeetCode
- **Engineering Competencies:** Component-Driven Architecture, REST APIs, State Management, LocalStorage DB, Responsive Web Design, and Data Structures & Algorithms.`;
  }

  // 6. Experience, Hackathons & Workshops
  if (has("hackathon", "horizon", "nexus", "competition")) {
    return `🏆 **Horizon 2026 Frontend Hackathon:**
I participated in the *Horizon 2026 Frontend Hackathon* organized by Nexus Tech at SVKM's SBMP College. Under strict time constraints, my team and I built a production-ready, highly interactive interface demonstrating rapid prototyping, clean code, and UI execution.`;
  }

  if (has("experience", "work experience", "career", "jobs", "internship", "workshops", "bootcamp")) {
    return `💼 **Experience & Milestones:**

1. **Software & Web Developer · Independent / Open Source (2023 – Present):**
   Built and deployed 5+ full-stack and web applications with responsive architectures, fintech simulations, and developer utilities.
2. **Horizon 2026 Frontend Hackathon:**
   Competed and built a feature-complete interface under strict time constraints.
3. **Technical Bootcamps & Workshops (DMCE, 2025):**
   Completed *Novice to Ninja: Backend Blitz*, *CodeSync Tech Bootcamp*, *Machine Learning 101*, and *Build It: Entrepreneurial Workshop*.
4. **B.E. in Information Technology (DMCE, 2023 – Present):**
   Active scholar mastering DSA, software engineering, and system design.`;
  }

  // 7. Contact, Socials & Hire
  if (has("contact", "reach", "hire", "email", "mail", "message", "talk to")) {
    return `📬 **Get in touch with me!**
- **Email:** [rawataryan5953@gmail.com](mailto:rawataryan5953@gmail.com)
- **LinkedIn:** [linkedin.com/in/aryan-rawat-a440483a9](https://www.linkedin.com/in/aryan-rawat-a440483a9/)
- **Location:** Mumbai, India
I'm always open to discussing new opportunities, software projects, and tech collaborations!`;
  }

  if (has("github", "git")) {
    return `🐙 Check out my open-source code and projects on GitHub: [github.com/paraoxxx6969](https://github.com/paraoxxx6969)!`;
  }

  if (has("linkedin")) {
    return `💼 Connect with me on LinkedIn: [linkedin.com/in/aryan-rawat-a440483a9](https://www.linkedin.com/in/aryan-rawat-a440483a9/)!`;
  }

  if (has("instagram", "insta")) {
    return `📸 You can follow me on Instagram here: [instagram.com/aryan_rawat6931](https://www.instagram.com/aryan_rawat6931/)!`;
  }

  if (has("leetcode", "problem solving")) {
    return `⚡ Check out my LeetCode profile and problem-solving journey: [leetcode.com/u/paradoxx6969](https://leetcode.com/u/paradoxx6969/)!`;
  }

  if (has("resume", "cv", "download resume", "get resume", "view resume", "send resume", "resume pdf", "pdf")) {
    return `📄 Here is my resume! You can view and download it directly:\n\n[📥 Click here to view / download my Resume (PDF)](/resume.pdf)\n\nYou can also reach me at [rawataryan5953@gmail.com](mailto:rawataryan5953@gmail.com) for any further information! 😊`;
  }

  // 8. Chess & Game
  if (has("chess", "game", "play", "checkmate", "move", "elo", "stockfish")) {
    return `♟️ You're right next to the interactive chess board! You can challenge the engine right here on this page. Try making a move on the board—I play as Black and you play as White! Let's see if you can win! 👑`;
  }

  // 9. Location & Background
  if (has("where do you live", "location", "where are you from", "mumbai", "india", "based in")) {
    return `📍 I am based in **Mumbai, India**, currently studying Information Technology at Datta Meghe College of Engineering (DMCE) in Navi Mumbai.`;
  }

  // 10. Default / Fallback Response
  return `That's an interesting question! As ${config.developer.fullName}'s AI persona, I can tell you about:

- 💻 **My Projects:** Bank Simulator, Urban Eye, Skill Swap, ATM Simulator, GUI Calculator
- 🛠️ **My Tech Stack:** React, TypeScript, Python, C++, TailwindCSS, Node.js, LeetCode DSA
- 🎓 **My Education:** B.E. in Information Technology at DMCE, Mumbai (2023 - Present)
- 📬 **Contact & Socials:** Email, GitHub, LinkedIn, or LeetCode

What would you like to explore?`;
};
