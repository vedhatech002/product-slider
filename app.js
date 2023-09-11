const imgBtns = document.querySelectorAll('.img a');
const selectImgDiv = document.querySelectorAll('.img');

let imgId = 1;

imgBtns.forEach((imgbtn) => {
    imgbtn.addEventListener('click', (e) => {
        e.preventDefault();
        imgId = imgbtn.dataset.id;
        selectImgDiv.forEach(imgdiv => {
            imgdiv.classList.remove('active');
        });
        imgbtn.parentElement.classList.add('active');
        moveImage();
    })
});


function moveImage() {
    const imgWidth = document.querySelector('.main-img img:first-child').clientWidth;
    let width = (imgId - 1) * imgWidth;
    const imgFrame = document.querySelector('.main-img');
    imgFrame.style.transform = `translate(${-width}px)`;
}


//counter button
const minusBtn = document.querySelector('#minus');
const plusBtn = document.querySelector('#plus');
const qtyTxt = document.querySelector('#qty');
qtyTxt.readOnly = true;
minusBtn.addEventListener('click', () => {
    let qty = parseInt(qtyTxt.value);
    if (qty > 1) {
        qty--;
        qtyTxt.value = qty;
    }
});

plusBtn.addEventListener('click', () => {
    let qty = parseInt(qtyTxt.value);
    if (qty >= 0 && qty < 5) {
        qty++;
        qtyTxt.value = qty;
    }
});

//size area\
const sizeBoxes = document.querySelectorAll(".size-input");
console.log(sizeBoxes);
sizeBoxes.forEach(size => {
    size.addEventListener("click", (e) => {
        sizeBoxes.forEach(size => {
            size.classList.remove("size-active");
        })
        size.classList.add('size-active');
    })
})