'use client';

import { motion } from 'framer-motion';

export default function ProjectsSection() {
	return (
		<section className="py-20 px-4">
			<div className="max-w-6xl mx-auto">
				<motion.h2
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					className="text-3xl font-bold mb-16 text-center text-gray-900"
				>
					Notable Projects
				</motion.h2>

				<div className="space-y-16">
					{/* IT Acquisitions Engine */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-lg"
					>
						<div className="p-8">
							<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
								<div className="space-y-6">
									<div>
										<h3 className="text-2xl font-bold mb-4 text-gray-900">IT Acquisitions Engine</h3>
										<p className="text-gray-600">
											A custom application that transformed a complex IT procurement process into a streamlined, automated experience
											across the Enterprise.
										</p>
									</div>

									<div className="grid grid-cols-2 gap-6">
										<div>
											<h4 className="text-sm font-semibold text-blue-600 mb-3">Frontend Architecture</h4>
											<ul className="space-y-2 text-sm text-gray-600">
												<li>• Custom Application UI Experience</li>
												<li>• Interactive Portal</li>
												<li>• Intuitive Catalog Wizard</li>
												<li>• Dashboard reporting and tracking</li>
											</ul>
										</div>
										<div>
											<h4 className="text-sm font-semibold text-purple-600 mb-3">Backend Pipeline</h4>
											<ul className="space-y-2 text-sm text-gray-600">
												<li>• CMDB Integration</li>
												<li>• Complex Workflow Automation</li>
												<li>• Custom system rules</li>
												<li>• Scoped security configurations</li>
											</ul>
										</div>
									</div>

									<div className="space-y-3">
										<h4 className="text-sm font-semibold text-teal-600">Key Achievements</h4>
										<ul className="space-y-2 text-sm text-gray-600">
											<li>• Modernized manual legacy processes</li>
											<li>• Significantly reduced IT acquisition completion time</li>
											<li>• Increased user adoption and customer satisfaction</li>
										</ul>
									</div>
								</div>

								<div className="bg-gray-50 rounded-xl p-6">
									<h4 className="text-sm font-semibold text-gray-600 mb-4">Application Architecture</h4>
									<div className="aspect-[4/3] bg-white rounded-lg p-4 shadow-inner">
										{/* Add detailed system architecture diagram here */}
										<svg className="w-full h-full" viewBox="0 0 400 300">
											{/* Client Layer */}
											<g>
												<rect x="20" y="20" width="360" height="40" rx="4" className="fill-blue-100 stroke-blue-400" strokeWidth="1" />
												<text x="200" y="45" textAnchor="middle" className="fill-gray-600 text-[12px]">
													ServiceNow Portal Experience
												</text>
											</g>

											{/* API Layer */}
											<g>
												<rect x="20" y="80" width="170" height="40" rx="4" className="fill-purple-100 stroke-purple-400" strokeWidth="1" />
												<rect x="210" y="80" width="170" height="40" rx="4" className="fill-purple-100 stroke-purple-400" strokeWidth="1" />
												<text x="105" y="105" textAnchor="middle" className="fill-gray-600 text-[12px]">
													UI Builder
												</text>
												<text x="295" y="105" textAnchor="middle" className="fill-gray-600 text-[12px]">
													Catalog Wizard
												</text>
											</g>

											{/* Process Layer */}
											<g>
												<rect x="20" y="140" width="360" height="30" rx="4" className="fill-teal-100 stroke-teal-400" strokeWidth="1" />
												<text x="200" y="160" textAnchor="middle" className="fill-gray-600 text-[12px]">
													Workflow Studio
												</text>
											</g>

											{/* Database Layer */}
											<g>
												<rect x="20" y="190" width="170" height="40" rx="4" className="fill-blue-100 stroke-blue-400" strokeWidth="1" />
												<rect x="210" y="190" width="170" height="40" rx="4" className="fill-purple-100 stroke-purple-400" strokeWidth="1" />
												<text x="105" y="215" textAnchor="middle" className="fill-gray-600 text-[12px]">
													Flows/Subflows
												</text>
												<text x="295" y="215" textAnchor="middle" className="fill-gray-600 text-[12px]">
													Record Producer
												</text>
											</g>

											{/* Search Layer */}
											<g>
												<rect x="20" y="250" width="360" height="30" rx="4" className="fill-teal-100 stroke-teal-400" strokeWidth="1" />
												<text x="200" y="270" textAnchor="middle" className="fill-gray-600 text-[12px]">
													Business Rules/Client Scripts/Security Configuration
												</text>
											</g>

											{/* Connection Lines */}
											<g className="stroke-gray-400" strokeWidth="1">
												<line x1="200" y1="60" x2="200" y2="80" />
												<line x1="105" y1="120" x2="105" y2="140" />
												<line x1="295" y1="120" x2="295" y2="140" />
												<line x1="105" y1="170" x2="105" y2="190" />
												<line x1="295" y1="170" x2="295" y2="190" />
												<line x1="200" y1="230" x2="200" y2="250" />
											</g>
										</svg>
									</div>
								</div>
							</div>
						</div>
					</motion.div>

					{/* SELC Engine */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-lg"
					>
						<div className="p-8">
							<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
								<div className="space-y-6">
									<div>
										<h3 className="text-2xl font-bold mb-4 text-gray-900">IT Systems Engineering Lifecycle Application</h3>
										<p className="text-gray-600">
											A custom request application that redefined how IT initiatives are processed throughout the Enterprise.
										</p>
									</div>

									<div className="grid grid-cols-2 gap-6">
										<div>
											<h4 className="text-sm font-semibold text-blue-600 mb-3">Frontend Features</h4>
											<ul className="space-y-2 text-sm text-gray-600">
												<li>• Real-time Data Visualization</li>
												<li>• Interactive Dashboards</li>
												<li>• Modern notification design</li>
												<li>• Data Export Tools</li>
											</ul>
										</div>
										<div>
											<h4 className="text-sm font-semibold text-purple-600 mb-3">Backend Pipeline</h4>
											<ul className="space-y-2 text-sm text-gray-600">
												<li>• Complex workflow branching</li>
												<li>• CMDB Integration</li>
												<li>• Change Management Integration</li>
												<li>• Automated Systems Engineering Investment Integration</li>
											</ul>
										</div>
									</div>

									<div className="space-y-3">
										<h4 className="text-sm font-semibold text-teal-600">Key Achievements</h4>
										<ul className="space-y-2 text-sm text-gray-600">
											<li>• Transformed and modernized outdated email-based processes</li>
											<li>• Broke down Enterprise silos and achieved cross-department collaboration</li>
											<li>• Significantly increased Enterprise interest in the ServiceNow</li>
										</ul>
									</div>
								</div>

								<div className="bg-gray-50 rounded-xl p-6">
									<h4 className="text-sm font-semibold text-gray-600 mb-4">Data Flow Architecture</h4>
									<div className="aspect-[4/3] bg-white rounded-lg p-4 shadow-inner">
										<svg className="w-full h-full" viewBox="0 0 400 300">
											{/* Data Sources */}
											<g>
												<rect x="20" y="20" width="110" height="30" rx="4" className="fill-blue-100 stroke-blue-400" strokeWidth="1" />
												<rect x="145" y="20" width="110" height="30" rx="4" className="fill-blue-100 stroke-blue-400" strokeWidth="1" />
												<rect x="270" y="20" width="110" height="30" rx="4" className="fill-blue-100 stroke-blue-400" strokeWidth="1" />
												<text x="75" y="40" textAnchor="middle" className="fill-gray-600 text-[12px]">
													Investment List
												</text>
												<text x="200" y="40" textAnchor="middle" className="fill-gray-600 text-[12px]">
													Enterprise Services
												</text>
												<text x="325" y="40" textAnchor="middle" className="fill-gray-600 text-[12px]">
													Initiative Artifacts
												</text>
											</g>

											{/* Event Processing */}
											<g>
												<rect x="20" y="80" width="360" height="40" rx="4" className="fill-purple-100 stroke-purple-400" strokeWidth="1" />
												<text x="200" y="105" textAnchor="middle" className="fill-gray-600 text-[12px]">
													Catalog Request
												</text>
											</g>

											{/* Processing Layer */}
											<g>
												<rect x="20" y="150" width="170" height="40" rx="4" className="fill-teal-100 stroke-teal-400" strokeWidth="1" />
												<rect x="210" y="150" width="170" height="40" rx="4" className="fill-teal-100 stroke-teal-400" strokeWidth="1" />
												<text x="105" y="175" textAnchor="middle" className="fill-gray-600 text-[12px]">
													Flows/Subflows
												</text>
												<text x="295" y="175" textAnchor="middle" className="fill-gray-600 text-[12px]">
													System Events
												</text>
											</g>

											{/* Storage Layer */}
											<g>
												<rect x="20" y="220" width="170" height="30" rx="4" className="fill-blue-100 stroke-blue-400" strokeWidth="1" />
												<rect x="210" y="220" width="170" height="30" rx="4" className="fill-purple-100 stroke-purple-400" strokeWidth="1" />
												<text x="105" y="240" textAnchor="middle" className="fill-gray-600 text-[12px]">
													Table configuration
												</text>
												<text x="295" y="240" textAnchor="middle" className="fill-gray-600 text-[12px]">
													Notificiations
												</text>
											</g>

											{/* Configuration Layer */}
											<g>
												<rect x="20" y="270" width="360" height="30" rx="4" className="fill-teal-100 stroke-teal-400" strokeWidth="1" />
												<text x="200" y="290" textAnchor="middle" className="fill-gray-600 text-[12px]">
													Business Rules/Client Scripts/Security Configuration
												</text>
											</g>

											{/* Connection Lines */}
											<g className="stroke-gray-400" strokeWidth="1">
												<line x1="75" y1="50" x2="75" y2="80" />
												<line x1="200" y1="50" x2="200" y2="80" />
												<line x1="325" y1="50" x2="325" y2="80" />
												<line x1="200" y1="120" x2="200" y2="150" />
												<line x1="105" y1="190" x2="105" y2="220" />
												<line x1="295" y1="190" x2="295" y2="220" />
												<line x1="200" y1="250" x2="200" y2="270" />
											</g>
										</svg>
									</div>
								</div>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
