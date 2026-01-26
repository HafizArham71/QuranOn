import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Calendar, User, Clock, ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { blogPosts } from '../mock';

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Back Button */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-4">
          <Link to="/blog">
            <Button variant="ghost" className="text-gray-600 hover:text-teal-600">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>

      {/* Article Header */}
      <article className="py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <span className="bg-teal-600 text-white text-sm font-semibold px-3 py-1 rounded-full">
              {post.category}
            </span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">{post.title}</h1>
          <div className="flex items-center space-x-6 text-gray-600 mb-8 pb-8 border-b border-gray-200">
            <div className="flex items-center space-x-2">
              <User className="h-5 w-5" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="h-5 w-5" />
              <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5" />
              <span>{post.readTime}</span>
            </div>
          </div>

          {/* Featured Image */}
          <div className="mb-12 rounded-lg overflow-hidden">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-96 object-cover"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            {post.content.split('\n').map((paragraph, index) => {
              if (paragraph.startsWith('## ')) {
                return <h2 key={index} className="text-2xl font-bold text-gray-900 mt-8 mb-4">{paragraph.replace('## ', '')}</h2>;
              } else if (paragraph.startsWith('### ')) {
                return <h3 key={index} className="text-xl font-semibold text-gray-900 mt-6 mb-3">{paragraph.replace('### ', '')}</h3>;
              } else if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                return <p key={index} className="text-gray-800 font-semibold mb-4">{paragraph.replace(/\*\*/g, '')}</p>;
              } else if (paragraph.trim() !== '') {
                return <p key={index} className="text-gray-700 mb-4 leading-relaxed">{paragraph}</p>;
              }
              return null;
            })}
          </div>

          {/* CTA at End of Article */}
          <div className="mt-12 p-8 bg-gradient-to-r from-cyan-50 to-teal-50 rounded-lg border border-teal-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Ready to Begin?</h3>
            <p className="text-gray-700 mb-6">
              Experience our teaching quality firsthand. Book a free trial class and start your Quran learning journey today.
            </p>
            <Link to="/book-trial">
              <Button className="bg-gradient-to-r from-cyan-500 to-teal-600 hover:from-cyan-600 hover:to-teal-700 text-white font-semibold">
                Book Free Trial Class
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;
