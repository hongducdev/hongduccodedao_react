import React, { useState } from "react";
import axios from "axios";
import HeadingPage from "@/components/common/HeadingPage";
import { RiCameraFill } from "react-icons/ri";
import Image from "next/image";
import { toast } from "react-toastify";

const ImageToAnime = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [displayImage, setDisplayImage] = useState<string | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];

    if (file) {
      setFile(file);
      const link = URL.createObjectURL(file);
      setDisplayImage(link);
    }
  };

  const handleSubmit = async () => {
    if (file) {
      const reader = new FileReader();
      reader.onloadend = async () => {
        let base64String = reader.result?.toString();

        // Check if the string starts with "data:image/jpeg;base64,"
        const prefix = "data:image/jpeg;base64,";
        if (base64String && base64String.startsWith(prefix)) {
          base64String = base64String.slice(prefix.length); // Remove the prefix
        }

        try {
          setIsLoading(true);
          const response = await axios.post("/api/imageToAnime", {
            base64String,
          }, {
            headers: {
              'Connection': 'keep-alive',
              'Keep-Alive': 'timeout=30',
            }
          });
          setIsLoading(false);
          setUploadedImage(response.data.img); // Assuming the API returns the URL of the processed image
          if(response.data.status === "err") {
            toast.error(response.data.mess);
          }
        } catch (error) {
          console.error("Error uploading image:", error);
          setIsLoading(false);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="bg-lite dark:bg-darkbg min-h-screen h-full lg:py-[100px] py-[100px]">
      <div className="max-w-[1200px] mx-auto px-5 lg:px-0 text-text1 dark:text-text3">
        <HeadingPage title="Tạo ảnh Anime từ ảnh của bạn"></HeadingPage>
        <div className="my-10">
          <label
            htmlFor="file"
            className="text-white inline-flex items-center gap-1 bg-primary px-4 py-2 rounded-lg cursor-pointer"
          >
            <RiCameraFill className="text-2xl" />
            Lựa chọn hình ảnh
          </label>
          <input
            type="file"
            name="file"
            id="file"
            onChange={handleChange}
            accept="image/*"
            className="hidden"
          />
          {displayImage && (
            <div className="mt-5">
              <Image
                src={displayImage}
                alt="Uploaded Image"
                width={500}
                height={500}
                className="rounded-lg"
              />
              <button
                className="bg-primary text-white px-4 py-2 rounded-lg mt-5"
                onClick={handleSubmit}
                disabled={isLoading}
              >
                {
                  isLoading ? ("Đang tải") : ("Tạo ảnh")
                }
              </button>
            </div>
          )}
          {uploadedImage && <img src={uploadedImage} alt="Uploaded Image" />}
        </div>
      </div>
    </div>
  );
};

export default ImageToAnime;
