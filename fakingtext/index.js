let array = [];
let str = "";
array[1] = "T";
array[2] = "Ô";
array[3] = "I";
array[4] = " ";
array[5] = "L";
array[6] = "À";
array[7] = " ";
array[8] = "M";
array[9] = "Ộ";
array[10] = "T";
array[11] = " ";
array[12] = "T";
array[13] = "H";
array[14] = "Ằ";
array[15] = "N";
array[16] = "G";
array[17] = " ";
array[18] = "N";
array[19] = "G";
array[20] = "Ố";
array[21] = "C";
array[22] = "!";

function fake() {
  let text = document.getElementById("txt").value; // tạo biến text get từ id "txt"
  let j = text.length; //tạo biến j gán bằng text.length
  if (j > 0) {
    //lặp với điều kiện j>0
    for (let i = 1; i <= j; i++) {
      str = str + array[i]; //gán biến str bằng thành phần mảng array mỗi lần lặp
      if (i === 22) {
        //tạo một điều kiện xử lý khi đã gõ lên full ký tự thì sẽ quay về chuỗi rỗng
        document.getElementById("txt").value = "";
        str = "";
      }
    }
  }
  document.getElementById("txt").value = str; // cuối cùng gán kết quả của id txt bằng str
  str = "";
  setTimeout("fake()", 1);
}
