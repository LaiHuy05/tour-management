// Generate mã đơn hàng
export const generateOrderCode = (number: number): string => {
  const code = `OD${String(number).padStart(8, "0")};`

  // ${String(n)}: chuyển đổi giá trị của biến n thành chuỗi
  // padStart(8, "0"): thêm các ký tự "0" vào đầu chuỗi để đảm bảo độ dài của chuỗi là 8 ký tự
 // Ví dụ: nếu number = 123 , kết quả sẽ là "OD00000123"
  return code;
}