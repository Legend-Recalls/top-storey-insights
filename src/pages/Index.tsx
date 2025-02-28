
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Search, MapPin, Home, Building, PenSquare, TrendingUp, ChevronRight, Clock, X, Filter } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [propertySearchQuery, setPropertySearchQuery] = useState("");
  const [cityFilter, setCityFilter] = useState("All Cities");
  const [propertyTypeFilter, setPropertyTypeFilter] = useState("Property Type");
  const [priceRangeFilter, setPriceRangeFilter] = useState("Price Range");
  const [showArticleSearch, setShowArticleSearch] = useState(false);
  const [articleSearchQuery, setArticleSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("Property Insights");

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

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
        staggerChildren: 0.15
      }
    }
  };

  // Mock data
  const featuredArticles = [
    {
      id: 1,
      title: "The Future of Mixed-Use Development in Urban Areas",
      excerpt: "How mixed-use developments are transforming city centers and creating more sustainable communities",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Property Insights",
      date: "May 21, 2023",
      readTime: "8 min read"
    },
    {
      id: 2,
      title: "Group Housing: The New Way to Invest",
      excerpt: "Exploring the benefits and potential pitfalls of group housing investment strategies",
      image: "https://images.unsplash.com/photo-1524230572899-a752b3835840?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Investment",
      date: "May 18, 2023",
      readTime: "6 min read"
    },
    {
      id: 3,
      title: "Plotted Development: What Buyers Need to Know",
      excerpt: "Understanding the intricacies of plotted developments and how to make informed decisions",
      image: "https://images.unsplash.com/photo-1431576901776-e539bd916ba2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Property Insights",
      date: "May 15, 2023",
      readTime: "10 min read"
    }
  ];

  const recommendedProperties = [
    {
      id: 1,
      title: "Luxury Apartment in Downtown",
      location: "Central Business District",
      price: "$450,000",
      beds: 3,
      baths: 2,
      sqft: 1850,
      image: "https://images.unsplash.com/photo-1497604401993-f2e922e5cb0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Modern Villa with Garden",
      location: "Greenwood Heights",
      price: "$750,000",
      beds: 4,
      baths: 3,
      sqft: 2400,
      image: "https://images.unsplash.com/photo-1473177104440-ffee2f376098?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Cozy Bungalow Near Park",
      location: "Sunset District",
      price: "$320,000",
      beds: 2,
      baths: 1,
      sqft: 1200,
      image: "https://images.unsplash.com/photo-1524230572899-a752b3835840?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  // Filter articles based on search query
  const filteredArticles = articleSearchQuery
    ? featuredArticles.filter(article => 
        article.title.toLowerCase().includes(articleSearchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(articleSearchQuery.toLowerCase()) ||
        article.category.toLowerCase().includes(articleSearchQuery.toLowerCase())
      )
    : featuredArticles;

  // Filter articles based on active tab
  const tabFilteredArticles = activeTab === "All" 
    ? filteredArticles 
    : filteredArticles.filter(article => 
        article.category === activeTab || 
        (activeTab === "Property Insights" && article.category.includes("Property"))
      );

  const handlePropertySearch = () => {
    console.log('Searching properties with:', {
      query: propertySearchQuery,
      city: cityFilter,
      propertyType: propertyTypeFilter,
      priceRange: priceRangeFilter
    });
    // Add actual search logic here
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <motion.header 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative h-[70vh] overflow-hidden bg-gradient-to-r from-neutral-900 to-neutral-800"
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <motion.div 
          className="container mx-auto px-4 h-full flex items-center justify-center relative z-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="text-center max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mb-4"
            >
              <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-white text-sm font-medium tracking-wide">
                The Sky Limit of Property Insights
              </span>
            </motion.div>
            <motion.h1 
              className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              TOP STOREY
            </motion.h1>
            <motion.p 
              className="text-xl text-neutral-200 mb-8 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              Discover premium insights on real estate trends, investment opportunities, and your next dream home.
            </motion.p>
            <motion.div 
              className="flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <Link 
                to="#dream-home"
                className="bg-white hover:bg-neutral-100 text-neutral-900 py-3 px-6 rounded-lg flex items-center justify-center transition-all duration-300 shadow-md"
              >
                <Search className="mr-2 h-5 w-5" />
                <span>Find Your Dream Home</span>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </motion.header>

      {/* Navigation Tabs */}
      <motion.div 
        className="bg-white sticky top-0 z-50 border-b border-neutral-200 shadow-sm"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.2 }}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex overflow-x-auto py-4 gap-1 scrollbar-hide">
              <NavTab 
                title="Property Insights" 
                icon={<PenSquare className="w-4 h-4" />} 
                active={activeTab === "Property Insights"} 
                onClick={() => setActiveTab("Property Insights")}
              />
              <NavTab 
                title="Recommended Properties" 
                icon={<Home className="w-4 h-4" />} 
                active={activeTab === "Recommended Properties"} 
                onClick={() => setActiveTab("Recommended Properties")}
              />
              <NavTab 
                title="Expert Articles" 
                icon={<Building className="w-4 h-4" />} 
                active={activeTab === "Expert Articles"} 
                onClick={() => setActiveTab("Expert Articles")}
              />
              <NavTab 
                title="Events" 
                icon={<TrendingUp className="w-4 h-4" />} 
                active={activeTab === "Events"} 
                onClick={() => setActiveTab("Events")}
              />
            </div>
            
            {/* Article Search Button */}
            <motion.button 
              className="py-2 px-3 rounded-full flex items-center text-sm font-medium text-neutral-600 hover:bg-neutral-100 transition-all duration-300"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setShowArticleSearch(!showArticleSearch)}
            >
              <Search className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Search Articles</span>
            </motion.button>
          </div>
          
          {/* Article Search Panel */}
          <AnimatePresence>
            {showArticleSearch && (
              <motion.div 
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden pb-4"
              >
                <div className="flex items-center gap-4">
                  <div className="relative flex-1">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Search className="h-5 w-5 text-neutral-400" />
                    </div>
                    <input
                      type="text"
                      className="pl-10 pr-10 block w-full rounded-lg border border-neutral-200 py-2 text-neutral-900 shadow-sm placeholder:text-neutral-400 focus:ring-2 focus:ring-neutral-600 focus:border-transparent"
                      placeholder="Search for articles by title, category, or content..."
                      value={articleSearchQuery}
                      onChange={(e) => setArticleSearchQuery(e.target.value)}
                    />
                    {articleSearchQuery && (
                      <button 
                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-neutral-400 hover:text-neutral-600"
                        onClick={() => setArticleSearchQuery("")}
                      >
                        <X className="h-5 w-5" />
                      </button>
                    )}
                  </div>
                  <button className="bg-neutral-100 hover:bg-neutral-200 text-neutral-700 py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition-all duration-300">
                    <Filter className="h-4 w-4" />
                    <span className="hidden sm:inline">Filters</span>
                  </button>
                  <button 
                    className="text-neutral-500 hover:text-neutral-700"
                    onClick={() => setShowArticleSearch(false)}
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Featured Articles */}
        <motion.section 
          className="mb-20"
          variants={staggerContainer}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
        >
          <motion.div variants={fadeInUp} className="mb-2">
            <span className="text-sm font-medium text-neutral-500 uppercase tracking-wider">Featured</span>
          </motion.div>
          <motion.h2 
            variants={fadeInUp}
            className="text-3xl font-bold text-neutral-900 mb-8"
          >
            Latest Property Insights
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tabFilteredArticles.length > 0 ? (
              tabFilteredArticles.map((article, index) => (
                <motion.div
                  key={article.id}
                  variants={fadeInUp}
                  className="group"
                >
                  <Link to={`/article/${article.id}`} className="block">
                    <div className="mb-4 overflow-hidden rounded-lg relative">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                      <motion.div 
                        className="absolute bottom-4 left-4 z-20"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-white text-xs font-medium">
                          {article.category}
                        </span>
                      </motion.div>
                      <motion.img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-64 object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                    <div>
                      <div className="flex items-center text-sm text-neutral-500 mb-2">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{article.date}</span>
                        <span className="mx-2">•</span>
                        <span>{article.readTime}</span>
                      </div>
                      <h3 className="text-xl font-bold text-neutral-900 mb-2 group-hover:text-neutral-700 transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-neutral-600 line-clamp-2">{article.excerpt}</p>
                      <div className="mt-4 flex items-center text-neutral-800 font-medium group-hover:text-neutral-600 transition-colors">
                        <span>Read more</span>
                        <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))
            ) : (
              <div className="col-span-3 py-12 text-center">
                <div className="text-neutral-400 mb-4">
                  <Search className="h-12 w-12 mx-auto" />
                </div>
                <h3 className="text-xl font-medium text-neutral-800 mb-2">No articles found</h3>
                <p className="text-neutral-600 max-w-md mx-auto">
                  We couldn't find any articles matching your search criteria. Try using different keywords or browse all our articles.
                </p>
              </div>
            )}
          </div>
        </motion.section>

        {/* Properties Slider */}
        <motion.section 
          className="mb-20"
          variants={staggerContainer}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
        >
          <motion.div variants={fadeInUp} className="mb-2">
            <span className="text-sm font-medium text-neutral-500 uppercase tracking-wider">Selection</span>
          </motion.div>
          <motion.div 
            variants={fadeInUp}
            className="flex justify-between items-center mb-8"
          >
            <h2 className="text-3xl font-bold text-neutral-900">Recommended Properties</h2>
            <Link to="/properties" className="text-neutral-800 font-medium flex items-center hover:text-neutral-600 transition-colors">
              <span>View all</span>
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recommendedProperties.map((property, index) => (
              <motion.div
                key={property.id}
                variants={fadeInUp}
                className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <Link to={`/property/${property.id}`}>
                  <div className="relative overflow-hidden h-64">
                    <motion.img
                      src={property.image}
                      alt={property.title}
                      className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.5 }}
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-neutral-900 font-medium text-sm">
                      {property.price}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-neutral-500 mb-2">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span className="text-sm">{property.location}</span>
                    </div>
                    <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-neutral-700 transition-colors">
                      {property.title}
                    </h3>
                    <div className="flex justify-between text-sm text-neutral-600">
                      <span>{property.beds} Beds</span>
                      <span>{property.baths} Baths</span>
                      <span>{property.sqft} Sq Ft</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Find Your Dream Home */}
        <motion.section 
          id="dream-home"
          variants={staggerContainer}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          className="bg-neutral-50 rounded-2xl p-8 mb-20"
        >
          <motion.div variants={fadeInUp} className="text-center max-w-3xl mx-auto mb-8">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">Find Your Dream Home</h2>
            <p className="text-neutral-600">Discover properties that match your criteria and preferences.</p>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="space-y-6">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-neutral-400" />
              </div>
              <input
                type="text"
                className="pl-12 block w-full rounded-lg border border-neutral-200 py-3 text-neutral-900 shadow-sm placeholder:text-neutral-400 focus:ring-2 focus:ring-neutral-600 focus:border-transparent"
                placeholder="Search for properties by location, name, or features..."
                value={propertySearchQuery}
                onChange={(e) => setPropertySearchQuery(e.target.value)}
              />
            </div>
            
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <select 
                  className="w-full py-3 px-4 bg-white rounded-lg border border-neutral-200 focus:ring-2 focus:ring-neutral-600 focus:border-transparent"
                  value={cityFilter}
                  onChange={(e) => setCityFilter(e.target.value)}
                >
                  <option>All Cities</option>
                  <option>New York</option>
                  <option>Los Angeles</option>
                  <option>Chicago</option>
                  <option>San Francisco</option>
                </select>
              </div>
              <div className="flex-1">
                <select 
                  className="w-full py-3 px-4 bg-white rounded-lg border border-neutral-200 focus:ring-2 focus:ring-neutral-600 focus:border-transparent"
                  value={propertyTypeFilter}
                  onChange={(e) => setPropertyTypeFilter(e.target.value)}
                >
                  <option>Property Type</option>
                  <option>Apartment</option>
                  <option>Villa</option>
                  <option>Bungalow</option>
                  <option>Plot</option>
                </select>
              </div>
              <div className="flex-1">
                <select 
                  className="w-full py-3 px-4 bg-white rounded-lg border border-neutral-200 focus:ring-2 focus:ring-neutral-600 focus:border-transparent"
                  value={priceRangeFilter}
                  onChange={(e) => setPriceRangeFilter(e.target.value)}
                >
                  <option>Price Range</option>
                  <option>$100k - $300k</option>
                  <option>$300k - $500k</option>
                  <option>$500k - $800k</option>
                  <option>$800k+</option>
                </select>
              </div>
            </div>
            
            <div className="flex justify-center mt-4">
              <motion.button 
                className="bg-neutral-900 text-white py-3 px-8 rounded-lg flex items-center justify-center transition-all duration-300 hover:bg-neutral-800 shadow-md"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handlePropertySearch}
              >
                <Search className="mr-2 h-5 w-5" />
                <span>Search Properties</span>
              </motion.button>
            </div>
          </motion.div>
        </motion.section>

        {/* Newsletter */}
        <motion.section 
          variants={staggerContainer}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          className="bg-gradient-to-r from-neutral-900 to-neutral-800 rounded-2xl p-12 text-center"
        >
          <motion.div variants={fadeInUp} className="max-w-2xl mx-auto">
            <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-white text-sm font-medium mb-4">
              Stay Updated
            </span>
            <h2 className="text-3xl font-bold text-white mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-neutral-300 mb-8">
              Get the latest property insights, market trends, and exclusive offers directly to your inbox.
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
          </motion.div>
        </motion.section>
      </main>

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

const NavTab = ({ title, icon, active = false, onClick }) => {
  return (
    <motion.button
      className={`flex items-center whitespace-nowrap px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
        active 
          ? "bg-neutral-900 text-white" 
          : "text-neutral-600 hover:bg-neutral-100"
      }`}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
    >
      <span className="mr-2">{icon}</span>
      <span>{title}</span>
    </motion.button>
  );
};

export default Index;
