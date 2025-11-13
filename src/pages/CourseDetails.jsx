import React, { use, useRef } from "react";
import { Link, useLoaderData, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";
import Swal from "sweetalert2";
// import { AtuhContext } from "../../contexts/AuthContext";
// import Swal from "sweetalert2";
// import axios from "axios";

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
  //   const [bids, setBids] = useState([]);

  // bids loads from databse
  //   useEffect(() => {
  //     axios
  //       .get(
  //         `https://smart-deals-api-server-fawn.vercel.app/product/bids/${productId}`,
  //         {
  //           headers: {
  //             authorization: `Bearer ${user.accessToken}`,
  //           },
  //         }
  //       )
  //       .then((data) => {
  //         setBids(data.data);
  //         console.log("loading with axios", data);
  //       });
  //   }, [productId, user]);

  // useEffect(() => {
  //   fetch(`https://smart-deals-api-server-fawn.vercel.app/product/bids/${productId}`, {
  //     headers: {
  //       authorization: `Bearer ${user.accessToken}`,
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setBids(data);
  //     });
  // }, [productId, user]);

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

  // Bid submit and send to database
  //   const handleBidSubmit = (e) => {
  //     e.preventDefault();
  //     const name = e.target.name.value;
  //     const email = e.target.email.value;
  //     const bid = e.target.bid.value;
  //     // console.log(name, email, bid, productId)
  //     const newBid = {
  //       product: productId,
  //       buyer_name: name,
  //       buyer_email: email,
  //       buyer_image: user?.photoURL,
  //       bid_price: bid,
  //       status: "pending",
  //     };

  //     fetch("https://smart-deals-api-server-fawn.vercel.app/bids", {
  //       method: "POST",
  //       headers: {
  //         "content-type": "application/json",
  //       },
  //       body: JSON.stringify(newBid),
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         // console.log("Bids Place Successfully ", data);
  //         if (data.insertedId) {
  //           enrollModalRef.current.close();
  //           Swal.fire({
  //             position: "top-end",
  //             icon: "success",
  //             title: "Your bid has been placed.",
  //             showConfirmButton: false,
  //             timer: 1500,
  //           });
  //         }
  //         // add the new bid to the state
  //         newBid._id = data.insertedId;
  //         const newBids = [...bids, newBid];
  //         newBids.sort((a, b) => b.bid_price - a.bid_price);
  //         setBids(newBids);
  //       });
  //   };

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

        {/* bids model */}
        {/* <div>
          <dialog
            ref={bidModalRef}
            className="modal modal-bottom sm:modal-middle"
          >
            <div className="modal-box">
              <h3 className="font-bold text-lg">Give the best offer!</h3>
              <p className="py-4">Offer something seller can not resist</p>
              <form
                onSubmit={handleBidSubmit}
              >
                <fieldset className="fieldset">
                  <label className="label">Name</label>
                  <input
                    type="text"
                    name="name"
                    className="input"
                    readOnly
                    defaultValue={user?.displayName}
                  />

                  <label className="label">Email</label>
                  <input
                    type="email"
                    className="input"
                    name="email"
                    readOnly
                    defaultValue={user?.email}
                  />
         
                  <label className="label">Bid</label>
                  <input
                    type="text"
                    name="bid"
                    className="input"
                    placeholder="Your Bid"
                  />
                  <button className="btn btn-neutral mt-4">
                    Please your bid
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
        </div> */}

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

              <form
                // onSubmit={handleEnrollSubmit}
                className="space-y-3"
              >
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
                    Confirm Enrollment
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

      {/* <div className="max-w-7xl mx-auto">
        <h3 className="text-3xl">
          Bids for this Product:{" "}
        </h3>
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>SL No.</th>
                <th>Buyer Name</th>
                <th>Buyer Email</th>
                <th>Bid Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {bids.map((bid, index) => (
                <tr key={bid._id}>
                  <th>{index + 1} </th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          {bid.buyer_image ? (
                            <img src={bid.buyer_image} alt={bid.buyer_name} />
                          ) : (
                            <img
                              src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                              alt="Avatar Tailwind CSS Component"
                            />
                          )}
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{bid.buyer_name}</div>
                        <div className="text-sm opacity-50">United States</div>
                      </div>
                    </div>
                  </td>
                  <td>{bid.buyer_email}</td>
                  <td>{bid.bid_price}</td>
                  <th>
                    <button className="btn btn-ghost btn-xs">details</button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div> */}
    </div>
  );
};

export default CourseDetails;
