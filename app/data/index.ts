export interface socials_d {
    name: string;
    href: string;
}
export interface projects_d {
    name: string;
    href: string;
    technologies: string[];
    description: string;
}
export interface skills_d {
    name: string;
    list: string[];
}

export const project_list: projects_d[] = [
    {
        name: 'Socnet',
        href: 'https://socnet-frontend-one.vercel.app/',
        technologies: ['React','Express.js', 'MongoDB',  'Node.js'],
        description: 'A web application for sharing and all social media details in one single card format.'
    },
    {
        name: 'Chat app',
        href: 'https://mern-chatapp-frontend-psi.vercel.app/',
        technologies: ['React','Express.js', 'MongoDB',  'Node.js', 'Socket,io'],
        description: 'A real-time chat application with WebSocket support for instant messaging and MongoDB for storing messages and user data.'
    },
    {
        name: 'XBlog app',
        href: 'https://xblog-amber.vercel.app/',
        technologies: ['React', 'TypeScript', 'Prisma','Postgresql', 'Hono', 'Cloudflare','TailwindCSS'],
        description: 'A blogging platform inspired by Medium, where users can create, edit, and publish blogs using a seamless user interface.'
    },
    {
        name: 'Gyan card',
        href: 'https://gyan-card.vercel.app/',
        technologies: ['Nextjs', 'TypeScript', 'Prisma', 'TailwindCSS', 'cloudinary'],
        description: 'A web application for sharing and accessing bite-sized knowledge cards on various topics, designed to improve knowledge retention.'
    },
    {
        name: 'Portfolio website',
        href: 'https://tsportfolio-repo.vercel.app/',
        technologies: ['Nextjs', 'TypeScript', 'Aeternity UI', 'React', 'TailwindCSS'],
        description: 'A personal portfolio website showcasing skills, projects, and contact information with a professional and responsive design.'
    },
    {
        name: 'Traffic sign board',
        href: 'https://2bxyuirgwqswmwppdwwgmxtrafficwebapp.streamlit.app/',
        technologies: ['Streamlit', 'Python', 'Machine Learning', 'OpenCV'],
        description: 'An AI-based web app that identifies and recognizes traffic signs using machine learning models and computer vision techniques.'
    },
    {
        name: 'Spam mail prediction system',
        href: 'https://spammailpredictionwebapp-lck76iojgroa7aq4xwimnispamprediction.streamlit.app/',
        technologies: ['Streamlit', 'Python', 'Scikit-learn', 'NLP','Tensorflow'],
        description: 'A machine learning web app that predicts whether an email is spam or not using natural language processing and Scikit-learn models.'
    }
];

export const skills_list:skills_d[]=[
    {
        name:'Web-development',
        list:["Nextjs","MERN","Hono","TailwindCSS","framer_motion"]
    },
    {
        name:'Languages',
        list:["Python","Typescript","javascript"]
    },
    {
        name:'Database',
        list:["MongoDB","Prisma-ORM","postgresql"]
    },
    {
        name:'Version-control',
        list:["Git","Github"]
    },
    {
        name:'Machine Learning',
        list:["Tensorflow","Pandas","Keras","Numpy"]
    }
]
    
// export const skills_list:string[]=["Typescript","Nextjs","React","Expressjs","Prisma-ORM","TailwindCSS","postgresql","mongoDB","Docker","Python","Machine learning","Tensorflow","Pandas","Keras"]

export const socials_list:socials_d[]=[
    {
        name: 'github',
        href: 'https://github.com/ganeshkondaka',
    },
    {
        name: 'gmail',
        href: 'ganeshjo306.com',
    },
    {
        name: 'x',
        href: 'https://x.com/ganesh_kondaka',
    },
    {
        name: 'linkedin',
        href: 'https://www.linkedin.com/in/kondaka-ganesh-b402bb252/',
    },
]