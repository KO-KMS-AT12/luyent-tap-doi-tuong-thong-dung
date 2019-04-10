// Làm việc với Date
// Tính số thời gian mà bạn đã sống dưới nhiều đơn vị khác nhau.
//     Bước 1: Tạo đối tượng Date() với thời gian truyền vào là ngày giờ sinh của bạn.
//     Bước 2: Tạo đối tượng Date() với thời gian hiện tại.
//     Bước 3: Hiển thị thời gian mà bạn đã sống dưới nhiều đơn vị khác nhau:
//     Tôi đã sống 24 năm.
//     Tôi đã sống 288 tháng.
//     Tôi đã sống 8640 ngày.
//     Tôi đã sống 307360 giờ.
//     Tôi đã sống 12441600 phút.
//     Tôi đã sống 746496000 giây.

function bai1() {
    let brithday = new Date(1996, 2, 1);
    let date = new Date();

    console.log("Toi da song " + (date.getFullYear() - brithday.getFullYear()) + " nam");
    console.log("Toi da song " + (Math.round((date.getTime() - brithday.getTime()) / 1000 / 60 / 60 / 24 / 30)) + " thang");
    console.log("Toi da song " + (Math.round((date.getTime() - brithday.getTime()) / 1000 / 60 / 60 / 24)) + " ngay");
    console.log("Toi da song " + (Math.round((date.getTime() - brithday.getTime()) / 1000 / 60 / 60)) + " gio");
    console.log("Toi da song " + (Math.round((date.getTime() - brithday.getTime()) / 1000 / 60)) + " phut");
    console.log("Toi da song " + (Math.round((date.getTime() - brithday.getTime()) / 1000)) + " giay");

}

// bai1();

//Làm việc với Math
// Bước 1: Sinh số ngẫu nhiên
// Sinh số ngẫu nhiên từ 0-10
// Sinh số ngẫu nhiên từ 0-400
// Sinh số ngẫu nhiên từ 50-100
// Bước 2: Tìm giá trị nhỏ nhất
// Tìm giá trị nhỏ nhất trong các số 5, 7, 2, 9
// Bước 3: Tìm luỹ thừa 53
// Bước 4: Tính diện tích của hình tròn có bán kính là 5cm

function bai2() {
    let rd = {
        mathRd: function () {
            let rd10 = Math.round(Math.random() * 10);
            let rd400 = Math.round(Math.random() * 400);
            let rd50100 = Math.round(Math.random() * (100 - 50) + 50);
            console.log("Random khoang 0-10 : " + rd10);
            console.log("Random khoang 0-400 : " + rd400);
            console.log("Random khoang 50-100 : " + rd50100);
        },
        mathMin: function () {
            console.log("Min trong day (5,7,2,9) la : " + Math.min(5, 7, 2, 9));
        },
        mathPow: function () {
            console.log("Luy thua 53 cua 2 la " + Math.pow(2, 53))
        },
        mathSCircle: function (r) {
            console.log("Dien tich hinh tron ban kinh " + r + " cm la : " + Math.round(Math.PI * r * r));
        }
    };

    rd.mathRd();
    rd.mathMin();
    rd.mathPow();
    rd.mathSCircle(5);
}

// bai2();

//Làm việc với đối tượng String
// Bước 1: Cho sẵn chuỗi như sau: "Tôi yêu ngôn ngữ lập trình Javascript".
// Hãy đếm số lần xuất hiện của chữ 'a' ở trong chuỗi trên.
// Bước 2: Tách chuỗi
// Hãy tách chuỗi trên vào trong một mảng các chuỗi. Mỗi từ là một phần từ.
// Bước 3: Đếm số lượng từ có trong chuỗi trên.
// Bước 4: Hãy thay thế chữ 'Javascript' bằng chữ 'Typescript'

function bai3() {
    let str = {
        demKiTu: function (string) {
            let count = 0;
            let arr = string.split('');
            for (let i of arr) {
                if (i === 'a') {
                    count++;
                }
            }
            return console.log("So ki tu 'a' trong chuoi '" + string + "' la : " + count);
        },
        tachChuoi: function (string) {
            console.log(string.split(' '));

        },
        demTu: function (string) {
            let arr = string.split(' ').length;
            console.log("So tu co trong chuoi '" + string + "' la : " + arr);
        },
        thayThe:function (string) {
            console.log("Thay the chuoi '" + string + "' la : " +string.replace("Java","Type"));
        }

    };
    str.demKiTu('Tôi yêu ngôn ngữ lập trình Javascript');
    str.tachChuoi('Tôi yêu ngôn ngữ lập trình Javascript');
    str.demTu('Tôi yêu ngôn ngữ lập trình Javascript');
    str.thayThe('Javascript');
}

bai3();