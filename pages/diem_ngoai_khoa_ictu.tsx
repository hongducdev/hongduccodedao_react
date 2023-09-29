/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import axios from "axios";
import Head from "next/head";
import Loading from "@/components/common/Loading";
import HeadingPage from "@/components/common/HeadingPage";
import Image from "next/image";
import { FiSearch } from "react-icons/fi";

interface Data {
  info: {
    avatar: string;
    full_name: string;
    unit_full_name: string;
    total: string;
    waiting: string;
    list: {
      idn: string;
      name: string;
      score: string;
      is_final: boolean;
    };
  };
}

const diem_ngoai_khoa_ictu = () => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [value, setValue] = React.useState<string>("");
  const [data, setData] = React.useState<any>([]);
  const [isError, setIsError] = React.useState<boolean>(false);

  const handleKeyDown = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setIsLoading(true);
      await handleResponse(value);
      setIsLoading(false);
    }
  };

  const handleButtonClick = async () => {
    setIsLoading(true);
    await handleResponse(value);
    setIsLoading(false);
  };

  const handleResponse = async (idStudent: string) => {
    idStudent = idStudent.trim();
    idStudent = idStudent.replace(/\s+/g, " ");
    idStudent = idStudent.replace(/ /g, ",");
    idStudent = idStudent.replace(/,,/g, ",");
    idStudent = idStudent.toUpperCase();
    try {
      const response = await axios.post(
        "https://api.dhdt.vn/activity/student-score",
        {
          ids: idStudent,
        },
        {
          headers: {
            "Content-Type": "application/json",
            hostname: "sinhvien.ictu.edu.vn",
          },
        }
      );
      setData(response.data);
      setIsError(false);
    } catch (error) {
      setIsError(true);
    }
  };

  return (
    <>
      <Head>
        <title>Kiểm tra điểm ngoại khóa ICTU | hongduccodedao</title>
        <meta name="description" content="Kiểm tra điểm ngoại khóa ICTU" />
      </Head>
      <main>
        <div className="bg-lite dark:bg-darkbg min-h-screen h-full lg:py-[100px] py-[100px]">
          <div className="max-w-[1200px] mx-auto px-5 lg:px-0">
            <div className="flex items-center gap-4">
              <input
                type="text"
                className="border dark:border-strock border-darkStroke bg-transparent outline-none dark:text-white w-full px-5 py-3 rounded-[50px] caret-text2 dark:caret-white text-text1"
                placeholder="Nhập mã sinh viên..."
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onKeyDown={handleKeyDown}
              />
              {isLoading ? (
                <button
                  className="text-white bg-primary h-[50px] lg:px-7 px-5 rounded-full opacity-70"
                  onClick={handleButtonClick}
                  disabled
                >
                  <div className="w-5 h-5 mx-auto border-4 border-t-4 rounded-full border-white border-t-transparent animate-spin"></div>
                </button>
              ) : (
                <button
                  className="text-white bg-primary h-[50px] lg:px-7 px-5 rounded-full"
                  onClick={handleButtonClick}
                >
                  <FiSearch />
                </button>
              )}
            </div>
            <div className="">
              {isError && (
                <div className="my-10">
                  <p className="text-red-500 text-center">
                    Không tìm thấy sinh viên
                  </p>
                </div>
              )}
              {data && (
                <div className="mt-10">
                  <HeadingPage title="Thông tin sinh viên" />
                  <div className="flex items-center justify-center mb-5">
                    <div className="mt-5 flex items-center gap-10">
                      <div className="">
                        <Image
                          src={data.info?.avatar || "/ava-default.png"}
                          alt="avatar"
                          width={200}
                          height={200}
                          className="rounded-full"
                        />
                      </div>
                      <div className="">
                        <h3 className="text-5xl dark:text-white">
                          {data.info?.full_name || "Tên sinh viên"}
                        </h3>
                        <p className="text-2xl dark:text-graySoft border-b-2 border-darkStroke dark:border-strock pb-2">
                          {data.info?.unit_full_name || "Tên lớp"}
                        </p>
                        <div className="dark:text-text4 mt-2 text-xl">
                          <p className="">Tổng điểm: {data.info?.total || 0}</p>
                          <p className="">
                            Chờ duyệt: {data.info?.waiting || 0}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <HeadingPage title="Thông tin điểm" />
                  <div className="flex flex-col">
                    <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                      <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="shadow overflow-hidden border-b border-gray-200 dark:border-darkStroke sm:rounded-lg">
                          <table className="min-w-full divide-y divide-gray-200 dark:divide-darkStroke">
                            <thead className="bg-gray-50 dark:bg-darkStroke">
                              <tr>
                                <th
                                  scope="col"
                                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-white uppercase tracking-wider"
                                >
                                  #
                                </th>
                                <th
                                  scope="col"
                                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-white uppercase tracking-wider"
                                >
                                  Tên hoạt động
                                </th>
                                <th
                                  scope="col"
                                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-white uppercase tracking-wider"
                                >
                                  Điểm
                                </th>
                                <th
                                  scope="col"
                                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-white uppercase tracking-wider"
                                >
                                  Trạng thái
                                </th>
                              </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200 dark:divide-darkStroke dark:bg-softDark">
                              {data.info?.list?.map((item: any) => (
                                <tr key={item.idn}>
                                  <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-900 dark:text-white">
                                      {item.idn}
                                    </div>
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-900 dark:text-white">
                                      {item.title}
                                    </div>
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-900 dark:text-white">
                                      {item.score}
                                    </div>
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap">
                                    <span
                                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                        item.is_final
                                          ? "bg-green-100 text-green-800"
                                          : "bg-red-100 text-red-800"
                                      }`}
                                    >
                                      {item.is_final ? "Đã duyệt" : "Chờ duyệt"}
                                    </span>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default diem_ngoai_khoa_ictu;
