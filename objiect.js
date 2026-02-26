// 1. Khai báo đối tượng
// const objiect_name = { 
// key: value (key đại diện cho tên thuộc tính, value đại diện cho giá trị của thuộc tính) 
// }

const user = {
    id: 1,
    userName: "Nguyễn Văn A",
    email: "nguyenvana@gmail.com",
    gender: "nam",
};

// 2. Thao tác với đối tượng\
// 2.1 Thao tác lấy dữ liệu từ đối tượng 
// cách 1:
console.log("userName:", user.userName);
console.log("email:", user.email);
// cách 2:
console.log("gender:", user["gender"]);
console.log("id:", user["id"]);

// Đọc tất cả các key trong 1 đối tượng
for (const key in user) {
    // Lấy ra key
    console.log(key);
    // Lấy ra giá trị của từng key
    console.log("value:", user[key]);
}

// Lấy ra danh sách các key của user (kết quả là 1 mảng các key)
console.log("Danh sách các value: ", Object.value(user));

// Lấy ra danh sách các key - value của user
console.log("Danh sách các key - value: ", Object.entries(user));

// Thao tác thêm key - value vào đối tượng
user.address = "Thanh Xuân, Hà Nội";
user.dateOfBirth = "01/01/2001";
console.log("user sau khi thêm thuộc tính address: ", user);

// Thao tác cập nhật giá trị
user.userName = "Nguyễn Văn B"; // Thao tác cập nhật
console.log("user sau khi cập nhật thuộc tính userName: ", user);

// Thao tác xóa thông tin
delete user.gender;
console.log("user sau khi xóa thuộc tính gender: ", user);


// Lưu ý: Nếu key và value tùng nhau, thì có thể tối giản
const productName = "Lem";
const productId = 2;
const product = {
    productName,
    productId,
};

console.log("product: ", product);
console.log("productName: ", product.productName);
console.log("productId: ", product.productId);

// ES6 sử dụng destructuring để phân rã các key của object
const {id, userName, email, gender } = user;
console.log("id: ", id);
console.log("userName: ", userName);
console.log("email: ", email);
console.log("gender: ", gender);



