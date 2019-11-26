(function() {
  'use strict';
  function showMessage(event) {
    event.record.提案プラン.disabled = true;
    return event;
  }

  kintone.events.on('app.record.edit.change.提案プラン', showMessage);
})();