import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"

import EFarmersThumb from "@/assets/efarmers.png"
import FranciscoOsorioThumb from "@/assets/foish.png"
import ERiderAppThumb from '@/assets/rider-app.png';

type Project = {
    title: string
    description: string
    badge: string
    badgeVariant?: "default" | "secondary" | "destructive" | "outline"
    stack: string[]
    url: string
    thumbnail?: string
}

const projects: Project[] = [
    {
        title: "E Farmers Hub",
        description:
            "A platform connecting farmers with buyers, enabling digital transactions and market access for agricultural communities.",
        badge: "Web App",
        badgeVariant: "secondary",
        stack: ["React", "Node.js", "Express.js", "MongoDb"],
        url: "https://www.efarmershub.com/",
        thumbnail: EFarmersThumb,
    },

    {
        title: "E-Rider App",
        description: "A Delivery management for E-Farmers Hub riders",
        badge: "Mobile App",
        badgeVariant: "outline",
        stack: ["Expo", "Node.js", "Express.js", "MongoDb"],
        url: "",
        thumbnail: ERiderAppThumb,
    },


    {
        title: "Francisco Osorio SHS",
        description:
            "A school website for Francisco Osorio Senior High School, providing information and resources for students and faculty.",
        badge: "Web App",
        badgeVariant: "outline",
        stack: ["React", "Node.js", "Express.js", "MongoDb"],
        url: "https://www.fransiscoosorioedu.com/",
        thumbnail: FranciscoOsorioThumb,
    },


]

export const RecentProjects = () => {
    return (
        <Card className="rounded-none ring-0 shadow-sm ">
            <CardHeader>
                <CardTitle>Recent Projects</CardTitle>
            </CardHeader>

            <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {projects.map((project) => (
                        <Card
                            key={project.title}
                            className="rounded-none ring-0 shadow-sm overflow-hidden pt-0 pb-0 flex flex-col"
                        >
                            {/* Thumbnail — clickable, may hover overlay */}
                            <a
                                href={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full aspect-video bg-muted overflow-hidden relative group block"
                            >
                                {project.thumbnail ? (
                                    <img
                                        src={project.thumbnail}
                                        alt={`${project.title} thumbnail`}
                                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center text-muted-foreground text-xs">
                                        No thumbnail yet
                                    </div>
                                )}
                                {/* Hover overlay */}
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <span className="flex items-center gap-1.5 text-white text-xs font-medium border border-white/40 px-3 py-1.5 rounded-sm backdrop-blur-sm">
                                        Visit Site
                                        <ExternalLink className="w-3 h-3" />
                                    </span>
                                </div>
                            </a>

                            {/* Card Info */}
                            <CardHeader className="pb-2">
                                <div className="flex items-start justify-between gap-2">
                                    <CardTitle className="text-sm leading-snug">
                                        {project.title}
                                    </CardTitle>
                                    <Badge variant={project.badgeVariant} className="text-[10px] shrink-0">
                                        {project.badge}
                                    </Badge>
                                </div>
                                <CardDescription className="text-xs leading-relaxed">
                                    {project.description}
                                </CardDescription>
                            </CardHeader>

                            {/* Footer: Stack tags lang na */}
                            <div className="mt-auto p-4 border-t border-border flex items-center gap-1 flex-wrap bg-muted">
                                <div className="flex gap-1">
                                    {project.stack.map((tech) => (
                                        <span
                                            key={tech}
                                            className="text-[10px] px-2 py-0.5 rounded-sm bg-muted text-muted-foreground border border-border"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}