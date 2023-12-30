import Footer from "@/pages/components/Footer";
import Navbar from "@/pages/components/Navbar";
import React, { useEffect, useState } from "react";
import Sidebar from "../../components/sidebar";
import Image from "next/image";
import ModNavBar from "../../components/modnavbar";
import { useRouter } from "next/router";
import { useAuth } from "../../utils/authContext";
import axios from "axios";

function Moderator() {
  const [data, setData] = useState(null);
  const router = useRouter(); // import { useRouter } from 'next/router';
  const { user, logout, checkUser } = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      console.log("user:", user); // Add this line
      console.log("user.cookie:", user.cookie); // Add this line

      if (!user.cookie) {
        router.push("/moderator/Login");
        return;
      }
      try {
        const response = await axios.get("http://localhost:3000/moderator", {
          headers: {
            withCredentials: true,
          },
        });
        const jsonData = response.data;
        console.log(jsonData);
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <ModNavBar />

      <div className="flex h-screen">
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-hidden ml-48">
          <main className="flex-1 overflow-x-hidden overflow-y-auto ">
            <div className="container mx-auto w-full py-20">
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xsr"
              />
            </div>
            <div className="container mx-auto px-6 py-8">
              <h3 className="text-gray-700 text-3xl font-medium dark:text-slate-100">
                List of Moderators
              </h3>
              <div className="mt-4">
                <div className="flex flex-wrap -mx-6">
                  <table className="min-w-full leading-normal">
                    <thead>
                      <tr>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          ID
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Username
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Email
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Image
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          View
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Edit
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Delete
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {data &&
                        data.map((item, index) => (
                          <tr key={index}>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                              {item.id}
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                              {item.username}
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                              {item.email}
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                              {item.filename}
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                              <Image
                                src={item.imageUrl} // Replace with the actual property name
                                width={30}
                                height={30}
                                alt="user"
                              />
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                              <button className="ml-6">
                                <Image
                                  src="/edit.svg"
                                  alt="edit icon"
                                  width={24}
                                  height={24}
                                />
                              </button>
                            </td>
                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                              <button className="ml-6">
                                <Image
                                  src="/delete.svg"
                                  alt="delete icon"
                                  width={24}
                                  height={24}
                                />
                              </button>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Moderator;
