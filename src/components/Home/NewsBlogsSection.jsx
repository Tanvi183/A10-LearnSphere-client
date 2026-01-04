import { Link } from "react-router";
import { FaArrowRight } from "react-icons/fa";

const blogs = [
  {
    id: 1,
    title: "Top Online Learning Platforms That Are Changing Education",
    category: "Education",
    author: "Admin",
    date: "July 22, 2024",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
  },
  {
    id: 2,
    title: "How Skill-Based Learning Is Shaping the Future Career",
    category: "Career",
    author: "Admin",
    date: "July 18, 2024",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
  },
  {
    id: 3,
    title: "Why Online Courses Are the Best Choice for Busy People",
    category: "Online Course",
    author: "Admin",
    date: "July 15, 2024",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7",
  },
  {
    id: 4,
    title: "How Digital Skills Help You Stay Ahead in a Competitive World",
    category: "Technology",
    author: "Admin",
    date: "July 10, 2024",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
  },
];

const NewsBlogsSection = () => {
  return (
    <section className="py-20 bg-base-100 text-base-content transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center pb-10">
          <span className="bg-indigo-100 text-indigo-700 text-sm font-semibold px-4 py-1 rounded-full">
            News & Blogs
          </span>

          <h2 className="text-3xl md:text-4xl font-bold mt-4">
            Latest News & Articles
          </h2>

          <p className="mt-2">
            Read our latest updates, insights, and educational trends
          </p>
        </div>

        {/* Blog Grid */}
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden flex flex-col group"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-40 object-cover transform transition duration-300 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-4 space-y-3 flex flex-col flex-grow">
                {/* Category */}
                <span className="text-xs font-medium text-[#5751e1] bg-indigo-50 px-3 py-1 rounded-full w-fit">
                  {blog.category}
                </span>

                {/* Title */}
                <h3 className="font-semibold text-base text-gray-900 leading-snug line-clamp-2 hover:text-[#5751e1] transition">
                  {blog.title}
                </h3>

                {/* Meta */}
                <p className="text-sm text-gray-500">
                  {blog.date} • {blog.author}
                </p>

                {/* Button */}
                <div className="mt-auto pt-2">
                  <Link
                    to="#"
                    className="inline-block bg-yellow-400 text-gray-900 font-semibold px-4 py-1.5 
                               rounded-full hover:bg-yellow-500 transition text-sm"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All */}
        <div className="mt-12 flex justify-center">
          <Link to={"/blogs"} className="btn-primary flex items-center gap-2">
            View All Blogs <FaArrowRight></FaArrowRight>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewsBlogsSection;
