const {
  Tab,
  TextView,
  ScrollView,
  Composite,
  Page,
  Stack,
  TextInput,
  ImageView,
  Button
} = global.tabris;

const res = require("../libs/resources");
const AppNavbar = require("../widgets/AppNavbar");

class DownloaderTab extends Tab {
  constructor(attrs = {}) {
    super(Object.assign({
      layoutData: "stretch",
      title: "Downloader",
      image: res.getIcon("cmd_home", "black")
    }, attrs));
    this.pageCount = 0;
    this.navbar = new AppNavbar({});
    this.createUi();
  }
  createUi() {
    const container = new Composite({
      layoutData: "stretch"
    }).appendTo(this);
    container.append(this.navbar);
    this.createPage();
  }
  createPage() {
    const stackPage = new Stack({
      layoutData: "center",
      spacing: 16
    }).append(new TextView({
      text: this.pageCount
    }), new Button({
      text: "Add Page"
    }).on("select", () => {
      this.pageCount++;
      this.createPage();
    }))
    return new Page({
      title: "Page " + this.pageCount
    })
      .append(stackPage)
      .appendTo(this.navbar);
  }
}


module.exports = DownloaderTab;