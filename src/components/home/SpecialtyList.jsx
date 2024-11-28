import React from 'react';

// Dữ liệu về các chuyên khoa
const specialties = [
  { "name": "Bác sĩ Gia Đình", "description": "Chuyên khoa bác sĩ gia đình", "image": "/images/img-specialties/khoa-bs-giadinh.png" },
  { "name": "Tiêu Hóa Gan Mật", "description": "Chuyên khoa về tiêu hóa và gan mật", "image": "/images/img-specialties/khoa-tieuhoa-ganmat.png" },
  { "name": "Nội Tổng Quát", "description": "Chuyên khoa về nội tổng quát", "image": "/images/img-specialties/khoa-noi-tongquat.png" },
  { "name": "Nội Tiết", "description": "Chuyên khoa về nội tiết", "image": "/images/img-specialties/khoa-noitiet.png" },
  { "name": "Da Liễu", "description": "Chuyên khoa về da liễu", "image": "/images/img-specialties/khoa-dalieu.png" },
  { "name": "Nội Tim Mạch", "description": "Chuyên khoa về tim mạch", "image": "/images/img-specialties/khoa-noi-timmach.png" },
  { "name": "Nội Thần Kinh", "description": "Chuyên khoa về thần kinh", "image": "/images/img-specialties/khoa-noi-thankinh.png" },
  { "name": "Nội Cơ Xương Khớp", "description": "Chuyên khoa về cơ xương khớp", "image": "/images/img-specialties/khoa-noi-coxuongkhop.png" },
  { "name": "Tai Mũi Họng", "description": "Chuyên khoa về tai mũi họng", "image": "/images/img-specialties/khoa-taimuihong.png" },
  { "name": "Mắt", "description": "Chuyên khoa về mắt", "image": "/images/img-specialties/khoa-mat.png" },
  { "name": "Nội Tiêu Hoà", "description": "Chuyên khoa về tiêu hoá", "image": "/images/img-specialties/khoa-noi-tieuhoa.png" },
  { "name": "Nội Truyền Nhiễm", "description": "Chuyên khoa về truyền nhiễm", "image": "/images/img-specialties/khoa-noi-truyennhiem.png" },
  { "name": "Nội Hô Hấp", "description": "Chuyên khoa về hô hấp", "image": "/images/img-specialties/khoa-noi-hohap.png" },
  { "name": "Nội Tiết Niệu", "description": "Chuyên khoa về tiết niệu", "image": "/images/img-specialties/khoa-noi-tietnieu.png" },
  { "name": "Ngoại Cơ Xương Khớp", "description": "Chuyên khoa về ngoại cơ xương khớp", "image": "/images/img-specialties/khoa-ngoai-coxuongkhop.png" },
  { "name": "Sản - Phụ Khoa", "description": "Chuyên khoa về sản phụ khoa", "image": "/images/img-specialties/khoa-san-phukhoa.png" }
]

export function SpecialtyList() {
  return (
    <div className="flex flex-col items-center w-full" style={{ maxWidth: '1180px', margin: '0 auto' }}>
      {/* Tiêu đề */}
      <div className="text-xl font-bold mb-8 text-center" style={{ marginTop: '32px', marginBottom: '32px' }}>
        CHUYÊN KHOA
      </div>

      {/* Danh sách các khoa */}
      <div className="flex flex-col items-center w-full">
        {/* Hàng đầu tiên của các khoa */}
        <div className="flex justify-center w-full gap-4 mb-4">
          {specialties.slice(0, 8).map((specialty, index) => (

        <div
        key={index}
        className="flex flex-col items-center justify-center w-[calc(100%/8)] h-[calc(345px/2)] bg-white shadow-md rounded-md border-2 border-transparent hover:border-sky-500 hover:shadow-lg transition-transform transform hover:scale-105 p-2"
        >
        <div className="w-20 h-20 overflow-hidden rounded-full mb-2">
          <img
            src={specialty.image}
            alt={specialty.name}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="text-center text-sm font-medium">{specialty.name}</div>
        </div>

          ))}
        </div>

        {/* Hàng thứ hai của các khoa */}
        <div className="flex justify-center w-full gap-4">
          {specialties.slice(8).map((specialty, index) => (
            <div
              key={index + 8}
              className="flex flex-col items-center justify-center w-[calc(100%/8)] h-[calc(345px/2)] bg-white shadow-md rounded-md border-2 border-transparent hover:border-sky-500 hover:shadow-lg transition-transform transform hover:scale-105 p-2"
            >
              <img
                src={specialty.image}
                alt={specialty.name}
                className="w-20 h-20 object-cover rounded-full mb-2"
              />
              <div className="text-center text-sm font-medium">{specialty.name}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Link "Xem tất cả" */}
      <div className="mt-4 text-cyan-500 cursor-pointer hover:underline">Xem tất cả &gt;&gt;</div>
    </div>
  );
}
