import React, { useEffect, useRef, useState } from "react";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Banner = () => {
  const { user } = useAuth();
  const axiosInstance = useAxiosSecure();
  const courseModelRef = useRef(null);
  const [category, setCategory] = useState([]);
  const [courses, setcourses] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user) {
      axiosInstance
        .get("/category")
        .then((res) => {
          setCategory(res.data);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [user, axiosInstance]);

  // Course Create
  const handleCreateCourse = (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;

    const title = form.title.value;
    const image = form.image.value;
    const price = Number(form.price.value);
    const duration = form.duration.value;
    const categoryValue = form.category.value;
    const description = form.description.value;

    const instructor_name = form.instructor_name.value;
    const instructor_email = form.instructor_email.value;
    const instructor_photo = form.instructor_photo.value;

    const isFeatured = form.isFeatured.value === "true" ? true : false;

    const createdBy = form.createdBy.value;
    const createdAt = new Date().toISOString();

    // Create Course Object
    const newCourse = {
      title,
      image,
      price,
      duration,
      category: categoryValue,
      description,
      instructor_name,
      instructor_email,
      instructor_photo,
      isFeatured,
      createdBy,
      createdAt,
    };

    // SEND TO BACKEND
    axiosInstance
      .post("/courses", newCourse)
      .then((res) => {
        setLoading(false);
        courseModelRef.current?.close();

        if (res.data.courseId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "New course added successfully!",
            showConfirmButton: false,
            timer: 1500,
          });

          // Add to state
          setcourses((prev) => [
            { ...newCourse, _id: res.data.courseId },
            ...prev,
          ]);
        } else {
          Swal.fire({
            icon: "warning",
            title: "Unexpected Response",
            text: "Something went wrong. Please try again.",
          });
        }
      })
      .catch((err) => {
        setLoading(false);
        console.error("Course creation error:", err);
        Swal.fire({
          icon: "error",
          title: "Error!",
          text: "Failed to create course. Please check backend.",
        });
      });
  };

  const couserModelHandle = () => {
    courseModelRef.current.showModal();
  };

  return (
    <div className="w-full flex justify-center items-center bg-gradient-to-b from-indigo-500 to-indigo-800 py-10 px-4">
      <div className="relative w-full max-w-7xl bg-gradient-to-r from-indigo-800 to-indigo-600 rounded-2xl text-white overflow-hidden flex flex-col md:flex-row justify-between items-center p-8 md:p-12 shadow-lg">
        {/* Left Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          {/* Image */}
          <div className="flex-shrink-0">
            <img
              src={user.photoURL}
              alt={user.displayName || "User"}
              className="w-24 h-24 rounded-full border-4 border-white object-cover"
            />
          </div>

          {/* Info */}
          <div>
            <h3 className="text-xl font-semibold">
              {user.displayName || "User"}
            </h3>
            {/* <div className="flex items-center mt-1">
              <span className="text-yellow-400 text-lg">★★★★★</span>
              <span className="text-sm text-gray-200 ml-2">(10 Reviews)</span>
            </div> */}
            <p className="text-sm text-gray-300 mt-2">{user.email}</p>
            <h1 className="text-3xl md:text-4xl font-extrabold mt-1">
              Learn With {user.displayName || "User"}
            </h1>
          </div>
        </div>

        {/* Right Section */}
        <div className="mt-8 md:mt-0 flex flex-col items-center md:items-end">
          <button
            onClick={couserModelHandle}
            className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-6 py-3 rounded-full shadow-md flex items-center gap-2 transition"
          >
            Create A New Course
            <span className="text-xl">→</span>
          </button>
        </div>
      </div>

      {/* Course Create Modal */}
      <div>
        <dialog
          ref={courseModelRef}
          className="modal modal-bottom sm:modal-middle"
        >
          <div className="modal-box max-h-[90vh] overflow-y-auto">
            <h3 className="text-xl font-bold text-indigo-700 mb-2">
              Create New Course
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Fill out the details below to add a new course.
            </p>

            <form onSubmit={handleCreateCourse} className="space-y-3">
              {/* TITLE */}
              <label className="label font-medium">Course Title</label>
              <input
                type="text"
                name="title"
                required
                className="input input-bordered w-full"
                placeholder="Digital Marketing Mastery"
              />

              {/* IMAGE URL */}
              <label className="label font-medium">Thumbnail Image URL</label>
              <input
                type="text"
                name="image"
                required
                className="input input-bordered w-full"
                placeholder="https://example.com/image.jpg"
              />

              {/* PRICE & DURATION */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="label font-medium">Price (USD)</label>
                  <input
                    type="number"
                    name="price"
                    required
                    className="input input-bordered w-full"
                    placeholder="99.99"
                  />
                </div>

                <div>
                  <label className="label font-medium">Duration</label>
                  <input
                    type="text"
                    name="duration"
                    required
                    className="input input-bordered w-full"
                    placeholder="6 Weeks"
                  />
                </div>
              </div>

              {/* CATEGORY */}
              <label className="label font-medium">Category</label>
              <select
                name="category"
                required
                className="select select-bordered w-full"
              >
                <option value="">Select a Category</option>
                {category?.map((cat, index) => (
                  <option key={index} value={cat.name}>
                    {cat.name}
                  </option>
                ))}
              </select>

              {/* DESCRIPTION */}
              <label className="label font-medium">Description</label>
              <textarea
                name="description"
                required
                className="textarea textarea-bordered w-full h-24"
                placeholder="Write a short description..."
              ></textarea>

              {/* INSTRUCTOR INFO */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="label font-medium">Instructor Name</label>
                  <input
                    type="text"
                    name="instructor_name"
                    required
                    className="input input-bordered w-full"
                    placeholder="Sarah Miller"
                  />
                </div>

                <div>
                  <label className="label font-medium">Instructor Email</label>
                  <input
                    type="email"
                    name="instructor_email"
                    required
                    className="input input-bordered w-full"
                    placeholder="sarah@example.com"
                  />
                </div>
              </div>

              {/* INSTRUCTOR PHOTO */}
              <label className="label font-medium">Instructor Photo URL</label>
              <input
                type="text"
                name="instructor_photo"
                required
                className="input input-bordered w-full"
                placeholder="https://example.com/photo.jpg"
              />

              {/* FEATURED */}
              <label className="label font-medium">Featured Course?</label>
              <select
                name="isFeatured"
                className="select select-bordered w-full"
              >
                <option value="false">No</option>
                <option value="true">Yes</option>
              </select>

              {/* CREATED BY – auto-fill admin */}
              <label className="label font-medium">Created By</label>
              <input
                type="email"
                name="createdBy"
                readOnly
                className="input input-bordered w-full bg-gray-100"
                defaultValue={user?.email}
              />

              {/* SUBMIT BUTTON */}
              <button type="submit" className="btn btn-primary w-full mt-4">
                {loading ? "Creating..." : "Create Course"}
              </button>
            </form>

            {/* CANCEL BUTTON */}
            <div className="modal-action">
              <form method="dialog">
                <button className="btn w-full">Cancel</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default Banner;
