$(document).ready(() => {
    $('#btnAdd').on('click', () => {
        var accName = $('#accName').val();
        var deposit = $('#deposit').val();
        var account = new BankAccount(accName, deposit);
        BankAccount.AccountInfoList.push(account);
        $('#txtAccList').val(BankAccount.getAccountInfo());
        populateList();
        $("form")[0].reset();
    });
    $('.btnTransaction').on('click', (event) => {
        var value = $(event.currentTarget).attr('value');
        $('#lblTransaction').html(value);
        $('.container').hide();
        $('.transaction').show();
        window.location.hash = value;
        $('#SubmitTransaction').attr('value', value);
    });
    $('#SubmitTransaction').on('click',(event)=>{
        history.pushState("", document.title, window.location.pathname);
        var amt=$('#txtTransaction').val();
        var value = $(event.currentTarget).attr('value');
        var selectedAcc= BankAccount.getAccount( $('#accList').val());
        selectedAcc.setBalance(amt,value)
        $('.container').show();
        $('.transaction').hide();
        $('#txtAccList').val(BankAccount.getAccountInfo());
        $("form")[0].reset();
    })
});
function populateList() {
    var accList = $('#accList');
    accList.empty();
    for (var i in BankAccount.AccountInfoList) {
        var acc = BankAccount.AccountInfoList[i];
        accList.append(`<option value=${acc.getId()}>${acc.getName()}</option>`)
    }
}