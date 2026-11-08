"use client";

import { motion } from "framer-motion";
import RatingStars from "@/components/RatingStars";
import type { ReviewCardProps } from "@/types";

const ReviewCard = ({ review, index }: ReviewCardProps) => (
	<motion.div
		initial={{ opacity: 0, y: 24 }}
		whileInView={{ opacity: 1, y: 0 }}
		viewport={{ once: true }}
		transition={{ duration: 0.4, delay: index * 0.08 }}
		whileHover={{ y: -4 }}
		className="card-base group relative p-6 transition-shadow duration-300 hover:shadow-lg dark:hover:shadow-violet-500/5"
	>
		<div className="mb-4">
			<RatingStars rating={review.rating} />
		</div>
		<p className="mb-5 text-base leading-relaxed text-body">{review.text}</p>
		<div className="flex items-center gap-3">
			<div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-sm font-bold text-gray-700 dark:bg-white/8 dark:text-white/70">
				{review.author[0]}
			</div>
			<p className="text-sm font-semibold text-gray-900 dark:text-white">
				{review.author}
			</p>
		</div>
	</motion.div>
);

export default ReviewCard;
