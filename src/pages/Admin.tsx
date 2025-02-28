
import { useState, useEffect } from "react";
import { 
  PenSquare, Save, Image, X, ChevronDown, Home, FileText, Users, Settings, LogOut, 
  Newspaper, BarChart2, Eye, Trash2, Plus, Search, Calendar, AlertCircle 
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const Admin = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [author, setAuthor] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [tags, setTags] = useState<string[]>([]);
  const [currentTag, setCurrentTag] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState("create");
  const [readTime, setReadTime] = useState("0 min read");
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  // Mock data for articles list
  const articles = [
    {
      id: 1,
      title: "The Future of Mixed-Use Development in Urban Areas",
      status: "Published",
      category: "Property Insights",
      date: "May 21, 2023",
      views: 1204,
      author: "Jane Smith"
    },
    {
      id: 2,
      title: "Group Housing: The New Way to Invest",
      status: "Published",
      category: "Investment",
      date: "May 18, 2023",
      views: 895,
      author: "Michael Johnson"
    },
    {
      id: 3,
      title: "Plotted Development: What Buyers Need to Know",
      status: "Draft",
      category: "Property Insights",
      date: "May 15, 2023",
      views: 0,
      author: "Sarah Williams"
    }
  ];

  const categories = [
    "Property Insights",
    "Investment",
    "Market Analysis",
    "Lifestyle",
    "Architecture",
    "Expert Articles",
    "Events",
    "Legal"
  ];

  // Calculate read time based on word count
  useEffect(() => {
    if (content) {
      const wordCount = content.trim().split(/\s+/).length;
      // Average reading speed: 200-250 words per minute
      const minutes = Math.ceil(wordCount / 225);
      setReadTime(`${minutes} min read`);
    } else {
      setReadTime("0 min read");
    }
  }, [content]);

  // Auto-generate excerpt from content if not manually entered
  useEffect(() => {
    if (!excerpt && content) {
      // Take first 150 characters from content as excerpt
      const autoExcerpt = content.substring(0, 150).trim();
      if (autoExcerpt.length === 150) {
        setExcerpt(autoExcerpt + "...");
      } else {
        setExcerpt(autoExcerpt);
      }
    }
  }, [content, excerpt]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setImage(null);
    setImagePreview(null);
  };

  const handleAddTag = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && currentTag.trim() !== '') {
      if (!tags.includes(currentTag.trim())) {
        setTags([...tags, currentTag.trim()]);
      }
      setCurrentTag('');
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};
    
    if (!title.trim()) errors.title = "Title is required";
    if (!content.trim()) errors.content = "Content is required";
    if (!category) errors.category = "Category is required";
    if (!author.trim()) errors.author = "Author is required";
    if (!image) errors.image = "Featured image is required";
    
    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      // Scroll to the first error
      const firstErrorField = Object.keys(validationErrors)[0];
      const element = document.getElementById(firstErrorField);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        element.focus();
      }
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Here you would typically submit to your backend
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log({ 
        title, 
        content, 
        category, 
        author,
        excerpt,
        image, 
        tags,
        readTime,
        publishDate: new Date().toISOString()
      });
      
      setSuccessMessage("Article saved successfully!");
      
      // Reset form after successful submission
      setTimeout(() => {
        setTitle("");
        setContent("");
        setCategory("");
        setAuthor("");
        setExcerpt("");
        setImage(null);
        setImagePreview(null);
        setTags([]);
        setSuccessMessage("");
      }, 2000);
    } catch (error) {
      console.error("Error submitting article:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDeleteArticle = (articleId: number) => {
    // In a real application, this would make an API call to delete the article
    alert(`Article ${articleId} would be deleted`);
  };

  return (
    <div className="min-h-screen flex bg-neutral-50">
      {/* Sidebar */}
      <motion.div 
        className="bg-white shadow-md z-20"
        initial={{ width: isSidebarOpen ? 256 : 80 }}
        animate={{ width: isSidebarOpen ? 256 : 80 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="p-4 border-b border-neutral-100 flex items-center justify-between">
          <motion.div 
            className="font-bold text-neutral-900"
            initial={{ opacity: isSidebarOpen ? 1 : 0 }}
            animate={{ opacity: isSidebarOpen ? 1 : 0 }}
            transition={{ duration: 0.2 }}
          >
            TOP STOREY
          </motion.div>
          <button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 rounded-full hover:bg-neutral-100 transition-colors"
          >
            <ChevronDown 
              className={`h-5 w-5 text-neutral-500 transition-transform duration-300 ${isSidebarOpen ? 'rotate-0' : 'rotate-180'}`} 
            />
          </button>
        </div>
        <nav className="py-4">
          <SidebarItem 
            icon={<Home className="h-5 w-5" />} 
            label="Dashboard" 
            isCollapsed={!isSidebarOpen}
            isActive={false}
          />
          <SidebarItem 
            icon={<Newspaper className="h-5 w-5" />} 
            label="Articles" 
            isCollapsed={!isSidebarOpen}
            isActive={true}
          />
          <SidebarItem 
            icon={<BarChart2 className="h-5 w-5" />} 
            label="Analytics" 
            isCollapsed={!isSidebarOpen}
            isActive={false}
          />
          <SidebarItem 
            icon={<FileText className="h-5 w-5" />} 
            label="Pages" 
            isCollapsed={!isSidebarOpen}
            isActive={false}
          />
          <SidebarItem 
            icon={<Users className="h-5 w-5" />} 
            label="Users" 
            isCollapsed={!isSidebarOpen}
            isActive={false}
          />
          <SidebarItem 
            icon={<Settings className="h-5 w-5" />} 
            label="Settings" 
            isCollapsed={!isSidebarOpen}
            isActive={false}
          />

          <div className="mt-8 px-4">
            <Link 
              to="/" 
              className="flex items-center justify-center text-neutral-700 hover:text-neutral-900 p-2 rounded-lg hover:bg-neutral-100 transition-all duration-300"
            >
              <Eye className="h-5 w-5 mr-2" />
              <motion.span
                initial={{ opacity: isSidebarOpen ? 1 : 0 }}
                animate={{ opacity: isSidebarOpen ? 1 : 0 }}
                transition={{ duration: 0.2 }}
              >
                View Site
              </motion.span>
            </Link>
          </div>

          <div className="mt-auto pt-8 px-4">
            <button 
              className="flex items-center text-red-600 hover:text-red-700 p-2 rounded-lg hover:bg-red-50 transition-all duration-300 w-full"
            >
              <LogOut className="h-5 w-5 mr-2" />
              <motion.span
                initial={{ opacity: isSidebarOpen ? 1 : 0 }}
                animate={{ opacity: isSidebarOpen ? 1 : 0 }}
                transition={{ duration: 0.2 }}
              >
                Log Out
              </motion.span>
            </button>
          </div>
        </nav>
      </motion.div>

      {/* Main Content */}
      <div className="flex-1 overflow-hidden">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-neutral-200 px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold text-neutral-900">Article Management</h1>
            <div className="flex items-center">
              <div className="relative mr-4">
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:border-transparent transition-all duration-300 w-64"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-neutral-400" />
              </div>
              <div className="flex items-center">
                <div className="h-8 w-8 rounded-full bg-neutral-200 flex items-center justify-center mr-2">
                  <span className="text-sm font-medium text-neutral-700">JD</span>
                </div>
                <span className="text-neutral-800 font-medium">John Doe</span>
              </div>
            </div>
          </div>
        </header>

        {/* Tabs */}
        <div className="bg-white border-b border-neutral-200 px-6">
          <div className="flex space-x-6">
            <button
              className={`py-4 px-2 font-medium text-sm transition-colors relative ${
                activeTab === "list" 
                  ? "text-neutral-900 border-b-2 border-neutral-900" 
                  : "text-neutral-500 hover:text-neutral-700"
              }`}
              onClick={() => setActiveTab("list")}
            >
              Article List
            </button>
            <button
              className={`py-4 px-2 font-medium text-sm transition-colors relative ${
                activeTab === "create" 
                  ? "text-neutral-900 border-b-2 border-neutral-900" 
                  : "text-neutral-500 hover:text-neutral-700"
              }`}
              onClick={() => setActiveTab("create")}
            >
              Create New
            </button>
          </div>
        </div>

        {/* Success Message */}
        <AnimatePresence>
          {successMessage && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-green-50 border-l-4 border-green-500 p-4 m-6 rounded-md"
            >
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-green-700">{successMessage}</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Content Area */}
        <div className="p-6 h-[calc(100vh-129px)] overflow-y-auto">
          <AnimatePresence mode="wait">
            {activeTab === "create" ? (
              <motion.div
                key="create"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="max-w-4xl mx-auto">
                  <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
                    <div className="flex items-center mb-6">
                      <PenSquare className="h-5 w-5 text-neutral-700 mr-2" />
                      <h2 className="text-xl font-bold text-neutral-900">Create New Article</h2>
                    </div>

                    <form onSubmit={handleSubmit}>
                      {/* Title */}
                      <div className="mb-6">
                        <label htmlFor="title" className="block text-sm font-medium text-neutral-700 mb-2">
                          Article Title*
                        </label>
                        <input
                          id="title"
                          type="text"
                          value={title}
                          onChange={(e) => setTitle(e.target.value)}
                          placeholder="Enter article title"
                          className={`w-full px-4 py-3 rounded-lg border ${validationErrors.title ? 'border-red-300 focus:ring-red-500' : 'border-neutral-300 focus:ring-neutral-500'} focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300`}
                        />
                        {validationErrors.title && (
                          <p className="mt-1 text-sm text-red-600 flex items-center">
                            <AlertCircle className="h-4 w-4 mr-1" />
                            {validationErrors.title}
                          </p>
                        )}
                      </div>

                      {/* Author */}
                      <div className="mb-6">
                        <label htmlFor="author" className="block text-sm font-medium text-neutral-700 mb-2">
                          Author*
                        </label>
                        <input
                          id="author"
                          type="text"
                          value={author}
                          onChange={(e) => setAuthor(e.target.value)}
                          placeholder="Enter author name"
                          className={`w-full px-4 py-3 rounded-lg border ${validationErrors.author ? 'border-red-300 focus:ring-red-500' : 'border-neutral-300 focus:ring-neutral-500'} focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300`}
                        />
                        {validationErrors.author && (
                          <p className="mt-1 text-sm text-red-600 flex items-center">
                            <AlertCircle className="h-4 w-4 mr-1" />
                            {validationErrors.author}
                          </p>
                        )}
                      </div>

                      {/* Category */}
                      <div className="mb-6 relative">
                        <label htmlFor="category" className="block text-sm font-medium text-neutral-700 mb-2">
                          Category*
                        </label>
                        <div className="relative">
                          <button
                            id="category"
                            type="button"
                            className={`w-full px-4 py-3 rounded-lg border ${validationErrors.category ? 'border-red-300' : 'border-neutral-300'} focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:border-transparent transition-all duration-300 text-left flex items-center justify-between`}
                            onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}
                          >
                            <span className={category ? "text-neutral-900" : "text-neutral-400"}>
                              {category || "Select a category"}
                            </span>
                            <ChevronDown className="h-5 w-5 text-neutral-500" />
                          </button>
                          
                          {showCategoryDropdown && (
                            <div className="absolute z-10 mt-1 w-full bg-white rounded-lg shadow-lg border border-neutral-200 py-1 max-h-60 overflow-y-auto">
                              {categories.map((cat) => (
                                <button
                                  key={cat}
                                  type="button"
                                  className="w-full text-left px-4 py-2 hover:bg-neutral-100 transition-colors"
                                  onClick={() => {
                                    setCategory(cat);
                                    setShowCategoryDropdown(false);
                                  }}
                                >
                                  {cat}
                                </button>
                              ))}
                            </div>
                          )}
                        </div>
                        {validationErrors.category && (
                          <p className="mt-1 text-sm text-red-600 flex items-center">
                            <AlertCircle className="h-4 w-4 mr-1" />
                            {validationErrors.category}
                          </p>
                        )}
                      </div>

                      {/* Excerpt */}
                      <div className="mb-6">
                        <label htmlFor="excerpt" className="block text-sm font-medium text-neutral-700 mb-2">
                          Excerpt <span className="text-neutral-500 font-normal">(Auto-generated if left empty)</span>
                        </label>
                        <textarea
                          id="excerpt"
                          value={excerpt}
                          onChange={(e) => setExcerpt(e.target.value)}
                          placeholder="Brief summary of the article (max 150 characters)"
                          className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:border-transparent transition-all duration-300 min-h-[80px]"
                          maxLength={150}
                        />
                        <div className="mt-1 text-xs text-neutral-500 flex justify-end">
                          {excerpt.length}/150 characters
                        </div>
                      </div>

                      {/* Featured Image */}
                      <div className="mb-6">
                        <label className="block text-sm font-medium text-neutral-700 mb-2">
                          Featured Image*
                        </label>
                        {imagePreview ? (
                          <div className="relative rounded-lg overflow-hidden h-48 bg-neutral-100">
                            <img 
                              src={imagePreview} 
                              alt="Preview" 
                              className="w-full h-full object-cover"
                            />
                            <button
                              type="button"
                              onClick={handleRemoveImage}
                              className="absolute top-2 right-2 p-1 rounded-full bg-neutral-800/80 text-white hover:bg-neutral-900 transition-colors"
                            >
                              <X className="h-4 w-4" />
                            </button>
                          </div>
                        ) : (
                          <div className={`rounded-lg border-2 border-dashed ${validationErrors.image ? 'border-red-300' : 'border-neutral-300'} p-8 text-center`}>
                            <Image className="h-10 w-10 mx-auto text-neutral-400 mb-4" />
                            <p className="text-neutral-600 mb-4">Drag and drop an image here or click to browse</p>
                            <label className="inline-block">
                              <span className="bg-neutral-100 hover:bg-neutral-200 text-neutral-800 py-2 px-4 rounded-lg cursor-pointer transition-colors">
                                Browse Files
                              </span>
                              <input 
                                type="file" 
                                accept="image/*" 
                                className="hidden" 
                                onChange={handleImageChange}
                              />
                            </label>
                          </div>
                        )}
                        {validationErrors.image && (
                          <p className="mt-1 text-sm text-red-600 flex items-center">
                            <AlertCircle className="h-4 w-4 mr-1" />
                            {validationErrors.image}
                          </p>
                        )}
                      </div>

                      {/* Read Time (calculated automatically) */}
                      <div className="mb-6">
                        <label className="block text-sm font-medium text-neutral-700 mb-2">
                          Estimated Read Time
                        </label>
                        <div className="px-4 py-3 bg-neutral-50 rounded-lg border border-neutral-200 text-neutral-700">
                          <div className="flex items-center">
                            <Clock className="h-5 w-5 mr-2 text-neutral-500" />
                            <span>{readTime}</span>
                            <span className="ml-2 text-xs text-neutral-500">(Automatically calculated from content)</span>
                          </div>
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="mb-6">
                        <label htmlFor="tags" className="block text-sm font-medium text-neutral-700 mb-2">
                          Tags
                        </label>
                        <div className="flex flex-wrap gap-2 mb-2">
                          {tags.map((tag) => (
                            <span key={tag} className="inline-flex items-center bg-neutral-100 text-neutral-800 rounded-full px-3 py-1 text-sm">
                              {tag}
                              <button
                                type="button"
                                onClick={() => handleRemoveTag(tag)}
                                className="ml-1 text-neutral-500 hover:text-neutral-700"
                              >
                                <X className="h-3 w-3" />
                              </button>
                            </span>
                          ))}
                        </div>
                        <input
                          id="tags"
                          type="text"
                          value={currentTag}
                          onChange={(e) => setCurrentTag(e.target.value)}
                          onKeyDown={handleAddTag}
                          placeholder="Add tags and press Enter"
                          className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:border-transparent transition-all duration-300"
                        />
                        <p className="mt-1 text-xs text-neutral-500">
                          Enter tags one at a time and press Enter to add them
                        </p>
                      </div>

                      {/* Content */}
                      <div className="mb-8">
                        <label htmlFor="content" className="block text-sm font-medium text-neutral-700 mb-2">
                          Content*
                        </label>
                        <textarea
                          id="content"
                          value={content}
                          onChange={(e) => setContent(e.target.value)}
                          placeholder="Write your article content here..."
                          className={`w-full px-4 py-3 rounded-lg border ${validationErrors.content ? 'border-red-300 focus:ring-red-500' : 'border-neutral-300 focus:ring-neutral-500'} focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300 min-h-[300px]`}
                        />
                        {validationErrors.content && (
                          <p className="mt-1 text-sm text-red-600 flex items-center">
                            <AlertCircle className="h-4 w-4 mr-1" />
                            {validationErrors.content}
                          </p>
                        )}
                      </div>

                      {/* Submit Button */}
                      <div className="flex justify-end">
                        <motion.button
                          type="submit"
                          className="flex items-center bg-neutral-900 hover:bg-neutral-800 text-white py-3 px-6 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <>
                              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                              Saving...
                            </>
                          ) : (
                            <>
                              <Save className="h-5 w-5 mr-2" />
                              Save Article
                            </>
                          )}
                        </motion.button>
                      </div>
                    </form>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="list"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-white rounded-xl shadow-sm">
                  <div className="p-6 flex justify-between items-center border-b border-neutral-200">
                    <h2 className="text-lg font-bold text-neutral-900">All Articles</h2>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center bg-neutral-900 hover:bg-neutral-800 text-white py-2 px-4 rounded-lg transition-all duration-300"
                      onClick={() => setActiveTab("create")}
                    >
                      <Plus className="h-4 w-4 mr-2" />
                      New Article
                    </motion.button>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="bg-neutral-50">
                          <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                            Title
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                            Author
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                            Status
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                            Category
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                            Date
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                            Views
                          </th>
                          <th className="px-6 py-3 text-right text-xs font-medium text-neutral-500 uppercase tracking-wider">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-neutral-200">
                        {articles.map((article) => (
                          <tr 
                            key={article.id}
                            className="hover:bg-neutral-50 transition-colors"
                          >
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm font-medium text-neutral-900">
                                {article.title}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-neutral-500">{article.author}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                article.status === 'Published' 
                                  ? 'bg-green-100 text-green-800' 
                                  : 'bg-yellow-100 text-yellow-800'
                              }`}>
                                {article.status}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-neutral-500">{article.category}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-neutral-500">
                                <div className="flex items-center">
                                  <Calendar className="h-4 w-4 mr-1" />
                                  {article.date}
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-neutral-500">{article.views.toLocaleString()}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              <div className="flex justify-end space-x-2">
                                <button className="p-1 rounded hover:bg-neutral-100 text-neutral-700 transition-colors">
                                  <Eye className="h-4 w-4" />
                                </button>
                                <button className="p-1 rounded hover:bg-neutral-100 text-neutral-700 transition-colors">
                                  <PenSquare className="h-4 w-4" />
                                </button>
                                <button 
                                  className="p-1 rounded hover:bg-red-100 text-red-600 transition-colors"
                                  onClick={() => handleDeleteArticle(article.id)}
                                >
                                  <Trash2 className="h-4 w-4" />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="px-6 py-4 border-t border-neutral-200 flex justify-between items-center">
                    <div className="text-sm text-neutral-500">
                      Showing <span className="font-medium">1</span> to <span className="font-medium">3</span> of <span className="font-medium">3</span> results
                    </div>
                    <div className="flex space-x-2">
                      <button className="px-3 py-1 rounded border border-neutral-300 text-neutral-700 hover:bg-neutral-50 transition-colors">
                        Previous
                      </button>
                      <button className="px-3 py-1 rounded border border-neutral-300 text-neutral-700 hover:bg-neutral-50 transition-colors">
                        Next
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

const SidebarItem = ({ icon, label, isCollapsed, isActive }) => {
  return (
    <motion.div
      className={`flex items-center px-4 py-3 my-1 rounded-lg cursor-pointer transition-all duration-300 ${
        isActive 
          ? "bg-neutral-100 text-neutral-900" 
          : "text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900"
      }`}
      whileHover={{ x: 5 }}
      transition={{ duration: 0.2 }}
    >
      <div className={`${!isCollapsed ? "mr-3" : ""} ${isCollapsed ? "mx-auto" : ""}`}>
        {icon}
      </div>
      <motion.div
        initial={{ opacity: isCollapsed ? 0 : 1, width: isCollapsed ? 0 : "auto" }}
        animate={{ opacity: isCollapsed ? 0 : 1, width: isCollapsed ? 0 : "auto" }}
        transition={{ duration: 0.2 }}
        className="font-medium overflow-hidden whitespace-nowrap"
      >
        {label}
      </motion.div>
    </motion.div>
  );
};

export default Admin;
