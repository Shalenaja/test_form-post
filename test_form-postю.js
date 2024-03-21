async function checkFormBtn(e) {
    e.preventDefault();
    this.formValidation();
    if (!this.errors.length) {
        const data = new FormData(formBuy);
        const { status, error } = await this.sendData(data);
        if (status !== 200) {
            alert('Looks like there was a problem. Status Code: ' + status);
        }
        if (status === 200) {
            this.modalVisible = document.getElementById('modalForm');
            this.modalVisible.style.visibility = 'visible';
            setTimeout(() => {
                this.modalVisible.style.visibility = 'hidden';
            }, 2000);
            formBuy.reset();
        } if (error) {
            this.onError(error);
        }
    }
    else {
        alert('Заполните все поля!');
    }
};
async function sendData(data) {
    return await fetch('https://shalionicreative.ru/action.php', {
        method: 'POST',
        headers: { 'Content-Type': 'multipart/form-data' },
        body: data,
    })
};
function onError(error) {
    alert(error.message);
}
