import React, { useEffect, useRef, useState } from "react";
import CourseCard from "../components/Courses/CourseCard";
import Swal from "sweetalert2";
import useTitle from "../hooks/useTitle";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";

const Dashboard = () => {
  useTitle("My Courses");
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const editModalRef = useRef(null);

  useEffect(() => {
    if (user?.email) {
      axiosSecure.get(`/user-courses?email=${user.email}`).then((data) => {
        setCourses(data.data);
      });
    }
  }, [user, axiosSecure]);

  const handleDeleteCourse = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This course will be deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/courses/${id}`).then((data) => {
          if (data.data.result?.deletedCount > 0) {
            Swal.fire("Deleted!", "Course removed.", "success");
            setCourses((courses) =>
              courses.filter((course) => course._id !== id)
            );
          }
        });
      }
    });
  };

  const handleEditCourse = (course) => {
    setSelectedCourse(course);
    editModalRef.current.showModal();
  };

  const handleUpdateCourse = (e) => {
    e.preventDefault();
    const form = e.target;

    const updatedCourse = {
      title: form.title.value,
      price: form.price.value,
      duration: form.duration.value,
      category: form.category.value,
      description: form.description.value,
    };

    axiosSecure
      .patch(`/courses/${selectedCourse._id}`, updatedCourse)
      .then((data) => {
        if (data.data.result?.modifiedCount > 0) {
          Swal.fire({
            icon: "success",
            title: "Course updated successfully!",
            timer: 1500,
            showConfirmButton: false,
          });

          // Update UI immediately
          setCourses((prev) =>
            prev.map((c) =>
              c._id === selectedCourse._id ? { ...c, ...updatedCourse } : c
            )
          );

          editModalRef.current.close();
        }
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Update failed!",
        });
      });
  };

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-6">
      <h2 className="text-xl font-semibold mb-6">
        My added courses ({courses.length})
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course) => (
          <CourseCard
            key={course._id}
            course={course}
            handleEdit={handleEditCourse}
            handleDelete={handleDeleteCourse}
          />
        ))}
      </div>

      <div>
        <dialog
          ref={editModalRef}
          className="modal modal-bottom sm:modal-middle"
        >
          <div className="modal-box">
            <h3 className="font-bold text-lg text-indigo-700">Edit Course</h3>

            {selectedCourse && (
              <form onSubmit={handleUpdateCourse} className="space-y-3 mt-3">
                <div>
                  <label className="label font-medium">Course Title</label>
                  <input
                    type="text"
                    name="title"
                    value={selectedCourse?.title || ""}
                    className="input input-bordered w-full"
                    onChange={(e) =>
                      setSelectedCourse((prev) => ({
                        ...prev,
                        title: e.target.value,
                      }))
                    }
                  />
                </div>

                <div>
                  <label className="label font-medium">Price</label>
                  <input
                    type="number"
                    name="price"
                    value={selectedCourse?.price || ""}
                    className="input input-bordered w-full"
                    onChange={(e) =>
                      setSelectedCourse((prev) => ({
                        ...prev,
                        price: e.target.value,
                      }))
                    }
                  />
                </div>

                <div>
                  <label className="label font-medium">Duration</label>
                  <input
                    type="text"
                    name="duration"
                    value={selectedCourse?.duration || ""}
                    className="input input-bordered w-full"
                    onChange={(e) =>
                      setSelectedCourse((prev) => ({
                        ...prev,
                        duration: e.target.value,
                      }))
                    }
                  />
                </div>

                <div>
                  <label className="label font-medium">Category</label>
                  <input
                    type="text"
                    name="category"
                    value={selectedCourse?.category || ""}
                    className="input input-bordered w-full"
                    onChange={(e) =>
                      setSelectedCourse((prev) => ({
                        ...prev,
                        category: e.target.value,
                      }))
                    }
                  />
                </div>

                <div>
                  <label className="label font-medium">Description</label>
                  <textarea
                    name="description"
                    value={selectedCourse?.description || ""}
                    className="textarea textarea-bordered w-full"
                    onChange={(e) =>
                      setSelectedCourse((prev) => ({
                        ...prev,
                        description: e.target.value,
                      }))
                    }
                  />
                </div>

                <button type="submit" className="btn btn-primary w-full mt-3">
                  Update Course
                </button>
              </form>
            )}

            <div className="modal-action">
              <form method="dialog">
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default Dashboard;
