import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Loader2, Sparkles } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

const systemPrompt = `You are a professional AI Assistant representing Barathraj S on his portfolio website.
Your objective is to answer questions ONLY about Barathraj S's professional details, work experience, projects, skills, education, and contact information.

Here are the complete details about Barathraj S:

### Basic Info
- **Name:** Barathraj S
- **Role:** Software Engineer
- **Current Employer:** Kuwy Technology Service Private Limited
- **Location:** Chennai, Tamil Nadu, India
- **Email:** jcibarathraj@gmail.com
- **Phone:** +91 7867009044

### Key Links
- **GitHub:** https://github.com/sbarathraj
- **LinkedIn:** https://www.linkedin.com/in/sbarathraj/
- **Twitter:** https://x.com/BarathNft
- **YouTube:** https://www.youtube.com/@barathrajs7498
- **Instagram:** https://www.instagram.com/barathraj_here/

### Work Experience
1. **Kuwy Technology Service Private Limited** (Chennai, Tamil Nadu) | Software Engineer (June 2024 – Present)
   - Architected Banking Loan processing APIs via Java 8 and Spring Boot, enforcing MVC architecture.
   - Developed backend microservices integrating secure REST APIs (Aadhar, PAN, Vehicle) for robust validation.
   - Engineered 20+ scalable RESTful APIs via Spring Boot and Hibernate, improving system data persistence.
   - Automated generation of .xlsx/.csv enterprise reports via Apache POI.
   - Boosted system performance by 30% using caching and circuit breaker patterns.
   - Deployed on AWS utilizing Application Load Balancer (ALB) and Auto Scaling groups.
   - Built responsive Bootstrap 5 UIs and real-time AngularJS dashboards to consume frontend REST APIs.
2. **Kodnest Technologies Pvt Ltd** | Full Stack Intern (January 2023 – May 2023 | Remote)
   - Developed "ShopNest" full-stack e-commerce app using Java SE/EE, Servlets, JSP, and Oracle DB.
   - Worked in agile sprints with mentorship support.

### Education
- **Degree:** Bachelor of Technology (B.Tech) in Information Technology (Graduated May 2023)
- **College:** Sri Manakula Vinayagar Engineering College, Puducherry
- **CGPA:** 7.77 / 10
- **Key Areas:** Data Structures and Algorithms, Object-Oriented Programming (OOP), Database Management Systems (DBMS), Software Engineering and Architecture, Web Technologies.

### Skills
- **Core Competencies:** Java, JavaScript, SQL, Data Structures & Algorithms, Spring Boot & Hibernate, Angular, REST APIs
- **Database & Backend:** MySQL, MongoDB, PostgreSQL, Redis, Maven, Gradle, Microservices Architecture
- **Cloud & DevOps:** AWS (EC2, S3, RDS), Microsoft Azure, GitHub Actions, Docker, Kubernetes, Jenkins, CI/CD
- **Tools:** Git & GitHub, Postman & Swagger, VS Code, Figma, Netlify & Vercel
- **AI & Emerging Tech:** OpenAI API Integration, ChatGPT Prompt Engineering, ML Model Integration, AI Application Development
- **Practices:** Agile, TDD, Responsive Web Design, Cross-Browser Compatibility

### Projects
1. **BarathAI:** Modern AI chat platform with real-time messaging, admin dashboard, analytics, and secure login. Built with React, Tailwind CSS, and Supabase (PostgreSQL, REST API). Demo: https://barathai.web.app/ | Repo: https://github.com/sbarathraj/barathai.git
2. **Portfolio:** Visually engaging portfolio with 3D animations, smooth transitions, and responsive design. Built using React, Three.js, Framer Motion, and Tailwind CSS. Demo: https://barathraj.web.app/ | Repo: https://github.com/sbarathraj/barathraj_portfolio.git
3. **DSA Tracker:** Full-stack web app to track DSA progress with user auth, problem management, analytics, and badges. React frontend, Supabase backend, Firebase hosting. Demo: https://dsatracker.web.app/ | Repo: https://github.com/sbarathraj/DSA-Tracker.git
4. **EnglishAI:** Serverless English learning app with chat, vocabulary, progress tracking, and AI features. React frontend connects to Supabase and third-party APIs. Demo: https://barathraj.web.app/ | Repo: https://github.com/sbarathraj/barathraj_portfolio.git

### Coding Profiles
- **GitHub:** sbarathraj (45+ repos, 120+ stars, 850+ contributions)
- **LeetCode:** BarathrajS (250+ problems solved, 1850 contest rating, Top 5% global rank)
- **HackerRank:** BarathrajS (12 badges, 5 certificates, 3200+ points)
- **Codeforces:** BarathrajS (1750 max rating, 45+ contests, 320+ solved)

---
### Guidelines for Assistant:
1. ONLY answer questions related to Barathraj S, his skills, experience, education, coding profiles, projects, or contact details.
2. If the user asks general coding, technical questions (e.g. "Write a Java program", "What is binary search?"), or anything unrelated to Barathraj's career/life, politely explain: "I am an AI assistant trained only to answer questions about Barathraj's career, portfolio, projects, and skills. For general technical queries, please search online or use standard AI tools. I'd be happy to tell you about Barathraj's Java/coding experience instead!"
3. Keep responses engaging, clean, and concise. Be professional.
4. Respond in markdown format. Use bullet points and bolding for readability. Do not output large blocks of text. Keep paragraphs short.`;

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

// Custom Markdown renderer component with dark/light mode classes using react-markdown
const MarkdownText: React.FC<{ text: string; isDarkMode: boolean }> = ({ text, isDarkMode }) => {
  return (
    <ReactMarkdown
      components={{
        p: ({ children }) => (
          <p className={`mb-1.5 leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            {children}
          </p>
        ),
        strong: ({ children }) => (
          <strong className={`font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            {children}
          </strong>
        ),
        a: ({ href, children }) => (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-secondary underline transition-colors font-semibold break-all"
          >
            {children}
          </a>
        ),
        ul: ({ children }) => (
          <ul className={`list-disc pl-5 mb-2.5 space-y-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            {children}
          </ul>
        ),
        li: ({ children }) => <li>{children}</li>,
        h1: ({ children }) => (
          <h1 className={`text-lg font-bold mt-3 mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            {children}
          </h1>
        ),
        h2: ({ children }) => (
          <h2 className={`text-base font-bold mt-3 mb-1.5 border-b pb-0.5 ${
            isDarkMode ? 'text-white border-white/20' : 'text-gray-900 border-black/20'
          }`}>
            {children}
          </h2>
        ),
        h3: ({ children }) => (
          <h3 className={`text-sm font-bold mt-2.5 mb-1 border-b pb-0.5 ${
            isDarkMode ? 'text-white border-white/10' : 'text-gray-900 border-black/10'
          }`}>
            {children}
          </h3>
        ),
      }}
    >
      {text}
    </ReactMarkdown>
  );
};

const PortfolioChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(document.body.classList.contains('dark-mode'));
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "Hi there! I'm Barathraj's Assistant. I can help answer questions about his experience, education, projects, skills, or contact info. Ask me anything!",
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  // Monitor document.body class changes to dynamically toggle light/dark modes
  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDarkMode(document.body.classList.contains('dark-mode'));
    });

    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages((prev) => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const chatHistory = messages.map((m) => ({
        role: m.role,
        content: m.content,
      }));

      const payload = {
        model: 'openrouter/free',
        messages: [
          { role: 'system', content: systemPrompt },
          ...chatHistory,
          { role: 'user', content: userMessage },
        ],
        stream: true,
      };

      const makeRequest = async (modelName: string) => {
        const apiKey = import.meta.env.VITE_OPENROUTER_API_KEY || '';
        const reqPayload = { ...payload, model: modelName };
        return await fetch('https://openrouter.ai/api/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${apiKey}`,
          },
          body: JSON.stringify(reqPayload),
        });
      };

      let response;
      try {
        response = await makeRequest('openrouter/free');
        if (!response.ok) {
          throw new Error('Primary model failed');
        }
      } catch (err) {
        console.warn('openrouter/free model call failed, attempting fallback to gemini-2.5-flash:free...', err);
        response = await makeRequest('google/gemini-2.5-flash:free');
      }

      if (!response.ok) {
        throw new Error(`Both API calls failed with status: ${response.status}`);
      }

      const reader = response.body?.getReader();
      const decoder = new TextDecoder('utf-8');
      if (!reader) {
        throw new Error('No readable stream reader available');
      }

      let accumulatedContent = '';
      let buffer = '';
      let isFirstChunk = true;

      while (true) {
        const { value, done } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        buffer += chunk;

        const lines = buffer.split('\n');
        buffer = lines.pop() || ''; // Hold onto incomplete lines

        for (const line of lines) {
          const trimmed = line.trim();
          if (!trimmed) continue;
          if (trimmed === 'data: [DONE]') continue;

          if (trimmed.startsWith('data: ')) {
            const jsonStr = trimmed.substring(6);
            try {
              const parsed = JSON.parse(jsonStr);
              const deltaContent = parsed.choices?.[0]?.delta?.content || '';
              if (deltaContent) {
                if (isFirstChunk) {
                  setIsLoading(false);
                  setMessages((prev) => [...prev, { role: 'assistant', content: '' }]);
                  isFirstChunk = false;
                }
                
                accumulatedContent += deltaContent;
                setMessages((prev) => {
                  const updated = [...prev];
                  if (updated.length > 0) {
                    updated[updated.length - 1] = {
                      role: 'assistant',
                      content: accumulatedContent,
                    };
                  }
                  return updated;
                });
              }
            } catch (e) {
              console.debug('Failed to parse SSE JSON line:', trimmed, e);
            }
          }
        }
      }

      // Handle any remaining string in buffer
      if (buffer.trim() && buffer.trim().startsWith('data: ') && buffer.trim() !== 'data: [DONE]') {
        const trimmed = buffer.trim();
        const jsonStr = trimmed.substring(6);
        try {
          const parsed = JSON.parse(jsonStr);
          const deltaContent = parsed.choices?.[0]?.delta?.content || '';
          if (deltaContent) {
            if (isFirstChunk) {
              setIsLoading(false);
              setMessages((prev) => [...prev, { role: 'assistant', content: '' }]);
              isFirstChunk = false;
            }
            accumulatedContent += deltaContent;
            setMessages((prev) => {
              const updated = [...prev];
              if (updated.length > 0) {
                updated[updated.length - 1] = {
                  role: 'assistant',
                  content: accumulatedContent,
                };
              }
              return updated;
            });
          }
        } catch (e) {
          // ignore
        }
      }

      if (isFirstChunk) {
        setIsLoading(false);
      }

    } catch (error) {
      console.error('Error fetching chat response:', error);
      setMessages((prev) => {
        const updated = [...prev];
        if (updated.length > 0 && updated[updated.length - 1].role === 'assistant' && !updated[updated.length - 1].content) {
          updated[updated.length - 1] = {
            role: 'assistant',
            content: 'Sorry, I had trouble communicating with my server. Please try again in a few moments.',
          };
          return updated;
        }
        return [
          ...prev,
          {
            role: 'assistant',
            content: 'Sorry, I had trouble communicating with my server. Please try again in a few moments.',
          },
        ];
      });
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end">
      {/* Chat Window Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className={`w-[calc(100vw-2rem)] sm:w-[440px] h-[400px] max-h-[calc(100vh-100px)] border rounded-2xl flex flex-col shadow-2xl overflow-hidden mb-4 backdrop-blur-xl transition-colors duration-300 ${
              isDarkMode ? 'bg-slate-950/95 border-white/10' : 'bg-white/95 border-black/10'
            }`}
          >
            {/* Header */}
            <div
              className={`p-4 border-b flex items-center justify-between transition-colors duration-300 ${
                isDarkMode
                  ? 'bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 border-white/10'
                  : 'bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border-black/10'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <div className="relative">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-primary via-secondary to-accent flex items-center justify-center shadow-lg">
                    <Sparkles className="text-white w-4.5 h-4.5" />
                  </div>
                  <div className={`absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 ${
                    isDarkMode ? 'border-slate-950' : 'border-white'
                  }`} />
                </div>
                <div>
                  <h3 className={`font-bold text-sm leading-none mb-1 transition-colors duration-300 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    BarathAI Lite
                  </h3>
                  <p className={`text-xs transition-colors duration-300 ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    Ask about Barathraj
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                  isDarkMode
                    ? 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
                    : 'bg-black/5 text-gray-600 hover:text-black hover:bg-black/10'
                }`}
                aria-label="Close chat"
              >
                <X size={16} />
              </button>
            </div>

            {/* Message Area */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4">
              {messages.map((msg, index) => (
                <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-2.5 shadow-md transition-all duration-300 ${
                      msg.role === 'user'
                        ? 'bg-gradient-to-r from-primary to-secondary text-white rounded-tr-none'
                        : `rounded-tl-none border ${
                            isDarkMode
                              ? 'bg-white/5 border-white/5 text-gray-200'
                              : 'bg-gray-100 border-gray-200 text-gray-800'
                          }`
                    }`}
                  >
                    {msg.role === 'user' ? (
                      <p className="text-sm font-medium whitespace-pre-wrap">{msg.content}</p>
                    ) : (
                      <MarkdownText text={msg.content} isDarkMode={isDarkMode} />
                    )}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className={`rounded-2xl rounded-tl-none px-4 py-3 flex items-center gap-2 shadow-md border transition-all duration-300 ${
                    isDarkMode ? 'bg-white/5 border-white/5 text-gray-200' : 'bg-gray-100 border-gray-200 text-gray-800'
                  }`}>
                    <Loader2 size={16} className="animate-spin text-primary" />
                    <span className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      Assistant is thinking...
                    </span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Form */}
            <form
              onSubmit={handleSubmit}
              className={`p-3 border-t flex gap-2 transition-colors duration-300 ${
                isDarkMode ? 'bg-white/5 border-white/10' : 'bg-gray-50 border-black/10'
              }`}
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about my projects, stack, role..."
                disabled={isLoading}
                className={`flex-1 rounded-xl px-4 py-2.5 text-sm transition-all focus:outline-none focus:border-primary disabled:opacity-50 ${
                  isDarkMode
                    ? 'bg-white/5 border-white/10 text-white placeholder-gray-400 focus:bg-white/10'
                    : 'bg-white border-black/10 text-gray-900 placeholder-gray-500 focus:bg-gray-50'
                }`}
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-r from-primary to-secondary text-white transition-transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:hover:scale-100 disabled:active:scale-100 shadow-md"
                aria-label="Send message"
              >
                <Send size={16} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 rounded-full flex items-center justify-center bg-gradient-to-r from-primary via-secondary to-accent text-white shadow-xl hover:shadow-glow hover:shadow-primary/30 transition-shadow relative"
        aria-label="Toggle chat portal"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X size={24} />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageSquare size={24} />
            </motion.div>
          )}
        </AnimatePresence>
        {!isOpen && (
          <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-slate-950 animate-pulse" />
        )}
      </motion.button>
    </div>
  );
};

export default PortfolioChat;
