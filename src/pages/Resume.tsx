import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Define types for our data
interface Skill {
  category: string;
  items: Array<{ name: string; level: number }>;
}

interface Education {
  school: string;
  degree: string;
  period: string;
}

interface Experience {
  company: string;
  position: string;
  period: string;
  location: string;
  description: string[];
  technologies: string[];
}

interface Project {
  name: string;
  period: string;
  role: string;
  description: string[];
  technologies: string[];
  link?: string;
}

interface Interest {
  name: string;
  icon: string;
}

const Resume = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("about");
  const { scrollY } = useScroll();
  
  // Handle scroll progress for navbar highlighting
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "skills", "education", "experience", "projects", "interests"];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (!element) return false;
        
        const rect = element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  // Personal information data
  const personalStatement = "我具备一定的编程基础，掌握Java、Python、Go等语言，并熟悉常见数据结构和算法。在实习和项目经历中，我积累了一些后端开发经验，包括微服务架构设计、数据库优化（MySQL、Redis、MongoDB）、分布式系统（RabbitMQ、Kubernetes）以及容器化技术（Docker）的应用。";
  
  // Skills data with proficiency levels (1-5)
  const skills: Skill[] = [
    {
      category: "编程语言",
      items: [
        { name: "Java", level: 4 },
        { name: "Javascript", level: 4 },
        { name: "Typescript", level: 3 },
        { name: "Python", level: 4 },
        { name: "Golang", level: 3 },
        { name: "HTML/CSS", level: 4 }
      ]
    },
    {
      category: "框架",
      items: [
        { name: "Spring Boot", level: 4 },
        { name: "Spring Security", level: 3 },
        { name: "React JS", level: 4 },
        { name: "Next JS", level: 3 },
        { name: "RabbitMQ", level: 3 },
        { name: "LangChain4j", level: 3 }
      ]
    },
    {
      category: "数据库",
      items: [
        { name: "MySQL", level: 4 },
        { name: "Redis", level: 3 },
        { name: "MongoDB", level: 3 },
        { name: "DynamoDB", level: 2 }
      ]
    },
    {
      category: "工具",
      items: [
        { name: "Kubernetes", level: 3 },
        { name: "Docker", level: 4 },
        { name: "阿里云", level: 3 },
        { name: "AWS", level: 3 },
        { name: "Burp Suit", level: 3 }
      ]
    }
  ];
  
  // Education data
  const education: Education[] = [
    {
      school: "芝加哥大学",
      degree: "计算机科学与技术 (硕士)",
      period: "2024.05 - 2025.12"
    },
    {
      school: "雪城大学",
      degree: "数学 (本科)",
      period: "2020.09 - 2023.12"
    }
  ];
  
  // Work experience data
  const experiences: Experience[] = [
    {
      company: "绿盟科技集团股份有限公司",
      position: "安全服务工程师",
      period: "2025.06 - 至今",
      location: "北京 - 服务交付组",
      technologies: ["Java", "Spring", "Javascript", "ReactJS", "Python", "Langchain4j", "MongoDB", "AWS"],
      description: [
        "开发工具和工作流，自动化渗透测试、安全评估和漏洞扫描项目。",
        "设计可扩展的安全数据分析管道，用于监控安全事件和测试结果。自动化数据聚合、模式匹配和启发式分析，生成全面的安全评估报告。",
        "开发实时安全仪表盘，展示现场捕获的攻击样本和异常流量。通过交互式UX组件提升日志追踪、攻击链路重建和入侵路径分析的效率。",
        "开发可复用组件库，供相邻团队项目使用，减少约20%的前端重复工作。",
        "提出并实现基于LangChain和GPT-3.5的生成式AI助手，用自然语言总结安全发现，支持与客户通过WebSocket进行实时对话，深入探讨具体数据和安全风险。",
        "实现多会话记忆模块以持续追踪话题，采用MCP使AI代理能安全访问生产数据。",
        "将AI助手扩展到5类报告（如“渗透测试”“漏洞分析”“护网日报”“安全加固”等），开发提示词库并优化上下文以提升相关性和质量。",
        "将安全分析逻辑实现为专用插件，覆盖Web应用、内网系统、平台和主机资产的漏洞检测与最佳实践实施。针对Web应用，实现了SQL注入、XSS等常见漏洞的自动化检测插件，并集成了OWASP Top 10的检测规则。",
        "使用 Burp Suite 对 Web 应用进行渗透测试，发现了 XSS 漏洞并修复，避免了潜在的数据泄露风险。使用Nmap进行端口扫描和漏洞探测，识别了潜在的安全风险点。",
        "使用SQLmap进行数据库漏洞扫描，发现了SQL注入漏洞并协助修复。使用Dirsearch进行敏感目录和文件探测，防止信息泄露。",
        "推广生成式AI辅助开发，举办Cursor与Claude Code使用分享会。",
        "成功上线AI辅助安全报告生成项目，通过自然语言处理技术自动分析安全数据，生成初步报告草稿，帮助团队将每周报告撰写时间减少80%，释放人力用于更重要的漏洞分析和风险评估工作。"
      ]
    }
  ];
  
  // Project data
  const projects: Project[] = [
    {
      name: "微服务架构全栈Web应用",
      period: "2025.01 - 2025.06",
      role: "全栈开发 - 伊利诺伊州",
      technologies: ["Spring Boot", "Spring Cloud Gateway", "ReactJS", "RabbitMQ", "Kubernetes", "Docker", "MySQL", "Redis", "AWS"],
      description: [
        "开发支持商品搜索、订单管理、商家资料与菜单创建、配送跟踪的全栈应用。",
        "基于领域驱动设计开发6个微服务，涵盖订单、配送状态、资料管理等业务域。",
        "集成Spring Cloud API网关实现服务发现与动态鉴权。",
        "设计领域数据模型并分库存储，优化查询与索引，引入缓存，平均查询延迟降低35%。",
        "基于RabbitMQ构建实时事件总线统一数据同步与通知。"
      ]
    },
    {
      name: "智能医疗助手",
      period: "2024.10 - 2024.12",
      role: "Agent开发 - 伊利诺伊州",
      technologies: ["Langchain4j", "阿里通义千问API", "SpringBoot", "MongoDB", "Docker", "阿里云ECS"],
      description: [
        "集成Langchain4j与阿里通义千问API，实现自定义@AiService动态代理。",
        "设计多会话记忆模块，支持基于Token窗口与消息窗口的聊天上下文记忆。",
        "使用MongoDB实现对历史聊天记录的持久化管理。",
        "采用模板化Prompt配置系统消息，支持变量注入与模板文件加载。",
        "通过阿里云ECS部署上线整个系统，完成前后端可访问的在线医疗助手原型搭建。"
      ],
      link: "http://101.201.103.151/"
    }
  ];
  
  // Interests data
  const interests: Interest[] = [
    { name: "人工智能", icon: "fa-brain" },
    { name: "网络安全", icon: "fa-shield-alt" },
    { name: "云计算", icon: "fa-cloud" },
    { name: "开源项目", icon: "fa-code-branch" },
    { name: "技术写作", icon: "fa-pen-fancy" }
  ];
  
  // Scroll to section function
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };
  
  return (
    <div className="min-h-screen relative z-10 px-4 py-12 max-w-7xl mx-auto">
      {/* Header with name and navigation */}
      <header className="mb-16 sticky top-0 z-20 bg-opacity-80 backdrop-blur-md bg-gray-900/50 rounded-xl p-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h1 className="text-4xl font-bold text-gray-100 mb-1">李林峰</h1>
            <p className="text-xl text-gray-300">后端开发工程师</p>
          </div>
          
          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
            {["about", "skills", "education", "experience", "projects", "interests"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`capitalize py-1 px-2 rounded transition-all relative ${
                  activeSection === item 
                    ? "text-white font-medium" 
                    : "text-gray-400 hover:text-gray-200"
                }`}
              >
                {item === "about" && "个人简介"}
                {item === "skills" && "技能栈"}
                {item === "education" && "教育背景"}
                {item === "experience" && "工作经历"}
                {item === "projects" && "个人项目"}
                {item === "interests" && "兴趣爱好"}
                
                {activeSection === item && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400 rounded-full" />
                )}
              </button>
            ))}
          </nav>
          
          {/* Back to landing page button */}
          <button
            onClick={() => navigate("/")}
            className="mt-4 md:mt-0 text-gray-300 hover:text-white transition-colors"
          >
            <i className="fa-solid fa-arrow-left mr-1" /> 返回首页
          </button>
        </div>
      </header>
      
      {/* Main content - two column layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left column */}
        <div className="lg:col-span-1 space-y-8">
          {/* About section */}
          <motion.section
            id="about"
            className="bg-gray-900/60 backdrop-blur-sm rounded-xl p-6 border border-gray-800"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <i className="fa-solid fa-user-circle mr-2 text-blue-400" /> 个人简介
            </h2>
            <div className="border-t border-gray-700 pt-4">
              <p className="text-gray-300 leading-relaxed">
                {personalStatement}
              </p>
            </div>
          </motion.section>
          
          {/* Skills section */}
          <motion.section
            id="skills"
            className="bg-gray-900/60 backdrop-blur-sm rounded-xl p-6 border border-gray-800"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <i className="fa-solid fa-code mr-2 text-blue-400" /> 技能栈
            </h2>
            <div className="border-t border-gray-700 pt-4 space-y-6">
              {skills.map((category, index) => (
                <div key={index}>
                  <h3 className="text-lg font-semibold text-gray-200 mb-3">{category.category}</h3>
                  <div className="space-y-3">
                    {category.items.map((skill, i) => (
                      <div key={i} className="space-y-1">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-300">{skill.name}</span>
                          <span className="text-xs text-gray-400">{skill.level}/5</span>
                        </div>
                        <div className="w-full bg-gray-800 rounded-full h-2">
                          <motion.div
                            className="bg-blue-500 h-2 rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level * 20}%` }}
                            transition={{ duration: 1, delay: 0.1 * i }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.section>
          
          {/* Interests section */}
          <motion.section
            id="interests"
            className="bg-gray-900/60 backdrop-blur-sm rounded-xl p-6 border border-gray-800"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <i className="fa-solid fa-heart mr-2 text-blue-400" /> 兴趣爱好
            </h2>
            <div className="border-t border-gray-700 pt-4">
              <div className="grid grid-cols-2 gap-4">
                {interests.map((interest, index) => (
                  <div key={index} className="flex items-center space-x-2 text-gray-300">
                    <i className={`fa-solid ${interest.icon} text-blue-400`} />
                    <span>{interest.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>
        </div>
        
        {/* Right column */}
        <div className="lg:col-span-2 space-y-8">
          {/* Education section */}
          <motion.section
            id="education"
            className="bg-gray-900/60 backdrop-blur-sm rounded-xl p-6 border border-gray-800"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <i className="fa-solid fa-graduation-cap mr-2 text-blue-400" /> 教育背景
            </h2>
            <div className="border-t border-gray-700 pt-4 space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="pl-4 border-l-2 border-blue-500/30">
                  <h3 className="text-xl font-semibold text-gray-100">{edu.school}</h3>
                  <p className="text-gray-300 mb-1">{edu.degree}</p>
                  <p className="text-sm text-gray-400">{edu.period}</p>
                </div>
              ))}
            </div>
          </motion.section>
          
          {/* Experience section */}
          <motion.section
            id="experience"
            className="bg-gray-900/60 backdrop-blur-sm rounded-xl p-6 border border-gray-800"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
             <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
  <i className="fa-solid fa-briefcase mr-2 text-blue-400" /> 实习经历
            </h2>
            <div className="border-t border-gray-700 pt-4 space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="pl-4 border-l-2 border-blue-500/30">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                    <div className="flex items-center mb-2 sm:mb-0">
                      <div className="w-10 h-10 rounded-full bg-blue-900/30 flex items-center justify-center text-blue-300 font-bold mr-3">
                        {exp.company.charAt(0)}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-100">{exp.company}</h3>
                        <p className="text-gray-300">{exp.position}</p>
                      </div>
                    </div>
                    <span className="text-sm text-gray-400">{exp.period}</span>
                  </div>
                  <p className="text-sm text-gray-400 mb-3">{exp.location}</p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {exp.technologies.map((tech, i) => (
                      <span key={i} className="text-xs bg-gray-800 text-blue-300 px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Description points */}
                  <ul className="space-y-2 text-gray-300">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex">
                        <i className="fa-solid fa-angle-right text-blue-400 mt-1 mr-2" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.section>
          
          {/* Projects section */}
          <motion.section
            id="projects"
            className="bg-gray-900/60 backdrop-blur-sm rounded-xl p-6 border border-gray-800"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <i className="fa-solid fa-project-diagram mr-2 text-blue-400" /> 个人项目
            </h2>
            <div className="border-t border-gray-700 pt-4 space-y-8">
              {projects.map((project, index) => (
                <div key={index} className="group">

                  
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-gray-100 mb-2 sm:mb-0">{project.name}</h3>
                    <span className="text-sm text-gray-400">{project.period}</span>
                  </div>
                  
                  <p className="text-gray-300 mb-3">{project.role}</p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="text-xs bg-gray-800 text-blue-300 px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Description */}
                  <ul className="space-y-2 text-gray-300 mb-4">
                    {project.description.map((item, i) => (
                      <li key={i} className="flex">
                        <i className="fa-solid fa-angle-right text-blue-400 mt-1 mr-2" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* Project link */}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors text-sm"
                    >
                      <i className="fa-solid fa-external-link-alt mr-1" />
                      查看项目
                    </a>
                  )}
                </div>
              ))}
            </div>
          </motion.section>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="mt-16 py-6 text-center text-gray-400 text-sm">
        <div className="flex justify-center space-x-4 mb-4">
          <a href="#" className="hover:text-white transition-colors"><i className="fa-brands fa-github"></i></a>
          <a href="#" className="hover:text-white transition-colors"><i className="fa-brands fa-linkedin"></i></a>
          <a href="#" className="hover:text-white transition-colors"><i className="fa-solid fa-envelope"></i></a>
        </div>
        <p>© {new Date().getFullYear()} 李林峰的个人简历 | 使用React和Tailwind CSS构建</p>
      </footer>
    </div>
  );
};

export default Resume;