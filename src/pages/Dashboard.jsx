import React, { use, useEffect, useRef, useState } from "react";
// import { Clock, Users, Star } from "lucide-react";
import CourseCard from "../components/Courses/CourseCard";
import { AuthContext } from "../context/AuthContext";
import Swal from "sweetalert2";

const Dashboard = () => {
  const { user } = use(AuthContext);
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const editModalRef = useRef(null);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:5000/courses?email=${user.email}`, {
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          setCourses(data);
        });
    }
  }, [user]);

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
        fetch(`http://localhost:5000/courses/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.result?.deletedCount > 0) {
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

    fetch(`http://localhost:5000/courses/${selectedCourse._id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedCourse),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.result?.modifiedCount > 0) {
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
      {/* Top Summary Section */}
      <h2 className="text-xl font-semibold mb-6">
        My added course ({courses.length})
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
