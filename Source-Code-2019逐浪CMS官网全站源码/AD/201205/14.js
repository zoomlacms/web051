function ObjectAD() {
  /* Define  Variables*/
  this.ADID        = 0;
  this.ADType      = 0;
  this.ADName      = "";
  this.ImgUrl      = "";
  this.ImgWidth    = 0;
  this.ImgHeight   = 0;
  this.FlashWmode  = 0;
  this.LinkUrl     = "";
  this.LinkTarget  = 0;
  this.LinkAlt     = "";
  this.Priority    = 0;
  this.CountView   = 0;
  this.CountClick  = 0;
  this.InstallDir  = "";
  this.ADDIR       = "";
  this.OverdueDate = "";
}

function CodeZoneAD(_id) {
  /* Define Common Variables*/
  this.ID          = _id;
  this.ZoneID      = 0;

  /* Define Unique Variables*/

  /* Define Objects */
  this.AllAD       = new Array();
  this.ShowAD      = null;

  /* Define Functions */
  this.AddAD       = CodeZoneAD_AddAD;
  this.GetShowAD   = CodeZoneAD_GetShowAD;
  this.Show        = CodeZoneAD_Show;

}

function CodeZoneAD_AddAD(_AD) {
  var date = new Date();
  var getdate = date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate();
  var today = new Date(getdate);
  var overdueDate = new Date(_AD.OverdueDate);
  if(today <= overdueDate)
  {
    this.AllAD[this.AllAD.length] = _AD;
  }
}

function CodeZoneAD_GetShowAD() {
  if (this.ShowType > 1) {
    this.ShowAD = this.AllAD[0];
    return;
  }
  var num = this.AllAD.length;
  var sum = 0;
  for (var i = 0; i < num; i++) {
    sum = sum + this.AllAD[i].Priority;
  }
  if (sum <= 0) {return ;}
  var rndNum = Math.random() * sum;
  i = 0;
  j = 0;
  while (true) {
    j = j + this.AllAD[i].Priority;
    if (j >= rndNum) {break;}
    i++;
  }
  this.ShowAD = this.AllAD[i];
}

function CodeZoneAD_Show() {
  if (!this.AllAD) {
    return;
  } else {
    this.GetShowAD();
  }

  if (this.ShowAD == null) return false;
  document.write(this.ShowAD.ADIntro);
}var ZoneAD_14=new CodeZoneAD("ZoneAD_14");var objAD = new ObjectAD();
objAD.ADID= 31;objAD.ADType= 4;objAD.ADName= "头部方案展示6_公益组织";objAD.ImgUrl= "/";objAD.ImgWidth       = 0;objAD.ImgHeight      = 0;objAD.FlashWmode     = 0;objAD.ADIntro ="<div style='background:url(/Template/office/style/images/head_bg6.jpg) top center no-repeat;' class='ad_top'><div class='container' id='header'><div id='logo'><a href='/Project/' target='_blank' class='at'>了解公益组织和机构事业单位为何选用Zoomla!逐浪CMS系列软件</a><br>";objAD.LinkUrl        = "";objAD.LinkTarget     = 0;objAD.LinkAlt        = "";objAD.Priority       = 1;objAD.CountView      = false;objAD.CountClick     = false;objAD.OverdueDate    = "2088/06/03";objAD.InstallDir     = "/";objAD.ADDIR= "/AD";ZoneAD_14.AddAD(objAD);var objAD = new ObjectAD();
objAD.ADID= 30;objAD.ADType= 4;objAD.ADName= "头部方案展示5_学校与学术教育机构";objAD.ImgUrl= "/";objAD.ImgWidth       = 0;objAD.ImgHeight      = 0;objAD.FlashWmode     = 0;objAD.ADIntro ="<div style='background:url(/Template/office/style/images/head_bg5.jpg) top center no-repeat;' class='ad_top'><div class='container' id='header'><div id='logo'><a href='/Project/131.shtml' target='_blank' class='at'>了解学校与学术教育机构为何选用Zoomla!逐浪CMS系列软件</a><br>";objAD.LinkUrl        = "";objAD.LinkTarget     = 0;objAD.LinkAlt        = "";objAD.Priority       = 1;objAD.CountView      = false;objAD.CountClick     = false;objAD.OverdueDate    = "2088/06/03";objAD.InstallDir     = "/";objAD.ADDIR= "/AD";ZoneAD_14.AddAD(objAD);var objAD = new ObjectAD();
objAD.ADID= 29;objAD.ADType= 4;objAD.ADName= "头部方案展示4_政府办事机构";objAD.ImgUrl= "/";objAD.ImgWidth       = 0;objAD.ImgHeight      = 0;objAD.FlashWmode     = 0;objAD.ADIntro ="<div style='background:url(/Template/office/style/images/head_bg4.jpg) top center no-repeat;' class='ad_top'><div class='container' id='header'><div id='logo'><a href='/Article/Project/136.shtml' target='_blank' class='at'>了解政府办事机构为何选用Zoomla!逐浪CMS系列软件</a><br>";objAD.LinkUrl        = "";objAD.LinkTarget     = 0;objAD.LinkAlt        = "";objAD.Priority       = 1;objAD.CountView      = false;objAD.CountClick     = false;objAD.OverdueDate    = "2088/06/03";objAD.InstallDir     = "/";objAD.ADDIR= "/AD";ZoneAD_14.AddAD(objAD);var objAD = new ObjectAD();
objAD.ADID= 28;objAD.ADType= 4;objAD.ADName= "头部方案展示3_农业基础平台";objAD.ImgUrl= "/";objAD.ImgWidth       = 0;objAD.ImgHeight      = 0;objAD.FlashWmode     = 0;objAD.ADIntro ="<div style='background:url(/Template/office/style/images/head_bg3.jpg) top center no-repeat;' class='ad_top'><div class='container' id='header'><div id='logo'><a href='/Article/Project/138.shtml' target='_blank' class='at'>了解农业基础平台为何选用Zoomla!逐浪CMS系列软件</a><br>";objAD.LinkUrl        = "";objAD.LinkTarget     = 0;objAD.LinkAlt        = "";objAD.Priority       = 1;objAD.CountView      = false;objAD.CountClick     = false;objAD.OverdueDate    = "2088/06/03";objAD.InstallDir     = "/";objAD.ADDIR= "/AD";ZoneAD_14.AddAD(objAD);var objAD = new ObjectAD();
objAD.ADID= 27;objAD.ADType= 4;objAD.ADName= "头部方案展示2_军工单位";objAD.ImgUrl= "/";objAD.ImgWidth       = 0;objAD.ImgHeight      = 0;objAD.FlashWmode     = 0;objAD.ADIntro ="<div style='background:url(/Template/office/style/images/head_bg2.jpg) top center no-repeat;' class='ad_top'><div class='container' id='header'><div id='logo'><a href='/Article/Project/137.shtml' target='_blank' class='at'>了解军工单位为何选用Zoomla!逐浪CMS系列软件</a><br>";objAD.LinkUrl        = "";objAD.LinkTarget     = 0;objAD.LinkAlt        = "";objAD.Priority       = 1;objAD.CountView      = false;objAD.CountClick     = false;objAD.OverdueDate    = "2088/06/03";objAD.InstallDir     = "/";objAD.ADDIR= "/AD";ZoneAD_14.AddAD(objAD);var objAD = new ObjectAD();
objAD.ADID= 26;objAD.ADType= 4;objAD.ADName= "头部方案展示1_航天科技企业";objAD.ImgUrl= "/";objAD.ImgWidth       = 0;objAD.ImgHeight      = 0;objAD.FlashWmode     = 0;objAD.ADIntro ="<div style='background:url(/Template/office/style/images/head_bg.jpg) top center no-repeat;' class='ad_top'><div class='container' id='header'><div id='logo'><a href='/Article/Project/399.shtml' traget='_blank' class='at'>了解航天科技企业为何选用Zoomla!逐浪CMS系列软件</a><br>";objAD.LinkUrl        = "";objAD.LinkTarget     = 0;objAD.LinkAlt        = "";objAD.Priority       = 1;objAD.CountView      = false;objAD.CountClick     = false;objAD.OverdueDate    = "2088/06/03";objAD.InstallDir     = "/";objAD.ADDIR= "/AD";ZoneAD_14.AddAD(objAD);ZoneAD_14.ZoneID=14;ZoneAD_14.ZoneWidth=468;ZoneAD_14.ZoneHeight=60;ZoneAD_14.ShowType=1;ZoneAD_14.Show();