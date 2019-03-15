const titleText = "Reset Password";

const contents =
    "<br>"
    + "<br>"
    + "<form id='resetPasswordForm'>"
    + "<input id='email' type='email' placeholder='Email'  required />"
    + "<input id='password' type='password' placeholder = 'Password' required/>"
    + "<input id='newPassword' type='password' placeholder = 'New Password' required/>"
    + "<input id='repeatPassword' type='password' placeholder = 'Repeat password' required/>"
    + "<button id='resetPasswordFormButton' type='submit'>Reset</button>"
    + "</form>";

const message = "Executing your request, \n Do you wish to proceed?";

const resetConfirmationMarkups =
    +"<p>" + message + "</p>"
    + "<div>"
    + "<button id='no'>No</button>"
    + "<button id='yes'>Yes</button>"
    + "</div>";

function displayPasswordResetUI() {
    const mainSection = document.getElementById('content');
    const title = document.getElementById('headerTitle');
    const resetConfirmationSection = document.createElement('div');
    resetConfirmationSection.setAttribute('id', 'resetDialog');
    resetConfirmationSection.innerHTML = resetConfirmationMarkups;
    title.textContent = titleText;
    mainSection.innerHTML = contents;

    let resetConfirmDialog = new Dialog(resetConfirmationSection);
    let formButton = document.getElementById('resetPasswordFormButton');
    formButton.onclick = () => {
        handleDialogEvent(resetConfirmDialog);
    };

}

function handleDialogEvent(dialog) {
    let negativeButton = document.getElementById('no');
    let positiveButton = document.getElementById('yes');

    negativeButton.onclick = () => {
        dialog.restore()
    };
    positiveButton.onclick = () => {
        dialog.restore();
    };
}