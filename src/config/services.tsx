import {
    FileText,
    BookOpen,
    Search,
    ClipboardList,
    FileQuestion,
    BookMarked,
    LayoutTemplate,
    Code,
    Shield,
    Sparkles,
  } from "lucide-react"
  
  export const serviceCategories = [
    {
      id: "research-planning",
      name: "Research Planning",
      description: "Establish a solid foundation for your research journey with our planning services.",
      services: [
        {
          icon: <Search className="h-10 w-10" />,
          title: "Topic Making Service",
          description:
            "Expert assistance in selecting relevant, impactful research topics aligned with current trends and your interests.",
          link: "/topicmakings",
          color: "from-blue-500 to-blue-700",
        },
        {
          icon: <ClipboardList className="h-10 w-10" />,
          title: "Synopsis/Research Outline",
          description:
            "Comprehensive research outlines that establish a clear framework for your thesis or dissertation.",
          link: "/synopsis",
          color: "from-indigo-500 to-indigo-700",
        },
        {
          icon: <FileQuestion className="h-10 w-10" />,
          title: "Questionnaire",
          description:
            "Expertly designed questionnaires for effective data collection tailored to your research objectives.",
          link: "/question",
          color: "from-purple-500 to-purple-700",
        },
      ],
    },
    {
      id: "writing-analysis",
      name: "Writing & Analysis",
      description: "Transform your research into compelling, well-structured academic content.",
      services: [
        {
          icon: <BookOpen className="h-10 w-10" />,
          title: "Thesis Writing",
          description:
            "Professional thesis writing assistance tailored to your specific academic needs and university requirements.",
          link: "/thesiswriting",
          color: "from-cyan-500 to-cyan-700",
        },
        {
          icon: <FileText className="h-10 w-10" />,
          title: "Thesis Analysis and Summary",
          description:
            "Expert analysis of research data and comprehensive summaries that highlight key findings and implications.",
          link: "/thesisanalysis",
          color: "from-teal-500 to-teal-700",
        },
        {
          icon: <Sparkles className="h-10 w-10" />,
          title: "AI Content Rewriting",
          description:
            "Advanced AI-powered content refinement to enhance clarity, coherence, and academic quality of your thesis.",
          link: "/rewriting",
          color: "from-amber-500 to-amber-700",
        },
      ],
    },
    {
      id: "publication-support",
      name: "Publication & Support",
      description: "Ensure your research meets the highest standards and reaches your target audience.",
      services: [
        {
          icon: <BookMarked className="h-10 w-10" />,
          title: "Paper Publication",
          description:
            "Comprehensive support for publishing your research in prestigious journals and academic publications.",
          link: "/publication",
          color: "from-green-500 to-green-700",
        },
        {
          icon: <Shield className="h-10 w-10" />,
          title: "Plagiarism Service",
          description:
            "Thorough plagiarism detection and removal services to ensure the originality and integrity of your work.",
          link: "/plagiarism",
          color: "from-red-500 to-red-700",
        },
        {
          icon: <LayoutTemplate className="h-10 w-10" />,
          title: "Pattern Service",
          description: "Structured patterns and templates to ensure thesis quality, organization, and thorough analysis.",
          link: "/pattern",
          color: "from-pink-500 to-pink-700",
        },
        {
          icon: <Code className="h-10 w-10" />,
          title: "Implementation Service",
          description:
            "Expert assistance in implementing research methodologies and technical solutions for your thesis.",
          link: "/implementation",
          color: "from-violet-500 to-violet-700",
        },
      ],
    },
  ]
  
  export const keyBenefits = [
    "Expert guidance from PhD-qualified professionals",
    "Customized solutions tailored to your specific needs",
    "Timely delivery to meet your academic deadlines",
    "Original, plagiarism-free content",
    "Comprehensive support throughout your research journey",
    "Adherence to university guidelines and academic standards",
  ]
  