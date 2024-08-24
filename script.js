$(document).ready(function() {
    // ページが読み込まれたときに保存されたメモを表示
    const savedMemo = localStorage.getItem('memo');
    if (savedMemo) {
        $('#memo').val(savedMemo);
    }

    // メモを保存する関数
    $('#saveButton').click(function() {
        const memo = $('#memo').val();
        localStorage.setItem('memo', memo);
        alert('メモが保存されました!');
    });
    // メモをクリアする関数
    $('#clearButton').click(function() {
        const memo = $('#memo').val(''); // テキストエリアをクリア
        localStorage.removeItem('memo'); // ローカルストレージからメモを削除
        alert('メモがクリアされました!');
});

});
