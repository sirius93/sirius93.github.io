# Latex template for resume

```
%-------------------------
% Resume in Latex
% Author : Nandan Kumar
% License : MIT
%------------------------

\documentclass[letterpaper,11pt]{article}

\usepackage{latexsym}
\usepackage[empty]{fullpage}
\usepackage{titlesec}
\usepackage{marvosym}
\usepackage[usenames,dvipsnames]{color}
\usepackage{verbatim}
\usepackage{enumitem}
\usepackage[hidelinks]{hyperref}
\usepackage{fancyhdr}
\usepackage[english]{babel}
\usepackage{tabularx}
\input{glyphtounicode}

\pagestyle{fancy}
\fancyhf{} % clear all header and footer fields
\fancyfoot{}
\renewcommand{\headrulewidth}{0pt}
\renewcommand{\footrulewidth}{0pt}

% Adjust margins
\addtolength{\oddsidemargin}{-0.5in}
\addtolength{\evensidemargin}{-0.5in}
\addtolength{\textwidth}{1in}
\addtolength{\topmargin}{-.5in}
\addtolength{\textheight}{1.0in}

\urlstyle{same}

\raggedbottom
\raggedright
\setlength{\tabcolsep}{0in}

% Sections formatting
\titleformat{\section}{
  \vspace{-4pt}\scshape\raggedright\large
}{}{0em}{}[\color{black}\titlerule \vspace{-5pt}]

% Ensure that generate pdf is machine readable/ATS parsable
\pdfgentounicode=1

%-------------------------
% Custom commands
\newcommand{\resumeItem}[2]{
  \item\small{
    \textbf{#1}{: #2 \vspace{-2pt}}
  }
}

% Just in case someone needs a heading that does not need to be in a list
\newcommand{\resumeHeading}[4]{
    \begin{tabular*}{0.99\textwidth}[t]{l@{\extracolsep{\fill}}r}
      \textbf{#1} & #2 \\
      \textit{\small#3} & \textit{\small #4} \\
    \end{tabular*}\vspace{-5pt}
}

\newcommand{\resumeSubheading}[4]{
  \vspace{-1pt}\item
    \begin{tabular*}{0.97\textwidth}[t]{l@{\extracolsep{\fill}}r}
      \textbf{#1} & #2 \\
      \textit{\small#3} & \textit{\small #4} \\
    \end{tabular*}\vspace{-5pt}
}

\newcommand{\resumeSubSubheading}[2]{
    \begin{tabular*}{0.97\textwidth}{l@{\extracolsep{\fill}}r}
      \textit{\small#1} & \textit{\small #2} \\
    \end{tabular*}\vspace{-5pt}
}

\newcommand{\resumeSubItem}[2]{\resumeItem{#1}{#2}\vspace{-4pt}}

\renewcommand{\labelitemii}{$\circ$}

\newcommand{\resumeSubHeadingListStart}{\begin{itemize}[leftmargin=*]}
\newcommand{\resumeSubHeadingListEnd}{\end{itemize}}
\newcommand{\resumeItemListStart}{\begin{itemize}}
\newcommand{\resumeItemListEnd}{\end{itemize}\vspace{-5pt}}

%-------------------------------------------
%%%%%%  CV STARTS HERE  %%%%%%%%%%%%%%%%%%%%%%%%%%%%


\begin{document}

%----------HEADING-----------------
\begin{tabular*}{\textwidth}{l@{\extracolsep{\fill}}r}
  \textbf{\href{https://nandan.dev}{\Large Nandan Kumar}} & Email : \href{mailto:connect@nandan.dev}{connect@nandan.dev}\\
  \href{https://nandan.dev}{https://nandan.dev} & Mobile : \href{tel:+91-7676075016}{+91-7676075016} \\
\end{tabular*}


%-----------EDUCATION-----------------
\section{Education}
  \resumeSubHeadingListStart
    \resumeSubheading
      {PES Institute of Technology}{Bengaluru, KA}
      {Bachelor of Engineering in Computer Science}{Sep. 2012 -- Jun. 2016}

  \resumeSubHeadingListEnd


%-----------EXPERIENCE-----------------
\section{Experience}
  \resumeSubHeadingListStart

    \resumeSubheading
      {o9Solutions}{Bengaluru, KA}
      {Senior Software Engineer}{July 2019 - Present}
      \resumeItemListStart
      \resumeItem{ASP.NET Migration}
          {Currently Leading the migration of an ASP.NET Core MVC project to .NET Core 6 MVC, ensuring a seamless transition, cross-platform support, and improved performance.}
        \resumeItem{Natural Language Processing}
          {Leading the development and implementation of the NLP
search feature, utilizing extensive expertise in natural language
processing to deliver advanced search capabilities.}
        \resumeItem{War Room \& Multi-Party Collaboration Feature}
          {Led the development and deployment of a collaborative Multi-Party “War Room” feature, fostering seamless planning and communication between buyers and suppliers while ensuring data protection. Ensured a smooth transition for overall \$8 Million accounts for Leading Automobile \& Telecom Brands. }
        \resumeItem{Large Language Model}
          {Successfully deployed an advanced Large Language Model chatbot for
o9 resources, driving efficiency and enhancing user experiences.}
         \resumeItem{NLP Actions}
          {Worked on Implementing the NLP search-based actions feature,
enabling users to perform complex actions through natural language
commands.}
        \resumeItem{Dark Mode}
          {Led the implementation of the Dark mode feature, resulting in
improved accessibility and heightened user satisfaction.}
        \resumeItem{Charts}
          {Successfully Implemented the Pie chart and the Gauge Chart widget
along with the config.}
        \resumeItem{UI Facelift}
          {Successfully led the implementation of UI facelifting of the App
including multiple fonts and multiple themes support.}
        \resumeItem{Online Meetings}
          {Spearheaded the complete implementation of the online meetings
feature, which enhanced collaboration and streamlined
communication processes for all users.}
         \resumeItem{File Upload \& Default Landing}
            {Enhanced the File upload feature workspace, and implemented the default landing page feature.}
        \resumeItem{TLS 1.2}
         {Integrated TLS 1.2 across Redis, R-serve, Thrift, and HBase, resulting in robust security and encrypted communication between middleware and the respective service deployments for 10 key customers.}
        
      \resumeItemListEnd
      
% --------Multiple Positions Heading------------
%    \resumeSubSubheading
%     {Software Engineer I}{Oct 2014 - Sep 2016}
%     \resumeItemListStart
%        \resumeItem{Apache Beam}
%          {Apache Beam is a unified model for defining both batch and streaming data-parallel processing pipelines}
%     \resumeItemListEnd
%    \resumeSubHeadingListEnd
%-------------------------------------------

    \resumeSubheading
      {Publicis Sapient}{Bengaluru, KA}
      {Associate L2(Front End)}{Oct 2016 - Jun 2019}
      \resumeItemListStart
        \resumeItem{Nissan}
          {Being part of the development team, I was responsible for creating web components and fixing bugs for the car configurator feature.}
        \resumeItem{LCBO}
          {As part of the development team, I worked on developing the LCBO web page application with some basic features i.e. Section Header, Accordion, Hero Banner etc. as well as advance features i.e. Store locator. }
        \resumeItem{Rogers}
          {As part of the development team, I was responsible for implementing some of the major reusable components i.e. Header, footer, and Accordion. Additionally, I worked on implementing State management using NgRx State for functional implementation.}
      \resumeItemListEnd

  \resumeSubHeadingListEnd


%--------PROGRAMMING SKILLS------------
\section{Technical Skills}
 \begin{itemize}[leftmargin=0.15in, label={}]
    \small{\item{
     \textbf{Languages}{: CSharp, Python, JavaScript, HTML/CSS} \\
     \textbf{Frameworks}{: Angular, Node.js, .Net Core, WebAPI, KendoUI } \\
     \textbf{Developer Tools \& Databases}{:Git, Docker, Google Cloud Platform, Postgres, MSSql , MongoDB, Solr  } \\
     \textbf{Libraries}{: React, Jquery, JQPlot}
    }}
 \end{itemize}

\section{Achievments}
 \begin{itemize}[leftmargin=0.15in, label={}]
    \small{\item{
     \textbf{o9Solutions}{ - Performer of the Quarter October 2023 \& Performer of the Month- July 2021. } \\
     \textbf{Personal}{ - Featured on BBC, Boing Boing, Saudi Gazette, Mashable, TOI, Hindustan Times, Deccan Herald and 100+ News portals. } \\
     \textbf{Speaker}{ - Sapient’s XT SUMMIT 2017 on AMP/PWA.}\\
     \textbf{Mentor}{ - Super Mentor For Career Growth at Topmate.io .}\\
     \textbf{Blogger}{ - A tech blogger with over 20,000 readers and 2,000 subscribers. }\\
    }}
 \end{itemize}

%-------------------------------------------
\end{document}
```
