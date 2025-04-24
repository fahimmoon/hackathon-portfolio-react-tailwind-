import { motion } from 'framer-motion';
import BlogCard from '../components/cards/BlogCard';

const Blog = () => {
  // This could later be fetched from an API or CMS
  const blogPosts = [
    {
      id: 1,
      title: "Building Scalable Applications with Microservices",
      excerpt: "Learn how to design and implement scalable microservices architecture...",
      date: "2024-03-01",
      readTime: "5 min read",
      comments: 12,
      category: "Architecture"
    },
    // ...more blog posts
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  return (
    <div className="min-h-screen py-12 px-4 bg-gradient-to-b from-gray-900 to-black">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto"
      >
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            Latest <span className="text-red-500">Articles</span>
          </h1>
          <p className="text-gray-400">Insights and tutorials about web development and technology</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Blog;
