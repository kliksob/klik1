const {
  Tab,
  TextView,
  Stack,
  ScrollView,
  Composite,
  TextInput,
  ImageView,
  NacigationView
} = global.tabris;

const res = require("../libs/resources");
const AppNavbar = require("../widgets/AppNavbar");

class DownloadedTab extends Tab {
  constructor(attrs = {}) {
    super(Object.assign({
      layoutData: "stretch",
      title: "Downloaded",
      image: res.getIcon("cmd_folder_download", "black")
    }, attrs));
    this.navBar = new AppNavbar({});
    this.createUi();
  }
  createUi() {
    this.append(this.navBar);
  }
}


module.exports = DownloadedTab;