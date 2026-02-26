const numbers = [1, 2, 3, 4, 5, 6];

let total = 0; // Biến tích trữ
for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
}
console.log("total:",total);


const result = numbers.reduce((prev, current) => {
    return prev + current;
});

// Nếu reduce không truyền giá trị khởi tạo, thì prev sẽ lấy phần tử đầu tiên 
// của mảng làm giá trị khởi tạo
console.log("result:", result);
