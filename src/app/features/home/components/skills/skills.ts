import { Component } from '@angular/core';

interface SkillCategory {
  title: string;
  subtitle: string;
  iconBg: string;
  iconColor: string;
  skills: { name: string; tag?: string }[];
}

@Component({
  selector: 'app-skills',
  standalone: false,
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {
  categories: SkillCategory[] = [
    {
      title: 'Frontend Development',
      subtitle: 'Responsive interfaces and interactive web applications',
      iconBg: 'bg-indigo-100 dark:bg-indigo-900/50',
      iconColor: 'text-indigo-600 dark:text-indigo-400',
      skills: [
        { name: 'Angular', tag: 'Primary' },
        { name: 'TypeScript' },
        { name: 'JavaScript' },
        { name: 'HTML5' },
        { name: 'CSS3' },
        { name: 'Bootstrap' },
        { name: 'Angular Material' },
        { name: 'RxJS' },
      ],
    },
    {
      title: 'Backend & Database',
      subtitle: 'APIs, workflows, access control, and relational data',
      iconBg: 'bg-emerald-100 dark:bg-emerald-900/50',
      iconColor: 'text-emerald-600 dark:text-emerald-400',
      skills: [
        { name: 'PHP', tag: 'Primary' },
        { name: 'Laravel', tag: 'Primary' },
        { name: 'MySQL', tag: 'Primary' },
        { name: 'MariaDB' },
        { name: 'REST APIs' },
        { name: 'JWT Authentication' },
        { name: 'CRUD' },
        { name: 'Role-Based Access' },
        { name: 'Chart.js' },
      ],
    },
    {
      title: 'Development Tools & Workflow',
      subtitle: 'Version control, tooling, and AI-assisted development',
      iconBg: 'bg-purple-100 dark:bg-purple-900/50',
      iconColor: 'text-purple-600 dark:text-purple-400',
      skills: [
        { name: 'Git' },
        { name: 'GitHub' },
        { name: 'VS Code' },
        { name: 'XAMPP' },
        { name: 'Apache' },
        { name: 'GoHighLevel' },
        { name: 'GitHub Copilot' },
        { name: 'ChatGPT' },
        { name: 'Claude' },
        { name: 'Antigravity' },
      ],
    },
  ];
}
