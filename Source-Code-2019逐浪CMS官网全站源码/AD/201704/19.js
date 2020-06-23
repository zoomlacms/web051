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
}var ZoneAD_19=new CodeZoneAD("ZoneAD_19");var objAD = new ObjectAD();
objAD.ADID= 66;objAD.ADType= 4;objAD.ADName= "2017首页滚动新闻下展示轮播7_五百强";objAD.ImgUrl= "/";objAD.ImgWidth       = 0;objAD.ImgHeight      = 0;objAD.FlashWmode     = 0;objAD.ADIntro ="<div class='home17_official_case' style='background:url(/Template/office/style/images/2017menu_bg0.jpg) #fff 100% no-repeat; '><a href='/Project/' target='_blank'>查看移动平台为何选用逐浪CMS软件</a></div>";objAD.LinkUrl        = "";objAD.LinkTarget     = 0;objAD.LinkAlt        = "";objAD.Priority       = 1;objAD.CountView      = false;objAD.CountClick     = false;objAD.OverdueDate    = "2018/04/05";objAD.InstallDir     = "/";objAD.ADDIR= "/AD/";ZoneAD_19.AddAD(objAD);var objAD = new ObjectAD();
objAD.ADID= 65;objAD.ADType= 4;objAD.ADName= "2017首页滚动新闻下展示轮播9_初创团队";objAD.ImgUrl= "/";objAD.ImgWidth       = 0;objAD.ImgHeight      = 0;objAD.FlashWmode     = 0;objAD.ADIntro ="<div class='home17_official_case' style='background:url(/Template/office/style/images/2017menu_bg9.jpg) #fff 100% no-repeat; '><a href='/Project/' target='_blank'>查看创业团队为何选用逐浪CMS软件</a></div>";objAD.LinkUrl        = "";objAD.LinkTarget     = 0;objAD.LinkAlt        = "";objAD.Priority       = 1;objAD.CountView      = false;objAD.CountClick     = false;objAD.OverdueDate    = "2018/04/05";objAD.InstallDir     = "/";objAD.ADDIR= "/AD/";ZoneAD_19.AddAD(objAD);var objAD = new ObjectAD();
objAD.ADID= 64;objAD.ADType= 4;objAD.ADName= "2017首页滚动新闻下展示轮播8_电商";objAD.ImgUrl= "/";objAD.ImgWidth       = 0;objAD.ImgHeight      = 0;objAD.FlashWmode     = 0;objAD.ADIntro ="<div class='home17_official_case' style='background:url(/Template/office/style/images/2017menu_bg8.jpg) #fff 100% no-repeat; '><a href='/Project/166.shtml' target='_blank'>查看线上销售及电商为何选用逐浪CMS软件</a></div>";objAD.LinkUrl        = "";objAD.LinkTarget     = 0;objAD.LinkAlt        = "";objAD.Priority       = 1;objAD.CountView      = false;objAD.CountClick     = false;objAD.OverdueDate    = "2018/04/05";objAD.InstallDir     = "/";objAD.ADDIR= "/AD/";ZoneAD_19.AddAD(objAD);var objAD = new ObjectAD();
objAD.ADID= 63;objAD.ADType= 4;objAD.ADName= "2017首页滚动新闻下展示轮播7_五百强";objAD.ImgUrl= "/";objAD.ImgWidth       = 0;objAD.ImgHeight      = 0;objAD.FlashWmode     = 0;objAD.ADIntro ="<div class='home17_official_case' style='background:url(/Template/office/style/images/2017menu_bg7.jpg) #fff 100% no-repeat; '><a href='/Project/' target='_blank'>查看世界五百强公司为何选用逐浪CMS软件</a></div>";objAD.LinkUrl        = "";objAD.LinkTarget     = 0;objAD.LinkAlt        = "";objAD.Priority       = 1;objAD.CountView      = false;objAD.CountClick     = false;objAD.OverdueDate    = "2018/04/05";objAD.InstallDir     = "/";objAD.ADDIR= "/AD/";ZoneAD_19.AddAD(objAD);var objAD = new ObjectAD();
objAD.ADID= 62;objAD.ADType= 4;objAD.ADName= "2017首页滚动新闻下展示轮播6_公益组织";objAD.ImgUrl= "/";objAD.ImgWidth       = 0;objAD.ImgHeight      = 0;objAD.FlashWmode     = 0;objAD.ADIntro ="<div class='home17_official_case' style='background:url(/Template/office/style/images/2017menu_bg6.jpg) #fff 100% no-repeat; '><a href='/Project/' target='_blank'>查看公益组织和事业单位为何选用逐浪CMS</a></div>";objAD.LinkUrl        = "";objAD.LinkTarget     = 0;objAD.LinkAlt        = "";objAD.Priority       = 1;objAD.CountView      = false;objAD.CountClick     = false;objAD.OverdueDate    = "2018/04/05";objAD.InstallDir     = "/";objAD.ADDIR= "/AD/";ZoneAD_19.AddAD(objAD);var objAD = new ObjectAD();
objAD.ADID= 61;objAD.ADType= 4;objAD.ADName= "2017首页滚动新闻下展示轮播5_学校与学术教育机构";objAD.ImgUrl= "/";objAD.ImgWidth       = 0;objAD.ImgHeight      = 0;objAD.FlashWmode     = 0;objAD.ADIntro ="<div class='home17_official_case' style='background:url(/Template/office/style/images/2017menu_bg5.jpg) #fff 100% no-repeat; '><a href='/Project/131.shtml' target='_blank'>查看学校与教育机构为何选用逐浪CMS软件</a></div>";objAD.LinkUrl        = "";objAD.LinkTarget     = 0;objAD.LinkAlt        = "";objAD.Priority       = 1;objAD.CountView      = false;objAD.CountClick     = false;objAD.OverdueDate    = "2018/04/05";objAD.InstallDir     = "/";objAD.ADDIR= "/AD/";ZoneAD_19.AddAD(objAD);var objAD = new ObjectAD();
objAD.ADID= 60;objAD.ADType= 4;objAD.ADName= "2017首页滚动新闻下展示轮播4_政府政务";objAD.ImgUrl= "/";objAD.ImgWidth       = 0;objAD.ImgHeight      = 0;objAD.FlashWmode     = 0;objAD.ADIntro ="<div class='home17_official_case' style='background:url(/Template/office/style/images/2017menu_bg4.jpg) #fff 100% no-repeat; '><a href='/Project/136.shtml' target='_blank'>查看政府政务为何选用逐浪CMS软件</a></div>";objAD.LinkUrl        = "";objAD.LinkTarget     = 0;objAD.LinkAlt        = "";objAD.Priority       = 1;objAD.CountView      = false;objAD.CountClick     = false;objAD.OverdueDate    = "2018/04/05";objAD.InstallDir     = "/";objAD.ADDIR= "/AD/";ZoneAD_19.AddAD(objAD);var objAD = new ObjectAD();
objAD.ADID= 59;objAD.ADType= 4;objAD.ADName= "2017首页滚动新闻下展示轮播3_农业平台";objAD.ImgUrl= "/";objAD.ImgWidth       = 0;objAD.ImgHeight      = 0;objAD.FlashWmode     = 0;objAD.ADIntro ="<div class='home17_official_case' style='background:url(/Template/office/style/images/2017menu_bg3.jpg) #fff 100% no-repeat; '><a href='/Project/138.shtml' target='_blank'>查看农业基础平台为何选用逐浪CMS软件</a></div>";objAD.LinkUrl        = "";objAD.LinkTarget     = 0;objAD.LinkAlt        = "";objAD.Priority       = 1;objAD.CountView      = false;objAD.CountClick     = false;objAD.OverdueDate    = "2018/04/05";objAD.InstallDir     = "/";objAD.ADDIR= "/AD/";ZoneAD_19.AddAD(objAD);var objAD = new ObjectAD();
objAD.ADID= 58;objAD.ADType= 4;objAD.ADName= "2017首页滚动新闻下展示轮播2_军工警防";objAD.ImgUrl= "/";objAD.ImgWidth       = 0;objAD.ImgHeight      = 0;objAD.FlashWmode     = 0;objAD.ADIntro ="<div class='home17_official_case' style='background:url(/Template/office/style/images/2017menu_bg2.jpg) #fff 100% no-repeat; '><a href='/Project/137.shtml' target='_blank'>查看军工警防为何选用逐浪CMS软件</a></div>";objAD.LinkUrl        = "";objAD.LinkTarget     = 0;objAD.LinkAlt        = "";objAD.Priority       = 1;objAD.CountView      = false;objAD.CountClick     = false;objAD.OverdueDate    = "2018/04/05";objAD.InstallDir     = "/";objAD.ADDIR= "/AD/";ZoneAD_19.AddAD(objAD);var objAD = new ObjectAD();
objAD.ADID= 57;objAD.ADType= 4;objAD.ADName= "2017首页滚动新闻下展示轮播1_航天科技";objAD.ImgUrl= "/";objAD.ImgWidth       = 0;objAD.ImgHeight      = 0;objAD.FlashWmode     = 0;objAD.ADIntro ="<div class='home17_official_case' style='background:url(/Template/office/style/images/2017menu_bg1.jpg) #fff 100% no-repeat; '><a href='/Project/399.shtml' target='_blank'>查看航天科技企业为何选用逐浪CMS软件</a></div>";objAD.LinkUrl        = "";objAD.LinkTarget     = 0;objAD.LinkAlt        = "";objAD.Priority       = 1;objAD.CountView      = false;objAD.CountClick     = false;objAD.OverdueDate    = "2018/04/05";objAD.InstallDir     = "/";objAD.ADDIR= "/AD/";ZoneAD_19.AddAD(objAD);ZoneAD_19.ZoneID=19;ZoneAD_19.ZoneWidth=468;ZoneAD_19.ZoneHeight=60;ZoneAD_19.ShowType=1;ZoneAD_19.Show();