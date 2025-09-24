// // // import React, { useState, useEffect } from 'react';
// // // import { Plus, Edit3, Trash2, Save, X } from 'lucide-react';

// // // const BlogPage = () => {
// // //   // Load posts from localStorage on component mount
// // //   const [posts, setPosts] = useState([]);
  
// // //   const [showCreateForm, setShowCreateForm] = useState(false);
// // //   const [editingPost, setEditingPost] = useState(null);
// // //   const [formData, setFormData] = useState({
// // //     title: '',
// // //     content: '',
// // //     image: null
// // //   });

// // //   // Load data from localStorage when component mounts
// // //   useEffect(() => {
// // //     try {
// // //       const savedPosts = localStorage.getItem('blogPosts');
// // //       if (savedPosts) {
// // //         setPosts(JSON.parse(savedPosts));
// // //       }
// // //     } catch (error) {
// // //       console.error('Error loading posts from localStorage:', error);
// // //     }
// // //   }, []);

// // //   // Function to save posts to localStorage
// // //   const saveToLocalStorage = (newPosts) => {
// // //     try {
// // //       localStorage.setItem('blogPosts', JSON.stringify(newPosts));
// // //       console.log('Posts saved to localStorage:', newPosts);
// // //     } catch (error) {
// // //       console.error('Error saving to localStorage:', error);
// // //       alert('Error saving data. Storage might be full.');
// // //     }
// // //   };

// // //   const handleImageUpload = (e) => {
// // //     const file = e.target.files[0];
// // //     if (file) {
// // //       // Check file size (limit to 2MB for localStorage efficiency)
// // //       if (file.size > 2 * 1024 * 1024) {
// // //         alert('File size should be less than 2MB for localStorage storage');
// // //         return;
// // //       }
      
// // //       const reader = new FileReader();
// // //       reader.onload = (e) => {
// // //         setFormData(prev => ({
// // //           ...prev,
// // //           image: e.target.result
// // //         }));
// // //       };
// // //       reader.readAsDataURL(file);
// // //     }
// // //   };

// // //   const handleSubmit = () => {
// // //     if (formData.title.trim() && formData.content.trim()) {
// // //       const newPost = {
// // //         id: Date.now(),
// // //         title: formData.title.trim(),
// // //         content: formData.content.trim(),
// // //         image: formData.image,
// // //         createdAt: new Date().toLocaleDateString('en-US', {
// // //           year: 'numeric',
// // //           month: 'long',
// // //           day: 'numeric',
// // //           hour: '2-digit',
// // //           minute: '2-digit'
// // //         })
// // //       };

// // //       let updatedPosts;
      
// // //       if (editingPost) {
// // //         // Edit existing post
// // //         updatedPosts = posts.map(post => 
// // //           post.id === editingPost.id ? { ...newPost, id: editingPost.id, createdAt: editingPost.createdAt } : post
// // //         );
// // //         setEditingPost(null);
// // //       } else {
// // //         // Create new post
// // //         updatedPosts = [newPost, ...posts];
// // //       }
      
// // //       // Update state and save to localStorage
// // //       setPosts(updatedPosts);
// // //       saveToLocalStorage(updatedPosts);

// // //       // Reset form
// // //       setFormData({ title: '', content: '', image: null });
// // //       setShowCreateForm(false);
      
// // //       alert(editingPost ? 'Post updated and saved to localStorage!' : 'Post created and saved to localStorage!');
// // //     } else {
// // //       alert('Please fill in both title and content fields');
// // //     }
// // //   };

// // //   const handleEdit = (post) => {
// // //     setFormData({
// // //       title: post.title,
// // //       content: post.content,
// // //       image: post.image
// // //     });
// // //     setEditingPost(post);
// // //     setShowCreateForm(true);
// // //   };

// // //   const handleDelete = (id) => {
// // //     if (window.confirm('Are you sure you want to delete this post?')) {
// // //       const updatedPosts = posts.filter(post => post.id !== id);
// // //       setPosts(updatedPosts);
// // //       saveToLocalStorage(updatedPosts);
// // //       alert('Post deleted and localStorage updated!');
// // //     }
// // //   };

// // //   const resetForm = () => {
// // //     setFormData({ title: '', content: '', image: null });
// // //     setShowCreateForm(false);
// // //     setEditingPost(null);
// // //   };

// // //   const clearAllPosts = () => {
// // //     if (window.confirm('Are you sure you want to delete all posts? This action cannot be undone.')) {
// // //       setPosts([]);
// // //       saveToLocalStorage([]);
// // //       alert('All posts cleared from localStorage!');
// // //     }
// // //   };

// // //   // Function to check localStorage status
// // //   const checkLocalStorageStatus = () => {
// // //     try {
// // //       const data = localStorage.getItem('blogPosts');
// // //       if (data) {
// // //         const posts = JSON.parse(data);
// // //         alert(`localStorage Status:\n\nTotal Posts: ${posts.length}\nData Size: ${Math.round(data.length / 1024)} KB\n\nData is being saved successfully!`);
// // //       } else {
// // //         alert('No data found in localStorage');
// // //       }
// // //     } catch (error) {
// // //       alert('Error reading from localStorage: ' + error.message);
// // //     }
// // //   };

// // //   return (
// // //     <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 mt-40">
// // //       {/* Header */}
// // //       <div className="bg-white shadow-lg border-b border-gray-100">
// // //         <div className="max-w-6xl mx-auto px-6 py-8">
// // //           <div className="flex justify-between items-center flex-wrap gap-4">
// // //             <div>
// // //               <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
// // //                 My Blog
// // //               </h1>
             
// // //             </div>
// // //             <div className="flex gap-3 flex-wrap">
// // //               <button
// // //                 onClick={checkLocalStorageStatus}
// // //                 className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors font-medium"
// // //               >
// // //                 Check Storage
// // //               </button>
// // //               {posts.length > 0 && (
// // //                 <button
// // //                   onClick={clearAllPosts}
// // //                   className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors font-medium"
// // //                 >
// // //                   Clear All
// // //                 </button>
// // //               )}
// // //               <button
// // //                 onClick={() => setShowCreateForm(true)}
// // //                 className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2 font-semibold"
// // //               >
// // //                 <Plus size={20} />
// // //                 Create Post
// // //               </button>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>

// // //       <div className="max-w-6xl mx-auto px-6 py-8">
// // //         {/* Create/Edit Form Modal */}
// // //         {showCreateForm && (
// // //           <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
// // //             <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
// // //               <div className="p-6 border-b border-gray-200">
// // //                 <div className="flex justify-between items-center">
// // //                   <h2 className="text-2xl font-bold text-gray-800">
// // //                     {editingPost ? 'Edit Post' : 'Create New Post'}
// // //                   </h2>
// // //                   <button
// // //                     onClick={resetForm}
// // //                     className="text-gray-500 hover:text-gray-700 transition-colors"
// // //                   >
// // //                     <X size={24} />
// // //                   </button>
// // //                 </div>
// // //               </div>

// // //               <div className="p-6 space-y-6">
// // //                 {/* Image Upload */}
// // //                 <div>
// // //                   <label className="block text-sm font-semibold text-gray-700 mb-3">
// // //                     Featured Image (Optional) - Will be saved to localStorage
// // //                   </label>
// // //                   <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-purple-400 transition-colors">
// // //                     {formData.image ? (
// // //                       <div className="relative">
// // //                         <img
// // //                           src={formData.image}
// // //                           alt="Preview"
// // //                           className="max-w-full h-48 object-cover rounded-lg mx-auto"
// // //                         />
// // //                         <button
// // //                           type="button"
// // //                           onClick={() => setFormData(prev => ({ ...prev, image: null }))}
// // //                           className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors"
// // //                         >
// // //                           <X size={16} />
// // //                         </button>
// // //                         <p className="text-xs text-green-600 mt-2">✅ Image ready to save to localStorage</p>
// // //                       </div>
// // //                     ) : (
// // //                       <div className="space-y-3">
// // //                         <div className="w-12 h-12 bg-gray-200 rounded-lg mx-auto flex items-center justify-center">
// // //                           <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
// // //                           </svg>
// // //                         </div>
// // //                         <div>
// // //                           <input
// // //                             type="file"
// // //                             accept="image/*"
// // //                             onChange={handleImageUpload}
// // //                             className="hidden"
// // //                             id="image-upload"
// // //                           />
// // //                           <label
// // //                             htmlFor="image-upload"
// // //                             className="cursor-pointer bg-purple-100 text-purple-700 px-4 py-2 rounded-lg hover:bg-purple-200 transition-colors font-semibold"
// // //                           >
// // //                             Choose Image
// // //                           </label>
// // //                         </div>
// // //                         <p className="text-sm text-gray-500">PNG, JPG, GIF up to 2MB (optimized for localStorage)</p>
// // //                       </div>
// // //                     )}
// // //                   </div>
// // //                 </div>

// // //                 {/* Title Input */}
// // //                 <div>
// // //                   <label className="block text-sm font-semibold text-gray-700 mb-3">
// // //                     Blog Title * (Will be saved to localStorage)
// // //                   </label>
// // //                   <input
// // //                     type="text"
// // //                     value={formData.title}
// // //                     onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
// // //                     placeholder="Enter your blog title..."
// // //                     className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-lg"
// // //                     maxLength="100"
// // //                   />
// // //                   <p className="text-sm text-gray-500 mt-1">{formData.title.length}/100 characters</p>
// // //                 </div>

// // //                 {/* Content Input */}
// // //                 <div>
// // //                   <label className="block text-sm font-semibold text-gray-700 mb-3">
// // //                     Blog Content * (Will be saved to localStorage)
// // //                   </label>
// // //                   <textarea
// // //                     value={formData.content}
// // //                     onChange={(e) => setFormData(prev => ({ ...prev, content: e.target.value }))}
// // //                     placeholder="Write your blog content here..."
// // //                     rows="8"
// // //                     className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 resize-none"
// // //                     maxLength="5000"
// // //                   />
// // //                   <p className="text-sm text-gray-500 mt-1">{formData.content.length}/5000 characters</p>
// // //                 </div>

// // //                 {/* Action Buttons */}
// // //                 <div className="flex gap-3 pt-4">
// // //                   <button
// // //                     onClick={handleSubmit}
// // //                     disabled={!formData.title.trim() || !formData.content.trim()}
// // //                     className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-6 rounded-xl hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 font-semibold disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
// // //                   >
// // //                     <Save size={20} />
// // //                     {editingPost ? 'Update & Save to localStorage' : 'Publish & Save to localStorage'}
// // //                   </button>
// // //                   <button
// // //                     onClick={resetForm}
// // //                     className="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors font-semibold"
// // //                   >
// // //                     Cancel
// // //                   </button>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         )}

// // //         {/* Blog Posts Display */}
// // //         <div className="space-y-8">
// // //           {posts.length === 0 ? (
// // //             <div className="text-center py-16">
// // //               <div className="bg-white rounded-2xl shadow-lg p-8 mx-auto max-w-md">
// // //                 <div className="w-24 h-24 bg-gradient-to-r from-blue-100 to-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
// // //                   <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
// // //                   </svg>
// // //                 </div>
// // //                 <h3 className="text-xl font-semibold text-gray-800 mb-3">No posts yet</h3>
// // //                 <p className="text-gray-600 mb-4">Start sharing your thoughts by creating your first blog post!</p>
// // //                 <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
// // //                   <h4 className="font-semibold text-green-800 mb-2">✅ localStorage ACTIVE:</h4>
// // //                   <ul className="text-sm text-green-700 text-left space-y-1">
// // //                     <li>• Blog titles will be saved</li>
// // //                     <li>• Blog content will be stored</li>
// // //                     <li>• Images saved as base64 data</li>
// // //                     <li>• Data persists between sessions</li>
// // //                     <li>• No server required!</li>
// // //                   </ul>
// // //                 </div>
// // //                 <button
// // //                   onClick={() => setShowCreateForm(true)}
// // //                   className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 font-semibold"
// // //                 >
// // //                   Create Your First Post
// // //                 </button>
// // //               </div>
// // //             </div>
// // //           ) : (
// // //             <div>
             
              
// // //               <div className="grid gap-8">
// // //                 {posts.map((post) => (
// // //                   <article key={post.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-l-4 border-green-500">
// // //                     {post.image && (
// // //                       <div className="h-64 overflow-hidden relative">
// // //                         <img
// // //                           src={post.image}
// // //                           alt={post.title}
// // //                           className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
// // //                         />
                        
// // //                       </div>
// // //                     )}
// // //                     <div className="p-8">
// // //                       <div className="flex justify-between items-start mb-4">
// // //                         <div className="flex-1">
// // //                           <h2 className="text-2xl font-bold text-gray-800 mb-2 hover:text-purple-600 transition-colors cursor-pointer">
// // //                             {post.title}
// // //                           </h2>
// // //                           <div className="flex items-center gap-4 text-sm text-gray-500">
// // //                             <p className="flex items-center gap-1">
// // //                               <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
// // //                                 <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
// // //                               </svg>
// // //                               {post.createdAt}
// // //                             </p>
// // //                             <p className="flex items-center gap-1">
// // //                               <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
// // //                                 <path fillRule="evenodd" d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z" clipRule="evenodd" />
// // //                               </svg>
// // //                               {post.content.length} characters
// // //                             </p>
                           
// // //                           </div>
// // //                         </div>
// // //                         <div className="flex gap-2 ml-4">
// // //                           <button
// // //                             onClick={() => handleEdit(post)}
// // //                             className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
// // //                             title="Edit post"
// // //                           >
// // //                             <Edit3 size={18} />
// // //                           </button>
// // //                           <button
// // //                             onClick={() => handleDelete(post.id)}
// // //                             className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
// // //                             title="Delete post"
// // //                           >
// // //                             <Trash2 size={18} />
// // //                           </button>
// // //                         </div>
// // //                       </div>
// // //                       <div className="prose prose-gray max-w-none">
// // //                         <div className="text-gray-700 leading-relaxed whitespace-pre-wrap">
// // //                           {post.content.length > 300 ? (
// // //                             <div>
// // //                               <p>{post.content.substring(0, 300)}...</p>
// // //                               <button 
// // //                                 onClick={() => alert(`Full content:\n\n${post.content}`)}
// // //                                 className="text-purple-600 hover:text-purple-700 font-medium mt-2"
// // //                               >
// // //                                 Read more
// // //                               </button>
// // //                             </div>
// // //                           ) : (
// // //                             <p>{post.content}</p>
// // //                           )}
// // //                         </div>
// // //                       </div>
// // //                     </div>
// // //                   </article>
// // //                 ))}
// // //               </div>
// // //             </div>
// // //           )}
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default BlogPage;



// // import React, { useState, useEffect } from 'react';
// // import { Plus, Edit3, Trash2, Save, X } from 'lucide-react';

// // const BlogPage = () => {
// //   // Load posts from localStorage on component mount
// //   const [posts, setPosts] = useState([]);
  
// //   const [showCreateForm, setShowCreateForm] = useState(false);
// //   const [editingPost, setEditingPost] = useState(null);
// //   const [formData, setFormData] = useState({
// //     title: '',
// //     content: '',
// //     image: null
// //   });

// //   // Load data from localStorage when component mounts
// //   useEffect(() => {
// //     try {
// //       const savedPosts = localStorage.getItem('blogPosts');
// //       if (savedPosts) {
// //         setPosts(JSON.parse(savedPosts));
// //       }
// //     } catch (error) {
// //       console.error('Error loading posts from localStorage:', error);
// //     }
// //   }, []);

// //   // Function to save posts to localStorage
// //   const saveToLocalStorage = (newPosts) => {
// //     try {
// //       localStorage.setItem('blogPosts', JSON.stringify(newPosts));
// //       console.log('Posts saved to localStorage:', newPosts);
// //     } catch (error) {
// //       console.error('Error saving to localStorage:', error);
// //       alert('Error saving data. Storage might be full.');
// //     }
// //   };

// //   const handleImageUpload = (e) => {
// //     const file = e.target.files[0];
// //     if (file) {
// //       // Check file size (limit to 2MB for localStorage efficiency)
// //       if (file.size > 2 * 1024 * 1024) {
// //         alert('File size should be less than 2MB for localStorage storage');
// //         return;
// //       }
      
// //       const reader = new FileReader();
// //       reader.onload = (e) => {
// //         setFormData(prev => ({
// //           ...prev,
// //           image: e.target.result
// //         }));
// //       };
// //       reader.readAsDataURL(file);
// //     }
// //   };

// //   const handleSubmit = () => {
// //     if (formData.title.trim() && formData.content.trim()) {
// //       const newPost = {
// //         id: Date.now(),
// //         title: formData.title.trim(),
// //         content: formData.content.trim(),
// //         image: formData.image,
// //         createdAt: new Date().toLocaleDateString('en-US', {
// //           year: 'numeric',
// //           month: 'long',
// //           day: 'numeric',
// //           hour: '2-digit',
// //           minute: '2-digit'
// //         })
// //       };

// //       let updatedPosts;
      
// //       if (editingPost) {
// //         // Edit existing post
// //         updatedPosts = posts.map(post => 
// //           post.id === editingPost.id ? { ...newPost, id: editingPost.id, createdAt: editingPost.createdAt } : post
// //         );
// //         setEditingPost(null);
// //       } else {
// //         // Create new post
// //         updatedPosts = [newPost, ...posts];
// //       }
      
// //       // Update state and save to localStorage
// //       setPosts(updatedPosts);
// //       saveToLocalStorage(updatedPosts);

// //       // Reset form
// //       setFormData({ title: '', content: '', image: null });
// //       setShowCreateForm(false);
      
// //       alert(editingPost ? 'Post updated and saved to localStorage!' : 'Post created and saved to localStorage!');
// //     } else {
// //       alert('Please fill in both title and content fields');
// //     }
// //   };

// //   const handleEdit = (post) => {
// //     setFormData({
// //       title: post.title,
// //       content: post.content,
// //       image: post.image
// //     });
// //     setEditingPost(post);
// //     setShowCreateForm(true);
// //   };

// //   const handleDelete = (id) => {
// //     if (window.confirm('Are you sure you want to delete this post?')) {
// //       const updatedPosts = posts.filter(post => post.id !== id);
// //       setPosts(updatedPosts);
// //       saveToLocalStorage(updatedPosts);
// //       alert('Post deleted and localStorage updated!');
// //     }
// //   };

// //   const resetForm = () => {
// //     setFormData({ title: '', content: '', image: null });
// //     setShowCreateForm(false);
// //     setEditingPost(null);
// //   };

// //   const clearAllPosts = () => {
// //     if (window.confirm('Are you sure you want to delete all posts? This action cannot be undone.')) {
// //       setPosts([]);
// //       saveToLocalStorage([]);
// //       alert('All posts cleared from localStorage!');
// //     }
// //   };

// //   // Function to check localStorage status
// //   const checkLocalStorageStatus = () => {
// //     try {
// //       const data = localStorage.getItem('blogPosts');
// //       if (data) {
// //         const posts = JSON.parse(data);
// //         alert(`localStorage Status:\n\nTotal Posts: ${posts.length}\nData Size: ${Math.round(data.length / 1024)} KB\n\nData is being saved successfully!`);
// //       } else {
// //         alert('No data found in localStorage');
// //       }
// //     } catch (error) {
// //       alert('Error reading from localStorage: ' + error.message);
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 mt-40">
    
// //  <div className="flex gap-3 flex-wrap">
// //               <button
// //                 onClick={checkLocalStorageStatus}
// //                 className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors font-medium"
// //               >
// //                 Check Storage
// //               </button>
// //               {posts.length > 0 && (
// //                 <button
// //                   onClick={clearAllPosts}
// //                   className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors font-medium"
// //                 >
// //                   Clear All
// //                 </button>
// //               )}
// //               <button
// //                 onClick={() => setShowCreateForm(true)}
// //                 className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2 font-semibold"
// //               >
// //                 <Plus size={20} />
// //                 Create Post
// //               </button>
// //             </div>
// //       <div className="max-w-7xl mx-auto px-4 py-8">
// //         {/* Create/Edit Form Modal */}
// //         {showCreateForm && (
// //           <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
// //             <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
// //               <div className="p-6 border-b border-gray-200">
// //                 <div className="flex justify-between items-center">
// //                   <h2 className="text-2xl font-bold text-gray-800">
// //                     {editingPost ? 'Edit Post' : 'Create New Post'}
// //                   </h2>
// //                   <button
// //                     onClick={resetForm}
// //                     className="text-gray-500 hover:text-gray-700 transition-colors"
// //                   >
// //                     <X size={24} />
// //                   </button>
// //                 </div>
// //               </div>

// //               <div className="p-6 space-y-6">
// //                 {/* Image Upload */}
// //                 <div>
// //                   <label className="block text-sm font-semibold text-gray-700 mb-3">
// //                     Featured Image (Optional) - Will be saved to localStorage
// //                   </label>
// //                   <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-purple-400 transition-colors">
// //                     {formData.image ? (
// //                       <div className="relative">
// //                         <img
// //                           src={formData.image}
// //                           alt="Preview"
// //                           className="max-w-full h-48 object-cover rounded-lg mx-auto"
// //                         />
// //                         <button
// //                           type="button"
// //                           onClick={() => setFormData(prev => ({ ...prev, image: null }))}
// //                           className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors"
// //                         >
// //                           <X size={16} />
// //                         </button>
// //                         <p className="text-xs text-green-600 mt-2">✅ Image ready to save to localStorage</p>
// //                       </div>
// //                     ) : (
// //                       <div className="space-y-3">
// //                         <div className="w-12 h-12 bg-gray-200 rounded-lg mx-auto flex items-center justify-center">
// //                           <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
// //                           </svg>
// //                         </div>
// //                         <div>
// //                           <input
// //                             type="file"
// //                             accept="image/*"
// //                             onChange={handleImageUpload}
// //                             className="hidden"
// //                             id="image-upload"
// //                           />
// //                           <label
// //                             htmlFor="image-upload"
// //                             className="cursor-pointer bg-purple-100 text-purple-700 px-4 py-2 rounded-lg hover:bg-purple-200 transition-colors font-semibold"
// //                           >
// //                             Choose Image
// //                           </label>
// //                         </div>
// //                         <p className="text-sm text-gray-500">PNG, JPG, GIF up to 2MB (optimized for localStorage)</p>
// //                       </div>
// //                     )}
// //                   </div>
// //                 </div>

// //                 {/* Title Input */}
// //                 <div>
// //                   <label className="block text-sm font-semibold text-gray-700 mb-3">
// //                     Blog Title * (Will be saved to localStorage)
// //                   </label>
// //                   <input
// //                     type="text"
// //                     value={formData.title}
// //                     onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
// //                     placeholder="Enter your blog title..."
// //                     className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-lg"
// //                     maxLength="100"
// //                   />
// //                   <p className="text-sm text-gray-500 mt-1">{formData.title.length}/100 characters</p>
// //                 </div>

// //                 {/* Content Input */}
// //                 <div>
// //                   <label className="block text-sm font-semibold text-gray-700 mb-3">
// //                     Blog Content * (Will be saved to localStorage)
// //                   </label>
// //                   <textarea
// //                     value={formData.content}
// //                     onChange={(e) => setFormData(prev => ({ ...prev, content: e.target.value }))}
// //                     placeholder="Write your blog content here..."
// //                     rows="8"
// //                     className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 resize-none"
// //                     maxLength="5000"
// //                   />
// //                   <p className="text-sm text-gray-500 mt-1">{formData.content.length}/5000 characters</p>
// //                 </div>

// //                 {/* Action Buttons */}
// //                 <div className="flex gap-3 pt-4">
// //                   <button
// //                     onClick={handleSubmit}
// //                     disabled={!formData.title.trim() || !formData.content.trim()}
// //                     className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-6 rounded-xl hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 font-semibold disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
// //                   >
// //                     <Save size={20} />
// //                     {editingPost ? 'Update & Save to localStorage' : 'Publish & Save to localStorage'}
// //                   </button>
// //                   <button
// //                     onClick={resetForm}
// //                     className="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors font-semibold"
// //                   >
// //                     Cancel
// //                   </button>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         )}

// //         {/* Blog Posts Display - NEW GRID LAYOUT */}
// //         <div className="space-y-8">
// //           {posts.length === 0 ? (
// //             <div className="text-center py-16">
// //               <div className="bg-white rounded-2xl shadow-lg p-8 mx-auto max-w-md">
// //                 <div className="w-24 h-24 bg-gradient-to-r from-blue-100 to-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
// //                   <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
// //                   </svg>
// //                 </div>
// //                 <h3 className="text-xl font-semibold text-gray-800 mb-3">No posts yet</h3>
// //                 <p className="text-gray-600 mb-4">Start sharing your thoughts by creating your first blog post!</p>
// //                 <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
// //                   <h4 className="font-semibold text-green-800 mb-2">✅ localStorage ACTIVE:</h4>
// //                   <ul className="text-sm text-green-700 text-left space-y-1">
// //                     <li>• Blog titles will be saved</li>
// //                     <li>• Blog content will be stored</li>
// //                     <li>• Images saved as base64 data</li>
// //                     <li>• Data persists between sessions</li>
// //                     <li>• No server required!</li>
// //                   </ul>
// //                 </div>
// //                 <button
// //                   onClick={() => setShowCreateForm(true)}
// //                   className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 font-semibold"
// //                 >
// //                   Create Your First Post
// //                 </button>
// //               </div>
// //             </div>
// //           ) : (
// //             <div>
// //               <div className="text-center mb-8">
                
// //               <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
// //                 My Blog
// //               </h1>
// //               <p className="text-gray-600 mt-2">Share your thoughts with the world</p>
           
// //               </div>
              
// //               {/* RESPONSIVE GRID LAYOUT - 1 col mobile, 2 cols tablet, 3-4 cols desktop */}
// //               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
// //                 {posts.map((post) => (
// //                   <article key={post.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-green-500 flex flex-col">
// //                     {/* Image Section */}
// //                     {post.image && (
// //                       <div className="h-48 overflow-hidden relative">
// //                         <img
// //                           src={post.image}
// //                           alt={post.title}
// //                           className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
// //                         />
                        
// //                       </div>
// //                     )}
                    
// //                     {/* Content Section */}
// //                     <div className="p-5 flex-1 flex flex-col">
// //                       {/* Header with Actions */}
// //                       <div className="flex justify-between items-start mb-3">
// //                         <div className="flex-1 mr-2">
// //                           <h3 className="text-lg font-bold text-gray-800 line-clamp-2 hover:text-purple-600 transition-colors cursor-pointer leading-tight">
// //                             {post.title}
// //                           </h3>
// //                         </div>
// //                         <div className="flex gap-1 flex-shrink-0">
// //                           <button
// //                             onClick={() => handleEdit(post)}
// //                             className="p-1.5 text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
// //                             title="Edit post"
// //                           >
// //                             <Edit3 size={14} />
// //                           </button>
// //                           <button
// //                             onClick={() => handleDelete(post.id)}
// //                             className="p-1.5 text-red-600 hover:bg-red-50 rounded-md transition-colors"
// //                             title="Delete post"
// //                           >
// //                             <Trash2 size={14} />
// //                           </button>
// //                         </div>
// //                       </div>

// //                       {/* Date and Stats */}
// //                       {/* <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
// //                         <span className="flex items-center gap-1">
// //                           <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
// //                             <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
// //                           </svg>
// //                           {post.createdAt}
// //                         </span>
// //                       </div> */}

// //                       {/* Content Preview */}
// //                       <div className="flex-1 mb-4">
// //                         <p className="text-gray-700 text-sm leading-relaxed line-clamp-3">
// //                           {post.content.length > 150 
// //                             ? `${post.content.substring(0, 150)}...` 
// //                             : post.content
// //                           }
// //                         </p>
// //                       </div>

// //                       {/* Read More Button */}
// //                       <div className="mt-auto">
// //                         <button 
// //                           onClick={() => alert(`Full Post:\n\nTitle: ${post.title}\n\nContent:\n${post.content}`)}
// //                           className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm py-2 px-4 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 font-medium"
// //                         >
// //                           Read Full Post
// //                         </button>
// //                       </div>

// //                     </div>
// //                   </article>
// //                 ))}
// //               </div>
// //             </div>
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default BlogPage;



// // import React, { useState, useEffect } from 'react';
// // import { Plus, Edit3, Trash2, Save, X, Calendar, User, Eye } from 'lucide-react';

// // const BlogPage = () => {
// //   const [posts, setPosts] = useState([]);
// //   const [showCreateForm, setShowCreateForm] = useState(false);
// //   const [editingPost, setEditingPost] = useState(null);
// //   const [formData, setFormData] = useState({
// //     title: '',
// //     content: '',
// //     image: null
// //   });

// //   useEffect(() => {
// //     try {
// //       const savedPosts = localStorage.getItem('blogPosts');
// //       if (savedPosts) {
// //         setPosts(JSON.parse(savedPosts));
// //       }
// //     } catch (error) {
// //       console.error('Error loading posts from localStorage:', error);
// //     }
// //   }, []);

// //   const saveToLocalStorage = (newPosts) => {
// //     try {
// //       localStorage.setItem('blogPosts', JSON.stringify(newPosts));
// //       console.log('Posts saved to localStorage:', newPosts);
// //     } catch (error) {
// //       console.error('Error saving to localStorage:', error);
// //       alert('Error saving data. Storage might be full.');
// //     }
// //   };

// //   const handleImageUpload = (e) => {
// //     const file = e.target.files[0];
// //     if (file) {
// //       if (file.size > 2 * 1024 * 1024) {
// //         alert('File size should be less than 2MB for localStorage storage');
// //         return;
// //       }
      
// //       const reader = new FileReader();
// //       reader.onload = (e) => {
// //         setFormData(prev => ({
// //           ...prev,
// //           image: e.target.result
// //         }));
// //       };
// //       reader.readAsDataURL(file);
// //     }
// //   };

// //   const handleSubmit = () => {
// //     if (formData.title.trim() && formData.content.trim()) {
// //       const newPost = {
// //         id: Date.now(),
// //         title: formData.title.trim(),
// //         content: formData.content.trim(),
// //         image: formData.image,
// //         createdAt: new Date().toLocaleDateString('en-US', {
// //           year: 'numeric',
// //           month: 'long',
// //           day: 'numeric',
// //           hour: '2-digit',
// //           minute: '2-digit'
// //         })
// //       };

// //       let updatedPosts;
      
// //       if (editingPost) {
// //         updatedPosts = posts.map(post => 
// //           post.id === editingPost.id ? { ...newPost, id: editingPost.id, createdAt: editingPost.createdAt } : post
// //         );
// //         setEditingPost(null);
// //       } else {
// //         updatedPosts = [newPost, ...posts];
// //       }
      
// //       setPosts(updatedPosts);
// //       saveToLocalStorage(updatedPosts);

// //       setFormData({ title: '', content: '', image: null });
// //       setShowCreateForm(false);
      
// //       alert(editingPost ? 'Post updated successfully!' : 'Post created successfully!');
// //     } else {
// //       alert('Please fill in both title and content fields');
// //     }
// //   };

// //   const handleEdit = (post) => {
// //     setFormData({
// //       title: post.title,
// //       content: post.content,
// //       image: post.image
// //     });
// //     setEditingPost(post);
// //     setShowCreateForm(true);
// //   };

// //   const handleDelete = (id) => {
// //     if (window.confirm('Are you sure you want to delete this post?')) {
// //       const updatedPosts = posts.filter(post => post.id !== id);
// //       setPosts(updatedPosts);
// //       saveToLocalStorage(updatedPosts);
// //       alert('Post deleted successfully!');
// //     }
// //   };

// //   const resetForm = () => {
// //     setFormData({ title: '', content: '', image: null });
// //     setShowCreateForm(false);
// //     setEditingPost(null);
// //   };

// //   const clearAllPosts = () => {
// //     if (window.confirm('Are you sure you want to delete all posts?')) {
// //       setPosts([]);
// //       saveToLocalStorage([]);
// //       alert('All posts cleared!');
// //     }
// //   };


// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-24 mt-20">
// //       {/* Header */}
     
// //           <div className="flex justify-between items-center flex-wrap gap-4">
          
// //             <div className="flex gap-3 flex-wrap">
             
// //               {posts.length > 0 && (
// //                 <button
// //                   onClick={clearAllPosts}
// //                   className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors font-medium"
// //                 >
// //                   Clear All
// //                 </button>
// //               )}
// //               <button
// //                 onClick={() => setShowCreateForm(true)}
// //                 className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 font-semibold"
// //               >
// //                 <Plus size={20} />
// //                 Add New Recipe
// //               </button>
// //             </div>
// //           </div>
       

// //       <div className="max-w-7xl mx-auto px-4 py-8">
// //         {/* Create/Edit Form Modal */}
// //         {showCreateForm && (
// //           <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
// //             <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
// //               <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-purple-50">
// //                 <div className="flex justify-between items-center">
// //                   <h2 className="text-2xl font-bold text-gray-800">
// //                     {editingPost ? 'Edit Recipe' : 'Add New Recipe'}
// //                   </h2>
// //                   <button
// //                     onClick={resetForm}
// //                     className="text-gray-500 hover:text-gray-700 transition-colors p-1 hover:bg-white rounded-lg"
// //                   >
// //                     <X size={24} />
// //                   </button>
// //                 </div>
// //               </div>

// //               <div className="p-6 space-y-6">
// //                 {/* Image Upload */}
// //                 <div>
// //                   <label className="block text-sm font-semibold text-gray-700 mb-3">
// //                     Recipe Image (Recommended)
// //                   </label>
// //                   <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-blue-400 transition-colors bg-gray-50">
// //                     {formData.image ? (
// //                       <div className="relative">
// //                         <img
// //                           src={formData.image}
// //                           alt="Preview"
// //                           className="max-w-full h-48 object-cover rounded-lg mx-auto shadow-lg"
// //                         />
// //                         <button
// //                           type="button"
// //                           onClick={() => setFormData(prev => ({ ...prev, image: null }))}
// //                           className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-2 hover:bg-red-600 transition-colors shadow-lg"
// //                         >
// //                           <X size={16} />
// //                         </button>
// //                       </div>
// //                     ) : (
// //                       <div className="space-y-3">
// //                         <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto flex items-center justify-center">
// //                           <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
// //                           </svg>
// //                         </div>
// //                         <div>
// //                           <input
// //                             type="file"
// //                             accept="image/*"
// //                             onChange={handleImageUpload}
// //                             className="hidden"
// //                             id="image-upload"
// //                           />
// //                           <label
// //                             htmlFor="image-upload"
// //                             className="cursor-pointer bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
// //                           >
// //                             Upload Image
// //                           </label>
// //                         </div>
// //                         <p className="text-sm text-gray-500">PNG, JPG up to 2MB</p>
// //                       </div>
// //                     )}
// //                   </div>
// //                 </div>

// //                 {/* Title Input */}
// //                 <div>
// //                   <label className="block text-sm font-semibold text-gray-700 mb-3">
// //                     Recipe Title *
// //                   </label>
// //                   <input
// //                     type="text"
// //                     value={formData.title}
// //                     onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
// //                     placeholder="Enter recipe title..."
// //                     className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-lg"
// //                     maxLength="100"
// //                   />
// //                   <p className="text-sm text-gray-500 mt-1">{formData.title.length}/100 characters</p>
// //                 </div>

// //                 {/* Content Input */}
// //                 <div>
// //                   <label className="block text-sm font-semibold text-gray-700 mb-3">
// //                     Recipe Description & Instructions *
// //                   </label>
// //                   <textarea
// //                     value={formData.content}
// //                     onChange={(e) => setFormData(prev => ({ ...prev, content: e.target.value }))}
// //                     placeholder="Write your recipe instructions, ingredients, and description here..."
// //                     rows="8"
// //                     className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
// //                     maxLength="5000"
// //                   />
// //                   <p className="text-sm text-gray-500 mt-1">{formData.content.length}/5000 characters</p>
// //                 </div>

// //                 {/* Action Buttons */}
// //                 <div className="flex gap-3 pt-4">
// //                   <button
// //                     onClick={handleSubmit}
// //                     disabled={!formData.title.trim() || !formData.content.trim()}
// //                     className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-xl hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 font-semibold disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
// //                   >
// //                     <Save size={20} />
// //                     {editingPost ? 'Update Recipe' : 'Publish Recipe'}
// //                   </button>
// //                   <button
// //                     onClick={resetForm}
// //                     className="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors font-semibold"
// //                   >
// //                     Cancel
// //                   </button>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         )}

// //         {/* Blog Posts Grid */}
// //         <div className="mt-8">
// //           {posts.length === 0 ? (
// //             <div className="text-center py-20">
// //               <div className="bg-white rounded-3xl shadow-xl p-12 mx-auto max-w-lg">
// //                 <div className="w-32 h-32 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-8">
// //                   <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
// //                   </svg>
// //                 </div>
// //                 <h3 className="text-2xl font-bold text-gray-800 mb-4">No recipes yet!</h3>
// //                 <p className="text-gray-600 mb-8 text-lg">Start sharing your delicious recipes with the world</p>
// //                 <button
// //                   onClick={() => setShowCreateForm(true)}
// //                   className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 font-semibold text-lg"
// //                 >
// //                   Create Your First Recipe
// //                 </button>
// //               </div>
// //             </div>
// //           ) : (
// //             <div>
// //               <div className="text-center mb-12">
// //                 <h2 className="text-3xl font-bold text-gray-800 mb-4">Latest Recipes</h2>
// //                 <p className="text-gray-600 text-lg">Discover amazing dishes and cooking tips</p>
// //               </div>
              
// //               {/* Grid Layout - Responsive columns */}
// //               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
// //                 {posts.map((post) => (
// //                   <div key={post.id} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group">
// //                     {/* Image Section */}
// //                     <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
// //                       {post.image ? (
// //                         <img
// //                           src={post.image}
// //                           alt={post.title}
// //                           className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
// //                         />
// //                       ) : (
// //                         <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100">
// //                           <svg className="w-16 h-16 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
// //                           </svg>
// //                         </div>
// //                       )}
                      
// //                       {/* Action Buttons Overlay */}
// //                       <div className="absolute top-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
// //                         <button
// //                           onClick={() => handleEdit(post)}
// //                           className="p-2 bg-white bg-opacity-90 text-blue-600 hover:bg-blue-600 hover:text-white rounded-lg transition-colors shadow-lg"
// //                           title="Edit recipe"
// //                         >
// //                           <Edit3 size={16} />
// //                         </button>
// //                         <button
// //                           onClick={() => handleDelete(post.id)}
// //                           className="p-2 bg-white bg-opacity-90 text-red-600 hover:bg-red-600 hover:text-white rounded-lg transition-colors shadow-lg"
// //                           title="Delete recipe"
// //                         >
// //                           <Trash2 size={16} />
// //                         </button>
// //                       </div>
// //                     </div>

// //                     {/* Content Section */}
// //                     <div className="p-6">
// //                       <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2 leading-tight">
// //                         {post.title}
// //                       </h3>
                      
// //                       <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
// //                         <div className="flex items-center gap-1">
// //                           <Calendar size={14} />
// //                           <span>{post.createdAt.split(' ')[0]}</span>
// //                         </div>
// //                         <div className="flex items-center gap-1">
// //                           <Eye size={14} />
// //                           <span>{post.content.length} chars</span>
// //                         </div>
// //                       </div>

// //                       <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4">
// //                         {post.content}
// //                       </p>

// //                       <button 
// //                         onClick={() => alert(`${post.title}\n\n${post.content}`)}
// //                         className="w-full bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 py-2 px-4 rounded-lg hover:from-blue-100 hover:to-purple-100 transition-colors font-medium border border-blue-200"
// //                       >
// //                         View Full Recipe
// //                       </button>
// //                     </div>
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default BlogPage;


// import React, { useState, useEffect } from "react";
// import { Plus, Edit3, Trash2, Save, X } from "lucide-react";

// const BlogPage = () => {
//   const [posts, setPosts] = useState([]);
//   const [showCreateForm, setShowCreateForm] = useState(false);
//   const [editingPost, setEditingPost] = useState(null);
//   const [formData, setFormData] = useState({
//     title: "",
//     content: "",
//     image: null,
//   });

//   useEffect(() => {
//     try {
//       const savedPosts = localStorage.getItem("blogPosts");
//       if (savedPosts) {
//         setPosts(JSON.parse(savedPosts));
//       }
//     } catch (error) {
//       console.error("Error loading posts from localStorage:", error);
//     }
//   }, []);

//   const saveToLocalStorage = (newPosts) => {
//     try {
//       localStorage.setItem("blogPosts", JSON.stringify(newPosts));
//     } catch (error) {
//       console.error("Error saving to localStorage:", error);
//     }
//   };

//   const handleImageUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = (e) => {
//         setFormData((prev) => ({
//           ...prev,
//           image: e.target.result,
//         }));
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleSubmit = () => {
//     if (formData.title.trim() && formData.content.trim()) {
//       const newPost = {
//         id: Date.now(),
//         title: formData.title.trim(),
//         content: formData.content.trim(),
//         image: formData.image,
//         createdAt: new Date().toLocaleDateString("en-GB", {
//           day: "numeric",
//           month: "short",
//           year: "numeric",
//         }),
//       };

//       let updatedPosts;

//       if (editingPost) {
//         updatedPosts = posts.map((post) =>
//           post.id === editingPost.id
//             ? { ...newPost, id: editingPost.id, createdAt: editingPost.createdAt }
//             : post
//         );
//         setEditingPost(null);
//       } else {
//         updatedPosts = [newPost, ...posts];
//       }

//       setPosts(updatedPosts);
//       saveToLocalStorage(updatedPosts);

//       setFormData({ title: "", content: "", image: null });
//       setShowCreateForm(false);
//     }
//   };

//   const handleEdit = (post) => {
//     setFormData({
//       title: post.title,
//       content: post.content,
//       image: post.image,
//     });
//     setEditingPost(post);
//     setShowCreateForm(true);
//   };

//   const handleDelete = (id) => {
//     if (window.confirm("Are you sure you want to delete this post?")) {
//       const updatedPosts = posts.filter((post) => post.id !== id);
//       setPosts(updatedPosts);
//       saveToLocalStorage(updatedPosts);
//     }
//   };

//   const resetForm = () => {
//     setFormData({ title: "", content: "", image: null });
//     setShowCreateForm(false);
//     setEditingPost(null);
//   };

//   return (
//     <div className="min-h-screen bg-white pt-24 mt-20">
//       {/* Header Section */}
//       <div className="text-center mb-12">
//         <h2 className="text-3xl font-bold text-gray-800">OUR BLOGS</h2>
//         <div className="w-16 h-1 bg-orange-500 mx-auto my-4 rounded"></div>
//         <p className="text-gray-500 max-w-2xl mx-auto">
//           Interdum blandit accumsan, in curabitur in mollis dis non nullam,
//           nostra sed sapien pede at augue, elit torquent dolor, massa lectus
//           nunc aliquam.
//         </p>
//       </div>

//       {/* Create Button */}
//       <div className="text-center mb-8">
//         <button
//           onClick={() => setShowCreateForm(true)}
//           className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full hover:shadow-lg transition-all duration-300 flex items-center gap-2 mx-auto"
//         >
//           <Plus size={20} />
//           Add New Blog
//         </button>
//       </div>

//       {/* Blog Grid */}
//       <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
//         {posts.map((post) => (
//           <div
//             key={post.id}
//             className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
//           >
//             {/* Image with Date */}
//             <div className="relative">
//               {post.image ? (
//                 <img
//                   src={post.image}
//                   alt={post.title}
//                   className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
//                 />
//               ) : (
//                 <div className="w-full h-52 bg-gray-200 flex items-center justify-center text-gray-400">
//                   No Image
//                 </div>
//               )}
//               {/* <span className="absolute top-3 right-3 bg-orange-500 text-white text-xs px-3 py-1 rounded shadow">
//                 {post.createdAt}
//               </span> */}
//             </div>

//             {/* Content */}
//             <div className="p-6">
           
//               <h3 className="text-lg font-semibold text-gray-800 mb-3 line-clamp-2 text-center">
//                 {post.title}
//               </h3>
//               <p className="text-gray-600 text-sm mb-4 line-clamp-3">
//                 {post.content}
//               </p>
//               <div className="flex justify-between items-center">
//                 <button
//                   onClick={() => alert(`${post.title}\n\n${post.content}`)}
//                   className="text-sm border border-gray-400 px-4 py-2 rounded hover:bg-gray-100 transition"
//                 >
//                   Read More
//                 </button>
//                 <div className="flex gap-2 opacity-70 hover:opacity-100">
//                   <button
//                     onClick={() => handleEdit(post)}
//                     className="p-2 bg-gray-100 hover:bg-blue-500 hover:text-white rounded"
//                   >
//                     <Edit3 size={16} />
//                   </button>
//                   <button
//                     onClick={() => handleDelete(post.id)}
//                     className="p-2 bg-gray-100 hover:bg-red-500 hover:text-white rounded"
//                   >
//                     <Trash2 size={16} />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Create/Edit Modal */}
//       {showCreateForm && (
//         <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
//           <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
//             <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-purple-50 flex justify-between items-center">
//               <h2 className="text-xl font-bold text-gray-800">
//                 {editingPost ? "Edit Blog" : "Add New Blog"}
//               </h2>
//               <button
//                 onClick={resetForm}
//                 className="text-gray-500 hover:text-gray-700"
//               >
//                 <X size={24} />
//               </button>
//             </div>

//             <div className="p-6 space-y-6">
//               {/* Image Upload */}
//               <div>
//                 <label className="block text-sm font-semibold text-gray-700 mb-2">
//                   Upload Image
//                 </label>
//                 <input
//                   type="file"
//                   accept="image/*"
//                   onChange={handleImageUpload}
//                   className="w-full"
//                 />
//               </div>

//               {/* Title */}
//               <div>
//                 <label className="block text-sm font-semibold text-gray-700 mb-2">
//                   Blog Title *
//                 </label>
//                 <input
//                   type="text"
//                   value={formData.title}
//                   onChange={(e) =>
//                     setFormData((prev) => ({ ...prev, title: e.target.value }))
//                   }
//                   className="w-full px-4 py-2 border rounded-lg"
//                   placeholder="Enter blog title..."
//                 />
//               </div>

//               {/* Content */}
//               <div>
//                 <label className="block text-sm font-semibold text-gray-700 mb-2">
//                   Blog Content *
//                 </label>
//                 <textarea
//                   value={formData.content}
//                   onChange={(e) =>
//                     setFormData((prev) => ({ ...prev, content: e.target.value }))
//                   }
//                   className="w-full px-4 py-2 border rounded-lg"
//                   placeholder="Enter blog content..."
//                   rows="5"
//                 />
//               </div>

//               {/* Actions */}
//               <div className="flex gap-4 justify-end">
//                 <button
//                   onClick={resetForm}
//                   className="px-5 py-2 border rounded-lg hover:bg-gray-100"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   onClick={handleSubmit}
//                   className="px-5 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow"
//                 >
//                   <Save size={18} className="inline-block mr-2" />
//                   {editingPost ? "Update Blog" : "Publish Blog"}
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default BlogPage;



import React, { useState, useEffect } from "react";
import { Plus, Edit3, Trash2, Save, X } from "lucide-react";

const BlogPage = () => {
  const [posts, setPosts] = useState([]);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [editingPost, setEditingPost] = useState(null);
  const [viewingPost, setViewingPost] = useState(null); // New state for Read More modal
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    image: null,
  });

  useEffect(() => {
    try {
      const savedPosts = localStorage.getItem("blogPosts");
      if (savedPosts) {
        setPosts(JSON.parse(savedPosts));
      }
    } catch (error) {
      console.error("Error loading posts from localStorage:", error);
    }
  }, []);

  const saveToLocalStorage = (newPosts) => {
    try {
      localStorage.setItem("blogPosts", JSON.stringify(newPosts));
    } catch (error) {
      console.error("Error saving to localStorage:", error);
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setFormData((prev) => ({
          ...prev,
          image: e.target.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    if (formData.title.trim() && formData.content.trim()) {
      const newPost = {
        id: Date.now(),
        title: formData.title.trim(),
        content: formData.content.trim(),
        image: formData.image,
        createdAt: new Date().toLocaleDateString("en-GB", {
          day: "numeric",
          month: "short",
          year: "numeric",
        }),
      };

      let updatedPosts;

      if (editingPost) {
        updatedPosts = posts.map((post) =>
          post.id === editingPost.id
            ? { ...newPost, id: editingPost.id, createdAt: editingPost.createdAt }
            : post
        );
        setEditingPost(null);
      } else {
        updatedPosts = [newPost, ...posts];
      }

      setPosts(updatedPosts);
      saveToLocalStorage(updatedPosts);

      setFormData({ title: "", content: "", image: null });
      setShowCreateForm(false);
    }
  };

  const handleEdit = (post) => {
    setFormData({
      title: post.title,
      content: post.content,
      image: post.image,
    });
    setEditingPost(post);
    setShowCreateForm(true);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      const updatedPosts = posts.filter((post) => post.id !== id);
      setPosts(updatedPosts);
      saveToLocalStorage(updatedPosts);
    }
  };

  const resetForm = () => {
    setFormData({ title: "", content: "", image: null });
    setShowCreateForm(false);
    setEditingPost(null);
  };

  return (
    <div className="min-h-screen bg-white pt-24 mt-20">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800">OUR BLOGS</h2>
        <div className="w-16 h-1 bg-orange-500 mx-auto my-4 rounded"></div>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Interdum blandit accumsan, in curabitur in mollis dis non nullam,
          nostra sed sapien pede at augue, elit torquent dolor, massa lectus
          nunc aliquam.
        </p>
      </div>

      {/* Create Button */}
      <div className="text-center mb-8">
        <button
          onClick={() => setShowCreateForm(true)}
          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full hover:shadow-lg transition-all duration-300 flex items-center gap-2 mx-auto"
        >
          <Plus size={20} />
          Add New Blog
        </button>
      </div>

      {/* Blog Grid */}
        {/* Blog Grid */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group relative"
          >
            {/* Image First */}
            <div className="relative">
              {post.image ? (
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              ) : (
                <div className="w-full h-64 bg-gray-200 flex items-center justify-center text-gray-400">
                  No Image
                </div>
              )}
              
              {/* Date Badge */}
              <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 text-sm font-medium">
                {post.createdAt}
              </div>

           
            </div>

            {/* Content Section */}
            <div className="p-6 pt-12 text-center">
              <p className="text-sm text-orange-500 font-medium mb-4">By Admin</p>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-4 line-clamp-2">
                {post.title}
              </h3>
              
              <p className="text-gray-600 text-sm mb-6 line-clamp-4">
                {post.content}
              </p>

              <button
                onClick={() => setViewingPost(post)}
                className="text-sm border border-gray-400 px-6 py-2 rounded hover:bg-gray-100 transition mb-4"
              >
                Read More
              </button>

              {/* Edit/Delete buttons */}
              <div className="flex gap-2 justify-center opacity-70 hover:opacity-100">
                <button
                  onClick={() => handleEdit(post)}
                  className="p-2 bg-gray-100 hover:bg-blue-500 hover:text-white rounded"
                >
                  <Edit3 size={16} />
                </button>
                <button
                  onClick={() => handleDelete(post.id)}
                  className="p-2 bg-gray-100 hover:bg-red-500 hover:text-white rounded"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Create/Edit Modal */}
{showCreateForm && (
  <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fadeIn">
    <div className="bg-white/90 rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col border border-gray-200">
      {/* Header */}
      <div className="p-6 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border-b border-gray-200 flex justify-between items-center">
        <h2 className="text-xl font-bold text-gray-800 tracking-wide">
          {editingPost ? "✏️ Edit Blog" : "📝 Add New Blog"}
        </h2>
        <button
          onClick={resetForm}
          className="p-2 rounded-full hover:bg-gray-200 transition"
        >
          <X size={22} className="text-gray-600" />
        </button>
      </div>

      {/* Body */}
      <div className="p-6 space-y-6 overflow-y-auto">
        {/* Image Upload */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Upload Image
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="w-full text-sm border rounded-lg p-2 cursor-pointer"
          />
        </div>

        {/* Title */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Blog Title *
          </label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, title: e.target.value }))
            }
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
            placeholder="Enter blog title..."
          />
        </div>

        {/* Content */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Blog Content *
          </label>
          <textarea
            value={formData.content}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, content: e.target.value }))
            }
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-400 focus:outline-none"
            placeholder="Write something engaging..."
            rows="5"
          />
        </div>
      </div>

      {/* Footer */}
      <div className="p-6 border-t border-gray-200 flex justify-end gap-4">
        <button
          onClick={resetForm}
          className="px-5 py-2 rounded-full border border-gray-300 hover:bg-gray-100 transition"
        >
          Cancel
        </button>
        <button
          onClick={handleSubmit}
          className="px-6 py-2 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium shadow-md hover:shadow-lg hover:scale-105 transition"
        >
          <Save size={18} className="inline-block mr-2" />
          {editingPost ? "Update Blog" : "Publish Blog"}
        </button>
      </div>
    </div>
  </div>
)}

{/* Read More Modal */}
{viewingPost && (
  <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fadeIn">
    <div className="bg-white/95 rounded-3xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-hidden flex flex-col border border-gray-200">
      {/* Header */}
      <div className="p-6 border-b border-gray-200 flex justify-between items-center bg-gradient-to-r from-pink-50 to-orange-50">
        <h2 className="text-xl font-bold text-gray-800">{viewingPost.title}</h2>
        <button
          onClick={() => setViewingPost(null)}
          className="p-2 rounded-full hover:bg-gray-200 transition"
        >
          <X size={22} className="text-gray-600" />
        </button>
      </div>

      {/* Body */}
      <div className="p-6 space-y-4 overflow-y-auto">
        {viewingPost.image ? (
          <img
            src={viewingPost.image}
            alt={viewingPost.title}
            className="w-full h-72 object-cover rounded-lg shadow"
          />
        ) : (
          <div className="w-full h-72 bg-gray-200 flex items-center justify-center text-gray-400 rounded-lg">
            No Image
          </div>
        )}
        <p className="text-gray-700 leading-relaxed">{viewingPost.content}</p>
      </div>
    </div>
  </div>
)}

    </div>
  );
};

export default BlogPage;
