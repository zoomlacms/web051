using System;
using System.Collections.ObjectModel;
using System.IO;
using System.Text;
using System.Web;
using System.Web.UI.HtmlControls;
using System.Web.UI.WebControls;
using ZoomLa.Model;
using ZoomLa.Components;
using ZoomLa.Common;
using ZoomLa.BLL;
using System.Collections.Generic;
using ZoomLa.BLL.Helper;
namespace ZoomLa.WebSite.Manage.Common
{
    public partial class FileUpload : CustomerPageAction
    {
        int m_MaxFileSize;

        M_ModelField fieldMod = null;
        M_Node nodeMod = null;
        B_Node nodeBll = new B_Node();
        B_ModelField fieldBll = new B_ModelField();
        B_Admin badmin = new B_Admin();
        B_User buser = new B_User();
        private int ModelID { get { return DataConverter.CLng(Request.QueryString["ModelID"]); } }
        private int NodeID { get { return DataConverter.CLng(Request.QueryString["NodeID"]); } }
        private string FieldName { get { return Request.QueryString["FieldName"] ?? ""; } }
        //是否显示水印
        private int ShowType { get { return DataConverter.CLng(Request.QueryString["ShowType"]); } }
        //上传文件类型
        private string UploadType { get { return ViewState["UploadType"] as string; } set { ViewState["UploadType"] = value; } }
        protected void Page_Load(object sender, EventArgs e)
        {
            if (badmin.CheckLogin() || buser.CheckLogin())
            {
            }
            else { function.WriteErrMsg("该页面必须登录后才能访问"); }
            if (!IsPostBack)
            {
                InitFileExtArr();
                //是否水印
                //if (ShowType == 0) { show1.Visible = false; show2.Visible = false; }
            }
        }
        protected void BtnUpload_Click(object sender, EventArgs e)
        {
            int sizes = 0;
            if (!FupFile.HasFile)
            {
                ReturnManage("请指定一个上传文件");
                return;
            }
            //if (!SafeSC.IsImage(FupFile.FileName)) { function.WriteErrMsg("只能上传图片文件"); }
            string ext = Path.GetExtension(FupFile.FileName).ToLower();
            m_MaxFileSize = DataConverter.CLng(SiteConfig.SiteOption.UploadPicMaxSize);
            if (((int)FupFile.FileContent.Length) > (m_MaxFileSize * 0x400))
            {
                ReturnManage("上传的文件超过限制的" + m_MaxFileSize + "KB大小");
                return;
            }
            string ranFName = DataSecurity.MakeFileRndName() + ext;//文件名
            string foldername = base.Request.PhysicalApplicationPath.TrimEnd('\\') + (VirtualPathUtility.AppendTrailingSlash(SiteConfig.SiteOption.UploadDir) + FileSavePath()).Replace("/", "\\");
            string fileName = FileSystemObject.CreateFileFolder(foldername, HttpContext.Current);
            string savePath = SafeSC.SaveFile(function.PToV(fileName), FupFile, ranFName);
            if (WaterModuleConfig.WaterConfig.IsUsed && SafeSC.IsImage(FupFile.FileName) && RadioButtonList1.SelectedValue == "1")
            {
                savePath=ImgHelper.AddWater(savePath);
            }
            sizes = (int)FupFile.FileContent.Length;
            GetScriptByModuleName(savePath.Replace(SiteConfig.SiteOption.UploadDir, ""), sizes);
            ReturnManage("文件上传成功");
        }
        private string FileSavePath()
        {
            string str = "";
            if (SiteConfig.SiteOption.EnableUploadFiles)
            {
                nodeMod = nodeBll.GetNodeXML(NodeID);
                str = nodeMod.NodeDir + "/{$FileType}/{$Year}/{$Month}/";
                str = str.Replace("{$FileType}", Path.GetExtension(FupFile.FileName).ToLower().Replace(".", "")).Replace("{$Year}", DateTime.Now.Year.ToString()).Replace("{$Month}", DateTime.Now.Month.ToString()).Replace("\\", "/");
            }
            return str;
        }
        private void GetScriptByModuleName(string thumbnailPath, int size)
        {
            StringBuilder builder = new StringBuilder();
            builder.Append("<script>");
            string upload = SiteConfig.SiteOption.UploadDir.TrimEnd('/') + "/" + thumbnailPath;
            if (string.IsNullOrEmpty(UploadType)) { builder.Append("  parent.DealwithUploadPic(\"" + thumbnailPath + "\",\"txt_" + FieldName + "\");parent.DealwithUploadImg(\"" + upload + "\",\"Img_" + FieldName + "\");"); }
            else
            {
                if (UploadType.Equals("FileType"))
                {
                    string sizeid = ViewState["SizeField"].ToString();
                    builder.Append("  parent.DealwithUpload(\"" + thumbnailPath + "\",\"" + size + "\",\"sel_" + FieldName + "\",\"txt_" + FieldName + "\",\"txt_" + sizeid + "\");");
                }
                if (UploadType.Equals("PicType"))
                {
                    builder.Append("  parent.DealwithUploadPic(\"" + thumbnailPath + "\",\"txt_" + FieldName + "\");parent.DealwithUploadImg(\"" + upload + "\",\"Img_" + FieldName + "\");");
                }
                if (UploadType.Equals("SmallFileType"))
                {
                    builder.Append("  parent.DealwithUploadPic(\"" + thumbnailPath + "\",\"txt_" + FieldName + "\");parent.DealwithUploadImg(\"" + upload + "\",\"Img_" + FieldName + "\");");
                }
            }
            builder.Append("</script>");
            Page.ClientScript.RegisterStartupScript(base.GetType(), "UpdateParent", builder.ToString());
        }
        //根据字段类型,完成初始化
        private void InitFileExtArr()
        {
            fieldMod = fieldBll.GetModelByFieldName(ModelID, FieldName);
            if (fieldMod.FieldID < 1) { RepStr("[" + FieldName + "]字段不存在"); }
            if (fieldMod.FieldID > 0)
            {
                string[] Setting = fieldMod.Content.Split(new char[] { ',' });
                if (fieldMod.FieldType == "PicType")
                {
                    show1.Visible = true; show2.Visible = true;
                    int isWater = DataConverter.CLng(Setting[0].Split(new char[] { '=' })[1]);
                    RadioButtonList1.SelectedValue = (isWater == 1 ? "1" : "0");
                    m_MaxFileSize = DataConverter.CLng(Setting[1].Split(new char[] { '=' })[1]);
                    ViewState["MaxFileSize"] = Setting[1].Split(new char[] { '=' })[1];
                    UploadType = "PicType";
                }
                if (fieldMod.FieldType == "FileType")
                {
                    string chkSize = Setting[0].Split(new char[] { '=' })[1];
                    string SizeField = Setting[1].Split(new char[] { '=' })[1];
                    ViewState["SizeField"] = SizeField;
                    m_MaxFileSize = DataConverter.CLng(Setting[2].Split(new char[] { '=' })[1]);
                    ViewState["MaxFileSize"] = Setting[2].Split(new char[] { '=' })[1];
                    UploadType = "FileType";
                }
                if (fieldMod.FieldType == "SmallFileType")
                {
                    m_MaxFileSize = DataConverter.CLng(Setting[0].Split(new char[] { '=' })[1]);
                    ViewState["MaxFileSize"] = Setting[0].Split(new char[] { '=' })[1];
                    UploadType = "SmallFileType";
                }
            }
        }
        private void RepStr(string msg) { Response.Clear(); Response.Write(msg); Response.Flush(); Response.End(); }
        private void ReturnManage(string manage)
        {
            if (!string.IsNullOrEmpty(manage))
            {
                StringBuilder builder = new StringBuilder();
                builder.Append("<script language=\"javascript\" type=\"text/javascript\">");
                builder.Append("   parent.DealwithUploadErrMessage(\"" + manage + "\");");
                builder.Append("</script>");
                Page.ClientScript.RegisterStartupScript(base.GetType(), "UpdateParent", builder.ToString());
            }
        }

    }
}