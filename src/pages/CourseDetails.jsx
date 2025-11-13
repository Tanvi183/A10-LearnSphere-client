import React, { use, useRef, useState } from "react";
import { Link, useLoaderData, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";
import Swal from "sweetalert2";

const CourseDetails = () => {
  const {
    _id: courseId,
    title,
    image,
    category,
    description,
    instructor_email,
    duration,
    instructor_name,
    instructor_photo,
    isFeatured,
    price,
  } = useLoaderData();

  const enrollModalRef = useRef(null);
  const { user } = use(AuthContext);
  const navigate = useNavigate();
  const [enrollment, setEnrollment] = useState([]);

  const handleEnrollModalOpen = () => {
    if (!user) {
      Swal.fire({
        icon: "warning",
        title: "Login Required",
        text: "You need to login first to enroll in this course.",
        confirmButtonText: "Login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
      return;
    }

    enrollModalRef.current.showModal();
  };

  // Enrollment submit and send to database
  const handleEnrollSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const courseTitle = form.courseTitle.value;
    const courseDuration = form.duration.value;
    const coursePrice = form.price.value;
    const message = form.message.value;

    const newEnroll = {
      userEmail: email,
      userName: name,
      userPhoto: user?.photoURL,
      courseId: courseId,
      courseTitle: courseTitle,
      duration: courseDuration,
      courseImage: image,
      price: coursePrice,
      message: message,
      status: "pending",
    };

    fetch("http://localhost:5000/enrollment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newEnroll),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        enrollModalRef.current.close();

        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "You're successfully enrolled!",
            showConfirmButton: false,
            timer: 1500,
          });
          // add the new enrollment to the state
          newEnroll._id = data.insertedId;
          const newEnrolls = [...enrollment, newEnroll];
          newEnrolls.sort((a, b) => b.price - a.price);
          setEnrollment(newEnrolls);
        } else if (data.message === "Already enrolled in this course.") {
          Swal.fire({
            icon: "info",
            title: "Already Enrolled",
            text: data.message,
          });
        } else {
          Swal.fire({
            icon: "warning",
            title: "Unexpected Response",
            text: "Something went wrong. Please try again.",
          });
        }
      })
      .catch((error) => {
        console.error("Enrollment error:", error);
        Swal.fire({
          icon: "error",
          title: "Error!",
          text: "Failed to enroll. Please check your backend connection.",
        });
      });
  };

  return (
    <div>
      {/* product info */}
      <div>
        <div className="bg-gray-50 flex justify-center items-center py-10 px-4">
          <div className="bg-white rounded-lg shadow-md w-full max-w-7xl grid md:grid-cols-2 gap-6 p-6">
            {/* Left Section */}
            <div>
              {/* Course Image */}
              <div className="w-full h-72 bg-gray-200 rounded-md mb-4 flex items-center justify-center overflow-hidden">
                {image ? (
                  <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-gray-400 text-sm">
                    No Image Available
                  </span>
                )}
              </div>

              {/* Course Description */}
              <div className="bg-gray-50 rounded-md p-4">
                <h2 className="text-lg font-semibold text-gray-800 mb-3">
                  Description
                </h2>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {description}
                </p>

                <div className="flex items-center justify-between text-sm mt-4">
                  <p>
                    <span className="font-semibold text-purple-600">
                      Duration:
                    </span>{" "}
                    {duration}
                  </p>
                  <p>
                    <span className="font-semibold text-purple-600">
                      Featured:
                    </span>{" "}
                    {isFeatured ? "Yes" : "No"}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Section */}
            <div className="flex flex-col justify-between">
              <div>
                <Link
                  to="/courses"
                  className="text-sm text-gray-600 hover:text-purple-600 mb-2 inline-block"
                >
                  &larr; Back To Courses
                </Link>

                <h1 className="text-2xl font-bold text-gray-900 mb-1">
                  {title}
                </h1>

                <span className="inline-block bg-purple-100 text-purple-600 text-xs font-semibold px-3 py-1 rounded-full mb-3 capitalize">
                  {category}
                </span>

                <p className="text-green-600 text-2xl font-bold mb-1">
                  ${price}
                </p>
                <p className="text-gray-500 text-sm mb-6">Course Fee</p>

                {/* Course Details */}
                <div className="border-t border-gray-200 pt-4 mb-4">
                  <h3 className="font-semibold text-gray-800 mb-2">
                    Course Details
                  </h3>
                  <p className="text-sm text-gray-600">
                    Course ID: <span className="font-mono">{courseId}</span>
                  </p>
                  <p className="text-sm text-yellow-600 font-semibold mt-2">
                    Status: Active
                  </p>
                </div>

                {/* Instructor Information */}
                <div className="border-t border-gray-200 pt-4">
                  <h3 className="font-semibold text-gray-800 mb-2">
                    Instructor Information
                  </h3>

                  <div className="flex items-center mb-2">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-3">
                      <img
                        src={instructor_photo}
                        alt={instructor_name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800 text-sm">
                        {instructor_name}
                      </p>
                      <p className="text-xs text-gray-500">
                        {instructor_email}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm text-gray-600">Role: Instructor</p>
                  <p className="text-sm text-gray-600">
                    Contact: {instructor_email}
                  </p>
                </div>
              </div>

              <button
                onClick={handleEnrollModalOpen}
                className="btn btn-primary mt-6 w-full"
              >
                Enroll in this Course
              </button>
            </div>
          </div>
        </div>

        {/* Enrollment Modal */}
        <div>
          <dialog
            ref={enrollModalRef}
            className="modal modal-bottom sm:modal-middle"
          >
            <div className="modal-box">
              <h3 className="font-bold text-lg text-indigo-700">
                Enroll in {title}
              </h3>
              <p className="py-2 text-gray-600 text-sm">
                Please confirm your enrollment details below
              </p>

              <form onSubmit={handleEnrollSubmit} className="space-y-3">
                <fieldset className="fieldset">
                  <label className="label font-medium">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    className="input input-bordered w-full"
                    readOnly
                    defaultValue={user?.displayName}
                  />

                  <label className="label font-medium">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="input input-bordered w-full"
                    readOnly
                    defaultValue={user?.email}
                  />

                  <label className="label font-medium">Course</label>
                  <input
                    type="text"
                    name="courseTitle"
                    className="input input-bordered w-full"
                    readOnly
                    defaultValue={title}
                  />

                  <label className="label font-medium">Duration</label>
                  <input
                    type="text"
                    name="duration"
                    className="input input-bordered w-full"
                    readOnly
                    defaultValue={duration}
                  />

                  <label className="label font-medium">Price</label>
                  <input
                    type="text"
                    name="price"
                    className="input input-bordered w-full"
                    readOnly
                    defaultValue={`$${price}`}
                  />

                  <label className="label font-medium">
                    Message (Optional)
                  </label>
                  <textarea
                    name="message"
                    className="textarea textarea-bordered w-full"
                    placeholder="Add a note for the instructor..."
                  ></textarea>

                  <button
                    type="submit"
                    className="btn btn-secondary mt-4 w-full"
                  >
                    Enroll now
                  </button>
                </fieldset>
              </form>

              <div className="modal-action">
                <form method="dialog">
                  <button className="btn">Cancel</button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
