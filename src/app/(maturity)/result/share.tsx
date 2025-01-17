import { useState } from "react";

type Props = {
  onClose: () => void;
  url: string;
};
export const ShareModal = ({ onClose, url }: Props) => {
  const [onShareEmail, setOnShareEmail] = useState<boolean>(false);
  if (onShareEmail) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-6 text-black rounded-lg shadow-lg max-w-md w-[380px]">
          <h2 className="text-lg font-bold mb-4 text-center">
            Chia sẻ qua email
          </h2>
          <p className="mb-4">
            Vui lòng cung cấp địa chỉ email mà bạn muốn chia sẻ kết quả:
          </p>

          <input
            type="email"
            placeholder="Địa chỉ email nhận kết quả"
            className="px-4 py-2 w-full text-black border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 mb-6"
          />

          <p className="text-sm text-slate-400">
            Ấn enter sau mỗi email để xác nhận
          </p>
          <div className="flex justify-between items-center gap-3 mt-2">
            <button
              onClick={() => setOnShareEmail(false)}
              className="bg-blue-50 text-blue-500 px-4 py-2 rounded block w-full mb-2"
            >
              Quay lại
            </button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded block w-full mb-2">
              Gửi Email
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 text-black rounded-lg shadow-lg max-w-md w-[380px]">
        <h2 className="text-lg font-bold mb-4 text-center">Chia sẻ kết quả</h2>
        <p className="mb-4">
          Đây là một số cách bạn có thể chia sẻ với bạn bè và đồng nghiệp của
          mình:
        </p>
        <button className="bg-blue-500 text-white px-4 py-2 block w-full mb-2">
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
            target="_blank"
          >
            Chia sẻ qua Facebook
          </a>
        </button>
        <button
          onClick={() => setOnShareEmail(true)}
          className="bg-slate-200 text-blue-400 px-4 py-2 rounded block w-full mb-2"
        >
          Chia sẻ qua email
        </button>
        <button className="bg-slate-200 text-blue-400 px-4 py-2 rounded block w-full mb-2">
          Sao chép đường dẫn đến trang kết quả
        </button>
        <button
          className=" text-blue-400 px-4 py-2 rounded block w-full"
          onClick={onClose}
        >
          Hủy
        </button>
      </div>
    </div>
  );
};
