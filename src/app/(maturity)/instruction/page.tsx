import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className="uppercase text-center text-sm">
        <span className="w-2 h-2 rounded-full bg-blue-500 mr-1.5 inline-block mb-0.5"></span>
        Hướng dẫn trả lời
      </h1>

      <h1 className="text-lg mt-5 font-bold">
        Hãy dựa vào hưỡng dẫn sau đây để trả lời các câu hỏi:
      </h1>

      <ul className="list-disc p-4">
        <li className="mb-2 ">
          Chọn &quot;Có&quot;: nếu câu đó phản ánh hiện trạng đang có VÀ được
          thực hiện một cách nhất quán (ít nhất 80% thời gian){" "}
        </li>
        <li className="mb-2 ">
          Chọn &quot;Không có&quot;: nếu hoàn toàn chưa từng thực hiện
        </li>
        <li className="mb-2 ">
          Chọn &quot;Không rõ vấn đề này&quot;: nếu không chắc chắn đã thực hiện
          hay chưa
        </li>
      </ul>
      <Link
        href="/questions"
        className="flex justify-center items-center gap-2 w-full px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <button>Bắt đầu</button>
        <ArrowRight className="size-4" />
      </Link>
    </>
  );
}
