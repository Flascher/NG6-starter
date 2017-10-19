import feather from 'feather-icons';

export default class IconController {
  static $inject = ['$sce'];
  constructor($sce) {
    this.$sce = $sce;
  }
  $onInit() {
    this.iconSvg = this.$sce.trustAsHtml(feather.toSvg(this.name));
  }
  $onChanges(changeObj) {
    this.iconSvg = this.$sce.trustAsHtml(feather.toSvg(changeObj.name.currentValue));
  }
}
