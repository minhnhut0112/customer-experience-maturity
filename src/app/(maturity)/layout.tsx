export default function MaturityLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex justify-center items-center p-8 lg:p-0 ">
      <div className="w-full lg:w-[410px]">
        <h1 className="uppercase text-center mt-12 mb-12 px-9">
          Đánh giá mức độ trưởng thành về quản trị trải nghiệm khách hàng
        </h1>

        <div className="flex items-center justify-center mb-20">
          <div className="w-[350px] bg-slate-300/30 rounded p-6">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
