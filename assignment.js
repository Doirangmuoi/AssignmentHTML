const form = document.getElementById('Userform');
const resultform = document.getElementById('result');

function clearErrors() {
    document.querySelectorAll(".error").forEach(e => e.innerText = "");
}

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

form.addEventListener("submit", function(event) {
    event.preventDefault();
    let isValid = true;

    const name = document.getElementById("Username").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const gender = document.querySelector('input[name="gender"]:checked');
    const fav = document.querySelectorAll('input[type="checkbox"]:checked');
    const intro = document.getElementById("gioithieu").value.trim();

    if (name === "") {
        document.getElementById("errorName").innerText = "Họ và tên là bắt buộc.";
        isValid = false;
    } else if (name.length > 50) {
        document.getElementById("errorName").innerText = "Tối đa 50 ký tự.";
        isValid = false;
    }

    if (!validateEmail(email)) {
        document.getElementById("errorEmail").innerText = "Email không đúng định dạng.";
        isValid = false;
    }

    if (phone === "") {
        document.getElementById("errorPhone").innerText = "Phone là bắt buộc.";
        isValid = false;
    }

    if (!gender) {
        document.getElementById("errorGender").innerText = "Vui lòng chọn giới tính.";
        isValid = false;
    }

    if (isValid) {
        const hobbyList = Array.from(fav).map(h => h.value).join(", ");

        form.style.display = "none";

        resultform.style.display = "block";
        resultform.innerHTML = `
                <h2>Thông tin đã đăng ký</h2>
                <p><strong>Họ và tên:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Giới tính:</strong> ${gender.value}</p>
                <p><strong>Sở thích:</strong> ${hobbyList || "Không có"}</p>
                <p><strong>Giới thiệu:</strong> ${intro || "Không có"}</p>
            `;
    }
});