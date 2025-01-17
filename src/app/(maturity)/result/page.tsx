import GaugeChart from "@/app/(maturity)/questions/chart";
import { ButtonAction } from "@/app/(maturity)/result/button-action";
import type { Metadata } from "next";
import Image from "next/image";

interface Result {
  level: number;
  icon: string;
  name: string;
  range: [number, number];
  description: {
    text: string;
    image_url: string;
  };
  key_actions: { text: string; image_url: string }[];
  key_actions_cta: {
    text: string;
    url: string;
  };
}

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}): Promise<Metadata> {
  const score = (await searchParams).score;
  const result = results?.find(
    (r) => Number(score) >= r.range[0] && Number(score) < r.range[1]
  );
  const url = `http://localhost:3000/result?score=${score}`;
  const imageUrl = `/level/lv${result!.level}.PNG`;
  return {
    title: `VOICE OF THE CUSTOMER - CẤP ĐỘ ${result!.level} | Filum.ai`,
    description:
      "Đánh giá mức độ trưởng thành về quản trị trải nghiệm khách hàng",
    openGraph: {
      title: `VOICE OF THE CUSTOMER - CẤP ĐỘ ${result!.level} | Filum.ai`,
      description: result!.description.text,
      url,
      images: [
        {
          url: imageUrl,
        },
      ],
    },
  };
}

const results: Result[] = [
  {
    level: 1,
    icon: "https://assets.filum.ai/assessments/voc-level1.svg",
    name: "Sơ khai",
    range: [0, 2],
    description: {
      text: "Nguồn dữ liệu chính về phản hồi khách hàng đến từ các khảo sát theo năm hoặc không đều đặn. Các cuộc khảo sát được thực hiện độc lập bởi các phòng ban khác nhau mà không có sự chia sẻ kết quả và không lưu trữ tập trung. Hiếm khi thu thập phản hồi gián tiếp (từ bản ghi cuộc gọi, tin nhắn, bình luận v.v) hoặc phản hồi được suy luận từ hành vi, tần suất hay thói quen mua hàng của khách. Các quyết định từ đó kém hiệu quả khi dựa nhiều vào phản hồi đã cũ và không đáng tin cậy.",
      image_url: "",
    },
    key_actions: [
      {
        text: "Hình thành một đội nhóm liên phòng ban để quản lý quy trình thu thập và phân tích phản hồi khách hàng.",
        image_url: "",
      },
      {
        text: "Định kỳ tổ chức phỏng vấn khách hàng để thu thập thông tin chi tiết.",
        image_url: "",
      },
      {
        text: "Xây dựng cơ sở dữ liệu tập trung lưu trữ phản hồi khách hàng.",
        image_url: "",
      },
      {
        text: "Xác định và thực hiện phân tích nguyên nhân gốc rễ từ phản hồi khách hàng.",
        image_url: "",
      },
      {
        text: "Tạo ra cơ chế thông báo kết quả phản hồi cho các đại diện phòng ban liên quan.",
        image_url: "",
      },
    ],
    key_actions_cta: {
      text: "Mô hình xử lý phản hồi cho mọi quy mô Doanh Nghiệp",
      url: "https://filum.ai/products/dynamic-feedback",
    },
  },
  {
    level: 2,
    icon: "https://assets.filum.ai/assessments/voc-level2.svg",
    name: "Thành lập",
    range: [2, 4],
    description: {
      text: "Có đội nhóm liên phòng ban để đánh giá và điều phối việc thu thập phản hồi, phân tích nguyên nhân gốc rễ và thông báo kết quả đến các đại diện. Bước đầu quản trị năng lực Lắng nghe khách hàng để giải quyết vấn đề phân mảnh và thiếu phối hợp, tuy nhiên vấn đề thực thi còn yếu. Băt đầu có các cuộc khảo sát tại điểm chạm nhưng chưa phải tất cả các điểm chạm quan trọng.",
      image_url: "",
    },
    key_actions: [
      {
        text: "Xây dựng một hệ thống thu thập phản hồi và lắng nghe khách hàng hiệu quả.",
        image_url: "",
      },
      {
        text: "Đảm bảo tích hợp dữ liệu phản hồi trực tiếp và gián tiếp từ nhiều nguồn khác nhau.",
        image_url: "",
      },
      {
        text: "Thực hiện quy trình đóng vòng phản hồi để xử lý các khiếu nại và vấn đề của khách hàng.",
        image_url: "",
      },
      {
        text: "Mở rộng việc thực hiện khảo sát tại tất cả các điểm chạm quan trọng, xuyên suốt các giai đoạn của hành trình khách hàng.",
        image_url: "",
      },
      {
        text: "Phát triển các tiêu chí và chỉ số để đo lường hiệu quả của việc Lắng nghe khách hàng.",
        image_url: "",
      },
    ],
    key_actions_cta: {
      text: "Mô hình xử lý phản hồi cho mọi quy mô Doanh Nghiệp",
      url: "https://filum.ai/products/dynamic-feedback",
    },
  },
  {
    level: 3,
    icon: "https://assets.filum.ai/assessments/voc-level3.svg",
    name: "Vận hành",
    range: [4, 6],
    description: {
      text: "Quản trị năng lực Lắng nghe khách hàng đã hình thành và đem lại hiệu quả. Dữ liệu phản hồi trực tiếp từ khách hàng được kết hợp với dữ liệu từ các nguồn khác (Ví dụ: từ điểm chạm web, cửa hàng, v.v.) và phản hồi gián tiếp (Ví dụ: bản ghi cuộc gọi, tin nhắn, bình luận mạng xã hội v.v). Quy trình đóng vòng phản hồi giúp xác định và giải quyết các khiếu nại hoặc vấn đề khách hàng gặp phải. Phản hồi được thu thập trong nhiều giai đoạn của hành trình khách hàng.",
      image_url: "",
    },
    key_actions: [
      {
        text: "Xây dựng năng lực Lắng nghe khách hàng tập trung trên một nền tảng, với quy trình và quy định rõ ràng về trách nhiệm và thực thi.",
        image_url: "",
      },
      {
        text: "Ban hành các quy trình, biểu mẫu về Lắng nghe khách hàng rộng rãi cho toàn thể công ty.",
        image_url: "",
      },
      {
        text: "Tạo ra các báo cáo và bảng điều khiển với dữ liệu phản hồi theo thời gian thực cho nhân viên và phòng ban.",
        image_url: "",
      },
      {
        text: "Tích hợp phản hồi khách hàng vào các ứng dụng quan trọng như CRM, giúp ích vào hoạt động hằng ngày của nhân viên.",
        image_url: "",
      },
    ],
    key_actions_cta: {
      text: "Mô hình xử lý phản hồi cho mọi quy mô Doanh Nghiệp",
      url: "https://filum.ai/products/dynamic-feedback",
    },
  },
  {
    level: 4,
    icon: "https://assets.filum.ai/assessments/voc-level4.svg",
    name: "Tối ưu",
    range: [6, 8],
    description: {
      text: "Năng lực Lắng nghe khách hàng hoạt động đầy đủ trên một nền tảng duy nhất với quy định về trách nhiệm và thực thi rõ ràng. Các quy trình làm việc, báo cáo và phân tích được thông báo đầy đủ và tường minh, cung cấp dữ liệu thời gian thực, phù hợp cho từng nhân viên và phòng ban. Thông tin về phản hồi được tích hợp vào các ứng dụng quan trọng và phổ biến như CRM.",
      image_url: "",
    },
    key_actions: [
      {
        text: "Ứng dụng công nghệ tự động dựa trên dữ liệu lớn và AI giúp phân tích và đưa ra hành động khuyến nghị từ phản hồi khách hàng.",
        image_url: "",
      },
      {
        text: "Định lượng giá trị của Lắng nghe khách hàng thông qua kết nối các hành động khuyến nghị và kết quả thu được lên các chỉ số liên quan đến vận hành và khách hàng.",
        image_url: "",
      },
      {
        text: "Xây dựng cơ chế cho việc thu thập ý kiến phản hồi từ nhân viên nhằm cải thiện trải nghiệm khách hàng.",
        image_url: "",
      },
      {
        text: "Tổ chức đều đặn các hoạt động khuyến khích nhân viên tham gia đóng góp ý kiến để cải thiện trải nghiệm khách hàng.",
        image_url: "",
      },
    ],
    key_actions_cta: {
      text: "Mô hình xử lý phản hồi cho mọi quy mô Doanh Nghiệp",
      url: "https://filum.ai/products/dynamic-feedback",
    },
  },
  {
    level: 5,
    icon: "https://assets.filum.ai/assessments/voc-level5.svg",
    name: "Thấm nhuần",
    range: [8, 11],
    description: {
      text: "Hiệu quả của Lắng nghe khách hàng được định lượng bằng việc kết nối các hành động đề xuất với kết quả thu được lên các chỉ số liên quan đến vận hành và khách hàng. Có cơ chế liên tục để thu thập ý kiến phản hồi từ nhân viên nhằm cải thiện trải nghiệm khách hàng.",
      image_url: "",
    },
    key_actions: [
      {
        text: "Duy trì một hệ thống Lắng nghe khách hàng đồng nhất và liên tục.",
        image_url: "",
      },
      {
        text: "Đầu tư vào công nghệ và công cụ hiện đại về dữ liệu lớn và AI để hỗ trợ việc ra quyết định hiệu quả hơn.",
        image_url: "",
      },
      {
        text: "Tạo dựng văn hóa doanh nghiệp tập trung vào cải tiến liên tục trải nghiệm khách hàng.",
        image_url: "",
      },
      {
        text: "Phát triển các chương trình đào tạo và huấn luyện nhằm nâng cao nhận thức về năng lực Lắng nghe khách hàng cho nhân viên.",
        image_url: "",
      },
      {
        text: "Duy trì cơ chế liên tục thu thập ý kiến phản hồi từ nhân viên và khuyến khích sự đóng góp của họ vào việc cải thiện trải nghiệm khách hàng.",
        image_url: "",
      },
    ],
    key_actions_cta: {
      text: "Mô hình xử lý phản hồi cho mọi quy mô Doanh Nghiệp",
      url: "https://filum.ai/products/dynamic-feedback",
    },
  },
];

const Result = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const score = (await searchParams).score;

  const result = results?.find(
    (r) => Number(score) >= r.range[0] && Number(score) < r.range[1]
  );

  // const url = `http://localhost:3000/result?score=${score}`;
  const url = "https://google.com";

  if (!result) {
    return <div>Không có kết quả phù hợp với điểm số của bạn.</div>;
  }

  return (
    <div className="relative">
      <div className="flex justify-between">
        <div className="p-3 rounded-full bg-white w-10 h-10 ml-3">
          <Image src={result.icon} alt={result.name} width={20} height={20} />
        </div>
        <div>
          <h1 className="text-xs">
            VOICE OF THE CUSTOMER - CẤP ĐỘ {result.level}
          </h1>
          <h1 className="uppercase text-lg font-bold">{result.name}</h1>
        </div>
      </div>

      <p>{result.description.text}</p>

      <GaugeChart score={Number(score) * 10} />

      <ButtonAction url={url} />
    </div>
  );
};

export default Result;
