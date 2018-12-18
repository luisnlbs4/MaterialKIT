var dialog = document.querySelector('dialog');
var dialogadd = document.querySelector('.dialogAdd');
var showDialogButton = document.querySelector('#show-dialog');
var showDialogButtonAdd = document.querySelector('#show-dialogadd');

if (! dialog.showModal) {
  dialogPolyfill.registerDialog(dialog);
}
if (! dialogadd.showModal) {
  dialogPolyfill.registerDialog(dialogadd);
}
showDialogButton.addEventListener('click', function() {
  dialog.showModal();
});

showDialogButtonAdd.addEventListener('click', function() {
  dialogadd.showModal();
});

dialogadd.querySelector('.close').addEventListener('click', function() {
  dialogadd.close();
});

dialog.querySelector('.close').addEventListener('click', function() {
  dialog.close();
});
