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
      title: 'Frontend Engineering',
      subtitle: 'Building responsive, reactive, and modular web interfaces',
      iconBg: 'bg-indigo-100 dark:bg-indigo-900/50',
      iconColor: 'text-indigo-600 dark:text-indigo-400',
      skills: [
        { name: 'Angular', tag: 'Primary' },
        { name: 'TypeScript' },
        { name: 'JavaScript (ES6+)' },
        { name: 'HTML5 & CSS3' },
        { name: 'Tailwind CSS' },
        { name: 'Angular Material' },
        { name: 'RxJS & NgModules' }
      ]
    },
    {
      title: 'Backend & Database Architecture',
      subtitle: 'Designing REST APIs, business logic, and relational schemas',
      iconBg: 'bg-emerald-100 dark:bg-emerald-900/50',
      iconColor: 'text-emerald-600 dark:text-emerald-400',
      skills: [
        { name: 'PHP', tag: 'Primary' },
        { name: 'Laravel', tag: 'Primary' },
        { name: 'MySQL', tag: 'Primary' },
        { name: 'RESTful API Design' },
        { name: 'Database Optimization' },
        { name: 'Authentication & Security' }
      ]
    },
    {
      title: 'Automation & Modern Tools',
      subtitle: 'Accelerating deployment and building intelligent integrations',
      iconBg: 'bg-purple-100 dark:bg-purple-900/50',
      iconColor: 'text-purple-600 dark:text-purple-400',
      skills: [
        { name: 'GoHighLevel' },
        { name: 'Lovable' },
        { name: 'API Integrations' },
        { name: 'Git & GitHub' },
        { name: 'Agile & Code Reviews' }
      ]
    }
  ];
}
