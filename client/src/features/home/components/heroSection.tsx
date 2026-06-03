
import React from "react";
import { 
    Card, 
    CardContent, 
    CardDescription, 
    CardHeader, 
    CardTitle,
} from "@/components/ui/card"


import {
    ReactOriginal, NextjsOriginal, TypescriptOriginal, TailwindcssOriginal,
    NodejsOriginal, ExpressOriginal, PhpOriginal, PythonOriginal,
    MongodbOriginal, MysqlOriginal,
    GitOriginal, GithubOriginal, VscodeOriginal, PostmanOriginal,
    BootstrapOriginal,
    JavascriptOriginal,
    Css3Original,
    VitejsOriginal,
    Html5Original,
    ExpoOriginal,
    PostgresqlOriginal,
    FacebookOriginal,
} from "devicons-react";
import { Mail, Phone } from "lucide-react";

import { FaGithub} from "react-icons/fa"
import { RecentProjects } from "./recentProjects";




export const HeroSection = () => {

    type StackItem = {
        label: string
        icon: React.ComponentType<{ size?: number }>
    }

    const techStack: { 

        category: string; 
        items: StackItem[] 
    
    }[] = [
        {
            category: "Frontend",
            items: [
                { label: 'HTML', icon: Html5Original},
                { label: "CSS", icon: Css3Original},
                { label: 'JavaScript', icon: JavascriptOriginal},
                { label: "TypeScript", icon: TypescriptOriginal },
                { label: "React", icon: ReactOriginal },
                { label: "Vite", icon: VitejsOriginal},
                { label: "Bootstrap", icon: BootstrapOriginal},
                { label: 'React Native + Expo', icon: ExpoOriginal},
                { label: "Next.js", icon: NextjsOriginal },
                { label: "Tailwind CSS", icon: TailwindcssOriginal },
            ],
        },
        {
            category: "Backend",
            items: [
                { label: "Python", icon: PythonOriginal },
                { label: "PHP", icon: PhpOriginal },
                { label: "Node.js", icon: NodejsOriginal },
                { label: "Express", icon: ExpressOriginal },
            ],
        },
        {
            category: "Database",
            items: [
                { label: "MySQL", icon: MysqlOriginal },
                { label: "MongoDB", icon: MongodbOriginal },
                { label: "PostgreSql", icon: PostgresqlOriginal},
            ],
        },
        {
            category: "Tools",
            items: [
                { label: "Git", icon: GitOriginal },
                { label: "GitHub", icon: GithubOriginal },
                { label: "VS Code", icon: VscodeOriginal },
                { label: "Postman", icon: PostmanOriginal },
            ],
        },
    ]

    const experiences = [
        { title: "BS Information Technology", company: "Cavite State University", year: "2026", active: true },
        { title: "Hello World! 🌱", company: "Wrote my first line of code", year: "2022" },
    ]



    return (
        <>
            
            <div className="col-span-12 md:col-span-8">
                <Card className="rounded-none ring-0 shadow-sm ">
                    <CardHeader>
                        <CardTitle>About</CardTitle>
                    </CardHeader>
                    
                    <CardContent className="font-medium " >
                        <CardDescription>
                            Hi, I'm Carlos, a BS Information Technology student who enjoys turning ideas into functional web applications. My primary language is JavaScript, and I love building projects with React and Node.js.
                        </CardDescription>

                        <CardDescription className="mt-5">
                            Aside from JavaScript, I also work with PHP and Python for backend development, database integration, and automation tasks. I enjoy learning new technologies and continuously improving my problem-solving skills through hands-on projects.
                        </CardDescription>

                        <CardDescription className="my-5">
                            When I'm not coding, you'll probably find me exploring new development tools, studying software engineering concepts, or working on personal projects to strengthen my full-stack development skills. I'm currently focused on becoming a professional software engineer and building solutions that make a meaningful impact.
                        </CardDescription>
                    </CardContent>
                </Card>
            </div>

            <div className="col-span-12 md:col-span-4 ">
                <Card className="rounded-none shadow-sm ring-0 h-full">
                    <CardHeader>
                        <CardTitle>Contacts</CardTitle>
                    </CardHeader>
                    <CardContent className="px-6 pb-6">
                        <div className="flex flex-col gap-3">
                            <span
                                className="flex items-center gap-3 py-2.5 border-b border-border text-sm text-muted-foreground hover:text-foreground transition-colors"
                            >
                                <Phone className="w-4 h-4 shrink-0" />
                                <span>+63 991 137 5276</span>
                            </span>

                            <a
                            
                                href="mailto:loyolacarlos162@gmail.com"
                                className="flex items-center gap-3 py-2.5 border-b border-border text-sm text-muted-foreground hover:text-foreground transition-colors"
                            >
                                <Mail className="w-4 h-4 shrink-0" />
                                <span>loyolacarlos162@gmail.com</span>
                            </a>
                            <a
                            
                                href="https://github.com/devLos12"
                                target="_blank"
                                className="flex items-center gap-3 py-2.5 border-b border-border text-sm text-muted-foreground hover:text-foreground transition-colors"
                            >
                                <FaGithub className="w-4 h-4 shrink-0 text-foreground" />
                                <span>github.com/devLos012</span>
                            </a>
                       
                            <a
                                href="https://facebook.com/carlows012.loyola"
                                target="_blank"
                                className="flex items-center gap-3 py-2.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                            >
                                <FacebookOriginal className="w-4 h-4 shrink-0" />
                                <span>facebook.com/carlows012.loyola</span>
                            </a>
                        </div>
                    </CardContent>
                </Card>
            </div>
            

            <div className="col-span-12 md:col-span-8 order-2 md:order-1">
                <Card className="rounded-none ring-0 shadow-sm ">
                    <CardHeader>
                        <CardTitle>Tech Stack</CardTitle>
                    </CardHeader>
                    <CardContent className="mt-5">
                    <div className="flex flex-col gap-5">
                        {techStack.map((group) => (
                        <div key={group.category}>
                            <p className="text-[11px] font-medium text-muted-foreground uppercase tracking-widest mb-2.5">
                            {group.category}
                            </p>
                            <div className="grid grid-cols-4 gap-2">
                            {group.items.map((item) => {


                                return (
                                <div
                                    key={item.label}
                                    className="flex flex-col items-center gap-1.5 p-2.5 border border-border rounded-md bg-muted/30 dark:bg-gray-50"
                                >
                                    <item.icon size={22} />
                                    <span className="text-[11px] text-muted-foreground dark:text-black text-center leading-tight">
                                    {item.label}
                                    </span>
                                </div>
                                )
                            })}
                            </div>
                        </div>
                        ))}
                    </div>
                    </CardContent>
                </Card>
            </div>

            <div className="col-span-12 md:col-span-4 order-1 md:order-2">
                <Card className="rounded-none ring-0 shadow-sm h-full">
                <CardHeader>
                    <CardTitle>Experience</CardTitle>
                </CardHeader>
                <CardContent className="px-6 pb-6">
                    <div className="flex flex-col">
                    {experiences.map((item, i) => (
                        <div
                        key={i}
                        className="flex items-start gap-3 py-2.5 border-b border-border last:border-0"
                        >
                        <div
                            className={`mt-1 w-3 h-3 shrink-0 rounded-sm border ${
                            item.active
                                ? "bg-foreground border-foreground"
                                : "border-muted-foreground"
                            }`}
                        />
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium leading-snug">{item.title}</p>
                            <p className="text-xs text-muted-foreground leading-snug">{item.company}</p>
                        </div>
                        <span className="text-xs text-muted-foreground shrink-0 pt-0.5">
                            {item.year}
                        </span>
                        </div>
                    ))}
                    </div>
                </CardContent>
                </Card>
            </div>

            <div className="col-span-12 md:col-span-12 order-3 md:order-4">
                <RecentProjects/>
            </div>  
        </>
    )

}



