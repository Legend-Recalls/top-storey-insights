
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
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  // Cycle through recent news items
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNewsIndex(prev => (prev + 1) % recentArticles.length);
    }, 5000);
    return () => clearInterval(interval);
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

  // Get today's date for comparison
  const today = new Date();
  const oneWeekAgo = new Date(today);
  oneWeekAgo.setDate(today.getDate() - 7);

  // Recent articles for the ticker
  const recentArticles = [
    {
      id: 1,
      title: "The Future of Mixed-Use Development in Urban Areas",
      date: new Date(2023, 4, 21), // May 21, 2023
    },
    {
      id: 2,
      title: "Group Housing: The New Way to Invest",
      date: new Date(2023, 4, 18), // May 18, 2023
    },
    {
      id: 3,
      title: "Plotted Development: What Buyers Need to Know",
      date: new Date(2023, 4, 15), // May 15, 2023
    },
    {
      id: 4,
      title: "5 Market Trends Every Real Estate Investor Should Watch",
      date: new Date(today.getFullYear(), today.getMonth(), today.getDate() - 1), // yesterday
    },
    {
      id: 5,
      title: "Sustainable Building Materials Set to Transform Construction Industry",
      date: new Date(today.getFullYear(), today.getMonth(), today.getDate() - 2), // 2 days ago
    }
  ];

  // Mock data with publication dates and categories
  const featuredArticles = [
    {
      id: 1,
      title: "The Future of Mixed-Use Development in Urban Areas",
      excerpt: "How mixed-use developments are transforming city centers and creating more sustainable communities",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Property Insights",
      date: new Date(2023, 4, 21), // May 21, 2023
      readTime: "8 min read"
    },
    {
      id: 2,
      title: "Group Housing: The New Way to Invest",
      excerpt: "Exploring the benefits and potential pitfalls of group housing investment strategies",
      image: "https://images.unsplash.com/photo-1524230572899-a752b3835840?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Investment",
      date: new Date(2023, 4, 18), // May 18, 2023
      readTime: "6 min read"
    },
    {
      id: 3,
      title: "Plotted Development: What Buyers Need to Know",
      excerpt: "Understanding the intricacies of plotted developments and how to make informed decisions",
      image: "https://images.unsplash.com/photo-1431576901776-e539bd916ba2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Property Insights",
      date: new Date(2023, 4, 15), // May 15, 2023
      readTime: "10 min read"
    },
    {
      id: 4,
      title: "5 Market Trends Every Real Estate Investor Should Watch",
      excerpt: "Stay ahead of the curve with these emerging patterns in the real estate market",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Market Analysis",
      date: new Date(today.getFullYear(), today.getMonth(), today.getDate() - 1), // yesterday
      readTime: "5 min read"
    },
    {
      id: 5,
      title: "Sustainable Building Materials Set to Transform Construction Industry",
      excerpt: "How eco-friendly innovations are changing the way we build and their impact on property values",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Expert Articles",
      date: new Date(today.getFullYear(), today.getMonth(), today.getDate() - 2), // 2 days ago
      readTime: "7 min read"
    },
    {
      id: 6,
      title: "The Psychology of Home Buying: What Drives Decisions?",
      excerpt: "Understanding the emotional and logical factors that influence residential property purchases",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Expert Articles",
      date: new Date(today.getFullYear(), today.getMonth(), today.getDate() - 4), // 4 days ago
      readTime: "9 min read"
    },
    {
      id: 7,
      title: "Property Tech Revolution: How AI is Changing Real Estate",
      excerpt: "The technological innovations reshaping how we buy, sell, and manage properties",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Events",
      date: new Date(today.getFullYear(), today.getMonth(), today.getDate() - 3), // 3 days ago
      readTime: "8 min read"
    },
    {
      id: 8,
      title: "Commercial Real Estate Outlook for Q3 2023",
      excerpt: "Expert analysis on the trends, challenges, and opportunities in the commercial property sector",
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Market Analysis",
      date: new Date(today.getFullYear(), today.getMonth(), today.getDate() - 6), // 6 days ago
      readTime: "11 min read"
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

  // Format date to display
  const formatDate = (date) => {
    return new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric' }).format(date);
  };

  // Check if an article is new (published within the last week)
  const isNewArticle = (articleDate) => {
    return articleDate > oneWeekAgo;
  };

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
      {/* Hero Section - Slimmer and more beautiful */}
      <motion.header 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative h-[50vh] overflow-hidden bg-gradient-to-r from-neutral-900 to-neutral-800"
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        
        {/* Floating gradient circles for visual interest */}
        <motion.div 
          className="absolute top-[20%] left-[10%] w-64 h-64 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-3xl"
          animate={{ 
            x: [0, 10, 0], 
            y: [0, 15, 0], 
            scale: [1, 1.1, 1] 
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 15, 
            ease: "easeInOut" 
          }}
        ></motion.div>
        
        <motion.div 
          className="absolute bottom-[10%] right-[10%] w-72 h-72 rounded-full bg-gradient-to-r from-amber-500/20 to-pink-500/20 blur-3xl"
          animate={{ 
            x: [0, -15, 0], 
            y: [0, 10, 0], 
            scale: [1, 1.15, 1] 
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 18, 
            ease: "easeInOut",
            delay: 1 
          }}
        ></motion.div>
        
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
              className="text-xl text-neutral-200 mb-4 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              Discover premium insights on real estate trends, investment opportunities, and your next dream home.
            </motion.p>
            
            {/* Animated news ticker with clickable article titles */}
            <motion.div 
              className="mt-8 h-8 overflow-hidden relative bg-white/10 backdrop-blur-md rounded-lg py-1 px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <AnimatePresence mode="wait">
                <motion.div 
                  key={currentNewsIndex}
                  className="absolute inset-0 flex items-center justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <Link 
                    to={`/article/${recentArticles[currentNewsIndex].id}`}
                    className="text-white text-sm font-medium hover:underline cursor-pointer flex items-center transition-colors duration-300"
                  >
                    {recentArticles[currentNewsIndex].title}
                    <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </motion.div>
              </AnimatePresence>
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
        {/* Featured Articles with Dynamic Grid Layout */}
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
          
          {tabFilteredArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Featured article - spans 2 columns */}
              {tabFilteredArticles.length > 0 && (
                <motion.div 
                  variants={fadeInUp}
                  className="group col-span-1 md:col-span-2 lg:row-span-2 md:row-span-1 bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <Link to={`/article/${tabFilteredArticles[0].id}`} className="block h-full">
                    <div className="relative h-64 md:h-72 lg:h-80 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/10 z-10"></div>
                      {isNewArticle(tabFilteredArticles[0].date) && (
                        <div className="absolute top-4 left-4 z-20">
                          <span className="inline-block px-3 py-1 bg-red-500 text-white text-xs font-bold rounded-full">
                            NEW
                          </span>
                        </div>
                      )}
                      <motion.div 
                        className="absolute bottom-4 left-4 z-20"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-white text-xs font-medium">
                          {tabFilteredArticles[0].category}
                        </span>
                      </motion.div>
                      <motion.img
                        src={tabFilteredArticles[0].image}
                        alt={tabFilteredArticles[0].title}
                        className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center text-sm text-neutral-500 mb-3">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{formatDate(tabFilteredArticles[0].date)}</span>
                        <span className="mx-2">•</span>
                        <span>{tabFilteredArticles[0].readTime}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-neutral-900 mb-3 group-hover:text-neutral-700 transition-colors">
                        {tabFilteredArticles[0].title}
                      </h3>
                      <p className="text-neutral-600 mb-4">{tabFilteredArticles[0].excerpt}</p>
                      <div className="flex items-center text-neutral-800 font-medium group-hover:text-neutral-600 transition-colors">
                        <span>Read full article</span>
                        <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              )}
              
              {/* Regular articles - start from index 1 */}
              {tabFilteredArticles.slice(1, 7).map((article, index) => (
                <motion.div
                  key={article.id}
                  variants={fadeInUp}
                  className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <Link to={`/article/${article.id}`} className="block h-full">
                    <div className="relative h-48 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                      {isNewArticle(article.date) && (
                        <div className="absolute top-4 left-4 z-20">
                          <span className="inline-block px-3 py-1 bg-red-500 text-white text-xs font-bold rounded-full">
                            NEW
                          </span>
                        </div>
                      )}
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
                        className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                    <div className="p-4">
                      <div className="flex items-center text-sm text-neutral-500 mb-2">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{formatDate(article.date)}</span>
                        <span className="mx-2">•</span>
                        <span>{article.readTime}</span>
                      </div>
                      <h3 className="text-lg font-bold text-neutral-900 mb-2 group-hover:text-neutral-700 transition-colors line-clamp-2">
                        {article.title}
                      </h3>
                      <p className="text-neutral-600 text-sm line-clamp-2">{article.excerpt}</p>
                      <div className="mt-3 flex items-center text-neutral-800 font-medium group-hover:text-neutral-600 transition-colors text-sm">
                        <span>Read more</span>
                        <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="py-12 text-center">
              <div className="text-neutral-400 mb-4">
                <Search className="h-12 w-12 mx-auto" />
              </div>
              <h3 className="text-xl font-medium text-neutral-800 mb-2">No articles found</h3>
              <p className="text-neutral-600 max-w-md mx-auto">
                We couldn't find any articles matching your search criteria. Try using different keywords or browse all our articles.
              </p>
            </div>
          )}
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
