
import { useState } from "react";
import { 
  PenSquare, Save, Image, X, ChevronDown, Home, FileText, Users, Settings, LogOut, 
  Newspaper, BarChart2, Eye, Trash2, Plus, Search, Calendar 
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const Admin = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [tags, setTags] = useState<string[]>([]);
  const [currentTag, setCurrentTag] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState("create");

  // Mock data for articles list
  const articles = [
    {
      id: 1,
      title: "The Future of Mixed-Use Development in Urban Areas",
      status: "Published",
      category: "Property Insights",
      date: "May 21, 2023",
      views: 1204
    },
    {
      id: 2,
      title: "Group Housing: The New Way to Invest",
      status: "Published",
      category: "Investment",
      date: "May 18, 2023",
      views: 895
    },
    {
      id: 3,
      title: "Plotted Development: What Buyers Need to Know",
      status: "Draft",
      category: "Property Insights",
      date: "May 15, 2023",
      views: 0
    }
  ];

  const categories = [
    "Property Insights",
    "Investment",
    "Market Analysis",
    "Lifestyle",
    "Architecture",
    "Legal"
  ];

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically submit to your backend
    console.log({ title, content, category, image, tags });
    alert("Article saved successfully!");
    
    // Reset form
    setTitle("");
    setContent("");
    setCategory("");
    setImage(null);
    setImagePreview(null);
    setTags([]);
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
                          Article Title
                        </label>
                        <input
                          id="title"
                          type="text"
                          value={title}
                          onChange={(e) => setTitle(e.target.value)}
                          placeholder="Enter article title"
                          className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:border-transparent transition-all duration-300"
                          required
                        />
                      </div>

                      {/* Category */}
                      <div className="mb-6 relative">
                        <label htmlFor="category" className="block text-sm font-medium text-neutral-700 mb-2">
                          Category
                        </label>
                        <div className="relative">
                          <button
                            type="button"
                            className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:border-transparent transition-all duration-300 text-left flex items-center justify-between"
                            onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}
                          >
                            <span>{category || "Select a category"}</span>
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
                      </div>

                      {/* Featured Image */}
                      <div className="mb-6">
                        <label className="block text-sm font-medium text-neutral-700 mb-2">
                          Featured Image
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
                          <div className="rounded-lg border-2 border-dashed border-neutral-300 p-8 text-center">
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
                      </div>

                      {/* Content */}
                      <div className="mb-8">
                        <label htmlFor="content" className="block text-sm font-medium text-neutral-700 mb-2">
                          Content
                        </label>
                        <textarea
                          id="content"
                          value={content}
                          onChange={(e) => setContent(e.target.value)}
                          placeholder="Write your article content here..."
                          className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:border-transparent transition-all duration-300 min-h-[300px]"
                          required
                        />
                      </div>

                      {/* Submit Button */}
                      <div className="flex justify-end">
                        <motion.button
                          type="submit"
                          className="flex items-center bg-neutral-900 hover:bg-neutral-800 text-white py-3 px-6 rounded-lg transition-all duration-300"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Save className="h-5 w-5 mr-2" />
                          Save Article
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
                                <button className="p-1 rounded hover:bg-red-100 text-red-600 transition-colors">
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
