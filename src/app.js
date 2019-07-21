const AppTab = require("./widgets/AppTab");

(new AppTab({
  paging: false
}))
  .appendTo(global.tabris.contentView);