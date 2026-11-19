// vẽ ra giao diện giỏ hàng
const drawListTour = () => {
  fetch("http://localhost:3000/cart/list-json", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: localStorage.getItem("cart")
})
  .then(res => res.json())
  .then(data => {

    const htmlsArray = data.tours.map((item , index) => {
      return `
        <tr>
            <td>${index + 1}</td>
            <td>
              <img src="${item.image}" alt="${item.infoTour.title}" width="80px" />
            </td>
            <td>
              <a href="/tours/detail/${item.infoTour.slug}">${item.infoTour.title}</a>
            </td>
            <td>${item.price_special.toLocaleString()}đ</td>
            <td>
              <input
                type="number"
                name="quantity"
                value="${item.quantity}"
                min="1"
                item-id="${item.tourId}"
                style="width: 60px" />
            </td>
            <td>${item.totalPrice.toLocaleString()}đ</td>
            <td>
              <button class="btn btn-sm btn-danger" btn-delete="${item.tourId}">Xóa</button>
            </td>
        </tr>
      `
    });
    const listTour = document.querySelector("[list-tour]");
    listTour.innerHTML = htmlsArray.join("");

    // Tính tổng đơn hàng
    const total = data.tours.reduce((sum, item) => sum + item.totalPrice, 0);

    const elementTotal = document.querySelector("[total-price]");

    elementTotal.innerHTML = total.toLocaleString();

    // Xử lý sự kiện xóa sản phẩm
    deleteItemInCart();
  })
}
// Hết vẽ ra giao diện giỏ hàng

// Xoá sản phẩm trong giỏ hàng
const deleteItemInCart = () => {
  const listBtnDelete = document.querySelectorAll("[btn-delete]");
  listBtnDelete.forEach(button => {
    button.addEventListener("click", () => {
      const tourId = button.getAttribute("btn-delete");
      const cart = JSON.parse(localStorage.getItem("cart"))
      const newCart = cart.filter(item => item.tourId != tourId);
      localStorage.setItem("cart", JSON.stringify(newCart));

      drawListTour();
    })
  });
}
// Hết Xoá sản phẩm trong giỏ hàng


// Lấy ra data và in ra giao diện
drawListTour();
// Hết Lấy ra data và in ra giao diện
