/****
 * tạo slider ảnh lick chuột vào sẽ chuyển sang ảnh khác
 */
// cách 1
// khi click chuột vào right
$('.icon_right').click(function(){
    changeImage('icon_right');
})
// khiclick chuột vào left
$('.icon_left').click(function(){
    changeImage('icon_left');
})
// creat function cho vào 1 tham số sự kiện khi click chuột
function changeImage(event){
    const imgSelectVisible = $('img.fashion:visible');// tạo 1 object chứa các ảnh
    let imgVisible = parseInt(imgSelectVisible.attr('number'));// lấy ra vị trí của ảnh tại number
    let eqNumber = event === 'icon_right' ? imgVisible + 1 : imgVisible - 1;
                // sự kiện khi click right hình +1 ngược lại khi click left hình -1
    if(imgVisible === 0){// khi bấm lui sẽ ảnh bằng 0 thì sẽ cho chiều ành - 1 có nghĩa là 3 - 1
        eqNumber = $('.fashion').length - 1;
    }
    if(eqNumber >= $('.fashion').length){//khi bấm next ảnh lớn hơn chiều dài object ảnh thì cho ảnh về số 0
        eqNumber = 0;
    }
    imgSelectVisible.fadeOut(1800);// xoá ảnh hiện tại 
    $('img.fashion').eq(eqNumber).fadeIn(1800);// hiển thị ản tiếp theo 
    // fadeIn hiệu ứng chuyển ảnh chậm
}
// cách 2
/***
 * $(() => {
    $('.icon_right').click(function(){// khi nhấn icon rigth
    const imgSelectVisible = $('img.fashion:visible');// tạo 1 object chứa các ảnh
       let imgVisible = parseInt(imgSelectVisible.attr('number'));// lấy ra vị trí của ảnh tại number
       let eqNumber = imgVisible + 1;// lấy ra ảnh tiếp theo
       $('img.fashion').eq(eqNumber).fadeIn();// hiển thị ản tiếp theo
       imgSelectVisible.fadeOut();
    })
    // khi nhấn icon left
    $('.icon_left').click(function(){
    const imgSelectVisible = $('img.fashion:visible');// tạo 1 object chứa các ảnh
        let imgVisible = parseInt(imgSelectVisible.attr('number'));// lấy ra vị trí của ảnh tại number
        let eqNumber = imgVisible - 1;// lấy ra ảnh tiếp theo
        $('img.fashion').eq(eqNumber).fadeIn();// hiển thị ản tiếp theo
        imgSelectVisible.fadeOut();
     })
})
 */

/// tạo hiệu ứng tự động chuyển ảnh
// setInterval phương thức tạo sự tự động
setInterval(function(){
    $('.icon_right').click();
}, 10000); // sau 2 giây ảnh sẽ tự động chuyển sang phải
