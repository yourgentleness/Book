const detail = document.querySelectorAll(".btnDetail")

detail.forEach((item) => {
    item.addEventListener("click", (e) => {
        let parent = e.target.parentNode.parentNode
        let title = parent.querySelector(".card-img-top").alt
        let image = parent.querySelector(".card-img-top").src
        let price = parent.querySelector(".harga").innerText
        let diskripsi = parent.querySelector(".deskripsi") ? parent.querySelector(".deskripsi").innerHTML : "tidak ada deskripsi lebih lanjut" 

        let modal = document.querySelector(".btnModal")
        modal.click();

        let modalTitle = document.querySelector(".modalTitle")
        let modalDiskripsi = document.querySelector(".modalDeskripsi")
        let modalPrice = document.querySelector(".modalHarga") 

        modalTitle.innerText = title

        let modalImage = document.createElement("img")

        modalImage.src = image
        modalImage.classList.add("w-75")
        document.querySelector(".modalImage").innerHTML = ""
        document.querySelector(".modalImage").appendChild(modalImage)

        modalImage.src = image
        modalDiskripsi.innerHTML = diskripsi
        modalPrice.innerText = price 

        const noHp = "62857121223"
        let massage = `https://api.whatsapp.com//send?phone=${noHp}&text=Pesan buku ${title} ${image}`

        document.querySelector(".btnBuy").href = massage
    })
});

