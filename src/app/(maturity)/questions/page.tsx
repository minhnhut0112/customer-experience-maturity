"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface Option {
  id: number;
  text: string;
  score: number;
}

interface Question {
  id: number;
  title: string;
  options: Option[];
}

interface Answer {
  optionId: number;
  score: number;
}

export default function Questions() {
  const questions: Question[] = [
    {
      id: 1,
      title:
        "Các phòng ban khác nhau thu thập và phân tích phản hồi một cách độc lập (ví dụ: phiếu khảo sát, lắng nghe qua tổng đài, lắng nghe qua các nền tảng truyền thông xã hội - social listening) bằng các công cụ của riêng họ.",
      options: [
        {
          id: 1,
          text: "Có",
          score: 1,
        },
        {
          id: 2,
          text: "Không",
          score: 0,
        },
        {
          id: 3,
          text: "Không rõ vấn đề này",
          score: 0.5,
        },
      ],
    },
    {
      id: 2,
      title:
        "Việc phân loại phản hồi khách hàng (ví dụ: thắc mắc/khiếu nại) được các phòng ban phân nhóm riêng biệt và được xử lý thông qua các thông báo cơ bản.",
      options: [
        {
          id: 1,
          text: "Có",
          score: 1,
        },
        {
          id: 2,
          text: "Không",
          score: 0,
        },
        {
          id: 3,
          text: "Không rõ vấn đề này",
          score: 0.5,
        },
      ],
    },
    {
      id: 3,
      title:
        "Có một nhóm chuyên trách về việc thu thập, phân tích nguyên nhân gốc rễ vấn đề của khách hàng và truyền thông về phản hồi của khách hàng đến quản lý và ban lãnh đạo cấp cao.",
      options: [
        {
          id: 1,
          text: "Có",
          score: 1,
        },
        {
          id: 2,
          text: "Không",
          score: 0,
        },
        {
          id: 3,
          text: "Không rõ vấn đề này",
          score: 0.5,
        },
      ],
    },
    {
      id: 4,
      title:
        "Có một vài cuộc khảo sát được thiết kế thống nhất cho một số điểm chạm theo hành trình mua hàng và vòng đời của khách hàng.",
      options: [
        {
          id: 1,
          text: "Có",
          score: 1,
        },
        {
          id: 2,
          text: "Không",
          score: 0,
        },
        {
          id: 3,
          text: "Không rõ vấn đề này",
          score: 0.5,
        },
      ],
    },
    {
      id: 5,
      title:
        "Các thông báo được gửi đến khách hàng đều được cá nhân hoá bao gồm cả về tình trạng của khiếu nại/phản hồi của họ, thông qua hệ thống quản lý thông tin khách hàng hoặc hệ thống xử lý khiếu nại tự động.",
      options: [
        {
          id: 1,
          text: "Có",
          score: 1,
        },
        {
          id: 2,
          text: "Không",
          score: 0,
        },
        {
          id: 3,
          text: "Không rõ vấn đề này",
          score: 0.5,
        },
      ],
    },
    {
      id: 6,
      title:
        "Phản hồi trực tiếp (ví dụ: khảo sát), gián tiếp (ví dụ: mạng xã hội) và suy đoán (ví dụ: tần suất đặt hàng) được hợp nhất để cung cấp một góc nhìn chung về trải nghiệm tại mỗi giai đoạn của vòng đời khách hàng.",
      options: [
        {
          id: 1,
          text: "Có",
          score: 1,
        },
        {
          id: 2,
          text: "Không",
          score: 0,
        },
        {
          id: 3,
          text: "Không rõ vấn đề này",
          score: 0.5,
        },
      ],
    },
    {
      id: 7,
      title:
        "Đã hoàn thiện năng lực về phản hồi khách hàng (VoC) tiêu chuẩn - và được hỗ trợ bởi một nền tảng VoC duy nhất, được sử dụng để phối hợp các hoạt động phản hồi khách hàng trên toàn doanh nghiệp.",
      options: [
        {
          id: 1,
          text: "Có",
          score: 1,
        },
        {
          id: 2,
          text: "Không",
          score: 0,
        },
        {
          id: 3,
          text: "Không rõ vấn đề này",
          score: 0.5,
        },
      ],
    },
    {
      id: 8,
      title:
        "Phản hồi của khách hàng được phân loại thông qua các quy trình của từng phòng ban cụ thể. Thông tin về phản hồi của khách hàng và dự đoán hành vi của khách hàng được chuyển giao cho các nhân sự liên quan trên toàn tổ chức.",
      options: [
        {
          id: 1,
          text: "Có",
          score: 1,
        },
        {
          id: 2,
          text: "Không",
          score: 0,
        },
        {
          id: 3,
          text: "Không rõ vấn đề này",
          score: 0.5,
        },
      ],
    },
    {
      id: 9,
      title:
        "Phản hồi của khách hàng (VoC) được định lượng bằng cách liên kết chặt chẽ với các hành động cụ thể của khách hàng như tần suất mua hàng, giá trị đơn hàng.",
      options: [
        {
          id: 1,
          text: "Có",
          score: 1,
        },
        {
          id: 2,
          text: "Không",
          score: 0,
        },
        {
          id: 3,
          text: "Không rõ vấn đề này",
          score: 0.5,
        },
      ],
    },
    {
      id: 10,
      title:
        "Trải nghiệm của nhân viên và đánh giá của nhân viên được cân nhắc thành yếu tố để cải thiện trải nghiệm khách hàng.",
      options: [
        {
          id: 1,
          text: "Có",
          score: 1,
        },
        {
          id: 2,
          text: "Không",
          score: 0,
        },
        {
          id: 3,
          text: "Không rõ vấn đề này",
          score: 0.5,
        },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<number, Answer>>({});

  const router = useRouter();

  const handleOptionSelect = (optionId: number, score: number): void => {
    setAnswers((prev) => ({
      ...prev,
      [questions[currentQuestion].id]: { optionId, score },
    }));
  };

  const handleNext = (): void => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleBack = (): void => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleFinish = (): void => {
    const totalScore = Object.values(answers).reduce(
      (sum, answer) => sum + answer.score,
      0
    );
    router.push(`/result?score=${totalScore}`);
  };

  const current = questions[currentQuestion];
  const selectedOption = answers[current.id]?.optionId;

  const isNextDisabled = !selectedOption;

  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      if (Object.keys(answers).length > 0) {
        event.preventDefault();
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [answers]);

  return (
    <div>
      <h1 className="uppercase text-center text-sm mb-4">
        <span className="w-2 h-2 rounded-full bg-blue-500 mr-1.5 inline-block mb-0.5"></span>
        Câu hỏi {currentQuestion + 1}/{questions.length}
      </h1>
      <h1 className="text-center mb-4 text-lg">{current.title}</h1>
      <div>
        {current.options.map((option) => (
          <div
            key={option.id}
            className={`w-full border-2  px-6 py-2 mb-4 cursor-pointer ${
              selectedOption === option.id
                ? "border-blue-400"
                : "border-slate-400"
            }`}
            onClick={() => handleOptionSelect(option.id, option.score)}
          >
            <p className="text-center">{option.text}</p>
          </div>
        ))}
      </div>
      {/* action handler */}
      <div
        className={`flex items-center mt-6 ${
          currentQuestion === 0 ? "justify-end" : "justify-between"
        }  `}
      >
        {currentQuestion > 0 && (
          <button
            onClick={handleBack}
            className="px-4 py-2 bg-white text-blue-400 rounded flex gap-2 items-center"
          >
            <ArrowLeft className="size-4" /> Quay lại
          </button>
        )}

        {currentQuestion < questions.length - 1 ? (
          <button
            onClick={handleNext}
            disabled={isNextDisabled}
            className={`px-4 py-2 text-white rounded  flex items-center gap-2 ${
              isNextDisabled
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
          >
            Tiếp theo <ArrowRight className="size-4" />
          </button>
        ) : (
          <button
            onClick={handleFinish}
            disabled={isNextDisabled}
            className={`px-4 py-2 text-white rounded  flex items-center gap-2 ${
              isNextDisabled
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
          >
            Hoàn thành
          </button>
        )}
      </div>
    </div>
  );
}
