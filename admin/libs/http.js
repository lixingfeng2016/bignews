// 沙箱函数
(function(w) {
  var baseurl = "http://localhost:8080/api/v1";
  var BigNew = {
    baseurl: baseurl,
    user_login: baseurl + "/admin/user/login", //用户登录
    user_info: baseurl + "/admin/user/info", //用户信息
    user_detail: baseurl + "/admin/user/detail", //用户详情
    user_edit: baseurl + "/admin/user/edit", //用户编辑
    category_list: baseurl + "/admin/category/list", //文章类别查询
    category_add: baseurl + "/admin/category/add", //文章类别新增
    category_search: baseurl + "/admin/category/search", //文章类别搜索
    category_edit: baseurl + "/admin/category/edit", //文章类别编辑
    category_delete: baseurl + "/admin/category/delete", //文章类别删除
    article_query: baseurl + "/admin/article/query", //文章搜索
    article_publish: baseurl + "/admin/article/publish", //文章发布
    article_search: baseurl + "/admin/article/search", //文章信息查询
    article_edit: baseurl + "/admin/article/edit", //文章编辑
    article_delete: baseurl + "/admin/article/delete", //文章删除
    comment_list: baseurl + "/admin/comment/search", //文章评论列表
    comment_pass: baseurl + "/admin/comment/pass", //文章评论通过
    comment_reject: baseurl + "/admin/comment/reject", //文章评论不通过
    comment_delete: baseurl + "/admin/comment/delete" //文章评论删除
  };

  w.BigNew = BigNew;
})(window);
