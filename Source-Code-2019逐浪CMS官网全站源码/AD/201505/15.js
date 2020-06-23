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
}var ZoneAD_15=new CodeZoneAD("ZoneAD_15");var objAD = new ObjectAD();
objAD.ADID= 34;objAD.ADType= 4;objAD.ADName= "pub_a2.jpg";objAD.ImgUrl= "/";objAD.ImgWidth       = 0;objAD.ImgHeight      = 0;objAD.FlashWmode     = 0;objAD.ADIntro ="<style>.section1{background-image: url(/Template/office/style/images/pub_a2.jpg);}</style>";objAD.LinkUrl        = "";objAD.LinkTarget     = 0;objAD.LinkAlt        = "";objAD.Priority       = 3;objAD.CountView      = false;objAD.CountClick     = false;objAD.OverdueDate    = "2066/05/01";objAD.InstallDir     = "/";objAD.ADDIR= "/AD";ZoneAD_15.AddAD(objAD);var objAD = new ObjectAD();
objAD.ADID= 33;objAD.ADType= 4;objAD.ADName= "pub_a1.jpg";objAD.ImgUrl= "/";objAD.ImgWidth       = 0;objAD.ImgHeight      = 0;objAD.FlashWmode     = 0;objAD.ADIntro ="<style>.section1{ background-image: url(/Template/office/style/images/pub_a1.jpg);}</style>";objAD.LinkUrl        = "";objAD.LinkTarget     = 0;objAD.LinkAlt        = "";objAD.Priority       = 3;objAD.CountView      = false;objAD.CountClick     = false;objAD.OverdueDate    = "2090/05/01";objAD.InstallDir     = "/";objAD.ADDIR= "/AD";ZoneAD_15.AddAD(objAD);var objAD = new ObjectAD();
objAD.ADID= 35;objAD.ADType= 4;objAD.ADName= "pub_a3.jpg";objAD.ImgUrl= "/";objAD.ImgWidth       = 0;objAD.ImgHeight      = 0;objAD.FlashWmode     = 0;objAD.ADIntro ="<style>.section1{background-image: url(/Template/office/style/images/pub_a3.jpg);}</style>";objAD.LinkUrl        = "";objAD.LinkTarget     = 0;objAD.LinkAlt        = "";objAD.Priority       = 2;objAD.CountView      = false;objAD.CountClick     = false;objAD.OverdueDate    = "2096/05/01";objAD.InstallDir     = "/";objAD.ADDIR= "/AD";ZoneAD_15.AddAD(objAD);var objAD = new ObjectAD();
objAD.ADID= 40;objAD.ADType= 4;objAD.ADName= "pub_a8.jpg";objAD.ImgUrl= "/";objAD.ImgWidth       = 0;objAD.ImgHeight      = 0;objAD.FlashWmode     = 0;objAD.ADIntro ="<style>.section1{background-image: url(/Template/office/style/images/pub_a8.jpg);}</style>";objAD.LinkUrl        = "";objAD.LinkTarget     = 0;objAD.LinkAlt        = "";objAD.Priority       = 1;objAD.CountView      = false;objAD.CountClick     = false;objAD.OverdueDate    = "2088/05/02";objAD.InstallDir     = "/";objAD.ADDIR= "/AD";ZoneAD_15.AddAD(objAD);var objAD = new ObjectAD();
objAD.ADID= 39;objAD.ADType= 4;objAD.ADName= "pub_a7.jpg";objAD.ImgUrl= "/";objAD.ImgWidth       = 0;objAD.ImgHeight      = 0;objAD.FlashWmode     = 0;objAD.ADIntro ="<style>.section1{ background-image: url(/Template/office/style/images/pub_a7.jpg);}</style>";objAD.LinkUrl        = "";objAD.LinkTarget     = 0;objAD.LinkAlt        = "";objAD.Priority       = 1;objAD.CountView      = false;objAD.CountClick     = false;objAD.OverdueDate    = "2096/05/02";objAD.InstallDir     = "/";objAD.ADDIR= "/AD";ZoneAD_15.AddAD(objAD);var objAD = new ObjectAD();
objAD.ADID= 38;objAD.ADType= 4;objAD.ADName= "pub_a6.jpg";objAD.ImgUrl= "/";objAD.ImgWidth       = 0;objAD.ImgHeight      = 0;objAD.FlashWmode     = 0;objAD.ADIntro ="<style>.section1{ background-image: url(/Template/office/style/images/pub_a6.jpg);}</style>";objAD.LinkUrl        = "";objAD.LinkTarget     = 0;objAD.LinkAlt        = "";objAD.Priority       = 1;objAD.CountView      = false;objAD.CountClick     = false;objAD.OverdueDate    = "2020/05/14";objAD.InstallDir     = "/";objAD.ADDIR= "/AD";ZoneAD_15.AddAD(objAD);var objAD = new ObjectAD();
objAD.ADID= 37;objAD.ADType= 4;objAD.ADName= "pub_a5.jpg";objAD.ImgUrl= "/";objAD.ImgWidth       = 0;objAD.ImgHeight      = 0;objAD.FlashWmode     = 0;objAD.ADIntro ="<style>.section1{ background-image: url(/Template/office/style/images/pub_a5.jpg);}</style>";objAD.LinkUrl        = "";objAD.LinkTarget     = 0;objAD.LinkAlt        = "";objAD.Priority       = 1;objAD.CountView      = false;objAD.CountClick     = false;objAD.OverdueDate    = "2096/05/02";objAD.InstallDir     = "/";objAD.ADDIR= "/AD";ZoneAD_15.AddAD(objAD);var objAD = new ObjectAD();
objAD.ADID= 36;objAD.ADType= 4;objAD.ADName= "pub_a4.jpg";objAD.ImgUrl= "/";objAD.ImgWidth       = 0;objAD.ImgHeight      = 0;objAD.FlashWmode     = 0;objAD.ADIntro ="<style>.section1{ background-image: url(/Template/office/style/images/pub_a4.jpg);}</style>";objAD.LinkUrl        = "";objAD.LinkTarget     = 0;objAD.LinkAlt        = "";objAD.Priority       = 1;objAD.CountView      = false;objAD.CountClick     = false;objAD.OverdueDate    = "2096/05/01";objAD.InstallDir     = "/";objAD.ADDIR= "/AD";ZoneAD_15.AddAD(objAD);ZoneAD_15.ZoneID=15;ZoneAD_15.ZoneWidth=468;ZoneAD_15.ZoneHeight=60;ZoneAD_15.ShowType=1;ZoneAD_15.Show();