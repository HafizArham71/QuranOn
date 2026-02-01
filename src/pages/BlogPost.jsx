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
            {(() => {
              const parseBoldText = (text) => {
                const parts = [];
                let currentIndex = 0;
                
                while (currentIndex < text.length) {
                  const boldStart = text.indexOf('**', currentIndex);
                  
                  if (boldStart === -1) {
                    // No more bold text, add remaining text
                    if (currentIndex < text.length) {
                      parts.push(text.slice(currentIndex));
                    }
                    break;
                  }
                  
                  // Add text before bold
                  if (boldStart > currentIndex) {
                    parts.push(text.slice(currentIndex, boldStart));
                  }
                  
                  // Find end of bold
                  const boldEnd = text.indexOf('**', boldStart + 2);
                  if (boldEnd === -1) {
                    // Unclosed bold, add as regular text
                    parts.push(text.slice(currentIndex));
                    break;
                  }
                  
                  // Add bold text
                  const boldText = text.slice(boldStart + 2, boldEnd);
                  parts.push(<strong key={currentIndex} className="font-semibold text-gray-900">{boldText}</strong>);
                  
                  currentIndex = boldEnd + 2;
                }
                
                return parts;
              };
              
              const paragraphs = post.content.split('\n');
              const elements = [];
              let listItems = [];
              
              paragraphs.forEach((paragraph, index) => {
                if (paragraph.startsWith('- ')) {
                  // Add to current list
                  listItems.push(
                    <li key={index} className="text-gray-700 mb-2 leading-relaxed">
                      {parseBoldText(paragraph.replace('- ', ''))}
                    </li>
                  );
                } else {
                  // If we have pending list items, close the list first
                  if (listItems.length > 0) {
                    elements.push(
                      <ul key={`list-${index}`} className="list-disc list-inside mb-4 space-y-2">
                        {listItems}
                      </ul>
                    );
                    listItems = [];
                  }
                  
                  // Handle other content types
                  if (paragraph.startsWith('## ')) {
                    elements.push(
                      <h2 key={index} className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                        {parseBoldText(paragraph.replace('## ', ''))}
                      </h2>
                    );
                  } else if (paragraph.startsWith('### ')) {
                    elements.push(
                      <h3 key={index} className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                        {parseBoldText(paragraph.replace('### ', ''))}
                      </h3>
                    );
                  } else if (paragraph.includes('**')) {
                    elements.push(
                      <p key={index} className="text-gray-700 mb-4 leading-relaxed">
                        {parseBoldText(paragraph)}
                      </p>
                    );
                  } else if (paragraph.trim() !== '') {
                    elements.push(
                      <p key={index} className="text-gray-700 mb-4 leading-relaxed">
                        {paragraph}
                      </p>
                    );
                  }
                }
              });
              
              // Add any remaining list items
              if (listItems.length > 0) {
                elements.push(
                  <ul key="list-final" className="list-disc list-inside mb-4 space-y-2">
                    {listItems}
                  </ul>
                );
              }
              
              return elements;
            })()}
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
