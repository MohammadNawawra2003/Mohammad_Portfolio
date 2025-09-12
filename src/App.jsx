import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  Download, 
  ExternalLink,
  ChevronDown,
  Menu,
  X,
  Code,
  Briefcase,
  GraduationCap,
  Award,
  User,
  FileText,
  Star,
  Calendar,
  Building
} from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx';
import { Badge } from '@/components/ui/badge.jsx';
import './App.css';
import MohammadImage from './assets/Mohammad.jpeg';
import CSSEClubLogo from './assets/CSSEClubLogo.jpeg';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'education', 'experience', 'projects', 'skills', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Home', icon: User },
    { id: 'about', label: 'About', icon: FileText },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'projects', label: 'Projects', icon: Code },
    { id: 'skills', label: 'Skills', icon: Star },
    { id: 'contact', label: 'Contact', icon: Mail }
  ];

  const projects = [
    {
      title: "Abaqus Workshop - Structural Simulation",
      description: "Led comprehensive workshops on ABAQUS for structural simulation, covering cantilever beam analysis, element types (C3D8, C3D8R, C3D4), and finite element analysis concepts including shear locking and hourglassing.",
      technologies: ["Abaqus", "FEA", "Structural Analysis", "MATLAB"],
      category: "Workshop",
      date: "2024"
    },
    {
      title: "Numerical Methods for Fluid Mechanics",
      description: "Advanced coursework in computational fluid dynamics, implementing numerical methods for solving heat equations with Neumann boundary conditions using finite element methods and forward Euler time discretization.",
      technologies: ["CFD", "Finite Element Method", "Numerical Analysis", "Heat Transfer"],
      category: "Academic",
      date: "2024"
    },
    {
      title: "Deformation and Stress Analysis - Cantilever Beam",
      description: "Comprehensive analysis of cantilever beam behavior using different element types, comparing analytical and numerical solutions, and studying the effects of mesh refinement on accuracy.",
      technologies: ["Abaqus", "Structural Analysis", "Mesh Analysis", "Von Mises Stress"],
      category: "Research",
      date: "2024"
    },
    {
      title: "CSSE Club Leadership",
      description: "Vice Chair of the Computer Simulation and Software Engineering Club at Bethlehem University, organizing workshops, managing club activities, and fostering collaboration in computational engineering.",
      technologies: ["Leadership", "Event Management", "Technical Workshops"],
      category: "Leadership",
      date: "2024-Present"
    },
    {
      title: "Simulation Program Development",
      description: "Developed simulation programs for various engineering applications, focusing on computational methods and software engineering principles.",
      technologies: ["Programming", "Simulation", "Software Development"],
      category: "Development",
      date: "2024"
    },
    {
      title: "ProMax Traineeship Program",
      description: "Participated in an intensive traineeship program focusing on advanced engineering simulation techniques and professional development in computational engineering.",
      technologies: ["Professional Development", "Engineering Simulation", "Training"],
      category: "Training",
      date: "2025"
    }
  ];

  const skills = [
    { category: "Simulation Software", items: ["Abaqus", "ANSYS", "MATLAB", "Simulink"] },
    { category: "Programming", items: ["Python", "C++", "JavaScript", "MATLAB"] },
    { category: "Engineering", items: ["Finite Element Analysis", "Computational Fluid Dynamics", "Structural Analysis", "Heat Transfer"] },
    { category: "Tools & Technologies", items: ["Git", "Linux", "CAD Software", "Technical Writing"] },
    { category: "Soft Skills", items: ["Leadership", "Project Management", "Technical Presentation", "Team Collaboration"] }
  ];

  const certifications = [
    "Python HackerRank Certificate",
    "Basics of Algebra by Geeks Lesson",
    "AI-Powered Performance Ads Certification - Google",
    "AWS Flash - Cybersecurity for Small Business Owners",
    "AI for Beginners - HP",
    "Become an AI-Powered Marketer - Semrush",
    "CS50x: Introduction to Computer Science - EdX",
    "Calculus - Wolfram U",
    "DIGITAL SKILLS MOBILE - FutureLearn",
    "Describe security and compliance concepts - Microsoft",
    "ENGR2000X-A Hands-on Introduction to Engineering Simulations - Cornell",
    "FEM - Linear, Nonlinear Analysis & Post-Processing - Coursera",
    "Java Programming Masterclass - Udemy",
    "LinkedIn Recruiter and AI-Driven Talent Acquisition",
    "MATLAB Coder Onramp - MathWorks",
    "Machine Learning with Python - freeCodeCamp",
    "Squares, roots and powers - The Open University",
    "Triple Integrals in Cylindrical Coordinates - MindLuster",
    "Introduction to Python - DataCamp"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-900">
      {/* Navigation */}
      <motion.nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div 
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
            >
              Mohammad Nawawra
            </motion.div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                      activeSection === item.id 
                        ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400' 
                        : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon size={16} />
                    <span>{item.label}</span>
                  </motion.button>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-gray-700"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-4 py-2 space-y-2">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`flex items-center space-x-3 w-full px-3 py-2 rounded-lg transition-all duration-200 ${
                        activeSection === item.id 
                          ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400' 
                          : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                      }`}
                    >
                      <Icon size={16} />
                      <span>{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1 
                className="text-5xl lg:text-7xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                  Computer Simulation
                </span>
                <br />
                <span className="text-gray-800 dark:text-gray-200">Engineer</span>
              </motion.h1>
              
              <motion.p 
                className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Passionate about numerical methods, finite element analysis, and computational engineering. 
                Currently pursuing my Bachelor's degree at Bethlehem University with expertise in ABAQUS, 
                MATLAB, and advanced simulation techniques.
              </motion.p>
              
              <motion.div 
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  onClick={() => scrollToSection('contact')}
                >
                  <Mail className="mr-2" size={20} />
                  Get In Touch
                </Button>
                <Button 
 variant="outline" 
 size="lg"
 onClick={() => {
   window.open('https://github.com/MohammadNawawra2003/mohammad-portfolio/blob/main/public/Mohammad%20Alnawawreh%20CV.pdf', '_blank');
 }}
>
<Download className="mr-2" size={20} />
View CV
</Button>
              </motion.div>

              <motion.div 
                className="flex space-x-6 mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                <motion.a
                  href="https://linkedin.com/in/mnawawra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Linkedin size={24} />
                </motion.a>
                <motion.a
                  href="mailto:mnawawra900@gmail.com"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  whileHover={{ scale: 1.2, rotate: -5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Mail size={24} />
                </motion.a>
                <motion.a
                  href="tel:+972568833066"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Phone size={24} />
                </motion.a>
              </motion.div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-3xl opacity-20"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 180, 360]
                  }}
                  transition={{ 
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                <motion.img
                  src={MohammadImage}
                  alt="Mohammad Nawawra"
                  className="relative z-10 w-96 h-96 object-cover rounded-full shadow-2xl border-4 border-white dark:border-gray-800"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown size={32} className="text-gray-400" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              I'm a highly motivated Computer Simulation Engineer with a strong academic background and practical experience 
              in numerical methods, finite element analysis, and programming.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 items-center">
            <motion.div 
              className="lg:col-span-2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">My Journey</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Currently pursuing my Bachelor's degree in Computer Engineering at Bethlehem University, I have developed a deep passion for computational engineering and simulation technologies.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                As Vice Chair of the CSSE Club at Bethlehem University, I lead workshops on ABAQUS and structural simulation, sharing knowledge with fellow students and fostering a collaborative learning environment.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                My academic journey has taken me to Université catholique de Louvain in Belgium, where I contributed to the international XMesh Project as one of the few bachelor students in a graduate research environment.
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="text-center">
                <CardContent className="pt-6">
                  <GraduationCap className="mx-auto mb-4 text-blue-600" size={48} />
                  <h4 className="font-bold text-lg mb-2">Education</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Bachelor's in Computer Engineering</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Award className="mx-auto mb-4 text-purple-600" size={48} />
                  <h4 className="font-bold text-lg mb-2">GPA</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">3.39 / 4.00</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Briefcase className="mx-auto mb-4 text-green-600" size={48} />
                  <h4 className="font-bold text-lg mb-2">Leadership</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">CSSE Club Vice Chair</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Star className="mx-auto mb-4 text-yellow-500" size={48} />
                  <h4 className="font-bold text-lg mb-2">Certifications</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">20+ Professional Certificates</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-slate-100 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Education
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              My academic journey in computational engineering
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Bethlehem University</CardTitle>
                    <CardDescription>
                      Bachelor's degree, Computer Engineering
                    </CardDescription>
                  </div>
                  <Building className="text-gray-400" />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Sep 2021 - Jul 2025 • GPA: 3.39
                </p>
                <div className="mb-4">
                  <Badge variant="secondary" className="mr-2 mb-2">Computational Fluid Dynamics (CFD)</Badge>
                  <Badge variant="secondary" className="mr-2 mb-2">Finite Element Analysis (FEA)</Badge>
                  <Badge variant="secondary" className="mr-2 mb-2">+2 skills</Badge>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Bethlehem, West Bank</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Université catholique de Louvain</CardTitle>
                    <CardDescription>
                      Bachelor's degree, Computer Simulations in Science and Engineering
                    </CardDescription>
                  </div>
                  <Building className="text-gray-400" />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Mar 2025 - Jun 2025
                </p>
                <div className="mb-4">
                  <Badge variant="secondary" className="mr-2 mb-2">FEM analysis</Badge>
                  <Badge variant="secondary" className="mr-2 mb-2">Computational Fluid Dynamics (CFD)</Badge>
                  <Badge variant="secondary" className="mr-2 mb-2">+1 skill</Badge>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Contributed to the international XMesh Project as one of the few bachelor students in a graduate research environment.
                </p>
              </CardContent>
            </Card>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-800 dark:text-gray-200">Certifications & Courses</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {certifications.map((cert, index) => (
                <Badge key={index} variant="outline">{cert}</Badge>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-white dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Experience
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Professional experience and leadership roles
            </p>
          </motion.div>

          <div className="space-y-12">
            <motion.div 
              className="flex flex-col md:flex-row items-center gap-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="w-full md:w-1/3 text-left md:text-right">
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">Vice Chair</h3>
                <p className="text-gray-500 dark:text-gray-400">CSSE Club at Bethlehem University</p>
                <p className="text-sm text-gray-400 dark:text-gray-500">2024 - Present</p>
              </div>
              <div className="w-full md:w-2/3 pl-8 border-l-2 border-blue-500">
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Leading the Computer Simulation and Software Engineering Club, organizing technical workshops, managing club activities, and fostering collaboration among students interested in computational engineering.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge>Leadership</Badge>
                  <Badge>Event Management</Badge>
                  <Badge>Technical Workshops</Badge>
                  <Badge>Team Collaboration</Badge>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="flex flex-col md:flex-row-reverse items-center gap-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="w-full md:w-1/3 text-left">
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">Trainee</h3>
                <p className="text-gray-500 dark:text-gray-400">ProMax Traineeship Program</p>
                <p className="text-sm text-gray-400 dark:text-gray-500">2025</p>
              </div>
              <div className="w-full md:w-2/3 pr-8 border-r-2 border-purple-500 text-left md:text-right">
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Participating in an intensive traineeship program focusing on advanced engineering simulation techniques and professional development in computational engineering.
                </p>
                <div className="flex flex-wrap gap-2 justify-start md:justify-end">
                  <Badge>Professional Development</Badge>
                  <Badge>Engineering Simulation</Badge>
                  <Badge>Training</Badge>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="flex flex-col md:flex-row items-center gap-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="w-full md:w-1/3 text-left md:text-right">
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">Workshop Leader</h3>
                <p className="text-gray-500 dark:text-gray-400">ABAQUS Structural Simulation Workshops</p>
                <p className="text-sm text-gray-400 dark:text-gray-500">2024</p>
              </div>
              <div className="w-full md:w-2/3 pl-8 border-l-2 border-blue-500">
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Led comprehensive workshops on ABAQUS for structural simulation, covering cantilever beam analysis, element types, and finite element analysis concepts including shear locking and hourglassing.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge>ABAQUS</Badge>
                  <Badge>FEA</Badge>
                  <Badge>Teaching</Badge>
                  <Badge>Structural Analysis</Badge>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-slate-100 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Projects & Research
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Showcasing my work in computational engineering and simulation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full flex flex-col">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <Badge variant="default" className="mb-2">{project.category}</Badge>
                        <CardTitle>{project.title}</CardTitle>
                      </div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{project.date}</p>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <Badge key={i} variant="secondary">{tech}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Skills & Expertise
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Technical skills and competencies I've developed
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skillCategory, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>{skillCategory.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {skillCategory.items.map((skill, i) => (
                        <Badge key={i} variant="outline">{skill}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-blue-700 to-purple-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              Let's Connect
            </h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              I'm always open to discussing new opportunities and collaborations
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold mb-6">Get In Touch</h3>
              <div className="space-y-6">
                <motion.a
                  href="mailto:mnawawra900@gmail.com"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center space-x-4 p-4 bg-white/10 rounded-lg w-full md:w-auto"
                >
                  <Mail size={24} />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-blue-100">mnawawra900@gmail.com</p>
                  </div>
                </motion.a>
                <motion.a
                  href="https://linkedin.com/in/mnawawra"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center space-x-4 p-4 bg-white/10 rounded-lg w-full md:w-auto"
                >
                  <Linkedin size={24} />
                  <div>
                    <p className="font-semibold">LinkedIn</p>
                    <p className="text-blue-100">linkedin.com/in/mnawawra</p>
                  </div>
                </motion.a>
                <motion.a
                  href="tel:+972568833066"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center space-x-4 p-4 bg-white/10 rounded-lg w-full md:w-auto"
                >
                  <Phone size={24} />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-blue-100">+972 568833066</p>
                  </div>
                </motion.a>
                <div className="flex items-center space-x-4 p-4 bg-white/10 rounded-lg">
                  <MapPin size={24} />
                  <div>
                    <p className="font-semibold">Location</p>
                    <p className="text-blue-100">Bethlehem, West Bank</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white/10 p-8 rounded-lg shadow-2xl"
            >
              <h3 className="text-2xl font-bold mb-6">Ready to Collaborate?</h3>
              <p className="text-blue-200 mb-6">
                Whether you're looking for a simulation engineer, need help with computational projects, or want to discuss research opportunities, I'd love to hear from you.
              </p>
              <Button 
                size="lg" 
                className="w-full bg-white text-blue-700 hover:bg-blue-100"
                onClick={() => scrollToSection('contact')}
              >
                <Mail className="mr-2" size={20} />
                Send Message
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-gray-400 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2025 Mohammad Nawawra. All rights reserved.</p>
          <p className="text-sm">Built with React, Tailwind CSS, and Framer Motion</p>
        </div>
      </footer>
    </div>
  );
}

export default App;


