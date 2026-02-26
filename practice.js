let squad = [

    { id: 1, name: "Nguyen Van A", goals: 10, position: "FW" },
    { id: 2, name: "Tran Van B", goals: 5,  position: "MF" },
    { id: 3, name: "Le Van C",   goals: 0,  position: "DF" },
    { id: 4, name: "Pham Van D", goals: 12, position: "FW" },
    { id: 5, name: "Dang Van E", goals: 0,  position: "GK" }

];

let choice ;

const renderPlayer = () => {
    console.info("=====Danh sách cầu thủ trong đội hình===== ");
    squad.forEach((player) => {
        console.log(`Mã ${player.id} - ${player.name} (${player.position}): ${player.goals} bàn`);
    });
}

const createPlayer = (squads, player) => {
    squads.push(player);
};

const searchPlayer = (squads, id) => {
    const findPlayer = squads.find((player) => player.id === id);
    return findPlayer; 
};

const updateGoals = (squads, id) => {
    // Tìm kiếm vị trí cầu thủ theo ID
    const indexPlayer = squads.findIndex((player) => player.id === id);
    // Kiểm tra điều kiện xem cầu thủ tồn tại không
    if (indexPlayer !== -1) {
        // Cập nhật số bàn thắng mới cho cầu thủ
        squads[indexPlayer].goals += 1; 
        // In thông báo cập nhật thành công
        console.log(`Đã cập nhật: ${squads[indexPlayer].name} hiện có ${squads[indexPlayer].goals} bàn thắng.`);
    } else {
        console.log("Không tìm thấy cầu thủ ");
    }
};

// Thêm hàm xóa cầu thủ
const deletePlayer = (squads,id) =>{

    const indexPlayer = squads.findIndex(player => player.id === id);

    if(indexPlayer !== -1){

        squads.splice(indexPlayer,1);

        console.log("Đã xóa cầu thủ");

    }else{

        console.log("Không tìm thấy cầu thủ");

    }

};

do {
    choice = +prompt( 
       
     `   --- FOOTBALL MANAGER PRO ---

1. Xem đội hình

2. Thêm cầu thủ

3. Tìm kiếm (theo ID)

4. Cập nhật bàn thắng

5. Xóa cầu thủ (Chuyển nhượng)

0. Thoát
 `,
    );

    switch (choice) {
        case 1:
            renderPlayer();
            break;
        case 2:
            // Lấy thông tin cầu thủ mới từ người dùng
            const name = prompt("Nhập tên cầu thủ:");
            const position = prompt("Nhập tên vị trí:");
            const goals = +prompt("Nhập số bàn thắng:");
            const id = squad.length + 1; // sửa lỗi id

            // Validate dữ liệu (tự làm)

            // Gom các dữ liệu từ người udnfg thành 1 đối tượng
            const newPlayer = {
                id,
                name,
                position,
                goals,
             };
            // Gọi hàm thêm mới
            createPlayer(squad, newPlayer);
            alert("Thêm cầu thủ thành công!");
            // Hiển thị thông báo thành công
            break;
        case 3:
            const playerIdSearch = +prompt("Nhập ID cầu thủ cần tìm kiếm:"); 

            const resultSearch = searchPlayer(squad, playerIdSearch);
            
            if (resultSearch) {
                console.log(
                `Mã ${resultSearch.id} - ${resultSearch.name} (${resultSearch.position}): ${resultSearch.goals} bàn`
                );
            } else {
                console.log("Không tìm thấy");
            }
            break;
        case 4:
            const playerIdUpdate = +prompt("Nhập ID cầu thủ cần cập nhật bàn thắng:");
            updateGoals(squad, playerIdUpdate);
            break;
        case 5:

            const playerIdDelete = +prompt("Nhập ID cầu thủ cần xóa:");

            deletePlayer(squad,playerIdDelete);

            break;
        case 0:
            alert("Cảm ơn bạn đã sử dụng phần mềm!");
            break;
        default:
            alert("Lựa chọn không hợp lệ, vui lòng chọn lại!");
    }
} while (choice !== 0)