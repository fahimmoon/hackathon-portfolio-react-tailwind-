import { motion } from 'framer-motion';
import { FaCalendar, FaComments } from 'react-icons/fa';

const BlogCard = ({ post, className = '' }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={`bg-gray-800/50 rounded-xl p-6 border border-gray-700/50
                 hover:border-red-500/30 transition-all duration-300 ${className}`}
    >
      <h3 className="text-xl font-semibold mb-3 line-clamp-2">
        {post.title}
      </h3>
      <p className="text-gray-400 text-sm mb-4 line-clamp-2">
        {post.excerpt}
      </p>
      <div className="flex items-center gap-4 text-sm text-gray-500">
        <div className="flex items-center gap-2">
          <FaCalendar className="text-xs" />
          {post.date}
        </div>
        <div className="flex items-center gap-2">
          <FaComments className="text-xs" />
          {post.comments} comments
        </div>
      </div>
    </motion.div>
  );
};

export default BlogCard;
