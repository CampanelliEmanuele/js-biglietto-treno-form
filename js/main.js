

const submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", function () {
    event.preventDefault();

    let name = document.getElementById("inputName").value;
    let surname = document.getElementById("inputSurname").value;
    let km = document.getElementById("inputKm").value;
    let age = document.getElementById("inputAge").value;

    document.getElementById("ticket").classList.remove("d-none");

    document.getElementById("ticketCompleteName").append(name)
    document.getElementById("ticketType").append(surname)
    document.getElementById("ticketCode").append(km)
    document.getElementById("ticketPrice").append(age)

});
