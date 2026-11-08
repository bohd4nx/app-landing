"use client";

import { motion } from "framer-motion";
import { getIcon } from "@/getIcon";
import type { FeatureCardProps } from "@/types";

const FeatureCard = ({ feature, index }: FeatureCardProps) => {
	const Icon = getIcon(feature.icon);
	return (
		<motion.div
			initial={{ opacity: 0, y: 24 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.4, delay: index * 0.1 }}
			whileHover={{ y: -4 }}
			className="card-base group relative p-6 transition-shadow duration-300 hover:shadow-lg dark:hover:shadow-violet-500/5"
		>
			<div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-violet-100 bg-violet-50 dark:border-violet-500/20 dark:bg-violet-500/10">
				{Icon && (
					<Icon className="h-6 w-6 text-violet-600 dark:text-violet-400" />
				)}
			</div>
			<h3 className="mb-2.5 text-lg font-bold text-gray-900 dark:text-white">
				{feature.title}
			</h3>
			<p className="text-base leading-relaxed text-body">
				{feature.description}
			</p>
		</motion.div>
	);
};

export default FeatureCard;
