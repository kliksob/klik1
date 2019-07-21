const {
  TabFolder,
  Tab
} = global.tabris;

const DownloaderTab = require("../views/DownloaderTab");
const DownloadedTab = require("../views/DownloadedTab");

class AppTab extends TabFolder {
  constructor(attrs = {}) {
    super(Object.assign({
      layoutData: "stretch",
      tabBarLocation: "bottom"
    }, attrs));
    
    this.createUi();
  }
  createUi() {
    this.append(
      new DownloaderTab(),
      new DownloadedTab()
    );
  }
}

module.exports = AppTab;