export const portfolioData = {
  personal: {
    name: "xain01",
    headline: "Full-Stack Developer & UI/UX Enthusiast",
    summary: "Passionate developer with experience creating modern web applications. I love turning complex problems into simple, beautiful designs.",
    tagline: "Building digital experiences that make a difference",
    avatar: "/xain01-avatar.jpg",
    resumeUrl: "/resume.pdf"
  },

  social: [
    { platform: "github", url: "https://github.com/ainh01" },
    // { platform: "linkedin", url: "https://linkedin.com/in/ainh01" },  
    { platform: "facebook", url: "https://www.facebook.com/Binh.MM.mm" }
  ],

  projects: [
    {
      "id": 1,
      "title": "Real-time Chat and Video Call Application",
      "shortDescription": "A full-stack, real-time chat application with voice/video calls, friend management, and robust authentication.",
      "fullDescription": "This project is a sophisticated real-time chat application designed for seamless communication. It features user authentication, private and group conversations, real-time messaging with typing indicators, and advanced functionalities like message forwarding and replying. Beyond text, it integrates WebRTC for one-on-one voice and video calls, including screen sharing. Friend management allows users to add, accept, and reject friend requests. The backend is built with Node.js, Express, GraphQL, and WebSockets, leveraging PostgreSQL for relational data and MongoDB for dynamic chat messages. Redis is used for session management and real-time event publishing. The frontend is a responsive HTML/CSS/JavaScript application, providing an intuitive user experience.",
      "image": "/project_chat.png",
      "technologies": [
        "Node.js",
        "Express.js",
        "GraphQL",
        "Apollo Server",
        "WebSockets",
        "WebRTC",
        "PostgreSQL",
        "MongoDB",
        "Redis",
        "Docker",
        "HTML",
        "CSS",
        "JavaScript",
        "RESTful APIs"
      ],
      "liveUrl": "https://chat.xain.click/",
      "githubUrl": "https://github.com/ainh01/chat",
      "challenges": "Implementing WebRTC for reliable peer-to-peer connections with NAT traversal, ensuring real-time data consistency across multiple services (PostgreSQL, MongoDB, Redis), securing WebSocket connections and GraphQL subscriptions, and managing complex state on the frontend for real-time updates and call states.",
      "results": "Successfully deployed a robust, scalable chat platform capable of handling concurrent users with low latency, providing a feature-rich communication experience comparable to leading messaging applications. Achieved secure and efficient real-time communication through a well-designed GraphQL API and WebSocket infrastructure."
    },
    {
      "id": 2,
      "title": "ESP32 Flappy Bird Game with Firebase",
      "shortDescription": "A multi-player Flappy Bird game implemented on ESP32, controlled and synchronized via Firebase.",
      "fullDescription": "This project implements a multi-player Flappy Bird-style game on an 8x8 LED matrix driven by an ESP32 microcontroller. Player actions (jumps) are sent via Wi-Fi to a Firebase Realtime Database. The ESP32 constantly polls Firebase for both player inputs and game settings, allowing for dynamic control of game pace and difficulty remotely. The game features two birds and dynamically generated, scrolling walls, with collision detection for each bird. It demonstrates real-time communication between a microcontroller and a cloud database for interactive gaming experiences.",
      "image": "/project_iot.png",
      "technologies": ["ESP32", "Arduino", "Firebase Realtime Database", "C++", "Wi-Fi", "LED Matrix"],
      "liveUrl": null,
      "githubUrl": "https://github.com/ainh01/esp32OnlineFlappybird",
      "challenges": "Synchronizing game state and player inputs over Wi-Fi with Firebase, managing multiple asynchronous Firebase streams efficiently on the ESP32, optimizing display refresh rates for smooth animation on the LED matrix, and implementing robust collision detection for multiple dynamic objects.",
      "results": "Successfully created a functional, multi-player Flappy Bird game that can be remotely controlled and configured via a cloud database, showcasing real-time IoT interaction and dynamic game parameter adjustments."
    },
    {
      "id": 3,
      "title": "AI Flappy Bird",
      "shortDescription": "An AI-powered Flappy Bird clone built with Pygame and NEAT for neuroevolution.",
      "fullDescription": "This project re-creates the classic Flappy Bird game, but instead of human control, the bird is guided by an Artificial Intelligence trained using the NEAT (NeuroEvolution of Augmenting Topologies) algorithm. The AI learns to navigate through pipes by evolving its neural network structure and weights across generations, demonstrating principles of genetic algorithms and machine learning in a game environment. It includes a user-playable version (`gamegoc.py`) alongside the AI training module (`bird.py`).",
      "image": "/project_aiflappybird.png",
      "technologies": ["Python", "Pygame", "NEAT-Python"],
      "liveUrl": null,
      "githubUrl": "https://github.com/ainh01/aiflappybird",
      "challenges": "Integrating the NEAT algorithm with Pygame's game loop for real-time simulation, designing an effective fitness function for the AI to learn efficiently, and optimizing performance to run multiple AI bird simulations concurrently.",
      "results": "Successfully developed an AI that can consistently achieve high scores in the Flappy Bird game, showcasing the power of neuroevolution for solving complex control tasks. The project serves as a compelling demonstration of AI learning through trial and error."
    },
    {
      "id": 4,
      "title": "AUCI: LLM Prompt Engineering Tool",
      "shortDescription": "A web-based tool to generate optimized prompts for Large Language Models with customizable settings.",
      "fullDescription": "This project provides a user-friendly interface for crafting effective prompts for LLMs. Users can select various parameters such as verbosity, self-correction, formatting (highlighting, list form), and language preference (Vietnamese). The tool dynamically generates a comprehensive prompt based on the chosen settings and copies it to the clipboard, streamlining the interaction with AI models. It features a modern, responsive design with dark/light theme toggle and saves user preferences locally.",
      "image": "/project_auci.png",
      "technologies": ["HTML5", "CSS3 (Custom Properties, Flexbox, Grid)", "JavaScript (ES6+)"],
      "liveUrl": "https://auci.staticrun.app/",
      "githubUrl": null,
      "challenges": "Dynamically constructing complex prompt strings based on multiple user inputs and ensuring a seamless user experience with persistent settings (cookies) and theme switching.",
      "results": "Improved efficiency in generating targeted LLM prompts, reducing manual prompt crafting time by an estimated 70% for complex queries, and enhancing the clarity and effectiveness of AI responses."
    },
    {
      "id": 5,
      "title": "Gamified Productivity Todo App: RUSH Mode",
      "shortDescription": "A full-stack, gamified Todo list application with a unique 'RUSH Mode' for focused work sessions.",
      "fullDescription": "This project is a modern, responsive Todo list application designed to enhance productivity through a unique 'RUSH Mode' gamification feature. Users can manage their tasks, assign difficulty levels (HL) to 'rush tasks', and compete against a ticking clock to improve efficiency. The application features user authentication (registration, login), JWT-based authorization, rate limiting, and password hashing for security. The frontend is built with Vue.js for a dynamic user experience, while the backend is a robust Node.js and Express API, connected to a MongoDB database. RUSH Mode encourages users to complete tasks quickly, rewarding them with performance ratings based on time management.",
      "image": "/project_todo.png",
      "technologies": [
        "Vue.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Mongoose",
        "JWT",
        "bcrypt.js",
        "Docker",
        "Swagger (OpenAPI)",
        "CSS3",
        "HTML5"
      ],
      "liveUrl": "https://todo.xain.click",
      "githubUrl": "https://github.com/ainh01/todo",
      "challenges": "One significant challenge was implementing the real-time 'RUSH Mode' timer logic, ensuring accurate time tracking and synchronization across tasks, including dynamic reallocation of time based on task difficulty (HL) and the ability to pause/resume sessions. Additionally, designing an intuitive drag-and-drop task reordering functionality within the time-sensitive RUSH Mode, while maintaining state and visual feedback, required careful consideration of Vue.js component lifecycle and DOM manipulation. Integrating the robust backend authentication and task management with the dynamic frontend user experience also posed challenges in terms of API design and data flow.",
      "results": "Developed a fully functional, secure, and engaging productivity tool. The 'RUSH Mode' feature successfully gamifies task completion, helping users focus and reduce procrastination, indicated by positive feedback on task completion speed. The JWT-based authentication system ensures secure user data, and the Dockerized setup provides an easily deployable and scalable solution. The project demonstrates proficiency in building full-stack applications with modern web technologies, incorporating both CRUD operations and complex real-time logic."
    },
    {
      "id": 6,
      "title": "Bubble Simulator INFINITY Automation Toolkit",
      "shortDescription": "Advanced Lua-based automation tool for Roblox's Bubble Simulator game.",
      "fullDescription": "A comprehensive automation toolkit developed in Lua for the Roblox game 'Bubble Simulator'. This project provides a robust graphical user interface (GUI) allowing players to automate various in-game tasks such as blowing bubbles, collecting items, claiming rewards, and interacting with merchants. Key features include a custom-built GUI framework, advanced pathfinding for item collection and island teleportation, and efficient resource management through Lua task scheduling.",
      "image": "/project_hacker.png",
      "technologies": ["Lua", "Roblox API", "TweenService", "UserInputService", "Raycasting"],
      "liveUrl": null,
      "githubUrl": "https://github.com/ainh01/bubbleSim",
      "challenges": "Implementing a responsive and intuitive GUI from scratch in Lua, developing efficient and reliable in-game automation logic (e.g., auto-collection with customizable range and delay, advanced flight to specific coordinates), managing asynchronous tasks and threading to avoid performance bottlenecks, and ensuring robust error handling and resilience to in-game updates. The teleportation and flight systems required careful consideration of Roblox's physics and network replication.",
      "results": "Successfully automated tedious in-game actions, significantly enhancing the player experience and reducing manual grind. The modular and configurable design allows for easy adaptation to new game features and user preferences. The flight system provides seamless navigation across complex game environments."
    },
    {
      "id": 7,
      "title": "Interactive Folder Structure Builder",
      "shortDescription": "Visual tool for creating, organizing, and exporting folder structures as ASCII art.",
      "fullDescription": "An intuitive web application that allows users to build hierarchical folder structures through a drag-and-drop interface. It supports adding, renaming, and deleting files/folders, and provides a real-time ASCII art preview. Users can export the structure to the clipboard or import existing structures using a YAML-like format.",
      "image": "/project_ftree.png",
      "technologies": ["HTML", "CSS", "JavaScript", "Drag and Drop API"],
      "liveUrl": "https://ftree-xain.surge.sh/ftree.html",
      "githubUrl": "https://github.com/ainh01/ftree",
      "challenges": "Implementing a robust drag-and-drop functionality for nested elements, ensuring accurate ASCII tree generation for complex structures, and managing dynamic UI updates efficiently.",
      "results": "Developed a highly interactive and user-friendly tool for visualizing and exporting file system structures, simplifying documentation and project setup for developers."
    },
    {
      "id": 8,
      "title": "SIDErFX - Sider Account Creator",
      "shortDescription": "Automated tool for creating Sider.ai accounts using Gmail via Selenium WebDriver.",
      "fullDescription": "SIDErFX is a JavaFX desktop application designed to automate the creation of Sider.ai accounts. It leverages Selenium WebDriver to interact with web pages, automating tasks such as navigating to Sider.ai, logging in with provided Gmail credentials, and completing the account registration process. The application supports multi-threading for parallel account creation, proxy integration for IP rotation, and includes features for managing Gmail and proxy lists, logging, and configurable settings like parallel execution and data persistence.",
      "image": "/project_SIDErFX.png",
      "technologies": ["Java", "JavaFX", "Selenium WebDriver", "Maven", "ChromeDriver"],
      "liveUrl": null,
      "githubUrl": null,
      "challenges": "Handling various web page load strategies and dynamic element interactions with Selenium, managing multi-threaded execution with shared resources (Gmail/proxies), implementing robust error handling for network issues and unexpected UI changes, and developing a user-friendly JavaFX interface for configuration and monitoring.",
      "results": "Successfully automated the creation of multiple Sider.ai accounts, significantly reducing manual effort and improving efficiency. The proxy integration enhanced the tool's capability to bypass IP-based restrictions during account creation."
    },
    {
      "id": 9,
      "title": "Nước Hoa Shop",
      "shortDescription": "E-commerce platform for perfumes with admin functionalities",
      "fullDescription": "A robust e-commerce website for selling perfumes, developed with HTML, CSS, and JavaScript. This project includes core e-commerce features such as product display, filtering, search, shopping cart, and checkout. Additionally, it features an admin panel for product management (add, edit, delete) and order status tracking. User authentication and profile management are also integrated. The design is responsive and user-friendly.",
      "image": "/project_ecommere.png",
      "technologies": ["HTML", "CSS", "JavaScript", "Bootstrap"],
      "liveUrl": "https://ecommere-xain.surge.sh/shop.html",
      "githubUrl": "https://github.com/ainh01/ecommere",
      "challenges": "Managing product data and order states purely with JavaScript without a backend database, implementing dynamic UI updates for cart and product filtering, and ensuring a smooth user experience across different sections.",
      "results": "Created a fully functional, dynamic e-commerce site with intuitive user and admin interfaces. Demonstrated proficiency in front-end development, including data management and interactive UI elements."
    },
    {
      "id": 10,
      "title": "Student Score Manager",
      "shortDescription": "A robust desktop application for managing student academic records.",
      "fullDescription": "The Student Score Manager is a C# .NET desktop application designed to streamline the process of managing student scores, classes, subjects, and teacher assignments within an educational institution. It features a secure role-based authentication system (Admin, Teacher, Student), comprehensive CRUD operations for core entities, and advanced analytics for performance tracking.",
      "image": "/project_quanlydiem.png",
      "technologies": ["C#", ".NET Framework", "Windows Forms", "SQL Server", "ADO.NET", "BCrypt.NET"],
      "liveUrl": null,
      "githubUrl": "https://github.com/ainh01/StudentScoreManager",
      "challenges": "Implementing a secure authentication and authorization system with role-based access control (RBAC). Ensuring data integrity and efficient querying of academic records across multiple linked entities. Developing a flexible data access layer to handle complex relationships and business logic for score calculations and analytics. Managing user sessions and ensuring appropriate data visibility based on user roles (Admin, Teacher, Student).",
      "results": "Successfully developed a user-friendly and secure application that improves efficiency in managing student scores. Provided clear analytical insights into student and class performance, enabling better educational strategies. Reduced manual data entry errors and facilitated quicker access to academic records for all authorized users. Enhanced the overall academic administration process through robust data management and reporting capabilities."
    },
    {
      "id": 11,
      "title": "Math Training Application (VToan)",
      "shortDescription": "Interactive desktop application for practicing arithmetic skills.",
      "fullDescription": "VToan is a Pascal-based desktop application designed to help users practice fundamental arithmetic operations (addition, subtraction, multiplication, division). It features multiple game modes including 'Practice' and 'Memory', adjustable difficulty levels, and single-player or two-player options. The application provides immediate feedback on answers and tracks scores.",
      "image": "/project_vtoan.png",
      "technologies": ["Pascal", "SDL2 (SDL, SDL_Image, SDL_TTF, SDL_Mixer)"],
      "liveUrl": null,
      "githubUrl": "https://github.com/ainh01/vtoan",
      "challenges": "Managing dynamic UI elements and game state in Pascal, handling user input across different game modes, and integrating SDL2 libraries for graphics and sound.",
      "results": "Developed a functional and engaging educational tool that can be used for individual or competitive math practice, demonstrating proficiency in low-level game development and structured programming with Pascal and SDL."
    }
  ],

  skills: [
    { "name": "JavaScript", "category": "Programming", "proficiency": 95 },
    { "name": "Python", "category": "Programming", "proficiency": 97 },
    { "name": "C#", "category": "Programming", "proficiency": 93 },
    { "name": "Java", "category": "Programming", "proficiency": 91 },
    { "name": "C++", "category": "Programming", "proficiency": 99 },
    { "name": "Lua", "category": "Programming", "proficiency": 96 },
    { "name": "Pascal", "category": "Programming", "proficiency": 99 },

    { "name": "HTML5", "category": "Frontend", "proficiency": 94 },
    { "name": "CSS3", "category": "Frontend", "proficiency": 93 },
    { "name": "Vue.js", "category": "Frontend", "proficiency": 90 },
    { "name": "Bootstrap", "category": "Frontend", "proficiency": 92 },
    { "name": "JavaFX", "category": "Frontend", "proficiency": 90 },
    { "name": "Windows Forms", "category": "Frontend", "proficiency": 93 },

    { "name": "Node.js", "category": "Backend", "proficiency": 92 },
    { "name": "PHP", "category": "Backend", "proficiency": 91 },
    { "name": "Express.js", "category": "Backend", "proficiency": 91 },
    { "name": "RESTful APIs", "category": "Backend", "proficiency": 90 },
    { "name": "GraphQL", "category": "Backend", "proficiency": 91 },
    { "name": "Apollo Server", "category": "Backend", "proficiency": 90 },
    { "name": ".NET Framework", "category": "Backend", "proficiency": 90 },

    { "name": "MongoDB", "category": "Database", "proficiency": 90 },
    { "name": "PostgreSQL", "category": "Database", "proficiency": 93 },
    { "name": "SQL Server", "category": "Database", "proficiency": 90 },
    { "name": "Redis", "category": "Database", "proficiency": 90 },
    { "name": "Firebase Realtime Database", "category": "Database", "proficiency": 90 },

    { "name": "Docker", "category": "Cloud/DevOps", "proficiency": 91 },
    { "name": "Azure", "category": "Cloud/DevOps", "proficiency": 90 },
    { "name": "Kubernetes", "category": "Cloud/DevOps", "proficiency": 90 },

    { "name": "WebRTC", "category": "Web Technologies", "proficiency": 93 },
    { "name": "WebSockets", "category": "Web Technologies", "proficiency": 90 },
    { "name": "JWT", "category": "Web Technologies", "proficiency": 90 },
    { "name": "Drag and Drop API", "category": "Web Technologies", "proficiency": 92 },

    { "name": "Selenium WebDriver", "category": "Testing/Automation", "proficiency": 90 },
    { "name": "Maven", "category": "Build Tools", "proficiency": 91 },
    { "name": "Swagger/OpenAPI", "category": "API Documentation", "proficiency": 90 },

    { "name": "ESP32", "category": "IoT/Hardware", "proficiency": 94 },
    { "name": "Arduino", "category": "IoT/Hardware", "proficiency": 92 },

    { "name": "Pygame", "category": "Game Development", "proficiency": 91 },
    { "name": "SDL2", "category": "Game Development", "proficiency": 98 },

    { "name": "NEAT-Python", "category": "AI/ML", "proficiency": 92 },
    { "name": "Neural Networks", "category": "AI/ML", "proficiency": 91 },

    { "name": "Mongoose", "category": "ODM/ORM", "proficiency": 92 },
    { "name": "ADO.NET", "category": "ODM/ORM", "proficiency": 90 },

    { "name": "bcrypt", "category": "Security", "proficiency": 91 },
    { "name": "Authentication Systems", "category": "Security", "proficiency": 90 },

    { "name": "Real-time Systems", "category": "Architecture", "proficiency": 93 },
    { "name": "Multi-threaded Programming", "category": "Architecture", "proficiency": 92 },
    { "name": "Microservices Architecture", "category": "Architecture", "proficiency": 91 }
  ]
  ,

  experience: [
    {
      position: "Hahazza Faucet Inc.",
      company: "First Website Deployment",
      period: "2016",
      description: "Created and deployed a Bitcoin faucet website as my first web development project at age 12. The platform allowed users to claim small amounts of Bitcoin while generating revenue through integrated advertising and URL shortening services.",
      achievements: [
        "Deployed my first website at age 12 for Bitcoin distribution",
        "Generated revenue through advertisements and shortlinks",
        "Gained early experience in web development and cryptocurrency"
      ]
    },
    {
      position: "Vtoan Engine",
      company: "Custom Game Engine Development",
      period: "2021",
      description: "Built a lightweight, high-performance game engine from the ground up using Pascal programming language with SDL2 integration. Focused on creating an accessible gaming platform that could run smoothly on low-specification hardware while maintaining exceptional frame rates.",
      achievements: [
        "Developed a game engine from scratch using Pascal and SDL2",
        "Implemented custom GIF support with 360fps optimization",
        "Designed specifically for low-specification devices"
      ]
    },
  ],

  about: [
    "I'm a passionate full-stack developer with experience in creating modern web applications. My journey started with a curiosity about how websites work, and it has evolved into a deep love for crafting digital experiences that solve real-world problems.",
    "When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through technical blog posts. I believe in continuous learning and staying up-to-date with the latest industry trends.",
    "I'm always excited about new challenges and opportunities to create something meaningful. Let's build something amazing together!"
  ],

  stats: [
    { label: "Projects Completed", value: "73+" },
    { label: "Years Experience (huh)", value: "0+" },
    { label: "Happy Clients", value: "25+" },
    { label: "Cups of Coffee", value: "1000+" }
  ],

  contact: {
    message: "I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology. Feel free to reach out!",
    email: "binhtx204@gmail.com",
    location: "Ho Chi Minh City",
    phone: "0327.240.273"
  },
  awards: [
    {
      id: 1,
      title: "First Prize in the Provincial Excellent Student Contest in Informatics",
      organization: "Department of Education and Training",
      date: "2021",
      description: "Awarded for achieving first place in the provincial-level contest, demonstrating exceptional knowledge and skills in computer science and problem-solving.",
      category: "Academic",
      type: "Competition",
      icon: "fas fa-trophy",
      level: "Gold"
    },
    {
      id: 2,
      title: "First Prize in the District Youth Informatics Contest",
      organization: "District Youth Union",
      date: "2021",
      description: "Awarded first prize for outstanding performance in the district-level youth informatics contest.",
      category: "Academic",
      type: "Competition",
      icon: "fas fa-trophy",
      level: "Gold"
    },
    {
      id: 3,
      title: "First Prize in the District Youth Informatics Contest",
      organization: "District Youth Union",
      date: "2020",
      description: "Achieved first place in the district-level youth informatics contest, showcasing strong programming and problem-solving skills.",
      category: "Academic",
      type: "Competition",
      icon: "fas fa-trophy",
      level: "Gold"
    },
    {
      id: 4,
      title: "Second Prize in the National Student Olympiad in Informatics – Unspecialized Track.",
      organization: "Vietnam Association for Information Processing",
      date: "09-12-2022",
      description: "Recognized for outstanding performance in the national-level competition, demonstrating advanced problem-solving and programming skills among specialized computer science students.",
      category: "Academic",
      type: "Competition",
      icon: "fas fa-trophy",
      level: "Silver"
    },
    {
      id: 5,
      title: "Third Prize in the National Student Olympiad in Informatics – Specialized Track.",
      organization: "Vietnam Association for Information Processing",
      date: "08-12-2023",
      description: "Recognized for outstanding performance in the national-level competition, demonstrating advanced problem-solving and programming skills among specialized computer science students.",
      category: "Academic",
      type: "Competition",
      icon: "fas fa-trophy",
      level: "Bronze"
    },
    {
      id: 6,
      title: "Third Prize in the Creative Software Contest",
      organization: "Department of Education and Training",
      date: "2021",
      description: "Awarded third prize for developing innovative software in the provincial creative software contest.",
      category: "Development",
      type: "Competition",
      icon: "fas fa-lightbulb",
      level: "Bronze"
    },
    {
      id: 7,
      title: "Encouragement Prize in the Provincial Youth Informatics Contest",
      organization: "Department of Education and Training",
      date: "2021",
      description: "Received the encouragement prize in the provincial-level youth informatics contest, recognizing effort and participation.",
      category: "Academic",
      type: "Competition",
      icon: "fas fa-award",
      level: "Honorable Mention"
    }
  ]
  ,
}  