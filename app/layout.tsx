import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: '[Ryan Weckbacher] - ServiceNow Developer',
	description:
		'Welcome to my portfolio! I am a passionate ServiceNow Developer and System Administrator. Specializing in creating robust enterprise applications and seamless platform integrations',
	keywords: [
		'ServiceNow Application Developer',
		'ServiceNow System Administrator',
		'Frontend Development',
		'Backend Development',
		'Agentic AI',
		'JavaScript',
		'React',
		'Next.js',
		'Node.js',
		'TypeScript',
		'CMDB Design',
		'API Development',
		'Cloud Solutions',
		'Agile',
		'ITIL',
		'System Architecture',
		'Web Development',
		'[Ryan Weckbacher]',
	],
	authors: [{ name: '[Ryan Weckbacher]' }],
	creator: '[Ryan Weckbacher]',
	openGraph: {
		title: '[Ryan Weckbacher] - ServiceNow Developer',
		description:
			'Passionate ServiceNow Developer and System Administrator. Explore my projects and technical expertise across the entire development stack.',
		url: 'https://your-domain.com',
		siteName: '[Ryan Weckbacher] - Portfolio',
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
				alt: '[Ryan Weckbacher] - ServiceNow Developer',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: '[Ryan Weckbacher] - ServiceNow Developer',
		description:
			'Passionate full-stack developer creating complete web solutions. Explore my projects and technical expertise across the entire development stack.',
		creator: '@samuryann',
		images: ['/og-image.jpg'],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
		</html>
	);
}
