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
                'description' => 'Website portfolio futuristik dengan efek glassmorphism dan animasi smooth. Dibangun menggunakan React dan Framer Motion dengan tema dark mode yang elegan.',
                'tech_stack' => json_encode(['React', 'TailwindCSS', 'Framer Motion', 'Vite']),
                'image' => 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                'link' => '#',
            ],
            [
                'title' => 'E-Commerce Platform',
                'description' => 'Platform e-commerce full-stack dengan fitur keranjang belanja, pembayaran, dan manajemen produk. Backend REST API yang robust dengan autentikasi JWT.',
                'tech_stack' => json_encode(['Laravel', 'MySQL', 'REST API', 'Sanctum']),
                'image' => 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                'link' => '#',
            ],
            [
                'title' => 'Task Management App',
                'description' => 'Aplikasi manajemen tugas interaktif dengan fitur drag-and-drop, real-time collaboration, dan dashboard analytics untuk tracking produktivitas tim.',
                'tech_stack' => json_encode(['Vue.js', 'Laravel', 'TailwindCSS', 'Pusher']),
                'image' => 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                'link' => '#',
            ],
            [
                'title' => 'Weather Dashboard',
                'description' => 'Dashboard cuaca real-time yang menampilkan prakiraan cuaca 7 hari, peta interaktif, dan visualisasi data menggunakan chart yang menarik.',
                'tech_stack' => json_encode(['React', 'OpenWeather API', 'Chart.js', 'CSS3']),
                'image' => 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                'link' => '#',
            ],
            [
                'title' => 'Chat Application',
                'description' => 'Aplikasi chat real-time dengan fitur grup, emoji reactions, file sharing, dan notifikasi push. Dibangun dengan WebSocket untuk pengalaman messaging yang instan.',
                'tech_stack' => json_encode(['Next.js', 'Socket.io', 'MongoDB', 'TypeScript']),
                'image' => 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                'link' => '#',
            ],
            [
                'title' => 'Music Player Web',
                'description' => 'Pemutar musik berbasis web dengan UI modern, playlist management, visualizer audio, dan integrasi dengan Spotify API untuk streaming lagu favorit.',
                'tech_stack' => json_encode(['React', 'Spotify API', 'Web Audio API', 'SCSS']),
                'image' => 'https://images.unsplash.com/photo-1614680376593-902f74cf0d41?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                'link' => '#',
            ],
        ];

        foreach ($projects as $project) {
            \App\Models\Project::create($project);
        }
    }
}
