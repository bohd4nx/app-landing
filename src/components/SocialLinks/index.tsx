"use client";

import { motion } from "framer-motion";
import { memo } from "react";
import { getIcon } from "@/getIcon";
import type { SocialLinksProps } from "@/types";

const SocialLinks = ({ items }: SocialLinksProps) => (
	<>
		{items.map((item, index) => {
			const Icon = getIcon(item.icon);
			return (
				<motion.a
					key={item.label}
					initial={{ opacity: 0, scale: 0.8 }}
					whileInView={{ opacity: 1, scale: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.3, delay: index * 0.1 }}
					whileHover={{ scale: 1.1, rotate: 5 }}
					whileTap={{ scale: 0.95 }}
					href={item.url}
					target="_blank"
					rel="noopener noreferrer"
					className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200/50 bg-gray-100 transition-colors hover:bg-gray-200 dark:border-white/5 dark:bg-white/5 dark:hover:bg-white/10"
					aria-label={item.label}
					title={item.label}
				>
					{Icon && (
						<Icon className="h-4 w-4 text-gray-600 dark:text-gray-300" />
					)}
				</motion.a>
			);
		})}
	</>
);

export default memo(SocialLinks);
