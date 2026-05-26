<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProjectSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $projects = [
            [
                'title' => 'Neon Glow Portfolio',
                'description' => 'A futuristic portfolio website built with React, Framer Motion, and Tailwind CSS. Features smooth animations and a dark glassmorphism design.',
                'tech_stack' => json_encode(['React', 'TailwindCSS', 'Framer Motion']),
                'image' => 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                'link' => '#',
            ],
            [
                'title' => 'E-Commerce Platform API',
                'description' => 'A robust backend REST API built with Laravel for an e-commerce platform. Includes authentication, product management, and order processing.',
                'tech_stack' => json_encode(['Laravel', 'MySQL', 'REST API']),
                'image' => 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                'link' => '#',
            ],
            [
                'title' => 'Task Management Dashboard',
                'description' => 'Interactive dashboard for managing tasks and projects. Includes drag-and-drop functionality and real-time updates.',
                'tech_stack' => json_encode(['Vue.js', 'Laravel', 'TailwindCSS']),
                'image' => 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                'link' => '#',
            ]
        ];

        foreach ($projects as $project) {
            \App\Models\Project::create($project);
        }
    }
}
