(function () {
  //問題1（難易度⭐️⭐️）
  //厳格モード
  '××× ×××';

  // 「製品名」フィールドの選択肢によって、「単価」フィールドの値を変更する関数
  function changeProductPrice(event) {

    // 「単価」フィールドを編集不可にする
    event.record.単価.disabled = true;

    // 「製品名」フィールドの値を変数に代入
    var product = event.record.xxx.xxx;

    // 「製品名」フィールドで「kintone」を選択したら、「単価」フィールドに「1500」を入力
    ××× (product === '×××') {
      event.record.xxx.value = 1500;

      // 「製品名」フィールドで「Office」を選択したら、「単価」フィールドに「500」を入力
    } ××× ××× (product === 'Office') {
      event.record.×××.value = 500;

      // 「製品名」フィールドで「Garoon」を選択したら、「単価」フィールドに「845」を入力
    } ××× ××× (product === 'Garoon') {
      event.record.×××.value = 845;

      // 「製品名」フィールドで「-----」(初期値)を選択したら、「単価」フィールドに「0」を入力
    } ××× ××× (product === undefined) {
      event.record.×××.value = 0;
    }

    //kintone にイベントオブジェクトを返す
    return event;
  }
  //レコード追加と編集画面でフィールドの値を変更時のイベントで、changeProductPriceを実行
  kintone.events.on(['app.record.create.show', 'app.record.edit.show', 'app.record.×××.×××.×××', 'app.record.×××.×××.×××'], changeProductPrice);

  /*
    //問題2（難易度⭐️⭐️）
    // 「確度」フィールドの値が「A」だったら、文字スタイルを赤文字・太字に変更する関数
    function changeColor(event) {
  
      // レコード一覧画面に表示されているレコードの数分、繰り返して、 「確度」フィールドの値に「A」があるかを確認
      ××× (var i = 0; i < event.×××.×××; i++) {
        // 「確度」フィールドの値が「A」だったら、
        if (event.×××[i].確度.value === 'A') {
          // 「確度」の文字スタイルを赤文字に変更
          kintone.×××.×××('確度')[i].style.×××= '#ff0000';
          // 「確度」の文字スタイルを太字に変更
          kintone.×××.×××('確度')[i].style.fontWeight = 'bold';
        }
      }
    }
    // 「レコード一覧画面を開いた時」に、関数を実行
    kintone.events.on('app.record.index.show', changeColor); 
  */
})();