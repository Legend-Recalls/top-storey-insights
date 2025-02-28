
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Share2, Bookmark, Clock, Calendar, User, MapPin, ArrowRight, Facebook, Twitter, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

const Article = () => {
  const { id } = useParams();
  const [isLoaded, setIsLoaded] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoaded(true);
      // Scroll to top when article loads
      window.scrollTo(0, 0);
    }, 300);
    return () => clearTimeout(timer);
  }, [id]);

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // Mock article data
  const article = {
    id: parseInt(id || "1"),
    title: "The Future of Mixed-Use Development in Urban Areas",
    subtitle: "How mixed-use developments are transforming city centers and creating more sustainable communities",
    content: `
      <p class="mb-4">Urban areas are rapidly evolving, and mixed-use developments have emerged as a promising solution to the challenges of modern city living. These innovative projects blend residential, commercial, retail, and sometimes even industrial spaces into cohesive, interconnected communities.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">The Rise of Mixed-Use Development</h2>
      
      <p class="mb-4">Over the past decade, mixed-use developments have gained significant traction among urban planners, developers, and residents alike. This surge in popularity can be attributed to several key factors:</p>
      
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Increasing urban density and land scarcity</li>
        <li>Growing demand for walkable neighborhoods</li>
        <li>Desire for reduced commute times</li>
        <li>Push for more sustainable and efficient use of resources</li>
        <li>Changing lifestyles prioritizing convenience and community</li>
      </ul>
      
      <p class="mb-4">By integrating various functions within a single development or neighborhood, mixed-use projects create vibrant, 24-hour environments where people can live, work, shop, and socialize without extensive travel.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Economic Benefits</h2>
      
      <p class="mb-4">From an economic perspective, mixed-use developments offer compelling advantages for various stakeholders:</p>
      
      <p class="mb-4"><strong>For developers:</strong> Diversified income streams from different property types can help mitigate market risks. If one sector experiences a downturn, others may remain stable or even thrive.</p>
      
      <p class="mb-4"><strong>For businesses:</strong> A built-in customer base of residents and workers provides steady foot traffic and potential clientele. This proximity can reduce marketing costs and increase customer loyalty.</p>
      
      <p class="mb-4"><strong>For municipalities:</strong> Efficient use of infrastructure and services leads to cost savings. Higher density developments also typically generate more tax revenue per acre than single-use developments.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Environmental Sustainability</h2>
      
      <p class="mb-4">The environmental benefits of mixed-use development are substantial and increasingly important in our climate-conscious world:</p>
      
      <p class="mb-4">By reducing the need for car travel, these developments can significantly lower carbon emissions. When daily needs can be met within walking distance, residents make fewer and shorter car trips.</p>
      
      <p class="mb-4">The density of mixed-use developments also means more efficient use of land, preserving open spaces elsewhere. Additionally, these projects often incorporate green building techniques and materials, further reducing their environmental footprint.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Community and Social Impact</h2>
      
      <p class="mb-4">Perhaps most importantly, mixed-use developments can foster stronger communities and enhance quality of life:</p>
      
      <p class="mb-4">The integration of diverse spaces encourages interaction among residents, workers, and visitors from different backgrounds. Public spaces within these developments become natural gathering points, promoting social cohesion and community building.</p>
      
      <p class="mb-4">For residents, particularly the elderly or those with limited mobility, the proximity of essential services and amenities represents a significant improvement in accessibility and independence.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Challenges and Considerations</h2>
      
      <p class="mb-4">Despite their many benefits, mixed-use developments face several challenges:</p>
      
      <p class="mb-4">Financing can be more complex than for single-use projects, as different property types may require different funding sources and structures. Zoning regulations in many areas still reflect outdated preferences for separated uses, necessitating variances or special permits.</p>
      
      <p class="mb-4">Design complexities also arise when integrating diverse functions within a cohesive whole. Potential conflicts between uses, such as noise from commercial establishments affecting residential areas, must be carefully managed through thoughtful design and operational guidelines.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">The Future Outlook</h2>
      
      <p class="mb-4">Looking ahead, mixed-use development is expected to continue evolving in response to changing demographics, technologies, and environmental concerns:</p>
      
      <p class="mb-4">The integration of smart technologies will likely enhance the efficiency and user experience of these developments. As remote work becomes more common, mixed-use projects may incorporate more flexible spaces that can adapt to changing needs.</p>
      
      <p class="mb-4">Climate resilience will become an increasingly important consideration, with developments incorporating features to mitigate and adapt to climate change impacts.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Conclusion</h2>
      
      <p class="mb-4">Mixed-use development represents a return to traditional urban forms, updated for contemporary needs and technologies. By bringing diverse functions together in thoughtfully designed spaces, these projects can help create more sustainable, equitable, and vibrant communities.</p>
      
      <p class="mb-4">As urban populations continue to grow and environmental pressures mount, the integrated approach offered by mixed-use development will likely play an increasingly important role in shaping the cities of tomorrow.</p>
    `,
    author: {
      name: "Alexandra Chen",
      title: "Urban Development Specialist",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    category: "Property Insights",
    date: "May 21, 2023",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80",
    tags: ["Mixed-Use", "Urban Planning", "Development", "Sustainability", "Real Estate Trends"]
  };

  // Related articles
  const relatedArticles = [
    {
      id: 2,
      title: "Group Housing: The New Way to Invest",
      excerpt: "Exploring the benefits and potential pitfalls of group housing investment strategies",
      image: "https://images.unsplash.com/photo-1524230572899-a752b3835840?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Investment",
      date: "May 18, 2023"
    },
    {
      id: 3,
      title: "Plotted Development: What Buyers Need to Know",
      excerpt: "Understanding the intricacies of plotted developments and how to make informed decisions",
      image: "https://images.unsplash.com/photo-1431576901776-e539bd916ba2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Property Insights",
      date: "May 15, 2023"
    }
  ];

  const toggleSave = () => {
    setIsSaved(!isSaved);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Back to Home Navbar */}
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link 
              to="/" 
              className="flex items-center text-neutral-800 hover:text-neutral-600 transition-colors"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              <span className="font-medium">Back to Home</span>
            </Link>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowShareMenu(!showShareMenu)}
                  className="p-2 rounded-full text-neutral-600 hover:bg-neutral-100 transition-colors"
                >
                  <Share2 className="h-5 w-5" />
                </motion.button>
                {showShareMenu && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-10 border border-neutral-200"
                  >
                    <a href="#" className="flex items-center px-4 py-2 text-neutral-700 hover:bg-neutral-100 transition-colors">
                      <Facebook className="h-4 w-4 mr-3 text-blue-600" />
                      <span>Facebook</span>
                    </a>
                    <a href="#" className="flex items-center px-4 py-2 text-neutral-700 hover:bg-neutral-100 transition-colors">
                      <Twitter className="h-4 w-4 mr-3 text-blue-400" />
                      <span>Twitter</span>
                    </a>
                    <a href="#" className="flex items-center px-4 py-2 text-neutral-700 hover:bg-neutral-100 transition-colors">
                      <Linkedin className="h-4 w-4 mr-3 text-blue-700" />
                      <span>LinkedIn</span>
                    </a>
                  </motion.div>
                )}
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleSave}
                className={`p-2 rounded-full transition-colors ${
                  isSaved 
                    ? "text-yellow-500 bg-yellow-50" 
                    : "text-neutral-600 hover:bg-neutral-100"
                }`}
              >
                <Bookmark className="h-5 w-5" fill={isSaved ? "currentColor" : "none"} />
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <motion.main 
        className="container mx-auto px-4 py-10"
        variants={staggerContainer}
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
      >
        <article className="max-w-4xl mx-auto">
          {/* Article Header */}
          <motion.header variants={fadeInUp} className="mb-8">
            <span className="inline-block px-3 py-1 bg-neutral-100 rounded-full text-neutral-800 text-sm font-medium mb-4">
              {article.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4 leading-tight">
              {article.title}
            </h1>
            <h2 className="text-xl text-neutral-600 mb-6">
              {article.subtitle}
            </h2>
            <div className="flex flex-wrap items-center text-neutral-500 text-sm gap-y-2">
              <div className="flex items-center mr-6">
                <User className="h-4 w-4 mr-1" />
                <span>{article.author.name}</span>
              </div>
              <div className="flex items-center mr-6">
                <Calendar className="h-4 w-4 mr-1" />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                <span>{article.readTime}</span>
              </div>
            </div>
          </motion.header>

          {/* Featured Image */}
          <motion.figure 
            variants={fadeIn}
            className="mb-10 relative rounded-xl overflow-hidden"
          >
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-[50vh] object-cover"
            />
          </motion.figure>

          {/* Article Content */}
          <motion.div 
            variants={fadeInUp}
            className="prose prose-lg max-w-none prose-neutral"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* Tags */}
          <motion.div variants={fadeInUp} className="mt-12">
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag, index) => (
                <span 
                  key={index} 
                  className="inline-block px-3 py-1 bg-neutral-100 rounded-full text-neutral-700 text-sm hover:bg-neutral-200 transition-colors cursor-pointer"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Author Bio */}
          <motion.div 
            variants={fadeInUp}
            className="mt-16 flex flex-col sm:flex-row items-center sm:items-start gap-6 p-8 bg-neutral-50 rounded-xl"
          >
            <img
              src={article.author.image}
              alt={article.author.name}
              className="w-20 h-20 rounded-full object-cover border-2 border-white shadow-sm"
            />
            <div>
              <h3 className="text-xl font-bold text-neutral-900 mb-1">{article.author.name}</h3>
              <p className="text-neutral-600 mb-4">{article.author.title}</p>
              <p className="text-neutral-700">
                Alexandra specializes in urban development trends and has over 15 years of experience in real estate analysis. She has contributed to major development projects across North America and Europe.
              </p>
            </div>
          </motion.div>
        </article>

        {/* Related Articles */}
        <motion.section 
          variants={fadeInUp}
          className="max-w-4xl mx-auto mt-20"
        >
          <h2 className="text-2xl font-bold text-neutral-900 mb-8">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedArticles.map((article) => (
              <motion.div
                key={article.id}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <Link to={`/article/${article.id}`} className="flex flex-col h-full">
                  <div className="relative overflow-hidden h-48">
                    <motion.img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.5 }}
                    />
                    <div className="absolute top-4 left-4">
                      <span className="inline-block px-3 py-1 bg-white/80 backdrop-blur-sm rounded-full text-neutral-800 text-xs font-medium">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <div className="flex items-center text-sm text-neutral-500 mb-2">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{article.date}</span>
                    </div>
                    <h3 className="text-lg font-bold text-neutral-900 mb-2 group-hover:text-neutral-700 transition-colors flex-grow">
                      {article.title}
                    </h3>
                    <p className="text-neutral-600 line-clamp-2 mb-4">{article.excerpt}</p>
                    <div className="flex items-center text-neutral-800 font-medium group-hover:text-neutral-600 transition-colors">
                      <span>Read article</span>
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Newsletter */}
        <motion.section 
          variants={fadeInUp}
          className="max-w-4xl mx-auto mt-20 mb-10 bg-neutral-900 rounded-xl p-10 text-center"
        >
          <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-white text-sm font-medium mb-4">
            Stay Updated
          </span>
          <h2 className="text-2xl font-bold text-white mb-4">Enjoyed this article?</h2>
          <p className="text-neutral-300 mb-6">
            Subscribe to our newsletter to receive more property insights and exclusive content.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 max-w-md py-3 px-4 rounded-lg border-0 focus:ring-2 focus:ring-white/50"
            />
            <motion.button 
              className="bg-white text-neutral-900 hover:bg-neutral-100 py-3 px-6 rounded-lg font-medium transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Subscribe
            </motion.button>
          </div>
        </motion.section>
      </motion.main>

      {/* Footer */}
      <footer className="bg-neutral-100 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-neutral-900 mb-4">TOP STOREY</h3>
              <p className="text-neutral-600 mb-4">
                The ultimate destination for property insights and your next dream home.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-neutral-900 mb-4">Quick Links</h4>
              <ul className="space-y-2 text-neutral-600">
                <li><Link to="/" className="hover:text-neutral-900 transition-colors">Home</Link></li>
                <li><Link to="/properties" className="hover:text-neutral-900 transition-colors">Properties</Link></li>
                <li><Link to="/insights" className="hover:text-neutral-900 transition-colors">Insights</Link></li>
                <li><Link to="/about" className="hover:text-neutral-900 transition-colors">About Us</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-neutral-900 mb-4">Categories</h4>
              <ul className="space-y-2 text-neutral-600">
                <li><Link to="/category/apartments" className="hover:text-neutral-900 transition-colors">Apartments</Link></li>
                <li><Link to="/category/villas" className="hover:text-neutral-900 transition-colors">Villas & Bungalows</Link></li>
                <li><Link to="/category/plots" className="hover:text-neutral-900 transition-colors">Plots & Development</Link></li>
                <li><Link to="/category/commercial" className="hover:text-neutral-900 transition-colors">Commercial</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-neutral-900 mb-4">Contact</h4>
              <ul className="space-y-2 text-neutral-600">
                <li>123 Property Lane</li>
                <li>Real Estate City, RE 12345</li>
                <li>contact@topstorey.com</li>
                <li>+1 (555) 123-4567</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-neutral-200 pt-8 text-center text-neutral-600">
            <p>&copy; {new Date().getFullYear()} Top Storey. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Article;
