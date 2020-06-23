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
}var ZoneAD_16=new CodeZoneAD("ZoneAD_16");var objAD = new ObjectAD();
objAD.ADID= 43;objAD.ADType= 4;objAD.ADName= "2015简洁明亮内容页广告3";objAD.ImgUrl= "/";objAD.ImgWidth       = 0;objAD.ImgHeight      = 0;objAD.FlashWmode     = 0;objAD.ADIntro ="<a href='/shop/' target='_blank'>购买Zoomla!逐浪CMS送官方订制商端模板+</a>";objAD.LinkUrl        = "";objAD.LinkTarget     = 0;objAD.LinkAlt        = "";objAD.Priority       = 1;objAD.CountView      = false;objAD.CountClick     = false;objAD.OverdueDate    = "2016/09/24";objAD.InstallDir     = "/";objAD.ADDIR= "/AD";ZoneAD_16.AddAD(objAD);var objAD = new ObjectAD();
objAD.ADID= 42;objAD.ADType= 4;objAD.ADName= "2015简洁明亮内容页广告2";objAD.ImgUrl= "/";objAD.ImgWidth       = 0;objAD.ImgHeight      = 0;objAD.FlashWmode     = 0;objAD.ADIntro ="<a href='/m/' target='_blank'>逐浪移动解决方案值得信赖，全网连接你的生产力+</a>";objAD.LinkUrl        = "";objAD.LinkTarget     = 0;objAD.LinkAlt        = "";objAD.Priority       = 1;objAD.CountView      = false;objAD.CountClick     = false;objAD.OverdueDate    = "2086/09/24";objAD.InstallDir     = "/";objAD.ADDIR= "/AD";ZoneAD_16.AddAD(objAD);var objAD = new ObjectAD();
objAD.ADID= 41;objAD.ADType= 4;objAD.ADName= "2015简洁明亮内容页广告1";objAD.ImgUrl= "/";objAD.ImgWidth       = 0;objAD.ImgHeight      = 0;objAD.FlashWmode     = 0;objAD.ADIntro ="<a href='/pub/' target='_blank'>我们有提供专业的网站后台程序并集成了强大的办公功能-更重要的是这一切完全免费，点此下载+</a>";objAD.LinkUrl        = "";objAD.LinkTarget     = 0;objAD.LinkAlt        = "";objAD.Priority       = 1;objAD.CountView      = false;objAD.CountClick     = false;objAD.OverdueDate    = "2086/09/24";objAD.InstallDir     = "/";objAD.ADDIR= "/AD";ZoneAD_16.AddAD(objAD);ZoneAD_16.ZoneID=16;ZoneAD_16.ZoneWidth=468;ZoneAD_16.ZoneHeight=60;ZoneAD_16.ShowType=1;ZoneAD_16.Show();