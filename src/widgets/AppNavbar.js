const {
  AlertDialog,
  NavigationView,
  Action,
  app
} = global.tabris;

class AppNavbar extends NavigationView {
  constructor(attrs = {}) {
    super(Object.assign({
      layoutData: "stretch"
    }, attrs));
  
    this.createUi();
  }
  createUi() {
    this.append(
      this.actionExit()
    );
  }
  actionExit() {
    const dialog = e => new AlertDialog({
      title: "Confirm...",
      message: "Are you sure to exit",
      buttons: {
        ok: "Ok",
        cancel: "Cancel"
      }
    }).on({
      close: e => e.preventDefault(),
      closeOk: e => app.close()
    }).open()
    
    return new Action({
      title: "Exit",
      placement: "overflow"
    }).on("select", dialog)
  }
}

module.exports = AppNavbar;