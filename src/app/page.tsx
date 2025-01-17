"use client";
import { useState, FormEvent } from "react";
import { Rocket } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (email.trim() === "") {
      setError(true);
    } else {
      setError(false);
      router.push("/instruction");
    }
  };

  return (
    <div className="flex justify-center items-center p-8 lg:p-0">
      <div className="w-full lg:w-[410px]">
        <h1 className="uppercase text-center mt-12 px-9">
          Đánh giá mức độ trưởng thành về quản trị trải nghiệm khách hàng
        </h1>

        <h1 className="text-4xl text-center mt-10">
          Công ty bạn trưởng thành như thế nào trong việc lắng nghe khách hàng?
        </h1>

        <p className="text-sm mt-6 mb-6 text-center">
          Đánh giá khả năng của bạn trong việc lắng nghe, hiểu và đáp ứng các
          tín hiệu từ khách hàng
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex items-center justify-center flex-col"
        >
          <input
            type="email"
            placeholder="Địa chỉ email của bạn"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 py-2 w-full text-black border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 mb-6"
          />

          {error && (
            <p className="text-red-500 text-sm mb-4">
              Vui lòng nhập địa chỉ email trước khi bắt đầu.
            </p>
          )}

          <button
            type="submit"
            className="flex justify-center items-center gap-2 w-full px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          >
            Bắt đầu
            <Rocket className="size-4" />
          </button>
        </form>
      </div>
    </div>
  );
}
