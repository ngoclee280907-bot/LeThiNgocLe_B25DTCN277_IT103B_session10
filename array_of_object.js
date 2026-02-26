// Tạo mảng chứa danh sách các sản phẩm (từng sản phẩm là 1 đối tượng)
const product = [
    {
        id: 1,
        productName: "Cam",
        price: 10000,
    },
    {
        id: 2,
        productName: "Xoài",
        price: 25000,
    },
    {
        id: 3,
        productName: "Ổi",
        price: 30000,
    },
    {
        id: 4,
        productName: "Đào",
        price: 50000,
    }
];

const formatCurrency = (price) => {
return price.toLocaleString("it-IT", {style : "currency", currency : "VND"});
};

// 1. Thao tác duyệt danh sách sản phẩm
product.forEach((product) => {
    console.log("product: ", product);
// Id: 1, productName: "Cam", price: 100000
    console.log(`Id: ${product.id}, productName: ${product.productName}, price: ${product.price}`);
});

// 2. Thêm phần tử vào mảng đối tượng product
const newProduct = {
    id: 4,
    productName: "Dưa hấu",
    price: 50000,
};

product.push(newProduct);

console.log("Mảng sau khi thêm: ", product);

// 3. Thao tác cập nhật thông tin sản phẩm
products[0].productName = "Cam sành";
products[0].price = 150000;

console.log("Danh sách sản phẩm sau khi cập nhật: ", products);


// 4. Thao tác xóa sản phẩm khỏi mảng
product.splice(2, 1); // Xóa phần tử tại vị trí index 1 (xoài)

console.log("Danh sách sản phẩm sau khi xóa: ", product);

// 5. Thao tác sắp xếp các sản phẩm theo giá
const productSortes = product.sort((a, b) => a.price - b.price); // Sắp xếp theo giá tăng dần

console.log("Danh sách sản phẩm sau khi sắp xếp: ", productSortes);

// 6. Thao tác tìm kiếm sản phẩm theo tên
const productFilter = productSortes.filter((product) => {
    return product.productName.toLowerCase().includes(keyword.toLowerCase());
});
console.log("productFilter: ", productFilter);







